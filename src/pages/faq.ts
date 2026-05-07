export function faqPage(): string {
  const faqs = [
    ['Do you offer free estimates?', 'Yes. We provide free, no-obligation estimates for all excavation, grading, land clearing, and site work projects. One of our team members will visit your property, assess the scope of work, and deliver a detailed written quote &mdash; typically within 48 hours. There is absolutely no cost to you, whether you choose to move forward or not. We believe in earning your business through honest pricing and quality service.'],
    ['What areas do you serve?', 'PXG Siteworks serves the greater Wilmington, NC area and all of Southeastern North Carolina. Our primary service area includes Wilmington, Hampstead, Sneads Ferry, Leland, Wrightsville Beach, Carolina Beach, Surf City, Topsail Beach, Burgaw, Holly Ridge, Ogden, and Porters Neck. We cover New Hanover, Brunswick, Pender, and Onslow Counties. If your project is outside these areas, give us a call &mdash; we frequently travel for the right job.'],
    ['How soon can you start?', 'Start times depend on our current workload and the size of your project. For most residential projects, we can typically begin within one to two weeks of signing a contract. Larger commercial projects may require additional lead time for permitting and planning. We do our best to accommodate urgent timelines and will always keep you updated on scheduling. If you have a hard deadline, let us know upfront so we can plan accordingly.'],
    ['Do you do residential and commercial work?', 'Absolutely. We handle both residential and commercial excavation and site development projects of all sizes. On the residential side, we do everything from single-lot clearing and driveway grading to pool excavation and septic system installation. Commercially, we take on subdivision development, parking lot grading, stormwater management systems, and large-scale site preparation. No matter the size of your project, we bring the same level of professionalism and attention to detail.'],
    ['What types of excavation do you perform?', 'We offer a full range of excavation services including foundation excavation for new homes, basement digging, pool excavation, utility trenching for water, sewer, and electrical lines, pond and retention basin excavation, and general earthmoving. Our fleet includes mini excavators for tight residential lots and full-size excavators for large commercial projects, so we can handle any scope of work.'],
    ['Do you handle land clearing and grading?', 'Yes. We offer comprehensive land clearing services including tree removal, brush clearing, stump grinding, root removal, and debris hauling. For grading, we provide rough grading for construction, finish grading for final surfaces, drainage grading to direct water away from structures, and precision lot leveling. We can clear anything from a small residential lot to a multi-acre commercial property.'],
    ['Can you install culverts and drainage systems?', 'Yes. Drainage is one of our specialties. We install culverts, French drains, catch basins, yard drains, and complete stormwater management systems. Proper drainage prevents water from pooling near foundations, eroding your property, and causing long-term structural damage. Our team will assess your property, design an effective solution, and install it to last. We also handle culvert replacements and drainage improvements on existing properties.'],
    ['Do you install underground utilities?', 'Yes. We provide professional trenching and underground utility installation for water lines, sewer lines, storm drainage systems, electrical conduit, and communication lines. Our experienced operators use precision GPS-guided equipment to ensure accurate depth and placement. We work closely with utility providers and inspectors to make sure everything is installed to code and properly permitted.'],
    ['What equipment do you use?', 'We maintain a modern, well-serviced fleet of heavy equipment including excavators ranging from compact to full-size, bulldozers, skid steer loaders, dump trucks, motor graders, compactors, trenchers, and augers. Our in-house mechanics keep every machine in peak operating condition to minimize downtime and ensure safe, efficient work on your project. Having the right equipment for each job allows us to work faster and deliver more precise results.'],
    ['Are you licensed and insured?', 'Yes, PXG Siteworks is fully licensed and insured. We carry general liability insurance and workers compensation coverage for all of our employees. We are a licensed general contractor in the State of North Carolina. Copies of our insurance certificates are available upon request. When you hire PXG Siteworks, you can rest assured that your property and investment are fully protected.'],
    ['How do I get a quote from the land clearing calculator?', 'Our online <a href="/calculator" class="text-amber-400 hover:text-amber-300 underline">Land Clearing Calculator</a> provides instant cost estimates for your project. Simply enter your property size, tree density, equipment access, and any additional services you need. The calculator generates a detailed cost breakdown and sends it directly to your email. It takes less than two minutes, and our team will follow up within 24 hours to discuss your project in detail.'],
    ['How do I get started?', 'Getting started is easy. You can call us directly at <a href="tel:+19105157779" class="text-amber-400 hover:text-amber-300 font-semibold">(910) 515-7779</a>, fill out our <a href="/contact" class="text-amber-400 hover:text-amber-300 underline">contact form</a>, or use the <a href="/calculator" class="text-amber-400 hover:text-amber-300 underline">Land Clearing Calculator</a> for an instant quote. We will ask a few quick questions about your project, schedule a free site visit if needed, and provide a clear, detailed estimate. From there, we handle everything &mdash; permitting, scheduling, and execution &mdash; so you can focus on your project.']
  ]

  return `<div class="min-h-screen bg-zinc-950">
    <!-- Hero -->
    <section class="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div class="absolute inset-0 mesh-gradient"></div>
      <div class="relative max-w-7xl mx-auto px-6 text-center">
        <div class="animate-fadeInUp inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-xs font-medium mb-6">
          <span class="w-2 h-2 rounded-full bg-amber-400"></span>Help Center
        </div>
        <h1 class="animate-fadeInUp delay-100 text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display">Frequently Asked <span class="gradient-text-animated">Questions</span></h1>
        <p class="animate-fadeInUp delay-200 text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">Have questions about excavation, grading, land clearing, or any of our site work services in Wilmington, NC? Find answers to the most common questions below, or contact us directly for personalized help.</p>
      </div>
    </section>
    
    <!-- FAQ List -->
    <section class="pb-16">
      <div class="max-w-3xl mx-auto px-6">
        <div class="space-y-3 stagger-children" id="faq-list">
          ${faqs.map((f, i) => `
          <div class="card-ultra rounded-xl overflow-hidden hover-glow">
            <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-6 text-left group" aria-expanded="false" aria-controls="faq-answer-${i}">
              <div class="flex items-start gap-4">
                <span class="text-amber-400/50 text-sm font-bold font-display mt-0.5">${String(i + 1).padStart(2, '0')}</span>
                <h3 class="text-base font-semibold text-white group-hover:text-amber-400 transition-colors pr-4">${f[0]}</h3>
              </div>
              <svg class="w-5 h-5 text-amber-500/50 flex-shrink-0 transition-transform duration-300 faq-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="faq-answer hidden" id="faq-answer-${i}" role="region">
              <div class="px-6 pb-6 pl-16">
                <p class="text-gray-400 leading-relaxed text-sm">${f[1]}</p>
              </div>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- Additional Info -->
    <section class="pb-16">
      <div class="max-w-3xl mx-auto px-6">
        <div class="card-ultra rounded-2xl p-8 lg:p-10">
          <h2 class="text-2xl font-bold text-white mb-6 font-display">About Our Process</h2>
          <div class="space-y-4 text-gray-400 text-sm leading-relaxed">
            <p>At PXG Siteworks, we make the process as straightforward as possible. Whether you are a first-time homeowner building your dream home or a seasoned developer breaking ground on a new subdivision, here is what you can expect when you work with us:</p>
            <div class="grid sm:grid-cols-2 gap-4 mt-6">
              ${[
                { step: '1', title: 'Initial Consultation', desc: 'Call us or fill out our form. We will discuss your project scope, timeline, and budget to understand exactly what you need.' },
                { step: '2', title: 'Free Site Visit', desc: 'We visit your property to evaluate soil conditions, access, tree density, slope, drainage, and any potential challenges.' },
                { step: '3', title: 'Detailed Estimate', desc: 'You receive a clear, itemized estimate with no hidden fees. We explain every line item so you know exactly what you are paying for.' },
                { step: '4', title: 'Scheduling & Permits', desc: 'Once approved, we handle scheduling, permitting, and utility locates. You will know the exact start date and projected completion.' },
                { step: '5', title: 'Professional Execution', desc: 'Our experienced crews arrive on time with the right equipment. We keep you updated throughout and maintain a clean, safe job site.' },
                { step: '6', title: 'Final Walkthrough', desc: 'We do a final walkthrough together to make sure everything meets your expectations. We are not done until you are satisfied.' }
              ].map(s => `
              <div class="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-7 h-7 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <span class="text-amber-400 text-xs font-bold">${s.step}</span>
                  </div>
                  <h3 class="text-white font-semibold text-sm">${s.title}</h3>
                </div>
                <p class="text-gray-400 text-sm leading-relaxed">${s.desc}</p>
              </div>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
        
    <!-- CTA -->
    <section class="pb-24 lg:pb-32">
      <div class="max-w-3xl mx-auto px-6">
        <div class="reveal card-ultra rounded-2xl p-10 text-center glow-amber-sm relative overflow-hidden">
          <div class="absolute inset-0 mesh-gradient"></div>
          <div class="relative z-10">
            <h3 class="text-2xl font-bold text-white mb-3 font-display">Didn't Find Your Answer?</h3>
            <p class="text-gray-300 mb-6 max-w-xl mx-auto">Contact us directly and our team will be happy to help. We respond to all inquiries within 24 hours.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+19105157779" class="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full px-7 py-3 font-semibold">Call (910) 515-7779</a>
              <a href="/contact" class="inline-flex items-center gap-2 glass text-white rounded-full px-7 py-3 font-semibold hover:bg-white/10 transition-all border border-white/10">Send a Message</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <script>
    function toggleFaq(btn) {
      const answer = btn.nextElementSibling;
      const chevron = btn.querySelector('.faq-chevron');
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      answer.classList.toggle('hidden');
      chevron.classList.toggle('rotate-180');
      btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    }
  </script>`
}
