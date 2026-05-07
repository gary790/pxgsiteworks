interface ServiceData {
  title: string; icon: string; desc: string; features: string[]; why: string; whyExtra?: string
  heroImg?: string; process?: string[]; longContent: string
}

const services: Record<string, ServiceData> = {
  'excavation': {
    title: 'Excavation & Earthwork',
    icon: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z',
    desc: 'Professional excavation and earthwork services for residential and commercial projects throughout Southeastern North Carolina.',
    features: ['Residential & commercial excavation', 'House pad & shop pad excavation', 'Foundation excavation', 'Footing & trench excavation', 'Backfilling & compaction', 'Dirt work & site shaping', 'Small demolition & removal'],
    why: "Excavation is the foundation of your entire project. If it's not done correctly, everything that comes after can become a problem.",
    whyExtra: 'We focus on accurate digging, clean cuts, safe and controlled work, keeping the site clean and organized, and finishing the job the right way.',
    process: ['Site assessment & planning', 'Equipment mobilization', 'Excavation execution', 'Backfill & compaction', 'Final inspection'],
    longContent: `
      <h2 class="text-2xl lg:text-3xl font-bold text-white mb-6 font-display">Professional Excavation Services in Wilmington, NC</h2>
      <p class="text-gray-300 mb-4 leading-relaxed">PXG Siteworks has been the trusted excavation contractor in Wilmington, NC and Southeastern North Carolina for over 20 years. Our excavation services cover everything from small residential foundation digs to large-scale commercial earthwork projects. We bring the right equipment, experienced operators, and a commitment to doing the job right the first time.</p>
      <p class="text-gray-400 mb-6 leading-relaxed">Excavation is the critical first step in any construction project. Whether you are building a new home, adding a pool, installing a septic system, or developing a commercial property, the quality of your excavation work determines the stability and success of everything that follows. Poor excavation leads to foundation problems, drainage issues, and costly repairs down the road.</p>
      <h3 class="text-xl font-bold text-white mb-4 font-display">Types of Excavation We Handle</h3>
      <p class="text-gray-400 mb-4 leading-relaxed">Our team handles a wide range of excavation projects across the Wilmington area. For residential clients, we regularly excavate for home foundations, basement digs, swimming pools, driveways, and utility trenches. On the commercial side, we handle building pad excavation, parking lot preparation, retention pond digging, and large-scale earthmoving for development projects.</p>
      <p class="text-gray-400 mb-6 leading-relaxed">Every excavation project starts with a thorough site assessment. We evaluate soil conditions, review site plans, identify utility locations, and determine the best approach for your specific project. This planning phase ensures we execute efficiently and avoid unexpected issues during the dig.</p>
      <h3 class="text-xl font-bold text-white mb-4 font-display">Our Equipment and Expertise</h3>
      <p class="text-gray-400 mb-4 leading-relaxed">We maintain a fleet of well-serviced excavators, bulldozers, skid steers, and dump trucks to handle projects of any size. Our operators have decades of combined experience and understand the unique soil conditions found in the Wilmington coastal plain area, including sandy soils, high water tables, and clay layers that require specialized handling.</p>
      <p class="text-gray-400 mb-6 leading-relaxed">Safety is our top priority on every job site. All operators are trained in proper excavation techniques, trench safety, and equipment operation. We follow OSHA guidelines and maintain all required certifications and insurance coverage to protect both our team and your property.</p>
      <h3 class="text-xl font-bold text-white mb-4 font-display">What to Expect: Cost and Timeline</h3>
      <p class="text-gray-400 mb-4 leading-relaxed">Excavation costs in the Wilmington area vary based on the scope of work, soil conditions, access difficulty, and the amount of material that needs to be moved or hauled away. Most residential excavation projects are completed within 1-3 days, while larger commercial projects may take 1-2 weeks depending on complexity.</p>
      <p class="text-gray-400 mb-4 leading-relaxed">We provide free, detailed estimates for every project. Our quotes break down the work clearly so you know exactly what you are paying for. There are no hidden fees or surprise charges. If conditions change during the project, we communicate with you before proceeding with any additional work.</p>
    `
  },
  'site-grading': {
    title: 'Site Grading',
    icon: 'M8 21l4-4 4 4M4 15l4-4 4 4M12 3l4 4-4 4',
    desc: 'Professional grading and leveling to ensure proper drainage and a solid foundation for your construction project.',
    features: ['Precision land leveling', 'Proper drainage setup', 'Foundation preparation', 'Slope management', 'Erosion control', 'Final grade finishing'],
    why: 'Proper grading is critical for preventing water damage and ensuring structural integrity. Our experienced team uses advanced equipment to achieve precise grades.',
    whyExtra: 'We handle both rough and final grading for residential, commercial, and industrial sites, ensuring optimal drainage patterns and site stability.',
    process: ['Topographic survey', 'Drainage planning', 'Rough grading', 'Fine grading', 'Quality verification'],
    longContent: `
      <h2 class="text-2xl lg:text-3xl font-bold text-white mb-6 font-display">Expert Site Grading in Wilmington, NC</h2>
      <p class="text-gray-300 mb-4 leading-relaxed">Site grading is one of the most important steps in any construction project. At PXG Siteworks, we provide professional grading services that ensure your property has the proper slope, drainage, and foundation preparation needed for long-term structural stability. Serving Wilmington, Hampstead, Sneads Ferry, Leland, and surrounding areas.</p>
      <p class="text-gray-400 mb-6 leading-relaxed">Without proper grading, water pools around foundations, erodes landscapes, and creates structural problems that cost thousands of dollars to repair. Our grading team uses laser-guided equipment and years of experience to create precise grades that direct water away from structures and toward proper drainage channels.</p>
      <h3 class="text-xl font-bold text-white mb-4 font-display">Rough Grading vs. Finish Grading</h3>
      <p class="text-gray-400 mb-4 leading-relaxed">Rough grading is the initial shaping of the land to establish the basic contours, elevation, and drainage patterns for your site. This typically involves moving large amounts of earth using bulldozers and excavators to create the general shape needed for construction.</p>
      <p class="text-gray-400 mb-6 leading-relaxed">Finish grading (or fine grading) is the precision work that comes after construction is complete. This involves creating the final surface grade for landscaping, driveways, walkways, and yard areas. Finish grading ensures water flows away from your home and toward designated drainage areas. Both stages are critical to a successful project.</p>
      <h3 class="text-xl font-bold text-white mb-4 font-display">Why Grading Matters in Southeastern NC</h3>
      <p class="text-gray-400 mb-4 leading-relaxed">The Wilmington area presents unique grading challenges. Our coastal plain terrain features sandy soils, high water tables, and flat topography that make proper drainage planning essential. Heavy rains during hurricane season can quickly expose poor grading work, leading to flooding, erosion, and foundation damage.</p>
      <p class="text-gray-400 mb-4 leading-relaxed">Our team understands these local conditions and designs grading solutions that account for the specific challenges of building in Southeastern North Carolina. We work closely with builders, engineers, and homeowners to ensure every project meets local code requirements and performs well in our coastal climate.</p>
    `
  },
  'land-clearing': {
    title: 'Land Clearing',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    desc: 'Complete land clearing services including tree removal, brush clearing, and debris hauling to prepare your site.',
    features: ['Tree removal', 'Brush clearing', 'Stump grinding', 'Debris hauling', 'Lot preparation', 'Vegetation management'],
    why: 'Transform overgrown or wooded lots into clean, buildable sites. We handle everything from selective clearing to complete lot preparation.',
    whyExtra: 'Our team efficiently removes trees, brush, and debris while protecting the areas you want to preserve.',
    process: ['Property assessment', 'Clearing plan', 'Tree & brush removal', 'Debris disposal', 'Site cleanup'],
    longContent: `
      <h2 class="text-2xl lg:text-3xl font-bold text-white mb-6 font-display">Land Clearing Services in Wilmington, NC</h2>
      <p class="text-gray-300 mb-4 leading-relaxed">PXG Siteworks provides complete land clearing services throughout Wilmington, NC and Southeastern North Carolina. Whether you are preparing a residential lot for a new home, clearing acreage for a commercial development, or simply cleaning up an overgrown property, our experienced crew and heavy equipment get the job done efficiently and safely.</p>
      <p class="text-gray-400 mb-6 leading-relaxed">Land clearing is often the first step before any construction can begin. It involves removing trees, stumps, brush, vegetation, and debris from a property to create a clean, workable site. The scope of work can range from selective clearing (removing only specific trees while preserving others) to complete lot clearing where every tree and shrub is removed down to bare earth.</p>
      <h3 class="text-xl font-bold text-white mb-4 font-display">What Does Land Clearing Include?</h3>
      <p class="text-gray-400 mb-4 leading-relaxed">Our land clearing services cover the full scope of what is needed to prepare your site. This includes tree felling and removal, stump grinding or complete stump removal, brush and undergrowth clearing, debris hauling and disposal, and initial rough grading of the cleared area. We can also handle selective clearing where we preserve specific trees that you want to keep for shade or aesthetics.</p>
      <p class="text-gray-400 mb-6 leading-relaxed">For properties with heavy timber, we coordinate with local timber buyers when possible, which can sometimes offset a portion of your clearing costs. We also offer onsite disposal options where cleared material is processed and spread on-site rather than hauled away, which can significantly reduce project costs.</p>
      <h3 class="text-xl font-bold text-white mb-4 font-display">Land Clearing Costs in the Wilmington Area</h3>
      <p class="text-gray-400 mb-4 leading-relaxed">Land clearing costs in Wilmington typically range from $1,500 to $3,000 per acre for light clearing (brush and small trees), $3,000 to $5,000 per acre for medium density lots, and $4,000 to $8,000 per acre for heavily wooded properties. These costs depend on tree density, tree size, access difficulty, stump removal requirements, and debris hauling distance.</p>
      <p class="text-gray-400 mb-4 leading-relaxed">We provide free on-site estimates for every land clearing project. Use our <a href="/calculator" class="text-amber-400 hover:text-amber-300 underline">online land clearing calculator</a> to get an instant ballpark estimate, then contact us for a detailed quote based on your specific property.</p>
    `
  },
  'drainage-solutions': {
    title: 'Drainage Solutions',
    icon: 'M12 2.69l5.66 5.66a8 8 0 11-11.31 0z',
    desc: 'Expert drainage installation and stormwater management to protect your property from water damage.',
    features: ['French drain installation', 'Stormwater management', 'Catch basin installation', 'Drainage pipe systems', 'Grading for water flow', 'Erosion prevention'],
    why: 'Proper drainage is essential for protecting your foundation and preventing costly water damage.',
    whyExtra: 'From residential yards to commercial developments, we implement effective solutions that manage water flow and keep your property dry.',
    process: ['Drainage assessment', 'System design', 'Trenching & installation', 'Grading & finishing', 'Flow testing'],
    longContent: `
      <h2 class="text-2xl lg:text-3xl font-bold text-white mb-6 font-display">Drainage Solutions in Wilmington, NC</h2>
      <p class="text-gray-300 mb-4 leading-relaxed">Wilmington, NC receives an average of 57 inches of rainfall annually, making proper drainage one of the most critical investments for any property owner in our area. PXG Siteworks designs and installs drainage systems that protect your foundation, prevent yard flooding, and manage stormwater runoff effectively.</p>
      <p class="text-gray-400 mb-6 leading-relaxed">Poor drainage is one of the most common and costly problems faced by homeowners and commercial property owners in Southeastern North Carolina. Standing water around foundations leads to structural cracking, mold growth, and soil erosion. Our drainage solutions address these problems at their source, directing water away from structures and into proper channels.</p>
      <h3 class="text-xl font-bold text-white mb-4 font-display">Types of Drainage Systems We Install</h3>
      <p class="text-gray-400 mb-4 leading-relaxed">French drains are one of the most effective solutions for residential properties. These underground perforated pipe systems collect groundwater and surface water, channeling it away from your foundation to a designated discharge point. We install French drains along foundations, through yards, and around problem areas where water collects.</p>
      <p class="text-gray-400 mb-4 leading-relaxed">For larger properties and commercial sites, we install catch basins, storm drain systems, retention features, and grading-based solutions that manage high-volume stormwater runoff. Our team works with engineers and local permitting offices to ensure all drainage installations meet code requirements and perform effectively during heavy rain events.</p>
      <p class="text-gray-400 mb-4 leading-relaxed">We also handle culvert installation for driveways and access roads, yard regrading to correct drainage slope issues, and erosion control measures including rip-rap, silt fencing, and vegetation establishment on slopes and channels.</p>
    `
  },
  'hauling-demolition': {
    title: 'Hauling & Demolition',
    icon: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0',
    desc: 'Efficient demolition services and material hauling for residential and commercial properties in Wilmington NC.',
    features: ['Structure demolition', 'Concrete removal', 'Debris hauling', 'Material disposal', 'Site cleanup', 'Recycling services'],
    why: 'Whether you need to demolish an old structure or haul away construction debris, our team handles it safely and efficiently.',
    whyExtra: 'We prioritize safety and environmental responsibility, recycling materials whenever possible.',
    process: ['Safety assessment', 'Demolition planning', 'Controlled demolition', 'Debris hauling', 'Site restoration'],
    longContent: `
      <h2 class="text-2xl lg:text-3xl font-bold text-white mb-6 font-display">Hauling & Demolition Services in Wilmington, NC</h2>
      <p class="text-gray-300 mb-4 leading-relaxed">PXG Siteworks provides professional demolition and hauling services throughout Wilmington, NC and the surrounding areas. From tearing down old sheds and garages to complete residential demolition and commercial structure removal, our team handles every phase of the demolition process safely, efficiently, and in compliance with all local regulations.</p>
      <p class="text-gray-400 mb-6 leading-relaxed">Demolition work requires careful planning, proper equipment, and experienced operators. Improper demolition can damage adjacent structures, create safety hazards, and result in environmental contamination if materials like asbestos, lead paint, or other hazardous substances are present. Our team follows strict safety protocols and coordinates with environmental specialists when needed.</p>
      <h3 class="text-xl font-bold text-white mb-4 font-display">What We Demolish and Haul</h3>
      <p class="text-gray-400 mb-4 leading-relaxed">Our demolition services cover small structures like sheds, garages, decks, and fences, as well as larger projects including residential homes, mobile homes, commercial buildings, concrete foundations, slabs, driveways, and retaining walls. We also handle interior demolition for renovation projects where walls, floors, or other interior elements need to be removed.</p>
      <p class="text-gray-400 mb-4 leading-relaxed">Our hauling services include construction debris removal, dirt and fill material hauling, concrete and asphalt disposal, and green waste removal. We maintain a fleet of dump trucks and trailers that allow us to efficiently move materials to proper disposal or recycling facilities.</p>
      <h3 class="text-xl font-bold text-white mb-4 font-display">Demolition Costs in Wilmington</h3>
      <p class="text-gray-400 mb-4 leading-relaxed">Small structure demolition (sheds, garages) typically costs $1,000 to $5,000. Residential home demolition ranges from $8,000 to $25,000 depending on the size of the structure and complexity of the project. Commercial demolition projects vary widely based on building size, materials, and site conditions. We provide free estimates for all demolition projects.</p>
    `
  },
  'site-preparation': {
    title: 'Site Preparation',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    desc: 'Complete site prep for commercial and residential construction in Wilmington NC and Southeastern North Carolina.',
    features: ['Complete site clearing', 'Grading & leveling', 'Utility preparation', 'Access road building', 'Erosion control setup', 'Final grade finishing'],
    why: 'Proper site preparation is the foundation of any successful construction project.',
    whyExtra: 'Our experienced team handles everything from initial clearing through final grading, creating a solid building site.',
    process: ['Site evaluation', 'Clearing & grubbing', 'Rough grading', 'Utility prep', 'Final grading'],
    longContent: `
      <h2 class="text-2xl lg:text-3xl font-bold text-white mb-6 font-display">Site Preparation Services in Wilmington, NC</h2>
      <p class="text-gray-300 mb-4 leading-relaxed">Site preparation is the comprehensive process of getting a piece of land ready for construction. At PXG Siteworks, we handle every phase of site prep from initial clearing and grubbing through final grading, ensuring your construction project starts on a solid, properly prepared foundation.</p>
      <p class="text-gray-400 mb-6 leading-relaxed">A well-prepared site is essential for the success of any construction project, whether it is a single-family home, a multi-unit development, or a commercial building. Skipping or rushing site preparation leads to foundation problems, drainage issues, utility conflicts, and costly delays during construction. Our team takes the time to do it right.</p>
      <h3 class="text-xl font-bold text-white mb-4 font-display">Complete Site Preparation Process</h3>
      <p class="text-gray-400 mb-4 leading-relaxed">Our site preparation services begin with a thorough evaluation of your property, including soil conditions, existing vegetation, topography, and utility locations. We then develop a preparation plan that covers clearing and grubbing (removing all trees, stumps, roots, and vegetation), rough grading to establish the basic site contours, utility trenching and preparation, access road construction, erosion control installation, and final grading to construction specifications.</p>
      <p class="text-gray-400 mb-4 leading-relaxed">For residential projects, site preparation typically includes clearing the building footprint, excavating for the foundation, establishing proper drainage grades, preparing utility connections, and creating driveway access. For commercial projects, the scope expands to include parking lot preparation, stormwater management systems, and coordination with multiple trades and engineering requirements.</p>
      <h3 class="text-xl font-bold text-white mb-4 font-display">Serving Builders and Homeowners</h3>
      <p class="text-gray-400 mb-4 leading-relaxed">We work with general contractors, custom home builders, developers, and individual homeowners throughout New Hanover, Brunswick, Pender, and Onslow Counties. Our reputation for reliable scheduling, quality work, and fair pricing has made us the go-to site preparation contractor for many of the area's top builders.</p>
    `
  },
  'utilities': {
    title: 'Utility Trenching & Installation',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    desc: 'Professional underground utility installation and trenching services with precision, safety, and attention to detail.',
    features: ['Water line trenching', 'Sewer line installation', 'Storm drainage systems', 'Culverts & driveway pipes', 'Catch basins', 'Utility repairs', 'Electrical trenching'],
    why: "Utility work needs to be installed properly, sloped correctly, and compacted the right way.",
    whyExtra: 'We focus on clean trenching, proper depth and slope, safe work practices, and reliable backfill and compaction.',
    process: ['Utility locating', 'Trenching', 'Pipe installation', 'Backfill & compaction', 'Inspection'],
    longContent: `
      <h2 class="text-2xl lg:text-3xl font-bold text-white mb-6 font-display">Utility Trenching & Installation in Wilmington, NC</h2>
      <p class="text-gray-300 mb-4 leading-relaxed">Underground utility installation is one of the most critical phases of any construction project. PXG Siteworks provides professional trenching and utility installation services throughout Wilmington, NC and Southeastern North Carolina, ensuring your water, sewer, storm drainage, and electrical systems are installed correctly, at proper depth and slope, with reliable backfill and compaction.</p>
      <p class="text-gray-400 mb-6 leading-relaxed">Improperly installed utilities can lead to serious problems including water line failures, sewer backups, drainage flooding, and electrical hazards. Our experienced team understands the importance of precision in utility work and follows all applicable codes, standards, and best practices to deliver reliable installations that last.</p>
      <h3 class="text-xl font-bold text-white mb-4 font-display">Utility Services We Provide</h3>
      <p class="text-gray-400 mb-4 leading-relaxed">Our utility services include water line trenching and installation for residential and commercial connections, sanitary sewer line installation with proper slope calculations, storm drainage pipe systems including catch basins and yard drains, culvert installation for driveways and access roads, electrical conduit trenching, and utility repair and replacement for damaged or aging systems.</p>
      <p class="text-gray-400 mb-4 leading-relaxed">We handle utility work for new construction, renovations, and standalone utility projects. Whether you need a single water line run to a new building or a complete utility infrastructure package for a subdivision development, we have the equipment, expertise, and experience to deliver quality results on schedule.</p>
      <h3 class="text-xl font-bold text-white mb-4 font-display">Safety and Compliance</h3>
      <p class="text-gray-400 mb-4 leading-relaxed">Before any trenching begins, we coordinate with NC 811 to locate all existing underground utilities. This step is legally required and critical for preventing damage to gas lines, fiber optic cables, and other buried infrastructure. Our operators are trained in trench safety procedures and follow OSHA excavation standards to protect both our workers and your property.</p>
    `
  },
  'driveway': {
    title: 'Driveway Services',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    desc: 'Professional driveway installation, grading, and gravel work for residential properties in Wilmington NC.',
    features: ['Driveway grading', 'Gravel installation', 'Driveway widening', 'Drainage solutions', 'Culvert installation', 'Base preparation'],
    why: 'A properly built driveway starts with proper grading and base preparation.',
    process: ['Site survey', 'Base preparation', 'Grading', 'Material installation', 'Final finish'],
    longContent: `
      <h2 class="text-2xl lg:text-3xl font-bold text-white mb-6 font-display">Driveway Services in Wilmington, NC</h2>
      <p class="text-gray-300 mb-4 leading-relaxed">Your driveway is the first thing visitors see when they arrive at your property, and it needs to be functional, well-drained, and durable. PXG Siteworks provides complete driveway services including new driveway construction, regrading, gravel installation, widening, and drainage improvements for residential properties throughout Wilmington and Southeastern North Carolina.</p>
      <p class="text-gray-400 mb-4 leading-relaxed">A properly graded and constructed driveway prevents water from pooling on the surface, directs runoff away from your home, and provides a stable driving surface that holds up to daily use and heavy vehicles. Whether you need a new gravel driveway for a rural property or regrading work on an existing driveway, we deliver quality results.</p>
      <p class="text-gray-400 mb-4 leading-relaxed">Our driveway services include complete base preparation with proper compaction, gravel selection and installation, culvert installation at road crossings, drainage swale grading alongside driveways, and turnaround area construction. We work with you to design a driveway that meets your needs, budget, and property layout.</p>
    `
  },
  'grading': {
    title: 'Grading Services',
    icon: 'M8 21l4-4 4 4M4 15l4-4 4 4M12 3l4 4-4 4',
    desc: 'Professional rough and finish grading for residential and commercial properties in Wilmington NC.',
    features: ['Rough grading', 'Fine grading', 'Lot leveling', 'Drainage grading', 'Fill dirt work', 'Compaction'],
    why: 'Accurate grading is critical for every construction project.',
    process: ['Survey & planning', 'Rough grade', 'Fine grade', 'Compaction', 'Verification'],
    longContent: `
      <h2 class="text-2xl lg:text-3xl font-bold text-white mb-6 font-display">Grading Services in Wilmington, NC</h2>
      <p class="text-gray-300 mb-4 leading-relaxed">Proper grading is the backbone of every successful construction and landscaping project. PXG Siteworks provides professional grading services for residential lots, commercial sites, and development projects throughout Wilmington, NC and the surrounding areas of New Hanover, Brunswick, Pender, and Onslow Counties.</p>
      <p class="text-gray-400 mb-4 leading-relaxed">Grading involves shaping the land to achieve proper elevation, slope, and drainage patterns. This work determines how water flows across your property and is essential for preventing foundation problems, yard flooding, and erosion. Our team uses GPS-guided equipment and laser levels to achieve precise grades that meet engineering specifications and local code requirements.</p>
      <p class="text-gray-400 mb-4 leading-relaxed">We handle both rough grading for new construction sites and finish grading for completed projects. Our services include lot leveling, drainage grading, fill dirt work, compaction, and slope creation. Whether you are a builder preparing a new lot or a homeowner fixing drainage issues in your yard, we have the equipment and expertise to deliver the results you need.</p>
    `
  },
  'drainage': {
    title: 'Drainage Services',
    icon: 'M12 2.69l5.66 5.66a8 8 0 11-11.31 0z',
    desc: 'Comprehensive drainage solutions for residential and commercial properties in Wilmington NC.',
    features: ['Yard drainage', 'French drains', 'Catch basins', 'Culverts', 'Stormwater management', 'Erosion control'],
    why: "Don't let water damage your property. Our drainage solutions keep your site dry and protected.",
    process: ['Assessment', 'Design', 'Installation', 'Testing', 'Completion'],
    longContent: `
      <h2 class="text-2xl lg:text-3xl font-bold text-white mb-6 font-display">Drainage Services in Wilmington, NC</h2>
      <p class="text-gray-300 mb-4 leading-relaxed">Water management is essential for protecting your property in the Wilmington, NC area. With over 57 inches of annual rainfall and a coastal plain landscape that is naturally flat, proper drainage is not optional &mdash; it is a necessity. PXG Siteworks provides comprehensive drainage solutions for residential and commercial properties throughout Southeastern North Carolina.</p>
      <p class="text-gray-400 mb-4 leading-relaxed">Our drainage services include French drain installation, yard drain systems, catch basin installation, culvert placement, stormwater management systems, and erosion control measures. We assess your property, identify the sources of water problems, and design a customized drainage solution that addresses the root cause rather than just the symptoms.</p>
      <p class="text-gray-400 mb-4 leading-relaxed">Whether you have standing water in your yard after every rain, water pooling against your foundation, erosion washing away your landscaping, or a driveway that floods at the road crossing, we have the experience and equipment to solve the problem. Contact us for a free drainage assessment and estimate.</p>
    `
  },
}

// Service FAQ data for visible FAQ sections on each page
const serviceFaqData: Record<string, {q: string; a: string}[]> = {
  'excavation': [
    {q: 'How much does excavation cost in Wilmington NC?', a: 'Residential excavation in Wilmington typically ranges from $1,500 to $10,000+ depending on scope. Foundation digs, trenching, and backfill are priced based on volume of earth moved and site access.'},
    {q: 'How long does a typical excavation project take?', a: 'Most residential excavation projects are completed in 1-3 days. Larger commercial projects may take 1-2 weeks depending on complexity and weather.'},
    {q: 'Do I need a permit for excavation?', a: 'Most excavation work associated with construction requires a building permit. We handle permitting as part of our service.'}
  ],
  'site-grading': [
    {q: 'How much does site grading cost in Wilmington NC?', a: 'Residential site grading typically costs $1,000-$5,000 for standard lots. Larger lots range $3,000-$10,000. Finish grading averages $500-$2,000.'},
    {q: 'What is the difference between rough grading and finish grading?', a: 'Rough grading establishes the basic contours and elevation. Finish grading is the precision work that creates the final surface for landscaping and ensures proper drainage.'},
    {q: 'Why is proper grading important?', a: 'Proper grading prevents water from pooling around foundations, which can cause structural damage, mold, and erosion. It is critical for long-term property protection.'}
  ],
  'land-clearing': [
    {q: 'How much does land clearing cost per acre in Wilmington NC?', a: 'Light clearing runs $1,500-$3,000/acre, medium clearing $3,000-$5,000/acre, and heavy clearing $4,000-$8,000/acre in the Wilmington area.'},
    {q: 'Can I clear land myself?', a: 'Small brush clearing is possible for homeowners, but projects involving trees over 6 inches in diameter, stumps, or grading should be done by a licensed contractor with proper equipment and insurance.'},
    {q: 'Do you offer onsite disposal?', a: 'Yes. Where permitted, we can mulch or bury cleared material onsite, which can significantly reduce hauling costs.'}
  ],
  'drainage-solutions': [
    {q: 'How much does a French drain cost in Wilmington NC?', a: 'French drain installation typically costs $25-$50 per linear foot in Wilmington. A typical residential French drain system runs $2,000-$6,000 depending on length and depth.'},
    {q: 'How do I know if I need a drainage system?', a: 'Signs include standing water after rain, wet or soggy areas in your yard, water in your crawl space or basement, and erosion along your foundation.'},
    {q: 'What type of drainage system do I need?', a: 'We assess your property to recommend the best solution — French drains, catch basins, regrading, or a combination. Every property is different.'}
  ],
  'hauling-demolition': [
    {q: 'How much does demolition cost in Wilmington NC?', a: 'Small structures like sheds cost $1,000-$5,000. Residential home demolition ranges $8,000-$25,000. Commercial demolition starts at $15,000+.'},
    {q: 'Do I need a permit for demolition?', a: 'Yes. Demolition permits are required in New Hanover County and most NC municipalities. We handle all permitting as part of our service.'},
    {q: 'Do you handle hazardous material abatement?', a: 'We coordinate with licensed environmental specialists for asbestos, lead paint, and other hazardous material assessments and abatement when needed.'}
  ],
  'site-preparation': [
    {q: 'What does site preparation include?', a: 'Site prep typically includes clearing, grubbing, rough grading, erosion control, utility prep, and access road construction to make the site ready for building.'},
    {q: 'How long does site preparation take?', a: 'A typical residential site prep takes 3-7 days. Larger commercial sites may take 2-4 weeks depending on scope and conditions.'},
    {q: 'Do you handle permits for site work?', a: 'Yes. We coordinate grading permits, erosion control plans, and other required permits with local authorities.'}
  ],
  'utilities': [
    {q: 'What types of utilities do you install?', a: 'We handle trenching and installation for water lines, sewer lines, storm drainage, electrical conduit, and communication conduit.'},
    {q: 'How deep are utility trenches?', a: 'Depth varies by utility type: water lines 18-36 inches, sewer lines 24-48+ inches, and electrical conduit 18-24 inches, per NC code requirements.'},
    {q: 'Do you call 811 before digging?', a: 'Absolutely. We coordinate with NC 811 on every project to locate existing underground utilities before any trenching begins.'}
  ],
  'driveway': [
    {q: 'How much does a gravel driveway cost?', a: 'A basic gravel driveway in Wilmington typically costs $500-$2,500 depending on length, width, and base preparation required.'},
    {q: 'Do I need a culvert for my driveway?', a: 'If your driveway crosses a ditch or drainage swale, a culvert is typically required by local code to maintain water flow.'},
    {q: 'How long does driveway installation take?', a: 'Most residential driveway projects are completed in 1-2 days including base prep, grading, and material installation.'}
  ],
  'grading': [
    {q: 'What is the difference between rough and fine grading?', a: 'Rough grading shapes the land with heavy equipment to set basic contours. Fine grading uses precision equipment to create the final surface for landscaping or construction.'},
    {q: 'How much does grading cost per acre?', a: 'Residential lot grading typically costs $1,000-$5,000. Larger properties run $3,000-$10,000+ depending on terrain and soil conditions.'},
    {q: 'When should I grade my property?', a: 'Grade before construction, after construction for finish work, or anytime you notice drainage problems, standing water, or erosion issues.'}
  ],
  'drainage': [
    {q: 'What causes poor drainage in yards?', a: 'Common causes include flat terrain, clay soil, improper grading, clogged gutters directing water near foundations, and compacted soil from construction.'},
    {q: 'How much do drainage solutions cost?', a: 'Simple regrading starts at $500-$1,500. French drains run $2,000-$6,000. Complete drainage systems for larger properties can cost $5,000-$15,000+.'},
    {q: 'Can you fix drainage without digging up my whole yard?', a: 'Often yes. We use targeted solutions like French drains, catch basins, and strategic regrading that minimize disruption to your existing landscaping.'}
  ]
}

function getServiceFaqHtml(slug: string): string {
  const faqs = serviceFaqData[slug]
  if (!faqs || faqs.length === 0) return ''
  
  return `
    <section class="py-20 lg:py-28 section-divider">
      <div class="max-w-4xl mx-auto px-6">
        <div class="reveal text-center mb-12">
          <span class="inline-flex items-center gap-2 text-amber-400 font-medium tracking-widest uppercase text-xs mb-4">
            <span class="w-8 h-px bg-amber-500/50"></span>Common Questions<span class="w-8 h-px bg-amber-500/50"></span>
          </span>
          <h2 class="text-3xl lg:text-4xl font-bold text-white mt-2 mb-4 font-display">Frequently Asked Questions</h2>
        </div>
        <div class="space-y-4 stagger-children">
          ${faqs.map((faq, i) => `
          <div class="card-ultra rounded-xl overflow-hidden">
            <button class="w-full flex items-center justify-between p-5 lg:p-6 text-left group" onclick="this.parentElement.classList.toggle('faq-open');this.querySelector('.faq-chevron').classList.toggle('rotate-180')" aria-expanded="false">
              <span class="text-white font-semibold text-sm lg:text-base pr-4">${faq.q}</span>
              <svg class="faq-chevron w-5 h-5 text-amber-400 flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="overflow-hidden transition-all duration-300 max-h-0 faq-answer" style="${i === 0 ? 'max-height:200px' : ''}">
              <div class="px-5 lg:px-6 pb-5 lg:pb-6 pt-0">
                <p class="text-gray-400 text-sm leading-relaxed">${faq.a}</p>
              </div>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </section>
    <style>
      .faq-open .faq-answer { max-height: 200px !important; }
      .faq-answer { transition: max-height 0.3s ease; }
    </style>`
}

export function servicePage(slug: string): string {
  const s = services[slug]
  if (!s) return `<div class="min-h-screen bg-zinc-950 pt-32 pb-20 px-6 text-center"><h1 class="text-4xl font-bold text-white font-display">Service Not Found</h1><a href="/" class="text-amber-400 hover:underline mt-4 inline-block">Back to Home</a></div>`

  const process = s.process || ['Consultation', 'Planning', 'Execution', 'Completion', 'Inspection']

  return `<div class="min-h-screen bg-zinc-950">
    <!-- Hero -->
    <section class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div class="absolute inset-0 mesh-gradient"></div>
      <div class="orb orb-1 top-20 right-10 opacity-30" aria-hidden="true"></div>
      <div class="orb orb-3 bottom-10 left-10 opacity-20" aria-hidden="true"></div>
      
      <div class="relative max-w-7xl mx-auto px-6 text-center">
        <div class="animate-fadeInUp inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-xs font-medium mb-6">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${s.icon}"/></svg>
          Professional Service
        </div>
        <h1 class="animate-fadeInUp delay-100 text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display">${s.title}</h1>
        <p class="animate-fadeInUp delay-200 text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">${s.desc}</p>
        <div class="animate-fadeInUp delay-300 mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full px-7 py-3.5 font-semibold shadow-lg shadow-amber-600/20">Get a Free Quote <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
          <a href="tel:+19105157779" class="inline-flex items-center gap-2 glass text-white rounded-full px-7 py-3.5 font-semibold hover:bg-white/10 transition-all border border-white/10">
            <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            (910) 515-7779
          </a>
        </div>
      </div>
    </section>
    
    <!-- Features & Why Us -->
    <section class="py-20 lg:py-28 section-divider">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <!-- Features -->
          <div class="reveal-left">
            <span class="inline-flex items-center gap-2 text-amber-400 font-medium tracking-widest uppercase text-xs mb-4">
              <span class="w-8 h-px bg-amber-500/50"></span>What We Offer
            </span>
            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-8 font-display">Our ${s.title} Services</h2>
            <div class="space-y-3 stagger-children">
              ${s.features.map(f => `
              <div class="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-amber-500/20 transition-colors group">
                <div class="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                  <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span class="text-gray-300 font-medium text-sm">${f}</span>
              </div>`).join('')}
            </div>
          </div>
          
          <!-- Why Choose Us -->
          <div class="reveal-right">
            <div class="card-ultra rounded-2xl p-8 lg:p-10 h-full">
              <span class="inline-flex items-center gap-2 text-amber-400 font-medium tracking-widest uppercase text-xs mb-4">
                <span class="w-8 h-px bg-amber-500/50"></span>Why Choose Us
              </span>
              <h3 class="text-2xl lg:text-3xl font-bold text-white mb-6 font-display">Expert Care for Your Project</h3>
              <p class="text-gray-400 mb-6 leading-relaxed">${s.why}</p>
              ${s.whyExtra ? `<p class="text-gray-400 mb-8 leading-relaxed">${s.whyExtra}</p>` : ''}
              
              <div class="grid grid-cols-2 gap-3 mb-8">
                ${['Licensed & Insured', 'Free Estimates', 'On-Time Delivery', 'Quality Guaranteed'].map(b => `
                <div class="flex items-center gap-2 text-sm text-gray-300">
                  <svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  ${b}
                </div>`).join('')}
              </div>
              
              <a href="/contact" class="btn-premium flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-xl py-3.5 font-semibold">
                Get a Free Quote
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Expanded Content Section (for AEO/GEO depth) -->
    <section class="py-20 lg:py-28 section-divider">
      <div class="max-w-4xl mx-auto px-6">
        <article class="reveal prose-custom">
          ${s.longContent}
        </article>
      </div>
    </section>
    
    <!-- Process Timeline -->
    <section class="py-20 lg:py-28 bg-zinc-900/30 section-divider">
      <div class="max-w-5xl mx-auto px-6">
        <div class="reveal text-center mb-16">
          <span class="inline-flex items-center gap-2 text-amber-400 font-medium tracking-widest uppercase text-xs mb-4">
            <span class="w-8 h-px bg-amber-500/50"></span>Our Process<span class="w-8 h-px bg-amber-500/50"></span>
          </span>
          <h2 class="text-3xl lg:text-4xl font-bold text-white mt-2 mb-5 font-display">How We Work</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">A proven process that delivers consistent, high-quality results every time.</p>
        </div>
        
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-6 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/30 via-amber-500/10 to-transparent hidden sm:block" aria-hidden="true"></div>
          
          <div class="space-y-8 stagger-children">
            ${process.map((step, i) => `
            <div class="relative flex items-start gap-6 sm:gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:gap-16">
              <!-- Dot -->
              <div class="absolute left-6 lg:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-500 border-4 border-zinc-950 z-10 hidden sm:block" style="top: 1.5rem;" aria-hidden="true"></div>
              
              <!-- Content -->
              <div class="flex-1 ${i % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'} sm:pl-16 lg:pl-0">
                <div class="card-ultra rounded-xl p-6 inline-block ${i % 2 === 0 ? 'lg:ml-auto' : ''}">
                  <div class="flex items-center gap-3 mb-2 ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}">
                    <span class="text-amber-400 text-xs font-bold bg-amber-500/10 px-2.5 py-1 rounded-full">0${i + 1}</span>
                    <h3 class="text-white font-semibold font-display">${step}</h3>
                  </div>
                </div>
              </div>
              <div class="flex-1 hidden lg:block"></div>
            </div>`).join('')}
          </div>
        </div>
      </div>
    </section>
    
    <!-- FAQ Section -->
    ${getServiceFaqHtml(slug)}
    
    <!-- CTA -->
    <section class="py-20 lg:py-24">
      <div class="max-w-4xl mx-auto px-6">
        <div class="reveal card-ultra rounded-2xl p-10 lg:p-14 text-center glow-amber-sm relative overflow-hidden">
          <div class="absolute inset-0 mesh-gradient"></div>
          <div class="relative z-10">
            <h3 class="text-3xl lg:text-4xl font-bold text-white mb-4 font-display">Ready to Start Your Project?</h3>
            <p class="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">Contact us today for a free consultation and quote. We serve New Hanover, Brunswick, Pender, and Onslow Counties.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" class="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full px-8 py-4 font-semibold">Contact Us Now <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
              <a href="/calculator" class="inline-flex items-center gap-2 glass text-white rounded-full px-8 py-4 font-semibold hover:bg-white/10 transition-all border border-white/10">Try Our Calculator</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>`
}
