export function aboutPage(): string {
  const values = ['Reliable Scheduling|We show up when we say we will', 'Respectful Work|We treat your property with respect', 'Clear Communication|We communicate clearly from start to finish', 'Professional Results|We deliver results you can build on']
  const services = ['Excavation and earthwork', 'Grading and site preparation', 'Land clearing', 'Utility trenching and installation', 'Driveway and drainage solutions']
  
  return `<div class="min-h-screen bg-zinc-950 py-24 px-6 pt-32">
    <div class="max-w-7xl mx-auto">
      <div class="reveal text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">About PXG Siteworks</h1>
        <p class="text-gray-400 text-xl max-w-3xl mx-auto">A locally owned excavation and site development company serving Wilmington, Hampstead, Sneads Ferry, Leland, and surrounding areas with quality workmanship and fair pricing.</p>
      </div>
      <div class="grid md:grid-cols-2 gap-12 mb-16 items-center">
        <div class="reveal-left">
          <h2 class="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p class="text-gray-300 text-lg leading-relaxed mb-6">To provide reliable excavation and site work services with quality workmanship, clear communication, and fair pricing.</p>
          <p class="text-gray-400 leading-relaxed">We take pride in honest work, dependable scheduling, and delivering clean, professional results on every job &mdash; from small residential site prep to large-scale commercial development.</p>
        </div>
        <div class="reveal-right bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-white mb-6">What Sets Us Apart</h3>
          <div class="space-y-4">
            ${values.map(v => { const [t, d] = v.split('|'); return `<div class="flex items-start gap-3"><svg class="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg><div><p class="font-semibold text-white">${t}</p><p class="text-gray-400 text-sm">${d}</p></div></div>` }).join('')}
          </div>
        </div>
      </div>
      <div class="reveal bg-zinc-900 border border-zinc-800 rounded-2xl p-12 mb-16">
        <h2 class="text-3xl font-bold text-white mb-8 text-center">What We Do</h2>
        <p class="text-gray-400 text-center mb-8 max-w-2xl mx-auto">PXG Siteworks specializes in comprehensive excavation and site development services for residential and commercial projects throughout Southeastern North Carolina.</p>
        <div class="grid sm:grid-cols-2 gap-4">
          ${services.map(s => `<div class="flex items-center gap-3 p-4 bg-zinc-800/50 rounded-lg"><svg class="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg><span class="text-gray-300">${s}</span></div>`).join('')}
        </div>
      </div>
      <div class="reveal bg-amber-600/10 border border-amber-600/20 rounded-2xl p-12 text-center">
        <h3 class="text-2xl font-bold text-white mb-4">Let's Talk About Your Project</h3>
        <p class="text-gray-300 mb-8 max-w-2xl mx-auto">If you're looking for a dependable excavation contractor with a track record of quality work and fair pricing, we'd love to earn your business.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors">Request a Free Quote</a>
          <a href="tel:+19105157779" class="inline-flex items-center justify-center gap-2 px-6 py-3 border border-amber-600 text-amber-500 hover:bg-amber-600/10 font-semibold rounded-lg transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>Call Now</a>
        </div>
      </div>
    </div>
  </div>`
}
