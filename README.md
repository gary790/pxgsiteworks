# PXG Siteworks - Professional Excavation & Site Development

## Project Overview
- **Name**: PXG Siteworks
- **Domain**: www.pxgsiteworks.com
- **Goal**: Professional business website for PXG Siteworks, an excavation and site development company in Wilmington, NC
- **Tech Stack**: Hono + TypeScript + TailwindCSS (CDN) on Cloudflare Pages

## Features

### Completed
- **Home Page**: Hero section, services grid, about section, project gallery with lightbox, land clearing calculator CTA, contact form
- **Service Pages**: Excavation, Site Grading, Land Clearing, Drainage Solutions, Hauling & Demolition, Site Preparation, Utilities, Driveway, Grading, Drainage
- **Land Clearing Calculator**: Multi-step quote calculator with instant estimates and email delivery
- **Contact Form**: With Resend email integration (business notification + customer confirmation)
- **Blog**: 3 cost guide articles for SEO
- **About, FAQ, Careers, Service Areas, Thank You pages**
- **SEO**: Full meta tags, Open Graph, Twitter Cards, canonical URLs, sitemap.xml
- **Analytics**: Google Analytics (GA4), Google Tag Manager, Google Ads conversion tracking, Facebook Pixel + Conversions API
- **Legacy URL Redirects**: All old Base44 URLs redirect to new clean URLs with 301
- **D1 Database**: Stores contact messages and land clearing quotes
- **Responsive Design**: Full mobile support with hamburger menu and floating call button
- **Scroll Animations**: Intersection Observer-based reveal animations

### Not Yet Implemented
- Dashboard/admin pages (Dashboard, Files, Deposits, ProjectManagement, DroneRenders)
- Chat widget (was using Base44 agents API)
- Stripe payment integration (Deposits page)
- Drone render functionality
- Blog post content management (currently hardcoded)

## URLs & Routes

### Pages
| Path | Description |
|------|-------------|
| `/` | Home page with all sections |
| `/about` | About PXG Siteworks |
| `/faq` | Frequently Asked Questions |
| `/contact` | Contact form page |
| `/careers` | Job openings |
| `/thank-you` | Post-submission thank you |
| `/service-areas` | Service coverage areas |
| `/blog` | Blog listing |
| `/blog/:slug` | Individual blog posts |
| `/calculator` | Land clearing cost calculator |
| `/services/excavation` | Excavation services |
| `/services/site-grading` | Site grading services |
| `/services/land-clearing` | Land clearing services |
| `/services/drainage-solutions` | Drainage solutions |
| `/services/hauling-demolition` | Hauling & demolition |
| `/services/site-preparation` | Site preparation |
| `/services/utilities` | Utility installation |

### API Endpoints
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/contact` | Submit contact form |
| POST | `/api/quote` | Submit land clearing quote |
| GET | `/api/tracking/google` | Get Google Ads ID |
| GET | `/api/tracking/facebook` | Get Facebook Pixel ID |
| GET | `/sitemap.xml` | XML sitemap |

## Data Architecture
- **Database**: Cloudflare D1 (SQLite) - database name: `pxg_siteworks`
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
- **Status**: Local development ready
- **Build**: `npm run build` (Vite SSR build)
- **Local Dev**: `npm run dev:sandbox` (with D1 local)
