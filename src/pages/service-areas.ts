export function serviceAreasPage(): string {
  const areas = [
    { city: 'Wilmington, NC', desc: 'Excavation, grading, utilities, and site prep for residential and commercial projects.' },
    { city: 'Hampstead, NC', desc: 'Land clearing, building pad prep, driveway work, and grading services.' },
    { city: 'Sneads Ferry, NC', desc: 'Excavation and site work for new builds, property improvements, and drainage.' },
    { city: 'Leland, NC', desc: 'Commercial and residential site prep, grading, and utility trenching.' }
  ]
  return `<div class="min-h-screen bg-zinc-950 py-24 px-6 pt-32">
    <div class="max-w-7xl mx-auto">
      <div class="reveal text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Excavation & Site Work Service Areas</h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">PXG Siteworks proudly provides excavation and site development services across Southeastern North Carolina.</p>
      </div>
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        ${areas.map((a, i) => `
        <div class="reveal bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-amber-600/30 transition-colors" style="transition-delay:${i * 100}ms">
          <div class="flex items-start gap-4 mb-4">
            <div class="w-12 h-12 bg-amber-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <h3 class="text-2xl font-bold text-white">${a.city}</h3>
          </div>
          <p class="text-gray-400 leading-relaxed">${a.desc}</p>
        </div>`).join('')}
      </div>
      <div class="reveal bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-12">
        <h2 class="text-2xl font-bold text-white mb-4">Surrounding Areas</h2>
        <p class="text-gray-400 leading-relaxed">We also serve New Hanover, Brunswick, Pender, and Onslow Counties. If you don't see your town listed, contact us &mdash; we often travel for the right job.</p>
      </div>
      <div class="reveal bg-amber-600/10 border border-amber-600/20 rounded-xl p-8 text-center">
        <h3 class="text-2xl font-bold text-white mb-4">Need Work Done in Your Area?</h3>
        <p class="text-gray-300 mb-8">Contact PXG Siteworks today for a free estimate.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors">Request a Free Quote</a>
          <a href="tel:+19105157779" class="inline-flex items-center justify-center gap-2 px-6 py-3 border border-amber-600 text-amber-500 hover:bg-amber-600/10 font-semibold rounded-lg transition-colors">Call Now</a>
        </div>
      </div>
    </div>
  </div>`
}
