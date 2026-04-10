interface SEOData {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  currentPage?: string
}

export function layout(content: string, seo: SEOData): string {
  const ogImage = seo.ogImage || 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697c0eafb66b5201f6fc0bd3/fc6b71353_20240201_150031.jpg'
  const canonical = seo.canonical || 'https://www.pxgsiteworks.com'
  const currentPage = seo.currentPage || ''

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${seo.title}</title>
    <meta name="description" content="${seo.description}">
    <meta name="keywords" content="excavation wilmington nc, site grading, land clearing, drainage solutions, demolition, site preparation">
    <meta name="google-site-verification" content="lIbqF7M55_EoILZCkCB6fWkg6zi33tODBtNtnUQN-Q0">
    
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
    
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              zinc: { 950: '#09090b', 900: '#18181b', 800: '#27272a', 700: '#3f3f46' },
              amber: { 500: '#f59e0b', 600: '#d97706', 700: '#b45309' }
            }
          }
        }
      }
    </script>
    
    <style>
      @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(10px); } }
      .animate-fadeInUp { animation: fadeInUp 0.8s ease-out both; }
      .animate-fadeIn { animation: fadeIn 0.8s ease-out both; }
      .animate-bounce-slow { animation: bounce 2s infinite; }
      .delay-100 { animation-delay: 0.1s; }
      .delay-200 { animation-delay: 0.2s; }
      .delay-300 { animation-delay: 0.3s; }
      .delay-400 { animation-delay: 0.4s; }
      .delay-500 { animation-delay: 0.5s; }
      .delay-1000 { animation-delay: 1s; }
      
      /* Intersection Observer animations */
      .reveal { opacity: 0; transform: translateY(20px); transition: all 0.6s ease-out; }
      .reveal.visible { opacity: 1; transform: translateY(0); }
      .reveal-left { opacity: 0; transform: translateX(-30px); transition: all 0.7s ease-out; }
      .reveal-left.visible { opacity: 1; transform: translateX(0); }
      .reveal-right { opacity: 0; transform: translateX(30px); transition: all 0.7s ease-out; }
      .reveal-right.visible { opacity: 1; transform: translateX(0); }
      
      html { scroll-behavior: smooth; }
      body { background: #09090b; }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar { width: 8px; }
      ::-webkit-scrollbar-track { background: #18181b; }
      ::-webkit-scrollbar-thumb { background: #3f3f46; border-radius: 4px; }
      ::-webkit-scrollbar-thumb:hover { background: #d97706; }
    </style>

    <!-- Facebook Pixel -->
    <script>
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
      document,'script','https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1436928034468748');
      fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1436928034468748&ev=PageView&noscript=1"></noscript>

    <!-- GTM -->
    <script>
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NC9ZFF76');
    </script>

    <!-- GA4 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-7R5PCTP9ZC"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7R5PCTP9ZC');
    </script>
</head>
<body class="min-h-screen bg-zinc-950 text-white">
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NC9ZFF76" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>

    <!-- Header -->
    <header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" class="flex items-center gap-2">
          <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697c0eafb66b5201f6fc0bd3/c05a42444_PXGLOGO.PNG" alt="PXG Siteworks Logo" class="h-24 w-auto">
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-6">
          <a href="/#services" class="text-gray-300 hover:text-amber-500 transition-colors font-medium">Services</a>
          <a href="/#about" class="text-gray-300 hover:text-amber-500 transition-colors font-medium">About</a>
          <a href="/#projects" class="text-gray-300 hover:text-amber-500 transition-colors font-medium">Projects</a>
          <a href="/about" class="text-gray-300 hover:text-amber-500 transition-colors font-medium ${currentPage === 'about' ? 'text-amber-500' : ''}">About</a>
          <a href="/faq" class="text-gray-300 hover:text-amber-500 transition-colors font-medium ${currentPage === 'faq' ? 'text-amber-500' : ''}">FAQ</a>
          <a href="/blog" class="text-gray-300 hover:text-amber-500 transition-colors font-medium ${currentPage === 'blog' ? 'text-amber-500' : ''}">Blog</a>
          <a href="/contact" class="text-gray-300 hover:text-amber-500 transition-colors font-medium ${currentPage === 'contact' ? 'text-amber-500' : ''}">Contact</a>
          <a href="tel:+19105157779" onclick="trackPhoneClick()" class="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6 py-2.5 font-medium transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            Call Now
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button id="mobile-menu-btn" class="md:hidden text-white p-2" aria-label="Open menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden md:hidden bg-zinc-900 border-t border-zinc-800">
        <div class="px-6 py-4 space-y-4">
          <a href="/#services" class="block text-gray-300 hover:text-amber-500 font-medium py-2" onclick="closeMobileMenu()">Services</a>
          <a href="/#about" class="block text-gray-300 hover:text-amber-500 font-medium py-2" onclick="closeMobileMenu()">About</a>
          <a href="/#projects" class="block text-gray-300 hover:text-amber-500 font-medium py-2" onclick="closeMobileMenu()">Projects</a>
          <a href="/about" class="block text-gray-300 hover:text-amber-500 font-medium py-2">About</a>
          <a href="/faq" class="block text-gray-300 hover:text-amber-500 font-medium py-2">FAQ</a>
          <a href="/blog" class="block text-gray-300 hover:text-amber-500 font-medium py-2">Blog</a>
          <a href="/contact" class="block text-gray-300 hover:text-amber-500 font-medium py-2">Contact</a>
          <a href="tel:+19105157779" onclick="trackPhoneClick()" class="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white rounded-full py-3 font-medium mt-4">
            Call for Free Quote
          </a>
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <main>${content}</main>

    <!-- Footer -->
    <footer class="bg-zinc-950 border-t border-zinc-800">
      <div class="max-w-7xl mx-auto px-6 py-12">
        <div class="grid md:grid-cols-4 gap-8">
          <div class="md:col-span-2">
            <div class="text-2xl font-bold text-white mb-4">PXG <span class="text-amber-500">Siteworks</span></div>
            <p class="text-gray-400 max-w-md mb-6">Professional excavation and site development services in Wilmington, NC and surrounding areas. Building strong foundations since day one.</p>
            <p class="text-gray-500 text-sm">Serving New Hanover, Brunswick, Pender, and Onslow Counties</p>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="/#services" class="text-gray-400 hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="/#about" class="text-gray-400 hover:text-amber-500 transition-colors">About</a></li>
              <li><a href="/#projects" class="text-gray-400 hover:text-amber-500 transition-colors">Projects</a></li>
              <li><a href="/blog" class="text-gray-400 hover:text-amber-500 transition-colors">Blog</a></li>
              <li><a href="/careers" class="text-gray-400 hover:text-amber-500 transition-colors">Careers</a></li>
              <li><a href="/service-areas" class="text-gray-400 hover:text-amber-500 transition-colors">Service Areas</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-4">Contact</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="tel:+19105157779" onclick="trackPhoneClick()" class="hover:text-amber-500 transition-colors">(910) 515-7779</a></li>
              <li><a href="mailto:info@pxgsiteworks.com" class="hover:text-amber-500 transition-colors">info@pxgsiteworks.com</a></li>
              <li>2407 Castle Hayne Rd<br>Wilmington, NC 28401</li>
            </ul>
            <div class="mt-6">
              <a href="https://www.facebook.com/profile.php?id=61585866854919" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Follow us on Facebook
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-500 text-sm">&copy; ${new Date().getFullYear()} PXG Siteworks. All rights reserved.</p>
          <p class="text-gray-500 text-sm">Licensed & Insured | NC General Contractor</p>
        </div>
      </div>
    </footer>

    <!-- Mobile Call Button -->
    <a href="tel:+19105157779" onclick="trackPhoneClick()" class="md:hidden fixed bottom-6 right-6 z-50 bg-amber-600 hover:bg-amber-700 text-white rounded-full p-4 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="Call us now">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
    </a>

    <script>
      // Header scroll effect
      window.addEventListener('scroll', () => {
        const header = document.getElementById('main-header');
        if (window.scrollY > 50) {
          header.classList.add('bg-zinc-950/95', 'backdrop-blur-md', 'shadow-lg');
          header.classList.remove('bg-transparent');
        } else {
          header.classList.remove('bg-zinc-950/95', 'backdrop-blur-md', 'shadow-lg');
          header.classList.add('bg-transparent');
        }
      });

      // Mobile menu
      const menuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      let menuOpen = false;
      menuBtn.addEventListener('click', () => {
        menuOpen = !menuOpen;
        mobileMenu.classList.toggle('hidden');
        menuBtn.innerHTML = menuOpen
          ? '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'
          : '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
      });
      function closeMobileMenu() {
        mobileMenu.classList.add('hidden');
        menuOpen = false;
        menuBtn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
      }

      // Intersection Observer for scroll animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));

      // Phone call tracking
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

      // Load Google Ads dynamically
      fetch('/api/tracking/google').then(r => r.json()).then(d => {
        if (d.googleAdsId) {
          const s = document.createElement('script');
          s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + d.googleAdsId;
          s.onload = () => { gtag('config', d.googleAdsId); };
          document.head.appendChild(s);
        }
      }).catch(() => {});
    </script>
</body>
</html>`
}
