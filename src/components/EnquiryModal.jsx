import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, Mail, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS, PRODUCTS_DATA, MATERIALS_LIST } from '../data/industrialData';

export default function EnquiryModal({ isOpen, onClose, initialProduct, initialMaterial }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    material: '',
    specifications: '',
    quantity: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [rfqNumber, setRfqNumber] = useState('');

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    }
    if (initialMaterial) {
      setFormData((prev) => ({ ...prev, material: initialMaterial }));
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
  };

  const generateWhatsAppMessage = () => {
    return `*RUDHIRA METAL INDUSTRIES - RFQ INQUIRY*
---------------------------------------
*Name:* ${formData.name || 'N/A'}
*Company:* ${formData.company || 'N/A'}
*Phone:* ${formData.phone || 'N/A'}
*Email:* ${formData.email || 'N/A'}
*Product:* ${formData.product || 'General Metal Requirement'}
*Material Grade:* ${formData.material || 'Standard Industrial Grade'}
*Quantity / Specs:* ${formData.quantity || 'As required'}
*Notes:* ${formData.specifications || 'Please share standard pricing and availability.'}
---------------------------------------
Sent via Rudhira Metal Official Portal`;
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const msg = generateWhatsAppMessage();
    const url = `https://wa.me/${COMPANY_DETAILS.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleEmailSend = (e) => {
    e.preventDefault();
    const subject = `RFQ Inquiry: ${formData.product || 'Metal Products'} - ${formData.company || formData.name || 'Client'}`;
    const body = generateWhatsAppMessage();
    const mailto = `mailto:${COMPANY_DETAILS.emails[0]}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomRef = 'RMI-RFQ-' + Math.floor(100000 + Math.random() * 900000);
    setRfqNumber(randomRef);
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#202427]/80 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white border border-[#D9D9D6] rounded-lg shadow-2xl overflow-hidden my-8">
        {/* Modal Top Bar */}
        <div className="bg-[#202427] text-white px-6 py-4 flex items-center justify-between border-b border-[#A94728]/40">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A94728]" />
            <h3 id="modal-title" className="tech-label text-sm font-bold text-white tracking-widest uppercase">
              REQUEST FOR QUOTATION (RFQ) // COMMERCIAL DESK
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white p-1 rounded hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close RFQ dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center bg-[#F8F5F1]">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#A94728]/10 text-[#A94728] rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h4 className="text-2xl font-bold text-[#202427] mb-2">
              Quotation Request Logged
            </h4>

            <p className="text-sm text-[#202427]/70 max-w-md mx-auto mb-6">
              Thank you, {formData.name || 'valued partner'}. Your inquiry has been routed to our Mumbai commercial sales desk.
            </p>

            <div className="p-4 bg-white border border-[#D9D9D6] rounded-lg max-w-sm mx-auto mb-6 font-mono text-xs text-left space-y-1">
              <div><span className="text-[#6B7280]">REFERENCE:</span> <strong className="text-[#A94728]">{rfqNumber}</strong></div>
              <div><span className="text-[#6B7280]">PRODUCT:</span> <strong>{formData.product || 'Industrial Metal Supply'}</strong></div>
              <div><span className="text-[#6B7280]">DESK EMAIL:</span> <strong>{COMPANY_DETAILS.emails[0]}</strong></div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppSend}
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Forward via WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-[#202427] hover:bg-[#171A1C] text-white px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer active:scale-95"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 bg-[#F8F5F1]">
            <div className="mb-6 pb-4 border-b border-[#D9D9D6]">
              <p className="text-xs font-mono text-[#A94728] font-bold uppercase">
                RUDHIRA METAL INDUSTRIES • MUMBAI, INDIA
              </p>
              <h4 className="text-xl sm:text-2xl font-extrabold text-[#202427]">
                Specify Your Material & Product Requirement
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* Product Select */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#202427] uppercase mb-1.5">
                  Product Category *
                </label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 text-sm sm:text-base bg-white border border-[#D9D9D6] rounded-sm focus:outline-none focus:border-[#A94728]"
                >
                  <option value="">Select Product...</option>
                  {PRODUCTS_DATA.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="Forge Fittings & Flanges">Forge Fittings & Flanges</option>
                  <option value="Custom Machined Parts">Custom Machined Parts</option>
                </select>
              </div>

              {/* Material Grade */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#202427] uppercase mb-1.5">
                  Material Grade / Alloy *
                </label>
                <select
                  name="material"
                  value={formData.material}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 text-sm sm:text-base bg-white border border-[#D9D9D6] rounded-sm focus:outline-none focus:border-[#A94728]"
                >
                  <option value="">Select Material Grade...</option>
                  {MATERIALS_LIST.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                  <option value="Other / Client Spec">Other / Client Spec</option>
                </select>
              </div>

              {/* Contact Name */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#202427] uppercase mb-1.5">
                  Contact Person *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Rajesh Kumar"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 text-sm sm:text-base bg-white border border-[#D9D9D6] rounded-sm focus:outline-none focus:border-[#A94728]"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#202427] uppercase mb-1.5">
                  Company / Firm Name
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="e.g. Apex Engineering Ltd"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm sm:text-base bg-white border border-[#D9D9D6] rounded-sm focus:outline-none focus:border-[#A94728]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#202427] uppercase mb-1.5">
                  Official Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="procurement@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 text-sm sm:text-base bg-white border border-[#D9D9D6] rounded-sm focus:outline-none focus:border-[#A94728]"
                />
              </div>

              {/* Phone / Mobile */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#202427] uppercase mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 text-sm sm:text-base bg-white border border-[#D9D9D6] rounded-sm focus:outline-none focus:border-[#A94728]"
                />
              </div>
            </div>

            {/* Quantity & Specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="sm:col-span-1">
                <label className="block text-xs sm:text-sm font-bold text-[#202427] uppercase mb-1.5">
                  Quantity / Tonnage
                </label>
                <input
                  type="text"
                  name="quantity"
                  placeholder="e.g. 500 Meters / 2 Tons"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm sm:text-base bg-white border border-[#D9D9D6] rounded-sm focus:outline-none focus:border-[#A94728]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs sm:text-sm font-bold text-[#202427] uppercase mb-1.5">
                  Dimensions / Schedule / Wall Thickness / Notes
                </label>
                <input
                  type="text"
                  name="specifications"
                  placeholder="e.g. 2 inch NB, Sch 40, ASTM A312, Seamless"
                  value={formData.specifications}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm sm:text-base bg-white border border-[#D9D9D6] rounded-sm focus:outline-none focus:border-[#A94728]"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#D9D9D6] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="btn-wave inline-flex items-center gap-1.5 px-4 py-2.5 bg-white hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366] rounded-sm text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSend}
                  className="btn-wave inline-flex items-center gap-1.5 px-4 py-2.5 bg-white hover:bg-[#202427] text-[#202427] hover:text-white border border-[#202427]/40 rounded-sm text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email</span>
                </button>
              </div>

              <button
                type="submit"
                className="btn-wave inline-flex items-center gap-2 bg-[#A94728] hover:bg-[#8F371B] border-2 border-[#A94728] text-white text-sm sm:text-base font-bold uppercase tracking-wider px-6 py-3 rounded-sm transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Submit RFQ</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
