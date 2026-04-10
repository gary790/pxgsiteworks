export function contactPage(): string {
  return `<div class="min-h-screen bg-zinc-950 py-24 px-6 pt-32">
    <div class="max-w-7xl mx-auto">
      <div class="reveal text-center mb-16">
        <span class="text-amber-500 font-medium tracking-widest uppercase text-sm">Get In Touch</span>
        <h1 class="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Contact Us</h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">Have a question or ready to start your project? We're here to help. Send us a message and we'll get back to you within 24 hours.</p>
      </div>
      <div class="grid lg:grid-cols-5 gap-12">
        <div class="reveal-left lg:col-span-2 space-y-6">
          ${[
            { t: 'Call Us', v: '(910) 515-7779', s: 'Mon-Fri 7am-6pm' },
            { t: 'Email Us', v: 'info@pxgsiteworks.com', s: 'We reply within 24hrs' },
            { t: 'Visit Us', v: 'Wilmington, NC', s: 'Serving all of SE NC' },
            { t: 'Working Hours', v: 'Mon - Sat', s: '7:00 AM - 6:00 PM' }
          ].map(c => `
          <div class="flex items-start gap-4 p-5 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-amber-600/30 transition-colors">
            <div class="w-12 h-12 bg-amber-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <div>
              <p class="text-gray-400 text-sm">${c.t}</p>
              ${c.t === 'Email Us' ? `<a href="mailto:${c.v}" class="text-white font-semibold text-lg hover:text-amber-500 transition-colors">${c.v}</a>` : `<p class="text-white font-semibold text-lg">${c.v}</p>`}
              <p class="text-gray-500 text-sm">${c.s}</p>
            </div>
          </div>`).join('')}
          <div class="relative rounded-xl overflow-hidden h-64">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105762.67984895776!2d-77.95766458261068!3d34.22571420597901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f5a20debaed5%3A0x5e66493884093032!2sWilmington%2C%20NC!5e0!3m2!1sen!2sus" class="w-full h-full grayscale opacity-70" style="border:0" allowfullscreen loading="lazy"></iframe>
          </div>
        </div>
        <div class="reveal-right lg:col-span-3">
          <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 class="text-white text-2xl font-bold mb-2">Send Us a Message</h2>
            <p class="text-gray-400 mb-6">Fill out the form below and we'll get back to you as soon as possible</p>
            <form id="contact-page-form" onsubmit="submitContactPageForm(event)">
              <div id="cp-success" class="hidden text-center py-12">
                <div class="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
                <h3 class="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p class="text-gray-400">Redirecting...</p>
              </div>
              <div id="cp-fields" class="space-y-5">
                <div class="grid sm:grid-cols-2 gap-5">
                  <div><label class="block text-gray-400 text-sm mb-2">Name *</label><input name="name" required placeholder="John Smith" class="w-full h-12 bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 focus:border-amber-600 focus:outline-none placeholder:text-gray-500"></div>
                  <div><label class="block text-gray-400 text-sm mb-2">Email *</label><input name="email" type="email" required placeholder="john@example.com" class="w-full h-12 bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 focus:border-amber-600 focus:outline-none placeholder:text-gray-500"></div>
                </div>
                <div class="grid sm:grid-cols-2 gap-5">
                  <div><label class="block text-gray-400 text-sm mb-2">Phone</label><input name="phone" type="tel" placeholder="(910) 515-7779" class="w-full h-12 bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 focus:border-amber-600 focus:outline-none placeholder:text-gray-500"></div>
                  <div><label class="block text-gray-400 text-sm mb-2">Subject *</label>
                    <select name="subject" required class="w-full h-12 bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 focus:border-amber-600 focus:outline-none">
                      <option value="">Select...</option><option value="Excavation">Excavation</option><option value="Site Grading">Site Grading</option><option value="Land Clearing">Land Clearing</option><option value="Drainage Solutions">Drainage Solutions</option><option value="Demolition & Hauling">Demolition & Hauling</option><option value="Site Preparation">Site Preparation</option><option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div><label class="block text-gray-400 text-sm mb-2">Message *</label><textarea name="message" required rows="6" placeholder="Tell us more about your project..." class="w-full bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 py-3 focus:border-amber-600 focus:outline-none resize-none placeholder:text-gray-500"></textarea></div>
                <button type="submit" id="cp-submit" class="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold h-14 text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
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
