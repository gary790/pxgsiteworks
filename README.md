# PXG Siteworks - Professional Excavation & Site Development

## Project Overview
- **Name**: PXG Siteworks
- **Domain**: www.pxgsiteworks.com
- **Production URL**: https://pxg-siteworks.pages.dev
- **Goal**: Professional business website for PXG Siteworks, an excavation and site development company in Wilmington, NC
- **Tech Stack**: Hono + TypeScript + TailwindCSS (CDN) on Cloudflare Pages
- **Last Updated**: 2026-05-07

## Features

### Completed
- **Home Page**: Cinematic hero, stats bar, services grid, about section, project gallery with keyboard-accessible lightbox, calculator CTA, testimonials, contact form
- **Service Pages** (10): Excavation, Site Grading, Land Clearing, Drainage Solutions, Hauling & Demolition, Site Preparation, Utilities, Driveway, Grading, Drainage - each with rich content, process timeline, features, and CTAs
- **Land Clearing Calculator**: Multi-step quote calculator with instant estimates and email delivery via Resend
- **Contact Form**: With Resend email integration (business notification + customer confirmation)
- **Blog**: 3 SEO cost guide articles (1500+ words each): Land Clearing, Demolition, Site Grading
- **About Page**: Rich company history, mission & values, stats, service descriptions (800+ words)
- **FAQ Page**: 12 detailed Q&As with expandable accordion + 6-step process section
- **Careers Page**: 4 job listings with full descriptions, requirements, benefits, and perks
- **Service Areas Page**: Expanded coverage details for 4 counties with rich descriptions
- **SEO**: Full meta tags, Open Graph, Twitter Cards, canonical URLs, sitemap.xml with lastmod dates
- **Analytics**: Google Analytics (GA4), Google Tag Manager, Google Ads conversion tracking, Facebook Pixel + Conversions API
- **Legacy URL Redirects**: All old Base44 URLs redirect to new clean URLs with 301
- **D1 Database**: Stores contact messages and land clearing quotes
- **Responsive Design**: Full mobile support with hamburger menu and floating call button
- **Scroll Animations**: Intersection Observer-based reveal animations

### SEO & AI Visibility Improvements (Phases 1-3 Complete)
- **Security Headers**: HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, X-XSS-Protection on all responses
- **robots.txt**: AI crawlers allowed (GPTBot, Google-Extended, ClaudeBot, anthropic-ai, CCBot, Applebot-Extended, PerplexityBot, Bytespider)
- **JSON-LD Structured Data**: LocalBusiness/Organization schema on every page, FAQPage schema on /faq, Article schema on blog posts, Service schema on service pages, BreadcrumbList on all pages, WebSite schema on homepage
- **Meta Titles**: Optimized to 50-60 characters with location keywords
- **Meta Descriptions**: 120-160 characters with clear value propositions
- **Accessibility (WCAG 4.1.2)**: All form inputs have associated labels with `for=` attributes, `autocomplete` attributes on form fields, `role="radiogroup"` and `aria-checked` on calculator option buttons, `aria-label` on lightbox close button, `aria-expanded` on FAQ toggles, keyboard navigation on gallery items (tabindex, Enter/Space handlers, Escape to close), `title` attributes on all iframes, semantic `role="img"` with `aria-label` on hero backgrounds
- **Content Expansion**: All pages expanded to 800-1500+ words to address thin content issues
- **Address Updated**: All occurrences updated from 2407 to 2415 Castle Hayne Rd
- **Hero Image Preload**: Critical LCP image preloaded with `fetchpriority="high"`

### Not Yet Implemented
- Dashboard/admin pages (Dashboard, Files, Deposits, ProjectManagement, DroneRenders)
- Chat widget (was using Base44 agents API)
- Stripe payment integration (Deposits page)
- Drone render functionality
- Blog post content management (currently hardcoded)
- Content Security Policy header (complex due to inline scripts/styles and CDN dependencies)
- Author markup/bylines with Schema.org Person on blog posts
- Backlink acquisition strategy (Domain Authority currently 0)

## URLs & Routes

### Pages
| Path | Description |
|------|-------------|
| `/` | Home page with all sections |
| `/about` | About PXG Siteworks |
| `/faq` | Frequently Asked Questions (12 Q&As) |
| `/contact` | Contact form page |
| `/careers` | Job openings (4 positions) |
| `/thank-you` | Post-submission thank you |
| `/service-areas` | Service coverage areas (4 counties) |
| `/blog` | Blog listing |
| `/blog/:slug` | Individual blog posts (3 articles) |
| `/calculator` | Land clearing cost calculator |
| `/services/excavation` | Excavation services |
| `/services/site-grading` | Site grading services |
| `/services/land-clearing` | Land clearing services |
| `/services/drainage-solutions` | Drainage solutions |
| `/services/hauling-demolition` | Hauling & demolition |
| `/services/site-preparation` | Site preparation |
| `/services/utilities` | Utility installation |
| `/services/driveway` | Driveway grading |
| `/services/grading` | General grading |
| `/services/drainage` | Drainage services |

### API Endpoints
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/contact` | Submit contact form |
| POST | `/api/quote` | Submit land clearing quote |
| GET | `/api/tracking/google` | Get Google Ads ID |
| GET | `/api/tracking/facebook` | Get Facebook Pixel ID |
| GET | `/sitemap.xml` | XML sitemap with lastmod dates |
| GET | `/robots.txt` | Robots.txt allowing AI crawlers |

### Legacy Redirects (301)
`/Home`, `/About`, `/FAQ`, `/ContactUs`, `/Careers`, `/ThankYou`, `/ServiceAreas`, `/Blog`, `/LandClearingCalculator`, `/Excavation`, `/SiteGrading`, `/LandClearing`, `/DrainageSolutions`, `/HaulingDemolition`, `/SitePreparation`, `/Utilities`, `/Driveway`, `/Grading`, `/Drainage`, `/GradingSitePrep`, `/ExcavationWilmington`, `/LandClearingWilmington`

## Data Architecture
- **Database**: Cloudflare D1 (SQLite) - database name: `pxg_siteworks`, ID: `8435be01-7dfe-4b63-9f40-1a2931bff088`
- **Tables**: `contact_messages`, `land_clearing_quotes`
- **Email**: Resend API for transactional emails
- **Storage**: Images hosted on Supabase (existing from Base44)

## Environment Variables (Cloudflare Secrets)
- `RESEND_API_KEY` - Resend API key for email delivery
- `GOOGLE_ADS_ID` - Google Ads conversion tracking ID
- `FACEBOOK_PIXEL_ID` - Facebook Pixel ID
- `FACEBOOK_CONVERSIONS_API_TOKEN` - Facebook Conversions API token

## Deployment
- **Platform**: Cloudflare Pages
- **Project Name**: `pxg-siteworks`
- **Status**: Active - deployed to production
- **Production URLs**: https://pxg-siteworks.pages.dev / https://www.pxgsiteworks.com
- **Build**: `npm run build` (Vite SSR build, ~283 KB worker)
- **Deploy**: `npm run build && npx wrangler pages deploy dist --project-name pxg-siteworks`
- **Local Dev**: `npm run build && pm2 start ecosystem.config.cjs`

## Recommended Next Steps
1. Implement Content Security Policy (CSP) header - requires refactoring inline scripts to external files
2. Add author markup/bylines with Schema.org Person on blog posts
3. Build backlinks to improve Domain Authority from 0
4. Add more blog posts targeting local SEO keywords
5. Implement admin dashboard for managing contact submissions and quotes
6. Add more testimonials/reviews with structured data
7. Consider adding HowTo schema on relevant service pages
