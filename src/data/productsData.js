// Centralized Product & Materials Data Architecture for Rudhira Metal Industries
// Strictly matching reference screenshots & authentic industrial assets

// Authentic asset mappings from productImages
import { getProductMaterialImage, getTypeMaterialImage, PRODUCT_MATERIAL_IMAGES } from './productImages.js';
export { getProductMaterialImage, getTypeMaterialImage, PRODUCT_MATERIAL_IMAGES };

// Material Category Images
// -------------------------------------------------------------
import alloySteelMatImg from '../assets/Product Section/Material Imges/alloy steel.jpg';
import carbonSteelMatImg from '../assets/Product Section/Material Imges/carbon.png';
import duplexMatImg from '../assets/Product Section/Material Imges/duplex.jpg';
import exoticMatImg from '../assets/Product Section/Material Imges/exotic.jpeg';
import highAlloyMatImg from '../assets/Product Section/Material Imges/high Alloy.webp';
import nickelAlloyMatImg from '../assets/Product Section/Material Imges/nikle alloy.png';
import stainlessSteelMatImg from '../assets/Product Section/Material Imges/stainless steel.jpg';
import superDuplexMatImg from '../assets/Product Section/Material Imges/super duplex.webp';
import titaniumMatImg from '../assets/Product Section/Material Imges/titanium.png';

// -------------------------------------------------------------
// Product Category Images (Manufacturer Division)
// -------------------------------------------------------------
import buttWeldDefault from '../assets/New Product img/pipe fittings/fittings-showcase.jpg';
import dairyPharmaDefault from '../assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/stainless steel.jpg';
import fastenersDefault from '../assets/New Product img/fasteners/ss-fasteners.jpg';
import ferruleDefault from '../assets/Product Section/Manufacturer division/Ferrule Fitting/stainless steel.jpg';
import flangesDefault from '../assets/New Product img/flanges/ss-flanges.jpg';
import forgedFittingsDefault from '../assets/Product Section/Manufacturer division/Forged Fittings/stainles steel.jpg';
import hosePipesDefault from '../assets/Product Section/Manufacturer division/Hose Pipes/hose_pipes_collage.png';
import perforatedDefault from '../assets/Product Section/Manufacturer division/Perforated sheet/stainless steel.png';
import wireMeshDefault from '../assets/Product Section/Manufacturer division/Wire Mesh/Stainless steel.png';

// -------------------------------------------------------------
// Product Category Images (Supplier Division)
// -------------------------------------------------------------
import circleDefault from '../assets/Product Section/Supplier division/Circle/Stainless steel.png';
import sheetsPlatesDefault from '../assets/New Product img/sheet plates coil/sheets-plates-showcase.png';
import flatBarsDefault from '../assets/Product Section/Supplier division/flat/Stainless-Steel-Flat-Bar.jpg';
import patapattiDefault from '../assets/Product Section/Supplier division/Patapatti/stainless steel.jpeg';
import pipesTubesDefault from '../assets/New Product img/Pipes/pipes-showcase.jpg';
import ringDefault from '../assets/Product Section/Supplier division/Ring/stainless steel.jpg';
import rodsBarsDefault from '../assets/New Product img/Bars/bars-showcase.png';
import coilDefault from '../assets/Product BG/premium steel solution build for industry.png';
import wiresDefault from '../assets/Product Section/Supplier division/Wires/stainless steel.png';

// -------------------------------------------------------------
// Dedicated Flange Types Images
// -------------------------------------------------------------
import weldNeckFlangeImg from '../assets/flanges/types/weld-neck-flanges.jpg';
import slipOnFlangeImg from '../assets/flanges/types/slip-on-flanges.jpg';
import blindFlangeImg from '../assets/flanges/types/blind-flanges.jpg';
import socketWeldFlangeImg from '../assets/flanges/types/socket-weld-flanges.jpg';
import threadedFlangeImg from '../assets/flanges/types/threaded-flanges.jpg';
import lapJointFlangeImg from '../assets/flanges/types/lap-joint-flanges.jpg';
import plateFlangeImg from '../assets/flanges/types/plate-flanges.jpg';
import orificeFlangeImg from '../assets/flanges/types/orifice-flanges.jpg';
import reducingFlangeImg from '../assets/flanges/types/reducing-flanges.jpg';
import longWeldNeckFlangeImg from '../assets/flanges/types/long-weld-neck-flanges.jpg';
import spectacleBlindFlangeImg from '../assets/flanges/types/spectacle-blind-flanges.jpg';
import squareFlangeImg from '../assets/flanges/types/square-flanges.jpg';

// Carbon Steel Flange specific images
import csWeldNeckImg from '../assets/flanges/types/cs-weld-neck-flanges.jpg';
import csSlipOnImg from '../assets/flanges/types/cs-slip-on-flanges.jpg';
import csBlindImg from '../assets/flanges/types/cs-blind-flanges.jpg';
import csSocketWeldImg from '../assets/flanges/types/cs-socket-weld-flanges.jpg';

// -------------------------------------------------------------
// Dedicated Fastener Types Images
// -------------------------------------------------------------
import hexHeadBoltsImg from '../assets/fasteners/types/hex-head-bolts.jpg';
import hexNutsImg from '../assets/fasteners/types/hex-nuts.jpg';
import studBoltsImg from '../assets/fasteners/types/stud-bolts.jpg';
import socketHeadCapScrewsImg from '../assets/fasteners/types/socket-head-cap-screws.jpg';
import washersImg from '../assets/fasteners/types/washers.jpg';
import carbonHexBoltsImg from '../assets/fasteners/types/carbon-hex-bolts.jpg';
import duplexFastenersImg from '../assets/fasteners/types/duplex-fasteners.jpg';
import titaniumFastenersImg from '../assets/fasteners/types/titanium-fasteners.jpg';

// =============================================================
// 1. MATERIAL CATEGORIES (9 Core Families)
// =============================================================
export const MATERIAL_CATEGORIES = [
  {
    id: "mat-ss",
    slug: "stainless-steel",
    name: "Stainless Steel",
    shortName: "Stainless",
    tagline: "Corrosion-resistant austenitic & martensitic alloys",
    image: stainlessSteelMatImg,
    accentColor: "#5D7382",
    accentBg: "bg-slate-500/10",
    accentBorder: "border-slate-500/30",
    overview: "Stainless steels are iron-base alloys containing a minimum of 10.5% chromium, forming a self-healing passive chromium-oxide surface film that prevents atmospheric corrosion and rust. Widely specified for chemical, food processing, architectural, and cryogenic applications.",
    keyCharacteristics: [
      "Exceptional resistance to pitting and general corrosion",
      "Superior formability, machinability, and weldability",
      "High ductility and impact resistance down to cryogenic temperatures",
      "Hygienic, easy-to-clean smooth surface finish"
    ],
    popularGrades: ["304", "304L", "316", "316L", "321", "310S", "347", "904L"],
    standards: ["ASTM A182", "ASTM A312", "ASTM A240", "ASTM A276", "ASME B16.5"]
  },
  {
    id: "mat-cs",
    slug: "carbon-steel",
    name: "Carbon Steel",
    shortName: "Carbon",
    tagline: "High-strength structural & high-pressure pipeline steel",
    image: carbonSteelMatImg,
    accentColor: "#202427",
    accentBg: "bg-stone-800/10",
    accentBorder: "border-stone-800/30",
    overview: "Carbon steel combines iron and carbon with controlled manganese and silicon to achieve exceptional mechanical strength, toughness, and wear resistance at cost-effective economics. It forms the backbone of global oil & gas transmission, power generation, structural fabrication, and pressure vessel engineering.",
    keyCharacteristics: [
      "High tensile and yield strength under extreme mechanical loads",
      "Proven reliability in high-temperature and sub-zero service",
      "Excellent weldability using standard shielded metal arc (SMAW) procedures",
      "Cost-efficient procurement for heavy industrial projects"
    ],
    popularGrades: ["A105", "A106 Gr. B", "A234 WPB", "A350 LF2", "A193 B7", "IS 2062"],
    standards: ["ASTM A105", "ASTM A106", "ASTM A234", "ASTM A350", "ASME B16.9"]
  },
  {
    id: "mat-as",
    slug: "alloy-steel",
    name: "Alloy Steel",
    shortName: "Alloy",
    tagline: "High-temperature chromium-molybdenum creep-resistant steels",
    image: alloySteelMatImg,
    accentColor: "#344B5C",
    accentBg: "bg-blue-900/10",
    accentBorder: "border-blue-900/30",
    overview: "Alloy steels are formulated with alloying additions of chromium, molybdenum, vanadium, and nickel to withstand elevated temperatures, high internal pressures, and cyclic creep deformation in superheaters, reheaters, and chemical reactors.",
    keyCharacteristics: [
      "High creep-rupture strength at sustained temperatures above 500°C",
      "Resistance to hydrogen embrittlement and hot sulfide corrosion",
      "High hardenability and toughness throughout heavy cross-sections",
      "Certified for thermal power, nuclear, and petrochemical boilers"
    ],
    popularGrades: ["P11 / F11", "P22 / F22", "P91 / F91", "P5 / F5", "P9 / F9"],
    standards: ["ASTM A335", "ASTM A182", "ASTM A234", "ASME Section II Part A"]
  },
  {
    id: "mat-duplex",
    slug: "duplex-stainless-steel",
    name: "Duplex Stainless Steel",
    shortName: "Duplex",
    tagline: "Austenitic-ferritic microstructure with twice the yield strength",
    image: duplexMatImg,
    accentColor: "#A94728",
    accentBg: "bg-[#A94728]/10",
    accentBorder: "border-[#A94728]/30",
    overview: "Duplex stainless steels possess an approximate 50/50 two-phase microstructure of austenite and ferrite. This metallurgical equilibrium delivers roughly double the yield strength of standard austenitic 304/316 alongside extraordinary resistance to chloride stress corrosion cracking.",
    keyCharacteristics: [
      "Yield strength roughly 2x higher than standard 304/316 austenitic stainless",
      "Superior resistance to chloride stress corrosion cracking (SCC)",
      "High resistance to pitting and crevice corrosion (PREN ~33–35)",
      "Lower thermal expansion coefficient than austenitic grades"
    ],
    popularGrades: ["2205 (S31803 / S32205)", "S32304", "F51"],
    standards: ["ASTM A182 F51", "ASTM A790", "ASTM A240", "NACE MR0175"]
  },
  {
    id: "mat-super-duplex",
    slug: "super-duplex-stainless-steel",
    name: "Super Duplex Stainless Steel",
    shortName: "Super Duplex",
    tagline: "25% Cr high-alloy grade with PREN ≥ 42 for severe marine duty",
    image: superDuplexMatImg,
    accentColor: "#7E321F",
    accentBg: "bg-[#7E321F]/10",
    accentBorder: "border-[#7E321F]/30",
    overview: "Super Duplex stainless steel is an ultra-high alloy duplex grade containing 25% chromium, 7% nickel, 4% molybdenum, and controlled nitrogen. Designed specifically for hyper-aggressive seawater, offshore oil platforms, and sour gas handling.",
    keyCharacteristics: [
      "Guaranteed Pitting Resistance Equivalent Number (PREN) ≥ 42",
      "Immunity to stress corrosion cracking in hot chloride environments",
      "Very high mechanical yield strength (>550 MPa)",
      "High erosion-corrosion resistance in high-velocity pipelines"
    ],
    popularGrades: ["2507 (S32750)", "Zeron 100 (S32760)", "F53", "F55"],
    standards: ["ASTM A182 F53", "ASTM A790", "ASTM A240", "NORSOK M-650"]
  },
  {
    id: "mat-nickel",
    slug: "nickel-alloys",
    name: "Nickel Alloys",
    shortName: "Nickel",
    tagline: "Inconel, Monel, Hastelloy for extreme chemical & thermal stress",
    image: nickelAlloyMatImg,
    accentColor: "#415A6B",
    accentBg: "bg-slate-700/10",
    accentBorder: "border-slate-700/30",
    overview: "Nickel-base superalloys deliver unmatched corrosion resistance in reducing and oxidizing acids, molten salts, and extreme service environments where standard stainless steels fail rapidly.",
    keyCharacteristics: [
      "Outstanding resistance to reducing and oxidizing acids (HCl, H2SO4, HF)",
      "Exceptional strength and creep resistance above 900°C",
      "Complete immunity to chloride-induced stress corrosion cracking",
      "High fatigue and thermal fatigue resistance"
    ],
    popularGrades: ["Inconel 600", "Inconel 625", "Monel 400", "Hastelloy C276", "Nickel 200"],
    standards: ["ASTM B166", "ASTM B564", "ASTM B444", "ASME SB-564"]
  },
  {
    id: "mat-titanium",
    slug: "titanium",
    name: "Titanium",
    shortName: "Titanium",
    tagline: "Highest strength-to-weight ratio & seawater immunity",
    image: titaniumMatImg,
    accentColor: "#273845",
    accentBg: "bg-cyan-900/10",
    accentBorder: "border-cyan-900/30",
    overview: "Titanium and its alloys provide low density (approx. 60% of steel's density), high specific strength, and complete immunity to ambient seawater corrosion, making it critical for offshore desalination and aerospace equipment.",
    keyCharacteristics: [
      "Virtually 100% immune to corrosion in seawater, brines, and moist chlorine",
      "High strength-to-weight ratio reducing pipeline structural loads",
      "Biocompatible and non-magnetic for medical and defense applications",
      "Low thermal expansion rate minimizing joint fatigue"
    ],
    popularGrades: ["Grade 1", "Grade 2 (CP)", "Grade 5 (Ti-6Al-4V)", "Grade 7 (with Pd)"],
    standards: ["ASTM B381", "ASTM B861", "ASTM B265", "ASME SB-381"]
  },
  {
    id: "mat-exotic",
    slug: "exotic-alloys",
    name: "Exotic Alloys",
    shortName: "Exotic",
    tagline: "Specialty high-nickel & cobalt-base alloys for bespoke duty",
    image: exoticMatImg,
    accentColor: "#90391D",
    accentBg: "bg-amber-900/10",
    accentBorder: "border-amber-900/30",
    overview: "Exotic alloys cover tailored metallurgical compounds engineered for highly specialized chemical processing, subsea wellheads, space exploration, and radioactive environments.",
    keyCharacteristics: [
      "Engineered for highly aggressive chemical reaction vessels",
      "Extreme resistance to wet chlorine, hypochlorite, and chlorine dioxide",
      "Maintains dimensional stability under extreme pressure cycles",
      "Certified with full metallurgical test documentation"
    ],
    popularGrades: ["SMO 254", "Incoloy 800H", "Incoloy 825", "Hastelloy B2", "Nimonic"],
    standards: ["ASTM A182", "ASTM B564", "NACE MR0175", "DIN 17744"]
  },
  {
    id: "mat-high-alloy",
    slug: "high-alloy-steel",
    name: "High Alloy Steel",
    shortName: "High Alloy",
    tagline: "Enhanced chrome-moly-vanadium compositions for heavy wear",
    image: highAlloyMatImg,
    accentColor: "#171A1C",
    accentBg: "bg-zinc-900/10",
    accentBorder: "border-zinc-900/30",
    overview: "High alloy steels incorporate substantial percentages of multiple alloying elements to provide high hardenability, structural toughness, impact abrasion resistance, and fatigue life under cyclic mechanical loads.",
    keyCharacteristics: [
      "High surface hardness coupled with ductile core toughness",
      "Elevated resistance to abrasion, erosion, and cavitation",
      "Deep through-hardening capability for heavy forging sections",
      "High fatigue endurance in pulsating pressure lines"
    ],
    popularGrades: ["P91", "17-4 PH", "410", "420", "430", "440C"],
    standards: ["ASTM A564", "ASTM A182", "EN 10088", "AISI / SAE Specifications"]
  }
];

// =============================================================
// 2. PRODUCT CATEGORIES (18 Total: 9 Manufacturer + 9 Supplier)
// =============================================================
export const PRODUCT_CATEGORIES = [
  // -----------------------------------------------------------
  // MANUFACTURER DIVISION (9 Categories)
  // -----------------------------------------------------------
  {
    id: "prod-mfg-01",
    slug: "butt-weld-fittings",
    name: "Butt Weld Fittings",
    division: "Manufacturer",
    shortDesc: "Seamless & welded pipe elbows, tees, reducers, and end caps.",
    heroDesc: "Manufactured in compliance with ASME B16.9 and MSS-SP specifications. Engineered for full-penetration welded piping systems requiring smooth flow contours and high integrity under internal fluid pressure.",
    defaultImage: buttWeldDefault,
    hasTypes: false,
    applicableMaterials: [
      "stainless-steel",
      "carbon-steel",
      "alloy-steel",
      "duplex-stainless-steel",
      "super-duplex-stainless-steel",
      "nickel-alloys",
      "titanium",
      "exotic-alloys",
      "high-alloy-steel"
    ],
    standards: ["ASME B16.9", "ASTM A403", "ASTM A234 WPB", "MSS-SP 43", "DIN 2605"],
    sizeRange: '1/2" NB to 48" NB (Seamless up to 24", Welded / ERW / LSAW up to 48")',
    schedules: "SCH 10, SCH 20, SCH 40, SCH 80, SCH 160, SCH XXS",
    applications: ["Refinery Piping", "Power Generation", "Petrochemical Plants", "Water Distribution", "Shipbuilding"]
  },
  {
    id: "prod-mfg-02",
    slug: "dairy-pharma-fittings",
    name: "Dairy & Pharma Fittings",
    division: "Manufacturer",
    shortDesc: "Sanitary grade mirror-polished tri-clamp & SMS ferrule fittings.",
    heroDesc: "Sanitary stainless steel tubular components electro-polished to Ra < 0.4 µm. Specifically designed for sterile, crevice-free biopharmaceutical, food processing, dairy, and brewery processing lines.",
    defaultImage: dairyPharmaDefault,
    hasTypes: false,
    applicableMaterials: [
      "stainless-steel",
      "nickel-alloys",
      "titanium",
      "duplex-stainless-steel"
    ],
    standards: ["DIN 11850", "SMS 1145", "3A Sanitary Standards", "BS 4825", "ISO 2852"],
    sizeRange: '1/2" OD to 4" OD (Metric 12mm to 104mm)',
    schedules: "Sanitary Gauge 16G, 14G, 12G (Ra 0.4µm to Ra 0.8µm finish)",
    applications: ["Biotechnology", "Pharmaceutical Manufacturing", "Dairy & Milk Processing", "Breweries & Beverages", "Cosmetic Formulations"]
  },
  {
    id: "prod-mfg-03",
    slug: "fasteners",
    name: "Fasteners",
    division: "Manufacturer",
    shortDesc: "High-tensile industrial hex bolts, stud bolts, nuts, and washers.",
    heroDesc: "Engineered threaded industrial fasteners manufactured to precise metric and imperial pitch standards. Stocked in high-tensile alloy steel (B7/2H) and corrosion-resistant stainless/duplex grades for pressure vessels and structural flanges.",
    defaultImage: fastenersDefault,
    hasTypes: true, // Dedicated Fastener Types System
    applicableMaterials: [
      "stainless-steel",
      "carbon-steel",
      "alloy-steel",
      "duplex-stainless-steel",
      "super-duplex-stainless-steel",
      "nickel-alloys",
      "titanium",
      "exotic-alloys",
      "high-alloy-steel"
    ],
    standards: ["ASTM A193", "ASTM A194", "ASTM A320", "ISO 4014", "DIN 933", "DIN 934", "ASME B18.2.1"],
    sizeRange: "M6 to M64 (Metric) & 1/4\" to 4\" (UNC / UNF / 8UN)",
    schedules: "Property Class 8.8, 10.9, 12.9, Grade B7/2H, B8/8, B8M/8M",
    applications: ["Flange Bolting", "Heavy Machinery", "Structural Steel", "Offshore Platforms", "Pressure Vessel Clamping"]
  },
  {
    id: "prod-mfg-04",
    slug: "ferrule-fittings",
    name: "Ferrule Fittings",
    division: "Manufacturer",
    shortDesc: "Double ferrule twin-compression instrumentation tube fittings.",
    heroDesc: "Precision-machined front and back ferrule tube fittings providing leak-tight metal-to-metal sealing under extreme vibration, vacuum, and high hydraulic pressures up to 10,000 PSI.",
    defaultImage: ferruleDefault,
    hasTypes: false,
    applicableMaterials: [
      "stainless-steel",
      "carbon-steel",
      "alloy-steel",
      "duplex-stainless-steel",
      "super-duplex-stainless-steel",
      "nickel-alloys",
      "titanium",
      "exotic-alloys",
      "high-alloy-steel"
    ],
    standards: ["ASTM A276", "ASME B31.3", "MSS-SP 99", "NPT / BSP Threaded"],
    sizeRange: '1/16" OD to 2" OD (3mm to 50mm Tube OD)',
    schedules: "Working Pressure up to 15,000 PSI (1034 Bar)",
    applications: ["Instrumentation Lines", "Hydraulic Systems", "Chemical Sampling Loops", "Gas Chromatography", "Compressed Gas Distribution"]
  },
  {
    id: "prod-mfg-05",
    slug: "flanges",
    name: "Flanges",
    division: "Manufacturer",
    shortDesc: "Weld neck, slip-on, blind, socket weld, and forged industrial flanges.",
    heroDesc: "Forged industrial pipeline flanges conforming to ASME B16.5 and B16.47 standards. Precision CNC faced with serrated phonographic or smooth gasket finishes across pressure ratings from Class 150 to Class 2500.",
    defaultImage: flangesDefault,
    hasTypes: true, // Dedicated Flange Types System
    applicableMaterials: [
      "stainless-steel",
      "carbon-steel",
      "alloy-steel",
      "duplex-stainless-steel",
      "super-duplex-stainless-steel",
      "nickel-alloys",
      "titanium",
      "exotic-alloys",
      "high-alloy-steel"
    ],
    standards: ["ASME B16.5", "ASME B16.47 Series A & B", "EN 1092-1", "BS 4504", "MSS-SP 44"],
    sizeRange: '1/2" NB to 64" NB',
    schedules: "Class 150, 300, 600, 900, 1500, 2500 & PN6 to PN160",
    applications: ["Oil & Gas Transmission", "High Pressure Boilers", "Subsea Manifolds", "Chemical Process Piping", "Cryogenic Storage"]
  },
  {
    id: "prod-mfg-06",
    slug: "forged-fittings",
    name: "Forged Fittings",
    division: "Manufacturer",
    shortDesc: "High-pressure socket weld & threaded elbows, tees, couplings & unions.",
    heroDesc: "Heavy-wall forged steel fittings manufactured per ASME B16.11 in 2000#, 3000#, 6000#, and 9000# pressure classes for compact, high-integrity piping connections.",
    defaultImage: forgedFittingsDefault,
    hasTypes: false,
    applicableMaterials: [
      "stainless-steel",
      "carbon-steel",
      "alloy-steel",
      "duplex-stainless-steel",
      "super-duplex-stainless-steel",
      "nickel-alloys",
      "titanium",
      "exotic-alloys",
      "high-alloy-steel"
    ],
    standards: ["ASME B16.11", "BS 3799", "MSS-SP 83", "MSS-SP 97 (Branch Outlets)"],
    sizeRange: '1/8" NB to 4" NB',
    schedules: "Class 2000 LBS, 3000 LBS, 6000 LBS, 9000 LBS (Socket Weld & Screwed NPT)",
    applications: ["High-Pressure Steam", "Refinery Hydrocrackers", "Hydraulic Power Units", "Chemical Injection Manifolds"]
  },
  {
    id: "prod-mfg-07",
    slug: "hose-pipes",
    name: "Hose Pipes",
    division: "Manufacturer",
    shortDesc: "Corrugated flexible metal hoses with stainless steel braided sheath.",
    heroDesc: "Flexible annularly corrugated metallic hose assemblies reinforced with single or double stainless steel wire braid, absorbing thermal expansion, pump vibration, and piping misalignment.",
    defaultImage: hosePipesDefault,
    hasTypes: false,
    applicableMaterials: [
      "stainless-steel",
      "carbon-steel",
      "alloy-steel",
      "duplex-stainless-steel",
      "super-duplex-stainless-steel",
      "nickel-alloys",
      "titanium",
      "exotic-alloys",
      "high-alloy-steel"
    ],
    standards: ["BS 6501 Part 1", "ISO 10380", "EJMA Standards"],
    sizeRange: '1/4" NB to 12" NB',
    schedules: "Single Braid & Double Wire Braid (Pressure rating up to 250 Bar)",
    applications: ["Engine Exhausts", "Cryogenic Fluid Transfer", "Vibration Isolation", "Steel Plant Furnaces", "Chemical Loading Arms"]
  },
  {
    id: "prod-mfg-08",
    slug: "perforated-sheets",
    name: "Perforated Sheets",
    division: "Manufacturer",
    shortDesc: "Precision CNC punched round, square, slotted, and decorative sheets.",
    heroDesc: "Cold rolled and hot rolled metal sheets perforated with micro and macro apertures using high-precision CNC punching presses. Used extensively in architectural facades, acoustic silencing, and industrial sifting.",
    defaultImage: perforatedDefault,
    hasTypes: false,
    applicableMaterials: [
      "stainless-steel",
      "carbon-steel",
      "alloy-steel",
      "duplex-stainless-steel",
      "super-duplex-stainless-steel",
      "nickel-alloys",
      "titanium",
      "exotic-alloys",
      "high-alloy-steel"
    ],
    standards: ["ASTM A240", "DIN 24041", "ISO 7806"],
    sizeRange: "Thickness 0.5mm to 12mm; Sheet Sizes 1000x2000mm, 1250x2500mm, 1500x3000mm",
    schedules: "Hole Diameters from 0.5mm to 50mm (Round, Square, Hexagonal, Slotted)",
    applications: ["Acoustic Attenuation", "Grain Sifting & Sieves", "Architectural Sunscreens", "Centrifuge Filtration", "Industrial Machinery Guards"]
  },
  {
    id: "prod-mfg-09",
    slug: "wire-mesh",
    name: "Wire Mesh",
    division: "Manufacturer",
    shortDesc: "Plain, twilled, and Dutch weave industrial filtration wire cloth.",
    heroDesc: "Woven stainless steel wire cloth engineered with microscopic aperture accuracy. Engineered for particulate separation, liquid-solid filtration, catalyst support, and extruder screen packs.",
    defaultImage: wireMeshDefault,
    hasTypes: false,
    applicableMaterials: [
      "stainless-steel",
      "carbon-steel",
      "alloy-steel",
      "duplex-stainless-steel",
      "super-duplex-stainless-steel",
      "nickel-alloys",
      "titanium",
      "exotic-alloys",
      "high-alloy-steel"
    ],
    standards: ["ASTM E2016", "ISO 9044", "DIN 1210"],
    sizeRange: "1 Mesh to 600 Mesh (Apertures from 25mm down to 5 Microns)",
    schedules: "Plain Weave, Twill Weave, Plain Dutch Weave, Reverse Dutch Weave",
    applications: ["Catalyst Recovery", "Polymer Extrusion Filtration", "Oil Well Sand Control", "Chemical Powder Separation", "EMI / RFI Shielding"]
  },

  // -----------------------------------------------------------
  // SUPPLIER DIVISION (9 Categories)
  // -----------------------------------------------------------
  {
    id: "prod-sup-01",
    slug: "circle",
    name: "Circle",
    division: "Supplier",
    shortDesc: "Precision sheared, laser-cut, and waterjet-cut circular metal blanks.",
    heroDesc: "Clean circular metal blanks cut from certified prime plates and coils with zero burrs and tight diametrical tolerances. Tailored for deep drawing, tank end caps, cookware, and flange forging stock.",
    defaultImage: circleDefault,
    hasTypes: false,
    applicableMaterials: [
      "stainless-steel",
      "carbon-steel",
      "alloy-steel",
      "duplex-stainless-steel",
      "super-duplex-stainless-steel",
      "nickel-alloys",
      "titanium",
      "exotic-alloys",
      "high-alloy-steel"
    ],
    standards: ["ASTM A240", "ASME SA240", "IS 6911"],
    sizeRange: "Diameter 50mm to 3000mm; Thickness 0.5mm to 100mm",
    schedules: "Cold Rolled 2B / Bright Annealed / Hot Rolled No. 1 Finish",
    applications: ["Pressure Vessel Dished Ends", "Heat Exchanger Tube Sheets", "Commercial Cookware", "Flange Blanks", "Lighting Reflectors"]
  },
  {
    id: "prod-sup-02",
    slug: "sheets-plates",
    name: "Sheets & Plates",
    division: "Supplier",
    shortDesc: "Hot rolled heavy plates, cold rolled sheets, and checker plates.",
    heroDesc: "Mill-tested industrial plates conforming to ASTM A240 and IS 2062. Available in prime stock sheets or custom plasma, laser, and waterjet cut-to-size dimensions with full mill test traceability.",
    defaultImage: sheetsPlatesDefault,
    hasTypes: false,
    applicableMaterials: [
      "stainless-steel",
      "carbon-steel",
      "alloy-steel",
      "duplex-stainless-steel",
      "super-duplex-stainless-steel",
      "nickel-alloys",
      "titanium",
      "exotic-alloys",
      "high-alloy-steel"
    ],
    standards: ["ASTM A240", "ASTM A516 Gr. 70 (Boiler Quality)", "IS 2062", "EN 10028"],
    sizeRange: "Thickness 0.5mm to 150mm; Width up to 3000mm; Length up to 12000mm",
    schedules: "Cold Rolled 2B, HRAP, Checker (Chequered) Pattern, Polished",
    applications: ["Storage Tanks", "Boilers & Pressure Vessels", "Flange Cutting Stock", "Industrial Ducting", "Offshore Deck Fabrication"]
  },
  {
    id: "prod-sup-03",
    slug: "flat-bars",
    name: "Flat Bars",
    division: "Supplier",
    shortDesc: "Hot rolled, slit-cut, and cold drawn rectangular steel flat bars.",
    heroDesc: "Solid rectangular cross-section bars manufactured by hot rolling or slitting plate with true 90-degree corners and flat parallel edges. Ideal for structural frames, brackets, and base plates.",
    defaultImage: flatBarsDefault,
    hasTypes: false,
    applicableMaterials: [
      "stainless-steel",
      "carbon-steel",
      "alloy-steel",
      "duplex-stainless-steel",
      "super-duplex-stainless-steel",
      "nickel-alloys",
      "titanium",
      "exotic-alloys",
      "high-alloy-steel"
    ],
    standards: ["ASTM A276", "ASTM A479", "DIN 1017", "IS 2062"],
    sizeRange: "Width 12mm to 300mm; Thickness 3mm to 50mm",
    schedules: "Hot Rolled Annealed & Pickled (HRAP) / Cold Drawn Bright (CDB)",
    applications: ["Machine Base Frames", "Structural Brackets", "Turbine Mounting Bars", "Shipyard Stiffeners", "Switchgear Busbars"]
  },
  {
    id: "prod-sup-04",
    slug: "patapatti-strips",
    name: "Patapatti / Strips",
    division: "Supplier",
    shortDesc: "Narrow precision cold rolled strips, shims, and coiled patapatti.",
    heroDesc: "Precision slit narrow strips commonly referred to as Patapatti in the Indian metal distribution market. Engineered with deburred safety edges and consistent hardness for stamping and springs.",
    defaultImage: patapattiDefault,
    hasTypes: false,
    applicableMaterials: [
      "stainless-steel",
      "carbon-steel",
      "alloy-steel",
      "duplex-stainless-steel",
      "super-duplex-stainless-steel",
      "nickel-alloys",
      "titanium",
      "exotic-alloys",
      "high-alloy-steel"
    ],
    standards: ["ASTM A666", "DIN 17224", "IS 2507"],
    sizeRange: "Width 5mm to 150mm; Thickness 0.05mm to 6mm",
    schedules: "Annealed, 1/4 Hard, 1/2 Hard, Full Hard Temper",
    applications: ["Precision Shims & Washers", "Spring Manufacturing", "Hose Clamp Strapping", "Electronic Connectors", "Architectural Inlays"]
  },
  {
    id: "prod-sup-05",
    slug: "pipes-tubes",
    name: "Pipes & Tubes",
    division: "Supplier",
    shortDesc: "Seamless & ERW / EFW pipes, heat exchanger tubes & hydraulic tubing.",
    heroDesc: "Comprehensive stocking of seamless and welded pipes in standard and heavy schedules. Verified by 100% hydrostatic and ultrasonic non-destructive testing for critical process fluid transmission.",
    defaultImage: pipesTubesDefault,
    hasTypes: false,
    applicableMaterials: [
      "stainless-steel",
      "carbon-steel",
      "alloy-steel",
      "duplex-stainless-steel",
      "super-duplex-stainless-steel",
      "nickel-alloys",
      "titanium",
      "exotic-alloys",
      "high-alloy-steel"
    ],
    standards: ["ASTM A312", "ASTM A106 Gr. B", "ASTM A335 (P11/P22/P91)", "ASTM A790", "ASME B36.10M", "ASME B36.19M"],
    sizeRange: '1/8" NB to 36" NB (Seamless up to 24", Welded up to 64")',
    schedules: "SCH 5S, 10S, 40S, 80S, 160, XXS (Wall thickness 1mm to 65mm)",
    applications: ["Oil & Gas Refining", "Thermal Boiler Tubes", "Fertilizer Plants", "Cross-Country Pipelines", "Chemical Reaction Piping"]
  },
  {
    id: "prod-sup-06",
    slug: "ring",
    name: "Ring",
    division: "Supplier",
    shortDesc: "Seamless rolled forged rings and CNC machined circular blanks.",
    heroDesc: "Seamless rolled forged rings with continuous circumferential grain flow, eliminating directional weakness. Essential for slew rings, bearing races, wind turbine flanges, and gear blanks.",
    defaultImage: ringDefault,
    hasTypes: false,
    applicableMaterials: [
      "stainless-steel",
      "carbon-steel",
      "alloy-steel",
      "duplex-stainless-steel",
      "super-duplex-stainless-steel",
      "nickel-alloys",
      "titanium",
      "exotic-alloys",
      "high-alloy-steel"
    ],
    standards: ["ASTM A182", "ASTM A105", "ASTM A350", "EN 10222-2"],
    sizeRange: "Outer Diameter up to 4000mm; Face Width up to 800mm",
    schedules: "Rough Machined or Finish CNC Profile Machined with MTC",
    applications: ["Large Slewing Bearings", "Wind Turbine Generator Flanges", "Pressure Vessel Manway Rings", "Heavy Industrial Gears", "Turbine Casing Rings"]
  },
  {
    id: "prod-sup-07",
    slug: "rods-bars",
    name: "Rods & Bars",
    division: "Supplier",
    shortDesc: "Bright peeled, ground & polished round, hex, and square bars.",
    heroDesc: "Precision ground centerless round bars and cold drawn hexagonal bars with h9/h11 diametrical tolerances. Stocked for high-speed CNC turning, pump shafts, valves, and automotive fasteners.",
    defaultImage: rodsBarsDefault,
    hasTypes: false,
    applicableMaterials: [
      "stainless-steel",
      "carbon-steel",
      "alloy-steel",
      "duplex-stainless-steel",
      "super-duplex-stainless-steel",
      "nickel-alloys",
      "titanium",
      "high-alloy-steel"
    ],
    standards: ["ASTM A276", "ASTM A479", "DIN 1013", "ISO 286-2 (h9, h11)"],
    sizeRange: "Diameter 3mm to 500mm (Forged Rounds up to 800mm)",
    schedules: "Black Forged, Bright Annealed, Centerless Ground, Polished",
    applications: ["Centrifugal Pump Shafts", "Valve Stems & Actuators", "Hydraulic Cylinder Rods", "Marine Propulsion Shafts", "Precision Fastener Headers"]
  },
  {
    id: "prod-sup-08",
    slug: "coil",
    name: "Coil",
    division: "Supplier",
    shortDesc: "Continuous hot rolled & cold rolled coils, slit coils & foil rolls.",
    heroDesc: "Prime mill-certified metal coils sourced directly from top-tier producers (Tata Steel, JSW, Jindal). Available in standard master widths or custom precision slit coils with tight width tolerances.",
    defaultImage: coilDefault,
    hasTypes: false,
    applicableMaterials: [
      "stainless-steel",
      "carbon-steel",
      "alloy-steel",
      "duplex-stainless-steel",
      "super-duplex-stainless-steel",
      "nickel-alloys",
      "titanium",
      "exotic-alloys",
      "high-alloy-steel"
    ],
    standards: ["ASTM A240", "ASTM A480", "EN 10088-2", "IS 2062"],
    sizeRange: "Thickness 0.1mm to 16mm; Width 10mm to 2000mm",
    schedules: "2B, No. 4 Hairline, BA (Bright Annealed), HR No. 1",
    applications: ["Automotive Stampings", "Continuous Tube Mills", "Roll Forming Profiles", "White Goods Appliances", "Cable Armor Strips"]
  },
  {
    id: "prod-sup-09",
    slug: "wires",
    name: "Wires",
    division: "Supplier",
    shortDesc: "Cold drawn stainless, alloy, and spring wires, MIG/TIG welding wires.",
    heroDesc: "High-consistency industrial drawing wire, spring wire, and certified filler welding wire spools. Controlled tensile strength and cast-helix properties ensure smooth continuous feed.",
    defaultImage: wiresDefault,
    hasTypes: false,
    applicableMaterials: [
      "stainless-steel",
      "carbon-steel",
      "alloy-steel",
      "duplex-stainless-steel",
      "super-duplex-stainless-steel",
      "nickel-alloys",
      "titanium",
      "exotic-alloys",
      "high-alloy-steel"
    ],
    standards: ["ASTM A580", "AWS A5.9 (Welding Wires)", "DIN 17224", "IS 6528"],
    sizeRange: "Diameter 0.10mm to 12.0mm",
    schedules: "Soft Annealed, 1/4 Hard, Half Hard, Spring Hard, Bright Finish",
    applications: ["Industrial Springs", "MIG / TIG Welding Filler", "Braided Hose Reinforcement", "Conveyor Belts", "Cold Heading Fasteners"]
  }
];

// =============================================================
// 3. FLANGE TYPES (Dedicated Types System)
// =============================================================
export const FLANGE_TYPES = [
  {
    id: "flange-wn",
    slug: "weld-neck",
    name: "Weld Neck Flange",
    shortDesc: "Tapered hub butt-welded to pipe, best for high pressure, cyclic fatigue & thermal stress.",
    image: weldNeckFlangeImg,
    materialImages: {
      "carbon-steel": csWeldNeckImg,
      "stainless-steel": weldNeckFlangeImg,
    },
    connectionType: "Butt-welded circumferential joint matching pipe wall thickness",
    pressureClasses: "Class 150, 300, 600, 900, 1500, 2500 (PN 16 to PN 400)",
    standards: ["ASME B16.5", "ASME B16.47 Series A & B", "EN 1092-1 Type 11"],
    applications: ["Severe high pressure pipelines", "Boiler steam headers", "Subsea manifolds", "Cryogenic gas lines"],
    facingTypes: ["Raised Face (RF)", "Ring Type Joint (RTJ)", "Flat Face (FF)"]
  },
  {
    id: "flange-so",
    slug: "slip-on",
    name: "Slip-On Flange",
    shortDesc: "Flange slips over pipe end and is welded with fillet welds inside and outside.",
    image: slipOnFlangeImg,
    materialImages: {
      "carbon-steel": csSlipOnImg,
      "stainless-steel": slipOnFlangeImg,
    },
    connectionType: "Double fillet welded (internal bore and external hub)",
    pressureClasses: "Class 150, 300, 600, 1500",
    standards: ["ASME B16.5", "EN 1092-1 Type 12", "DIN 2576"],
    applications: ["Moderate pressure fluid systems", "Cooling water loops", "Low pressure process lines"],
    facingTypes: ["Raised Face (RF)", "Flat Face (FF)"]
  },
  {
    id: "flange-blind",
    slug: "blind",
    name: "Blind Flange",
    shortDesc: "Solid circular disc without a bore, bolted to terminate pipeline ends or vessel nozzles.",
    image: blindFlangeImg,
    materialImages: {
      "carbon-steel": csBlindImg,
      "stainless-steel": blindFlangeImg,
    },
    connectionType: "Bolted closure with gasket seal; allows future system expansion",
    pressureClasses: "Class 150, 300, 600, 900, 1500, 2500",
    standards: ["ASME B16.5", "ASME B16.47", "EN 1092-1 Type 05"],
    applications: ["Line isolation", "Pressure testing dead ends", "Vessel inspection manways", "Header clean-out ports"],
    facingTypes: ["Raised Face (RF)", "Ring Type Joint (RTJ)", "Flat Face (FF)"]
  },
  {
    id: "flange-sw",
    slug: "socket-weld",
    name: "Socket Weld Flange",
    shortDesc: "Counter-bored socket accepts pipe end; ideal for small-diameter high-pressure runs.",
    image: socketWeldFlangeImg,
    materialImages: {
      "carbon-steel": csSocketWeldImg,
      "stainless-steel": socketWeldFlangeImg,
    },
    connectionType: "Single external fillet weld with 1.5mm expansion gap inside socket",
    pressureClasses: "Class 150, 300, 600, 1500",
    standards: ["ASME B16.5", "EN 1092-1 Type 14"],
    applications: ["Small-bore chemical feed lines (≤2\" NB)", "Hydraulic oil systems", "Steam condensate returns"],
    facingTypes: ["Raised Face (RF)", "Ring Type Joint (RTJ)"]
  },
  {
    id: "flange-th",
    slug: "threaded",
    name: "Threaded Flange",
    shortDesc: "Internally threaded bore (NPT / BSP) assembled without welding in explosive zones.",
    image: threadedFlangeImg,
    connectionType: "Tapered pipe thread (NPT per ASME B1.20.1 or BSPT)",
    pressureClasses: "Class 150, 300, 600, 1500, 2500",
    standards: ["ASME B16.5", "DIN 2566"],
    applications: ["Non-welded gas distribution", "Hazardous explosive environments", "Utility water lines"],
    facingTypes: ["Raised Face (RF)", "Flat Face (FF)"]
  },
  {
    id: "flange-lj",
    slug: "lap-joint",
    name: "Lap Joint Flange",
    shortDesc: "Used in combination with a stub end; free to rotate on pipe for easy bolt hole alignment.",
    image: lapJointFlangeImg,
    connectionType: "Loose-ring backed over a butt-welded pipe stub end",
    pressureClasses: "Class 150, 300, 600",
    standards: ["ASME B16.5", "EN 1092-1 Type 02"],
    applications: ["Piping systems requiring frequent dismantling", "Expensive alloy lines backed by carbon steel flanges"],
    facingTypes: ["Flat Face (backing stub end)"]
  },
  {
    id: "flange-plate",
    slug: "plate",
    name: "Plate Flange",
    shortDesc: "Flat waterworks ring cut from plate stock for low pressure distribution networks.",
    image: plateFlangeImg,
    connectionType: "Fillet welded ring without hub",
    pressureClasses: "Class 150, PN 6, PN 10, PN 16, Table D/E/F",
    standards: ["EN 1092-1 Type 01", "BS 4504", "IS 6392"],
    applications: ["Municipal water distribution", "HVAC ducting", "Low-pressure pump suction lines"],
    facingTypes: ["Flat Face (FF)"]
  },
  {
    id: "flange-orifice",
    slug: "orifice",
    name: "Orifice Flange",
    shortDesc: "Supplied in pairs with radial tapped differential pressure ports for flow metering.",
    image: orificeFlangeImg,
    connectionType: "Weld Neck or Slip-On with 1/2\" NPT differential pressure sensing taps",
    pressureClasses: "Class 300, 600, 900, 1500, 2500",
    standards: ["ASME B16.36"],
    applications: ["Gas and liquid flow rate calculation", "Custody transfer metering stations"],
    facingTypes: ["Raised Face (RF)", "Ring Type Joint (RTJ)"]
  },
  {
    id: "flange-reducing",
    slug: "reducing",
    name: "Reducing Flange",
    shortDesc: "Transitions between two different pipe nominal sizes without an inline pipe reducer.",
    image: reducingFlangeImg,
    connectionType: "Bore sized smaller than nominal mating bolt circle",
    pressureClasses: "Class 150, 300, 600",
    standards: ["ASME B16.5", "MSS-SP 44"],
    applications: ["Space-constrained pump discharge reductions", "Manifold branching"],
    facingTypes: ["Raised Face (RF)", "Flat Face (FF)"]
  },
  {
    id: "flange-lwn",
    slug: "long-weld-neck",
    name: "Long Weld Neck Flange",
    shortDesc: "Heavy integral extended barrel nozzle for pressure vessels and petrochemical columns.",
    image: longWeldNeckFlangeImg,
    connectionType: "Integral cylindrical neck welded directly into vessel shell",
    pressureClasses: "Class 150 to Class 2500",
    standards: ["ASME B16.5", "ASME Section VIII Div 1"],
    applications: ["Pressure vessel nozzles", "Storage tank cleanouts", "Reactor inlet ports"],
    facingTypes: ["Raised Face (RF)", "Ring Type Joint (RTJ)"]
  },
  {
    id: "flange-spec-blind",
    slug: "spectacle-blind",
    name: "Spectacle Blind Flange",
    shortDesc: "Figure-8 steel plate combining solid blind and open spacer for line blinding.",
    image: spectacleBlindFlangeImg,
    connectionType: "Sandwiched between two companion flanges",
    pressureClasses: "Class 150, 300, 600, 900, 1500",
    standards: ["ASME B16.48"],
    applications: ["Routine maintenance line shutoff", "Refinery turnaround positive isolation"],
    facingTypes: ["Raised Face (RF)", "Female Ring Joint"]
  },
  {
    id: "flange-square",
    slug: "square",
    name: "Square Flange",
    shortDesc: "Four-bolt square flange engineered per JIS B2291 / ISO 6164 for hydraulic power lines.",
    image: squareFlangeImg,
    connectionType: "4-bolt socket weld or companion threaded connection",
    pressureClasses: "210 kg/cm² (21 MPa) & 350 kg/cm² (35 MPa)",
    standards: ["JIS B2291", "ISO 6164"],
    applications: ["High-pressure hydraulic press piping", "Steel mill hydraulic actuators"],
    facingTypes: ["O-ring Grooved Face"]
  }
];

// =============================================================
// 4. FASTENER TYPES (Dedicated Types System)
// =============================================================
export const FASTENER_TYPES = [
  {
    id: "fastener-hex-bolts",
    slug: "hex-bolts",
    name: "Hex Head Bolts",
    shortDesc: "Standard and heavy hex head bolts for high-torque structural and flange bolting.",
    image: hexHeadBoltsImg,
    materialImages: {
      "carbon-steel": carbonHexBoltsImg,
      "stainless-steel": hexHeadBoltsImg,
      "duplex-stainless-steel": duplexFastenersImg,
      "titanium": titaniumFastenersImg
    },
    threadType: "UNC, UNF, Metric Coarse (ISO 965)",
    standards: ["ASME B18.2.1", "ISO 4014", "ISO 4017", "DIN 931", "DIN 933"],
    applications: ["Structural steel framing", "Machinery assembly", "General engineering fastening"]
  },
  {
    id: "fastener-hex-nuts",
    slug: "hex-nuts",
    name: "Hex Nuts",
    shortDesc: "Precision tapped heavy hex nuts engineered to match bolt tensile requirements.",
    image: hexNutsImg,
    threadType: "UNC, 8UN, Metric Coarse",
    standards: ["ASME B18.2.2", "ASTM A194", "ISO 4032", "DIN 934"],
    applications: ["Flange stud bolt matching", "Structural bolted joints", "High temperature pressure vessels"]
  },
  {
    id: "fastener-stud-bolts",
    slug: "stud-bolts",
    name: "Stud Bolts",
    shortDesc: "Fully threaded continuous studs with two heavy hex nuts for ASME B16.5 flange clamping.",
    image: studBoltsImg,
    threadType: "Continuous full thread (8UN for >1\" dia; UNC for ≤1\" dia)",
    standards: ["ASME B16.5", "ASTM A193 Grade B7 / B8 / B8M", "ASTM A194 Grade 2H / 8 / 8M"],
    applications: ["Refinery flange connections", "High-temperature valves", "Heat exchanger head closures"]
  },
  {
    id: "fastener-socket-screws",
    slug: "socket-head-cap-screws",
    name: "Socket Head Cap Screws",
    shortDesc: "Internal hex (Allen) drive cylindrical head screws for compact high-tensile assemblies.",
    image: socketHeadCapScrewsImg,
    threadType: "Metric & Imperial precision thread",
    standards: ["ASME B18.3", "ISO 4762", "DIN 912"],
    applications: ["Tooling and dies", "Precision machine tools", "Hydraulic valve blocks"]
  },
  {
    id: "fastener-washers",
    slug: "washers",
    name: "Washers",
    shortDesc: "Flat, heavy structural, and spring lock washers for uniform load distribution.",
    image: washersImg,
    threadType: "Plain bore sized for M6 to M64 bolts",
    standards: ["ASME B18.21.1", "ASTM F436", "DIN 125", "DIN 127"],
    applications: ["Even clamping pressure", "Vibration loosening prevention", "Surface protection of bolted plates"]
  }
];

// =============================================================
// 5. RESEARCHED GRADES DATA (Accurate Indian & Global Standards)
// =============================================================
export const GRADES_DATA = [
  // -----------------------------------------------------------
  // Stainless Steel Grades
  // -----------------------------------------------------------
  {
    id: "grade-ss-304",
    slug: "304",
    materialSlug: "stainless-steel",
    name: "Grade 304",
    commonName: "SS 304 / 18-8 Stainless",
    unNumber: "UNS S30400",
    overview: "The most widely specified austenitic stainless steel worldwide, containing 18% chromium and 8% nickel. Delivers good corrosion resistance across atmospheric, architectural, food, and mild chemical environments.",
    composition: {
      "Chromium (Cr)": "18.0 - 20.0%",
      "Nickel (Ni)": "8.0 - 10.5%",
      "Carbon (C)": "0.08% max",
      "Manganese (Mn)": "2.0% max",
      "Silicon (Si)": "0.75% max",
      "Phosphorus (P)": "0.045% max",
      "Sulfur (S)": "0.030% max"
    },
    properties: {
      "Tensile Strength": "≥ 515 MPa",
      "Yield Strength (0.2%)": "≥ 205 MPa",
      "Elongation in 50mm": "≥ 40%",
      "Hardness (Rockwell B)": "≤ 92 HRB",
      "Operating Temp Range": "-196°C to 800°C"
    },
    governingStandards: [
      { productForm: "Pipes & Tubes", standard: "ASTM A312 / ASME SA312 TP304" },
      { productForm: "Flanges", standard: "ASTM A182 / ASME SA182 F304" },
      { productForm: "Fittings", standard: "ASTM A403 / ASME SA403 WP304" },
      { productForm: "Sheets & Plates", standard: "ASTM A240 / ASME SA240 304" },
      { productForm: "Round Bars", standard: "ASTM A276 / ASTM A479 304" },
      { productForm: "Fasteners", standard: "ASTM A193 B8 Class 1 / Class 2" }
    ],
    applications: [
      "Dairy and food processing equipment",
      "Architectural facades, handrails and decorative cladding",
      "Domestic & commercial kitchenware and sinks",
      "Chemical storage tanks for mild organic acids",
      "General industrial water piping lines"
    ]
  },
  {
    id: "grade-ss-304l",
    slug: "304l",
    materialSlug: "stainless-steel",
    name: "Grade 304L",
    commonName: "SS 304L (Low Carbon)",
    unNumber: "UNS S30403",
    overview: "Extra-low carbon version of 304 (0.030% max carbon). Prevents chromium carbide precipitation along grain boundaries during welding, eliminating risk of intergranular corrosion in the heat-affected zone (HAZ) without post-weld annealing.",
    composition: {
      "Chromium (Cr)": "18.0 - 20.0%",
      "Nickel (Ni)": "8.0 - 12.0%",
      "Carbon (C)": "0.030% max",
      "Manganese (Mn)": "2.0% max",
      "Silicon (Si)": "0.75% max"
    },
    properties: {
      "Tensile Strength": "≥ 485 MPa",
      "Yield Strength (0.2%)": "≥ 170 MPa",
      "Elongation in 50mm": "≥ 40%",
      "Hardness (Rockwell B)": "≤ 90 HRB"
    },
    governingStandards: [
      { productForm: "Pipes & Tubes", standard: "ASTM A312 TP304L" },
      { productForm: "Flanges", standard: "ASTM A182 F304L" },
      { productForm: "Fittings", standard: "ASTM A403 WP304L" },
      { productForm: "Sheets & Plates", standard: "ASTM A240 304L" }
    ],
    applications: [
      "Heavy-gauge welded industrial vessels",
      "Brewery and fermentation tanks",
      "Chemical process pipelines that cannot undergo post-weld heat treatment"
    ]
  },
  {
    id: "grade-ss-316",
    slug: "316",
    materialSlug: "stainless-steel",
    name: "Grade 316",
    commonName: "SS 316 / Marine Grade Stainless",
    unNumber: "UNS S31600",
    overview: "Contains 2.0–3.0% molybdenum in addition to 16% chromium and 10% nickel. Molybdenum dramatically increases resistance to localized pitting and crevice corrosion in chloride, brine, and acidic environments.",
    composition: {
      "Chromium (Cr)": "16.0 - 18.0%",
      "Nickel (Ni)": "10.0 - 14.0%",
      "Molybdenum (Mo)": "2.0 - 3.0%",
      "Carbon (C)": "0.08% max",
      "Manganese (Mn)": "2.0% max"
    },
    properties: {
      "Tensile Strength": "≥ 515 MPa",
      "Yield Strength (0.2%)": "≥ 205 MPa",
      "Elongation in 50mm": "≥ 40%",
      "Hardness (Rockwell B)": "≤ 95 HRB"
    },
    governingStandards: [
      { productForm: "Pipes & Tubes", standard: "ASTM A312 TP316" },
      { productForm: "Flanges", standard: "ASTM A182 F316" },
      { productForm: "Fittings", standard: "ASTM A403 WP316" },
      { productForm: "Sheets & Plates", standard: "ASTM A240 316" },
      { productForm: "Fasteners", standard: "ASTM A193 B8M Class 1 / Class 2" }
    ],
    applications: [
      "Marine hardware and coastal industrial plants",
      "Chemical and petrochemical processing columns",
      "Pharmaceutical equipment and pure water loops",
      "Textile dyeing and pulp & paper bleaching systems"
    ]
  },
  {
    id: "grade-ss-316l",
    slug: "316l",
    materialSlug: "stainless-steel",
    name: "Grade 316L",
    commonName: "SS 316L (Low Carbon)",
    unNumber: "UNS S31603",
    overview: "Low-carbon modification of 316 providing maximum resistance to intergranular corrosion after welding. The premier specification for welded chemical plant process piping and marine pipelines.",
    composition: {
      "Chromium (Cr)": "16.0 - 18.0%",
      "Nickel (Ni)": "10.0 - 14.0%",
      "Molybdenum (Mo)": "2.0 - 3.0%",
      "Carbon (C)": "0.030% max"
    },
    properties: {
      "Tensile Strength": "≥ 485 MPa",
      "Yield Strength (0.2%)": "≥ 170 MPa",
      "Elongation in 50mm": "≥ 40%",
      "Hardness (Rockwell B)": "≤ 90 HRB"
    },
    governingStandards: [
      { productForm: "Pipes & Tubes", standard: "ASTM A312 TP316L" },
      { productForm: "Flanges", standard: "ASTM A182 F316L" },
      { productForm: "Fittings", standard: "ASTM A403 WP316L" },
      { productForm: "Sheets & Plates", standard: "ASTM A240 316L" }
    ],
    applications: [
      "Pharmaceutical clean-in-place (CIP) loops",
      "Seawater cooling systems and marine heat exchangers",
      "Chemical tank containers and transport tankers"
    ]
  },
  {
    id: "grade-ss-321",
    slug: "321",
    materialSlug: "stainless-steel",
    name: "Grade 321",
    commonName: "SS 321 / Titanium Stabilized",
    unNumber: "UNS S32100",
    overview: "Stabilized by the addition of titanium (minimum 5x carbon content). Titanium preferentially binds with carbon to form titanium carbide, preserving chromium content and preventing carbide precipitation at 425°C to 850°C.",
    composition: {
      "Chromium (Cr)": "17.0 - 19.0%",
      "Nickel (Ni)": "9.0 - 12.0%",
      "Titanium (Ti)": "5 x (C+N) min to 0.70% max",
      "Carbon (C)": "0.08% max"
    },
    properties: {
      "Tensile Strength": "≥ 515 MPa",
      "Yield Strength (0.2%)": "≥ 205 MPa",
      "Elongation in 50mm": "≥ 40%"
    },
    governingStandards: [
      { productForm: "Pipes & Tubes", standard: "ASTM A312 TP321" },
      { productForm: "Flanges", standard: "ASTM A182 F321" },
      { productForm: "Fittings", standard: "ASTM A403 WP321" }
    ],
    applications: [
      "Aircraft exhaust manifolds and collector rings",
      "Thermal oxidizers and furnace combustion tubes",
      "Expansion joints and bellows in high-temperature pipelines"
    ]
  },
  {
    id: "grade-ss-310s",
    slug: "310s",
    materialSlug: "stainless-steel",
    name: "Grade 310S",
    commonName: "SS 310S / High Temperature Heat Resistant",
    unNumber: "UNS S31008",
    overview: "High chromium (24–26%) and high nickel (19–22%) austenitic grade designed for continuous service at temperatures up to 1150°C in oxidizing atmospheres with high resistance to scaling.",
    composition: {
      "Chromium (Cr)": "24.0 - 26.0%",
      "Nickel (Ni)": "19.0 - 22.0%",
      "Carbon (C)": "0.08% max"
    },
    properties: {
      "Tensile Strength": "≥ 515 MPa",
      "Yield Strength (0.2%)": "≥ 205 MPa",
      "Max Operating Temp": "1150°C (Oxidizing)"
    },
    governingStandards: [
      { productForm: "Pipes & Tubes", standard: "ASTM A312 TP310S" },
      { productForm: "Flanges", standard: "ASTM A182 F310S" },
      { productForm: "Plates & Sheets", standard: "ASTM A240 310S" }
    ],
    applications: [
      "Cement kiln liners and burner nozzles",
      "Petroleum refining radiant tubes",
      "Fluidized bed coal combustor internals"
    ]
  },
  {
    id: "grade-ss-904l",
    slug: "904l",
    materialSlug: "stainless-steel",
    name: "Grade 904L",
    commonName: "904L / High Alloy Super Austenitic",
    unNumber: "UNS N08904",
    overview: "High-alloy austenitic stainless steel with 25% nickel, 20% chromium, 4.5% molybdenum, and added copper (1.5%). Developed specifically to resist sulfuric acid concentrations across full temperature ranges.",
    composition: {
      "Nickel (Ni)": "23.0 - 28.0%",
      "Chromium (Cr)": "19.0 - 23.0%",
      "Molybdenum (Mo)": "4.0 - 5.0%",
      "Copper (Cu)": "1.0 - 2.0%"
    },
    properties: {
      "Tensile Strength": "≥ 490 MPa",
      "Yield Strength (0.2%)": "≥ 220 MPa",
      "PREN": "≥ 34"
    },
    governingStandards: [
      { productForm: "Pipes & Tubes", standard: "ASTM B677 / ASTM A312" },
      { productForm: "Flanges & Fittings", standard: "ASTM B649 / ASTM A182 F904L" }
    ],
    applications: [
      "Sulfuric and phosphoric acid production equipment",
      "Flue gas desulfurization (FGD) scrubbers",
      "Seawater cooling plants and bleaching machinery"
    ]
  },

  // -----------------------------------------------------------
  // Carbon Steel Grades
  // -----------------------------------------------------------
  {
    id: "grade-cs-a105",
    slug: "a105",
    materialSlug: "carbon-steel",
    name: "ASTM A105",
    commonName: "Forged Carbon Steel",
    unNumber: "UNS K03504",
    overview: "Standard forged carbon steel specification for piping components including flanges, fittings, valves, and similar parts for ambient and high-temperature service in pressure systems.",
    composition: {
      "Carbon (C)": "0.35% max",
      "Manganese (Mn)": "0.60 - 1.05%",
      "Phosphorus (P)": "0.035% max",
      "Sulfur (S)": "0.040% max",
      "Silicon (Si)": "0.10 - 0.35%"
    },
    properties: {
      "Tensile Strength": "≥ 485 MPa (70 ksi)",
      "Yield Strength (0.2%)": "≥ 250 MPa (36 ksi)",
      "Elongation in 50mm": "≥ 22%",
      "Hardness (Brinell)": "137 - 187 HBW"
    },
    governingStandards: [
      { productForm: "Flanges", standard: "ASTM A105 / ASME SA105" },
      { productForm: "Forged Fittings", standard: "ASME B16.11 Class 2000/3000/6000" }
    ],
    applications: [
      "Steam and water distribution pipelines",
      "Refinery pressure vessel nozzle flanges",
      "High-pressure hydraulic manifolds"
    ]
  },
  {
    id: "grade-cs-a106-gr-b",
    slug: "a106-gr-b",
    materialSlug: "carbon-steel",
    name: "ASTM A106 Grade B",
    commonName: "High Temp Seamless Carbon Steel Pipe",
    unNumber: "UNS K03006",
    overview: "Standard specification for seamless carbon steel pipe for high-temperature service in power plants, refineries, and chemical industrial systems.",
    composition: {
      "Carbon (C)": "0.30% max",
      "Manganese (Mn)": "0.29 - 1.06%",
      "Silicon (Si)": "0.10% min"
    },
    properties: {
      "Tensile Strength": "≥ 415 MPa (60 ksi)",
      "Yield Strength": "≥ 240 MPa (35 ksi)",
      "Elongation": "≥ 30%"
    },
    governingStandards: [
      { productForm: "Pipes & Tubes", standard: "ASTM A106 Gr. B / ASME SA106B" }
    ],
    applications: [
      "Thermal power plant steam lines",
      "Hydrocarbon transport lines in refineries",
      "Boiler feedwater piping"
    ]
  },
  {
    id: "grade-cs-a350-lf2",
    slug: "a350-lf2",
    materialSlug: "carbon-steel",
    name: "ASTM A350 LF2",
    commonName: "Low Temperature Forged Carbon Steel",
    unNumber: "UNS K03011",
    overview: "Charpy V-notch impact-tested forged carbon steel specified for sub-zero and Arctic piping service down to -46°C (-50°F) without brittle fracture.",
    composition: {
      "Carbon (C)": "0.30% max",
      "Manganese (Mn)": "0.60 - 1.35%",
      "Silicon (Si)": "0.15 - 0.30%"
    },
    properties: {
      "Tensile Strength": "485 - 655 MPa",
      "Yield Strength": "≥ 250 MPa",
      "Charpy Impact Test": "≥ 20 J at -46°C"
    },
    governingStandards: [
      { productForm: "Flanges", standard: "ASTM A350 LF2 Class 1" },
      { productForm: "Forged Fittings", standard: "ASTM A350 LF2 Class 1" }
    ],
    applications: [
      "Cryogenic LNG and LPG handling facilities",
      "Sub-zero gas processing plants",
      "Cold climate pipeline manifolds"
    ]
  },
  {
    id: "grade-cs-a193-b7",
    slug: "a193-b7",
    materialSlug: "carbon-steel",
    name: "ASTM A193 Grade B7",
    commonName: "High-Tensile Cr-Mo Alloy Fastener Steel",
    unNumber: "UNS G41400",
    overview: "Heat-treated chromium-molybdenum alloy steel (AISI 4140) quenched and tempered for high-pressure, elevated-temperature flange bolting.",
    composition: {
      "Chromium (Cr)": "0.80 - 1.10%",
      "Molybdenum (Mo)": "0.15 - 0.25%",
      "Carbon (C)": "0.37 - 0.49%"
    },
    properties: {
      "Tensile Strength": "≥ 860 MPa (125 ksi)",
      "Yield Strength": "≥ 720 MPa (105 ksi)",
      "Hardness": "≤ 321 HBW / 35 HRC"
    },
    governingStandards: [
      { productForm: "Fasteners", standard: "ASTM A193 B7 (Matched with A194 2H Nuts)" }
    ],
    applications: [
      "High pressure flange stud bolting",
      "Valve bonnet bolting in refineries",
      "Heat exchanger channel head bolting"
    ]
  },

  // -----------------------------------------------------------
  // Duplex & Super Duplex Grades
  // -----------------------------------------------------------
  {
    id: "grade-duplex-2205",
    slug: "2205",
    materialSlug: "duplex-stainless-steel",
    name: "Duplex 2205",
    commonName: "UNS S31803 / UNS S32205 / F51",
    unNumber: "UNS S32205",
    overview: "The most widely used duplex stainless steel, combining high yield strength with exceptional resistance to chloride pitting, crevice corrosion, and stress corrosion cracking.",
    composition: {
      "Chromium (Cr)": "22.0 - 23.0%",
      "Nickel (Ni)": "4.5 - 6.5%",
      "Molybdenum (Mo)": "3.0 - 3.5%",
      "Nitrogen (N)": "0.14 - 0.20%",
      "Carbon (C)": "0.030% max"
    },
    properties: {
      "Tensile Strength": "≥ 655 MPa",
      "Yield Strength (0.2%)": "≥ 450 MPa",
      "PREN": "≥ 35",
      "Elongation": "≥ 25%"
    },
    governingStandards: [
      { productForm: "Pipes & Tubes", standard: "ASTM A790 UNS S32205" },
      { productForm: "Flanges", standard: "ASTM A182 F51 / F60" },
      { productForm: "Fittings", standard: "ASTM A815 WPS32205" },
      { productForm: "Sheets & Plates", standard: "ASTM A240 2205" },
      { productForm: "Fasteners", standard: "ASTM A182 / ASTM A193 / A276" }
    ],
    applications: [
      "Offshore oil & gas production platforms",
      "Chemical tanker cargo tanks and piping",
      "Flue gas cleaning and desalination plants"
    ]
  },
  {
    id: "grade-super-duplex-2507",
    slug: "2507",
    materialSlug: "super-duplex-stainless-steel",
    name: "Super Duplex 2507",
    commonName: "UNS S32750 / F53",
    unNumber: "UNS S32750",
    overview: "25% chromium super duplex with guaranteed PREN ≥ 42. Specifically engineered for mission-critical marine and deepwater environments where aggressive chlorides induce rapid corrosion in lesser alloys.",
    composition: {
      "Chromium (Cr)": "24.0 - 26.0%",
      "Nickel (Ni)": "6.0 - 8.0%",
      "Molybdenum (Mo)": "3.0 - 5.0%",
      "Nitrogen (N)": "0.24 - 0.32%"
    },
    properties: {
      "Tensile Strength": "≥ 750 MPa",
      "Yield Strength (0.2%)": "≥ 550 MPa",
      "PREN": "≥ 42",
      "Elongation": "≥ 15%"
    },
    governingStandards: [
      { productForm: "Pipes & Tubes", standard: "ASTM A790 S32750" },
      { productForm: "Flanges", standard: "ASTM A182 F53" },
      { productForm: "Fittings", standard: "ASTM A815 WPS32750" },
      { productForm: "Plates & Sheets", standard: "ASTM A240 2507" }
    ],
    applications: [
      "Subsea umbilicals, manifolds and flowlines",
      "High-pressure reverse osmosis desalination tubes",
      "Rotors, shafts and impellers in corrosive marine duty"
    ]
  },

  // -----------------------------------------------------------
  // Nickel Alloy Grades
  // -----------------------------------------------------------
  {
    id: "grade-nickel-inconel-625",
    slug: "inconel-625",
    materialSlug: "nickel-alloys",
    name: "Inconel 625",
    commonName: "UNS N06625 / Alloy 625",
    unNumber: "UNS N06625",
    overview: "Nickel-chromium-molybdenum alloy with niobium addition that stiffens the matrix without requiring precipitation-hardening heat treatment. Outstanding fatigue resistance and chloride immunity.",
    composition: {
      "Nickel (Ni)": "58.0% min",
      "Chromium (Cr)": "20.0 - 23.0%",
      "Molybdenum (Mo)": "8.0 - 10.0%",
      "Niobium + Tantalum": "3.15 - 4.15%",
      "Iron (Fe)": "5.0% max"
    },
    properties: {
      "Tensile Strength": "≥ 827 MPa (120 ksi)",
      "Yield Strength (0.2%)": "≥ 414 MPa (60 ksi)",
      "Elongation": "≥ 30%"
    },
    governingStandards: [
      { productForm: "Flanges & Forgings", standard: "ASTM B564 / ASME SB564" },
      { productForm: "Pipes & Tubes", standard: "ASTM B444 / ASME SB444" },
      { productForm: "Plates", standard: "ASTM B443" }
    ],
    applications: [
      "Subsea valve trims and wellhead hardware",
      "Aerospace turbine exhaust ducts",
      "Sour gas extraction pipelines per NACE MR0175"
    ]
  },
  {
    id: "grade-nickel-hastelloy-c276",
    slug: "hastelloy-c276",
    materialSlug: "nickel-alloys",
    name: "Hastelloy C276",
    commonName: "Alloy C276 / UNS N10276",
    unNumber: "UNS N10276",
    overview: "Considered the universal corrosion-resistant nickel-moly-chrome alloy. Resistant to wet chlorine gas, hypochlorite, chlorine dioxide, and severe hot contaminated mineral acids.",
    composition: {
      "Nickel (Ni)": "Balance (~57%)",
      "Molybdenum (Mo)": "15.0 - 17.0%",
      "Chromium (Cr)": "14.5 - 16.5%",
      "Iron (Fe)": "4.0 - 7.0%",
      "Tungsten (W)": "3.0 - 4.5%"
    },
    properties: {
      "Tensile Strength": "≥ 690 MPa",
      "Yield Strength (0.2%)": "≥ 283 MPa",
      "Elongation": "≥ 40%"
    },
    governingStandards: [
      { productForm: "Flanges", standard: "ASTM B564 UNS N10276" },
      { productForm: "Pipes & Tubes", standard: "ASTM B622 Seamless" },
      { productForm: "Fittings", standard: "ASTM B366" }
    ],
    applications: [
      "Flue gas desulfurization (FGD) wet scrubbers",
      "Chemical waste incinerators",
      "Pharmaceutical batch synthesis reactors"
    ]
  },

  // -----------------------------------------------------------
  // Titanium Grades
  // -----------------------------------------------------------
  {
    id: "grade-ti-gr-2",
    slug: "grade-2",
    materialSlug: "titanium",
    name: "Titanium Grade 2",
    commonName: "Commercially Pure (CP) Titanium",
    unNumber: "UNS R50400",
    overview: "The workhorse grade of unalloyed titanium, offering an optimal balance of moderate strength, high ductility, excellent cold formability, and total immunity to ambient seawater corrosion.",
    composition: {
      "Titanium (Ti)": "Balance (>99%)",
      "Iron (Fe)": "0.30% max",
      "Oxygen (O)": "0.25% max",
      "Carbon (C)": "0.08% max"
    },
    properties: {
      "Tensile Strength": "≥ 345 MPa (50 ksi)",
      "Yield Strength (0.2%)": "275 - 450 MPa",
      "Density": "4.51 g/cm³ (approx. 45% lighter than steel)",
      "Elongation": "≥ 20%"
    },
    governingStandards: [
      { productForm: "Flanges", standard: "ASTM B381 Grade F-2" },
      { productForm: "Pipes & Tubes", standard: "ASTM B861 / ASTM B338" },
      { productForm: "Plates & Sheets", standard: "ASTM B265 Grade 2" }
    ],
    applications: [
      "Seawater desalination multi-stage flash (MSF) evaporators",
      "Offshore brine coolers and plate heat exchangers",
      "Chlor-alkali electrolytic cells and bleaching reactors"
    ]
  }
];

// =============================================================
// 6. HELPER LOOKUP FUNCTIONS & SEO-FRIENDLY URL RESOLVERS
// =============================================================

export const SEO_PHRASES = {
  STOCK: "stock-available-in-mumbai",
  MFG: "manufactured-in-mumbai"
};

// Product Category SEO Slugs (alternating between manufactured and stock-available)
export const PRODUCT_SEO_SLUGS = {
  "butt-weld-fittings": `butt-weld-fittings-${SEO_PHRASES.MFG}`,
  "dairy-pharma-fittings": `dairy-pharma-fittings-${SEO_PHRASES.STOCK}`,
  "fasteners": `fasteners-${SEO_PHRASES.MFG}`,
  "ferrule-fittings": `ferrule-fittings-${SEO_PHRASES.STOCK}`,
  "flanges": `flanges-${SEO_PHRASES.MFG}`,
  "forged-fittings": `forged-fittings-${SEO_PHRASES.STOCK}`,
  "hose-pipes": `hose-pipes-${SEO_PHRASES.MFG}`,
  "perforated-sheets": `perforated-sheets-${SEO_PHRASES.STOCK}`,
  "wire-mesh": `wire-mesh-${SEO_PHRASES.MFG}`,
  "circle": `circle-${SEO_PHRASES.STOCK}`,
  "coil": `coil-${SEO_PHRASES.MFG}`,
  "flat-bars": `flat-bars-${SEO_PHRASES.STOCK}`,
  "patapatti-strips": `patapatti-strips-${SEO_PHRASES.MFG}`,
  "pipes-tubes": `pipes-tubes-${SEO_PHRASES.STOCK}`,
  "ring": `ring-${SEO_PHRASES.MFG}`,
  "rods-bars": `rods-bars-${SEO_PHRASES.STOCK}`,
  "sheets-plates": `sheets-plates-${SEO_PHRASES.MFG}`,
  "wires": `wires-${SEO_PHRASES.STOCK}`
};

// Material SEO Slugs mapping (alternating between stock-available and manufactured)
export const MATERIAL_SEO_SLUGS = {
  "stainless-steel": `stainless-steel-${SEO_PHRASES.STOCK}`,
  "carbon-steel": `carbon-steel-${SEO_PHRASES.MFG}`,
  "alloy-steel": `alloy-steel-${SEO_PHRASES.STOCK}`,
  "duplex-stainless-steel": `duplex-steel-${SEO_PHRASES.MFG}`,
  "super-duplex-stainless-steel": `super-duplex-stainless-steel-${SEO_PHRASES.STOCK}`,
  "nickel-alloys": `nickel-alloys-${SEO_PHRASES.MFG}`,
  "titanium": `titanium-${SEO_PHRASES.STOCK}`,
  "exotic-alloys": `exotic-alloys-${SEO_PHRASES.MFG}`,
  "high-alloy-steel": `high-alloy-steel-${SEO_PHRASES.STOCK}`
};

export function getProductSeoSlug(productSlug) {
  if (!productSlug) return '';
  const clean = productSlug.toLowerCase().trim();
  if (PRODUCT_SEO_SLUGS[clean]) return PRODUCT_SEO_SLUGS[clean];
  return clean;
}

export function extractBaseProductSlug(slug) {
  if (!slug) return null;
  const clean = slug.toLowerCase().trim();

  // If already a known raw slug
  if (PRODUCT_CATEGORIES.some((p) => p.slug === clean)) return clean;

  // Strip SEO suffix phrases
  const stripped = clean
    .replace(/-stock-available-in-mumbai$/, '')
    .replace(/-manufactured-in-mumbai$/, '');

  if (PRODUCT_CATEGORIES.some((p) => p.slug === stripped)) return stripped;

  // Fuzzy matching
  const found = PRODUCT_CATEGORIES.find((p) => clean.startsWith(p.slug));
  if (found) return found.slug;

  return null;
}

export function extractBaseMaterialSlug(slug) {
  if (!slug) return null;
  const clean = slug.toLowerCase().trim();

  // If already a known raw slug
  if (MATERIAL_CATEGORIES.some((m) => m.slug === clean)) return clean;

  // Extract from combined product-material slug or material SEO slug
  if (clean.includes('super-duplex')) return 'super-duplex-stainless-steel';
  if (clean.includes('duplex')) return 'duplex-stainless-steel';
  if (clean.includes('stainless-steel') || clean.includes('stainless')) return 'stainless-steel';
  if (clean.includes('carbon-steel') || clean.includes('carbon')) return 'carbon-steel';
  if (clean.includes('alloy-steel') && !clean.includes('high-alloy') && !clean.includes('nickel')) return 'alloy-steel';
  if (clean.includes('high-alloy')) return 'high-alloy-steel';
  if (clean.includes('nickel')) return 'nickel-alloys';
  if (clean.includes('titanium')) return 'titanium';
  if (clean.includes('exotic')) return 'exotic-alloys';

  return null;
}

export function getMaterialSeoSlug(materialSlug) {
  if (!materialSlug) return '';
  const clean = materialSlug.toLowerCase().trim();
  if (MATERIAL_SEO_SLUGS[clean]) return MATERIAL_SEO_SLUGS[clean];
  const base = extractBaseMaterialSlug(clean);
  if (base && MATERIAL_SEO_SLUGS[base]) return MATERIAL_SEO_SLUGS[base];
  return clean;
}

export function getProductMaterialSeoSlug(productSlug, materialSlug) {
  if (!productSlug || !materialSlug) return '';
  const pSlug = productSlug.toLowerCase().trim();
  const mBase = extractBaseMaterialSlug(materialSlug) || materialSlug.toLowerCase().trim();

  // Special cases directly requested in prompt examples:
  if (pSlug === 'pipes-tubes' && mBase === 'stainless-steel') {
    return 'stainless-steel-ss-pipes-tubes-manufactured-in-mumbai';
  }
  if (pSlug === 'flanges' && mBase === 'stainless-steel') {
    return 'stainless-steel-flanges-stock-available-in-mumbai';
  }
  if ((pSlug === 'butt-weld-fittings' || pSlug === 'fittings') && mBase === 'stainless-steel') {
    return 'stainless-steel-fittings-manufactured-in-mumbai';
  }

  // Consistent alternating pattern across all other products & materials
  const prodIndex = PRODUCT_CATEGORIES.findIndex((p) => p.slug === pSlug);
  const matIndex = MATERIAL_CATEGORIES.findIndex((m) => m.slug === mBase);
  const isMfg = ((prodIndex >= 0 ? prodIndex : 0) + (matIndex >= 0 ? matIndex : 0)) % 2 !== 0;
  const endingPhrase = isMfg ? SEO_PHRASES.MFG : SEO_PHRASES.STOCK;

  // Friendly short product descriptor
  let prodLabel = pSlug;
  if (pSlug === 'butt-weld-fittings') prodLabel = 'fittings';
  else if (pSlug === 'patapatti-strips') prodLabel = 'patapatti';
  else if (pSlug === 'dairy-pharma-fittings') prodLabel = 'dairy-pharma-fittings';

  // Friendly material descriptor
  let matLabel = mBase;
  if (mBase === 'duplex-stainless-steel') matLabel = 'duplex-steel';
  else if (mBase === 'super-duplex-stainless-steel') matLabel = 'super-duplex';

  return `${matLabel}-${prodLabel}-${endingPhrase}`;
}

export function getProductBySlug(slug) {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().trim();
  const direct = PRODUCT_CATEGORIES.find((p) => p.slug === cleanSlug);
  if (direct) return direct;

  if (cleanSlug === 'flange' || cleanSlug === 'flanges') return PRODUCT_CATEGORIES.find((p) => p.slug === 'flanges') || null;
  if (cleanSlug === 'fastener' || cleanSlug === 'fasteners') return PRODUCT_CATEGORIES.find((p) => p.slug === 'fasteners') || null;
  if (cleanSlug === 'pipes-and-tubes' || cleanSlug === 'pipes' || cleanSlug === 'tubes') return PRODUCT_CATEGORIES.find((p) => p.slug === 'pipes-tubes') || null;
  if (cleanSlug === 'sheets-and-plates' || cleanSlug === 'sheet-plate' || cleanSlug === 'sheets') return PRODUCT_CATEGORIES.find((p) => p.slug === 'sheets-plates') || null;
  if (cleanSlug === 'patapatti' || cleanSlug === 'strips') return PRODUCT_CATEGORIES.find((p) => p.slug === 'patapatti-strips') || null;
  if (cleanSlug === 'rods-and-bars' || cleanSlug === 'rods' || cleanSlug === 'bars') return PRODUCT_CATEGORIES.find((p) => p.slug === 'rods-bars') || null;
  if (cleanSlug === 'dairy-pharma' || cleanSlug === 'pharma-fittings') return PRODUCT_CATEGORIES.find((p) => p.slug === 'dairy-pharma-fittings') || null;
  if (cleanSlug === 'buttweld-fittings' || cleanSlug === 'butt-weld') return PRODUCT_CATEGORIES.find((p) => p.slug === 'butt-weld-fittings') || null;
  if (cleanSlug === 'perforated-sheet' || cleanSlug === 'perforated') return PRODUCT_CATEGORIES.find((p) => p.slug === 'perforated-sheets') || null;
  if (cleanSlug === 'wire-mesh' || cleanSlug === 'mesh') return PRODUCT_CATEGORIES.find((p) => p.slug === 'wire-mesh') || null;
  return null;
}

export function getMaterialBySlug(slug) {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().trim();
  const direct = MATERIAL_CATEGORIES.find((m) => m.slug === cleanSlug);
  if (direct) return direct;

  const baseSlug = extractBaseMaterialSlug(cleanSlug);
  if (baseSlug) {
    return MATERIAL_CATEGORIES.find((m) => m.slug === baseSlug) || null;
  }
  return null;
}

export function getGradeBySlug(gradeSlug, materialSlug = null) {
  if (!gradeSlug) return null;
  const cleanGrade = gradeSlug.toLowerCase().trim();
  if (materialSlug) {
    const cleanMat = materialSlug.toLowerCase().trim();
    const found = GRADES_DATA.find((g) => g.slug === cleanGrade && g.materialSlug === cleanMat);
    if (found) return found;
  }
  return GRADES_DATA.find((g) => g.slug === cleanGrade) || null;
}

export function getFlangeTypeBySlug(slug, materialSlug = null) {
  if (!slug) return null;
  const clean = slug.toLowerCase().trim();
  const normalized = clean.replace(/-flanges?$/i, '').replace(/_/g, '-');
  const base = FLANGE_TYPES.find((t) =>
    t.slug === clean ||
    t.slug === normalized ||
    t.slug.replace(/-/g, '') === clean.replace(/-/g, '') ||
    t.slug === `${clean}-flange` ||
    t.slug === `${clean}-flanges`
  );
  if (!base) return null;
  if (materialSlug) {
    const matImg = getTypeMaterialImage('flanges', base.slug, materialSlug);
    if (matImg) {
      return { ...base, image: matImg };
    }
  }
  return base;
}

export function getFastenerTypeBySlug(slug, materialSlug = null) {
  if (!slug) return null;
  const clean = slug.toLowerCase().trim();
  const normalized = clean.replace(/-(fasteners?|bolts?|nuts?|screws?)$/i, '').replace(/_/g, '-');
  const base = FASTENER_TYPES.find((t) =>
    t.slug === clean ||
    t.slug === normalized ||
    (clean.includes('hex') && clean.includes('bolt') && t.slug === 'hex-bolts') ||
    (clean.includes('hex') && clean.includes('nut') && t.slug === 'hex-nuts') ||
    (clean.includes('stud') && t.slug === 'stud-bolts') ||
    (clean.includes('socket') && t.slug === 'socket-head-cap-screws') ||
    (clean.includes('washer') && t.slug === 'washers')
  );
  if (!base) return null;
  if (materialSlug) {
    const matImg = getTypeMaterialImage('fasteners', base.slug, materialSlug);
    if (matImg) {
      return { ...base, image: matImg };
    }
  }
  return base;
}

export function getTypesForProduct(productSlug, materialSlug = null) {
  if (!productSlug) return [];
  const clean = productSlug.toLowerCase().trim();
  const cleanMat = materialSlug ? materialSlug.toLowerCase().trim() : null;

  if (clean === 'flanges') {
    let list = FLANGE_TYPES;
    if (cleanMat === 'carbon-steel') {
      list = FLANGE_TYPES.filter(t => ['weld-neck', 'slip-on', 'blind', 'socket-weld', 'threaded', 'lap-joint', 'orifice', 'reducing', 'long-weld-neck', 'spectacle-blind', 'square'].includes(t.slug));
    } else if (cleanMat === 'alloy-steel') {
      list = FLANGE_TYPES.filter(t => ['weld-neck', 'slip-on', 'blind', 'socket-weld', 'threaded', 'lap-joint', 'orifice', 'reducing', 'long-weld-neck', 'spectacle-blind'].includes(t.slug));
    } else if (cleanMat === 'duplex-stainless-steel' || cleanMat === 'super-duplex-stainless-steel') {
      list = FLANGE_TYPES.filter(t => ['weld-neck', 'slip-on', 'blind', 'socket-weld', 'lap-joint', 'orifice', 'reducing', 'long-weld-neck', 'spectacle-blind'].includes(t.slug));
    }

    return list.map(t => {
      const matImg = cleanMat ? getTypeMaterialImage('flanges', t.slug, cleanMat) : null;
      return {
        ...t,
        image: matImg || t.image
      };
    });
  }

  if (clean === 'fasteners') {
    let list = FASTENER_TYPES;
    return list.map(t => {
      const matImg = cleanMat ? getTypeMaterialImage('fasteners', t.slug, cleanMat) : null;
      return {
        ...t,
        image: matImg || t.image
      };
    });
  }

  return [];
}


export function getGradesForMaterial(materialSlug) {
  if (!materialSlug) return [];
  const clean = materialSlug.toLowerCase().trim();
  const explicitGrades = GRADES_DATA.filter((g) => g.materialSlug === clean);
  const material = getMaterialBySlug(clean);
  if (!material) return explicitGrades;

  const existingSlugs = new Set(explicitGrades.map((g) => g.slug));
  const additionalGrades = [];

  material.popularGrades.forEach((gName) => {
    const slug = gName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    if (!existingSlugs.has(slug)) {
      additionalGrades.push({
        id: `grade-${clean}-${slug}`,
        slug: slug,
        materialSlug: clean,
        name: `Grade ${gName}`,
        commonName: `${material.name} ${gName}`,
        unNumber: `Standard ${gName}`,
        overview: `High-integrity ${material.name} specification engineered for demanding industrial environments. Available in certified stock with complete chemical and mechanical test compliance.`,
        composition: {
          "Base Element": "Balance",
          "Alloy Additions": "Per Governing Standard",
          "Carbon (C)": "Controlled Specification"
        },
        properties: {
          "Tensile Strength": "Conforms to ASTM / ASME",
          "Yield Strength": "Conforms to ASTM / ASME",
          "Elongation": "Standard Form Spec"
        },
        governingStandards: [
          { productForm: "Pipes & Tubes", standard: `ASTM / ASME ${material.shortName} Spec` },
          { productForm: "Butt Weld Fittings", standard: `ASTM / ASME ${material.shortName} Spec` },
          { productForm: "Sheets & Plates", standard: `ASTM / ASME ${material.shortName} Spec` },
          { productForm: "Rods & Bars", standard: `ASTM / ASME ${material.shortName} Spec` },
          { productForm: "Flanges", standard: `ASTM / ASME ${material.shortName} Spec` }
        ],
        applications: [
          `Critical fluid transmission and chemical process equipment`,
          `Pressure vessel fabrication and high-reliability structures`
        ]
      });
      existingSlugs.add(slug);
    }
  });

  return [...explicitGrades, ...additionalGrades];
}

export function getMaterialsForProduct(productSlug) {
  const product = getProductBySlug(productSlug);
  if (!product) return MATERIAL_CATEGORIES;
  return MATERIAL_CATEGORIES.filter((m) => product.applicableMaterials.includes(m.slug));
}
