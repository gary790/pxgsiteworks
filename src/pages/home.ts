export function homePage(): string {
  return `
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gray-900" style="background-image:url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697c0eafb66b5201f6fc0bd3/f8774276d_ChatGPTImageFeb13202602_17_16PM.png')">
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>
      <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <p class="animate-fadeInUp delay-200 text-xl md:text-2xl text-gray-300 mb-4 font-light max-w-3xl mx-auto">Transform Your Property with Expert Site Preparation</p>
        <p class="animate-fadeInUp delay-300 text-lg text-gray-400 mb-10 max-w-2xl mx-auto">Residential excavation, land clearing, and grading services for homeowners in Wilmington, NC. We prepare your lot so you can build your dream home.</p>
        <div class="animate-fadeInUp delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact" class="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-600/25">Get a Free Quote</a>
          <a href="tel:+19105157779" onclick="trackPhoneClick()" class="inline-flex items-center gap-2 bg-black text-white hover:bg-zinc-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 border border-white/20">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            (910) 515-7779
          </a>
        </div>
        <div class="animate-fadeInUp delay-500 mt-6">
          <a href="/calculator" class="inline-flex items-center gap-2 bg-white text-zinc-950 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            Land Clearing Calculator
          </a>
        </div>
      </div>
      <div class="animate-fadeIn delay-1000 absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer" onclick="document.getElementById('services').scrollIntoView({behavior:'smooth'})">
        <div class="animate-bounce-slow flex flex-col items-center text-white/60 hover:text-white transition-colors">
          <span class="text-sm tracking-widest uppercase mb-2">Explore</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-24 bg-zinc-950">
      <div class="max-w-7xl mx-auto px-6">
        <div class="reveal text-center mb-16">
          <span class="text-amber-500 font-medium tracking-widest uppercase text-sm">What We Do</span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Residential Site Services</h2>
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">From clearing your lot to preparing your home's foundation, we provide comprehensive residential sitework solutions to bring your property vision to life.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${[
            { icon: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z', title: 'Excavation', desc: 'Precision excavation for home foundations, basements, pools, and driveways. Expert residential excavation services.', slug: 'excavation' },
            { icon: 'M8 21l4-4 4 4M4 15l4-4 4 4M12 3l4 4-4 4', title: 'Site Grading', desc: 'Professional lot grading and leveling to ensure proper drainage around your home and perfect foundation preparation.', slug: 'site-grading' },
            { icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', title: 'Land Clearing', desc: 'Clear your residential lot including tree removal, brush clearing, and debris removal to prepare for building.', slug: 'land-clearing' },
            { icon: 'M12 2.69l5.66 5.66a8 8 0 11-11.31 0z', title: 'Drainage Solutions', desc: 'Protect your home with expert drainage installation and yard drainage systems to prevent water damage.', slug: 'drainage-solutions' },
            { icon: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0', title: 'Hauling & Demolition', desc: 'Remove old structures, sheds, or garages. Safe residential demolition and material hauling services.', slug: 'hauling-demolition' },
            { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', title: 'Site Preparation', desc: 'Complete lot preparation for your new home. From clearing to final grade, we prepare your property for construction.', slug: 'site-preparation' },
            { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Utility Installation', desc: 'Residential utility trenching and installation for water lines, sewer, and underground electrical.', slug: 'utilities' }
          ].map((s, i) => `
          <a href="/services/${s.slug}" class="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-amber-600/50 transition-all duration-500 hover:bg-zinc-900 cursor-pointer h-full reveal" style="transition-delay:${i * 100}ms">
            <div class="absolute top-0 right-0 w-32 h-32 bg-amber-600/5 rounded-full blur-3xl group-hover:bg-amber-600/10 transition-all duration-500"></div>
            <div class="relative">
              <div class="w-14 h-14 bg-amber-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600/20 transition-all duration-300">
                <svg class="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${s.icon}"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">${s.title}</h3>
              <p class="text-gray-400 leading-relaxed mb-4">${s.desc}</p>
              <span class="text-amber-500 text-sm font-medium group-hover:underline">Learn More &rarr;</span>
            </div>
          </a>`).join('')}
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-24 bg-zinc-900">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="reveal-left relative">
            <div class="relative rounded-2xl overflow-hidden">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697c0eafb66b5201f6fc0bd3/e11c35c11_FullSizeR.jpg" alt="Excavator at work" class="w-full h-[500px] object-cover" loading="lazy">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div class="reveal absolute -bottom-8 -right-4 md:right-8 bg-amber-600 rounded-2xl p-6 shadow-2xl shadow-amber-600/20">
              <div class="text-white"><p class="text-4xl font-bold">20+</p><p class="text-amber-100 text-sm">Years of Excellence</p></div>
            </div>
          </div>
          <div class="reveal-right">
            <span class="text-amber-500 font-medium tracking-widest uppercase text-sm">About Us</span>
            <h2 class="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Building Strong <br><span class="text-amber-500">Foundations</span></h2>
            <p class="text-gray-400 text-lg mb-6 leading-relaxed">PXG Siteworks is your trusted partner for residential excavation and site preparation in Wilmington, NC. We specialize in helping homeowners prepare their land for new homes, additions, pools, and landscaping projects throughout the coastal region.</p>
            <p class="text-gray-400 mb-8 leading-relaxed">Our team combines decades of experience with modern equipment to deliver exceptional results for your home project. We understand that your property is your biggest investment, and we treat it with the care and professionalism it deserves.</p>
            <div class="grid sm:grid-cols-2 gap-4 mb-10">
              ${['Fully Licensed & Insured', 'On-Time Project Delivery', 'Quality Workmanship Guaranteed', 'Free Estimates'].map(f => `
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-amber-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <span class="text-gray-300 font-medium">${f}</span>
              </div>`).join('')}
            </div>
          </div>
        </div>
        <div class="reveal flex justify-center mt-20 pt-12 border-t border-zinc-800">
          <div class="text-center"><p class="text-4xl md:text-5xl font-bold text-white mb-2">20+</p><p class="text-gray-500 text-sm uppercase tracking-wider">Years Experience</p></div>
        </div>
      </div>
    </section>

    <!-- Projects Gallery -->
    <section id="projects" class="py-24 bg-zinc-950">
      <div class="max-w-7xl mx-auto px-6">
        <div class="reveal text-center mb-16">
          <span class="text-amber-500 font-medium tracking-widest uppercase text-sm">Our Work</span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Recent Projects</h2>
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">Take a look at some of our recent excavation and site development projects across the Wilmington area.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${[
            { img: 'fc6b71353_20240201_150031.jpg', title: 'Commercial Site Prep', cat: 'Site Preparation', desc: '15-acre commercial development site preparation in Brunswick County' },
            { img: '933ec73b2_Resized_20210607_185143.jpg', title: 'Residential Excavation', cat: 'Excavation', desc: 'Foundation excavation for custom home in Wrightsville Beach' },
            { img: 'e5d8b401e_20230223_090323.jpg', title: 'Land Clearing', cat: 'Land Clearing', desc: '10-acre land clearing project for new subdivision' },
            { img: 'd9b764571_dji_fly_2.jpg', title: 'Drainage Installation', cat: 'Drainage', desc: 'Commercial stormwater management system installation' },
            { img: '225c5cd3b_MAX_0029.jpg', title: 'Site Grading', cat: 'Grading', desc: 'Precision grading for retail development parking lot' },
            { img: '0edbe1433_20211106_171152.jpg', title: 'Septic System Installation', cat: 'Septic Systems', desc: 'Complete septic system installation for residential property' }
          ].map((p, i) => `
          <div class="reveal group relative rounded-2xl overflow-hidden cursor-pointer" style="transition-delay:${i * 100}ms" onclick="openLightbox(this)">
            <div class="aspect-[4/3] overflow-hidden bg-gray-800">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697c0eafb66b5201f6fc0bd3/${p.img}" alt="${p.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-full="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697c0eafb66b5201f6fc0bd3/${p.img}">
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <span class="inline-block px-3 py-1 bg-amber-600/80 text-white text-xs font-medium rounded-full mb-3">${p.cat}</span>
              <h3 class="text-xl font-bold text-white mb-1">${p.title}</h3>
              <p class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">${p.desc}</p>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div id="lightbox" class="fixed inset-0 z-50 bg-black/95 hidden items-center justify-center p-6" onclick="closeLightbox()">
      <button class="absolute top-6 right-6 text-white/70 hover:text-white transition-colors" onclick="closeLightbox()">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
      <div class="max-w-4xl w-full" onclick="event.stopPropagation()">
        <img id="lightbox-img" src="" alt="" class="w-full rounded-2xl">
      </div>
    </div>

    <!-- Calculator CTA -->
    <section class="py-24 bg-zinc-950 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-amber-600/5 via-transparent to-transparent"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="reveal text-center mb-12">
          <span class="text-amber-500 font-medium tracking-widest uppercase text-sm">Free Instant Quote</span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Land Clearing Calculator</h2>
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">Get an accurate estimate for your land clearing project in under 2 minutes</p>
        </div>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="reveal-left space-y-6">
            ${[
              { title: 'Takes 2 Minutes', desc: 'Quick and easy multi-step form' },
              { title: 'Instant Pricing', desc: 'Get immediate cost estimates' },
              { title: 'Detailed Breakdown', desc: "See exactly what you're paying for" }
            ].map(f => `
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-amber-600/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-amber-600/20">
                <svg class="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div><h3 class="text-white font-semibold text-lg mb-1">${f.title}</h3><p class="text-gray-400">${f.desc}</p></div>
            </div>`).join('')}
          </div>
          <div class="reveal-right bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700/50 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl"></div>
            <div class="relative z-10">
              <div class="inline-flex items-center justify-center w-20 h-20 bg-amber-600/20 rounded-full mb-6">
                <svg class="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Calculate Your Quote</h3>
              <p class="text-gray-400 mb-8">Answer a few simple questions about your property and get an instant, detailed estimate for your land clearing project.</p>
              <a href="/calculator" class="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-600/25">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                Start Calculator
              </a>
              <p class="text-gray-500 text-sm mt-4">No obligation &bull; Free quote &bull; Takes 2 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 bg-zinc-900">
      <div class="max-w-7xl mx-auto px-6">
        <div class="reveal text-center mb-16">
          <span class="text-amber-500 font-medium tracking-widest uppercase text-sm">Get In Touch</span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Request a Free Quote</h2>
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">Ready to start your project? Contact us today for a free estimate. We'll get back to you within 24 hours.</p>
        </div>
        <div class="grid lg:grid-cols-5 gap-12">
          <div class="reveal-left lg:col-span-2 space-y-6">
            ${[
              { title: 'Call Us', value: '(910) 515-7779', sub: 'Mon-Fri 7am-6pm' },
              { title: 'Email Us', value: 'info@pxgsiteworks.com', sub: 'We reply within 24hrs' },
              { title: 'Visit Us', value: '2415 Castle Hayne Rd', sub: 'Wilmington, NC 28401' }
            ].map(c => `
            <div class="flex items-start gap-4 p-5 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-amber-600/30 transition-colors">
              <div class="w-12 h-12 bg-amber-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <p class="text-gray-400 text-sm">${c.title}</p>
                <p class="text-white font-semibold text-lg">${c.value}</p>
                <p class="text-gray-500 text-sm">${c.sub}</p>
              </div>
            </div>`).join('')}
            <div class="relative rounded-xl overflow-hidden h-48">
              <iframe title="PXG Siteworks location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105762.67984895776!2d-77.95766458261068!3d34.22571420597901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f5a20debaed5%3A0x5e66493884093032!2sWilmington%2C%20NC!5e0!3m2!1sen!2sus" class="w-full h-full grayscale opacity-70" style="border:0" allowfullscreen loading="lazy"></iframe>
            </div>
          </div>
          <div class="reveal-right lg:col-span-3">
            <form id="contact-form" class="bg-zinc-800/50 rounded-2xl p-8 border border-zinc-700/50" onsubmit="submitContactForm(event)">
              <div id="contact-success" class="hidden text-center py-12">
                <div class="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p class="text-gray-400">We'll get back to you within 24 hours.</p>
              </div>
              <div id="contact-fields">
                <div class="grid sm:grid-cols-2 gap-5 mb-5">
                  <div><label class="block text-gray-400 text-sm mb-2">Your Name *</label><input name="name" required placeholder="John Smith" class="w-full h-12 bg-zinc-900 border border-zinc-700 text-white rounded-md px-3 focus:border-amber-600 focus:outline-none placeholder:text-gray-500"></div>
                  <div><label class="block text-gray-400 text-sm mb-2">Email Address *</label><input name="email" type="email" required placeholder="john@example.com" class="w-full h-12 bg-zinc-900 border border-zinc-700 text-white rounded-md px-3 focus:border-amber-600 focus:outline-none placeholder:text-gray-500"></div>
                </div>
                <div class="grid sm:grid-cols-2 gap-5 mb-5">
                  <div><label class="block text-gray-400 text-sm mb-2">Phone Number</label><input name="phone" type="tel" placeholder="(910) 515-7779" class="w-full h-12 bg-zinc-900 border border-zinc-700 text-white rounded-md px-3 focus:border-amber-600 focus:outline-none placeholder:text-gray-500"></div>
                  <div><label class="block text-gray-400 text-sm mb-2">Service Needed</label>
                    <select name="service" class="w-full h-12 bg-zinc-900 border border-zinc-700 text-white rounded-md px-3 focus:border-amber-600 focus:outline-none">
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
                <div class="mb-6"><label class="block text-gray-400 text-sm mb-2">Project Details *</label><textarea name="message" required rows="5" placeholder="Tell us about your project - location, scope, timeline, etc." class="w-full bg-zinc-900 border border-zinc-700 text-white rounded-md px-3 py-3 focus:border-amber-600 focus:outline-none resize-none placeholder:text-gray-500"></textarea></div>
                <button type="submit" id="contact-submit" class="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold h-14 text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2">
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
      function openLightbox(el) {
        const img = el.querySelector('img');
        document.getElementById('lightbox-img').src = img.dataset.full || img.src;
        document.getElementById('lightbox').classList.remove('hidden');
        document.getElementById('lightbox').classList.add('flex');
      }
      function closeLightbox() {
        document.getElementById('lightbox').classList.add('hidden');
        document.getElementById('lightbox').classList.remove('flex');
      }

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
