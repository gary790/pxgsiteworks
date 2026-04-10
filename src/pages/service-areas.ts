export function serviceAreasPage(): string {
  const areas = [
    { city: 'Wilmington, NC', desc: 'Excavation, grading, utilities, and site prep for residential and commercial projects.' },
    { city: 'Hampstead, NC', desc: 'Land clearing, building pad prep, driveway work, and grading services.' },
    { city: 'Sneads Ferry, NC', desc: 'Excavation and site work for new builds, property improvements, and drainage.' },
    { city: 'Leland, NC', desc: 'Commercial and residential site prep, grading, and utility trenching.' }
  ]
  return `<div class="min-h-screen bg-zinc-950">
    <!-- Hero -->
    <section class="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div class="absolute inset-0 mesh-gradient"></div>
      <div class="relative max-w-7xl mx-auto px-6 text-center">
        <div class="animate-fadeInUp inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-xs font-medium mb-6">
          <span class="w-2 h-2 rounded-full bg-amber-400"></span>Coverage Area
        </div>
        <h1 class="animate-fadeInUp delay-100 text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display">Service <span class="gradient-text-animated">Areas</span></h1>
        <p class="animate-fadeInUp delay-200 text-gray-400 text-lg max-w-2xl mx-auto">Proudly providing excavation and site development services across Southeastern North Carolina.</p>
      </div>
    </section>
    
    <!-- Areas Grid -->
    <section class="pb-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-5 stagger-children">
          ${areas.map(a => `
          <div class="card-ultra rounded-2xl p-7 hover-glow">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
                <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white font-display">${a.city}</h3>
                <p class="text-gray-400 text-sm leading-relaxed mt-1">${a.desc}</p>
              </div>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </section>
    
    <!-- Surrounding Areas -->
    <section class="pb-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="reveal card-ultra rounded-2xl p-8 text-center">
          <h2 class="text-2xl font-bold text-white mb-4 font-display">Surrounding Areas</h2>
          <p class="text-gray-400 leading-relaxed max-w-2xl mx-auto">We also serve New Hanover, Brunswick, Pender, and Onslow Counties. If you don't see your town listed, contact us &mdash; we often travel for the right job.</p>
        </div>
      </div>
    </section>
    
    <!-- CTA -->
    <section class="pb-24 lg:pb-32">
      <div class="max-w-4xl mx-auto px-6">
        <div class="reveal card-ultra rounded-2xl p-10 lg:p-14 text-center glow-amber-sm relative overflow-hidden">
          <div class="absolute inset-0 mesh-gradient"></div>
          <div class="relative z-10">
            <h3 class="text-3xl font-bold text-white mb-4 font-display">Need Work Done in <span class="gradient-text-animated">Your Area?</span></h3>
            <p class="text-gray-300 mb-8">Contact PXG Siteworks today for a free estimate.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" class="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full px-8 py-4 font-semibold">Request a Free Quote</a>
              <a href="tel:+19105157779" class="inline-flex items-center gap-2 glass text-white rounded-full px-8 py-4 font-semibold hover:bg-white/10 transition-all border border-white/10">Call Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>`
}
