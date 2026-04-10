interface ServiceData {
  title: string; icon: string; desc: string; features: string[]; why: string; whyExtra?: string
  heroImg?: string; process?: string[]
}

const services: Record<string, ServiceData> = {
  'excavation': { title: 'Excavation & Earthwork', icon: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z', desc: 'Professional excavation and earthwork services for residential and commercial projects throughout Southeastern North Carolina.', features: ['Residential & commercial excavation', 'House pad & shop pad excavation', 'Foundation excavation', 'Footing & trench excavation', 'Backfilling & compaction', 'Dirt work & site shaping', 'Small demolition & removal'], why: "Excavation is the foundation of your entire project. If it's not done correctly, everything that comes after can become a problem.", whyExtra: 'We focus on accurate digging, clean cuts, safe and controlled work, keeping the site clean and organized, and finishing the job the right way.', process: ['Site assessment & planning', 'Equipment mobilization', 'Excavation execution', 'Backfill & compaction', 'Final inspection'] },
  'site-grading': { title: 'Site Grading', icon: 'M8 21l4-4 4 4M4 15l4-4 4 4M12 3l4 4-4 4', desc: 'Professional grading and leveling to ensure proper drainage and a solid foundation for your construction project.', features: ['Precision land leveling', 'Proper drainage setup', 'Foundation preparation', 'Slope management', 'Erosion control', 'Final grade finishing'], why: 'Proper grading is critical for preventing water damage and ensuring structural integrity. Our experienced team uses advanced equipment to achieve precise grades.', whyExtra: 'We handle both rough and final grading for residential, commercial, and industrial sites, ensuring optimal drainage patterns and site stability.', process: ['Topographic survey', 'Drainage planning', 'Rough grading', 'Fine grading', 'Quality verification'] },
  'land-clearing': { title: 'Land Clearing', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', desc: 'Complete land clearing services including tree removal, brush clearing, and debris hauling to prepare your site.', features: ['Tree removal', 'Brush clearing', 'Stump grinding', 'Debris hauling', 'Lot preparation', 'Vegetation management'], why: 'Transform overgrown or wooded lots into clean, buildable sites. We handle everything from selective clearing to complete lot preparation.', whyExtra: 'Our team efficiently removes trees, brush, and debris while protecting the areas you want to preserve.', process: ['Property assessment', 'Clearing plan', 'Tree & brush removal', 'Debris disposal', 'Site cleanup'] },
  'drainage-solutions': { title: 'Drainage Solutions', icon: 'M12 2.69l5.66 5.66a8 8 0 11-11.31 0z', desc: 'Expert drainage installation and stormwater management to protect your property from water damage.', features: ['French drain installation', 'Stormwater management', 'Catch basin installation', 'Drainage pipe systems', 'Grading for water flow', 'Erosion prevention'], why: 'Proper drainage is essential for protecting your foundation and preventing costly water damage.', whyExtra: 'From residential yards to commercial developments, we implement effective solutions that manage water flow and keep your property dry.', process: ['Drainage assessment', 'System design', 'Trenching & installation', 'Grading & finishing', 'Flow testing'] },
  'hauling-demolition': { title: 'Hauling & Demolition', icon: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0', desc: 'Efficient demolition services and material hauling. We remove structures and transport materials safely.', features: ['Structure demolition', 'Concrete removal', 'Debris hauling', 'Material disposal', 'Site cleanup', 'Recycling services'], why: 'Whether you need to demolish an old structure or haul away construction debris, our team handles it safely and efficiently.', whyExtra: 'We prioritize safety and environmental responsibility, recycling materials whenever possible.', process: ['Safety assessment', 'Demolition planning', 'Controlled demolition', 'Debris hauling', 'Site restoration'] },
  'site-preparation': { title: 'Site Preparation', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', desc: 'Complete site prep for commercial and residential construction. From clearing to final grade, we do it all.', features: ['Complete site clearing', 'Grading & leveling', 'Utility preparation', 'Access road building', 'Erosion control setup', 'Final grade finishing'], why: 'Proper site preparation is the foundation of any successful construction project.', whyExtra: 'Our experienced team handles everything from initial clearing through final grading, creating a solid building site.', process: ['Site evaluation', 'Clearing & grubbing', 'Rough grading', 'Utility prep', 'Final grading'] },
  'utilities': { title: 'Utility Trenching & Installation', icon: 'M13 10V3L4 14h7v7l9-11h-7z', desc: 'Professional underground utility installation and trenching services with precision, safety, and attention to detail.', features: ['Water line trenching', 'Sewer line installation', 'Storm drainage systems', 'Culverts & driveway pipes', 'Catch basins', 'Utility repairs', 'Electrical trenching'], why: "Utility work needs to be installed properly, sloped correctly, and compacted the right way.", whyExtra: 'We focus on clean trenching, proper depth and slope, safe work practices, and reliable backfill and compaction.', process: ['Utility locating', 'Trenching', 'Pipe installation', 'Backfill & compaction', 'Inspection'] },
  'driveway': { title: 'Driveway Services', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7', desc: 'Professional driveway installation and grading services for residential properties.', features: ['Driveway grading', 'Gravel installation', 'Driveway widening', 'Drainage solutions', 'Culvert installation', 'Base preparation'], why: 'A properly built driveway starts with proper grading and base preparation.', process: ['Site survey', 'Base preparation', 'Grading', 'Material installation', 'Final finish'] },
  'grading': { title: 'Grading Services', icon: 'M8 21l4-4 4 4M4 15l4-4 4 4M12 3l4 4-4 4', desc: 'Professional grading and leveling for all types of projects.', features: ['Rough grading', 'Fine grading', 'Lot leveling', 'Drainage grading', 'Fill dirt work', 'Compaction'], why: 'Accurate grading is critical for every construction project.', process: ['Survey & planning', 'Rough grade', 'Fine grade', 'Compaction', 'Verification'] },
  'drainage': { title: 'Drainage Services', icon: 'M12 2.69l5.66 5.66a8 8 0 11-11.31 0z', desc: 'Comprehensive drainage solutions for residential and commercial properties.', features: ['Yard drainage', 'French drains', 'Catch basins', 'Culverts', 'Stormwater management', 'Erosion control'], why: "Don't let water damage your property. Our drainage solutions keep your site dry and protected.", process: ['Assessment', 'Design', 'Installation', 'Testing', 'Completion'] },
}

export function servicePage(slug: string): string {
  const s = services[slug]
  if (!s) return `<div class="min-h-screen bg-zinc-950 pt-32 pb-20 px-6 text-center"><h1 class="text-4xl font-bold text-white font-display">Service Not Found</h1><a href="/" class="text-amber-400 hover:underline mt-4 inline-block">Back to Home</a></div>`

  const process = s.process || ['Consultation', 'Planning', 'Execution', 'Completion', 'Inspection']

  return `<div class="min-h-screen bg-zinc-950">
    <!-- Hero -->
    <section class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div class="absolute inset-0 mesh-gradient"></div>
      <div class="orb orb-1 top-20 right-10 opacity-30"></div>
      <div class="orb orb-3 bottom-10 left-10 opacity-20"></div>
      
      <div class="relative max-w-7xl mx-auto px-6 text-center">
        <div class="animate-fadeInUp inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-xs font-medium mb-6">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${s.icon}"/></svg>
          Professional Service
        </div>
        <h1 class="animate-fadeInUp delay-100 text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display">${s.title}</h1>
        <p class="animate-fadeInUp delay-200 text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">${s.desc}</p>
        <div class="animate-fadeInUp delay-300 mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full px-7 py-3.5 font-semibold shadow-lg shadow-amber-600/20">Get a Free Quote <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
          <a href="tel:+19105157779" class="inline-flex items-center gap-2 glass text-white rounded-full px-7 py-3.5 font-semibold hover:bg-white/10 transition-all border border-white/10">
            <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            Call Now
          </a>
        </div>
      </div>
    </section>
    
    <!-- Features & Why Us -->
    <section class="py-20 lg:py-28 section-divider">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <!-- Features -->
          <div class="reveal-left">
            <span class="inline-flex items-center gap-2 text-amber-400 font-medium tracking-widest uppercase text-xs mb-4">
              <span class="w-8 h-px bg-amber-500/50"></span>What We Offer
            </span>
            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-8 font-display">Our ${s.title} Services</h2>
            <div class="space-y-3 stagger-children">
              ${s.features.map(f => `
              <div class="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-amber-500/20 transition-colors group">
                <div class="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                  <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span class="text-gray-300 font-medium text-sm">${f}</span>
              </div>`).join('')}
            </div>
          </div>
          
          <!-- Why Choose Us -->
          <div class="reveal-right">
            <div class="card-ultra rounded-2xl p-8 lg:p-10 h-full">
              <span class="inline-flex items-center gap-2 text-amber-400 font-medium tracking-widest uppercase text-xs mb-4">
                <span class="w-8 h-px bg-amber-500/50"></span>Why Choose Us
              </span>
              <h3 class="text-2xl lg:text-3xl font-bold text-white mb-6 font-display">Expert Care for Your Project</h3>
              <p class="text-gray-400 mb-6 leading-relaxed">${s.why}</p>
              ${s.whyExtra ? `<p class="text-gray-400 mb-8 leading-relaxed">${s.whyExtra}</p>` : ''}
              
              <div class="grid grid-cols-2 gap-3 mb-8">
                ${['Licensed & Insured', 'Free Estimates', 'On-Time Delivery', 'Quality Guaranteed'].map(b => `
                <div class="flex items-center gap-2 text-sm text-gray-300">
                  <svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  ${b}
                </div>`).join('')}
              </div>
              
              <a href="/contact" class="btn-premium flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-xl py-3.5 font-semibold">
                Get a Free Quote
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Process Timeline -->
    <section class="py-20 lg:py-28 bg-zinc-900/30 section-divider">
      <div class="max-w-5xl mx-auto px-6">
        <div class="reveal text-center mb-16">
          <span class="inline-flex items-center gap-2 text-amber-400 font-medium tracking-widest uppercase text-xs mb-4">
            <span class="w-8 h-px bg-amber-500/50"></span>Our Process<span class="w-8 h-px bg-amber-500/50"></span>
          </span>
          <h2 class="text-3xl lg:text-4xl font-bold text-white mt-2 mb-5 font-display">How We Work</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">A proven process that delivers consistent, high-quality results every time.</p>
        </div>
        
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-6 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/30 via-amber-500/10 to-transparent hidden sm:block"></div>
          
          <div class="space-y-8 stagger-children">
            ${process.map((step, i) => `
            <div class="relative flex items-start gap-6 sm:gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:gap-16">
              <!-- Dot -->
              <div class="absolute left-6 lg:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-500 border-4 border-zinc-950 z-10 hidden sm:block" style="top: 1.5rem;"></div>
              
              <!-- Content -->
              <div class="flex-1 ${i % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'} sm:pl-16 lg:pl-0">
                <div class="card-ultra rounded-xl p-6 inline-block ${i % 2 === 0 ? 'lg:ml-auto' : ''}">
                  <div class="flex items-center gap-3 mb-2 ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}">
                    <span class="text-amber-400 text-xs font-bold bg-amber-500/10 px-2.5 py-1 rounded-full">0${i + 1}</span>
                    <h3 class="text-white font-semibold font-display">${step}</h3>
                  </div>
                </div>
              </div>
              <div class="flex-1 hidden lg:block"></div>
            </div>`).join('')}
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA -->
    <section class="py-20 lg:py-24">
      <div class="max-w-4xl mx-auto px-6">
        <div class="reveal card-ultra rounded-2xl p-10 lg:p-14 text-center glow-amber-sm relative overflow-hidden">
          <div class="absolute inset-0 mesh-gradient"></div>
          <div class="relative z-10">
            <h3 class="text-3xl lg:text-4xl font-bold text-white mb-4 font-display">Ready to Start Your Project?</h3>
            <p class="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">Contact us today for a free consultation and quote. We serve New Hanover, Brunswick, Pender, and Onslow Counties.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" class="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full px-8 py-4 font-semibold">Contact Us Now <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
              <a href="/calculator" class="inline-flex items-center gap-2 glass text-white rounded-full px-8 py-4 font-semibold hover:bg-white/10 transition-all border border-white/10">Try Our Calculator</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>`
}
