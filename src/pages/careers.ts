export function careersPage(): string {
  const jobs = [
    { title: 'Excavator Operator', dept: 'Operations', salary: '$22-28/hour', desc: 'Experienced excavator operator needed for residential and commercial projects.', reqs: ['3+ years excavator operation experience', "Valid driver's license", 'OSHA 10 certification preferred', 'Ability to read site plans', 'Reliable and safety-focused'] },
    { title: 'Site Foreman', dept: 'Management', salary: '$55,000-70,000/year', desc: 'Lead our site crews and ensure projects are completed safely, on time, and within budget.', reqs: ['5+ years site work experience', '2+ years supervisory experience', 'Strong communication skills', 'Knowledge of grading and drainage', 'OSHA 30 certification required'] },
    { title: 'Equipment Mechanic', dept: 'Maintenance', salary: '$25-32/hour', desc: 'Maintain and repair our fleet of heavy equipment including excavators, dozers, and trucks.', reqs: ['Heavy equipment repair experience', 'Hydraulics and diesel engine knowledge', 'Welding skills a plus', 'Own basic tools', 'Reliable transportation'] },
    { title: 'Truck Driver (CDL)', dept: 'Operations', salary: '$20-24/hour', desc: 'Haul equipment and materials to job sites throughout southeastern North Carolina.', reqs: ['Valid CDL Class A license', 'Clean driving record', 'Experience with lowboy trailers', '2+ years commercial driving', 'Flexible schedule'] }
  ]
  return `<div class="min-h-screen bg-zinc-950">
    <!-- Hero -->
    <section class="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div class="absolute inset-0 mesh-gradient"></div>
      <div class="relative max-w-7xl mx-auto px-6 text-center">
        <div class="animate-fadeInUp inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-xs font-medium mb-6">
          <span class="w-2 h-2 rounded-full bg-amber-400"></span>Join Our Team
        </div>
        <h1 class="animate-fadeInUp delay-100 text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display">Career <span class="gradient-text-animated">Opportunities</span></h1>
        <p class="animate-fadeInUp delay-200 text-gray-400 text-lg max-w-2xl mx-auto">We're always looking for skilled, hardworking professionals to join the PXG Siteworks family.</p>
      </div>
    </section>
    
    <!-- Benefits -->
    <section class="pb-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${[
            { t: 'Competitive Pay', d: 'Industry-leading wages', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
            { t: 'Paid Time Off', d: 'Vacation & holidays', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
            { t: 'Health Benefits', d: 'Medical, dental, vision', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
            { t: 'Local Work', d: 'Southeastern NC area', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }
          ].map(b => `
          <div class="card-ultra rounded-xl p-6 text-center hover-glow">
            <div class="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-3 border border-amber-500/20">
              <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${b.icon}"/></svg>
            </div>
            <h3 class="text-white font-semibold mb-1">${b.t}</h3>
            <p class="text-gray-500 text-sm">${b.d}</p>
          </div>`).join('')}
        </div>
      </div>
    </section>
    
    <!-- Job Listings -->
    <section class="pb-24 lg:pb-32">
      <div class="max-w-6xl mx-auto px-6">
        <div class="space-y-5 stagger-children">
          ${jobs.map(j => `
          <div class="card-ultra rounded-2xl p-7 lg:p-8 hover-glow">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
              <div>
                <h2 class="text-white text-xl font-bold mb-3 font-display">${j.title}</h2>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full text-xs font-medium">${j.dept}</span>
                  <span class="px-3 py-1 bg-zinc-800/50 border border-zinc-700/50 text-gray-400 rounded-full text-xs">Wilmington, NC</span>
                  <span class="px-3 py-1 bg-zinc-800/50 border border-zinc-700/50 text-gray-400 rounded-full text-xs">Full-Time</span>
                  <span class="px-3 py-1 bg-zinc-800/50 border border-zinc-700/50 text-gray-400 rounded-full text-xs">${j.salary}</span>
                </div>
              </div>
              <a href="mailto:careers@pxgsiteworks.com?subject=Application for ${j.title}" class="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full px-6 py-2.5 text-sm font-semibold shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>Apply Now
              </a>
            </div>
            <p class="text-gray-300 text-sm mb-4">${j.desc}</p>
            <h4 class="text-white font-semibold text-sm mb-2">Requirements:</h4>
            <ul class="space-y-1.5 text-gray-400 text-sm">${j.reqs.map(r => `<li class="flex items-start gap-2"><svg class="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>${r}</span></li>`).join('')}</ul>
          </div>`).join('')}
        </div>
        
        <!-- General CTA -->
        <div class="reveal mt-12 card-ultra rounded-2xl p-10 text-center glow-amber-sm relative overflow-hidden">
          <div class="absolute inset-0 mesh-gradient"></div>
          <div class="relative z-10">
            <h3 class="text-white font-bold text-2xl mb-3 font-display">Don't See the Right Position?</h3>
            <p class="text-gray-400 mb-6 max-w-2xl mx-auto">We're always interested in talking with skilled professionals. Send us your resume.</p>
            <a href="mailto:careers@pxgsiteworks.com?subject=General Career Inquiry" class="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full px-7 py-3 font-semibold">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>Send Your Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>`
}
