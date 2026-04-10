export function calculateEstimate(data: any) {
  let baseCost = 0
  const breakdown: Record<string, number> = {}

  const densityRates: Record<string, number> = { medium: 3000, heavy: 4000 }
  const acres = parseFloat(data.lot_size_acres) || 0
  const baseRate = densityRates[data.tree_density] || 3500
  baseCost = acres * baseRate
  breakdown.base_clearing = baseCost

  const accessCosts: Record<string, number> = { easy: 0, moderate: 500, difficult: 1500 }
  const accessCost = accessCosts[data.access_difficulty] || 0
  baseCost += accessCost
  if (accessCost > 0) breakdown.access_difficulty = accessCost

  if (data.stump_removal) { const c = acres * 2000; baseCost += c; breakdown.stump_removal = c }
  if (data.derooting) { const c = acres * 2000; baseCost += c; breakdown.derooting = c }
  if (data.debris_haul) { const c = acres * 3500; baseCost += c; breakdown.debris_hauling = c }
  if (data.onsite_disposal) { const c = acres * 1000; baseCost += c; breakdown.onsite_disposal = c }

  let estimatedDays = Math.ceil(acres * 2)
  if (data.tree_density === 'heavy') estimatedDays = Math.ceil(estimatedDays * 1.5)
  const timeline = `${estimatedDays}-${estimatedDays + 3} business days`

  return { total: Math.round(baseCost), breakdown, timeline }
}

export function generateCustomerEmailHtml(data: any, estimate: any): string {
  const fmt = (n: number) => `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  let breakdownHtml = ''
  for (const [key, value] of Object.entries(estimate.breakdown)) {
    const label = key.replace(/_/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())
    breakdownHtml += `<tr><td style="padding:8px;border-bottom:1px solid #eee">${label}</td><td style="padding:8px;border-bottom:1px solid #eee;text-align:right">${fmt(value as number)}</td></tr>`
  }

  return `<!DOCTYPE html><html><head><style>body{font-family:Arial,sans-serif;line-height:1.6;color:#333}.container{max-width:600px;margin:0 auto;padding:20px}.header{background:#f59e0b;color:white;padding:30px;text-align:center;border-radius:8px 8px 0 0}.content{background:#f9fafb;padding:30px;border-radius:0 0 8px 8px}.total{background:#18181b;color:white;padding:20px;text-align:center;font-size:24px;font-weight:bold;border-radius:8px;margin:20px 0}table{width:100%;border-collapse:collapse;background:white;margin:20px 0}.button{display:inline-block;background:#f59e0b;color:white;padding:12px 30px;text-decoration:none;border-radius:6px;margin:20px 0}</style></head><body><div class="container"><div class="header"><h1>Your Land Clearing Quote</h1><p>PXG Siteworks - Professional Excavation & Site Development</p></div><div class="content"><p>Hi ${data.customer_name},</p><p>Thank you for using our Land Clearing Calculator! Based on the information you provided, here's your estimated quote:</p><div class="total">Estimated Total: ${fmt(estimate.total)}</div><h3>Cost Breakdown:</h3><table>${breakdownHtml}<tr style="font-weight:bold;background:#f3f4f6"><td style="padding:12px">Total Estimate</td><td style="padding:12px;text-align:right">${fmt(estimate.total)}</td></tr></table><h3>Project Details:</h3><ul><li><strong>Property Size:</strong> ${data.lot_size_acres} acres</li><li><strong>Tree Density:</strong> ${(data.tree_density || '').replace(/_/g, ' ')}</li><li><strong>Estimated Timeline:</strong> ${estimate.timeline}</li></ul><p><strong>Important Notes:</strong></p><ul><li>This is an automated estimate based on typical project parameters</li><li>Final pricing will be determined after a site visit</li><li>Quote is valid for 30 days</li><li>Our team will contact you within 24 hours</li></ul><p style="text-align:center"><a href="tel:+19105157779" class="button">Call Us: (910) 515-7779</a></p><p>Best regards,<br><strong>PXG Siteworks Team</strong><br>(910) 515-7779<br>info@pxgsiteworks.com</p></div></div></body></html>`
}

export function generateAdminEmailText(data: any, estimate: any): string {
  const fmt = (n: number) => `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  let breakdownText = ''
  for (const [key, value] of Object.entries(estimate.breakdown)) {
    breakdownText += `${key.replace(/_/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}: ${fmt(value as number)}\n`
  }
  const services = [data.stump_removal && 'Stump Removal', data.derooting && 'Derooting', data.debris_haul && 'Debris Hauling', data.onsite_disposal && 'Onsite Disposal'].filter(Boolean)

  return `NEW LAND CLEARING QUOTE REQUEST\nDate: ${new Date().toLocaleString()}\n\n===== CUSTOMER INFORMATION =====\nName: ${data.customer_name}\nEmail: ${data.customer_email}\nPhone: ${data.customer_phone || 'Not provided'}\nProperty Address: ${data.property_address || 'Not provided'}\n\n===== PROJECT DETAILS =====\nLot Size: ${data.lot_size_acres} acres\nTree Density: ${(data.tree_density || '').replace(/_/g, ' ')}\nAccess Difficulty: ${(data.access_difficulty || 'Not specified').replace(/_/g, ' ')}\n\n===== ADDITIONAL SERVICES =====\n${services.length > 0 ? services.join('\n') : 'None selected'}\n\n===== COST BREAKDOWN =====\n${breakdownText}---\nTOTAL ESTIMATE: ${fmt(estimate.total)}\nEstimated Timeline: ${estimate.timeline}\n\n===== CUSTOMER NOTES =====\n${data.notes || 'No additional notes'}`
}
