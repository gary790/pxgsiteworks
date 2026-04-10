export function calculatorPage(): string {
  return `<div class="min-h-screen bg-zinc-950 pt-32 pb-20">
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-12 animate-fadeInUp">
        <div class="inline-flex items-center gap-3 mb-4">
          <svg class="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
          <h1 class="text-4xl md:text-5xl font-bold text-white">Land Clearing Calculator</h1>
        </div>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">Get an instant estimate for your land clearing project. Takes less than 2 minutes.</p>
      </div>

      <!-- Progress -->
      <div id="calc-progress" class="mb-8">
        <div class="flex justify-between items-center mb-2">
          ${[{ n: 1, l: 'Property' }, { n: 2, l: 'Access' }, { n: 3, l: 'Services' }, { n: 4, l: 'Contact' }].map((s, i, arr) => `
            <div class="flex flex-col items-center"><div id="step-dot-${s.n}" class="w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${s.n === 1 ? 'bg-amber-600 text-white' : 'bg-zinc-800 text-gray-500'}">${s.n}</div><span class="text-xs text-gray-400 mt-2 text-center">${s.l}</span></div>
            ${i < arr.length - 1 ? `<div id="step-bar-${s.n}" class="flex-1 h-1 mx-2 rounded transition-all bg-zinc-800"></div>` : ''}
          `).join('')}
        </div>
      </div>

      <!-- Steps Container -->
      <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        <!-- Step 1 -->
        <div id="step-1" class="calc-step">
          <h2 class="text-white text-xl font-bold mb-1">Property Information</h2>
          <p class="text-gray-400 text-sm mb-6">Tell us about your property size and tree coverage</p>
          <div class="space-y-6">
            <div><label class="text-white block mb-2">Lot Size (acres) *</label><input id="lot_size" type="number" step="0.1" min="0" placeholder="Enter lot size in acres" class="w-full h-12 bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 focus:border-amber-600 focus:outline-none placeholder:text-gray-500"></div>
            <div><label class="text-white block mb-2">Tree Density *</label>
              <div class="grid grid-cols-2 gap-3">
                <button type="button" onclick="selectOption('tree_density','medium',this)" class="density-btn p-4 border-2 border-zinc-700 rounded-lg text-left hover:border-zinc-600 transition-all"><div class="font-semibold text-white">Medium</div><div class="text-sm text-gray-400">Moderate coverage</div></button>
                <button type="button" onclick="selectOption('tree_density','heavy',this)" class="density-btn p-4 border-2 border-zinc-700 rounded-lg text-left hover:border-zinc-600 transition-all"><div class="font-semibold text-white">Heavy</div><div class="text-sm text-gray-400">Dense forest</div></button>
              </div>
            </div>
            <button onclick="goToStep(2)" class="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold h-12 rounded-lg transition-colors">Continue to Equipment Access</button>
          </div>
        </div>

        <!-- Step 2 -->
        <div id="step-2" class="calc-step hidden">
          <h2 class="text-white text-xl font-bold mb-1">Equipment Access</h2>
          <p class="text-gray-400 text-sm mb-6">Help us understand equipment access to the site</p>
          <div class="space-y-6">
            <div class="grid grid-cols-3 gap-3">
              <button type="button" onclick="selectOption('access_difficulty','easy',this)" class="access-btn p-4 border-2 border-zinc-700 rounded-lg text-left hover:border-zinc-600 transition-all"><div class="font-semibold text-white">Easy</div><div class="text-sm text-gray-400">Direct access</div></button>
              <button type="button" onclick="selectOption('access_difficulty','moderate',this)" class="access-btn p-4 border-2 border-zinc-700 rounded-lg text-left hover:border-zinc-600 transition-all"><div class="font-semibold text-white">Moderate</div><div class="text-sm text-gray-400">Some obstacles</div></button>
              <button type="button" onclick="selectOption('access_difficulty','difficult',this)" class="access-btn p-4 border-2 border-zinc-700 rounded-lg text-left hover:border-zinc-600 transition-all"><div class="font-semibold text-white">Difficult</div><div class="text-sm text-gray-400">Limited access</div></button>
            </div>
            <div class="flex gap-3">
              <button onclick="goToStep(1)" class="flex-1 h-12 border border-zinc-700 text-white rounded-lg hover:bg-zinc-800 transition-colors">Back</button>
              <button onclick="goToStep(3)" class="flex-1 h-12 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors">Continue to Services</button>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div id="step-3" class="calc-step hidden">
          <h2 class="text-white text-xl font-bold mb-1">Additional Services</h2>
          <p class="text-gray-400 text-sm mb-6">Select any additional services you need</p>
          <div class="space-y-3">
            ${[['stump_removal', 'Stump Removal', 'Complete stump removal'], ['derooting', 'Derooting', 'Remove roots from the ground'], ['debris_haul', 'Debris Hauling', 'Remove and dispose of all debris'], ['onsite_disposal', 'Onsite Disposal', 'Bury or burn debris onsite']].map(s => `
            <label class="flex items-start gap-4 p-4 border-2 border-zinc-700 rounded-lg cursor-pointer transition-all hover:border-zinc-600 service-label">
              <input type="checkbox" id="${s[0]}" onchange="toggleService(this)" class="mt-1 w-5 h-5 accent-amber-600">
              <div class="flex-1"><div class="font-semibold text-white">${s[1]}</div><div class="text-sm text-gray-400">${s[2]}</div></div>
            </label>`).join('')}
          </div>
          <div class="flex gap-3 mt-6">
            <button onclick="goToStep(2)" class="flex-1 h-12 border border-zinc-700 text-white rounded-lg hover:bg-zinc-800 transition-colors">Back</button>
            <button onclick="goToStep(4)" class="flex-1 h-12 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors">Continue to Contact Info</button>
          </div>
        </div>

        <!-- Step 4 -->
        <div id="step-4" class="calc-step hidden">
          <h2 class="text-white text-xl font-bold mb-1">Contact Information</h2>
          <p class="text-gray-400 text-sm mb-6">Where should we send your quote?</p>
          <div class="space-y-5">
            <div class="grid sm:grid-cols-2 gap-5">
              <div><label class="text-white block mb-2">Full Name *</label><input id="customer_name" placeholder="John Smith" class="w-full h-12 bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 focus:border-amber-600 focus:outline-none placeholder:text-gray-500"></div>
              <div><label class="text-white block mb-2">Email Address *</label><input id="customer_email" type="email" placeholder="john@example.com" class="w-full h-12 bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 focus:border-amber-600 focus:outline-none placeholder:text-gray-500"></div>
            </div>
            <div class="grid sm:grid-cols-2 gap-5">
              <div><label class="text-white block mb-2">Phone Number</label><input id="customer_phone" type="tel" placeholder="(910) 515-7779" class="w-full h-12 bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 focus:border-amber-600 focus:outline-none placeholder:text-gray-500"></div>
              <div><label class="text-white block mb-2">Property Address</label><input id="property_address" placeholder="123 Main St, Wilmington, NC" class="w-full h-12 bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 focus:border-amber-600 focus:outline-none placeholder:text-gray-500"></div>
            </div>
            <div><label class="text-white block mb-2">Additional Notes</label><textarea id="notes" rows="3" placeholder="Tell us anything else about your project..." class="w-full bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 py-3 focus:border-amber-600 focus:outline-none resize-none placeholder:text-gray-500"></textarea></div>
            <div class="bg-amber-600/10 border border-amber-600/20 rounded-lg p-4">
              <p class="text-sm text-gray-300"><svg class="w-4 h-4 inline mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>By submitting, you'll receive an instant quote via email with detailed breakdown.</p>
            </div>
            <div class="flex gap-3">
              <button onclick="goToStep(3)" class="flex-1 h-12 border border-zinc-700 text-white rounded-lg hover:bg-zinc-800 transition-colors">Back</button>
              <button id="quote-submit" onclick="submitQuote()" class="flex-1 h-12 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors">Get My Quote</button>
            </div>
          </div>
        </div>

        <!-- Results -->
        <div id="step-5" class="calc-step hidden">
          <div class="text-center py-8">
            <div class="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
            <h3 class="text-3xl font-bold text-white mb-2">Quote Generated!</h3>
            <p class="text-gray-400">We've sent a detailed quote to your email</p>
          </div>
          <div id="quote-total" class="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-8 text-center mb-6">
            <div class="text-sm text-amber-100 mb-2">Estimated Total</div>
            <div class="text-5xl font-bold text-white" id="quote-amount">$0</div>
            <div class="text-sm text-amber-100 mt-2" id="quote-timeline"></div>
          </div>
          <div id="quote-breakdown" class="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700 mb-6">
            <h4 class="text-white font-semibold mb-4">Cost Breakdown</h4>
            <div id="breakdown-list" class="space-y-2"></div>
          </div>
          <div class="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700 mb-6">
            <h4 class="text-white font-semibold mb-3">What Happens Next?</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start gap-2"><svg class="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>Check your email for the detailed quote</li>
              <li class="flex items-start gap-2"><svg class="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>Our team will call you within 24 hours</li>
              <li class="flex items-start gap-2"><svg class="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>Schedule a free site visit for final assessment</li>
            </ul>
          </div>
          <div class="text-center"><p class="text-gray-400 mb-4">Need to speak with us right away?</p>
            <a href="tel:+19105157779" class="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg px-6 py-3 font-semibold transition-colors">Call (910) 515-7779</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    const calcData = { tree_density: '', access_difficulty: '', stump_removal: false, derooting: false, debris_haul: false, onsite_disposal: false };
    let currentStep = 1;

    function selectOption(field, value, btn) {
      calcData[field] = value;
      const group = field === 'tree_density' ? '.density-btn' : '.access-btn';
      document.querySelectorAll(group).forEach(b => { b.classList.remove('border-amber-600', 'bg-amber-600/10'); b.classList.add('border-zinc-700'); });
      btn.classList.remove('border-zinc-700'); btn.classList.add('border-amber-600', 'bg-amber-600/10');
    }

    function toggleService(cb) {
      calcData[cb.id] = cb.checked;
      const label = cb.closest('.service-label');
      if (cb.checked) { label.classList.remove('border-zinc-700'); label.classList.add('border-amber-600', 'bg-amber-600/10'); }
      else { label.classList.add('border-zinc-700'); label.classList.remove('border-amber-600', 'bg-amber-600/10'); }
    }

    function goToStep(step) {
      document.querySelectorAll('.calc-step').forEach(s => s.classList.add('hidden'));
      document.getElementById('step-' + step).classList.remove('hidden');
      for (let i = 1; i <= 4; i++) {
        const dot = document.getElementById('step-dot-' + i);
        if (i <= step) { dot.classList.add('bg-amber-600', 'text-white'); dot.classList.remove('bg-zinc-800', 'text-gray-500'); }
        else { dot.classList.remove('bg-amber-600', 'text-white'); dot.classList.add('bg-zinc-800', 'text-gray-500'); }
        if (i < 4) {
          const bar = document.getElementById('step-bar-' + i);
          if (i < step) bar.classList.replace('bg-zinc-800', 'bg-amber-600');
          else bar.classList.replace('bg-amber-600', 'bg-zinc-800');
        }
      }
      if (step === 5) document.getElementById('calc-progress').classList.add('hidden');
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
        customer_name: name,
        customer_email: email,
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
          document.getElementById('quote-timeline').textContent = 'Timeline: ' + data.estimate.timeline;
          const list = document.getElementById('breakdown-list');
          list.innerHTML = '';
          for (const [k, v] of Object.entries(data.estimate.breakdown)) {
            list.innerHTML += '<div class="flex justify-between text-sm"><span class="text-gray-400 capitalize">' + k.replace(/_/g, ' ') + '</span><span class="text-white font-medium">' + fmt(v) + '</span></div>';
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
