export function serviceAreasPage(): string {
  const areas = [
    { city: 'Wilmington, NC', desc: 'As our home base, Wilmington is where PXG Siteworks has completed the majority of our 500+ projects. We provide full-service excavation, grading, land clearing, drainage solutions, utility trenching, and site preparation for residential and commercial properties throughout the city. From downtown infill projects to new developments in Monkey Junction, Ogden, and Porters Neck, our crews know the soil conditions, drainage challenges, and permitting requirements of New Hanover County inside and out.', services: ['Foundation excavation', 'Lot clearing & grading', 'Stormwater drainage', 'Septic installation', 'Commercial site prep'] },
    { city: 'Hampstead, NC', desc: 'Hampstead and the surrounding Pender County area have seen tremendous growth in recent years, and PXG Siteworks has been there every step of the way. We help homeowners and builders prepare lots for new construction, install driveways, grade building pads, and clear wooded properties. The sandy soils and high water tables common in Hampstead require specialized drainage knowledge that our team brings to every project.', services: ['Land clearing', 'Driveway grading', 'Building pad prep', 'Drainage systems', 'Utility trenching'] },
    { city: 'Sneads Ferry, NC', desc: 'Sneads Ferry and the greater Onslow County area benefit from our experienced excavation and site work crews. Whether you are building a new home near the coast, improving drainage on an existing property, or preparing a commercial site, we deliver reliable, professional results. Our work in Sneads Ferry includes residential lot prep, land clearing for new subdivisions, erosion control measures, and complete site development for new construction.', services: ['Residential site prep', 'Erosion control', 'Subdivision development', 'Culvert installation', 'Land clearing'] },
    { city: 'Leland, NC', desc: 'Leland and Brunswick County represent one of the fastest-growing markets in North Carolina, and PXG Siteworks is proud to serve this community. We handle everything from single-lot residential clearing to large-scale commercial site preparation. Our Brunswick County projects include subdivision grading, stormwater management system installation, utility trenching for new developments, and demolition and hauling services.', services: ['Commercial grading', 'Stormwater management', 'Demolition & hauling', 'Utility installation', 'Subdivision prep'] }
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
        <p class="animate-fadeInUp delay-200 text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">Proudly providing professional excavation and site development services across Southeastern North Carolina. Based in Wilmington, we serve four counties and dozens of communities with reliable, quality workmanship.</p>
      </div>
    </section>
    
    <!-- Areas Grid -->
    <section class="pb-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-6 stagger-children">
          ${areas.map(a => `
          <div class="card-ultra rounded-2xl p-7 lg:p-8 hover-glow">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
                <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white font-display">${a.city}</h3>
              </div>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed mb-4">${a.desc}</p>
            <div class="pt-4 border-t border-zinc-800/50">
              <h4 class="text-xs text-gray-500 uppercase tracking-wider font-medium mb-2">Popular Services</h4>
              <div class="flex flex-wrap gap-2">
                ${a.services.map(s => `<span class="px-3 py-1 bg-amber-500/5 border border-amber-500/15 text-amber-400/80 rounded-full text-xs">${s}</span>`).join('')}
              </div>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- Additional Communities -->
    <section class="pb-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="reveal text-center mb-10">
          <h2 class="text-2xl lg:text-3xl font-bold text-white font-display mb-4">Additional Communities We Serve</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">Beyond our four primary service areas, we regularly work in the following communities throughout Southeastern North Carolina.</p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 stagger-children">
          ${['Wrightsville Beach', 'Carolina Beach', 'Kure Beach', 'Surf City', 'Topsail Beach', 'North Topsail Beach', 'Holly Ridge', 'Burgaw', 'Ogden', 'Porters Neck', 'Monkey Junction', 'Castle Hayne', 'Wrightsboro', 'Scotts Hill', 'Rocky Point', 'Southport'].map(c => `
          <div class="card-ultra rounded-xl p-4 text-center hover-glow">
            <div class="flex items-center justify-center gap-2">
              <svg class="w-3.5 h-3.5 text-amber-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
              <span class="text-gray-300 text-sm font-medium">${c}</span>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </section>
    
    <!-- Counties -->
    <section class="pb-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="reveal card-ultra rounded-2xl p-8 lg:p-10">
          <h2 class="text-2xl font-bold text-white mb-6 font-display text-center">Counties We Cover</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            ${[
              { county: 'New Hanover County', desc: 'Our home county. Wilmington, Wrightsville Beach, Carolina Beach, Castle Hayne, Ogden, Porters Neck, and Monkey Junction.' },
              { county: 'Brunswick County', desc: 'Leland, Southport, Shallotte, Ocean Isle Beach, Sunset Beach, Bolivia, and Supply.' },
              { county: 'Pender County', desc: 'Hampstead, Burgaw, Surf City, Topsail Beach, Rocky Point, Scotts Hill, and Wrightsboro.' },
              { county: 'Onslow County', desc: 'Sneads Ferry, Holly Ridge, North Topsail Beach, Richlands, and surrounding areas.' }
            ].map(c => `
            <div class="text-center p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
              <h3 class="text-white font-semibold mb-2">${c.county}</h3>
              <p class="text-gray-400 text-xs leading-relaxed">${c.desc}</p>
            </div>`).join('')}
          </div>
          <p class="text-gray-500 text-sm text-center mt-6">Don't see your area listed? Contact us &mdash; we frequently travel beyond our primary service zone for the right project.</p>
        </div>
      </div>
    </section>

    <!-- Why Local Matters -->
    <section class="pb-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <div class="reveal-left">
            <span class="section-label mb-4">Local Advantage</span>
            <h2 class="text-3xl lg:text-4xl font-bold text-white mt-4 mb-6 font-display">Why Hire a <span class="gradient-text-animated">Local Contractor?</span></h2>
            <p class="text-gray-400 leading-relaxed mb-4">Southeastern North Carolina has unique soil conditions, drainage challenges, and building requirements that out-of-area contractors often don't understand. The sandy coastal soils, high water tables, and hurricane-zone building codes all require specialized expertise.</p>
            <p class="text-gray-400 leading-relaxed mb-6">As a locally owned and operated company, PXG Siteworks knows this region intimately. We have relationships with local inspectors, understand county-specific permitting processes, and have decades of experience working with the specific soil types and terrain found in our service area.</p>
            <div class="space-y-3">
              ${['Deep knowledge of local soil types and drainage patterns', 'Relationships with county inspectors and permitting offices', 'Understanding of coastal building code requirements', 'Faster response times and scheduling flexibility', 'Invested in the community we serve'].map(b => `
              <div class="flex items-start gap-3">
                <svg class="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span class="text-gray-300 text-sm">${b}</span>
              </div>`).join('')}
            </div>
          </div>
          <div class="reveal-right">
            <div class="relative rounded-xl overflow-hidden h-80 border border-zinc-800/50">
              <iframe title="PXG Siteworks service area map - Wilmington NC and surrounding areas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105762.67984895776!2d-77.95766458261068!3d34.22571420597901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f5a20debaed5%3A0x5e66493884093032!2sWilmington%2C%20NC!5e0!3m2!1sen!2sus" class="w-full h-full grayscale opacity-60 hover:opacity-80 hover:grayscale-0 transition-all duration-500" style="border:0" allowfullscreen loading="lazy"></iframe>
            </div>
          </div>
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
            <p class="text-gray-300 mb-8 max-w-2xl mx-auto">Contact PXG Siteworks today for a free estimate. We will visit your property, assess the scope of work, and provide a clear, honest quote.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" class="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full px-8 py-4 font-semibold">Request a Free Quote</a>
              <a href="tel:+19105157779" class="inline-flex items-center gap-2 glass text-white rounded-full px-8 py-4 font-semibold hover:bg-white/10 transition-all border border-white/10">Call (910) 515-7779</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>`
}
