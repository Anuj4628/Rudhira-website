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
  ArrowRight,
  HelpCircle,
  Building2,
  Shield,
  ShieldCheck,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
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
  const helpSectionRef = useRef(null);
  const formSectionRef = useRef(null);

  // Form State - Clean 8 Requirement Fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    quantity: '',
    specification: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const [activeHelpCategory, setActiveHelpCategory] = useState('Request for Quote');

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

      // Map reveal
      gsap.fromTo(
        '.contact-map-anim',
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

      // Procurement Help reveal
      gsap.fromTo(
        '.contact-procure-anim',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: helpSectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // Quick enquiry help categories (Exact 5 categories & descriptions)
  const helpOptions = [
    {
      type: "Product Enquiry",
      title: "Product Enquiry",
      desc: "Standard sizes, mill specifications, and catalog availability."
    },
    {
      type: "Bulk Requirement",
      title: "Bulk Requirement",
      desc: "Volume tonnage and project tenders for infrastructure."
    },
    {
      type: "Request for Quote",
      title: "Pricing / Quote",
      desc: "Quotation requests for standard and custom orders."
    },
    {
      type: "Technical Enquiry",
      title: "Technical Requirement",
      desc: "Specialized alloys, wall thickness, heat codes, and test certificates."
    },
    {
      type: "General Enquiry",
      title: "General Business Enquiry",
      desc: "Commercial partnerships, dealership, and vendor registration."
    }
  ];

  const handleSelectCategory = (catType) => {
    setActiveHelpCategory(catType);
    setFormData((prev) => ({ ...prev, product: prev.product || catType }));
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
    if (!formData.name?.trim()) {
      errors.name = 'Name is required.';
    }

    if (!formData.email?.trim()) {
      errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone?.trim()) {
      errors.phone = 'Phone Number is required.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      errors.phone = 'Please enter a valid phone number (at least 8 digits).';
    }

    if (!formData.product?.trim()) {
      errors.product = 'Product / Material Required is required.';
    }

    if (!formData.quantity?.trim()) {
      errors.quantity = 'Quantity is required.';
    }

    if (!formData.message?.trim()) {
      errors.message = 'Requirement / message is required.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      const firstErrorKey = Object.keys(formErrors)[0];
      const errorField = document.querySelector(`[name="${firstErrorKey}"]`);
      if (errorField) errorField.focus();
      return;
    }

    const generatedCode = 'RMI-RFQ-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceCode(generatedCode);
    setIsSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    let msg = `Hello RUDHIRA METAL INDUSTRIES,\n\nI would like to request a quotation.\n\n`;
    msg += `CUSTOMER DETAILS\n`;
    if (formData.name?.trim()) msg += `Name: ${formData.name.trim()}\n`;
    if (formData.email?.trim()) msg += `Email: ${formData.email.trim()}\n`;
    if (formData.phone?.trim()) msg += `Phone: ${formData.phone.trim()}\n`;
    if (formData.company?.trim()) msg += `Company: ${formData.company.trim()}\n`;

    const productReqs = [];
    if (formData.product?.trim()) productReqs.push(`Product / Material: ${formData.product.trim()}`);
    if (formData.quantity?.trim()) productReqs.push(`Quantity: ${formData.quantity.trim()}`);
    if (formData.specification?.trim()) productReqs.push(`Specification / Grade: ${formData.specification.trim()}`);

    if (productReqs.length > 0) {
      msg += `\nPRODUCT REQUIREMENTS\n${productReqs.join('\n')}\n`;
    }

    if (formData.message?.trim()) {
      msg += `\nREQUIREMENT / MESSAGE\n${formData.message.trim()}\n`;
    }

    msg += `\nPlease review my requirements and share your quotation.\n\nThank you.`;
    return msg;
  };

  const generateGmailMessage = () => {
    let body = `Dear RUDHIRA METAL INDUSTRIES Team,\n\nI would like to request a quotation for the following requirements.\n\n`;
    body += `CUSTOMER DETAILS\n`;
    if (formData.name?.trim()) body += `Name: ${formData.name.trim()}\n`;
    if (formData.email?.trim()) body += `Email: ${formData.email.trim()}\n`;
    if (formData.phone?.trim()) body += `Phone: ${formData.phone.trim()}\n`;
    if (formData.company?.trim()) body += `Company: ${formData.company.trim()}\n`;

    const productReqs = [];
    if (formData.product?.trim()) productReqs.push(`Product / Material: ${formData.product.trim()}`);
    if (formData.quantity?.trim()) productReqs.push(`Quantity: ${formData.quantity.trim()}`);
    if (formData.specification?.trim()) productReqs.push(`Specification / Grade: ${formData.specification.trim()}`);

    if (productReqs.length > 0) {
      body += `\nPRODUCT REQUIREMENTS\n${productReqs.join('\n')}\n`;
    }

    if (formData.message?.trim()) {
      body += `\nREQUIREMENT / MESSAGE\n${formData.message.trim()}\n`;
    }

    body += `\nKindly review the above details and share your quotation, pricing, and applicable delivery information.\n\n`;
    body += `Regards,\n${formData.name?.trim() || 'Client'}`;
    return body;
  };

  const handleSendWhatsApp = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const msg = generateWhatsAppMessage();
    const cleanPhone = COMPANY_DETAILS.whatsappNumber.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendGmail = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const subject = `Quotation Request | RUDHIRA METAL INDUSTRIES${formData.product ? ` | ${formData.product}` : ''}`;
    const body = generateGmailMessage();
    const recipient = COMPANY_DETAILS.emails[0];
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSendEmail = handleSendGmail;

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      product: '',
      quantity: '',
      specification: '',
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
              <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
              <span className="tech-label text-xs sm:text-[13px] font-bold tracking-widest text-[#EEF3FA] uppercase">
                CONTACT RUDHIRA METAL INDUSTRIES
              </span>
            </div>

            {/* Main Heading (76–96px desktop) */}
            <h1 className="contact-hero-anim text-4xl sm:text-6xl lg:text-[70px] xl:text-[76px] font-extrabold text-white tracking-tight leading-[1.05] mb-6 font-sans">
              Let's Build the Right Metal{' '}
              <span className="text-[#EEF3FA] block mt-1">
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
                className="contact-hero-btn inline-flex items-center gap-2.5 bg-[#123F91] hover:bg-[#0B2863] border-2 border-[#123F91] hover:border-[#1D4FA3] text-white !text-white text-sm sm:text-base font-black uppercase tracking-wider px-8 sm:px-9 py-4 rounded-sm shadow-xl shadow-[#123F91]/35 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] cursor-pointer group"
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
                <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                <span>DIRECT TECHNICAL DESK</span>
              </div>
              <span className="text-white/20 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                <span>FAST QUOTATION TURNAROUND</span>
              </div>
              <span className="text-white/20 hidden md:inline">|</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#123F91]/10 border border-[#123F91]/25 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#123F91]" />
              <span className="tech-label text-[#123F91] font-bold text-xs">
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
            <div className="contact-info-card group p-6 sm:p-7 bg-white hover:bg-[#EEF3FA]/30 border-2 border-[#D9D9D6] hover:border-[#123F91] rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-industrial flex flex-col justify-between h-full min-w-0">
              <div className="min-w-0">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-md bg-[#123F91]/10 text-[#123F91] flex items-center justify-center border border-[#123F91]/20 group-hover:bg-[#123F91] group-hover:text-white transition-colors flex-shrink-0">
                    <MapPin className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <span className="tech-label text-[10px] text-[#123F91] font-bold">
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
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123F91] hover:text-[#0B2863] group-hover:underline"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-[10px] font-mono text-[#202427]/50">MUMBAI</span>
              </div>
            </div>

            {/* Card 2: Key Phone Contacts */}
            <div className="contact-info-card group p-6 sm:p-7 bg-white hover:bg-[#EEF3FA]/30 border-2 border-[#D9D9D6] hover:border-[#123F91] rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-industrial flex flex-col justify-between h-full min-w-0">
              <div className="min-w-0">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-md bg-[#123F91]/10 text-[#123F91] flex items-center justify-center border border-[#123F91]/20 group-hover:bg-[#123F91] group-hover:text-white transition-colors flex-shrink-0">
                    <Phone className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <span className="tech-label text-[10px] text-[#123F91] font-bold">
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
                    <div key={contact.name} className="p-2.5 bg-[#F8F5F1] rounded border border-[#D9D9D6] text-xs min-w-0 transition-colors hover:border-[#123F91]/50">
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
                        className="font-mono text-[#123F91] hover:underline font-bold block truncate text-xs"
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
            <div className="contact-info-card group p-6 sm:p-7 bg-white hover:bg-[#EEF3FA]/30 border-2 border-[#D9D9D6] hover:border-[#123F91] rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-industrial flex flex-col justify-between h-full min-w-0">
              <div className="min-w-0">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-md bg-[#123F91]/10 text-[#123F91] flex items-center justify-center border border-[#123F91]/20 group-hover:bg-[#123F91] group-hover:text-white transition-colors flex-shrink-0">
                    <Mail className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <span className="tech-label text-[10px] text-[#123F91] font-bold">
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
                  <div className="p-2.5 bg-[#F8F5F1] rounded border border-[#D9D9D6] text-xs min-w-0 transition-colors hover:border-[#123F91]/50">
                    <div className="font-bold text-[#202427] mb-1 flex items-center justify-between gap-1">
                      <span className="truncate text-[11px] uppercase tracking-wider text-[#6B7280]">Sales & RFQ Desk</span>
                      <button
                        type="button"
                        onClick={() => handleCopyEmail(COMPANY_DETAILS.emails[0])}
                        className="text-[10px] font-mono font-bold text-[#123F91] hover:underline flex items-center gap-1 cursor-pointer"
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
                      className="font-mono text-[#123F91] hover:underline font-bold block truncate text-xs"
                      title={COMPANY_DETAILS.emails[0]}
                    >
                      {COMPANY_DETAILS.emails[0]}
                    </a>
                  </div>

                  {/* Email 2: Technical / Info Desk */}
                  <div className="p-2.5 bg-[#F8F5F1] rounded border border-[#D9D9D6] text-xs min-w-0 transition-colors hover:border-[#123F91]/50">
                    <div className="font-bold text-[#202427] mb-1 flex items-center justify-between gap-1">
                      <span className="truncate text-[11px] uppercase tracking-wider text-[#6B7280]">Info & Tech Desk</span>
                      <button
                        type="button"
                        onClick={() => handleCopyEmail(COMPANY_DETAILS.emails[1])}
                        className="text-[10px] font-mono font-bold text-[#123F91] hover:underline flex items-center gap-1 cursor-pointer"
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
                      className="font-mono text-[#202427] hover:text-[#123F91] hover:underline font-bold block truncate text-xs"
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
                  className="text-xs font-bold text-[#123F91] hover:underline flex items-center gap-1"
                >
                  <span>Write Email</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Card 4: Business Hours & Sourcing Hub */}
            <div className="contact-info-card group p-6 sm:p-7 bg-white hover:bg-[#EEF3FA]/30 border-2 border-[#D9D9D6] hover:border-[#123F91] rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-industrial flex flex-col justify-between h-full min-w-0">
              <div className="min-w-0">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-md bg-[#123F91]/10 text-[#123F91] flex items-center justify-center border border-[#123F91]/20 group-hover:bg-[#123F91] group-hover:text-white transition-colors flex-shrink-0">
                    <Clock className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <span className="tech-label text-[10px] text-[#123F91] font-bold">
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
                    <span className="font-mono text-[#123F91] font-bold text-right">9:30 AM – 7:30 PM</span>
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
                <span className="text-[10px] font-mono text-[#123F91] font-bold">
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
                <span className="bg-[#F8F5F1] px-2.5 py-1 rounded border border-[#D9D9D6] text-[#123F91] font-bold">
                  27BXMPP3576J1ZQ
                </span>
              </div>

              <span className="text-[#D9D9D6] hidden md:inline">|</span>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#123F91]" />
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
                className="btn-wave inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#123F91] text-[#123F91] rounded text-xs font-mono font-bold transition-all cursor-pointer"
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

              <button
                type="button"
                onClick={() => handleOpenCert('udyam-registration')}
                className="btn-wave inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#202427]/40 text-[#202427] rounded text-xs font-mono font-bold transition-all cursor-pointer"
              >
                <span>View MSME Udyam</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CONTACT SECTION 3 — LOCATION & VISITATION (FULL-WIDTH MAP)
          ======================================================== */}
      <section
        ref={mapRef}
        className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#D9D9D6] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="contact-map-anim max-w-3xl mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#123F91]/10 border border-[#123F91]/25 mb-3.5">
              <span className="w-2 h-2 rounded-full bg-[#123F91]" />
              <span className="tech-label text-[#123F91] font-bold text-xs uppercase tracking-widest">
                LOCATION & VISITATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202427] tracking-tight leading-tight">
              Our Mumbai Trading Counter
            </h2>
            <p className="text-sm sm:text-base text-[#202427]/75 font-normal leading-relaxed mt-2.5 max-w-2xl">
              Centrally located in Khetwadi, Mumbai's primary industrial metal and hardware commercial corridor. Direct counter access for order collection, physical inspection, and material verification.
            </p>
          </div>

          {/* Dedicated Full-Width Map Container */}
          <div className="contact-map-anim relative rounded-xl overflow-hidden border-2 border-[#D9D9D6] shadow-industrial bg-[#F8F5F1] h-[450px] sm:h-[500px] lg:h-[580px] w-full group">
            {/* Google Map Embed centered on Rudhira Metal Industries */}
            <iframe
              title="Rudhira Metal Industries Location Map"
              src="https://maps.google.com/maps?q=Rudhira+Metal+Industries,+Shop+No.+6,+Shantabi+Building,+4th+Cross+Lane,+Khetwadi,+Mumbai+-+400004&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-[1.1]"
            />

            {/* Floating Custom Verified Marker Badge (Top-Left) */}
            <div className="absolute top-4 left-4 z-10 max-w-[320px] sm:max-w-[360px] bg-[#171A1C]/95 backdrop-blur-md text-white p-4 sm:p-4.5 rounded-lg border border-white/20 shadow-2xl pointer-events-auto">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#EEF3FA] uppercase">
                      VERIFIED TRADING COUNTER
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-black text-white tracking-wide uppercase">
                    RUDHIRA METAL INDUSTRIES
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#123F91] flex items-center justify-center flex-shrink-0 text-white shadow-md">
                  <MapPin className="w-4 h-4" />
                </div>
              </div>

              <p className="text-[11px] sm:text-xs text-[#E7EEF2]/85 leading-relaxed mb-3 font-sans">
                Shop No. 6, Shantabi Building, 4th Cross Lane, Khetwadi, Mumbai - 400 004
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/15">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rudhira+Metal+Industries+Shop+No.+6+Shantabi+Building+4th+Cross+Lane+Khetwadi+Mumbai+400004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#123F91] hover:bg-[#0B2863] text-white text-[11px] font-bold px-3 py-1.5 rounded-xs transition-all duration-150 shadow-md cursor-pointer"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={`tel:${COMPANY_DETAILS.contacts[0].cleanPhone}`}
                  className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-xs transition-all duration-150 cursor-pointer"
                >
                  <FaPhone className="w-2.5 h-2.5" />
                  <span>Call Desk</span>
                </a>
              </div>
            </div>

            {/* Map Frame Bottom Info Bar */}
            <div className="absolute bottom-3 left-3 right-3 bg-[#171A1C]/92 backdrop-blur-md text-white px-4 py-3 rounded-lg border border-white/20 flex flex-wrap items-center justify-between gap-3 text-xs shadow-xl pointer-events-auto">
              <div className="flex items-center gap-2 min-w-0">
                <MapPin className="w-4 h-4 text-[#123F91] flex-shrink-0" />
                <span className="font-mono text-[11px] sm:text-xs truncate text-[#E7EEF2]">
                  <strong>RUDHIRA METAL INDUSTRIES:</strong> Shop No. 6, Shantabi Bldg, 4th Cross Lane, Khetwadi, Mumbai - 400 004
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline font-mono text-[11px] text-[#25D366] font-bold">
                  Mon – Sat: 9:30 AM – 7:30 PM
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rudhira+Metal+Industries+Shop+No.+6+Shantabi+Building+4th+Cross+Lane+Khetwadi+Mumbai+400004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#EEF3FA] hover:text-white transition-colors underline decoration-[#123F91]"
                >
                  <span>Enlarge Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CONTACT SECTION 4 — GUIDED PROCUREMENT // HOW CAN WE HELP?
          ======================================================== */}
      <section
        ref={helpSectionRef}
        className="py-16 sm:py-20 lg:py-24 bg-[#F8F5F1] border-b border-[#D9D9D6] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="contact-procure-anim max-w-3xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#123F91]/10 border border-[#123F91]/25 mb-3.5">
              <span className="w-2 h-2 rounded-full bg-[#123F91]" />
              <span className="tech-label text-[#123F91] font-bold text-xs uppercase tracking-widest">
                GUIDED PROCUREMENT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202427] tracking-tight leading-tight">
              How Can We Help?
            </h2>
            <p className="text-sm sm:text-base text-[#202427]/75 font-normal leading-relaxed mt-2.5">
              Select your requirement category below to automatically configure the inquiry form:
            </p>
          </div>

          {/* 5 Inquiry Categories Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 mb-8 items-stretch">
            {helpOptions.map((opt, idx) => {
              const isSelected = activeHelpCategory === opt.type || activeHelpCategory === opt.title;
              return (
                <div
                  key={opt.type}
                  onClick={() => handleSelectCategory(opt.type)}
                  className={`contact-procure-anim p-5 rounded-xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between h-full group ${
                    isSelected
                      ? 'bg-[#EEF3FA]/60 border-[#123F91] shadow-md -translate-y-1'
                      : 'bg-white border-[#D9D9D6] hover:border-[#123F91]/60 hover:bg-white hover:-translate-y-1 hover:shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`font-mono text-xs font-black ${isSelected ? 'text-[#123F91]' : 'text-[#6B7280]'}`}>
                        0{idx + 1}
                      </span>
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          isSelected ? 'bg-[#123F91] animate-pulse' : 'bg-[#D9D9D6] group-hover:bg-[#123F91]/40'
                        }`}
                      />
                    </div>

                    <h3 className="text-base font-extrabold text-[#202427] mb-2 leading-snug">
                      {opt.title}
                    </h3>

                    <p className="text-xs text-[#202427]/70 leading-relaxed font-sans mb-4">
                      {opt.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#D9D9D6]/60">
                    <span
                      className={`w-full inline-flex items-center justify-center text-xs font-mono font-bold py-2 px-3 rounded transition-colors ${
                        isSelected
                          ? 'bg-[#123F91] text-white shadow-xs'
                          : 'bg-[#F8F5F1] text-[#202427]/75 border border-[#D9D9D6] group-hover:bg-[#123F91] group-hover:text-white group-hover:border-[#123F91]'
                      }`}
                    >
                      {isSelected ? 'SELECTED ✓' : 'SELECT →'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Support Assistance Banner */}
          <div className="contact-procure-anim p-5 sm:p-6 bg-[#202427] text-white rounded-xl border border-white/10 shadow-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
            <div>
              <div className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-white" />
                <span>Need Help Choosing the Right Product?</span>
              </div>
              <p className="text-xs sm:text-sm text-[#D9D9D6]/80 mt-1 max-w-2xl leading-relaxed">
                Talk directly to our metallurgical sales specialists for grade recommendations, test certificates, and immediate delivery timelines.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-start lg:justify-end">
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/25 text-[#EEF3FA] text-xs sm:text-sm font-bold px-4 py-2.5 rounded-sm transition-colors cursor-pointer"
              >
                <span>Quick Modal RFQ</span>
              </button>
              <a
                href={`tel:${COMPANY_DETAILS.contacts[0].cleanPhone}`}
                className="inline-flex items-center gap-1.5 bg-[#123F91] hover:bg-[#0B2863] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-sm transition-colors cursor-pointer shadow-sm"
              >
                <FaPhone className="w-3 h-3" />
                <span>Call Desk</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_DETAILS.contacts[0].whatsappNumber}?text=${encodeURIComponent(COMPANY_DETAILS.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-sm transition-colors cursor-pointer shadow-sm"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CONTACT SECTION 5 — GET A QUOTE / REQUIREMENT FORM
          ======================================================== */}
      <section
        id="quote-form"
        ref={formSectionRef}
        className="py-16 sm:py-20 lg:py-24 bg-[#EEF3FA] border-b border-[#D9D9D6] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-80 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mx-auto max-w-2xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#123F91]/10 border border-[#123F91]/25 mb-3.5">
              <span className="w-2 h-2 rounded-full bg-[#123F91]" />
              <span className="tech-label text-[#123F91] font-bold text-xs uppercase tracking-widest">
                COMMERCIAL DESK // REQUIREMENT FORM
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202427] tracking-tight leading-tight mb-3">
              Get Quote / Requirement Form
            </h2>

            <p className="text-sm sm:text-base text-[#202427]/75 font-normal max-w-xl mx-auto leading-relaxed">
              Tell us what you need and our commercial sales desk will get back to you with pricing, stock availability, and delivery schedules.
            </p>
          </div>

          {/* Form Card Container */}
          <div className="bg-white border border-[#D9D9D6] rounded-xl shadow-md overflow-hidden relative">
            {/* Form Top Header Strip */}
            <div className="bg-[#202427] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#123F91]/40">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
                <span className="tech-label text-xs sm:text-sm font-bold tracking-widest uppercase">
                  REQUIREMENT SPECIFICATION // COMMERCIAL RFQ
                </span>
              </div>
              <div className="font-mono text-xs text-[#D9D9D6]/80">
                RUDHIRA METAL INDUSTRIES • MUMBAI
              </div>
            </div>

            {/* Submission Choice Interface Rendering */}
            {isSubmitted ? (
              <div className="p-8 sm:p-14 text-center bg-[#F8F5F1]">
                <div className="tech-label text-xs font-bold text-[#123F91] tracking-widest uppercase mb-2">
                  REQUIREMENT READY // CHOOSE DELIVERY CHANNEL
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#202427] mb-3">
                  Choose How to Send Your Quote
                </h3>

                <p className="text-base text-[#202427]/80 max-w-lg mx-auto mb-8 leading-relaxed">
                  Your quote request is ready. Choose your preferred method to continue.
                </p>

                {/* RFQ Reference Card */}
                <div className="p-6 bg-white border-2 border-[#D9D9D6] rounded-lg max-w-md mx-auto mb-8 font-mono text-xs text-left space-y-2 shadow-xs">
                  <div className="flex items-center justify-between border-b border-[#D9D9D6] pb-2">
                    <span className="text-[#6B7280]">REFERENCE NUMBER:</span>
                    <strong className="text-[#123F91] text-sm">{referenceCode}</strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#D9D9D6] pb-2">
                    <span className="text-[#6B7280]">NAME / COMPANY:</span>
                    <strong className="text-[#202427]">{formData.name} {formData.company ? `(${formData.company})` : ''}</strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#D9D9D6] pb-2">
                    <span className="text-[#6B7280]">PRODUCT:</span>
                    <strong className="text-[#202427]">{formData.product}</strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#D9D9D6] pb-2">
                    <span className="text-[#6B7280]">QUANTITY:</span>
                    <strong className="text-[#202427]">{formData.quantity}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B7280]">DESK INBOX:</span>
                    <strong className="text-[#123F91]">{COMPANY_DETAILS.emails[0]}</strong>
                  </div>
                </div>

                {/* Two Options: WhatsApp & Gmail */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl mx-auto mb-8">
                  {/* Option 1: WhatsApp */}
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="group p-6 bg-white border-2 border-[#25D366]/40 hover:border-[#25D366] rounded-xl text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <FaWhatsapp className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-[#202427] mb-1.5 group-hover:text-[#25D366] transition-colors">
                        Send via WhatsApp
                      </h4>
                      <p className="text-xs text-[#202427]/70 leading-relaxed">
                        Open WhatsApp with your prepared enquiry.
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-[#D9D9D6] flex items-center justify-between text-xs font-bold text-[#25D366]">
                      <span>Open WhatsApp</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>

                  {/* Option 2: Gmail */}
                  <button
                    type="button"
                    onClick={handleSendGmail}
                    className="group p-6 bg-white border-2 border-[#EA4335]/40 hover:border-[#EA4335] rounded-xl text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-full bg-[#EA4335]/10 text-[#EA4335] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <SiGmail className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-[#202427] mb-1.5 group-hover:text-[#EA4335] transition-colors">
                        Send via Gmail
                      </h4>
                      <p className="text-xs text-[#202427]/70 leading-relaxed">
                        Open Gmail with your prepared email.
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-[#D9D9D6] flex items-center justify-between text-xs font-bold text-[#EA4335]">
                      <span>Open Gmail</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </div>

                {/* Back to Edit Button & Note */}
                <div className="flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-bold text-[#6B7280] hover:text-[#202427] underline transition-colors cursor-pointer"
                  >
                    ← Back to Edit Form
                  </button>
                  <p className="text-[11px] text-[#6B7280]">
                    Note: WhatsApp or Gmail will open with your enquiry prefilled. You review and click Send.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-10 bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-5">
                  {/* 1. Name* */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#202427] mb-1.5">
                      Name <span className="text-[#123F91]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                        formErrors.name ? 'border-[#EA4335] ring-1 ring-[#EA4335]' : 'border-[#D9D9D6]'
                      } rounded-md text-[#202427] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#123F91] focus:ring-1 focus:ring-[#123F91] transition-colors`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-[#EA4335] mt-1 font-medium">{formErrors.name}</p>
                    )}
                  </div>

                  {/* 2. Email* */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#202427] mb-1.5">
                      Email <span className="text-[#123F91]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                        formErrors.email ? 'border-[#EA4335] ring-1 ring-[#EA4335]' : 'border-[#D9D9D6]'
                      } rounded-md text-[#202427] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#123F91] focus:ring-1 focus:ring-[#123F91] transition-colors`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-[#EA4335] mt-1 font-medium">{formErrors.email}</p>
                    )}
                  </div>

                  {/* 3. Phone Number* */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#202427] mb-1.5">
                      Phone Number <span className="text-[#123F91]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                        formErrors.phone ? 'border-[#EA4335] ring-1 ring-[#EA4335]' : 'border-[#D9D9D6]'
                      } rounded-md text-[#202427] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#123F91] focus:ring-1 focus:ring-[#123F91] transition-colors`}
                    />
                    {formErrors.phone && (
                      <p className="text-xs text-[#EA4335] mt-1 font-medium">{formErrors.phone}</p>
                    )}
                  </div>

                  {/* 4. Company Name (Optional) */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#202427] mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="e.g. Apex Engineering Ltd"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9D9D6] rounded-md text-[#202427] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#123F91] focus:ring-1 focus:ring-[#123F91] transition-colors"
                    />
                  </div>

                  {/* 5. Product / Material Required* */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#202427] mb-1.5">
                      Product / Material Required <span className="text-[#123F91]">*</span>
                    </label>
                    <input
                      type="text"
                      name="product"
                      list="contact-products-list"
                      placeholder="e.g. Stainless Steel Pipes, Flanges"
                      value={formData.product}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                        formErrors.product ? 'border-[#EA4335] ring-1 ring-[#EA4335]' : 'border-[#D9D9D6]'
                      } rounded-md text-[#202427] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#123F91] focus:ring-1 focus:ring-[#123F91] transition-colors`}
                    />
                    <datalist id="contact-products-list">
                      {PRODUCTS_DATA.map((p) => (
                        <option key={p.name} value={p.name} />
                      ))}
                      <option value="Forged Fittings" />
                      <option value="Flanges" />
                      <option value="Butt Weld Fittings" />
                      <option value="Pipes & Tubes" />
                      <option value="Sheets & Plates" />
                      <option value="Fasteners" />
                    </datalist>
                    {formErrors.product && (
                      <p className="text-xs text-[#EA4335] mt-1 font-medium">{formErrors.product}</p>
                    )}
                  </div>

                  {/* 6. Quantity* */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#202427] mb-1.5">
                      Quantity <span className="text-[#123F91]">*</span>
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      placeholder="e.g. 500 Meters / 10 Tons / 250 Pcs"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                        formErrors.quantity ? 'border-[#EA4335] ring-1 ring-[#EA4335]' : 'border-[#D9D9D6]'
                      } rounded-md text-[#202427] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#123F91] focus:ring-1 focus:ring-[#123F91] transition-colors`}
                    />
                    {formErrors.quantity && (
                      <p className="text-xs text-[#EA4335] mt-1 font-medium">{formErrors.quantity}</p>
                    )}
                  </div>

                  {/* 7. Component Specification / Grade (Optional) */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs sm:text-sm font-semibold text-[#202427] mb-1.5">
                      Component Specification / Grade
                    </label>
                    <input
                      type="text"
                      name="specification"
                      placeholder="e.g. 316L, Sch 40, ASTM A312"
                      value={formData.specification}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9D9D6] rounded-md text-[#202427] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#123F91] focus:ring-1 focus:ring-[#123F91] transition-colors"
                    />
                  </div>

                  {/* 8. Requirement / Message* */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs sm:text-sm font-semibold text-[#202427] mb-1.5">
                      Requirement / Message <span className="text-[#123F91]">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Technical requirements, specifications, dimensions, tolerances, and delivery timeline..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                        formErrors.message ? 'border-[#EA4335] ring-1 ring-[#EA4335]' : 'border-[#D9D9D6]'
                      } rounded-md text-[#202427] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#123F91] focus:ring-1 focus:ring-[#123F91] transition-colors resize-y`}
                    />
                    {formErrors.message && (
                      <p className="text-xs text-[#EA4335] mt-1 font-medium">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Full-Width Submit Button */}
                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#123F91] hover:bg-[#0B2863] text-white font-bold py-3.5 px-6 rounded-md uppercase tracking-wider text-sm sm:text-base transition-all shadow-md active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>SEND REQUIREMENT</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
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
              <div className="w-12 h-12 rounded-md bg-white/10 text-[#EEF3FA] flex items-center justify-center border border-white/20 flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-white mb-1">
                  Quick Response
                </h4>
                <p className="text-xs text-[#D9D9D6] leading-relaxed">
                  Our dedicated commercial sales desk ensures prompt quotation turnarounds and technical clarity within standard trading hours.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-white/10 text-[#EEF3FA] flex items-center justify-center border border-white/20 flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-white mb-1">
                  Reliable Guidance
                </h4>
                <p className="text-xs text-[#D9D9D6] leading-relaxed">
                  Accurate metallurgical consultation on material grades, wall schedules, pressure classes, and equivalent international standards.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-white/10 text-[#EEF3FA] flex items-center justify-center border border-white/20 flex-shrink-0">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-white mb-1">
                  Industrial Expertise
                </h4>
                <p className="text-xs text-[#D9D9D6] leading-relaxed">
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

