export function careersPage(): string {
  const jobs = [
    { title: 'Excavator Operator', dept: 'Operations', salary: '$22-28/hour', desc: 'Experienced excavator operator needed for residential and commercial excavation projects across Southeastern North Carolina. You will operate mini and full-size excavators for foundation digging, utility trenching, drainage installation, land clearing, and general earthmoving. This is a hands-on role for someone who takes pride in precision work and can read site plans accurately. You will work closely with our site foremen to execute projects on time and to spec.', reqs: ['3+ years excavator operation experience', "Valid driver's license with clean record", 'OSHA 10 certification preferred (will train)', 'Ability to read and interpret site plans and grade stakes', 'Reliable, safety-focused, and team-oriented', 'Experience with GPS/laser grading systems a plus'] },
    { title: 'Site Foreman', dept: 'Management', salary: '$55,000-70,000/year', desc: 'Lead our site crews and ensure projects are completed safely, on time, and within budget. As Site Foreman, you will manage daily field operations, coordinate with project managers and clients, oversee equipment operators and laborers, and maintain quality control on all work. This leadership role requires strong communication skills, deep knowledge of excavation and grading, and the ability to solve problems quickly in the field. You will be the primary on-site point of contact for our clients.', reqs: ['5+ years site work or excavation experience', '2+ years supervisory or crew lead experience', 'Strong verbal and written communication skills', 'Thorough knowledge of grading, drainage, and excavation practices', 'OSHA 30 certification required', 'Ability to manage multiple job sites simultaneously', 'Proficiency in reading blueprints, surveys, and civil plans'] },
    { title: 'Equipment Mechanic', dept: 'Maintenance', salary: '$25-32/hour', desc: 'Maintain and repair our fleet of heavy equipment including excavators, bulldozers, skid steers, dump trucks, and compactors. You will perform preventive maintenance, diagnose mechanical and hydraulic issues, complete repairs in our shop and in the field, and keep detailed service records. This role is critical to our operations &mdash; when our equipment runs, our projects stay on schedule. We are looking for someone who takes ownership of fleet readiness and can work independently.', reqs: ['3+ years heavy equipment repair experience', 'Strong hydraulics and diesel engine knowledge', 'Welding and fabrication skills a significant plus', 'Own basic hand tools (specialty tools provided)', 'Reliable transportation to shop and field locations', 'CDL license preferred but not required', 'Experience with CAT, John Deere, or Kubota equipment preferred'] },
    { title: 'Truck Driver (CDL)', dept: 'Operations', salary: '$20-24/hour', desc: 'Haul equipment, materials, and debris to and from job sites throughout Southeastern North Carolina. You will operate dump trucks, lowboy trailers, and flatbeds to transport excavators, dozers, and materials between our yard and project sites. This role requires a professional driver who prioritizes safety, maintains their vehicle, and can work flexible hours to support our field operations. Local routes only &mdash; you will be home every night.', reqs: ['Valid CDL Class A license required', 'Clean driving record (no DUIs or major violations)', 'Experience hauling heavy equipment on lowboy trailers', '2+ years commercial driving experience', 'Flexible schedule (early starts, occasional Saturdays)', 'Ability to perform pre-trip and post-trip inspections', 'Basic mechanical knowledge for minor roadside repairs'] }
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
        <p class="animate-fadeInUp delay-200 text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">We are always looking for skilled, hardworking professionals to join the PXG Siteworks family. If you take pride in your work and want to be part of a growing team in Southeastern North Carolina, we want to hear from you.</p>
      </div>
    </section>

    <!-- Why Work Here -->
    <section class="pb-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="reveal text-center mb-10">
          <h2 class="text-2xl lg:text-3xl font-bold text-white font-display mb-4">Why Work at PXG Siteworks?</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">We believe that great work comes from a great team. That is why we invest in our people with competitive compensation, solid benefits, and a work environment built on respect and professionalism.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${[
            { t: 'Competitive Pay', d: 'Industry-leading wages with regular performance reviews and annual raises. Your hard work is recognized and rewarded.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
            { t: 'Paid Time Off', d: 'Generous vacation days, paid holidays, and personal days. We believe rest is essential to performing your best.', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
            { t: 'Health Benefits', d: 'Comprehensive medical, dental, and vision insurance for you and your family. Your health matters to us.', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
            { t: 'Local Work', d: 'All projects are in the Southeastern NC area. No long-distance travel &mdash; you are home every night with your family.', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }
          ].map(b => `
          <div class="card-ultra rounded-xl p-6 text-center hover-glow">
            <div class="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-3 border border-amber-500/20">
              <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${b.icon}"/></svg>
            </div>
            <h3 class="text-white font-semibold mb-2">${b.t}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">${b.d}</p>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- Additional Benefits -->
    <section class="pb-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="card-ultra rounded-2xl p-8 lg:p-10">
          <h2 class="text-xl font-bold text-white mb-6 font-display">Additional Benefits & Perks</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${[
              'Safety training and OSHA certification support',
              'Modern, well-maintained equipment',
              'Opportunities for advancement and growth',
              'Supportive, team-oriented work culture',
              'Overtime opportunities available',
              'Company-provided safety gear and PPE',
              'Retirement savings plan',
              'Annual company events and team outings',
              'Training on new equipment and techniques'
            ].map(p => `
            <div class="flex items-start gap-3">
              <svg class="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span class="text-gray-400 text-sm">${p}</span>
            </div>`).join('')}
          </div>
        </div>
      </div>
    </section>
    
    <!-- Job Listings -->
    <section class="pb-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="reveal text-center mb-10">
          <h2 class="text-2xl lg:text-3xl font-bold text-white font-display mb-4">Open Positions</h2>
          <p class="text-gray-400">Apply today by clicking the Apply Now button or emailing your resume directly.</p>
        </div>
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
            <p class="text-gray-300 text-sm mb-5 leading-relaxed">${j.desc}</p>
            <h4 class="text-white font-semibold text-sm mb-3">Requirements:</h4>
            <ul class="space-y-2 text-gray-400 text-sm">${j.reqs.map(r => `<li class="flex items-start gap-2"><svg class="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span>${r}</span></li>`).join('')}</ul>
          </div>`).join('')}
        </div>
      </div>
    </section>
        
    <!-- General CTA -->
    <section class="pb-24 lg:pb-32">
      <div class="max-w-6xl mx-auto px-6">
        <div class="reveal card-ultra rounded-2xl p-10 text-center glow-amber-sm relative overflow-hidden">
          <div class="absolute inset-0 mesh-gradient"></div>
          <div class="relative z-10">
            <h3 class="text-white font-bold text-2xl mb-3 font-display">Don't See the Right Position?</h3>
            <p class="text-gray-400 mb-4 max-w-2xl mx-auto">We are always interested in talking with skilled professionals who share our commitment to quality and safety. If you have experience in excavation, heavy equipment operation, or site development, send us your resume.</p>
            <p class="text-gray-500 text-sm mb-6">Email your resume and a brief introduction to <strong class="text-white">careers@pxgsiteworks.com</strong>. We review every application and will reach out if there is a fit.</p>
            <a href="mailto:careers@pxgsiteworks.com?subject=General Career Inquiry" class="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full px-7 py-3 font-semibold">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>Send Your Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>`
}
