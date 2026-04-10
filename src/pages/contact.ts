export function contactPage(): string {
  return `<div class="min-h-screen bg-zinc-950">
    <!-- Hero -->
    <section class="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div class="absolute inset-0 mesh-gradient"></div>
      <div class="relative max-w-7xl mx-auto px-6 text-center">
        <div class="animate-fadeInUp inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-xs font-medium mb-6">
          <span class="w-2 h-2 rounded-full bg-amber-400"></span>Get In Touch
        </div>
        <h1 class="animate-fadeInUp delay-100 text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display">Contact <span class="gradient-text-animated">Us</span></h1>
        <p class="animate-fadeInUp delay-200 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">Have a question or ready to start your project? Send us a message and we'll get back to you within 24 hours.</p>
      </div>
    </section>
    
    <!-- Contact Content -->
    <section class="pb-24 lg:pb-32">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-5 gap-10 lg:gap-12">
          <!-- Contact Info -->
          <div class="reveal-left lg:col-span-2 space-y-4">
            ${[
              { t: 'Call Us', v: '(910) 515-7779', s: 'Mon-Fri 7am-6pm', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
              { t: 'Email Us', v: 'info@pxgsiteworks.com', s: 'We reply within 24hrs', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
              { t: 'Visit Us', v: '2415 Castle Hayne Rd', s: 'Wilmington, NC 28401', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
              { t: 'Working Hours', v: 'Mon - Sat', s: '7:00 AM - 6:00 PM', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' }
            ].map(c => `
            <div class="card-ultra rounded-xl p-5 hover-glow flex items-start gap-4">
              <div class="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
                <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${c.icon}"/></svg>
              </div>
              <div>
                <p class="text-gray-500 text-xs uppercase tracking-wider mb-0.5">${c.t}</p>
                ${c.t === 'Email Us' ? `<a href="mailto:${c.v}" class="text-white font-semibold hover:text-amber-400 transition-colors">${c.v}</a>` : `<p class="text-white font-semibold">${c.v}</p>`}
                <p class="text-gray-500 text-sm">${c.s}</p>
              </div>
            </div>`).join('')}
            
            <div class="relative rounded-xl overflow-hidden h-56 border border-zinc-800/50">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105762.67984895776!2d-77.95766458261068!3d34.22571420597901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f5a20debaed5%3A0x5e66493884093032!2sWilmington%2C%20NC!5e0!3m2!1sen!2sus" class="w-full h-full grayscale opacity-60 hover:opacity-80 hover:grayscale-0 transition-all duration-500" style="border:0" allowfullscreen loading="lazy"></iframe>
            </div>
          </div>
          
          <!-- Form -->
          <div class="reveal-right lg:col-span-3">
            <div class="card-ultra rounded-2xl p-7 lg:p-9">
              <h2 class="text-white text-xl font-bold mb-1 font-display">Send Us a Message</h2>
              <p class="text-gray-500 text-sm mb-6">Fill out the form and we'll get back to you as soon as possible</p>
              <form id="contact-page-form" onsubmit="submitContactPageForm(event)">
                <div id="cp-success" class="hidden text-center py-12">
                  <div class="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
                  <h3 class="text-2xl font-bold text-white mb-2 font-display">Message Sent!</h3>
                  <p class="text-gray-400">Redirecting...</p>
                </div>
                <div id="cp-fields" class="space-y-4">
                  <div class="grid sm:grid-cols-2 gap-4">
                    <div><label class="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-medium">Name *</label><input name="name" required placeholder="John Smith" class="input-premium w-full h-12 rounded-xl px-4 text-sm"></div>
                    <div><label class="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-medium">Email *</label><input name="email" type="email" required placeholder="john@example.com" class="input-premium w-full h-12 rounded-xl px-4 text-sm"></div>
                  </div>
                  <div class="grid sm:grid-cols-2 gap-4">
                    <div><label class="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-medium">Phone</label><input name="phone" type="tel" placeholder="(910) 515-7779" class="input-premium w-full h-12 rounded-xl px-4 text-sm"></div>
                    <div><label class="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-medium">Subject *</label>
                      <select name="subject" required class="input-premium w-full h-12 rounded-xl px-4 text-sm">
                        <option value="">Select...</option><option value="Excavation">Excavation</option><option value="Site Grading">Site Grading</option><option value="Land Clearing">Land Clearing</option><option value="Drainage Solutions">Drainage Solutions</option><option value="Demolition & Hauling">Demolition & Hauling</option><option value="Site Preparation">Site Preparation</option><option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div><label class="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-medium">Message *</label><textarea name="message" required rows="5" placeholder="Tell us more about your project..." class="input-premium w-full rounded-xl px-4 py-3 text-sm resize-none"></textarea></div>
                  <button type="submit" id="cp-submit" class="btn-premium w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold py-3.5 text-base rounded-xl flex items-center justify-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <script>
    async function submitContactPageForm(e) {
      e.preventDefault();
      const btn = document.getElementById('cp-submit');
      btn.disabled = true; btn.textContent = 'Sending...';
      try {
        const fd = Object.fromEntries(new FormData(e.target));
        const res = await fetch('/api/contact', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(fd) });
        if (res.ok) {
          document.getElementById('cp-fields').classList.add('hidden');
          document.getElementById('cp-success').classList.remove('hidden');
          if (window.gtag) gtag('event', 'conversion', { send_to: 'AW-17921730867/z4-yCMeovPMbELPS3-FC', value: 1.0, currency: 'USD' });
          if (window.fbq) { fbq('track', 'Contact'); }
          setTimeout(() => window.location.href = '/thank-you', 2000);
        } else { alert('Failed to send.'); }
      } catch { alert('Failed to send.'); }
      btn.disabled = false;
    }
  </script>`
}
