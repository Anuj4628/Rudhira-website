import React, { useState, useEffect } from 'react';
import { X, Send, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { COMPANY_DETAILS, PRODUCTS_DATA } from '../data/industrialData';

export default function EnquiryModal({ isOpen, onClose, initialProduct, initialMaterial }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: initialProduct || '',
    quantity: '',
    specification: initialMaterial || '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [showChoice, setShowChoice] = useState(false);
  const [rfqNumber, setRfqNumber] = useState('');

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    }
    if (initialMaterial) {
      setFormData((prev) => ({ ...prev, specification: initialMaterial }));
    }
  }, [initialProduct, initialMaterial]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
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
      errors.phone = 'Phone number is required.';
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

  const handleSendWhatsApp = () => {
    const text = generateWhatsAppMessage();
    const cleanPhone = COMPANY_DETAILS.whatsappNumber.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendGmail = () => {
    const subject = `Quotation Request | RUDHIRA METAL INDUSTRIES${formData.product ? ` | ${formData.product}` : ''}`;
    const body = generateGmailMessage();
    const recipient = COMPANY_DETAILS.emails[0];
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const randomRef = 'RMI-RFQ-' + Math.floor(100000 + Math.random() * 900000);
    setRfqNumber(randomRef);
    setShowChoice(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#202427]/80 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white border border-[#D9D9D6] rounded-xl shadow-2xl overflow-hidden my-8">
        {/* Modal Top Bar */}
        <div className="bg-[#202427] text-white px-6 py-4 flex items-center justify-between border-b border-[#123F91]/40">
          <div>
            <h3 id="modal-title" className="text-base sm:text-lg font-bold text-white tracking-wide">
              Get Quote / Requirement Form
            </h3>
            <p className="text-xs text-[#D9D9D6]/80 font-mono">
              RUDHIRA METAL INDUSTRIES • COMMERCIAL SALES DESK
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white p-1.5 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {showChoice ? (
          <div className="p-8 sm:p-10 text-center bg-[#F8F5F1]">
            <div className="tech-label text-xs font-bold text-[#123F91] tracking-widest uppercase mb-2">
              REQUIREMENT READY // CHOOSE DELIVERY CHANNEL
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-[#202427] mb-2">
              Choose How to Send Your Quote
            </h4>
            <p className="text-sm text-[#202427]/75 max-w-md mx-auto mb-8 leading-relaxed">
              Your quote request is ready. Choose your preferred method to continue.
            </p>

            {/* Reference info summary */}
            <div className="p-4 bg-white border border-[#D9D9D6] rounded-lg max-w-md mx-auto mb-8 font-mono text-xs text-left space-y-1.5 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]">REFERENCE:</span>
                <strong className="text-[#123F91]">{rfqNumber}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]">PRODUCT:</span>
                <strong className="text-[#202427]">{formData.product}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]">QUANTITY:</span>
                <strong className="text-[#202427]">{formData.quantity}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]">CONTACT:</span>
                <strong className="text-[#202427]">{formData.name}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]">DESK EMAIL:</span>
                <strong className="text-[#123F91]">{COMPANY_DETAILS.emails[0]}</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-8">
              {/* Option 1: WhatsApp */}
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="group p-5 bg-white border-2 border-[#25D366]/40 hover:border-[#25D366] rounded-xl text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <FaWhatsapp className="w-6 h-6" />
                  </div>
                  <h5 className="text-base font-bold text-[#202427] mb-1 group-hover:text-[#25D366] transition-colors">
                    Send via WhatsApp
                  </h5>
                  <p className="text-xs text-[#202427]/70 leading-relaxed">
                    Open WhatsApp with your prepared enquiry.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#D9D9D6] flex items-center justify-between text-xs font-bold text-[#25D366]">
                  <span>Open WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {/* Option 2: Gmail */}
              <button
                type="button"
                onClick={handleSendGmail}
                className="group p-5 bg-white border-2 border-[#EA4335]/40 hover:border-[#EA4335] rounded-xl text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#EA4335]/10 text-[#EA4335] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <SiGmail className="w-6 h-6" />
                  </div>
                  <h5 className="text-base font-bold text-[#202427] mb-1 group-hover:text-[#EA4335] transition-colors">
                    Send via Gmail
                  </h5>
                  <p className="text-xs text-[#202427]/70 leading-relaxed">
                    Open Gmail with your prepared email.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#D9D9D6] flex items-center justify-between text-xs font-bold text-[#EA4335]">
                  <span>Open Gmail</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>

            {/* Back to Edit & Clarification */}
            <div className="flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={() => setShowChoice(false)}
                className="text-xs font-bold text-[#6B7280] hover:text-[#202427] underline transition-colors cursor-pointer"
              >
                ← Back to Edit Form
              </button>
              <p className="text-[11px] text-[#6B7280]">
                WhatsApp or Gmail will open with your details prefilled. You review and click Send.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 bg-white">
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  list="enquiry-products-list"
                  placeholder="e.g. Stainless Steel Pipes, Flanges"
                  value={formData.product}
                  onChange={handleChange}
                  className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                    formErrors.product ? 'border-[#EA4335] ring-1 ring-[#EA4335]' : 'border-[#D9D9D6]'
                  } rounded-md text-[#202427] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#123F91] focus:ring-1 focus:ring-[#123F91] transition-colors`}
                />
                <datalist id="enquiry-products-list">
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
  );
}
