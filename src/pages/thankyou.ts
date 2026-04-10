export function thankYouPage(): string {
  return `<div class="min-h-screen bg-zinc-950 pt-32 pb-12">
    <div class="max-w-2xl mx-auto px-6">
      <div class="card-ultra rounded-2xl p-12 text-center animate-fadeInUp relative overflow-hidden glow-amber-sm">
        <div class="absolute inset-0 mesh-gradient"></div>
        <div class="relative z-10">
          <div class="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-fadeInUp delay-200">
            <svg class="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h1 class="text-4xl font-bold text-white mb-4 animate-fadeInUp delay-300 font-display">Thank You!</h1>
          <p class="text-xl text-gray-400 mb-8 animate-fadeInUp delay-400">We've received your message and will get back to you as soon as possible.</p>
          <p class="text-gray-500 mb-8 animate-fadeInUp delay-500">In the meantime, feel free to call us at <a href="tel:+19105157779" class="text-amber-400 hover:text-amber-300 font-semibold transition-colors">(910) 515-7779</a></p>
          <a href="/" class="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full px-7 py-3 font-semibold animate-fadeInUp delay-500">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>Back to Home
          </a>
        </div>
      </div>
    </div>
  </div>
  <script>
    if (window.gtag) gtag('event', 'conversion', { send_to: 'AW-17921730867/h8tRCMeovPMbELPS3-FC', value: 1.0, currency: 'USD' });
    if (window.fbq) fbq('track', 'Contact');
  </script>`
}
