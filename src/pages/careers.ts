export function careersPage(): string {
  const jobs = [
    { title: 'Excavator Operator', dept: 'Operations', salary: '$22-28/hour', desc: 'Experienced excavator operator needed for residential and commercial projects.', reqs: ['3+ years excavator operation experience', "Valid driver's license", 'OSHA 10 certification preferred', 'Ability to read site plans', 'Reliable and safety-focused'] },
    { title: 'Site Foreman', dept: 'Management', salary: '$55,000-70,000/year', desc: 'Lead our site crews and ensure projects are completed safely, on time, and within budget.', reqs: ['5+ years site work experience', '2+ years supervisory experience', 'Strong communication skills', 'Knowledge of grading and drainage', 'OSHA 30 certification required'] },
    { title: 'Equipment Mechanic', dept: 'Maintenance', salary: '$25-32/hour', desc: 'Maintain and repair our fleet of heavy equipment including excavators, dozers, and trucks.', reqs: ['Heavy equipment repair experience', 'Hydraulics and diesel engine knowledge', 'Welding skills a plus', 'Own basic tools', 'Reliable transportation'] },
    { title: 'Truck Driver (CDL)', dept: 'Operations', salary: '$20-24/hour', desc: 'Haul equipment and materials to job sites throughout southeastern North Carolina.', reqs: ['Valid CDL Class A license', 'Clean driving record', 'Experience with lowboy trailers', '2+ years commercial driving', 'Flexible schedule'] }
  ]
  return `<div class="min-h-screen bg-zinc-950 py-24 px-6 pt-32">
    <div class="max-w-6xl mx-auto">
      <div class="reveal text-center mb-16">
        <span class="text-amber-500 font-medium tracking-widest uppercase text-sm">Join Our Team</span>
        <h1 class="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Career Opportunities</h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">We're always looking for skilled, hardworking professionals to join the PXG Siteworks family.</p>
      </div>
      <div class="reveal grid md:grid-cols-4 gap-6 mb-16">
        ${['Competitive Pay|Industry-leading wages', 'Paid Time Off|Vacation & holidays', 'Health Benefits|Medical, dental, vision', 'Local Work|Southeastern NC area'].map(b => { const [t, d] = b.split('|'); return `<div class="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center"><div class="w-12 h-12 bg-amber-600/10 rounded-lg flex items-center justify-center mx-auto mb-3"><svg class="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><h3 class="text-white font-semibold mb-1">${t}</h3><p class="text-gray-400 text-sm">${d}</p></div>` }).join('')}
      </div>
      <div class="space-y-6">
        ${jobs.map((j, i) => `
        <div class="reveal bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-amber-600/50 transition-all" style="transition-delay:${i * 100}ms">
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <h2 class="text-white text-2xl font-bold mb-2">${j.title}</h2>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-amber-600/20 text-amber-500 border border-amber-600/30 rounded-full text-xs font-medium">${j.dept}</span>
                <span class="px-3 py-1 border border-zinc-700 text-gray-400 rounded-full text-xs">Wilmington, NC</span>
                <span class="px-3 py-1 border border-zinc-700 text-gray-400 rounded-full text-xs">Full-Time</span>
                <span class="px-3 py-1 border border-zinc-700 text-gray-400 rounded-full text-xs">${j.salary}</span>
              </div>
            </div>
            <a href="mailto:careers@pxgsiteworks.com?subject=Application for ${j.title}" class="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg px-5 py-2.5 font-medium transition-colors shrink-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>Apply Now
            </a>
          </div>
          <p class="text-gray-300 mb-4">${j.desc}</p>
          <h4 class="text-white font-semibold mb-2">Requirements:</h4>
          <ul class="space-y-1 text-gray-400">${j.reqs.map(r => `<li class="flex items-start gap-2"><span class="text-amber-500 mt-1">&bull;</span><span>${r}</span></li>`).join('')}</ul>
        </div>`).join('')}
      </div>
      <div class="reveal mt-16 text-center bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
        <h3 class="text-white font-bold text-2xl mb-3">Don't See the Right Position?</h3>
        <p class="text-gray-400 mb-6 max-w-2xl mx-auto">We're always interested in talking with skilled professionals. Send us your resume.</p>
        <a href="mailto:careers@pxgsiteworks.com?subject=General Career Inquiry" class="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg px-6 py-3 font-semibold transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>Send Your Resume
        </a>
      </div>
    </div>
  </div>`
}
