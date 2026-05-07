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

// ========== Security Headers Middleware (ALL responses) ==========
app.use('*', async (c, next) => {
  await next()
  c.header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  c.header('X-Content-Type-Options', 'nosniff')
  c.header('X-Frame-Options', 'SAMEORIGIN')
  c.header('Referrer-Policy', 'strict-origin-when-cross-origin')
  c.header('Permissions-Policy', 'camera=(), microphone=(), geolocation=(self)')
  c.header('X-XSS-Protection', '1; mode=block')
})

app.use('/api/*', cors())

// ========== Organization JSON-LD (shared across all pages) ==========
const orgSchema = `<script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.pxgsiteworks.com/#organization",
  "name": "PXG Siteworks",
  "alternateName": "PXG Siteworks LLC",
  "url": "https://www.pxgsiteworks.com",
  "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697c0eafb66b5201f6fc0bd3/c05a42444_PXGLOGO.PNG",
  "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697c0eafb66b5201f6fc0bd3/fc6b71353_20240201_150031.jpg",
  "description": "Professional excavation, land clearing, grading, and site preparation services serving Wilmington NC and Southeastern North Carolina since 2005. Licensed, insured, and trusted by homeowners and builders.",
  "telephone": "+1-910-515-7779",
  "email": "info@pxgsiteworks.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2415 Castle Hayne Rd",
    "addressLocality": "Wilmington",
    "addressRegion": "NC",
    "postalCode": "28401",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.2257,
    "longitude": -77.9577
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "07:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61585866854919"
  ],
  "areaServed": [
    {"@type": "City", "name": "Wilmington", "address": {"@type": "PostalAddress", "addressRegion": "NC"}},
    {"@type": "City", "name": "Hampstead", "address": {"@type": "PostalAddress", "addressRegion": "NC"}},
    {"@type": "City", "name": "Sneads Ferry", "address": {"@type": "PostalAddress", "addressRegion": "NC"}},
    {"@type": "City", "name": "Leland", "address": {"@type": "PostalAddress", "addressRegion": "NC"}}
  ],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
      "author": {"@type": "Person", "name": "Sarah & Mike T."},
      "reviewBody": "PXG Siteworks did an incredible job clearing our lot and prepping the foundation. They were on time, professional, and the results exceeded our expectations."
    },
    {
      "@type": "Review",
      "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
      "author": {"@type": "Person", "name": "David R."},
      "reviewBody": "We've used PXG for multiple subdivision developments. Their grading work is precise and they consistently deliver on schedule. Highly recommended for any builder."
    },
    {
      "@type": "Review",
      "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
      "author": {"@type": "Person", "name": "Jennifer L."},
      "reviewBody": "From the initial quote to the final grade, the entire process was smooth. They communicated every step and their pricing was fair and transparent."
    }
  ]
}</script>`

const websiteSchema = `<script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "PXG Siteworks",
  "url": "https://www.pxgsiteworks.com",
  "publisher": {"@id": "https://www.pxgsiteworks.com/#organization"}
}</script>`

// Helper: build breadcrumb JSON-LD
function breadcrumb(items: {name: string; url: string}[]): string {
  return `<script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [${items.map((item, i) => `
    {"@type": "ListItem", "position": ${i + 1}, "name": "${item.name}", "item": "${item.url}"}`).join(',')}
  ]
}</script>`
}

// Helper: build Service JSON-LD
function serviceSchema(name: string, desc: string, url: string): string {
  return `<script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "${name}",
  "description": "${desc.replace(/"/g, '\\"')}",
  "url": "${url}",
  "provider": {"@id": "https://www.pxgsiteworks.com/#organization"},
  "areaServed": {"@type": "State", "name": "North Carolina"},
  "serviceType": "Excavation and Site Development"
}</script>`
}

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

// ========== robots.txt — ALLOW AI crawlers ==========
app.get('/robots.txt', (c) => {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /cdn-cgi/

# AI Crawlers - ALLOWED
User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: CCBot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Bytespider
Allow: /

Sitemap: https://www.pxgsiteworks.com/sitemap.xml
`
  return new Response(robotsTxt, { headers: { 'Content-Type': 'text/plain' } })
})

// ========== Sitemap with lastmod dates ==========
app.get('/sitemap.xml', (c) => {
  const baseUrl = 'https://www.pxgsiteworks.com'
  const pages = [
    { path: '/', priority: '1.0', freq: 'weekly', lastmod: '2026-05-07' },
    { path: '/about', priority: '0.8', freq: 'monthly', lastmod: '2026-05-07' },
    { path: '/contact', priority: '0.9', freq: 'monthly', lastmod: '2026-05-07' },
    { path: '/faq', priority: '0.7', freq: 'monthly', lastmod: '2026-05-07' },
    { path: '/blog', priority: '0.8', freq: 'weekly', lastmod: '2026-05-07' },
    { path: '/careers', priority: '0.7', freq: 'monthly', lastmod: '2026-05-07' },
    { path: '/calculator', priority: '0.9', freq: 'monthly', lastmod: '2026-05-07' },
    { path: '/service-areas', priority: '0.8', freq: 'monthly', lastmod: '2026-05-07' },
    { path: '/services/excavation', priority: '0.8', freq: 'monthly', lastmod: '2026-05-07' },
    { path: '/services/site-grading', priority: '0.8', freq: 'monthly', lastmod: '2026-05-07' },
    { path: '/services/land-clearing', priority: '0.8', freq: 'monthly', lastmod: '2026-05-07' },
    { path: '/services/drainage-solutions', priority: '0.8', freq: 'monthly', lastmod: '2026-05-07' },
    { path: '/services/hauling-demolition', priority: '0.8', freq: 'monthly', lastmod: '2026-05-07' },
    { path: '/services/site-preparation', priority: '0.8', freq: 'monthly', lastmod: '2026-05-07' },
    { path: '/services/utilities', priority: '0.8', freq: 'monthly', lastmod: '2026-05-07' },
    { path: '/blog/land-clearing-cost-wilmington-nc-2026', priority: '0.7', freq: 'monthly', lastmod: '2026-02-12' },
    { path: '/blog/demolition-cost-wilmington-nc-2026', priority: '0.7', freq: 'monthly', lastmod: '2026-02-11' },
    { path: '/blog/site-grading-cost-wilmington-nc-2026', priority: '0.7', freq: 'monthly', lastmod: '2026-02-10' },
  ]
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${baseUrl}${p.path}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } })
})

// ========== Page Routes with SEO Optimized Titles, Descriptions & JSON-LD ==========

// Homepage
app.get('/', (c) => c.html(layout(homePage(), {
  title: 'PXG Siteworks | Excavation & Site Work Wilmington NC',
  description: 'PXG Siteworks provides expert excavation, land clearing, grading, drainage, and site preparation in Wilmington NC. Licensed, insured, 20+ years experience. Free estimates.',
  canonical: 'https://www.pxgsiteworks.com/',
  jsonLd: orgSchema + websiteSchema + breadcrumb([{name:'Home', url:'https://www.pxgsiteworks.com/'}])
})))

// About
app.get('/about', (c) => c.html(layout(aboutPage(), {
  title: 'About PXG Siteworks | Wilmington NC Excavation Contractor',
  description: 'PXG Siteworks is a locally owned excavation and site development company serving Wilmington, Hampstead, Sneads Ferry, and Leland NC with 20+ years of experience.',
  canonical: 'https://www.pxgsiteworks.com/about',
  currentPage: 'about',
  jsonLd: orgSchema + breadcrumb([{name:'Home', url:'https://www.pxgsiteworks.com/'}, {name:'About', url:'https://www.pxgsiteworks.com/about'}])
})))

// FAQ with FAQPage schema
app.get('/faq', (c) => {
  const faqSchemaLd = `<script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "Do you offer free estimates?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We offer free estimates for most excavation, grading, and site work projects. Contact us to schedule a site visit."}},
    {"@type": "Question", "name": "What areas do you serve?", "acceptedAnswer": {"@type": "Answer", "text": "We serve Wilmington, Hampstead, Sneads Ferry, Leland, and surrounding areas throughout Southeastern North Carolina including New Hanover, Brunswick, Pender, and Onslow Counties."}},
    {"@type": "Question", "name": "How soon can you start?", "acceptedAnswer": {"@type": "Answer", "text": "Start times vary based on workload and job size. We do our best to schedule quickly and keep you updated on timelines. Most projects begin within 1-2 weeks of approval."}},
    {"@type": "Question", "name": "Do you do residential and commercial work?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We handle both residential and commercial excavation and site development projects of all sizes, from small residential lots to large commercial developments."}},
    {"@type": "Question", "name": "Do you handle land clearing and grading?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We offer comprehensive land clearing, debris removal, rough grading, and finish grading services for residential and commercial properties."}},
    {"@type": "Question", "name": "Can you install culverts and drainage?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We install culverts and provide drainage solutions including French drains, catch basins, and stormwater management systems to prevent washouts and standing water."}},
    {"@type": "Question", "name": "Do you install underground utilities?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We provide trenching and underground utility installation for water lines, sewer lines, electrical conduit, and drainage systems."}},
    {"@type": "Question", "name": "How do I get started?", "acceptedAnswer": {"@type": "Answer", "text": "Call us at (910) 515-7779 or fill out our online quote form. We will ask a few quick questions, schedule a site visit if needed, and provide a clear, detailed estimate."}}
  ]
}</script>`
  return c.html(layout(faqPage(), {
    title: 'FAQ | Excavation & Site Work Questions - PXG Siteworks',
    description: 'Get answers to common questions about excavation, grading, land clearing, drainage, utility installation, and site work services in Wilmington NC. Free estimates available.',
    canonical: 'https://www.pxgsiteworks.com/faq',
    currentPage: 'faq',
    jsonLd: orgSchema + faqSchemaLd + breadcrumb([{name:'Home', url:'https://www.pxgsiteworks.com/'}, {name:'FAQ', url:'https://www.pxgsiteworks.com/faq'}])
  }))
})

// Contact
app.get('/contact', (c) => c.html(layout(contactPage(), {
  title: 'Contact PXG Siteworks | Free Excavation Quote Wilmington NC',
  description: 'Contact PXG Siteworks for a free excavation, grading, or site work quote in Wilmington NC. Call (910) 515-7779 or send a message. We respond within 24 hours.',
  canonical: 'https://www.pxgsiteworks.com/contact',
  currentPage: 'contact',
  jsonLd: orgSchema + breadcrumb([{name:'Home', url:'https://www.pxgsiteworks.com/'}, {name:'Contact', url:'https://www.pxgsiteworks.com/contact'}])
})))

// Careers
app.get('/careers', (c) => c.html(layout(careersPage(), {
  title: 'Careers at PXG Siteworks | Excavation Jobs Wilmington NC',
  description: 'Join PXG Siteworks! We are hiring excavator operators, site foremen, mechanics, and CDL drivers in Wilmington NC. Competitive pay, benefits, and paid time off.',
  canonical: 'https://www.pxgsiteworks.com/careers',
  currentPage: 'careers',
  jsonLd: orgSchema + breadcrumb([{name:'Home', url:'https://www.pxgsiteworks.com/'}, {name:'Careers', url:'https://www.pxgsiteworks.com/careers'}])
})))

// Thank You
app.get('/thank-you', (c) => c.html(layout(thankYouPage(), {
  title: 'Thank You | PXG Siteworks Wilmington NC',
  description: 'Thank you for contacting PXG Siteworks. We will respond to your inquiry within 24 hours. Call (910) 515-7779 for immediate assistance.',
  canonical: 'https://www.pxgsiteworks.com/thank-you',
  jsonLd: orgSchema
})))

// Service Areas
app.get('/service-areas', (c) => c.html(layout(serviceAreasPage(), {
  title: 'Service Areas | Wilmington, Hampstead, Leland NC - PXG Siteworks',
  description: 'PXG Siteworks serves Wilmington, Hampstead, Sneads Ferry, Leland, and all of New Hanover, Brunswick, Pender, and Onslow Counties with professional excavation services.',
  canonical: 'https://www.pxgsiteworks.com/service-areas',
  currentPage: 'service-areas',
  jsonLd: orgSchema + breadcrumb([{name:'Home', url:'https://www.pxgsiteworks.com/'}, {name:'Service Areas', url:'https://www.pxgsiteworks.com/service-areas'}])
})))

// Blog
app.get('/blog', (c) => c.html(layout(blogPage(), {
  title: 'Excavation & Site Work Blog | PXG Siteworks Wilmington NC',
  description: 'Expert guides on excavation costs, land clearing pricing, site grading tips, and construction advice for Wilmington NC homeowners and builders. Updated for 2026.',
  canonical: 'https://www.pxgsiteworks.com/blog',
  currentPage: 'blog',
  jsonLd: orgSchema + breadcrumb([{name:'Home', url:'https://www.pxgsiteworks.com/'}, {name:'Blog', url:'https://www.pxgsiteworks.com/blog'}])
})))

// Blog Posts with Article schema
const blogMeta: Record<string, {title: string; desc: string; date: string; author: string}> = {
  'land-clearing-cost-wilmington-nc-2026': {
    title: 'Land Clearing Cost in Wilmington NC (2026 Guide)',
    desc: 'Complete 2026 guide to land clearing costs in Wilmington NC. Light clearing $1,500-$3,000/acre, heavy clearing $4,000-$8,000/acre. Factors, tips, and how to save.',
    date: '2026-02-12',
    author: 'PXG Siteworks Team'
  },
  'demolition-cost-wilmington-nc-2026': {
    title: 'Demolition Costs in Wilmington NC: 2026 Pricing Guide',
    desc: 'Demolition cost guide for Wilmington NC in 2026. Small structures $1,000-$5,000, residential homes $8,000-$25,000. Full pricing breakdown and what to expect.',
    date: '2026-02-11',
    author: 'PXG Siteworks Team'
  },
  'site-grading-cost-wilmington-nc-2026': {
    title: 'Site Grading Costs in Wilmington NC (2026 Pricing)',
    desc: 'Site grading cost guide for Wilmington NC. Residential lots $1,000-$5,000, large lots $3,000-$10,000. Why proper grading matters and what drives pricing.',
    date: '2026-02-10',
    author: 'PXG Siteworks Team'
  }
}

app.get('/blog/:slug', (c) => {
  const slug = c.req.param('slug')
  const meta = blogMeta[slug]
  const title = meta?.title || `${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - PXG Siteworks Blog`
  const desc = meta?.desc || 'Expert excavation and site work guide from PXG Siteworks in Wilmington NC. Practical advice for homeowners and builders.'
  
  const articleSchema = meta ? `<script type="application/ld+json">{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${meta.title}",
  "description": "${meta.desc.replace(/"/g, '\\"')}",
  "datePublished": "${meta.date}",
  "dateModified": "${meta.date}",
  "author": {"@type": "Person", "name": "${meta.author}", "jobTitle": "Site Development Expert", "worksFor": {"@id": "https://www.pxgsiteworks.com/#organization"}},
  "publisher": {"@id": "https://www.pxgsiteworks.com/#organization"},
  "url": "https://www.pxgsiteworks.com/blog/${slug}",
  "mainEntityOfPage": "https://www.pxgsiteworks.com/blog/${slug}"
}</script>` : ''

  return c.html(layout(blogPostPage(slug), {
    title: title,
    description: desc,
    canonical: `https://www.pxgsiteworks.com/blog/${slug}`,
    currentPage: 'blog',
    jsonLd: orgSchema + articleSchema + breadcrumb([{name:'Home', url:'https://www.pxgsiteworks.com/'}, {name:'Blog', url:'https://www.pxgsiteworks.com/blog'}, {name: meta?.title || slug, url:`https://www.pxgsiteworks.com/blog/${slug}`}])
  }))
})

// Calculator
app.get('/calculator', (c) => c.html(layout(calculatorPage(), {
  title: 'Land Clearing Cost Calculator | Free Quote - PXG Siteworks',
  description: 'Get a free instant land clearing cost estimate for your Wilmington NC property. Answer a few questions and receive a detailed price breakdown in under 2 minutes.',
  canonical: 'https://www.pxgsiteworks.com/calculator',
  currentPage: 'calculator',
  jsonLd: orgSchema + breadcrumb([{name:'Home', url:'https://www.pxgsiteworks.com/'}, {name:'Calculator', url:'https://www.pxgsiteworks.com/calculator'}])
})))

// ========== Service Pages with proper meta + Service schema ==========
const serviceRoutes: Record<string, { title: string; desc: string }> = {
  'excavation': { 
    title: 'Excavation Services Wilmington NC', 
    desc: 'Professional excavation and earthwork in Wilmington NC. Foundation digging, basement excavation, trenching, backfill, and compaction. Licensed, insured, free estimates.' 
  },
  'site-grading': { 
    title: 'Site Grading & Land Leveling Wilmington NC', 
    desc: 'Expert site grading and land leveling in Wilmington NC. Proper drainage setup, foundation prep, erosion control, rough and finish grading for residential and commercial.' 
  },
  'land-clearing': { 
    title: 'Land Clearing Services Wilmington NC', 
    desc: 'Complete land clearing in Wilmington NC. Tree removal, brush clearing, stump grinding, debris hauling, and lot preparation. Residential and commercial projects.' 
  },
  'drainage-solutions': { 
    title: 'Drainage Solutions & Installation Wilmington NC', 
    desc: 'Expert drainage installation in Wilmington NC. French drains, catch basins, stormwater management, and erosion prevention to protect your property from water damage.' 
  },
  'hauling-demolition': { 
    title: 'Hauling & Demolition Services Wilmington NC', 
    desc: 'Safe demolition and material hauling in Wilmington NC. Structure removal, concrete demolition, debris hauling, and site cleanup. Licensed and insured contractor.' 
  },
  'site-preparation': { 
    title: 'Site Preparation Services Wilmington NC', 
    desc: 'Complete site preparation in Wilmington NC. Clearing, grading, utility prep, access roads, and erosion control for residential and commercial construction projects.' 
  },
  'utilities': { 
    title: 'Utility Trenching & Installation Wilmington NC', 
    desc: 'Professional utility trenching in Wilmington NC. Water lines, sewer installation, storm drainage, culverts, catch basins, and electrical conduit trenching services.' 
  },
  'driveway': { 
    title: 'Driveway Grading & Installation Wilmington NC', 
    desc: 'Professional driveway grading, gravel installation, and base preparation in Wilmington NC. Culvert installation and drainage solutions for residential driveways.' 
  },
  'grading': { 
    title: 'Professional Grading Services Wilmington NC', 
    desc: 'Rough grading, fine grading, lot leveling, drainage grading, fill dirt work, and compaction services in Wilmington NC. Accurate grading for every project.' 
  },
  'drainage': { 
    title: 'Drainage Services Wilmington NC', 
    desc: 'Comprehensive yard drainage, French drains, catch basins, culverts, stormwater management, and erosion control services in Wilmington NC and surrounding areas.' 
  },
}

for (const [slug, meta] of Object.entries(serviceRoutes)) {
  app.get(`/services/${slug}`, (c) => c.html(layout(
    servicePage(slug), 
    { 
      title: `${meta.title} | PXG Siteworks`, 
      description: meta.desc, 
      canonical: `https://www.pxgsiteworks.com/services/${slug}`, 
      currentPage: 'services',
      jsonLd: orgSchema + serviceSchema(meta.title, meta.desc, `https://www.pxgsiteworks.com/services/${slug}`) + breadcrumb([{name:'Home', url:'https://www.pxgsiteworks.com/'}, {name:'Services', url:'https://www.pxgsiteworks.com/#services'}, {name: meta.title, url:`https://www.pxgsiteworks.com/services/${slug}`}])
    }
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
