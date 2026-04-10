const blogContent: Record<string, { title: string; content: string }> = {
  'land-clearing-cost-wilmington-nc-2026': {
    title: 'Complete Guide: Land Clearing Cost in Wilmington NC (2026)',
    content: `<p class="text-gray-300 text-lg mb-6 leading-relaxed">If you're planning a construction project in Wilmington, NC, land clearing is likely one of the first steps. Understanding the costs involved helps you budget effectively and avoid surprises.</p>
    <h2 class="text-2xl font-bold text-white mb-4 mt-10 font-display">Average Land Clearing Costs in Wilmington, NC</h2>
    <p class="text-gray-400 mb-4">For a typical residential lot in the Wilmington area, expect to pay:</p>
    <ul class="space-y-2 text-gray-400 mb-6 list-disc pl-6"><li><strong class="text-white">Light clearing:</strong> $1,500 - $3,000 per acre</li><li><strong class="text-white">Medium clearing:</strong> $3,000 - $5,000 per acre</li><li><strong class="text-white">Heavy clearing:</strong> $4,000 - $8,000 per acre</li></ul>
    <h2 class="text-2xl font-bold text-white mb-4 mt-10 font-display">Factors That Affect Cost</h2>
    <ul class="space-y-2 text-gray-400 mb-6 list-disc pl-6"><li>Lot size and tree density</li><li>Terrain and soil conditions</li><li>Equipment access difficulty</li><li>Stump removal requirements</li><li>Debris hauling distance</li><li>Permits and regulations</li></ul>
    <h2 class="text-2xl font-bold text-white mb-4 mt-10 font-display">Tips to Save Money</h2>
    <ul class="space-y-2 text-gray-400 mb-6 list-disc pl-6"><li>Get multiple quotes from local contractors</li><li>Consider onsite disposal vs hauling</li><li>Clear only what's needed for your project</li><li>Schedule during the off-season</li></ul>`
  },
  'demolition-cost-wilmington-nc-2026': {
    title: 'Demolition Costs in Wilmington NC: 2026 Pricing Guide',
    content: `<p class="text-gray-300 text-lg mb-6 leading-relaxed">Whether you're demolishing an old structure to make way for new construction or removing a dilapidated building, understanding demolition costs in Wilmington helps you plan your budget.</p>
    <h2 class="text-2xl font-bold text-white mb-4 mt-10 font-display">Average Demolition Costs</h2>
    <ul class="space-y-2 text-gray-400 mb-6 list-disc pl-6"><li><strong class="text-white">Small structures (sheds, garages):</strong> $1,000 - $5,000</li><li><strong class="text-white">Residential homes:</strong> $8,000 - $25,000</li><li><strong class="text-white">Commercial buildings:</strong> $15,000 - $50,000+</li></ul>
    <h2 class="text-2xl font-bold text-white mb-4 mt-10 font-display">What's Included</h2>
    <ul class="space-y-2 text-gray-400 mb-6 list-disc pl-6"><li>Structural demolition</li><li>Debris removal and hauling</li><li>Site cleanup</li><li>Foundation removal (if needed)</li></ul>`
  },
  'site-grading-cost-wilmington-nc-2026': {
    title: 'Site Grading Costs in Wilmington NC: What to Expect in 2026',
    content: `<p class="text-gray-300 text-lg mb-6 leading-relaxed">Site grading is essential for proper drainage and a solid building foundation. Here's what you can expect to pay for grading services in the Wilmington, NC area.</p>
    <h2 class="text-2xl font-bold text-white mb-4 mt-10 font-display">Average Grading Costs</h2>
    <ul class="space-y-2 text-gray-400 mb-6 list-disc pl-6"><li><strong class="text-white">Residential lots:</strong> $1,000 - $5,000</li><li><strong class="text-white">Large lots (1+ acre):</strong> $3,000 - $10,000</li><li><strong class="text-white">Commercial sites:</strong> $5,000 - $25,000+</li></ul>
    <h2 class="text-2xl font-bold text-white mb-4 mt-10 font-display">Why Grading Matters</h2>
    <p class="text-gray-400 mb-4 leading-relaxed">Proper grading prevents water from pooling around your foundation, which can lead to structural damage, mold, and flooding. It's an investment that protects your entire project.</p>`
  }
}

export function blogPostPage(slug: string): string {
  const post = blogContent[slug]
  if (!post) {
    return `<div class="min-h-screen bg-zinc-950 pt-32 pb-20 px-6"><div class="max-w-3xl mx-auto text-center"><h1 class="text-4xl font-bold text-white mb-4 font-display">Post Not Found</h1><p class="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p><a href="/blog" class="text-amber-400 hover:underline">&larr; Back to Blog</a></div></div>`
  }
  return `<div class="min-h-screen bg-zinc-950 pt-32 pb-20 px-6">
    <div class="max-w-3xl mx-auto">
      <a href="/blog" class="text-amber-400 hover:text-amber-300 text-sm mb-8 inline-flex items-center gap-2 transition-colors group">
        <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        Back to Blog
      </a>
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-8 font-display leading-tight">${post.title}</h1>
      <div class="prose prose-invert max-w-none">${post.content}</div>
      
      <div class="mt-16 card-ultra rounded-2xl p-10 text-center glow-amber-sm relative overflow-hidden">
        <div class="absolute inset-0 mesh-gradient"></div>
        <div class="relative z-10">
          <h3 class="text-2xl font-bold text-white mb-4 font-display">Need a Quote for Your Project?</h3>
          <p class="text-gray-300 mb-6">Contact PXG Siteworks for a free, no-obligation estimate.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/calculator" class="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full px-7 py-3 font-semibold">Use Our Calculator</a>
            <a href="tel:+19105157779" class="inline-flex items-center gap-2 glass text-white rounded-full px-7 py-3 font-semibold hover:bg-white/10 transition-all border border-white/10">Call (910) 515-7779</a>
          </div>
        </div>
      </div>
    </div>
  </div>`
}
