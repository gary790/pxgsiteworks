export function faqPage(): string {
  const faqs = [
    ['Do you offer free estimates?', 'Yes. We offer free estimates for most excavation, grading, and site work projects. Contact us to schedule a site visit.'],
    ['What areas do you serve?', "We serve Wilmington, Hampstead, Sneads Ferry, Leland, and surrounding areas throughout Southeastern North Carolina. If you don't see your town listed, contact us — we often travel for the right job."],
    ['How soon can you start?', 'Start times vary based on workload and job size. We do our best to schedule quickly and keep you updated on timelines.'],
    ['Do you do residential and commercial work?', 'Yes. We handle both residential and commercial excavation and site development projects of all sizes.'],
    ['Do you handle land clearing and grading?', 'Yes. We offer comprehensive land clearing, debris removal, rough grading, and finish grading services.'],
    ['Can you install culverts and drainage?', 'Yes. We install culverts and provide drainage solutions to prevent washouts, standing water, and runoff issues.'],
    ['Do you install underground utilities?', 'Yes. We provide trenching and underground utility installation for water lines, sewer lines, and drainage systems, depending on project scope.'],
    ['How do I get started?', "Call us at (910) 515-7779 or fill out our quote form. We'll ask a few quick questions, schedule a site visit if needed, and provide a clear estimate."]
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
        <p class="animate-fadeInUp delay-200 text-gray-400 text-lg max-w-2xl mx-auto">Have questions about our services? Find answers below or contact us directly.</p>
      </div>
    </section>
    
    <!-- FAQ List -->
    <section class="pb-24 lg:pb-32">
      <div class="max-w-3xl mx-auto px-6">
        <div class="space-y-3 stagger-children" id="faq-list">
          ${faqs.map((f, i) => `
          <div class="card-ultra rounded-xl overflow-hidden hover-glow">
            <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-6 text-left group">
              <div class="flex items-start gap-4">
                <span class="text-amber-400/50 text-sm font-bold font-display mt-0.5">0${i + 1}</span>
                <h3 class="text-base font-semibold text-white group-hover:text-amber-400 transition-colors pr-4">${f[0]}</h3>
              </div>
              <svg class="w-5 h-5 text-amber-500/50 flex-shrink-0 transition-transform duration-300 faq-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="faq-answer hidden">
              <div class="px-6 pb-6 pl-16">
                <p class="text-gray-400 leading-relaxed text-sm">${f[1]}</p>
              </div>
            </div>
          </div>`).join('')}
        </div>
        
        <!-- CTA -->
        <div class="reveal mt-16 card-ultra rounded-2xl p-10 text-center glow-amber-sm relative overflow-hidden">
          <div class="absolute inset-0 mesh-gradient"></div>
          <div class="relative z-10">
            <h3 class="text-2xl font-bold text-white mb-3 font-display">Didn't Find Your Answer?</h3>
            <p class="text-gray-300 mb-6">Contact us directly and our team will be happy to help.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+19105157779" class="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full px-7 py-3 font-semibold">Call Now</a>
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
      answer.classList.toggle('hidden');
      chevron.classList.toggle('rotate-180');
    }
  </script>`
}
