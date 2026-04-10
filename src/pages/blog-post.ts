const blogContent: Record<string, { title: string; content: string }> = {
  'land-clearing-cost-wilmington-nc-2026': {
    title: 'Complete Guide: Land Clearing Cost in Wilmington NC (2026)',
    content: `<p class="text-gray-300 text-lg mb-6">If you're planning a construction project in Wilmington, NC, land clearing is likely one of the first steps. Understanding the costs involved helps you budget effectively and avoid surprises.</p>
    <h2 class="text-2xl font-bold text-white mb-4 mt-8">Average Land Clearing Costs in Wilmington, NC</h2>
    <p class="text-gray-400 mb-4">For a typical residential lot in the Wilmington area, expect to pay:</p>
    <ul class="space-y-2 text-gray-400 mb-6 list-disc pl-6"><li><strong class="text-white">Light clearing:</strong> $1,500 - $3,000 per acre</li><li><strong class="text-white">Medium clearing:</strong> $3,000 - $5,000 per acre</li><li><strong class="text-white">Heavy clearing:</strong> $4,000 - $8,000 per acre</li></ul>
    <h2 class="text-2xl font-bold text-white mb-4 mt-8">Factors That Affect Cost</h2>
    <ul class="space-y-2 text-gray-400 mb-6 list-disc pl-6"><li>Lot size and tree density</li><li>Terrain and soil conditions</li><li>Equipment access difficulty</li><li>Stump removal requirements</li><li>Debris hauling distance</li><li>Permits and regulations</li></ul>
    <h2 class="text-2xl font-bold text-white mb-4 mt-8">Tips to Save Money</h2>
    <ul class="space-y-2 text-gray-400 mb-6 list-disc pl-6"><li>Get multiple quotes from local contractors</li><li>Consider onsite disposal vs hauling</li><li>Clear only what's needed for your project</li><li>Schedule during the off-season</li></ul>`
  },
  'demolition-cost-wilmington-nc-2026': {
    title: 'Demolition Costs in Wilmington NC: 2026 Pricing Guide',
    content: `<p class="text-gray-300 text-lg mb-6">Whether you're demolishing an old structure to make way for new construction or removing a dilapidated building, understanding demolition costs in Wilmington helps you plan your budget.</p>
    <h2 class="text-2xl font-bold text-white mb-4 mt-8">Average Demolition Costs</h2>
    <ul class="space-y-2 text-gray-400 mb-6 list-disc pl-6"><li><strong class="text-white">Small structures (sheds, garages):</strong> $1,000 - $5,000</li><li><strong class="text-white">Residential homes:</strong> $8,000 - $25,000</li><li><strong class="text-white">Commercial buildings:</strong> $15,000 - $50,000+</li></ul>
    <h2 class="text-2xl font-bold text-white mb-4 mt-8">What's Included</h2>
    <ul class="space-y-2 text-gray-400 mb-6 list-disc pl-6"><li>Structural demolition</li><li>Debris removal and hauling</li><li>Site cleanup</li><li>Foundation removal (if needed)</li></ul>`
  },
  'site-grading-cost-wilmington-nc-2026': {
    title: 'Site Grading Costs in Wilmington NC: What to Expect in 2026',
    content: `<p class="text-gray-300 text-lg mb-6">Site grading is essential for proper drainage and a solid building foundation. Here's what you can expect to pay for grading services in the Wilmington, NC area.</p>
    <h2 class="text-2xl font-bold text-white mb-4 mt-8">Average Grading Costs</h2>
    <ul class="space-y-2 text-gray-400 mb-6 list-disc pl-6"><li><strong class="text-white">Residential lots:</strong> $1,000 - $5,000</li><li><strong class="text-white">Large lots (1+ acre):</strong> $3,000 - $10,000</li><li><strong class="text-white">Commercial sites:</strong> $5,000 - $25,000+</li></ul>
    <h2 class="text-2xl font-bold text-white mb-4 mt-8">Why Grading Matters</h2>
    <p class="text-gray-400 mb-4">Proper grading prevents water from pooling around your foundation, which can lead to structural damage, mold, and flooding. It's an investment that protects your entire project.</p>`
  }
}

export function blogPostPage(slug: string): string {
  const post = blogContent[slug]
  if (!post) {
    return `<div class="min-h-screen bg-zinc-950 pt-32 pb-20 px-6"><div class="max-w-3xl mx-auto text-center"><h1 class="text-4xl font-bold text-white mb-4">Post Not Found</h1><p class="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p><a href="/blog" class="text-amber-500 hover:underline">&larr; Back to Blog</a></div></div>`
  }
  return `<div class="min-h-screen bg-zinc-950 pt-32 pb-20 px-6">
    <div class="max-w-3xl mx-auto">
      <a href="/blog" class="text-amber-500 hover:underline text-sm mb-6 inline-block">&larr; Back to Blog</a>
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-8">${post.title}</h1>
      <div class="prose prose-invert max-w-none">${post.content}</div>
      <div class="mt-12 bg-amber-600/10 border border-amber-600/20 rounded-xl p-8 text-center">
        <h3 class="text-2xl font-bold text-white mb-4">Need a Quote for Your Project?</h3>
        <p class="text-gray-300 mb-6">Contact PXG Siteworks for a free, no-obligation estimate.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/calculator" class="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors">Use Our Calculator</a>
          <a href="tel:+19105157779" class="inline-block px-6 py-3 border border-amber-600 text-amber-500 hover:bg-amber-600/10 font-semibold rounded-lg transition-colors">Call (910) 515-7779</a>
        </div>
      </div>
    </div>
  </div>`
}
