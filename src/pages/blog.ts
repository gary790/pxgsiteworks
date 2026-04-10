export function blogPage(): string {
  const posts = [
    { id: 'land-clearing-cost-wilmington-nc-2026', title: 'Complete Guide: Land Clearing Cost in Wilmington NC (2026)', excerpt: 'Everything you need to know about land clearing costs in Wilmington, NC.', date: '2026-02-12', readTime: '8 min read', cat: 'Cost Guides', img: 'fc6b71353_20240201_150031.jpg' },
    { id: 'demolition-cost-wilmington-nc-2026', title: 'Demolition Costs in Wilmington NC: 2026 Pricing Guide', excerpt: 'Complete breakdown of demolition costs in Wilmington, NC.', date: '2026-02-11', readTime: '7 min read', cat: 'Cost Guides', img: '506e5f938_ChatGPTImageFeb12202603_34_43PM.png' },
    { id: 'site-grading-cost-wilmington-nc-2026', title: 'Site Grading Costs in Wilmington NC: What to Expect in 2026', excerpt: 'Expert guide to site grading and land leveling costs in Wilmington, NC.', date: '2026-02-10', readTime: '7 min read', cat: 'Cost Guides', img: '510324864_ChatGPTImageFeb12202603_38_27PM.png' }
  ]
  return `<div class="min-h-screen bg-zinc-950 pt-32 pb-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="reveal text-center mb-16">
        <h1 class="text-5xl font-bold text-white mb-4">Expert Guides & Resources</h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">Everything you need to know about excavation, land clearing, and site development in Wilmington, NC</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${posts.map((p, i) => `
        <a href="/blog/${p.id}" class="reveal group" style="transition-delay:${i * 100}ms">
          <div class="bg-zinc-900 border border-zinc-800 hover:border-amber-600 transition-all rounded-xl overflow-hidden h-full">
            <div class="relative overflow-hidden">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697c0eafb66b5201f6fc0bd3/${p.img}" alt="${p.title}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
              <div class="absolute top-4 left-4"><span class="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">${p.cat}</span></div>
            </div>
            <div class="p-6">
              <h2 class="text-white font-bold text-lg mb-2 group-hover:text-amber-500 transition-colors line-clamp-2">${p.title}</h2>
              <p class="text-gray-400 text-sm mb-4 line-clamp-3">${p.excerpt}</p>
              <div class="flex items-center justify-between text-sm text-gray-500">
                <span>${new Date(p.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span>${p.readTime}</span>
              </div>
              <div class="mt-4 text-amber-500 group-hover:text-amber-400 text-sm font-semibold">Read More &rarr;</div>
            </div>
          </div>
        </a>`).join('')}
      </div>
    </div>
  </div>`
}
