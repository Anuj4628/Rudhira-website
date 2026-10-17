// Industrial data source for Rudhira Metal Industries
// Redesigned with user-supplied assets, 25 export countries, partner SVGs, and brand color rhythm

// Import matching high-definition Hero backgrounds corresponding directly to content
import heroPipesImg from '../assets/Product BG/precision-pipes-tubes-hero-bg.png';
import heroFlangesImg from '../assets/Product BG/forged-flanges-fittings-hero-bg.jpg';
import heroPlatesCoilsImg from '../assets/Product BG/heavy-engineering-hero-bg.jpg';
import heroBarsAlloysImg from '../assets/Product BG/superior round and bars engineeres to be perfomed.png';

// Import user-provided Product images
import pipesShowcase from '../assets/New Product img/Pipes/pipes-showcase.jpg';
import sheetsShowcase from '../assets/New Product img/sheet plates coil/sheets-plates-showcase.png';
import fittingsShowcase from '../assets/New Product img/pipe fittings/fittings-showcase.jpg';
import fastenersShowcase from '../assets/New Product img/fasteners/ss-fasteners.jpg';
import flangesShowcase from '../assets/New Product img/flanges/ss-flanges.jpg';
import barsShowcase from '../assets/New Product img/Bars/bars-showcase.png';

// Import user-provided Industry images
import aerospaceImg from '../assets/Serving Global Mission-Critical Sectors/aerospace and defence.png';
import heavyEngImg from '../assets/Serving Global Mission-Critical Sectors/heavt engineering.png';
import marineImg from '../assets/Serving Global Mission-Critical Sectors/marine.png';
import nuclearImg from '../assets/Serving Global Mission-Critical Sectors/nuclear and thermal power.png';
import petrochemicalImg from '../assets/Serving Global Mission-Critical Sectors/petrochemical.png';
import pipingImg from '../assets/Serving Global Mission-Critical Sectors/precision industrial piping.png';

// Import user-provided Corporate Partner logos
import tataSteelSvg from '../assets/partners/tata_steel.svg';
import jswSteelSvg from '../assets/partners/jsw_steel.svg';
import jindalSteelSvg from '../assets/partners/jindal_steel.svg';
import relianceSvg from '../assets/partners/reliance.svg';
import adaniSvg from '../assets/partners/adani.svg';
import adityaBirlaSvg from '../assets/partners/aditya_birla.svg';
import godrejSvg from '../assets/partners/godrej.svg';
import indianOilSvg from '../assets/partners/indian_oil.svg';
import hpclSvg from '../assets/partners/hindustan_petroleum.svg';
import bhushanPowerSvg from '../assets/partners/bhushan_power.svg';
import haldiaPetroSvg from '../assets/partners/haldia_petrochemicals.svg';
import larsenToubroImg from '../assets/partners/larsen_toubro.png';

export const COMPANY_DETAILS = {
  name: "Rudhira Metal Industries",
  shortName: "Rudhira Metal",
  tagline: "Precision Industrial Metal Products & Fittings Supply",
  specialization: "Mfg. of : Stainless Steel / Carbon Steel Pipes Fitting, Forge Fitting & Flanges. Stockist and Suppliers in : Stainless Steel, Pipe, Plate, Round & All Ferrous Metals",
  address: "Shop No. 6, Plumber Chawl, Shantabi Building, Ground Floor, 4th Cross Lane, Khetwadi, P. B Marg, Mumbai - 400 004, Maharashtra, India.",
  shortAddress: "Shop No. 6, Shantabi Bldg, 4th Cross Lane, Khetwadi, Mumbai - 400 004",
  emails: [
    "sales@rudhirametalindustries.com",
    "info@rudhirametalindustries.com"
  ],
  phone: "+91 96198 06901",
  secondaryPhone: "+91 79775 67294",
  isoCertification: "ISO 9001:2015",
  isoCertNo: "26DQQC40",
  gstin: "27BXMPP3576J1ZQ",
  registrationAddress: "Ground Floor, A1, Plot-288/290, Momin Building, Falkland Road 3rd Lane, Khetwadi, Girgaon, Mumbai - 400 004, Maharashtra, India.",
  contacts: [
    {
      name: "Bharat Kumar",
      phone: "+91 96198 06901",
      cleanPhone: "+919619806901",
      whatsappNumber: "919619806901"
    },
    {
      name: "Navin Kumar",
      phone: "+91 79775 67294",
      cleanPhone: "+917977567294",
      whatsappNumber: "917977567294"
    }
  ],
  whatsappNumber: "+919619806901",
  whatsappDefaultMsg: "Hello Rudhira Metal Industries, I would like to inquire about your industrial metal products and request a quotation.",
  website: "www.rudhirametalindustries.com",
  year: 2026,
};

export const HERO_SLIDES = [
  {
    id: "01",
    eyebrow: "ISO 9001:2015 Certified Stockist & Supplier",
    titlePrefix: "PRECISION PIPES, TUBES & ",
    titleHighlight: "HIGH-PERFORMANCE",
    titleSuffix: " ALLOYS",
    description: "ISO 9001:2015 certified stockist & global supplier of Stainless Steel 304, 304L, 316, 316L, 321, 310S, and Duplex piping infrastructure.",
    cardCategory: "1. Stainless Steel & Piping",
    cardHeading: "Austenitic & Duplex Stainless Steel.",
    cardGrades: "SS 304 · 304L · 316 · 316L · 321 · Duplex 2205",
    cardAction: "Explore Pipes & Tubes",
    cardProductSlug: "pipes-tubes",
    productChips: [
      { name: "SS 304 / 304L", desc: "ASTM A312 seamless & welded austenitic piping", spec: "ASTM A312" },
      { name: "SS 316 / 316L", desc: "Corrosion-resistant marine & chemical process tubes", spec: "ASTM A213 / A269" },
      { name: "DUPLEX 2205", desc: "High-strength alloy for offshore & chemical plants", spec: "UNS S31803 / S32205" },
      { name: "SUPER DUPLEX 2507", desc: "Maximum pitting & crevice corrosion resistance", spec: "UNS S32750" },
      { name: "FLANGES & FITTINGS", desc: "Forged flanges & high-pressure pipeline fittings", spec: "ASME B16.5 & B16.9" }
    ],
    specs: [
      { label: "AUSTENITIC GRADES", value: "304, 304L, 316, 316L" },
      { label: "HEAT RESISTANT", value: "321, 321H, 310S, 347" },
      { label: "DUPLEX STAINLESS", value: "2205 & Super Duplex 2507" }
    ],
    catalogueSpecs: [
      "SS 304 / 304L PIPES",
      "SS 316 / 316L TUBES",
      "DUPLEX 2205 PIPING"
    ],
    bottomStrip: [
      { label: "Standard Austenitic:", value: "SS 304, 304L, 316, 316L" },
      { label: "Stabilized & Heat Resistant:", value: "SS 321, 321H, 310, 310S, 347, 347H" },
      { label: "Duplex & Super Duplex:", value: "Duplex 2205 (UNS S31803/S32205), Super Duplex 2507 (UNS S32750), 904L" }
    ],
    image: heroPipesImg,
    alt: "Precision pipes, tubes and high-performance alloys"
  },
  {
    id: "02",
    eyebrow: "ANSI / ASME Engineered Quality Standards",
    titlePrefix: "FORGED INDUSTRIAL ",
    titleHighlight: "FLANGES",
    titleSuffix: " & PIPELINE FITTINGS",
    description: "ANSI / ASME forged stainless steel flanges including Weld Neck, Slip-On, Blind, and Socketweld fittings in ASTM A182 F304L, F316L, and Duplex grades.",
    cardCategory: "2. Industrial Flanges",
    cardHeading: "ANSI / ASME Forged Flanges & Fittings.",
    cardGrades: "Weld Neck · Slip-On · Blind · Socketweld · ASTM A182",
    cardAction: "Explore Flanges Range",
    cardProductSlug: "flanges",
    productChips: [
      { name: "WELD NECK FLANGES", desc: "ASME B16.5 high-pressure engineered connections", spec: "Cl. 150 – 2500" },
      { name: "SLIP-ON FLANGES", desc: "Machined raised-face & flat-face pipeline hubs", spec: "ASTM A182" },
      { name: "BLIND FLANGES", desc: "Pressure vessel & pipeline termination", spec: "ASME B16.5" },
      { name: "SOCKETWELD FITTINGS", desc: "Forged high-pressure elbows, tees & couplings", spec: "ASME B16.11 3000#" },
      { name: "BUTTWELD FITTINGS", desc: "Seamless & welded long radius elbows & reducers", spec: "ASTM A403 WP304L/316L" }
    ],
    specs: [
      { label: "FLANGE TYPES", value: "Weld Neck, Slip-On, Blind" },
      { label: "AUSTENITIC (A182)", value: "F304, F304L, F316, F316L" },
      { label: "DUPLEX (A182)", value: "F51 (2205), F53 (2507)" }
    ],
    catalogueSpecs: [
      "SS 304L / 316L FLANGES",
      "FORGED FITTINGS (A182)",
      "BUTTWELD FITTINGS (A403)"
    ],
    bottomStrip: [
      { label: "Standard Stainless Flanges:", value: "ASTM A182 F304, F304L, F316, F316L" },
      { label: "High Temp & Acid Flanges:", value: "ASTM A182 F321, F321H, F310S, F347, F347H, F904L" },
      { label: "Duplex Flange Series:", value: "F51 (UNS S31803/S32205), F53 (UNS S32750 / 2507)" }
    ],
    image: heroFlangesImg,
    alt: "Forged industrial flanges and pipeline fittings"
  },
  {
    id: "03",
    eyebrow: "Precision Metallurgy & Structural Stock",
    titlePrefix: "HEAVY ENGINEERING ",
    titleHighlight: "PLATES, COILS",
    titleSuffix: " & ROUND BARS",
    description: "Cold & hot rolled sheets, heavy plates, and precision ground round/hex bars in SS 304, 304L, 316, 316L, 321, 310S, 347, and Duplex 2205.",
    cardCategory: "3. Heavy Engineering",
    cardHeading: "Industrial Plates, Coils & Round Bars.",
    cardGrades: "ASTM A240 / A276 · 304L · 316L · 321 · 310S",
    cardAction: "Explore Sheets & Bars",
    cardProductSlug: "sheets-plates-coils",
    productChips: [
      { name: "SS 304 / 316L PLATES", desc: "ASTM A240 hot & cold rolled structural sheets", spec: "ASTM A240" },
      { name: "SS 321 / 310S COILS", desc: "High-temperature oxidation resistant up to 1150°C", spec: "Heat Resistant" },
      { name: "PRECISION ROUND BARS", desc: "Centerless ground finish for precision engineering", spec: "ASTM A276" },
      { name: "HEX & FLAT BARS", desc: "Bright drawn structural bars for CNC machining", spec: "Engineered Stock" },
      { name: "CUSTOM CUT SIZES", desc: "CNC laser, plasma and precision waterjet cutting", spec: "Custom Profiling" }
    ],
    specs: [
      { label: "SHEET & PLATE", value: "ASTM A240 304, 316L, 321" },
      { label: "ROUND BAR SPEC", value: "ASTM A276 304, 316L, 310S" },
      { label: "DUPLEX & SPECIALTY", value: "Duplex 2205, 2507, 904L" }
    ],
    catalogueSpecs: [
      "SS 304 / 316L PLATES",
      "SS 321 / 310S COILS",
      "PRECISION ROUND BARS"
    ],
    bottomStrip: [
      { label: "Plate & Coil (ASTM A240):", value: "SS 304, 304L, 316, 316L, 321, 310S, 347" },
      { label: "Precision Round Bars (A276):", value: "SS 304L, 316L, 321H, 310S, 347H, 904L" },
      { label: "Duplex Bar & Plate:", value: "Duplex 2205 (UNS S31803/S32205), Super Duplex 2507 (UNS S32750)" }
    ],
    image: heroPlatesCoilsImg,
    alt: "Heavy engineering plates, coils and round bars"
  },
  {
    id: "04",
    eyebrow: "Corrosion-Resistant Industrial Alloys",
    titlePrefix: "DUPLEX & ",
    titleHighlight: "HIGH-PERFORMANCE",
    titleSuffix: " SPECIALTY ALLOYS",
    description: "Trusted stockist & supplier of high-alloy austenitic, Duplex 2205, and Super Duplex 2507 stainless steels for severe chemical and marine applications.",
    cardCategory: "4. High Performance Alloys",
    cardHeading: "Duplex 2205 & Super Duplex 2507.",
    cardGrades: "UNS S31803 / S32205 · UNS S32750 · 904L · Titanium",
    cardAction: "Explore Duplex & Alloys",
    cardProductSlug: "duplex-stainless-steel",
    productChips: [
      { name: "DUPLEX 2205", desc: "High-strength corrosion resistant alloy for sour gas", spec: "UNS S31803 / S32205" },
      { name: "SUPER DUPLEX 2507", desc: "High-performance stainless steel for marine & offshore", spec: "UNS S32750" },
      { name: "ALLOY 904L", desc: "Severe sulfuric & phosphoric acid processing grade", spec: "UNS N08904" },
      { name: "TITANIUM GRADES", desc: "High strength-to-weight ratio for aerospace & naval", spec: "Gr. 2 & Gr. 5" },
      { name: "NICKEL ALLOYS", desc: "Inconel 625 & Monel 400 high-pressure alloys", spec: "Inconel & Monel" }
    ],
    specs: [
      { label: "DUPLEX 2205", value: "UNS S31803 / UNS S32205" },
      { label: "SUPER DUPLEX 2507", value: "UNS S32750 (25% Cr)" },
      { label: "HIGH ALLOY SS", value: "SS 904L, SS 317L, SS 310S" }
    ],
    catalogueSpecs: [
      "DUPLEX 2205 (S32205)",
      "SUPER DUPLEX 2507 (S32750)",
      "904L ACID RESISTANT"
    ],
    bottomStrip: [
      { label: "Duplex Stainless Steel:", value: "Duplex 2205 (UNS S31803 / UNS S32205)" },
      { label: "Super Duplex Stainless:", value: "Super Duplex 2507 (UNS S32750)" },
      { label: "Special Austenitic Grades:", value: "SS 904L, SS 321/321H, SS 310/310S, SS 347/347H" }
    ],
    image: heroBarsAlloysImg,
    alt: "Corrosion-resistant metals for critical industries"
  }
];

export const VERIFIED_TRUST_METRICS = [
  {
    metric: "ISO 9001:2015",
    label: "Certified Quality System",
    detail: "Accreditation No. 26DQQC40"
  },
  {
    metric: "18+ Categories",
    label: "Industrial Product Lines",
    detail: "Pipes, Tubes, Flanges & Fasteners"
  },
  {
    metric: "9 Material Grades",
    label: "Certified Alloys & Metals",
    detail: "Austenitic, Duplex & High Alloys"
  },
  {
    metric: "Global Supply",
    label: "Pan-India & Export Ready",
    detail: "EN 10204 3.1 Mill Test Reports"
  }
];

export const TRUST_STRIP_ITEMS = [
  "INDUSTRIAL METAL PRODUCTS",
  "QUALITY-FOCUSED SUPPLY",
  "INDIA & GLOBAL REACH",
  "ENGINEERING-READY MATERIALS"
];

export const PRODUCTS_DATA = [
  {
    id: "01",
    name: "Pipes & Tubes",
    description: "Reliable tubular solutions for industrial applications.",
    category: "Seamless & Welded",
    spec: "ASME / ASTM Standards",
    image: pipesShowcase,
    cardBg: "bg-[#7E321F]",
    textColor: "text-white",
    borderColor: "border-[#90391D]/50",
    tagBg: "bg-white text-[#202427]",
  },
  {
    id: "02",
    name: "Sheets & Plates",
    description: "Precision rolled plates and sheets in standard and custom gauges.",
    category: "Hot & Cold Rolled",
    spec: "Precision Flatness",
    image: sheetsShowcase,
    cardBg: "bg-[#7E321F]",
    textColor: "text-white",
    borderColor: "border-[#90391D]/50",
    tagBg: "bg-white text-[#202427]",
  },
  {
    id: "03",
    name: "Butt Weld Fittings",
    description: "Seamless and welded elbows, tees, reducers and caps.",
    category: "Forge & Butt Weld",
    spec: "High Pressure Rated",
    image: fittingsShowcase,
    cardBg: "bg-[#7E321F]",
    textColor: "text-white",
    borderColor: "border-[#90391D]/50",
    tagBg: "bg-white text-[#202427]",
  },
  {
    id: "04",
    name: "Fasteners",
    description: "Industrial grade bolts, studs, nuts and engineered fasteners.",
    category: "High Tensile & Stainless",
    spec: "Precision Threaded",
    image: fastenersShowcase,
    cardBg: "bg-[#7E321F]",
    textColor: "text-white",
    borderColor: "border-[#90391D]/50",
    tagBg: "bg-white text-[#202427]",
  },
  {
    id: "05",
    name: "Flanges",
    description: "Weld neck, slip-on, blind and forged industrial flanges.",
    category: "Forged Industrial Flanges",
    spec: "Class 150 to 2500",
    image: flangesShowcase,
    cardBg: "bg-[#7E321F]",
    textColor: "text-white",
    borderColor: "border-[#90391D]/50",
    tagBg: "bg-white text-[#202427]",
  },
  {
    id: "06",
    name: "Rods & Bars",
    description: "High integrity round bars, hex bars and forged precision rods.",
    category: "Round, Hex & Square",
    spec: "Bright & Black Finish",
    image: barsShowcase,
    cardBg: "bg-[#7E321F]",
    textColor: "text-white",
    borderColor: "border-[#90391D]/50",
    tagBg: "bg-white text-[#202427]",
  }
];

export const MATERIALS_LIST = [
  "STAINLESS STEEL",
  "CARBON STEEL",
  "ALLOY STEEL",
  "DUPLEX STEEL",
  "SUPER DUPLEX STEEL",
  "NICKEL ALLOYS",
  "HASTELLOY",
  "INCONEL",
  "MONEL",
  "TITANIUM",
  "COPPER",
  "BRASS"
];

export const WHY_CHOOSE_US_DATA = [
  {
    id: "01",
    title: "Quality Focused",
    subtitle: "PRECISION ASSURANCE",
    description: "Strict dimensional accuracy, rigorous visual verification, and material integrity across all product lines.",
    badge: "RMI / 01"
  },
  {
    id: "02",
    title: "Wide Product Range",
    subtitle: "COMPLETE INVENTORY",
    description: "Comprehensive portfolio covering pipes, tubes, fittings, flanges, plates, fasteners, and specialty alloy rounds.",
    badge: "RMI / 02"
  },
  {
    id: "03",
    title: "Reliable Supply",
    subtitle: "DEPENDABLE DISPATCH",
    description: "Organized inventory logistics and dependable dispatch schedules supporting critical project timelines.",
    badge: "RMI / 03"
  },
  {
    id: "04",
    title: "Professional Support",
    subtitle: "TECHNICAL DESK",
    description: "Responsive commercial assistance, prompt quotation turnarounds, and knowledgeable technical guidance.",
    badge: "RMI / 04"
  }
];

export const VALUE_ADDED_SERVICES = [
  {
    id: "01",
    title: "Cutting",
    description: "High precision band saw and cold sawing to client-specified cut lengths with minimal kerf loss and square cut ends.",
    cardBg: "bg-[#F8F5F1]", // cream
    textColor: "text-[#202427]",
    borderColor: "border-[#D9D9D6]",
    accentColor: "text-[#A94728]",
    tag: "TOLERANCE ±1MM"
  },
  {
    id: "02",
    title: "Custom Sizing",
    description: "Tailored dimensional cutting, custom wall thickness matching, and specialized diameter preparations.",
    cardBg: "bg-[#7E321F]", // deep orange
    textColor: "text-white",
    borderColor: "border-white/20",
    accentColor: "text-[#F4E5DC]",
    tag: "CLIENT SPECIFIC"
  },
  {
    id: "03",
    title: "Material Inspection",
    description: "Comprehensive dimensional verification, positive material identification (PMI), and surface inspection.",
    cardBg: "bg-[#344B5C]", // steel blue
    textColor: "text-white",
    borderColor: "border-white/20",
    accentColor: "text-[#E7EEF2]",
    tag: "100% CHECKED"
  },
  {
    id: "04",
    title: "Surface Finishing",
    description: "Professional pickling, passivation, satin polishing, shot blasting, and protective mirror finishes.",
    cardBg: "bg-[#F8F5F1]", // warm cream
    textColor: "text-[#202427]",
    borderColor: "border-[#D9D9D6]",
    accentColor: "text-[#A94728]",
    tag: "PROTECTIVE FINISH"
  },
  {
    id: "05",
    title: "Packaging",
    description: "Industrial wooden crate boxing, waterproof wrapping, plastic bevel end-caps, and sea-worthy export crating.",
    cardBg: "bg-[#202427]", // graphite
    textColor: "text-white",
    borderColor: "border-white/20",
    accentColor: "text-[#A94728]",
    tag: "EXPORT GRADE"
  },
  {
    id: "06",
    title: "Custom Requirements",
    description: "Bespoke sourcing for hard-to-find alloys, heavy wall pipes, and specialized engineering assemblies.",
    cardBg: "bg-[#A94728]", // muted burnt orange
    textColor: "text-white",
    borderColor: "border-white/20",
    accentColor: "text-[#F4E5DC]",
    tag: "TAILORED SUPPLY"
  }
];

export const INDUSTRIES_SERVED = [
  {
    id: "01",
    name: "Aerospace & Defence",
    image: aerospaceImg,
  },
  {
    id: "02",
    name: "Heavy Engineering",
    image: heavyEngImg,
  },
  {
    id: "03",
    name: "Marine & Offshore",
    image: marineImg,
  },
  {
    id: "04",
    name: "Nuclear & Thermal Power",
    image: nuclearImg,
  },
  {
    id: "05",
    name: "Petrochemical",
    image: petrochemicalImg,
  },
  {
    id: "06",
    name: "Precision Industrial Piping",
    image: pipingImg,
  },
  {
    id: "07",
    name: "Oil & Gas Refineries",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "08",
    name: "Chemical Processing",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "09",
    name: "Civil Infrastructure",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "10",
    name: "Automotive Manufacturing",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "11",
    name: "Food & Dairy Processing",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "12",
    name: "Water & Desalination",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
  }
];

export const EXPORT_COUNTRIES = [
  { name: "United States", code: "us" },
  { name: "United Arab Emirates", code: "ae" },
  { name: "Saudi Arabia", code: "sa" },
  { name: "United Kingdom", code: "gb" },
  { name: "Germany", code: "de" },
  { name: "Italy", code: "it" },
  { name: "Singapore", code: "sg" },
  { name: "Mexico", code: "mx" },
  { name: "South Korea", code: "kr" },
  { name: "Sri Lanka", code: "lk" },
  { name: "Netherlands", code: "nl" },
  { name: "France", code: "fr" },
  { name: "Turkey", code: "tr" },
  { name: "Australia", code: "au" },
  { name: "Canada", code: "ca" },
  { name: "South Africa", code: "za" },
  { name: "Oman", code: "om" },
  { name: "Qatar", code: "qa" },
  { name: "Belgium", code: "be" },
  { name: "Spain", code: "es" },
  { name: "Brazil", code: "br" },
  { name: "Egypt", code: "eg" },
  { name: "Malaysia", code: "my" },
  { name: "Thailand", code: "th" },
  { name: "Indonesia", code: "id" }
];

export const INDIAN_STATES = [
  "Maharashtra", "Gujarat", "Tamil Nadu", "Karnataka", "Telangana",
  "Andhra Pradesh", "Delhi NCR", "Rajasthan", "Haryana", "Uttar Pradesh",
  "West Bengal", "Kerala", "Madhya Pradesh", "Odisha", "Punjab",
  "Bihar", "Jharkhand", "Chhattisgarh", "Goa", "Uttarakhand",
  "Himachal Pradesh", "Assam", "Chandigarh", "Jammu & Kashmir"
];

export const CLIENT_PARTNERS = [
  { name: "Tata Steel", logo: tataSteelSvg },
  { name: "Larsen & Toubro", logo: larsenToubroImg },
  { name: "JSW Steel", logo: jswSteelSvg },
  { name: "Jindal Steel", logo: jindalSteelSvg },
  { name: "Reliance Industries", logo: relianceSvg },
  { name: "Adani Group", logo: adaniSvg },
  { name: "Aditya Birla", logo: adityaBirlaSvg },
  { name: "Godrej", logo: godrejSvg },
  { name: "Indian Oil", logo: indianOilSvg },
  { name: "Hindustan Petroleum", logo: hpclSvg },
  { name: "Bhushan Power", logo: bhushanPowerSvg },
  { name: "Haldia Petrochemicals", logo: haldiaPetroSvg }
];

export const QUALITY_STANDARDS_ITEMS = [
  {
    id: "01",
    title: "Material Traceability",
    code: "ISO-TRACE",
    description: "Heat number tracking and original mill test record correlation for every batch dispatched.",
    accent: "bg-[#273845]"
  },
  {
    id: "02",
    title: "Quality Inspection",
    code: "PMI-VERIFY",
    description: "Rigorous surface visual inspection, positive material identification (PMI), and ultrasonic verification.",
    accent: "bg-[#344B5C]"
  },
  {
    id: "03",
    title: "Dimensional Accuracy",
    code: "CALIB-SPEC",
    description: "Strict adherence to international gauge, wall thickness, outer diameter, and bevel angle tolerances.",
    accent: "bg-[#273845]"
  },
  {
    id: "04",
    title: "Professional Packaging",
    code: "PACK-SEA",
    description: "Protective bevel plastic end caps, moisture-barrier wrapping, and export-compliant treated wooden crating.",
    accent: "bg-[#344B5C]"
  }
];

export const COMPANY_CERTIFICATES = [
  {
    id: "iso-9001-2015",
    type: "ISO CERTIFICATION",
    badge: "ISO 9001:2015",
    title: "ISO 9001:2015 Quality Management System",
    subtitle: "Certificate of Registration — Quality Management System",
    certificateNo: "26DQQC40",
    issuingBody: "ROHS Certification Pvt. Ltd.",
    accreditation: "EIAC (Emirates International Accreditation Centre) CB-QMS-035 & IAF MLA Member",
    issueDate: "19/08/2026",
    expiryDate: "18/08/2029",
    scope: "Manufacturer of Flanges and Supplier of Carbon Steel, Alloy Steel, Stainless Steel, Pipe Fittings, Forge Fittings, Nickel, Titanium, Copper, Brass and Bars, Valves, Ferrous & Non-Ferrous Metals Fasteners, Pipes, Plates, Coil.",
    image: "/certificates/iso-9001-2015-certificate.png",
    pdfUrl: "/certificates/iso-9001-2015-certificate.pdf",
    tags: ["ISO 9001:2015", "IAF MLA Member", "EIAC Accredited", "QMS Certified"]
  },
  {
    id: "gst-registration",
    type: "GOVERNMENT REGISTRATION",
    badge: "GST REG-06",
    title: "GST Registration Certificate",
    subtitle: "Government of India — Form GST REG-06 [See Rule 10(1)]",
    certificateNo: "27BXMPP3576J1ZQ",
    legalName: "BHARAT KUMAR",
    tradeName: "Rudhira Metal Industries",
    issuingBody: "Goods and Services Tax Network, Government of India",
    jurisdiction: "State of Maharashtra, Mumbai Central",
    issueDate: "04/08/2026",
    expiryDate: "Regular / Valid Ongoing",
    scope: "Principal Place of Business: Ground Floor, A1, Plot-288/290, Momin Building, Falkland Road 3rd Lane, Khetwadi, Girgaon, Mumbai - 400 004, Maharashtra, India.",
    image: "/certificates/gst-registration-certificate-page-1.png",
    pdfUrl: "/certificates/gst-registration-certificate.pdf",
    tags: ["GSTIN: 27BXMPP3576J1ZQ", "Govt. of India", "Tax Verified", "Form GST REG-06"]
  }
];

