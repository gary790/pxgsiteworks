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
        <p class="animate-fadeInUp delay-200 text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">A locally owned excavation and site development company serving Wilmington, Hampstead, Sneads Ferry, Leland, and surrounding areas with quality workmanship and fair pricing.</p>
      </div>
    </section>
    
    <!-- Mission & Values -->
    <section class="py-24 lg:py-32 section-divider">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="reveal-left">
            <span class="section-label mb-4">Our Mission</span>
            <h2 class="text-3xl lg:text-5xl font-bold text-white mt-4 mb-6 font-display">Quality Work.<br><span class="gradient-text-animated">Fair Pricing.</span></h2>
            <p class="text-gray-300 text-lg leading-relaxed mb-6">To provide reliable excavation and site work services with quality workmanship, clear communication, and fair pricing.</p>
            <p class="text-gray-400 leading-relaxed mb-10">We take pride in honest work, dependable scheduling, and delivering clean, professional results on every job &mdash; from small residential site prep to large-scale commercial development.</p>
            
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
                  { t: 'Reliable Scheduling', d: 'We show up when we say we will', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                  { t: 'Respectful Work', d: 'We treat your property with respect', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                  { t: 'Clear Communication', d: 'We communicate clearly from start to finish', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
                  { t: 'Professional Results', d: 'We deliver results you can build on', icon: 'M13 10V3L4 14h7v7l9-11h-7z' }
                ].map(v => `
                <div class="flex items-start gap-4 group">
                  <div class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20 group-hover:bg-amber-500/20 group-hover:border-amber-500/30 transition-all duration-300">
                    <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${v.icon}"/></svg>
                  </div>
                  <div>
                    <p class="font-semibold text-white">${v.t}</p>
                    <p class="text-gray-400 text-sm">${v.d}</p>
                  </div>
                </div>`).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- What We Do -->
    <section class="py-24 lg:py-32 bg-zinc-900/30 section-divider">
      <div class="max-w-7xl mx-auto px-6">
        <div class="reveal text-center mb-16">
          <span class="section-label mb-4">Our Expertise</span>
          <h2 class="text-3xl lg:text-5xl font-bold text-white mt-4 mb-5 font-display">What We <span class="gradient-text-animated">Do</span></h2>
          <p class="text-gray-400 max-w-2xl mx-auto">Comprehensive excavation and site development for residential and commercial projects.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
          ${['Excavation & earthwork', 'Grading & site preparation', 'Land clearing', 'Utility trenching & installation', 'Driveway & drainage solutions', 'Demolition & hauling'].map(s => `
          <div class="flex items-center gap-4 p-5 card-ultra rounded-xl">
            <div class="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </div>
            <span class="text-gray-300 font-medium">${s}</span>
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
            <p class="text-gray-300 mb-8 max-w-2xl mx-auto">Looking for a dependable excavation contractor? We'd love to earn your business.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" class="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full px-8 py-4 font-semibold shadow-lg shadow-amber-600/20">Request a Free Quote</a>
              <a href="tel:+19105157779" class="inline-flex items-center gap-2 glass text-white rounded-full px-8 py-4 font-semibold hover:bg-white/10 transition-all border border-white/10"><svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>Call Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>`
}
