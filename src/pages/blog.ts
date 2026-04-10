export function blogPage(): string {
  const posts = [
    { id: 'land-clearing-cost-wilmington-nc-2026', title: 'Complete Guide: Land Clearing Cost in Wilmington NC (2026)', excerpt: 'Everything you need to know about land clearing costs in Wilmington, NC. Average pricing, factors that affect cost, and tips to save money.', date: '2026-02-12', readTime: '8 min read', cat: 'Cost Guides', img: 'fc6b71353_20240201_150031.jpg' },
    { id: 'demolition-cost-wilmington-nc-2026', title: 'Demolition Costs in Wilmington NC: 2026 Pricing Guide', excerpt: 'Complete breakdown of demolition costs in Wilmington, NC. From small structure removal to full residential demolition.', date: '2026-02-11', readTime: '7 min read', cat: 'Cost Guides', img: '506e5f938_ChatGPTImageFeb12202603_34_43PM.png' },
    { id: 'site-grading-cost-wilmington-nc-2026', title: 'Site Grading Costs in Wilmington NC: What to Expect in 2026', excerpt: 'Expert guide to site grading and land leveling costs in Wilmington, NC. Understand what drives pricing.', date: '2026-02-10', readTime: '7 min read', cat: 'Cost Guides', img: '510324864_ChatGPTImageFeb12202603_38_27PM.png' }
  ]
  return `<div class="min-h-screen bg-zinc-950">
    <!-- Hero -->
    <section class="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div class="absolute inset-0 mesh-gradient"></div>
      <div class="relative max-w-7xl mx-auto px-6 text-center">
        <div class="animate-fadeInUp inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-xs font-medium mb-6">
          <span class="w-2 h-2 rounded-full bg-amber-400"></span>Resources
        </div>
        <h1 class="animate-fadeInUp delay-100 text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display">Expert Guides & <span class="gradient-text-animated">Resources</span></h1>
        <p class="animate-fadeInUp delay-200 text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto">Everything you need to know about excavation, land clearing, and site development in Wilmington, NC</p>
      </div>
    </section>
    
    <!-- Blog Grid -->
    <section class="pb-24 lg:pb-32">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          ${posts.map(p => `
          <a href="/blog/${p.id}" class="group block">
            <div class="card-ultra rounded-2xl overflow-hidden card-ultra h-full">
              <div class="relative overflow-hidden">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697c0eafb66b5201f6fc0bd3/${p.img}" alt="${p.title}" class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent"></div>
                <div class="absolute top-4 left-4">
                  <span class="bg-amber-500/20 border border-amber-500/30 text-amber-300 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider">${p.cat}</span>
                </div>
              </div>
              <div class="p-6">
                <h2 class="text-white font-bold text-lg mb-3 group-hover:text-amber-400 transition-colors line-clamp-2 font-display">${p.title}</h2>
                <p class="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">${p.excerpt}</p>
                <div class="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-zinc-800/50">
                  <span>${new Date(p.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span class="flex items-center gap-1"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>${p.readTime}</span>
                </div>
              </div>
            </div>
          </a>`).join('')}
        </div>
      </div>
    </section>
  </div>`
}
