export function calculatorPage(): string {
  return `<div class="min-h-screen bg-zinc-950">
    <!-- Hero -->
    <section class="relative pt-32 pb-8 lg:pt-40 lg:pb-12 overflow-hidden">
      <div class="absolute inset-0 mesh-gradient"></div>
      <div class="relative max-w-4xl mx-auto px-6 text-center">
        <div class="animate-fadeInUp inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-xs font-medium mb-6">
          <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          Free Instant Quote
        </div>
        <h1 class="animate-fadeInUp delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-display">Land Clearing <span class="gradient-text-animated">Calculator</span></h1>
        <p class="animate-fadeInUp delay-200 text-gray-400 text-lg max-w-2xl mx-auto">Get an instant estimate for your land clearing project. Takes less than 2 minutes.</p>
      </div>
    </section>
    
    <section class="pb-24 lg:pb-32">
      <div class="max-w-3xl mx-auto px-6">
        <!-- Progress -->
        <div id="calc-progress" class="mb-8 animate-fadeInUp delay-300">
          <div class="flex justify-between items-center">
            ${[{ n: 1, l: 'Property' }, { n: 2, l: 'Access' }, { n: 3, l: 'Services' }, { n: 4, l: 'Contact' }].map((s, i, arr) => `
              <div class="flex flex-col items-center z-10">
                <div id="step-dot-${s.n}" class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 font-display ${s.n === 1 ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30' : 'bg-zinc-800/80 text-gray-500 border border-zinc-700/50'}">${s.n}</div>
                <span class="text-[10px] text-gray-500 mt-2 uppercase tracking-wider font-medium">${s.l}</span>
              </div>
              ${i < arr.length - 1 ? `<div id="step-bar-${s.n}" class="flex-1 h-0.5 mx-3 rounded transition-all duration-500 bg-zinc-800"></div>` : ''}
            `).join('')}
          </div>
        </div>

        <!-- Steps Container -->
        <div class="card-ultra rounded-2xl p-7 lg:p-9 animate-fadeInUp delay-400">
          <!-- Step 1 -->
          <div id="step-1" class="calc-step">
            <h2 class="text-white text-xl font-bold mb-1 font-display">Property Information</h2>
            <p class="text-gray-500 text-sm mb-6">Tell us about your property size and tree coverage</p>
            <div class="space-y-6">
              <div>
                <label for="lot_size" class="text-white text-sm font-medium block mb-2">Lot Size (acres) *</label>
                <input id="lot_size" type="number" step="0.1" min="0" placeholder="Enter lot size in acres" class="input-premium w-full h-12 rounded-xl px-4 text-sm">
              </div>
              <div>
                <span class="text-white text-sm font-medium block mb-3" id="tree-density-label">Tree Density *</span>
                <div class="grid grid-cols-2 gap-3" role="radiogroup" aria-labelledby="tree-density-label">
                  <button type="button" onclick="selectOption('tree_density','medium',this)" class="density-btn p-5 border border-zinc-700/50 rounded-xl text-left hover:border-zinc-600 transition-all bg-zinc-900/30" role="radio" aria-checked="false">
                    <div class="font-semibold text-white mb-0.5">Medium</div>
                    <div class="text-xs text-gray-500">Moderate coverage</div>
                  </button>
                  <button type="button" onclick="selectOption('tree_density','heavy',this)" class="density-btn p-5 border border-zinc-700/50 rounded-xl text-left hover:border-zinc-600 transition-all bg-zinc-900/30" role="radio" aria-checked="false">
                    <div class="font-semibold text-white mb-0.5">Heavy</div>
                    <div class="text-xs text-gray-500">Dense forest</div>
                  </button>
                </div>
              </div>
              <button onclick="goToStep(2)" class="btn-premium w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold h-12 rounded-xl">Continue to Equipment Access</button>
            </div>
          </div>

          <!-- Step 2 -->
          <div id="step-2" class="calc-step hidden">
            <h2 class="text-white text-xl font-bold mb-1 font-display">Equipment Access</h2>
            <p class="text-gray-500 text-sm mb-6">Help us understand equipment access to the site</p>
            <div class="space-y-6">
              <div class="grid grid-cols-3 gap-3" role="radiogroup" aria-label="Equipment access difficulty">
                ${['Easy|Direct access', 'Moderate|Some obstacles', 'Difficult|Limited access'].map(a => { const [t, d] = a.split('|'); return `
                <button type="button" onclick="selectOption('access_difficulty','${t.toLowerCase()}',this)" class="access-btn p-5 border border-zinc-700/50 rounded-xl text-left hover:border-zinc-600 transition-all bg-zinc-900/30" role="radio" aria-checked="false">
                  <div class="font-semibold text-white mb-0.5 text-sm">${t}</div>
                  <div class="text-[11px] text-gray-500">${d}</div>
                </button>` }).join('')}
              </div>
              <div class="flex gap-3">
                <button onclick="goToStep(1)" class="flex-1 h-12 border border-zinc-700/50 text-white rounded-xl hover:bg-zinc-800/50 transition-colors text-sm font-medium">Back</button>
                <button onclick="goToStep(3)" class="btn-premium flex-1 h-12 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-xl font-semibold text-sm">Continue</button>
              </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div id="step-3" class="calc-step hidden">
            <h2 class="text-white text-xl font-bold mb-1 font-display">Additional Services</h2>
            <p class="text-gray-500 text-sm mb-6">Select any additional services you need</p>
            <div class="space-y-3">
              ${[['stump_removal', 'Stump Removal', 'Complete stump removal'], ['derooting', 'Derooting', 'Remove roots from the ground'], ['debris_haul', 'Debris Hauling', 'Remove and dispose of all debris'], ['onsite_disposal', 'Onsite Disposal', 'Bury or burn debris onsite']].map(s => `
              <label class="flex items-start gap-4 p-4 border border-zinc-700/50 rounded-xl cursor-pointer transition-all hover:border-zinc-600 service-label bg-zinc-900/30">
                <input type="checkbox" id="${s[0]}" onchange="toggleService(this)" class="mt-1 w-5 h-5 accent-amber-600 rounded">
                <div class="flex-1"><div class="font-semibold text-white text-sm">${s[1]}</div><div class="text-xs text-gray-500">${s[2]}</div></div>
              </label>`).join('')}
            </div>
            <div class="flex gap-3 mt-6">
              <button onclick="goToStep(2)" class="flex-1 h-12 border border-zinc-700/50 text-white rounded-xl hover:bg-zinc-800/50 transition-colors text-sm font-medium">Back</button>
              <button onclick="goToStep(4)" class="btn-premium flex-1 h-12 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-xl font-semibold text-sm">Continue</button>
            </div>
          </div>

          <!-- Step 4 -->
          <div id="step-4" class="calc-step hidden">
            <h2 class="text-white text-xl font-bold mb-1 font-display">Contact Information</h2>
            <p class="text-gray-500 text-sm mb-6">Where should we send your quote?</p>
            <div class="space-y-4">
              <div class="grid sm:grid-cols-2 gap-4">
                <div><label for="customer_name" class="text-white text-sm font-medium block mb-2">Full Name *</label><input id="customer_name" placeholder="John Smith" class="input-premium w-full h-12 rounded-xl px-4 text-sm" autocomplete="name"></div>
                <div><label for="customer_email" class="text-white text-sm font-medium block mb-2">Email Address *</label><input id="customer_email" type="email" placeholder="john@example.com" class="input-premium w-full h-12 rounded-xl px-4 text-sm" autocomplete="email"></div>
              </div>
              <div class="grid sm:grid-cols-2 gap-4">
                <div><label for="customer_phone" class="text-white text-sm font-medium block mb-2">Phone Number</label><input id="customer_phone" type="tel" placeholder="(910) 515-7779" class="input-premium w-full h-12 rounded-xl px-4 text-sm" autocomplete="tel"></div>
                <div><label for="property_address" class="text-white text-sm font-medium block mb-2">Property Address</label><input id="property_address" placeholder="123 Main St, Wilmington, NC" class="input-premium w-full h-12 rounded-xl px-4 text-sm" autocomplete="street-address"></div>
              </div>
              <div><label for="notes" class="text-white text-sm font-medium block mb-2">Additional Notes</label><textarea id="notes" rows="3" placeholder="Tell us anything else about your project..." class="input-premium w-full rounded-xl px-4 py-3 text-sm resize-none"></textarea></div>
              <div class="bg-amber-500/5 border border-amber-500/15 rounded-xl p-4">
                <p class="text-sm text-gray-300 flex items-center gap-2"><svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>By submitting, you'll receive an instant quote via email with a detailed breakdown.</p>
              </div>
              <div class="flex gap-3">
                <button onclick="goToStep(3)" class="flex-1 h-12 border border-zinc-700/50 text-white rounded-xl hover:bg-zinc-800/50 transition-colors text-sm font-medium">Back</button>
                <button id="quote-submit" onclick="submitQuote()" class="btn-premium flex-1 h-12 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-xl font-semibold text-sm">Get My Quote</button>
              </div>
            </div>
          </div>

          <!-- Results -->
          <div id="step-5" class="calc-step hidden">
            <div class="text-center py-6">
              <div class="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-2 font-display">Quote Generated!</h3>
              <p class="text-gray-400 text-sm">We've sent a detailed quote to your email</p>
            </div>
            <div id="quote-total" class="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-8 text-center mb-6 shadow-lg shadow-amber-600/20">
              <div class="text-xs text-amber-100 mb-2 uppercase tracking-wider font-medium">Estimated Total</div>
              <div class="text-5xl font-bold text-white font-display" id="quote-amount">$0</div>
              <div class="text-xs text-amber-100 mt-2" id="quote-timeline"></div>
            </div>
            <div id="quote-breakdown" class="card-ultra rounded-xl p-6 mb-6">
              <h4 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Cost Breakdown</h4>
              <div id="breakdown-list" class="space-y-2.5"></div>
            </div>
            <div class="card-ultra rounded-xl p-6 mb-6">
              <h4 class="text-white font-semibold mb-3 text-sm">What Happens Next?</h4>
              <ul class="space-y-2.5 text-gray-400 text-sm">
                <li class="flex items-start gap-3"><div class="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5"><span class="text-amber-400 text-xs font-bold">1</span></div>Check your email for the detailed quote</li>
                <li class="flex items-start gap-3"><div class="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5"><span class="text-amber-400 text-xs font-bold">2</span></div>Our team will call you within 24 hours</li>
                <li class="flex items-start gap-3"><div class="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5"><span class="text-amber-400 text-xs font-bold">3</span></div>Schedule a free site visit for final assessment</li>
              </ul>
            </div>
            <div class="text-center">
              <p class="text-gray-500 text-sm mb-4">Need to speak with us right away?</p>
              <a href="tel:+19105157779" class="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full px-7 py-3 font-semibold text-sm">Call (910) 515-7779</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <script>
    const calcData = { tree_density: '', access_difficulty: '', stump_removal: false, derooting: false, debris_haul: false, onsite_disposal: false };
    let currentStep = 1;

    function selectOption(field, value, btn) {
      calcData[field] = value;
      const group = field === 'tree_density' ? '.density-btn' : '.access-btn';
      document.querySelectorAll(group).forEach(b => { b.classList.remove('border-amber-500/50', 'bg-amber-500/5'); b.classList.add('border-zinc-700/50', 'bg-zinc-900/30'); b.setAttribute('aria-checked', 'false'); });
      btn.classList.remove('border-zinc-700/50', 'bg-zinc-900/30'); btn.classList.add('border-amber-500/50', 'bg-amber-500/5'); btn.setAttribute('aria-checked', 'true');
    }

    function toggleService(cb) {
      calcData[cb.id] = cb.checked;
      const label = cb.closest('.service-label');
      if (cb.checked) { label.classList.remove('border-zinc-700/50', 'bg-zinc-900/30'); label.classList.add('border-amber-500/50', 'bg-amber-500/5'); }
      else { label.classList.add('border-zinc-700/50', 'bg-zinc-900/30'); label.classList.remove('border-amber-500/50', 'bg-amber-500/5'); }
    }

    function goToStep(step) {
      document.querySelectorAll('.calc-step').forEach(s => s.classList.add('hidden'));
      document.getElementById('step-' + step).classList.remove('hidden');
      for (let i = 1; i <= 4; i++) {
        const dot = document.getElementById('step-dot-' + i);
        if (i <= step) { dot.className = 'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 font-display bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30'; }
        else { dot.className = 'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 font-display bg-zinc-800/80 text-gray-500 border border-zinc-700/50'; }
        if (i < 4) {
          const bar = document.getElementById('step-bar-' + i);
          bar.className = i < step ? 'flex-1 h-0.5 mx-3 rounded transition-all duration-500 bg-gradient-to-r from-amber-500 to-amber-600' : 'flex-1 h-0.5 mx-3 rounded transition-all duration-500 bg-zinc-800';
        }
      }
      if (step === 5) document.getElementById('calc-progress').style.display = 'none';
      currentStep = step;
    }

    async function submitQuote() {
      const name = document.getElementById('customer_name').value;
      const email = document.getElementById('customer_email').value;
      if (!name || !email) { alert('Please fill in name and email'); return; }
      
      const btn = document.getElementById('quote-submit');
      btn.disabled = true; btn.textContent = 'Generating Quote...';

      const payload = {
        ...calcData,
        customer_name: name, customer_email: email,
        customer_phone: document.getElementById('customer_phone').value,
        property_address: document.getElementById('property_address').value,
        lot_size_acres: document.getElementById('lot_size').value,
        notes: document.getElementById('notes').value
      };

      try {
        const res = await fetch('/api/quote', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload) });
        const data = await res.json();
        if (data.success) {
          const fmt = (n) => '$' + Math.round(n).toLocaleString();
          document.getElementById('quote-amount').textContent = fmt(data.estimate.total);
          document.getElementById('quote-timeline').textContent = 'Estimated Timeline: ' + data.estimate.timeline;
          const list = document.getElementById('breakdown-list');
          list.innerHTML = '';
          for (const [k, v] of Object.entries(data.estimate.breakdown)) {
            list.innerHTML += '<div class="flex justify-between text-sm py-1.5 border-b border-zinc-800/50 last:border-0"><span class="text-gray-400 capitalize">' + k.replace(/_/g, ' ') + '</span><span class="text-white font-medium">' + fmt(v) + '</span></div>';
          }
          goToStep(5);
          if (window.gtag) { gtag('event', 'generate_lead', { currency: 'USD', value: data.estimate.total }); }
          if (window.fbq) { fbq('track', 'Lead', { value: data.estimate.total, currency: 'USD' }); }
        } else { alert('Failed to generate quote.'); }
      } catch { alert('Failed to generate quote.'); }
      btn.disabled = false; btn.textContent = 'Get My Quote';
    }
  </script>`
}
