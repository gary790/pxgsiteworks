export function aboutPage(): string {
  return `<div class="min-h-screen bg-zinc-950">
    <!-- Hero -->
    <section class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div class="absolute inset-0 mesh-gradient"></div>
      <div class="orb orb-1 top-20 right-10 opacity-30"></div>
      <div class="orb orb-3 bottom-10 left-10 opacity-20"></div>
      <div class="relative max-w-7xl mx-auto px-6 text-center">
        <div class="animate-fadeInUp inline-flex items-center gap-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-5 py-2 rounded-full text-xs font-medium mb-6">
          <span class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span></span>
          Our Story
        </div>
        <h1 class="animate-fadeInUp delay-100 text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display">About PXG <span class="gradient-text-animated">Siteworks</span></h1>
        <p class="animate-fadeInUp delay-200 text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">A locally owned excavation and site development company serving Wilmington, Hampstead, Sneads Ferry, Leland, and surrounding areas with quality workmanship and fair pricing for over two decades.</p>
      </div>
    </section>
    
    <!-- Company Story -->
    <section class="py-24 lg:py-32 section-divider">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="reveal-left">
            <span class="section-label mb-4">Our Mission</span>
            <h2 class="text-3xl lg:text-5xl font-bold text-white mt-4 mb-6 font-display">Quality Work.<br><span class="gradient-text-animated">Fair Pricing.</span></h2>
            <p class="text-gray-300 text-lg leading-relaxed mb-6">To provide reliable excavation and site work services with quality workmanship, clear communication, and fair pricing. That mission has guided PXG Siteworks since day one, and it drives every project we take on today.</p>
            <p class="text-gray-400 leading-relaxed mb-6">Founded in the Wilmington, NC area, PXG Siteworks grew out of a simple belief: homeowners and builders deserve a site contractor who shows up on time, communicates honestly, and delivers work they can be proud of. Over more than 20 years, that philosophy has earned us the trust of hundreds of residential and commercial clients across Southeastern North Carolina.</p>
            <p class="text-gray-400 leading-relaxed mb-10">We take pride in honest work, dependable scheduling, and delivering clean, professional results on every job &mdash; from small residential site prep to large-scale commercial development. Our team treats every property as if it were our own, because your land is the foundation of everything you build.</p>
            
            <div class="grid grid-cols-2 gap-4">
              ${[
                { val: '20+', label: 'Years Experience' },
                { val: '500+', label: 'Projects Completed' },
                { val: '4', label: 'Counties Served' },
                { val: '100%', label: 'Satisfaction' }
              ].map(s => `
              <div class="text-center p-5 rounded-xl card-ultra">
                <div class="text-2xl font-bold gradient-text-animated font-display">${s.val}</div>
                <div class="text-gray-500 text-xs uppercase tracking-wider mt-1">${s.label}</div>
              </div>`).join('')}
            </div>
          </div>
          
          <div class="reveal-right">
            <div class="card-ultra rounded-2xl p-8 lg:p-10">
              <span class="section-label mb-6">Our Values</span>
              <h3 class="text-2xl font-bold text-white mt-4 mb-8 font-display">What Sets Us Apart</h3>
              <div class="space-y-5">
                ${[
                  { t: 'Reliable Scheduling', d: 'We show up when we say we will. Delays cost you money, so we plan carefully and stick to the timeline. If anything changes, you hear about it first.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                  { t: 'Respectful Work', d: 'We treat your property with respect. Our crews keep job sites clean, protect landscaping and structures, and leave your land better than we found it.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                  { t: 'Clear Communication', d: 'We communicate clearly from start to finish. You will know exactly what work is being done, when it will happen, and what it will cost before we break ground.', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
                  { t: 'Professional Results', d: 'We deliver results you can build on &mdash; literally. Our precision grading, clean excavation, and thorough site prep set the stage for successful construction every time.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' }
                ].map(v => `
                <div class="flex items-start gap-4 group">
                  <div class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20 group-hover:bg-amber-500/20 group-hover:border-amber-500/30 transition-all duration-300">
                    <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${v.icon}"/></svg>
                  </div>
                  <div>
                    <p class="font-semibold text-white">${v.t}</p>
                    <p class="text-gray-400 text-sm leading-relaxed">${v.d}</p>
                  </div>
                </div>`).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our History -->
    <section class="py-24 lg:py-32 bg-zinc-900/30 section-divider">
      <div class="max-w-7xl mx-auto px-6">
        <div class="reveal text-center mb-16">
          <span class="section-label mb-4">Our Journey</span>
          <h2 class="text-3xl lg:text-5xl font-bold text-white mt-4 mb-5 font-display">Two Decades of <span class="gradient-text-animated">Excellence</span></h2>
          <p class="text-gray-400 max-w-3xl mx-auto leading-relaxed">From a single excavator and a handshake to one of Southeastern North Carolina's most trusted site work contractors, our journey has been built on hard work, integrity, and a commitment to doing things right.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
          ${[
            { year: '2005', title: 'Founded', desc: 'PXG Siteworks was established in Wilmington, NC, starting with residential excavation and grading projects in the local community.' },
            { year: '2012', title: 'Fleet Expansion', desc: 'Grew our fleet to include dozers, excavators, dump trucks, and skid steers to handle larger residential and commercial projects.' },
            { year: '2018', title: 'Commercial Growth', desc: 'Expanded into large-scale commercial site development, subdivision prep, and municipal drainage projects across four counties.' },
            { year: '2026', title: 'Today', desc: 'Over 500 projects completed. Fully licensed, insured, and serving Wilmington, Hampstead, Sneads Ferry, Leland, and beyond.' }
          ].map(m => `
          <div class="card-ultra rounded-xl p-6 hover-glow">
            <div class="text-amber-400 text-3xl font-bold font-display mb-2">${m.year}</div>
            <h3 class="text-white font-semibold text-lg mb-2">${m.title}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">${m.desc}</p>
          </div>`).join('')}
        </div>
      </div>
    </section>
    
    <!-- What We Do (Expanded) -->
    <section class="py-24 lg:py-32 section-divider">
      <div class="max-w-7xl mx-auto px-6">
        <div class="reveal text-center mb-16">
          <span class="section-label mb-4">Our Expertise</span>
          <h2 class="text-3xl lg:text-5xl font-bold text-white mt-4 mb-5 font-display">What We <span class="gradient-text-animated">Do</span></h2>
          <p class="text-gray-400 max-w-3xl mx-auto leading-relaxed">We provide comprehensive excavation and site development for residential and commercial projects. Whether you need a lot cleared for a new home, a foundation excavated, or a drainage problem solved, our team has the equipment and experience to get it done right.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          ${[
            { title: 'Excavation & Earthwork', desc: 'Foundations, basements, pools, utility trenches, and precision earthmoving for residential and commercial builds.', link: '/services/excavation' },
            { title: 'Grading & Site Preparation', desc: 'Lot leveling, rough grading, finish grading, and complete site prep to ensure proper drainage and a solid building platform.', link: '/services/site-grading' },
            { title: 'Land Clearing', desc: 'Tree removal, brush clearing, stump grinding, and debris hauling to prepare your lot for construction or landscaping.', link: '/services/land-clearing' },
            { title: 'Utility Trenching & Installation', desc: 'Water lines, sewer lines, electrical conduit, storm drains, and culvert installations for residential and commercial sites.', link: '/services/utilities' },
            { title: 'Driveway & Drainage Solutions', desc: 'Driveway grading, gravel installation, French drains, catch basins, and stormwater management to protect your property.', link: '/services/drainage-solutions' },
            { title: 'Demolition & Hauling', desc: 'Safe demolition of sheds, garages, old structures, and concrete. Full debris removal and responsible disposal.', link: '/services/hauling-demolition' }
          ].map(s => `
          <a href="${s.link}" class="group card-ultra rounded-xl p-6 hover-glow block">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              </div>
              <div>
                <h3 class="text-white font-semibold mb-1 group-hover:text-amber-400 transition-colors">${s.title}</h3>
                <p class="text-gray-400 text-sm leading-relaxed">${s.desc}</p>
              </div>
            </div>
          </a>`).join('')}
        </div>
      </div>
    </section>

    <!-- Equipment & Capabilities -->
    <section class="py-24 lg:py-32 bg-zinc-900/30 section-divider">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="reveal-left">
            <span class="section-label mb-4">Our Equipment</span>
            <h2 class="text-3xl lg:text-5xl font-bold text-white mt-4 mb-6 font-display">Modern Fleet, <span class="gradient-text-animated">Proven Results</span></h2>
            <p class="text-gray-300 text-lg leading-relaxed mb-6">We maintain a well-serviced fleet of heavy equipment to handle projects of any size. From compact excavators for tight residential lots to large dozers for commercial clearing, we have the right machine for every job.</p>
            <p class="text-gray-400 leading-relaxed mb-8">Our in-house mechanics keep every piece of equipment in peak condition, so breakdowns never slow your project down. That reliability is part of our promise to you.</p>
            <div class="grid grid-cols-2 gap-3">
              ${['Excavators (mini to full-size)', 'Bulldozers & Dozers', 'Skid Steer Loaders', 'Dump Trucks & Haulers', 'Graders & Compactors', 'Trenchers & Augers'].map(e => `
              <div class="flex items-center gap-2 text-gray-400 text-sm">
                <svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>${e}</span>
              </div>`).join('')}
            </div>
          </div>
          <div class="reveal-right">
            <div class="card-ultra rounded-2xl p-8">
              <h3 class="text-xl font-bold text-white mb-6 font-display">Project Capabilities</h3>
              <div class="space-y-4">
                ${[
                  { title: 'Residential Projects', items: 'New home site prep, lot clearing, foundation excavation, driveway grading, pool excavation, septic installation, drainage systems' },
                  { title: 'Commercial Projects', items: 'Subdivision development, parking lot grading, stormwater management, utility installation, building pad preparation, demolition' },
                  { title: 'Municipal & Infrastructure', items: 'Road grading, culvert installation, storm drain systems, erosion control, utility trenching, right-of-way clearing' }
                ].map(c => `
                <div class="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                  <h4 class="text-amber-400 font-semibold text-sm mb-2">${c.title}</h4>
                  <p class="text-gray-400 text-sm leading-relaxed">${c.items}</p>
                </div>`).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Area + Contact -->
    <section class="py-24 lg:py-32 section-divider">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="reveal-left">
            <span class="section-label mb-4">Where We Work</span>
            <h2 class="text-3xl lg:text-5xl font-bold text-white mt-4 mb-6 font-display">Serving Southeastern <span class="gradient-text-animated">North Carolina</span></h2>
            <p class="text-gray-300 text-lg leading-relaxed mb-6">PXG Siteworks is based in Wilmington, NC, and proudly serves homeowners, builders, and developers throughout the region. Our primary service area includes:</p>
            <div class="grid grid-cols-2 gap-3 mb-8">
              ${['Wilmington, NC', 'Hampstead, NC', 'Sneads Ferry, NC', 'Leland, NC', 'Wrightsville Beach', 'Carolina Beach', 'Surf City', 'Topsail Beach', 'Burgaw', 'Holly Ridge', 'Ogden', 'Porters Neck'].map(a => `
              <div class="flex items-center gap-2 text-gray-400 text-sm">
                <svg class="w-3.5 h-3.5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                <span>${a}</span>
              </div>`).join('')}
            </div>
            <p class="text-gray-400 text-sm leading-relaxed">We cover New Hanover, Brunswick, Pender, and Onslow Counties. If you are outside our listed area, give us a call &mdash; we often travel for the right project.</p>
          </div>
          <div class="reveal-right">
            <div class="card-ultra rounded-2xl p-8">
              <h3 class="text-xl font-bold text-white mb-6 font-display">Contact Us</h3>
              <div class="space-y-4">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
                    <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                  </div>
                  <div>
                    <p class="text-white font-semibold">Office Address</p>
                    <p class="text-gray-400 text-sm">2415 Castle Hayne Rd<br>Wilmington, NC 28401</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
                    <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <p class="text-white font-semibold">Phone</p>
                    <p class="text-gray-400 text-sm"><a href="tel:+19105157779" class="hover:text-amber-400 transition-colors">(910) 515-7779</a></p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
                    <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <p class="text-white font-semibold">Email</p>
                    <p class="text-gray-400 text-sm"><a href="mailto:info@pxgsiteworks.com" class="hover:text-amber-400 transition-colors">info@pxgsiteworks.com</a></p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
                    <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <div>
                    <p class="text-white font-semibold">Business Hours</p>
                    <p class="text-gray-400 text-sm">Monday &ndash; Saturday: 7:00 AM &ndash; 6:00 PM<br>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose PXG -->
    <section class="py-24 lg:py-32 bg-zinc-900/30 section-divider">
      <div class="max-w-7xl mx-auto px-6">
        <div class="reveal text-center mb-16">
          <span class="section-label mb-4">Why PXG</span>
          <h2 class="text-3xl lg:text-5xl font-bold text-white mt-4 mb-5 font-display">Why Choose <span class="gradient-text-animated">PXG Siteworks?</span></h2>
          <p class="text-gray-400 max-w-3xl mx-auto leading-relaxed">When you hire PXG Siteworks, you get more than a contractor &mdash; you get a partner who is invested in the success of your project. Here is what makes us different.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          ${[
            { title: 'Fully Licensed & Insured', desc: 'We carry full liability insurance and workers compensation coverage. Every project is backed by our license, so you have complete peace of mind.' },
            { title: 'Transparent Pricing', desc: 'No hidden fees or surprise charges. We provide detailed, written estimates before any work begins, and we stick to the price we quote.' },
            { title: 'Local Knowledge', desc: 'We know the soil types, drainage challenges, and permitting requirements of Southeastern NC inside and out. That local expertise saves you time and money.' },
            { title: 'On-Time Delivery', desc: 'We understand that delays cascade through your entire project. Our scheduling system and dedicated crews ensure we meet your deadlines consistently.' },
            { title: 'Modern Equipment', desc: 'Our well-maintained fleet includes the latest excavators, dozers, and graders. The right equipment for the job means faster, more precise results.' },
            { title: 'Safety First', desc: 'Every crew member is trained in OSHA safety standards. We maintain strict safety protocols on every job site to protect our team and your property.' }
          ].map(w => `
          <div class="card-ultra rounded-xl p-6 hover-glow">
            <div class="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4 border border-amber-500/20">
              <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <h3 class="text-white font-semibold text-lg mb-2">${w.title}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">${w.desc}</p>
          </div>`).join('')}
        </div>
      </div>
    </section>
    
    <!-- CTA -->
    <section class="py-24 lg:py-28">
      <div class="max-w-4xl mx-auto px-6">
        <div class="reveal card-ultra rounded-2xl p-10 lg:p-14 text-center glow-amber-sm relative overflow-hidden">
          <div class="absolute inset-0 mesh-gradient"></div>
          <div class="relative z-10">
            <h3 class="text-3xl lg:text-4xl font-bold text-white mb-4 font-display">Let's Talk About <span class="gradient-text-animated">Your Project</span></h3>
            <p class="text-gray-300 mb-4 max-w-2xl mx-auto">Looking for a dependable excavation contractor in the Wilmington, NC area? We would love to earn your business. Every project starts with a free, no-obligation estimate.</p>
            <p class="text-gray-400 text-sm mb-8 max-w-xl mx-auto">Call us today or fill out our contact form, and we will get back to you within 24 hours with a detailed quote tailored to your project needs.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" class="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full px-8 py-4 font-semibold shadow-lg shadow-amber-600/20">Request a Free Quote</a>
              <a href="tel:+19105157779" class="inline-flex items-center gap-2 glass text-white rounded-full px-8 py-4 font-semibold hover:bg-white/10 transition-all border border-white/10"><svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>Call (910) 515-7779</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>`
}
