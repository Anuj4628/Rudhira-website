import React, { useState, useEffect, useRef } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  HelpCircle,
  Building2,
  Shield,
  ShieldCheck,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { COMPANY_DETAILS, PRODUCTS_DATA, MATERIALS_LIST, COMPANY_CERTIFICATES } from '../data/industrialData';
import CertificateModal from '../components/common/CertificateModal';

// Image assets
import contactHeroImg from '../assets/images/contact-hero.png';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage({ onNavigate, onOpenEnquiry }) {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const infoRef = useRef(null);
  const mapRef = useRef(null);
  const formSectionRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    enquiryType: 'Request for Quote',
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    product: '',
    materialGrade: '',
    quantity: '',
    preferredContact: 'WhatsApp',
    specificationDoc: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const [activeHelpCategory, setActiveHelpCategory] = useState('Pricing / Quote');

  // Copy Email & Certificate Modal State
  const [copiedEmail, setCopiedEmail] = useState(null);
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [activeCertId, setActiveCertId] = useState('iso-9001-2015');

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const handleOpenCert = (certId) => {
    setActiveCertId(certId);
    setCertModalOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        '.contact-hero-anim',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power2.out',
        }
      );

      // Info cards reveal
      gsap.fromTo(
        '.contact-info-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 80%',
          },
        }
      );

      // Map & Help reveal
      gsap.fromTo(
        '.map-help-anim',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 80%',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // Quick enquiry help categories
  const helpOptions = [
    {
      type: "Product Enquiry",
      title: "Product Enquiry",
      desc: "Standard sizes, mill specifications & catalog availability."
    },
    {
      type: "Bulk Requirement",
      title: "Bulk Requirement",
      desc: "Volume tonnage and project tenders for infrastructure."
    },
    {
      type: "Request for Quote",
      title: "Pricing / Quote",
      desc: "Fast quotation turnaround for standard and custom orders."
    },
    {
      type: "Technical Enquiry",
      title: "Technical Requirement",
      desc: "Specialized alloys, wall thickness, heat codes & test certificates."
    },
    {
      type: "General Enquiry",
      title: "General Business Enquiry",
      desc: "Commercial partnerships, dealership & vendor registration."
    }
  ];

  const handleSelectCategory = (catType) => {
    setActiveHelpCategory(catType);
    setFormData((prev) => ({ ...prev, enquiryType: catType }));
    // Smooth scroll down to the form
    const formEl = document.getElementById('quote-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required.';
    if (!formData.companyName.trim()) errors.companyName = 'Company Name is required.';

    if (!formData.phone.trim()) {
      errors.phone = 'Phone Number is required.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      errors.phone = 'Please enter a valid phone number (at least 8 digits).';
    }

    if (!formData.email.trim()) {
      errors.email = 'Official Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.product.trim()) {
      errors.product = 'Please specify the product or requirement.';
    }

    if (!formData.quantity.trim()) {
      errors.quantity = 'Please specify the quantity or tonnage required.';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please provide details or specifications for your requirement.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validateForm()) {
      const firstErrorKey = Object.keys(formErrors)[0];
      const errorField = document.querySelector(`[name="${firstErrorKey}"]`);
      if (errorField) errorField.focus();
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable submission processing
    setTimeout(() => {
      const generatedCode = 'RMI-RFQ-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceCode(generatedCode);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const generateWhatsAppMessage = () => {
    return `*RUDHIRA METAL INDUSTRIES - COMMERCIAL INQUIRY*
---------------------------------------
*Enquiry Type:* ${formData.enquiryType}
*Full Name:* ${formData.fullName || 'N/A'}
*Company:* ${formData.companyName || 'N/A'}
*Phone:* ${formData.phone || 'N/A'}
*Email:* ${formData.email || 'N/A'}
*Product / Requirement:* ${formData.product || 'General Requirement'}
*Material Grade:* ${formData.materialGrade || 'Standard'}
*Quantity / Tonnage:* ${formData.quantity || 'As required'}
*Preferred Contact:* ${formData.preferredContact}
*Details / Specs:* ${formData.message || 'Please provide quotation.'}
---------------------------------------
Sent via Rudhira Metal Official Contact Portal`;
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const msg = generateWhatsAppMessage();
    const url = `https://wa.me/${COMPANY_DETAILS.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = `[${formData.enquiryType}] ${formData.product || 'Metal Supply'} - ${formData.companyName || formData.fullName}`;
    const body = generateWhatsAppMessage();
    window.location.href = `mailto:${COMPANY_DETAILS.emails[0]}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleResetForm = () => {
    setFormData({
      enquiryType: 'Request for Quote',
      fullName: '',
      companyName: '',
      phone: '',
      email: '',
      product: '',
      materialGrade: '',
      quantity: '',
      preferredContact: 'WhatsApp',
      specificationDoc: '',
      message: '',
    });
    setFormErrors({});
    setIsSubmitted(false);
    setReferenceCode('');
  };

  return (
    <div ref={pageRef} className="pt-[88px] sm:pt-[96px] lg:pt-[104px]">
      {/* ========================================================
          CONTACT SECTION 1 — HERO
          ======================================================== */}
      <section
        ref={heroRef}
        className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center bg-[#202427] text-white overflow-hidden border-b border-[#202427]/40"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={contactHeroImg}
            alt="Rudhira Metal Industries - Corporate Client Communication & Procurement Assistance"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
            loading="eager"
          />
          {/* High-contrast gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#171A1C]/95 via-[#202427]/85 to-[#202427]/65" />
          <div className="absolute inset-0 bg-dark-grid-pattern opacity-30 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="contact-hero-anim inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#A94728] animate-pulse" />
              <span className="tech-label text-xs sm:text-[13px] font-bold tracking-widest text-[#F4E5DC] uppercase">
                CONTACT RUDHIRA METAL INDUSTRIES
              </span>
            </div>

            {/* Main Heading (76–96px desktop) */}
            <h1 className="contact-hero-anim text-4xl sm:text-6xl lg:text-[70px] xl:text-[76px] font-extrabold text-white tracking-tight leading-[1.05] mb-6 font-sans">
              Let's Build the Right Metal{' '}
              <span className="text-[#F4E5DC] block mt-1">
                Solution Together
              </span>
            </h1>

            {/* Supporting Text (18–20px desktop) */}
            <p className="contact-hero-anim text-base sm:text-lg lg:text-[20px] text-[#E7EEF2]/95 font-normal leading-relaxed mb-10 max-w-2xl font-sans">
              Have a product requirement, project enquiry or sourcing need? Our team is ready to understand your requirement and help you move forward.
            </p>

            {/* CTA Buttons - High-Contrast & Clear Font Visibility */}
            <div className="contact-hero-anim flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                href="#quote-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="contact-hero-btn inline-flex items-center gap-2.5 bg-[#A94728] hover:bg-[#8F3B20] border-2 border-[#A94728] hover:border-[#C34B2B] text-white !text-white text-sm sm:text-base font-black uppercase tracking-wider px-8 sm:px-9 py-4 rounded-sm shadow-xl shadow-[#A94728]/35 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] cursor-pointer group"
              >
                <span className="text-white !text-white font-black tracking-wider">Request a Quote</span>
                <ArrowUpRight className="w-4 h-4 text-white !text-white stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.contacts[0].cleanPhone}`}
                className="contact-hero-btn inline-flex items-center gap-2.5 bg-[#171A1C]/90 hover:bg-[#171A1C] border-2 border-white/85 hover:border-white text-white !text-white text-sm sm:text-base font-black uppercase tracking-wider px-8 sm:px-9 py-4 rounded-sm shadow-xl backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] cursor-pointer group"
              >
                <FaPhone className="w-3.5 h-3.5 text-white !text-white fill-white" />
                <span className="text-white !text-white font-black tracking-wider">Call Us ({COMPANY_DETAILS.contacts[0].phone})</span>
              </a>

              <button
                type="button"
                onClick={() => onNavigate('home', '#products')}
                className="contact-hero-btn inline-flex items-center gap-2 bg-[#171A1C]/80 hover:bg-[#171A1C] border-2 border-white/60 hover:border-white text-white !text-white text-sm sm:text-base font-black uppercase tracking-wider px-6 sm:px-7 py-4 rounded-sm shadow-lg backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] cursor-pointer"
              >
                <span className="text-white !text-white font-black tracking-wider">View Products</span>
              </button>
            </div>

            {/* Quick Badges */}
            <div className="contact-hero-anim mt-12 pt-8 border-t border-white/15 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs font-mono text-[#D9D9D6]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A94728]" />
                <span>DIRECT TECHNICAL DESK</span>
              </div>
              <span className="text-white/20 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A94728]" />
                <span>FAST QUOTATION TURNAROUND</span>
              </div>
              <span className="text-white/20 hidden md:inline">|</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A94728]" />
                <span>MUMBAI CENTRAL INDUSTRIAL SUPPLY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CONTACT SECTION 2 — CONTACT INFORMATION
          ======================================================== */}
      <section
        ref={infoRef}
        className="py-20 sm:py-24 bg-[#F8F5F1] border-b border-[#D9D9D6] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#A94728]/10 border border-[#A94728]/25 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#A94728]" />
              <span className="tech-label text-[#A94728] font-bold text-xs">
                DIRECT CONTACT CHANNELS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202427] tracking-tight leading-tight mb-4">
              Get in Touch
            </h2>

            <p className="text-base sm:text-lg text-[#202427]/75 font-normal leading-relaxed">
              We're here to help with your product requirements, enquiries and business needs. Connect with our dedicated sales and sourcing desks.
            </p>
          </div>

          {/* 4 Clean Corporate Information Cards - Equal Height Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
            {/* Card 1: Office Address */}
            <div className="contact-info-card group p-6 sm:p-7 bg-white hover:bg-[#F4E5DC]/30 border-2 border-[#D9D9D6] hover:border-[#A94728] rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-industrial flex flex-col justify-between h-full min-w-0">
              <div className="min-w-0">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-md bg-[#A94728]/10 text-[#A94728] flex items-center justify-center border border-[#A94728]/20 group-hover:bg-[#A94728] group-hover:text-white transition-colors flex-shrink-0">
                    <MapPin className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <span className="tech-label text-[10px] text-[#A94728] font-bold">
                    HQ / OFFICE
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#202427] mb-2">
                  Office & Trading Address
                </h3>

                <p className="text-xs text-[#202427]/70 mb-4">
                  Centrally located in Mumbai's primary industrial metal cluster:
                </p>

                <div className="p-3 bg-[#F8F5F1] rounded border border-[#D9D9D6] text-xs text-[#202427]/85 leading-relaxed font-sans mb-4">
                  {COMPANY_DETAILS.address}
                </div>
              </div>

              <div className="pt-4 border-t border-[#D9D9D6] flex items-center justify-between">
                <a
                  href="https://maps.google.com/?q=Shop+No.+6+Shantabi+Building+4th+Cross+Lane+Khetwadi+Mumbai+400004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A94728] hover:text-[#7E321F] group-hover:underline"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-[10px] font-mono text-[#202427]/50">MUMBAI</span>
              </div>
            </div>

            {/* Card 2: Key Phone Contacts */}
            <div className="contact-info-card group p-6 sm:p-7 bg-white hover:bg-[#F4E5DC]/30 border-2 border-[#D9D9D6] hover:border-[#A94728] rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-industrial flex flex-col justify-between h-full min-w-0">
              <div className="min-w-0">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-md bg-[#A94728]/10 text-[#A94728] flex items-center justify-center border border-[#A94728]/20 group-hover:bg-[#A94728] group-hover:text-white transition-colors flex-shrink-0">
                    <Phone className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <span className="tech-label text-[10px] text-[#A94728] font-bold">
                    DIRECT CALL
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#202427] mb-2">
                  Direct Phone Lines
                </h3>

                <p className="text-xs text-[#202427]/70 mb-4">
                  Connect immediately with our commercial management:
                </p>

                <div className="space-y-2.5 mb-4 min-w-0">
                  {COMPANY_DETAILS.contacts.map((contact) => (
                    <div key={contact.name} className="p-2.5 bg-[#F8F5F1] rounded border border-[#D9D9D6] text-xs min-w-0 transition-colors hover:border-[#A94728]/50">
                      <div className="font-bold text-[#202427] mb-1 flex items-center justify-between gap-1">
                        <span className="truncate text-[11px] uppercase tracking-wider text-[#6B7280]">{contact.name}</span>
                        <a
                          href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(COMPANY_DETAILS.whatsappDefaultMsg)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#25D366] hover:scale-110 transition-transform flex-shrink-0"
                          title={`Chat with ${contact.name} on WhatsApp`}
                        >
                          <FaWhatsapp className="w-3.5 h-3.5" />
                        </a>
                      </div>
                      <a
                        href={`tel:${contact.cleanPhone}`}
                        className="font-mono text-[#A94728] hover:underline font-bold block truncate text-xs"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#D9D9D6] flex items-center justify-between">
                <span className="text-[11px] text-[#202427]/60 font-mono">
                  Direct Commercial Lines
                </span>
                <span className="text-[10px] font-mono text-[#25D366] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  ACTIVE
                </span>
              </div>
            </div>

            {/* Card 3: Official Email Inboxes (Cleanly Aligned with Copy Support) */}
            <div className="contact-info-card group p-6 sm:p-7 bg-white hover:bg-[#F4E5DC]/30 border-2 border-[#D9D9D6] hover:border-[#A94728] rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-industrial flex flex-col justify-between h-full min-w-0">
              <div className="min-w-0">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-md bg-[#A94728]/10 text-[#A94728] flex items-center justify-center border border-[#A94728]/20 group-hover:bg-[#A94728] group-hover:text-white transition-colors flex-shrink-0">
                    <Mail className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <span className="tech-label text-[10px] text-[#A94728] font-bold">
                    EMAIL INBOXES
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#202427] mb-2">
                  Official Email Desks
                </h3>

                <p className="text-xs text-[#202427]/70 mb-4">
                  Send material lists, project BOQ & specification sheets:
                </p>

                <div className="space-y-2.5 mb-4 min-w-0">
                  {/* Email 1: Sales Desk */}
                  <div className="p-2.5 bg-[#F8F5F1] rounded border border-[#D9D9D6] text-xs min-w-0 transition-colors hover:border-[#A94728]/50">
                    <div className="font-bold text-[#202427] mb-1 flex items-center justify-between gap-1">
                      <span className="truncate text-[11px] uppercase tracking-wider text-[#6B7280]">Sales & RFQ Desk</span>
                      <button
                        type="button"
                        onClick={() => handleCopyEmail(COMPANY_DETAILS.emails[0])}
                        className="text-[10px] font-mono font-bold text-[#A94728] hover:underline flex items-center gap-1 cursor-pointer"
                        title="Copy sales email"
                      >
                        {copiedEmail === COMPANY_DETAILS.emails[0] ? (
                          <span className="text-[#25D366] font-bold">Copied!</span>
                        ) : (
                          <span>Copy</span>
                        )}
                      </button>
                    </div>
                    <a
                      href={`mailto:${COMPANY_DETAILS.emails[0]}`}
                      className="font-mono text-[#A94728] hover:underline font-bold block truncate text-xs"
                      title={COMPANY_DETAILS.emails[0]}
                    >
                      {COMPANY_DETAILS.emails[0]}
                    </a>
                  </div>

                  {/* Email 2: Technical / Info Desk */}
                  <div className="p-2.5 bg-[#F8F5F1] rounded border border-[#D9D9D6] text-xs min-w-0 transition-colors hover:border-[#A94728]/50">
                    <div className="font-bold text-[#202427] mb-1 flex items-center justify-between gap-1">
                      <span className="truncate text-[11px] uppercase tracking-wider text-[#6B7280]">Info & Tech Desk</span>
                      <button
                        type="button"
                        onClick={() => handleCopyEmail(COMPANY_DETAILS.emails[1])}
                        className="text-[10px] font-mono font-bold text-[#A94728] hover:underline flex items-center gap-1 cursor-pointer"
                        title="Copy info email"
                      >
                        {copiedEmail === COMPANY_DETAILS.emails[1] ? (
                          <span className="text-[#25D366] font-bold">Copied!</span>
                        ) : (
                          <span>Copy</span>
                        )}
                      </button>
                    </div>
                    <a
                      href={`mailto:${COMPANY_DETAILS.emails[1]}`}
                      className="font-mono text-[#202427] hover:text-[#A94728] hover:underline font-bold block truncate text-xs"
                      title={COMPANY_DETAILS.emails[1]}
                    >
                      {COMPANY_DETAILS.emails[1]}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D9D9D6] flex items-center justify-between">
                <span className="text-[11px] text-[#202427]/60 font-mono">
                  Official Inboxes
                </span>
                <a
                  href={`mailto:${COMPANY_DETAILS.emails[0]}`}
                  className="text-xs font-bold text-[#A94728] hover:underline flex items-center gap-1"
                >
                  <span>Write Email</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Card 4: Business Hours & Sourcing Hub */}
            <div className="contact-info-card group p-6 sm:p-7 bg-white hover:bg-[#F4E5DC]/30 border-2 border-[#D9D9D6] hover:border-[#A94728] rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-industrial flex flex-col justify-between h-full min-w-0">
              <div className="min-w-0">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-md bg-[#A94728]/10 text-[#A94728] flex items-center justify-center border border-[#A94728]/20 group-hover:bg-[#A94728] group-hover:text-white transition-colors flex-shrink-0">
                    <Clock className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <span className="tech-label text-[10px] text-[#A94728] font-bold">
                    OPERATING HOURS
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#202427] mb-2">
                  Trading & Dispatch Desk
                </h3>

                <p className="text-xs text-[#202427]/70 mb-4">
                  Standard operating & dispatch counter timings:
                </p>

                <div className="space-y-2 text-xs text-[#202427]/80 mb-4 min-w-0">
                  <div className="flex items-center justify-between p-2 bg-[#F8F5F1] rounded border border-[#D9D9D6] gap-2">
                    <span className="font-semibold text-[#202427] whitespace-nowrap">Mon – Sat:</span>
                    <span className="font-mono text-[#A94728] font-bold text-right">9:30 AM – 7:30 PM</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-[#F8F5F1] rounded border border-[#D9D9D6] gap-2">
                    <span className="font-semibold text-[#202427] whitespace-nowrap">Sunday:</span>
                    <span className="font-mono text-[#202427]/60 text-right">Closed (By Appointment)</span>
                  </div>
                  <div className="pt-1 text-[11px] text-[#202427]/70 leading-relaxed break-words">
                    <strong>Dispatch Hub:</strong> Khetwadi Metal Cluster, Mumbai
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D9D9D6] flex items-center justify-between">
                <span className="text-[11px] text-[#202427]/60 font-mono">
                  Timezone: IST (GMT +5:30)
                </span>
                <span className="text-[10px] font-mono text-[#A94728] font-bold">
                  FAST DISPATCH
                </span>
              </div>
            </div>
          </div>

          {/* Statutory Registration & Quality Accreditations Strip */}
          <div className="mt-8 p-5 sm:p-6 bg-white border-2 border-[#D9D9D6] rounded-xl shadow-xs flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="font-bold text-[#202427]">GOVERNMENT OF INDIA GSTIN:</span>
                <span className="bg-[#F8F5F1] px-2.5 py-1 rounded border border-[#D9D9D6] text-[#A94728] font-bold">
                  27BXMPP3576J1ZQ
                </span>
              </div>

              <span className="text-[#D9D9D6] hidden md:inline">|</span>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A94728]" />
                <span className="font-bold text-[#202427]">QUALITY ACCREDITATION:</span>
                <span className="bg-[#F8F5F1] px-2.5 py-1 rounded border border-[#D9D9D6] text-[#202427] font-bold">
                  ISO 9001:2015 CERTIFIED
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
              <button
                type="button"
                onClick={() => handleOpenCert('iso-9001-2015')}
                className="btn-wave inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#A94728] text-[#A94728] rounded text-xs font-mono font-bold transition-all cursor-pointer"
              >
                <span>View ISO Certificate</span>
                <ExternalLink className="w-3 h-3" />
              </button>

              <button
                type="button"
                onClick={() => handleOpenCert('gst-registration')}
                className="btn-wave inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#202427]/40 text-[#202427] rounded text-xs font-mono font-bold transition-all cursor-pointer"
              >
                <span>View GST Certificate</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CONTACT SECTION 3 — MAP + QUICK SUPPORT
          ======================================================== */}
      <section
        ref={mapRef}
        className="py-20 sm:py-24 bg-white border-b border-[#D9D9D6] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* LEFT Column: Interactive Google Map */}
            <div className="map-help-anim lg:col-span-6 flex flex-col">
              <div className="mb-4">
                <div className="tech-label text-xs font-bold text-[#A94728] tracking-widest uppercase mb-1">
                  LOCATION & VISITATION
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202427] tracking-tight">
                  Our Mumbai Trading Counter
                </h3>
                <p className="text-xs sm:text-sm text-[#202427]/70 mt-1">
                  Centrally located in Khetwadi, Mumbai's primary metal and hardware commercial cluster.
                </p>
              </div>

              {/* Map Embed Frame */}
              <div className="relative rounded-lg overflow-hidden border-2 border-[#D9D9D6] shadow-industrial bg-[#F8F5F1] h-[380px] sm:h-[420px] w-full">
                <iframe
                  title="Rudhira Metal Industries Location Map"
                  src="https://maps.google.com/maps?q=Shop+No.+6+Shantabi+Building+4th+Cross+Lane+Khetwadi+Mumbai+400004&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-[1.1]"
                />

                {/* Map Bottom Bar */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#202427]/90 backdrop-blur-md text-white p-3 rounded-md border border-white/20 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#A94728] flex-shrink-0" />
                    <span className="font-mono text-[11px] truncate max-w-[220px] sm:max-w-xs">
                      Shop No. 6, Shantabi Bldg, 4th Cross Lane, Khetwadi
                    </span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Shop+No.+6+Shantabi+Building+4th+Cross+Lane+Khetwadi+Mumbai+400004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#F4E5DC] hover:text-white transition-colors"
                  >
                    <span>Enlarge Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT Column: "How Can We Help?" + Quick Enquiry Selectors */}
            <div className="map-help-anim lg:col-span-6 flex flex-col">
              <div className="mb-4">
                <div className="tech-label text-xs font-bold text-[#A94728] tracking-widest uppercase mb-1">
                  GUIDED PROCUREMENT
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202427] tracking-tight">
                  How Can We Help?
                </h3>
                <p className="text-xs sm:text-sm text-[#202427]/70 mt-1">
                  Select your requirement category below to automatically configure the inquiry form:
                </p>
              </div>

              {/* 5 Selectable Quick Help Categories */}
              <div className="space-y-3 mb-6">
                {helpOptions.map((opt) => {
                  const isSelected = activeHelpCategory === opt.type;
                  return (
                    <div
                      key={opt.type}
                      onClick={() => handleSelectCategory(opt.type)}
                      className={`p-3.5 rounded-lg border-2 transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#F4E5DC]/50 border-[#A94728] shadow-xs'
                          : 'bg-[#F8F5F1] border-[#D9D9D6] hover:border-[#A94728]/50 hover:bg-white'
                      }`}
                    >
                      <div className="pr-3">
                        <div className="text-xs sm:text-sm font-extrabold text-[#202427] flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              isSelected ? 'bg-[#A94728]' : 'bg-[#D9D9D6]'
                            }`}
                          />
                          <span>{opt.title}</span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-[#202427]/70 mt-0.5 ml-4">
                          {opt.desc}
                        </p>
                      </div>

                      <div className="flex-shrink-0">
                        <span
                          className={`text-xs font-mono font-bold px-2 py-1 rounded ${
                            isSelected
                              ? 'bg-[#A94728] text-white'
                              : 'bg-white text-[#202427]/60 border border-[#D9D9D6]'
                          }`}
                        >
                          {isSelected ? 'SELECTED' : 'SELECT →'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Small Support CTA Card */}
              <div className="p-4 bg-[#202427] text-white rounded-lg border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-[#A94728]" />
                    <span>Need Help Choosing the Right Product?</span>
                  </div>
                  <p className="text-[11px] text-[#D9D9D6]/80 mt-0.5">
                    Talk directly to our metallurgical sales specialists.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={onOpenEnquiry}
                    className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/25 text-[#F4E5DC] text-xs font-bold px-3 py-1.5 rounded-sm transition-colors cursor-pointer"
                  >
                    <span>Quick Modal RFQ</span>
                  </button>
                  <a
                    href={`tel:${COMPANY_DETAILS.contacts[0].cleanPhone}`}
                    className="inline-flex items-center gap-1.5 bg-[#A94728] hover:bg-[#7E321F] text-white text-xs font-bold px-3 py-1.5 rounded-sm transition-colors cursor-pointer"
                  >
                    <FaPhone className="w-2.5 h-2.5" />
                    <span>Call Desk</span>
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY_DETAILS.contacts[0].whatsappNumber}?text=${encodeURIComponent(COMPANY_DETAILS.whatsappDefaultMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-3 py-1.5 rounded-sm transition-colors cursor-pointer"
                  >
                    <FaWhatsapp className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CONTACT SECTION 4 — GET A QUOTE / ENQUIRY FORM
          ======================================================== */}
      <section
        id="quote-form"
        ref={formSectionRef}
        className="py-20 sm:py-24 lg:py-28 bg-[#F4E5DC] border-b border-[#D9D9D6] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-80 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mx-auto max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#A94728]/10 border border-[#A94728]/25 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#A94728]" />
              <span className="tech-label text-[#A94728] font-bold text-xs">
                COMMERCIAL DESK // RFQ TERMINAL
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202427] tracking-tight leading-tight mb-4">
              Request a Quote
            </h2>

            <p className="text-base sm:text-lg text-[#202427]/75 font-normal max-w-2xl mx-auto leading-relaxed">
              Tell us what you need and our team will get back to you with the right information, stock availability, and commercial proposal.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white border-2 border-[#D9D9D6] rounded-xl shadow-industrial overflow-hidden relative">
            <div className="corner-bracket-tl" />
            <div className="corner-bracket-br" />

            {/* Form Top Terminal Strip */}
            <div className="bg-[#202427] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#A94728]/40">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#A94728] animate-pulse" />
                <span className="tech-label text-xs sm:text-sm font-bold tracking-widest uppercase">
                  RFQ SPECIFICATION INQUIRY // RUDHIRA METAL INDUSTRIES
                </span>
              </div>
              <div className="font-mono text-xs text-[#D9D9D6]/70">
                ACTIVE MODE: <span className="text-[#A94728] font-bold">{formData.enquiryType.toUpperCase()}</span>
              </div>
            </div>

            {/* Submission State Rendering */}
            {isSubmitted ? (
              <div className="p-8 sm:p-14 text-center bg-[#F8F5F1]">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#A94728]/10 text-[#A94728] rounded-full flex items-center justify-center border-2 border-[#A94728]/30">
                  <CheckCircle2 className="w-12 h-12" />
                </div>

                <div className="tech-label text-xs font-bold text-[#A94728] tracking-widest uppercase mb-2">
                  SUBMISSION SUCCESSFUL
                </div>

                <h3 className="text-3xl font-extrabold text-[#202427] mb-3">
                  Thank You!
                </h3>

                <p className="text-base text-[#202427]/80 max-w-lg mx-auto mb-8 leading-relaxed">
                  Your enquiry has been received. Our team will review your specifications and get back to you shortly.
                </p>

                {/* RFQ Reference Card */}
                <div className="p-6 bg-white border-2 border-[#D9D9D6] rounded-lg max-w-md mx-auto mb-8 font-mono text-xs text-left space-y-2 shadow-xs">
                  <div className="flex items-center justify-between border-b border-[#D9D9D6] pb-2">
                    <span className="text-[#6B7280]">REFERENCE NUMBER:</span>
                    <strong className="text-[#A94728] text-sm">{referenceCode}</strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#D9D9D6] pb-2">
                    <span className="text-[#6B7280]">NAME / COMPANY:</span>
                    <strong className="text-[#202427]">{formData.fullName} ({formData.companyName})</strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#D9D9D6] pb-2">
                    <span className="text-[#6B7280]">REQUIREMENT:</span>
                    <strong className="text-[#202427]">{formData.product}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B7280]">DESK INBOX:</span>
                    <strong className="text-[#A94728]">{COMPANY_DETAILS.emails[0]}</strong>
                  </div>
                </div>

                {/* Instant Actions */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={handleSendWhatsApp}
                    className="btn-wave inline-flex items-center gap-2 border border-[#25D366] text-[#25D366] px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Forward via WhatsApp</span>
                  </button>

                  <button
                    onClick={handleSendEmail}
                    className="btn-wave inline-flex items-center gap-2 border border-[#202427]/40 text-[#202427] px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 shadow-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email Client</span>
                  </button>

                  <button
                    onClick={handleResetForm}
                    className="btn-wave inline-flex items-center gap-2 border border-[#D9D9D6] text-[#202427] px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95"
                  >
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-10 bg-[#F8F5F1]">
                {/* Dropdown 1: Enquiry Type */}
                <div className="mb-6 pb-6 border-b border-[#D9D9D6]">
                  <label className="block text-xs font-mono font-bold text-[#202427] uppercase mb-2">
                    Select Enquiry Type *
                  </label>
                  <select
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-sm bg-white border-2 border-[#D9D9D6] rounded-sm focus:outline-none focus:border-[#A94728] font-medium text-[#202427]"
                  >
                    <option value="Product Enquiry">Product Enquiry (Catalog & Availability)</option>
                    <option value="Request for Quote">Request for Quote (Standard / Custom RFQ)</option>
                    <option value="Bulk Requirement">Bulk Requirement (Volume Project Sourcing)</option>
                    <option value="Technical Enquiry">Technical Enquiry (Alloys, Standards & MTC)</option>
                    <option value="General Enquiry">General Enquiry (Commercial & Vendor Queries)</option>
                  </select>
                </div>

                {/* Section: Contact Details */}
                <div className="mb-6 pb-6 border-b border-[#D9D9D6]">
                  <div className="tech-label text-xs font-bold text-[#A94728] tracking-widest uppercase mb-4">
                    01 — CONTACT DETAILS
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#202427] uppercase mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Ramesh Patel"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border-2 rounded-sm focus:outline-none transition-colors ${
                          formErrors.fullName ? 'border-red-500 bg-red-50/30' : 'border-[#D9D9D6] focus:border-[#A94728]'
                        }`}
                      />
                      {formErrors.fullName && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{formErrors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#202427] uppercase mb-1.5">
                        Company / Enterprise Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="e.g. Apex Industrial Solutions Pvt Ltd"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border-2 rounded-sm focus:outline-none transition-colors ${
                          formErrors.companyName ? 'border-red-500 bg-red-50/30' : 'border-[#D9D9D6] focus:border-[#A94728]'
                        }`}
                      />
                      {formErrors.companyName && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{formErrors.companyName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#202427] uppercase mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border-2 rounded-sm focus:outline-none transition-colors ${
                          formErrors.phone ? 'border-red-500 bg-red-50/30' : 'border-[#D9D9D6] focus:border-[#A94728]'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{formErrors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#202427] uppercase mb-1.5">
                        Official Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="procurement@company.com"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border-2 rounded-sm focus:outline-none transition-colors ${
                          formErrors.email ? 'border-red-500 bg-red-50/30' : 'border-[#D9D9D6] focus:border-[#A94728]'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{formErrors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Section: Product & Technical Requirements */}
                <div className="mb-6 pb-6 border-b border-[#D9D9D6]">
                  <div className="tech-label text-xs font-bold text-[#A94728] tracking-widest uppercase mb-4">
                    02 — PRODUCT SPECIFICATION
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
                    {/* Product Category / Requirement */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#202427] uppercase mb-1.5">
                        Product / Requirement *
                      </label>
                      <select
                        name="product"
                        value={formData.product}
                        onChange={handleInputChange}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border-2 rounded-sm focus:outline-none transition-colors ${
                          formErrors.product ? 'border-red-500 bg-red-50/30' : 'border-[#D9D9D6] focus:border-[#A94728]'
                        }`}
                      >
                        <option value="">Select Product...</option>
                        {PRODUCTS_DATA.map((p) => (
                          <option key={p.name} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                        <option value="Forge Fittings">Forge Fittings</option>
                        <option value="Carbon Steel Pipes">Carbon Steel Pipes</option>
                        <option value="Stainless Steel Tubes">Stainless Steel Tubes</option>
                        <option value="Forged Flanges (A182)">Forged Flanges (A182)</option>
                        <option value="Round & Hex Bars">Round & Hex Bars</option>
                        <option value="Specialty High Alloys">Specialty High Alloys</option>
                        <option value="Other / Custom Material">Other / Custom Material</option>
                      </select>
                      {formErrors.product && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{formErrors.product}</span>
                        </p>
                      )}
                    </div>

                    {/* Material Grade / Alloy */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#202427] uppercase mb-1.5">
                        Material Grade / Alloy (Optional)
                      </label>
                      <select
                        name="materialGrade"
                        value={formData.materialGrade}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border-2 border-[#D9D9D6] rounded-sm focus:outline-none focus:border-[#A94728]"
                      >
                        <option value="">Select Material Grade...</option>
                        {MATERIALS_LIST.map((mat) => (
                          <option key={mat} value={mat}>
                            {mat}
                          </option>
                        ))}
                        <option value="SS 304 / 304L">SS 304 / 304L</option>
                        <option value="SS 316 / 316L">SS 316 / 316L</option>
                        <option value="SS 321 / 321H">SS 321 / 321H</option>
                        <option value="SS 310S">SS 310S</option>
                        <option value="Duplex 2205 (S31803)">Duplex 2205 (S31803)</option>
                        <option value="Super Duplex 2507">Super Duplex 2507</option>
                        <option value="ASTM A106 Gr. B (Carbon)">ASTM A106 Gr. B (Carbon)</option>
                        <option value="Client Specific Grade">Client Specific Grade</option>
                      </select>
                    </div>

                    {/* Quantity / Tonnage */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#202427] uppercase mb-1.5">
                        Quantity / Tonnage *
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        placeholder="e.g. 500 Mtr / 2.5 Tons / 150 Pcs"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border-2 rounded-sm focus:outline-none transition-colors ${
                          formErrors.quantity ? 'border-red-500 bg-red-50/30' : 'border-[#D9D9D6] focus:border-[#A94728]'
                        }`}
                      />
                      {formErrors.quantity && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{formErrors.quantity}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Preferred Contact Method */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#202427] uppercase mb-1.5">
                        Preferred Contact Method (Optional)
                      </label>
                      <select
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border-2 border-[#D9D9D6] rounded-sm focus:outline-none focus:border-[#A94728]"
                      >
                        <option value="WhatsApp">WhatsApp Message</option>
                        <option value="Phone Call">Direct Phone Call</option>
                        <option value="Email">Official Email Response</option>
                      </select>
                    </div>

                    {/* Specification / File Reference */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#202427] uppercase mb-1.5">
                        Requirement Document / Drawing Ref (Optional)
                      </label>
                      <input
                        type="text"
                        name="specificationDoc"
                        value={formData.specificationDoc}
                        onChange={handleInputChange}
                        placeholder="e.g. Drawing #DWG-402 or BOQ Schedule"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border-2 border-[#D9D9D6] rounded-sm focus:outline-none focus:border-[#A94728]"
                      />
                    </div>
                  </div>
                </div>

                {/* Section: Message & Details */}
                <div className="mb-6">
                  <label className="block text-xs font-mono font-bold text-[#202427] uppercase mb-1.5">
                    Message / Requirement Details *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please specify outer diameter, wall thickness / schedule, standard (ASTM/ASME), cut lengths, delivery destination, and any testing requirements (PMI, Ultrasonic, Hydrostatic)..."
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border-2 rounded-sm focus:outline-none transition-colors ${
                      formErrors.message ? 'border-red-500 bg-red-50/30' : 'border-[#D9D9D6] focus:border-[#A94728]'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" />
                      <span>{formErrors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Row with Multi-Channel Action */}
                <div className="pt-6 border-t border-[#D9D9D6] flex flex-wrap items-center justify-between gap-4">
                  {/* Left: Quick fallback actions */}
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="btn-wave inline-flex items-center gap-2 border border-[#25D366] text-[#25D366] px-4 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 shadow-xs"
                      title="Send directly on WhatsApp"
                    >
                      <FaWhatsapp className="w-3.5 h-3.5" />
                      <span>Forward on WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendEmail}
                      className="btn-wave inline-flex items-center gap-2 border border-[#202427]/40 text-[#202427] px-4 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 shadow-xs"
                      title="Open draft in Email client"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Email</span>
                    </button>
                  </div>

                  {/* Right: Primary Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-wave inline-flex items-center gap-2 border-2 border-[#A94728] text-[#A94728] disabled:opacity-60 px-8 py-3.5 rounded-sm text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-150 shadow-md active:scale-95 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Logging RFQ...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================
          CONTACT SECTION 5 — WHY CONTACT US STRIP & EXTRA DETAILS
          ======================================================== */}
      <section className="py-14 sm:py-16 bg-[#202427] text-white border-b border-black/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Point 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-white/10 text-[#F4E5DC] flex items-center justify-center border border-white/20 flex-shrink-0">
                <Clock className="w-6 h-6 text-[#A94728]" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-white mb-1">
                  Quick Response
                </h4>
                <p className="text-xs text-[#D9D9D6]/80 leading-relaxed">
                  Our dedicated commercial sales desk ensures prompt quotation turnarounds and technical clarity within standard trading hours.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-white/10 text-[#F4E5DC] flex items-center justify-center border border-white/20 flex-shrink-0">
                <Shield className="w-6 h-6 text-[#A94728]" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-white mb-1">
                  Reliable Guidance
                </h4>
                <p className="text-xs text-[#D9D9D6]/80 leading-relaxed">
                  Accurate metallurgical consultation on material grades, wall schedules, pressure classes, and equivalent international standards.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-white/10 text-[#F4E5DC] flex items-center justify-center border border-white/20 flex-shrink-0">
                <Building2 className="w-6 h-6 text-[#A94728]" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-white mb-1">
                  Industrial Expertise
                </h4>
                <p className="text-xs text-[#D9D9D6]/80 leading-relaxed">
                  Decades of combined market experience stocking, sourcing, and exporting mission-critical piping, fittings, flanges, and round bars.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Certificate Verification Modal */}
      <CertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        initialCertId={activeCertId}
      />
    </div>
  );
}

