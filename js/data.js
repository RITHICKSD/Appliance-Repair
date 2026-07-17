// VoltFix Website Mock Data

const servicesData = [
  {
    id: "fan-repair",
    name: "Ceiling & Exhaust Fan Repair",
    category: "Small Appliances",
    basePrice: 19,
    turnaround: "12-24 Hours",
    icon: "fa-solid fa-wind",
    shortDescription: "Complete fan diagnostics, bearing lubrication, winding rewinding, and noise issues fixed.",
    description: "Keep your home breezy and cool. Our technicians specialize in diagnosing humming noises, slow rotation speeds, wobbling ceiling mounts, and complete motor burnouts. We carry premium capacitors, copper windings, and high-grade bearings for quick on-the-spot repairs."
  },
  {
    id: "iron-repair",
    name: "Steam & Dry Iron Restoration",
    category: "Small Appliances",
    basePrice: 15,
    turnaround: "4-12 Hours",
    icon: "fa-solid fa-shirt",
    shortDescription: "Soleplate cleaning, thermostat replacement, steam chamber descaling, and wiring check.",
    description: "Get pristine, crease-free clothes again. If your iron isn't heating, tripping the breaker, leaking water, or scorching fabrics, we can help. Our micro-repair station offers swift turnaround times for thermostats, heating elements, and power cords."
  },
  {
    id: "mixer-repair",
    name: "Food Mixer & Grinder Overhaul",
    category: "Kitchen Appliances",
    basePrice: 25,
    turnaround: "12-24 Hours",
    icon: "fa-solid fa-blender",
    shortDescription: "Motor coupler replacement, carbon brush change, speed selector switch repairs, and body sealing.",
    description: "Your daily culinary helper, fully restored. Mixers and grinders face high wear on couplers, carbon brushes, and speed selector knobs. We swap out worn parts with original high-torque components, balance the rotor, and test insulation for user safety."
  },
  {
    id: "geyser-repair",
    name: "Premium Storage & Instant Geyser Service",
    category: "Heavy Appliances",
    basePrice: 39,
    turnaround: "24-48 Hours",
    icon: "fa-solid fa-hot-tub-person",
    shortDescription: "Heating element replacement, thermostat calibration, safety valve installation, and tank flushing.",
    description: "Ensure safe, reliable hot water during chilly days. Geysers require meticulous electrical and plumbing checks. Our certified engineers inspect heating elements for scaling, calibrate thermostats, replace faulty pressure relief valves, and execute tank descaling to restore heating efficiency."
  }
];

const articlesData = [
  {
    id: "geyser-maintenance-tips",
    title: "5 Warning Signs Your Geyser Is About to Fail (And How to Fix It)",
    category: "Appliance Maintenance",
    summary: "Don't wait for a cold shower or a flooded home. Learn the warning signs of scaling and corrosion before they ruin your hot water system.",
    readTime: "6 min read",
    author: "Robert Vance, Master Technician",
    date: "July 12, 2026",
    coverImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    tags: ["Geysers", "Safety", "DIY Diagnostics", "Energy Saving"],
    content: "Geysers are the quiet giants of our homes, working tirelessly behind the scenes. However, electric water heaters are prone to sediment accumulation and corrosion. Here are 5 warnings signs that your geyser needs urgent repair or descaling: 1. Discolored Rust-like Water, 2. Strange popping or rumbling noises, 3. Frequent tripping of the circuit breaker, 4. Temperature fluctuations, 5. Sudden drops in hot water pressure. Regularly flushing your tank and checking the anode rod can double its lifetime."
  },
  {
    id: "fan-humming-reasons",
    title: "Why Is Your Ceiling Fan Humming? DIY Diagnostics and Fixes",
    category: "DIY Fixes",
    summary: "Ceiling fan making an annoying buzzing sound? We analyze the main causes—from faulty speed switches to loose screws—and how to fix them.",
    readTime: "4 min read",
    author: "Elena Petrova, Electrical Inspector",
    date: "June 28, 2026",
    coverImage: "https://images.unsplash.com/photo-1618944913480-b67ee16d7b77?auto=format&fit=crop&q=80&w=800",
    tags: ["Fans", "DIY Guide", "Safety"],
    content: "A humming ceiling fan is usually caused by electrical vibration in the motor stator. This is aggravated by cheap dimmer switches, dried-out bearings, or loose light fixture screws. Learn how to verify mounting brackets, replace a bad running capacitor, and clean out dust buildup that stresses the motor."
  },
  {
    id: "iron-leakage-prevention",
    title: "How to Descale Your Steam Iron and Prevent Spitting",
    category: "Appliance Maintenance",
    summary: "Tired of your iron spitting brown water and ruining white shirts? Read our step-by-step guide to removing calcium buildup using simple vinegar solutions.",
    readTime: "3 min read",
    author: "Marcus Aurelius, Small Appliance Lead",
    date: "May 15, 2026",
    coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    tags: ["Irons", "Cleaning", "Lifespan Extension"],
    content: "Steam irons accumulate mineral scales from tap water over time. This clogs the steam vents, leading to water dripping and brown mineral spotting. We teach you how to run a self-clean cycle, use distilled water, and dissolve calcium crust using safe, non-corrosive mixtures."
  }
];

const coverageZipCodes = [
  "10001", "10002", "10003", "10004", "10005",
  "90210", "90211", "90212", "90291", "90292",
  "60601", "60602", "60603", "60611", "60614",
  "75001", "75019", "75201", "75202", "75219",
  "30301", "30303", "30309", "30318", "30324",
  "94101", "94102", "94103", "94105", "94107"
];

const faqsData = [
  {
    q: "Do you offer warranties on your repair services?",
    a: "Yes! We provide a comprehensive 90-day warranty on all repairs and parts replaced. If the same problem recurs, we will fix it completely free of charge."
  },
  {
    q: "What are your diagnostic fees? Does it apply if I proceed with repairs?",
    a: "Diagnostics cost a flat $15. However, if you decide to proceed with the repair service, this fee is fully waived, and you only pay the repair quote."
  },
  {
    q: "How does the home pickup and delivery process work?",
    a: "It's simple. You request a pickup, select a preferred time, and our technician collects your appliance. We run diagnostics, call you with a quote, perform repairs upon your approval, and drop it back at your doorstep."
  },
  {
    q: "Are your technicians certified and insured?",
    a: "Absolutely. Every electrician at VoltFix is licensed, certified, and undergoes strict background checks and safety training. The shop is also fully insured to ensure peace of mind."
  }
];
