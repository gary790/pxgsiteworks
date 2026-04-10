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

  return `<div class="min-h-screen bg-zinc-950 py-24 px-6 pt-32">
    <div class="max-w-3xl mx-auto">
      <div class="reveal text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
        <p class="text-gray-400 text-lg">Have questions about our services? Find answers below or contact us directly.</p>
      </div>
      <div class="space-y-4" id="faq-list">
        ${faqs.map((f, i) => `
        <div class="reveal bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-amber-600/30 transition-colors" style="transition-delay:${i * 50}ms">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800/50 transition-colors">
            <h3 class="text-lg font-semibold text-white pr-4">${f[0]}</h3>
            <svg class="w-5 h-5 text-amber-500 flex-shrink-0 transition-transform duration-300 faq-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="faq-answer hidden border-t border-zinc-800 bg-zinc-950/50">
            <p class="p-6 text-gray-300 leading-relaxed">${f[1]}</p>
          </div>
        </div>`).join('')}
      </div>
      <div class="reveal mt-16 bg-amber-600/10 border border-amber-600/20 rounded-xl p-8 text-center">
        <h3 class="text-2xl font-bold text-white mb-3">Didn't find your answer?</h3>
        <p class="text-gray-300 mb-6">Contact us directly and our team will be happy to help.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+19105157779" class="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors">Call Now</a>
          <a href="/contact" class="inline-block px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-lg transition-colors">Send a Message</a>
        </div>
      </div>
    </div>
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
