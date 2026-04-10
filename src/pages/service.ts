interface ServiceData {
  title: string; icon: string; desc: string; features: string[]; why: string; whyExtra?: string
}

const services: Record<string, ServiceData> = {
  'excavation': { title: 'Excavation & Earthwork Services', icon: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z', desc: 'Professional excavation and earthwork services for residential and commercial projects throughout Southeastern North Carolina.', features: ['Residential and commercial excavation', 'House pad and shop pad excavation', 'Foundation excavation', 'Footing and trench excavation', 'Backfilling and compaction', 'Dirt work and site shaping', 'Small demolition and removal'], why: "Excavation is the foundation of your entire project. If it's not done correctly, everything that comes after can become a problem.", whyExtra: 'We focus on accurate digging, clean cuts, safe and controlled work, keeping the site clean and organized, and finishing the job the right way.' },
  'site-grading': { title: 'Site Grading Services', icon: 'M8 21l4-4 4 4M4 15l4-4 4 4M12 3l4 4-4 4', desc: 'Professional grading and leveling to ensure proper drainage and a solid foundation for your construction project.', features: ['Precision land leveling', 'Proper drainage setup', 'Foundation preparation', 'Slope management', 'Erosion control', 'Final grade finishing'], why: 'Proper grading is critical for preventing water damage and ensuring structural integrity. Our experienced team uses advanced equipment and laser technology to achieve precise grades.', whyExtra: 'We handle both rough and final grading for residential, commercial, and industrial sites, ensuring optimal drainage patterns and site stability.' },
  'land-clearing': { title: 'Land Clearing Services', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', desc: 'Complete land clearing services including tree removal, brush clearing, and debris hauling to prepare your site.', features: ['Tree removal', 'Brush clearing', 'Stump grinding', 'Debris hauling', 'Lot preparation', 'Vegetation management'], why: 'Transform overgrown or wooded lots into clean, buildable sites. We handle everything from selective clearing to complete lot preparation.', whyExtra: 'Our team efficiently removes trees, brush, and debris while protecting the areas you want to preserve. We also handle all hauling and disposal.' },
  'drainage-solutions': { title: 'Drainage Solutions', icon: 'M12 2.69l5.66 5.66a8 8 0 11-11.31 0z', desc: 'Expert drainage installation and stormwater management to protect your property from water damage.', features: ['French drain installation', 'Stormwater management', 'Catch basin installation', 'Drainage pipe systems', 'Grading for water flow', 'Erosion prevention'], why: 'Proper drainage is essential for protecting your foundation and preventing costly water damage. Our team designs and installs comprehensive drainage systems.', whyExtra: 'From residential yards to commercial developments, we implement effective solutions that manage water flow, prevent erosion, and keep your property dry year-round.' },
  'hauling-demolition': { title: 'Hauling & Demolition', icon: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0', desc: 'Efficient demolition services and material hauling. We remove structures and transport materials safely.', features: ['Structure demolition', 'Concrete removal', 'Debris hauling', 'Material disposal', 'Site cleanup', 'Recycling services'], why: 'Whether you need to demolish an old structure or haul away construction debris, our team has the equipment and expertise to handle it safely.', whyExtra: 'We prioritize safety and environmental responsibility, recycling materials whenever possible and disposing of waste according to all regulations.' },
  'site-preparation': { title: 'Site Preparation', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', desc: 'Complete site prep for commercial and residential construction. From clearing to final grade, we do it all.', features: ['Complete site clearing', 'Grading and leveling', 'Utility preparation', 'Access road building', 'Erosion control setup', 'Final grade finishing'], why: 'Proper site preparation is the foundation of any successful construction project. We provide comprehensive services that prepare your site for building.', whyExtra: 'Our experienced team handles everything from initial clearing through final grading, creating a solid, level, and properly drained building site.' },
  'utilities': { title: 'Utility Trenching & Installation', icon: 'M13 10V3L4 14h7v7l9-11h-7z', desc: 'Professional underground utility installation and trenching services with precision, safety, and attention to detail.', features: ['Water line trenching and installation', 'Sewer line trenching and installation', 'Storm drainage installation', 'Culverts and driveway pipes', 'Catch basins and drainage structures', 'Utility repairs and replacements', 'Trenching for electrical and communications'], why: "Utility work isn't something you want rushed or guessed. It needs to be installed properly, sloped correctly, and compacted the right way.", whyExtra: 'We focus on clean trenching, proper depth and slope, safe work practices, and reliable backfill and compaction.' },
  'driveway': { title: 'Driveway Services', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7', desc: 'Professional driveway installation and grading services for residential properties.', features: ['Driveway grading', 'Gravel driveway installation', 'Driveway widening', 'Drainage solutions', 'Culvert installation', 'Base preparation'], why: 'A properly built driveway starts with proper grading and base preparation. We ensure your driveway has the right slope for drainage and a solid foundation.' },
  'grading': { title: 'Grading Services', icon: 'M8 21l4-4 4 4M4 15l4-4 4 4M12 3l4 4-4 4', desc: 'Professional grading and leveling for all types of projects.', features: ['Rough grading', 'Fine grading', 'Lot leveling', 'Drainage grading', 'Fill dirt work', 'Compaction'], why: 'Accurate grading is critical for every construction project. Our team delivers precise grades that meet specifications.' },
  'drainage': { title: 'Drainage Services', icon: 'M12 2.69l5.66 5.66a8 8 0 11-11.31 0z', desc: 'Comprehensive drainage solutions for residential and commercial properties.', features: ['Yard drainage', 'French drains', 'Catch basins', 'Culverts', 'Stormwater management', 'Erosion control'], why: "Don't let water damage your property. Our drainage solutions keep your site dry and protected year-round." },
}

export function servicePage(slug: string): string {
  const s = services[slug]
  if (!s) return `<div class="min-h-screen bg-zinc-950 pt-32 pb-20 px-6 text-center"><h1 class="text-4xl font-bold text-white">Service Not Found</h1><a href="/" class="text-amber-500 hover:underline mt-4 inline-block">Back to Home</a></div>`

  return `<div class="min-h-screen bg-zinc-950 py-24 px-6 pt-32">
    <div class="max-w-7xl mx-auto">
      <div class="reveal text-center mb-16">
        <div class="w-20 h-20 bg-amber-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg class="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${s.icon}"/></svg>
        </div>
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">${s.title}</h1>
        <p class="text-gray-400 text-xl max-w-3xl mx-auto">${s.desc}</p>
      </div>
      <div class="grid md:grid-cols-2 gap-12 mb-16">
        <div class="reveal-left">
          <h2 class="text-3xl font-bold text-white mb-6">What We Offer</h2>
          <div class="space-y-4">
            ${s.features.map(f => `<div class="flex items-center gap-3"><svg class="w-6 h-6 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg><span class="text-gray-300 text-lg">${f}</span></div>`).join('')}
          </div>
        </div>
        <div class="reveal-right bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
          <p class="text-gray-400 mb-6 leading-relaxed">${s.why}</p>
          ${s.whyExtra ? `<p class="text-gray-400 mb-6 leading-relaxed">${s.whyExtra}</p>` : ''}
          <a href="/contact" class="flex items-center justify-center gap-2 w-full bg-amber-600 hover:bg-amber-700 text-white rounded-lg py-3 font-semibold transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>Get a Free Quote
          </a>
        </div>
      </div>
      <div class="reveal bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-center">
        <h3 class="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
        <p class="text-gray-400 mb-6 max-w-2xl mx-auto">Contact us today for a free consultation and quote. We serve New Hanover, Brunswick, Pender, and Onslow Counties.</p>
        <a href="/contact" class="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors">Contact Us Now</a>
      </div>
    </div>
  </div>`
}
