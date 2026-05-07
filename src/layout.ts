interface SEOData {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  currentPage?: string
  jsonLd?: string
}

export function layout(content: string, seo: SEOData): string {
  const ogImage = seo.ogImage || 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697c0eafb66b5201f6fc0bd3/fc6b71353_20240201_150031.jpg'
  const canonical = seo.canonical || 'https://www.pxgsiteworks.com'
  const currentPage = seo.currentPage || ''
  const jsonLd = seo.jsonLd || ''

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${seo.title}</title>
    <meta name="description" content="${seo.description}">
    <meta name="keywords" content="excavation wilmington nc, site grading, land clearing, drainage solutions, demolition, site preparation, excavation contractor, sitework wilmington">
    <meta name="google-site-verification" content="lIbqF7M55_EoILZCkCB6fWkg6zi33tODBtNtnUQN-Q0">
    <meta name="robots" content="index, follow">
    <meta name="author" content="PXG Siteworks">
    
    <meta property="og:title" content="${seo.title}">
    <meta property="og:description" content="${seo.description}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:type" content="website">
    
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${seo.title}">
    <meta name="twitter:description" content="${seo.description}">
    <meta name="twitter:image" content="${ogImage}">
    
    <link rel="canonical" href="${canonical}">
    <link rel="icon" type="image/svg+xml" href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697c0eafb66b5201f6fc0bd3/c05a42444_PXGLOGO.PNG">
    
    <!-- Preload critical hero image for LCP -->
    <link rel="preload" as="image" href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697c0eafb66b5201f6fc0bd3/f8774276d_ChatGPTImageFeb13202602_17_16PM.png" fetchpriority="high">
    
    <!-- Google Fonts - Premium Typography -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">

    ${jsonLd}
    
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Inter', 'system-ui', 'sans-serif'],
              display: ['Space Grotesk', 'Inter', 'sans-serif']
            },
            colors: {
              zinc: { 950: '#09090b', 900: '#18181b', 800: '#27272a', 700: '#3f3f46', 600: '#52525b' },
              amber: { 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309' }
            }
          }
        }
      }
    </script>
    
    <style>
      /* ===== Premium Typography ===== */
      body { font-family: 'Inter', system-ui, sans-serif; background: #09090b; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      h1, h2, h3, h4, .font-display { font-family: 'Space Grotesk', 'Inter', sans-serif; letter-spacing: -0.02em; }
      
      /* ===== Premium Scrollbar ===== */
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: rgba(245, 158, 11, 0.3); border-radius: 10px; }
      ::-webkit-scrollbar-thumb:hover { background: rgba(245, 158, 11, 0.6); }
      html { scroll-behavior: smooth; }
      
      /* ===== Page Transition ===== */
      .page-wrap { animation: pageEnter 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      @keyframes pageEnter { from { opacity: 0; } to { opacity: 1; } }
      
      /* ===== Custom Cursor (desktop only) ===== */
      @media (hover: hover) and (pointer: fine) {
        .cursor-dot { position: fixed; width: 8px; height: 8px; background: #f59e0b; border-radius: 50%; pointer-events: none; z-index: 9999; transform: translate(-50%, -50%); transition: width 0.3s, height 0.3s, background 0.3s; mix-blend-mode: difference; }
        .cursor-ring { position: fixed; width: 36px; height: 36px; border: 1.5px solid rgba(245, 158, 11, 0.4); border-radius: 50%; pointer-events: none; z-index: 9999; transform: translate(-50%, -50%); transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1), height 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s; }
        .cursor-dot.hover { width: 12px; height: 12px; background: #fbbf24; }
        .cursor-ring.hover { width: 52px; height: 52px; border-color: rgba(251, 191, 36, 0.5); }
      }
      
      /* ===== Glassmorphism ===== */
      .glass { background: rgba(24, 24, 27, 0.7); backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%); border: 1px solid rgba(63, 63, 70, 0.3); }
      .glass-light { background: rgba(24, 24, 27, 0.4); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
      .glass-card { background: rgba(24, 24, 27, 0.5); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(63, 63, 70, 0.3); }
      
      /* ===== Premium Gradient Borders ===== */
      .gradient-border { position: relative; }
      .gradient-border::before { content: ''; position: absolute; inset: 0; padding: 1px; border-radius: inherit; background: linear-gradient(135deg, rgba(245,158,11,0.5), transparent 50%, rgba(245,158,11,0.2)); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }
      
      /* ===== Glow Effects ===== */
      .glow-amber { box-shadow: 0 0 30px rgba(245, 158, 11, 0.15), 0 0 60px rgba(245, 158, 11, 0.05); }
      .glow-amber-sm { box-shadow: 0 0 15px rgba(245, 158, 11, 0.1); }
      .text-glow { text-shadow: 0 0 40px rgba(245, 158, 11, 0.3); }
      
      /* ===== Smooth Reveal Animations ===== */
      .reveal { opacity: 0; transform: translateY(40px); transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1); }
      .reveal.visible { opacity: 1; transform: translateY(0); }
      .reveal-left { opacity: 0; transform: translateX(-50px); transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1); }
      .reveal-left.visible { opacity: 1; transform: translateX(0); }
      .reveal-right { opacity: 0; transform: translateX(50px); transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1); }
      .reveal-right.visible { opacity: 1; transform: translateX(0); }
      .reveal-scale { opacity: 0; transform: scale(0.9); transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1); }
      .reveal-scale.visible { opacity: 1; transform: scale(1); }
      
      /* ===== Stagger Children ===== */
      .stagger-children > * { opacity: 0; transform: translateY(20px); transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
      .stagger-children.visible > *:nth-child(1) { transition-delay: 0.05s; }
      .stagger-children.visible > *:nth-child(2) { transition-delay: 0.1s; }
      .stagger-children.visible > *:nth-child(3) { transition-delay: 0.15s; }
      .stagger-children.visible > *:nth-child(4) { transition-delay: 0.2s; }
      .stagger-children.visible > *:nth-child(5) { transition-delay: 0.25s; }
      .stagger-children.visible > *:nth-child(6) { transition-delay: 0.3s; }
      .stagger-children.visible > *:nth-child(7) { transition-delay: 0.35s; }
      .stagger-children.visible > *:nth-child(8) { transition-delay: 0.4s; }
      .stagger-children.visible > * { opacity: 1; transform: translateY(0); }
      
      /* ===== Entry Animations ===== */
      @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 20px rgba(245, 158, 11, 0.2); } 50% { box-shadow: 0 0 40px rgba(245, 158, 11, 0.4); } }
      @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
      @keyframes grain { 0%, 100% { transform: translate(0, 0); } 10% { transform: translate(-5%, -10%); } 20% { transform: translate(-15%, 5%); } 30% { transform: translate(7%, -25%); } 40% { transform: translate(-5%, 25%); } 50% { transform: translate(-15%, 10%); } 60% { transform: translate(15%, 0%); } 70% { transform: translate(0%, 15%); } 80% { transform: translate(3%, 35%); } 90% { transform: translate(-10%, 10%); } }
      @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      @keyframes borderGlow { 0%, 100% { border-color: rgba(245, 158, 11, 0.2); } 50% { border-color: rgba(245, 158, 11, 0.5); } }
      @keyframes morphBlob { 0%, 100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; } 50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; } }
      @keyframes textReveal { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
      @keyframes lineGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      @keyframes particleFloat { 0% { transform: translateY(100vh) scale(0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translateY(-10vh) scale(1); opacity: 0; } }
      
      .animate-fadeInUp { animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
      .animate-fadeIn { animation: fadeIn 1s ease-out both; }
      .animate-slideDown { animation: slideDown 0.6s ease-out both; }
      .animate-float { animation: float 6s ease-in-out infinite; }
      .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
      .animate-morph { animation: morphBlob 8s ease-in-out infinite; }
      .delay-100 { animation-delay: 0.1s; }
      .delay-200 { animation-delay: 0.2s; }
      .delay-300 { animation-delay: 0.3s; }
      .delay-400 { animation-delay: 0.4s; }
      .delay-500 { animation-delay: 0.5s; }
      .delay-600 { animation-delay: 0.6s; }
      .delay-700 { animation-delay: 0.7s; }
      .delay-800 { animation-delay: 0.8s; }
      .delay-1000 { animation-delay: 1s; }
      
      /* ===== Premium Hover Effects ===== */
      .hover-lift { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
      .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
      .hover-glow { transition: all 0.4s ease; }
      .hover-glow:hover { box-shadow: 0 0 30px rgba(245, 158, 11, 0.15); border-color: rgba(245, 158, 11, 0.4); }
      
      /* ===== 3D Card Tilt ===== */
      .card-3d { perspective: 1000px; }
      .card-3d-inner { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); transform-style: preserve-3d; }
      .card-3d:hover .card-3d-inner { transform: rotateY(2deg) rotateX(2deg); }
      
      /* ===== Magnetic Button Effect ===== */
      .btn-premium { position: relative; overflow: hidden; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
      .btn-premium::before { content: ''; position: absolute; top: 50%; left: 50%; width: 0; height: 0; border-radius: 50%; background: rgba(255,255,255,0.1); transform: translate(-50%, -50%); transition: width 0.6s ease, height 0.6s ease; }
      .btn-premium:hover::before { width: 300px; height: 300px; }
      .btn-premium:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(217, 119, 6, 0.3); }
      
      /* ===== Shimmer Text ===== */
      .shimmer-text { background: linear-gradient(90deg, #f59e0b 0%, #fbbf24 25%, #fff 50%, #fbbf24 75%, #f59e0b 100%); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: shimmer 3s linear infinite; }
      
      /* ===== Noise Texture Overlay ===== */
      .noise-overlay::after { content: ''; position: absolute; inset: 0; opacity: 0.03; pointer-events: none; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E"); }
      
      /* ===== Gradient Mesh Backgrounds ===== */
      .mesh-gradient { background: radial-gradient(ellipse at 20% 50%, rgba(245, 158, 11, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(217, 119, 6, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(180, 83, 9, 0.04) 0%, transparent 50%); }
      
      /* ===== Section Dividers ===== */
      .section-divider { position: relative; }
      .section-divider::before { content: ''; position: absolute; top: 0; left: 10%; right: 10%; height: 1px; background: linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.3), transparent); }
      
      /* ===== Card Premium Styles ===== */
      .card-premium { background: linear-gradient(135deg, rgba(24, 24, 27, 0.8), rgba(24, 24, 27, 0.4)); border: 1px solid rgba(63, 63, 70, 0.3); transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
      .card-premium:hover { border-color: rgba(245, 158, 11, 0.3); background: linear-gradient(135deg, rgba(24, 24, 27, 0.9), rgba(24, 24, 27, 0.6)); }
      
      /* ===== Ultra Premium Card ===== */
      .card-ultra { background: linear-gradient(145deg, rgba(24,24,27,0.9) 0%, rgba(24,24,27,0.5) 100%); border: 1px solid rgba(63,63,70,0.25); border-radius: 1.25rem; backdrop-filter: blur(10px); transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); position: relative; overflow: hidden; }
      .card-ultra::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(245,158,11,0.4), transparent); opacity: 0; transition: opacity 0.5s; }
      .card-ultra:hover { border-color: rgba(245, 158, 11, 0.25); transform: translateY(-4px); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.4), 0 0 30px rgba(245,158,11,0.06); }
      .card-ultra:hover::before { opacity: 1; }
      
      /* ===== Custom Line-clamp ===== */
      .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
      
      /* ===== Premium Input Styles ===== */
      .input-premium { background: rgba(24, 24, 27, 0.6); border: 1px solid rgba(63, 63, 70, 0.5); color: white; transition: all 0.3s ease; }
      .input-premium:focus { border-color: rgba(245, 158, 11, 0.6); box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1); outline: none; }
      .input-premium::placeholder { color: rgba(161, 161, 170, 0.5); }
      
      /* ===== Marquee for trust bar ===== */
      .marquee-track { display: flex; animation: marquee 30s linear infinite; width: max-content; }
      .marquee-container { overflow: hidden; }
      .marquee-track:hover { animation-play-state: paused; }
      
      /* ===== Counter Animation ===== */
      .counter-animated { font-variant-numeric: tabular-nums; }
      
      /* ===== Floating Particles ===== */
      .particles-container { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; }
      .particle { position: absolute; width: 3px; height: 3px; border-radius: 50%; background: rgba(245, 158, 11, 0.3); }
      
      /* ===== Animated Gradient Text ===== */
      .gradient-text-animated { background: linear-gradient(135deg, #f59e0b, #fbbf24, #d97706, #f59e0b); background-size: 300% 300%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: gradientShift 4s ease infinite; }
      @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      
      /* ===== Animated Underline ===== */
      .animated-underline { position: relative; display: inline-block; }
      .animated-underline::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 2px; background: linear-gradient(90deg, #f59e0b, #fbbf24); transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
      .animated-underline:hover::after { width: 100%; }
      
      /* ===== Scroll Progress ===== */
      .scroll-progress { position: fixed; top: 0; left: 0; height: 2px; background: linear-gradient(90deg, #d97706, #f59e0b, #fbbf24); z-index: 9999; transform-origin: left; transition: transform 0.1s; }
      
      /* ===== Parallax Layer ===== */
      .parallax-slow { will-change: transform; }
      
      /* ===== Glowing Orbs ===== */
      .orb { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; }
      .orb-1 { width: 400px; height: 400px; background: rgba(245, 158, 11, 0.06); animation: morphBlob 12s ease-in-out infinite, float 8s ease-in-out infinite; }
      .orb-2 { width: 300px; height: 300px; background: rgba(217, 119, 6, 0.05); animation: morphBlob 10s ease-in-out infinite reverse, float 10s ease-in-out infinite reverse; }
      .orb-3 { width: 250px; height: 250px; background: rgba(180, 83, 9, 0.04); animation: morphBlob 14s ease-in-out infinite, float 12s ease-in-out infinite; }
      
      /* ===== Premium Section Header ===== */
      .section-label { display: inline-flex; align-items: center; gap: 8px; font-size: 0.65rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.25em; color: #f59e0b; }
      .section-label::before, .section-label::after { content: ''; width: 32px; height: 1px; background: linear-gradient(90deg, rgba(245,158,11,0.5), transparent); }
      .section-label::before { background: linear-gradient(90deg, transparent, rgba(245,158,11,0.5)); }
      
      /* ===== Animated Border ===== */
      @keyframes borderRotate { 0% { --angle: 0deg; } 100% { --angle: 360deg; } }
      @property --angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
      .animated-border { --angle: 0deg; border: 2px solid transparent; background-origin: border-box; background-clip: padding-box, border-box; animation: borderRotate 4s linear infinite; }
      
      /* ===== Smooth image load ===== */
      img[loading="lazy"] { opacity: 0; transition: opacity 0.5s ease; }
      img[loading="lazy"].loaded, img:not([loading="lazy"]) { opacity: 1; }
    </style>

    <!-- Facebook Pixel (deferred) -->
    <script>
      window.addEventListener('load', function() {
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1436928034468748');
        fbq('track', 'PageView');
      });
    </script>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1436928034468748&ev=PageView&noscript=1" alt=""></noscript>

    <!-- GTM (deferred) -->
    <script>
      window.addEventListener('load', function() {
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NC9ZFF76');
      });
    </script>

    <!-- GA4 (deferred) -->
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7R5PCTP9ZC');
      window.addEventListener('load', function() {
        var s = document.createElement('script'); s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=G-7R5PCTP9ZC';
        document.head.appendChild(s);
      });
    </script>
</head>
<body class="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NC9ZFF76" height="0" width="0" style="display:none;visibility:hidden" title="Google Tag Manager"></iframe>
    </noscript>

    <!-- Skip to main content (WCAG 2.4.1) -->
    <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:bg-amber-500 focus:text-black focus:px-6 focus:py-3 focus:rounded-lg focus:font-semibold focus:text-sm focus:shadow-lg">Skip to main content</a>

    <!-- Scroll Progress Bar -->
    <div class="scroll-progress" id="scroll-progress" style="transform: scaleX(0);" role="progressbar" aria-label="Page scroll progress" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>

    <!-- Custom Cursor (desktop only) -->
    <div class="cursor-dot hidden lg:block" id="cursor-dot" aria-hidden="true"></div>
    <div class="cursor-ring hidden lg:block" id="cursor-ring" aria-hidden="true"></div>

    <!-- ===== Premium Header ===== -->
    <header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500" role="banner">
      <div id="header-inner" class="transition-all duration-500">
        <!-- Top Accent Line -->
        <div class="h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-60"></div>
        
        <nav class="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between">
          <!-- Logo -->
          <a href="/" class="flex items-center gap-3 group">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697c0eafb66b5201f6fc0bd3/c05a42444_PXGLOGO.PNG" alt="PXG Siteworks Logo" class="h-16 lg:h-20 w-auto transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">
          </a>

          <!-- Desktop Nav -->
          <div class="hidden lg:flex items-center gap-1">
            ${[
              { href: '/#services', label: 'Services', page: '' },
              { href: '/about', label: 'About', page: 'about' },
              { href: '/calculator', label: 'Calculator', page: 'calculator' },
              { href: '/blog', label: 'Blog', page: 'blog' },
              { href: '/faq', label: 'FAQ', page: 'faq' },
              { href: '/contact', label: 'Contact', page: 'contact' },
            ].map(n => `<a href="${n.href}" class="nav-link relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg ${currentPage === n.page && n.page ? 'text-amber-400 bg-amber-500/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}">${n.label}</a>`).join('')}
            
            <div class="w-px h-6 bg-zinc-700 mx-2"></div>
            
            <a href="tel:+19105157779" onclick="trackPhoneClick()" class="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide shadow-lg shadow-amber-600/20">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              (910) 515-7779
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button id="mobile-menu-btn" class="lg:hidden text-white p-2.5 rounded-xl hover:bg-white/5 transition-colors" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </nav>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden lg:hidden">
        <div class="glass border-t border-zinc-800/50 px-6 py-6 space-y-1 animate-slideDown">
          ${[
            { href: '/#services', label: 'Services' },
            { href: '/about', label: 'About' },
            { href: '/calculator', label: 'Calculator' },
            { href: '/blog', label: 'Blog' },
            { href: '/faq', label: 'FAQ' },
            { href: '/contact', label: 'Contact' },
            { href: '/careers', label: 'Careers' },
          ].map(n => `<a href="${n.href}" class="block text-gray-300 hover:text-amber-400 hover:bg-amber-500/5 font-medium py-3 px-4 rounded-xl transition-all" onclick="closeMobileMenu()">${n.label}</a>`).join('')}
          <div class="pt-4 border-t border-zinc-800/50">
            <a href="tel:+19105157779" onclick="trackPhoneClick()" class="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full py-3.5 font-semibold shadow-lg shadow-amber-600/20">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              Call for Free Quote
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- ===== Page Content ===== -->
    <main id="main-content" class="page-wrap" role="main">${content}</main>

    <!-- ===== Premium Footer ===== -->
    <footer class="relative bg-zinc-950 overflow-hidden" role="contentinfo">
      <!-- Animated Orbs -->
      <div class="orb orb-2 -top-20 -right-20 opacity-30"></div>
      <div class="orb orb-3 bottom-10 -left-20 opacity-20"></div>
      
      <!-- Top Divider -->
      <div class="relative h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
      
      <!-- Trust Bar / Marquee -->
      <div class="py-6 border-b border-zinc-800/30 marquee-container">
        <div class="marquee-track">
          ${Array(2).fill(['Licensed & Insured', '20+ Years Experience', '500+ Projects Completed', '4 Counties Served', 'Free Estimates', 'Quality Guaranteed', 'On-Time Delivery', 'Professional Results'].map(t => `
            <span class="flex items-center gap-3 mx-8 text-gray-500 text-xs font-medium uppercase tracking-widest whitespace-nowrap">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-500/40"></span>${t}
            </span>`).join('')).join('')}
        </div>
      </div>
      
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Main Footer Content -->
        <div class="py-16 lg:py-20 grid lg:grid-cols-12 gap-12 lg:gap-8">
          <!-- Brand Column -->
          <div class="lg:col-span-5">
            <a href="/" class="inline-block mb-6">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697c0eafb66b5201f6fc0bd3/c05a42444_PXGLOGO.PNG" alt="PXG Siteworks" class="h-16 w-auto">
            </a>
            <p class="text-gray-400 text-base leading-relaxed max-w-md mb-8">Professional excavation and site development services trusted by homeowners and builders across Southeastern North Carolina.</p>
            <!-- Social -->
            <div class="flex items-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=61585866854919" target="_blank" rel="noopener noreferrer" aria-label="Follow PXG Siteworks on Facebook" class="w-10 h-10 rounded-full bg-zinc-800/80 hover:bg-amber-600/20 border border-zinc-700/50 hover:border-amber-500/30 flex items-center justify-center text-gray-400 hover:text-amber-400 transition-all duration-300 hover:scale-110">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="mailto:info@pxgsiteworks.com" aria-label="Email PXG Siteworks" class="w-10 h-10 rounded-full bg-zinc-800/80 hover:bg-amber-600/20 border border-zinc-700/50 hover:border-amber-500/30 flex items-center justify-center text-gray-400 hover:text-amber-400 transition-all duration-300 hover:scale-110">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </a>
            </div>
          </div>
          
          <!-- Services Links -->
          <div class="lg:col-span-3">
            <h4 class="text-white font-semibold text-sm uppercase tracking-widest mb-6">Services</h4>
            <ul class="space-y-3">
              ${[
                { label: 'Excavation', href: '/services/excavation' },
                { label: 'Site Grading', href: '/services/site-grading' },
                { label: 'Land Clearing', href: '/services/land-clearing' },
                { label: 'Drainage Solutions', href: '/services/drainage-solutions' },
                { label: 'Demolition & Hauling', href: '/services/hauling-demolition' },
                { label: 'Site Preparation', href: '/services/site-preparation' },
                { label: 'Utility Installation', href: '/services/utilities' },
              ].map(l => `<li><a href="${l.href}" class="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200 flex items-center gap-2 group animated-underline"><span class="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-amber-500 transition-colors"></span>${l.label}</a></li>`).join('')}
            </ul>
          </div>
          
          <!-- Company Links -->
          <div class="lg:col-span-2">
            <h4 class="text-white font-semibold text-sm uppercase tracking-widest mb-6">Company</h4>
            <ul class="space-y-3">
              ${[
                { label: 'About', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Careers', href: '/careers' },
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Calculator', href: '/calculator' },
              ].map(l => `<li><a href="${l.href}" class="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200 flex items-center gap-2 group animated-underline"><span class="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-amber-500 transition-colors"></span>${l.label}</a></li>`).join('')}
            </ul>
          </div>
          
          <!-- Contact Column -->
          <div class="lg:col-span-2">
            <h4 class="text-white font-semibold text-sm uppercase tracking-widest mb-6">Contact</h4>
            <div class="space-y-4">
              <a href="tel:+19105157779" onclick="trackPhoneClick()" class="flex items-start gap-3 text-gray-400 hover:text-amber-400 transition-colors group">
                <svg class="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-500/50 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span class="text-sm">(910) 515-7779</span>
              </a>
              <a href="mailto:info@pxgsiteworks.com" class="flex items-start gap-3 text-gray-400 hover:text-amber-400 transition-colors group">
                <svg class="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-500/50 group-hover:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span class="text-sm">info@pxgsiteworks.com</span>
              </a>
              <div class="flex items-start gap-3 text-gray-400">
                <svg class="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span class="text-sm">2415 Castle Hayne Rd<br>Wilmington, NC 28401</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Bottom Bar -->
        <div class="border-t border-zinc-800/50 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-500 text-xs">&copy; ${new Date().getFullYear()} PXG Siteworks. All rights reserved. Licensed & Insured | NC General Contractor</p>
          <p class="text-gray-600 text-xs">Built by <a href="https://www.simplebuildai.com" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-amber-400 transition-colors">SimpleBuild AI</a></p>
        </div>
      </div>
    </footer>

    <!-- ===== Mobile Call Button ===== -->
    <a href="tel:+19105157779" onclick="trackPhoneClick()" class="lg:hidden fixed bottom-6 right-6 z-50 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full p-4 shadow-2xl shadow-amber-600/30 flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse-glow" aria-label="Call us now">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
    </a>

    <!-- ===== Back to Top ===== -->
    <button id="back-to-top" onclick="window.scrollTo({top:0,behavior:'smooth'})" class="fixed bottom-6 left-6 z-50 w-10 h-10 bg-zinc-800/80 hover:bg-amber-600/20 border border-zinc-700/50 hover:border-amber-500/30 text-gray-400 hover:text-amber-400 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 pointer-events-none" aria-label="Back to top">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>
    </button>

    <script>
      // ===== Scroll Progress Bar =====
      const scrollProg = document.getElementById('scroll-progress');
      window.addEventListener('scroll', () => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const p = h > 0 ? window.scrollY / h : 0;
        scrollProg.style.transform = 'scaleX(' + p + ')';
      }, { passive: true });

      // ===== Custom Cursor =====
      const dot = document.getElementById('cursor-dot');
      const ring = document.getElementById('cursor-ring');
      if (dot && ring && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        let mx = 0, my = 0, rx = 0, ry = 0;
        document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; });
        function animateRing() { rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(animateRing); }
        animateRing();
        document.querySelectorAll('a, button, .nav-link, .card-premium, .card-ultra, input, textarea, select').forEach(el => {
          el.addEventListener('mouseenter', () => { dot.classList.add('hover'); ring.classList.add('hover'); });
          el.addEventListener('mouseleave', () => { dot.classList.remove('hover'); ring.classList.remove('hover'); });
        });
      }

      // ===== Header scroll effect =====
      const header = document.getElementById('main-header');
      const headerInner = document.getElementById('header-inner');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
          headerInner.classList.add('glass');
          headerInner.style.borderBottom = '1px solid rgba(63, 63, 70, 0.2)';
        } else {
          headerInner.classList.remove('glass');
          headerInner.style.borderBottom = 'none';
        }
      }, { passive: true });

      // ===== Back to top button =====
      const btt = document.getElementById('back-to-top');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 600) { btt.style.opacity = '1'; btt.style.pointerEvents = 'auto'; }
        else { btt.style.opacity = '0'; btt.style.pointerEvents = 'none'; }
      }, { passive: true });

      // ===== Mobile menu =====
      const menuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      let menuOpen = false;
      menuBtn.addEventListener('click', () => {
        menuOpen = !menuOpen;
        mobileMenu.classList.toggle('hidden');
        menuBtn.setAttribute('aria-expanded', menuOpen.toString());
        menuBtn.innerHTML = menuOpen
          ? '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'
          : '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
      });
      function closeMobileMenu() {
        mobileMenu.classList.add('hidden');
        menuOpen = false;
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
      }

      // ===== Intersection Observer for scroll animations =====
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children').forEach(el => observer.observe(el));

      // ===== Animated Counter =====
      function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const duration = 2000;
        const steps = 60;
        const stepTime = duration / steps;
        let current = 0;
        const increment = target / steps;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = prefix + Math.round(current).toLocaleString() + suffix;
        }, stepTime);
      }
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.dataset.counted) {
            entry.target.dataset.counted = 'true';
            animateCounter(entry.target);
          }
        });
      }, { threshold: 0.5 });
      document.querySelectorAll('.counter-animated').forEach(el => counterObserver.observe(el));

      // ===== Lazy image load animation =====
      document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        if (img.complete) img.classList.add('loaded');
        else img.addEventListener('load', () => img.classList.add('loaded'));
      });

      // ===== Phone call tracking =====
      function trackPhoneClick() {
        if (window.gtag) {
          gtag('event', 'phone_call_click', { event_category: 'engagement', event_label: 'phone_click' });
        }
        const start = Date.now();
        const handler = () => {
          if (document.hidden && (Date.now() - start) >= 30000) {
            if (window.gtag) gtag('event', 'conversion', { send_to: 'AW-17921730867/h8tRCMeovPMbELPS3-FC', value: 1.0, currency: 'USD' });
            if (window.fbq) fbq('track', 'Phone_Call');
            document.removeEventListener('visibilitychange', handler);
          }
        };
        document.addEventListener('visibilitychange', handler);
      }

      // ===== Load Google Ads dynamically =====
      fetch('/api/tracking/google').then(r => r.json()).then(d => {
        if (d.googleAdsId) {
          const s = document.createElement('script');
          s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + d.googleAdsId;
          s.onload = () => { gtag('config', d.googleAdsId); };
          document.head.appendChild(s);
        }
      }).catch(() => {});

      // ===== Parallax on scroll (subtle) =====
      document.querySelectorAll('.parallax-slow').forEach(el => {
        const speed = parseFloat(el.dataset.speed || '0.3');
        window.addEventListener('scroll', () => {
          const rect = el.getBoundingClientRect();
          const center = rect.top + rect.height / 2 - window.innerHeight / 2;
          el.style.transform = 'translateY(' + (center * speed * -0.1) + 'px)';
        }, { passive: true });
      });
    </script>
</body>
</html>`
}
