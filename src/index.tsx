import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { layout } from './layout'
import { homePage } from './pages/home'
import { aboutPage } from './pages/about'
import { faqPage } from './pages/faq'
import { contactPage } from './pages/contact'
import { careersPage } from './pages/careers'
import { thankYouPage } from './pages/thankyou'
import { serviceAreasPage } from './pages/service-areas'
import { blogPage } from './pages/blog'
import { blogPostPage } from './pages/blog-post'
import { calculatorPage } from './pages/calculator'
import { servicePage } from './pages/service'
import { calculateEstimate, generateCustomerEmailHtml, generateAdminEmailText } from './lib/calculator-logic'

type Bindings = {
  DB: D1Database
  RESEND_API_KEY: string
  GOOGLE_ADS_ID: string
  FACEBOOK_PIXEL_ID: string
  FACEBOOK_CONVERSIONS_API_TOKEN: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.use('/api/*', cors())

// ========== API Routes ==========

// Contact form submission
app.post('/api/contact', async (c) => {
  try {
    const { name, email, phone, subject, message } = await c.req.json()
    
    if (!name || !email || !message) {
      return c.json({ error: 'Name, email, and message are required' }, 400)
    }

    // Store in D1
    try {
      await c.env.DB.prepare(
        'INSERT INTO contact_messages (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)'
      ).bind(name, email, phone || '', subject || 'General Inquiry', message).run()
    } catch (dbErr) {
      console.error('DB insert error:', dbErr)
    }

    // Send emails via Resend
    const resendKey = c.env.RESEND_API_KEY
    if (resendKey) {
      const emailBody = `<h2>New Contact Form Submission</h2>
<p><strong>From:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
<p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
<hr><p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>`

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: 'PXG Siteworks <noreply@pxgsiteworks.com>',
          to: ['info@pxgsiteworks.com'],
          subject: `Contact Form: ${subject || 'General Inquiry'}`,
          html: emailBody
        })
      })

      // Confirmation email to customer
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: 'PXG Siteworks <noreply@pxgsiteworks.com>',
          to: [email],
          subject: 'We received your message - PXG Siteworks',
          html: `<h2>Thank you for contacting PXG Siteworks!</h2>
<p>Hi ${name},</p>
<p>We've received your message and will get back to you as soon as possible, typically within 24 hours.</p>
<p>If you have any urgent questions, feel free to call us at (910) 515-7779.</p>
<p>Best regards,<br>PXG Siteworks Team</p>`
        })
      })
    }

    return c.json({ success: true })
  } catch (error: any) {
    console.error('Contact form error:', error)
    return c.json({ error: 'Failed to send message' }, 500)
  }
})

// Land clearing calculator quote
app.post('/api/quote', async (c) => {
  try {
    const payload = await c.req.json()
    
    if (!payload.customer_name || !payload.customer_email) {
      return c.json({ error: 'Name and email are required' }, 400)
    }

    const estimate = calculateEstimate(payload)

    // Store in D1
    try {
      await c.env.DB.prepare(
        `INSERT INTO land_clearing_quotes 
         (customer_name, customer_email, customer_phone, property_address, lot_size_acres, tree_density, access_difficulty, stump_removal, derooting, debris_haul, onsite_disposal, notes, estimated_cost, cost_breakdown, project_timeline, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(
        payload.customer_name, payload.customer_email, payload.customer_phone || '',
        payload.property_address || '', payload.lot_size_acres || 0, payload.tree_density || '',
        payload.access_difficulty || '', payload.stump_removal ? 1 : 0, payload.derooting ? 1 : 0,
        payload.debris_haul ? 1 : 0, payload.onsite_disposal ? 1 : 0, payload.notes || '',
        estimate.total, JSON.stringify(estimate.breakdown), estimate.timeline, 'pending'
      ).run()
    } catch (dbErr) {
      console.error('DB insert error:', dbErr)
    }

    // Send emails via Resend
    const resendKey = c.env.RESEND_API_KEY
    if (resendKey) {
      await Promise.all([
        fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: 'PXG Siteworks <noreply@pxgsiteworks.com>',
            to: [payload.customer_email],
            subject: 'Your Land Clearing Quote - PXG Siteworks',
            html: generateCustomerEmailHtml(payload, estimate)
          })
        }),
        fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: 'PXG Siteworks Calculator <noreply@pxgsiteworks.com>',
            to: ['info@pxgsiteworks.com'],
            subject: `New Land Clearing Quote - ${payload.customer_name}`,
            text: generateAdminEmailText(payload, estimate)
          })
        })
      ])
    }

    // Facebook Conversions API
    const fbToken = c.env.FACEBOOK_CONVERSIONS_API_TOKEN
    if (fbToken) {
      try {
        const encoder = new TextEncoder()
        const emailHash = await crypto.subtle.digest('SHA-256', encoder.encode(payload.customer_email.toLowerCase().trim()))
        const hashedEmail = Array.from(new Uint8Array(emailHash)).map(b => b.toString(16).padStart(2, '0')).join('')
        
        await fetch(`https://graph.facebook.com/v25.0/1436928034468748/events?access_token=${fbToken}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            data: [{
              event_name: 'Lead',
              event_time: Math.floor(Date.now() / 1000),
              event_source_url: c.req.header('referer') || 'https://pxgsiteworks.com',
              action_source: 'website',
              user_data: { em: [hashedEmail] }
            }]
          })
        })
      } catch (fbErr) { console.error('FB API error:', fbErr) }
    }

    return c.json({ success: true, estimate })
  } catch (error: any) {
    console.error('Quote error:', error)
    return c.json({ error: 'Failed to generate quote' }, 500)
  }
})

// Tracking IDs
app.get('/api/tracking/google', (c) => {
  return c.json({ googleAdsId: c.env.GOOGLE_ADS_ID || null })
})

app.get('/api/tracking/facebook', (c) => {
  return c.json({ facebookPixelId: c.env.FACEBOOK_PIXEL_ID || null })
})

// Sitemap
app.get('/sitemap.xml', (c) => {
  const baseUrl = 'https://www.pxgsiteworks.com'
  const date = new Date().toISOString().split('T')[0]
  const pages = [
    { path: '/', priority: '1.0', freq: 'weekly' },
    { path: '/about', priority: '0.8', freq: 'monthly' },
    { path: '/contact', priority: '0.9', freq: 'monthly' },
    { path: '/faq', priority: '0.7', freq: 'monthly' },
    { path: '/blog', priority: '0.8', freq: 'weekly' },
    { path: '/careers', priority: '0.7', freq: 'monthly' },
    { path: '/calculator', priority: '0.9', freq: 'monthly' },
    { path: '/service-areas', priority: '0.8', freq: 'monthly' },
    { path: '/services/excavation', priority: '0.8', freq: 'monthly' },
    { path: '/services/site-grading', priority: '0.8', freq: 'monthly' },
    { path: '/services/land-clearing', priority: '0.8', freq: 'monthly' },
    { path: '/services/drainage-solutions', priority: '0.8', freq: 'monthly' },
    { path: '/services/hauling-demolition', priority: '0.8', freq: 'monthly' },
    { path: '/services/site-preparation', priority: '0.8', freq: 'monthly' },
    { path: '/services/utilities', priority: '0.8', freq: 'monthly' },
  ]
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${baseUrl}${p.path}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } })
})

// ========== Page Routes ==========

app.get('/', (c) => c.html(layout(homePage(), { title: 'PXG Siteworks - Professional Excavation & Site Development | Wilmington, NC', description: 'Expert excavation, land clearing, grading, and site preparation services in Wilmington, NC. Licensed & insured. Serving New Hanover, Brunswick, Pender, and Onslow Counties.', canonical: 'https://www.pxgsiteworks.com/' })))

app.get('/about', (c) => c.html(layout(aboutPage(), { title: 'About PXG Siteworks - Trusted Excavation Contractor | Wilmington NC', description: 'Learn about PXG Siteworks, a locally owned excavation and site development company serving Southeastern North Carolina.', canonical: 'https://www.pxgsiteworks.com/about', currentPage: 'about' })))

app.get('/faq', (c) => c.html(layout(faqPage(), { title: 'FAQ - Excavation & Site Work Questions | PXG Siteworks', description: 'Common questions about excavation, grading, land clearing, utilities and site work services.', canonical: 'https://www.pxgsiteworks.com/faq', currentPage: 'faq' })))

app.get('/contact', (c) => c.html(layout(contactPage(), { title: 'Contact PXG Siteworks - Get a Free Quote | Wilmington, NC', description: 'Contact PXG Siteworks for a free project quote. Professional excavation and site development services.', canonical: 'https://www.pxgsiteworks.com/contact', currentPage: 'contact' })))

app.get('/careers', (c) => c.html(layout(careersPage(), { title: 'Career Opportunities at PXG Siteworks | Wilmington, NC', description: 'Join our team! PXG Siteworks is hiring skilled excavation professionals.', canonical: 'https://www.pxgsiteworks.com/careers', currentPage: 'careers' })))

app.get('/thank-you', (c) => c.html(layout(thankYouPage(), { title: 'Thank You - PXG Siteworks', description: 'Thank you for contacting PXG Siteworks.', canonical: 'https://www.pxgsiteworks.com/thank-you' })))

app.get('/service-areas', (c) => c.html(layout(serviceAreasPage(), { title: 'Service Areas - Wilmington, Hampstead, Sneads Ferry, Leland | PXG Siteworks', description: 'Excavation and site work service areas in Southeastern North Carolina.', canonical: 'https://www.pxgsiteworks.com/service-areas', currentPage: 'service-areas' })))

app.get('/blog', (c) => c.html(layout(blogPage(), { title: 'Expert Guides & Tips - PXG Siteworks Blog', description: 'Expert advice on excavation, land clearing, site preparation, and construction in Wilmington NC.', canonical: 'https://www.pxgsiteworks.com/blog', currentPage: 'blog' })))

app.get('/blog/:slug', (c) => {
  const slug = c.req.param('slug')
  return c.html(layout(blogPostPage(slug), { title: `${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - PXG Siteworks Blog`, description: 'Expert excavation and site work guide from PXG Siteworks.', canonical: `https://www.pxgsiteworks.com/blog/${slug}`, currentPage: 'blog' }))
})

app.get('/calculator', (c) => c.html(layout(calculatorPage(), { title: 'Land Clearing Cost Calculator - PXG Siteworks', description: 'Get an instant estimate for your land clearing project in Wilmington, NC.', canonical: 'https://www.pxgsiteworks.com/calculator', currentPage: 'calculator' })))

// Service pages
const serviceRoutes: Record<string, { title: string; desc: string }> = {
  'excavation': { title: 'Excavation & Earthwork Services', desc: 'Professional excavation and earthwork services.' },
  'site-grading': { title: 'Site Grading Services', desc: 'Professional grading and leveling services.' },
  'land-clearing': { title: 'Land Clearing Services', desc: 'Complete land clearing services.' },
  'drainage-solutions': { title: 'Drainage Solutions', desc: 'Expert drainage installation and stormwater management.' },
  'hauling-demolition': { title: 'Hauling & Demolition', desc: 'Efficient demolition services and material hauling.' },
  'site-preparation': { title: 'Site Preparation', desc: 'Complete site prep for construction.' },
  'utilities': { title: 'Utility Trenching & Installation', desc: 'Professional underground utility services.' },
  'driveway': { title: 'Driveway Services', desc: 'Professional driveway installation and grading.' },
  'grading': { title: 'Grading Services', desc: 'Professional grading and leveling.' },
  'drainage': { title: 'Drainage Services', desc: 'Comprehensive drainage solutions.' },
}

for (const [slug, meta] of Object.entries(serviceRoutes)) {
  app.get(`/services/${slug}`, (c) => c.html(layout(
    servicePage(slug), 
    { title: `${meta.title} - PXG Siteworks | Wilmington, NC`, description: meta.desc, canonical: `https://www.pxgsiteworks.com/services/${slug}`, currentPage: 'services' }
  )))
}

// Legacy URL redirects from the old Base44 app
const legacyRedirects: Record<string, string> = {
  '/Home': '/',
  '/About': '/about',
  '/FAQ': '/faq',
  '/ContactUs': '/contact',
  '/Careers': '/careers',
  '/ThankYou': '/thank-you',
  '/ServiceAreas': '/service-areas',
  '/Blog': '/blog',
  '/LandClearingCalculator': '/calculator',
  '/Excavation': '/services/excavation',
  '/SiteGrading': '/services/site-grading',
  '/LandClearing': '/services/land-clearing',
  '/DrainageSolutions': '/services/drainage-solutions',
  '/HaulingDemolition': '/services/hauling-demolition',
  '/SitePreparation': '/services/site-preparation',
  '/Utilities': '/services/utilities',
  '/Driveway': '/services/driveway',
  '/Grading': '/services/grading',
  '/Drainage': '/services/drainage',
  '/GradingSitePrep': '/services/site-grading',
  '/ExcavationWilmington': '/services/excavation',
  '/LandClearingWilmington': '/services/land-clearing',
}

for (const [old, newPath] of Object.entries(legacyRedirects)) {
  app.get(old, (c) => c.redirect(newPath, 301))
}

export default app
