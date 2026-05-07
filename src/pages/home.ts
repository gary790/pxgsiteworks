export function homePage(): string {
  return `
    <!-- ===== CINEMATIC HERO ===== -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image with Ken Burns -->
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gray-900" role="img" aria-label="Aerial view of PXG Siteworks excavation equipment at a job site in Wilmington NC" style="background-image:url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697c0eafb66b5201f6fc0bd3/f8774276d_ChatGPTImageFeb13202602_17_16PM.png'); animation: float 25s ease-in-out infinite alternate; transform: scale(1.1); transform-origin: center;">
      </div>
      <!-- Multi-layer cinematic overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/30 to-zinc-950"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-zinc-950/60 via-transparent to-zinc-950/60"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,9,11,0.4)_70%)]"></div>
      
      <!-- Animated orbs -->
      <div class="orb orb-1 top-1/4 left-10"></div>
      <div class="orb orb-2 bottom-1/3 right-10"></div>
      
      <!-- Floating particles -->
      <div class="particles-container" id="hero-particles"></div>
      
      <!-- Hero Content -->
      <div class="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
        <!-- Badge -->
        <div class="animate-fadeInUp inline-flex items-center gap-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-6 py-2.5 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
          </span>
          Trusted by Wilmington Homeowners & Builders
        </div>
        
        <!-- Main Heading -->
        <h1 class="animate-fadeInUp delay-100 text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white mb-6 leading-[0.92] tracking-tight font-display">
          We Move Earth.<br>
          <span class="shimmer-text">You Build Dreams.</span>
        </h1>
        
        <!-- Subtitle -->
        <p class="animate-fadeInUp delay-200 text-lg md:text-xl text-gray-300/90 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          Expert excavation, land clearing & site preparation for residential and commercial projects across Southeastern North Carolina.
        </p>
        
        <!-- CTA Buttons -->
        <div class="animate-fadeInUp delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact" class="btn-premium bg-gradient-to-r from-amber-600 to-amber-500 text-white px-10 py-4.5 text-lg font-semibold rounded-full shadow-xl shadow-amber-600/25 flex items-center gap-3 group">
            Get a Free Quote
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
          <a href="tel:+19105157779" onclick="trackPhoneClick()" class="inline-flex items-center gap-3 glass text-white px-10 py-4.5 text-lg font-semibold rounded-full hover:bg-white/10 transition-all border border-white/10 group">
            <svg class="w-5 h-5 text-amber-400 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            (910) 515-7779
          </a>
        </div>
        
        <!-- Calculator Link -->
        <div class="animate-fadeInUp delay-400 mt-6">
          <a href="/calculator" class="inline-flex items-center gap-2 text-amber-400/80 hover:text-amber-300 text-sm font-medium transition-colors group">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            Try Our Land Clearing Calculator
            <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="animate-fadeIn delay-1000 absolute bottom-10 left-1/2 -translate-x-1/2">
        <button onclick="document.getElementById('stats').scrollIntoView({behavior:'smooth'})" class="flex flex-col items-center text-white/40 hover:text-white/70 transition-colors cursor-pointer group">
          <span class="text-[10px] tracking-[0.3em] uppercase mb-3 font-medium">Scroll</span>
          <div class="w-5 h-8 rounded-full border border-white/20 group-hover:border-white/40 flex items-start justify-center pt-1.5 transition-colors">
            <div class="w-1 h-2 bg-white/50 rounded-full animate-bounce"></div>
          </div>
        </button>
      </div>
    </section>

    <!-- ===== STATS BAR ===== -->
    <section id="stats" class="relative py-20 bg-zinc-950 section-divider">
      <div class="max-w-7xl mx-auto px-6">
        <div class="reveal grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          ${[
            { value: '20', suffix: '+', label: 'Years Experience', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
            { value: '500', suffix: '+', label: 'Projects Completed', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            { value: '4', suffix: '', label: 'Counties Served', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
            { value: '100', suffix: '%', label: 'Licensed & Insured', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
          ].map(s => `
          <div class="text-center group">
            <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/5 mb-4 group-hover:from-amber-500/25 group-hover:to-amber-600/10 transition-all duration-500 border border-amber-500/10">
              <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${s.icon}"/></svg>
            </div>
            <div class="text-4xl lg:text-5xl font-bold text-white mb-1.5 counter-animated font-display" data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
            <div class="text-gray-500 text-sm font-medium uppercase tracking-wider">${s.label}</div>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- ===== SERVICES ===== -->
    <section id="services" class="py-28 lg:py-36 bg-zinc-950 relative">
      <div class="absolute inset-0 mesh-gradient"></div>
      <div class="orb orb-1 top-20 -right-40 opacity-40"></div>
      <div class="orb orb-3 bottom-20 -left-40 opacity-30"></div>
      
      <div class="relative max-w-7xl mx-auto px-6">
        <div class="reveal text-center mb-16 lg:mb-20">
          <span class="section-label mb-4">What We Do</span>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-5 font-display">Residential Site<br class="hidden sm:block"> <span class="gradient-text-animated">Services</span></h2>
          <p class="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">From clearing your lot to preparing your home's foundation, we deliver comprehensive residential sitework solutions.</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 stagger-children">
          ${[
            { icon: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z', title: 'Excavation', desc: 'Precision excavation for home foundations, basements, pools, and driveways.', slug: 'excavation' },
            { icon: 'M8 21l4-4 4 4M4 15l4-4 4 4M12 3l4 4-4 4', title: 'Site Grading', desc: 'Professional lot grading to ensure proper drainage and foundation prep.', slug: 'site-grading' },
            { icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', title: 'Land Clearing', desc: 'Clear residential lots including tree removal, brush clearing, and debris removal.', slug: 'land-clearing' },
            { icon: 'M12 2.69l5.66 5.66a8 8 0 11-11.31 0z', title: 'Drainage Solutions', desc: 'Expert drainage installation to protect your home from water damage.', slug: 'drainage-solutions' },
            { icon: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0', title: 'Hauling & Demolition', desc: 'Remove old structures, sheds, or garages. Safe demolition and material hauling.', slug: 'hauling-demolition' },
            { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', title: 'Site Preparation', desc: 'Complete lot prep for new homes from clearing to final grade.', slug: 'site-preparation' },
            { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Utility Installation', desc: 'Residential utility trenching for water, sewer, and electrical lines.', slug: 'utilities' }
          ].map(s => `
          <a href="/services/${s.slug}" class="group card-ultra rounded-2xl p-7 lg:p-8 cursor-pointer block">
            <div class="flex items-start gap-5">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/5 flex items-center justify-center flex-shrink-0 group-hover:from-amber-500/30 group-hover:to-amber-600/15 transition-all duration-500 border border-amber-500/10 group-hover:border-amber-500/25 group-hover:shadow-lg group-hover:shadow-amber-500/10">
                <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${s.icon}"></path></svg>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-lg font-bold text-white mb-2 font-display group-hover:text-amber-400 transition-colors">${s.title}</h3>
                <p class="text-gray-400 text-sm leading-relaxed mb-3">${s.desc}</p>
                <span class="text-amber-400 text-sm font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Learn More
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </span>
              </div>
            </div>
          </a>`).join('')}
        </div>
      </div>
    </section>

    <!-- ===== ABOUT SECTION ===== -->
    <section id="about" class="py-28 lg:py-36 bg-zinc-900/50 relative noise-overlay">
      <div class="relative max-w-7xl mx-auto px-6 z-10">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div class="reveal-left relative">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 group">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697c0eafb66b5201f6fc0bd3/e11c35c11_FullSizeR.jpg" alt="Excavator at work" class="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
              <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent"></div>
            </div>
            <!-- Floating badge -->
            <div class="absolute -bottom-6 -right-4 lg:right-8 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-6 shadow-2xl shadow-amber-600/20 glow-amber-sm">
              <div class="text-white text-center">
                <p class="text-4xl font-bold font-display">20+</p>
                <p class="text-amber-100 text-xs font-medium uppercase tracking-wider">Years of Excellence</p>
              </div>
            </div>
            <!-- Decorative frame -->
            <div class="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-500/30 rounded-tl-2xl"></div>
            <div class="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-amber-500/20 rounded-br-2xl hidden lg:block"></div>
          </div>
          
          <div class="reveal-right">
            <span class="section-label mb-4">About Us</span>
            <h2 class="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 font-display leading-tight">Building Strong <br><span class="gradient-text-animated">Foundations</span></h2>
            <p class="text-gray-300 text-lg mb-6 leading-relaxed">PXG Siteworks is your trusted partner for residential excavation and site preparation in Wilmington, NC. We specialize in helping homeowners prepare their land for new homes, additions, pools, and landscaping.</p>
            <p class="text-gray-400 mb-10 leading-relaxed">Our team combines decades of experience with modern equipment to deliver exceptional results. Your property is your biggest investment, and we treat it with the care it deserves.</p>
            
            <div class="grid sm:grid-cols-2 gap-3">
              ${['Fully Licensed & Insured', 'On-Time Delivery', 'Quality Guaranteed', 'Free Estimates'].map(f => `
              <div class="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-800/30 border border-zinc-700/30 hover:border-amber-500/20 transition-all duration-300 group">
                <div class="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                  <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span class="text-gray-300 text-sm font-medium">${f}</span>
              </div>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== PROJECTS GALLERY ===== -->
    <section id="projects" class="py-28 lg:py-36 bg-zinc-950">
      <div class="max-w-7xl mx-auto px-6">
        <div class="reveal text-center mb-16">
          <span class="section-label mb-4">Portfolio</span>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-5 font-display">Recent <span class="gradient-text-animated">Projects</span></h2>
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">Explore our work across the Wilmington area.</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          ${[
            { img: 'fc6b71353_20240201_150031.jpg', title: 'Commercial Site Prep', cat: 'Site Preparation', desc: '15-acre commercial development in Brunswick County' },
            { img: '933ec73b2_Resized_20210607_185143.jpg', title: 'Residential Excavation', cat: 'Excavation', desc: 'Foundation excavation for custom home in Wrightsville Beach' },
            { img: 'e5d8b401e_20230223_090323.jpg', title: 'Land Clearing', cat: 'Land Clearing', desc: '10-acre clearing for new subdivision' },
            { img: 'd9b764571_dji_fly_2.jpg', title: 'Drainage Installation', cat: 'Drainage', desc: 'Commercial stormwater management system' },
            { img: '225c5cd3b_MAX_0029.jpg', title: 'Site Grading', cat: 'Grading', desc: 'Precision grading for retail parking lot' },
            { img: '0edbe1433_20211106_171152.jpg', title: 'Septic Installation', cat: 'Septic Systems', desc: 'Complete septic system for residential property' }
          ].map(p => `
          <div class="group relative rounded-2xl overflow-hidden card-ultra" role="button" tabindex="0" aria-label="View ${p.title} project photo" onclick="openLightbox(this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openLightbox(this)}">
            <div class="aspect-[4/3] overflow-hidden bg-zinc-800">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697c0eafb66b5201f6fc0bd3/${p.img}" alt="${p.title} - ${p.desc}" loading="lazy" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-full="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697c0eafb66b5201f6fc0bd3/${p.img}">
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
              <span class="inline-block px-3 py-1 bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[10px] font-semibold rounded-full mb-2.5 uppercase tracking-wider">${p.cat}</span>
              <h3 class="text-lg font-bold text-white mb-1 font-display">${p.title}</h3>
              <p class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">${p.desc}</p>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div id="lightbox" class="fixed inset-0 z-[60] bg-zinc-950/95 backdrop-blur-xl hidden items-center justify-center p-6" onclick="closeLightbox()">
      <button class="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2" onclick="closeLightbox()" aria-label="Close lightbox">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
      <div class="max-w-5xl w-full" onclick="event.stopPropagation()">
        <img id="lightbox-img" src="" alt="Project photo enlarged view" class="w-full rounded-2xl shadow-2xl">
      </div>
    </div>

    <!-- ===== CALCULATOR CTA ===== -->
    <section class="py-28 lg:py-36 bg-zinc-900/50 relative overflow-hidden noise-overlay">
      <div class="absolute inset-0 mesh-gradient"></div>
      <div class="orb orb-1 -top-20 right-1/4 opacity-30"></div>
      <div class="relative max-w-7xl mx-auto px-6 z-10">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div class="reveal-left">
            <span class="section-label mb-4">Free Instant Quote</span>
            <h2 class="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 font-display">Land Clearing<br><span class="gradient-text-animated">Calculator</span></h2>
            <p class="text-gray-400 text-lg mb-10 leading-relaxed">Get an accurate estimate for your land clearing project in under 2 minutes. No obligation, completely free.</p>
            
            <div class="space-y-5">
              ${[
                { title: 'Takes 2 Minutes', desc: 'Quick and easy multi-step form', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                { title: 'Instant Pricing', desc: 'Get immediate cost estimates', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                { title: 'Detailed Breakdown', desc: "See exactly what you're paying for", icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' }
              ].map(f => `
              <div class="flex items-start gap-4 group">
                <div class="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20 group-hover:bg-amber-500/20 group-hover:border-amber-500/30 transition-all">
                  <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${f.icon}"/></svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold mb-0.5">${f.title}</h3>
                  <p class="text-gray-500 text-sm">${f.desc}</p>
                </div>
              </div>`).join('')}
            </div>
          </div>
          
          <div class="reveal-right">
            <div class="card-ultra rounded-2xl p-8 lg:p-10 text-center relative overflow-hidden glow-amber-sm">
              <div class="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px]"></div>
              <div class="relative z-10">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-2xl mb-6 border border-amber-500/20">
                  <svg class="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-3 font-display">Calculate Your Quote</h3>
                <p class="text-gray-400 mb-8 leading-relaxed">Answer a few questions about your property and get an instant, detailed estimate.</p>
                <a href="/calculator" class="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-xl shadow-amber-600/25 group">
                  Start Calculator
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
                <p class="text-gray-600 text-xs mt-5 flex items-center justify-center gap-4">
                  <span>No obligation</span>
                  <span class="w-1 h-1 rounded-full bg-zinc-700"></span>
                  <span>Free quote</span>
                  <span class="w-1 h-1 rounded-full bg-zinc-700"></span>
                  <span>2 minutes</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== TESTIMONIALS ===== -->
    <section class="py-28 lg:py-36 bg-zinc-950 section-divider">
      <div class="max-w-7xl mx-auto px-6">
        <div class="reveal text-center mb-16">
          <span class="section-label mb-4">Testimonials</span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mt-4 mb-5 font-display">What Our Clients <span class="gradient-text-animated">Say</span></h2>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6 stagger-children">
          ${[
            { quote: "PXG Siteworks did an incredible job clearing our lot and prepping the foundation. They were on time, professional, and the results exceeded our expectations.", name: 'Sarah & Mike T.', role: 'Homeowners, Wrightsville Beach', initials: 'SM' },
            { quote: "We've used PXG for multiple subdivision developments. Their grading work is precise and they consistently deliver on schedule. Highly recommended for any builder.", name: 'David R.', role: 'General Contractor, Wilmington', initials: 'DR' },
            { quote: "From the initial quote to the final grade, the entire process was smooth. They communicated every step and their pricing was fair and transparent.", name: 'Jennifer L.', role: 'Homeowner, Hampstead', initials: 'JL' }
          ].map(t => `
          <div class="card-ultra rounded-2xl p-7 lg:p-8">
            <!-- Stars -->
            <div class="flex gap-1 mb-5">
              ${Array(5).fill('').map(() => `<svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`).join('')}
            </div>
            <blockquote class="text-gray-300 leading-relaxed mb-6 text-sm italic">"${t.quote}"</blockquote>
            <div class="flex items-center gap-3 pt-5 border-t border-zinc-800/50">
              <div class="w-11 h-11 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-600/20">
                <span class="text-white font-bold text-sm">${t.initials}</span>
              </div>
              <div>
                <p class="text-white font-semibold text-sm">${t.name}</p>
                <p class="text-gray-500 text-xs">${t.role}</p>
              </div>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- ===== CONTACT SECTION ===== -->
    <section id="contact" class="py-28 lg:py-36 bg-zinc-900/50 relative noise-overlay">
      <div class="relative max-w-7xl mx-auto px-6 z-10">
        <div class="reveal text-center mb-16">
          <span class="section-label mb-4">Get In Touch</span>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-5 font-display">Request a Free <span class="gradient-text-animated">Quote</span></h2>
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">Ready to start your project? Contact us today for a free estimate. We'll get back to you within 24 hours.</p>
        </div>
        
        <div class="grid lg:grid-cols-5 gap-10 lg:gap-12">
          <!-- Contact Info -->
          <div class="reveal-left lg:col-span-2 space-y-4">
            ${[
              { title: 'Call Us', value: '(910) 515-7779', sub: 'Mon-Fri 7am-6pm', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
              { title: 'Email Us', value: 'info@pxgsiteworks.com', sub: 'We reply within 24hrs', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
              { title: 'Visit Us', value: '2415 Castle Hayne Rd', sub: 'Wilmington, NC 28401', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }
            ].map(c => `
            <div class="card-ultra rounded-xl p-5 flex items-start gap-4">
              <div class="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
                <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${c.icon}"></path></svg>
              </div>
              <div>
                <p class="text-gray-500 text-xs uppercase tracking-wider mb-0.5">${c.title}</p>
                <p class="text-white font-semibold">${c.value}</p>
                <p class="text-gray-500 text-sm">${c.sub}</p>
              </div>
            </div>`).join('')}
            
            <!-- Map -->
            <div class="relative rounded-xl overflow-hidden h-44 border border-zinc-800/50">
              <iframe title="PXG Siteworks location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105762.67984895776!2d-77.95766458261068!3d34.22571420597901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f5a20debaed5%3A0x5e66493884093032!2sWilmington%2C%20NC!5e0!3m2!1sen!2sus" class="w-full h-full grayscale opacity-60 hover:opacity-80 hover:grayscale-0 transition-all duration-500" style="border:0" allowfullscreen loading="lazy"></iframe>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="reveal-right lg:col-span-3">
            <form id="contact-form" class="card-ultra rounded-2xl p-7 lg:p-8" onsubmit="submitContactForm(event)">
              <div id="contact-success" class="hidden text-center py-12">
                <div class="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-2 font-display">Message Sent!</h3>
                <p class="text-gray-400">We'll get back to you within 24 hours.</p>
              </div>
              <div id="contact-fields">
                <div class="grid sm:grid-cols-2 gap-4 mb-4">
                  <div><label for="home-name" class="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-medium">Your Name *</label><input id="home-name" name="name" required placeholder="John Smith" class="input-premium w-full h-12 rounded-xl px-4 text-sm" autocomplete="name"></div>
                  <div><label for="home-email" class="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-medium">Email Address *</label><input id="home-email" name="email" type="email" required placeholder="john@example.com" class="input-premium w-full h-12 rounded-xl px-4 text-sm" autocomplete="email"></div>
                </div>
                <div class="grid sm:grid-cols-2 gap-4 mb-4">
                  <div><label for="home-phone" class="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-medium">Phone Number</label><input id="home-phone" name="phone" type="tel" placeholder="(910) 515-7779" class="input-premium w-full h-12 rounded-xl px-4 text-sm" autocomplete="tel"></div>
                  <div><label for="home-service" class="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-medium">Service Needed</label>
                    <select id="home-service" name="service" class="input-premium w-full h-12 rounded-xl px-4 text-sm">
                      <option value="">Select a service...</option>
                      <option value="excavation">Excavation</option>
                      <option value="grading">Site Grading</option>
                      <option value="clearing">Land Clearing</option>
                      <option value="drainage">Drainage Solutions</option>
                      <option value="demolition">Demolition & Hauling</option>
                      <option value="site-prep">Site Preparation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div class="mb-5"><label for="home-message" class="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-medium">Project Details *</label><textarea id="home-message" name="message" required rows="4" placeholder="Tell us about your project - location, scope, timeline, etc." class="input-premium w-full rounded-xl px-4 py-3 text-sm resize-none" autocomplete="off"></textarea></div>
                <button type="submit" id="contact-submit" class="btn-premium w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold h-13 py-3.5 text-base rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-amber-600/20">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <script>
      // ===== Hero Particles =====
      (function() {
        const c = document.getElementById('hero-particles');
        if (!c) return;
        for (let i = 0; i < 20; i++) {
          const p = document.createElement('div');
          p.className = 'particle';
          p.style.left = Math.random() * 100 + '%';
          p.style.width = p.style.height = (Math.random() * 3 + 1) + 'px';
          p.style.opacity = (Math.random() * 0.4 + 0.1).toString();
          p.style.animation = 'particleFloat ' + (Math.random() * 10 + 8) + 's linear ' + (Math.random() * 10) + 's infinite';
          c.appendChild(p);
        }
      })();

      function openLightbox(el) {
        const img = el.querySelector('img');
        document.getElementById('lightbox-img').src = img.dataset.full || img.src;
        document.getElementById('lightbox').classList.remove('hidden');
        document.getElementById('lightbox').classList.add('flex');
        document.body.style.overflow = 'hidden';
      }
      function closeLightbox() {
        document.getElementById('lightbox').classList.add('hidden');
        document.getElementById('lightbox').classList.remove('flex');
        document.body.style.overflow = '';
      }
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

      async function submitContactForm(e) {
        e.preventDefault();
        const form = e.target;
        const btn = document.getElementById('contact-submit');
        btn.disabled = true;
        btn.innerHTML = '<svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg> Sending...';
        
        try {
          const data = Object.fromEntries(new FormData(form));
          data.subject = data.service ? 'Free Quote Request - ' + data.service : 'Free Quote Request';
          const res = await fetch('/api/contact', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data) });
          if (res.ok) {
            document.getElementById('contact-fields').classList.add('hidden');
            document.getElementById('contact-success').classList.remove('hidden');
            if (window.gtag) { gtag('event', 'conversion', { send_to: 'AW-17921730867/z4-yCMeovPMbELPS3-FC', value: 1.0, currency: 'USD' }); gtag('event', 'form_submit', { event_category: 'engagement', event_label: 'contact_form' }); }
            if (window.fbq) { fbq('track', 'Contact'); fbq('track', 'Lead'); }
            setTimeout(() => { document.getElementById('contact-fields').classList.remove('hidden'); document.getElementById('contact-success').classList.add('hidden'); form.reset(); }, 5000);
          } else { alert('Failed to send. Please try again.'); }
        } catch { alert('Failed to send. Please try again.'); }
        btn.disabled = false;
        btn.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg> Send Message';
      }
    </script>
  `
}
