// Industrial data source for Rudhira Metal Industries
// Redesigned with user-supplied assets, 25 export countries, partner SVGs, and brand color rhythm

// Import matching high-definition Hero backgrounds corresponding directly to content
import heroPipesImg from '../assets/Product BG/precision pipes and fitting.png';
import heroFlangesImg from '../assets/Product BG/kptron-hero-slide1-global.jpg';
import heroPlatesCoilsImg from '../assets/Product BG/premium steel solution build for industry.png';
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
    titlePrefix: "PRECISION PIPES, TUBES & ",
    titleHighlight: "HIGH-PERFORMANCE",
    titleSuffix: " ALLOYS",
    description: "ISO 9001:2015 certified stockist & global supplier of Stainless Steel 304, 304L, 316, 316L, 321, 310S, and Duplex piping infrastructure.",
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
    titlePrefix: "FORGED INDUSTRIAL ",
    titleHighlight: "FLANGES",
    titleSuffix: " & PIPELINE FITTINGS",
    description: "ANSI / ASME forged stainless steel flanges including Weld Neck, Slip-On, Blind, and Socketweld fittings in ASTM A182 F304L, F316L, and Duplex grades.",
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
    titlePrefix: "",
    titleHighlight: "HEAVY",
    titleSuffix: " ENGINEERING PLATES, COILS & ROUND BARS",
    description: "Cold & hot rolled sheets, heavy plates, and precision ground round/hex bars in SS 304, 304L, 316, 316L, 321, 310S, 347, and Duplex 2205.",
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
    titlePrefix: "",
    titleHighlight: "CORROSION-RESISTANT",
    titleSuffix: " METALS FOR CRITICAL INDUSTRIES",
    description: "Trusted stockist & supplier of high-alloy austenitic, Duplex 2205, and Super Duplex 2507 stainless steels for severe chemical and marine applications.",
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
