import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  X, 
  CheckCircle2,
  Send 
} from 'lucide-react';

/**
 * ContactSection Component
 * Positioned immediately after "Our Engineering Capabilities" and before the footer.
 * Features a clean horizontal layout on desktop with the heading and description on the left
 * and the "Contact Us →" button on the right.
 * Responsive: Stacks vertically on mobile.
 */
export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const contactTriggerRef = useRef(null);
  const contactDialogRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Hardware Design (SoM / SBC / Carrier)',
    message: ''
  });

  useEffect(() => {
    if (!isModalOpen) return undefined;

    const dialog = contactDialogRef.current;
    const trigger = contactTriggerRef.current;
    const focusable = dialog?.querySelectorAll('button, input, select, textarea, a[href]');
    const firstFocusable = focusable?.[0];
    const lastFocusable = focusable?.[focusable.length - 1];
    firstFocusable?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      } else if (event.key === 'Tab' && focusable?.length) {
        if (event.shiftKey && document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable.focus();
        } else if (!event.shiftKey && document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      trigger?.focus();
    };
  }, [isModalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectType: 'Hardware Design (SoM / SBC / Carrier)',
        message: ''
      });
    }, 300);
  };

  return (
    <section id="contact" className="home-contact">
      <div className="home-contact__inner container">
        <div className="home-contact__intro">
          <p className="home-eyebrow home-contact__eyebrow">LET'S WORK TOGETHER</p>
          <h2>Let's Build Your <span>Next Product</span></h2>
          <p>Talk to our engineers about your hardware, software, and system development requirements.</p>
        </div>
        <button
          ref={contactTriggerRef}
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="home-button home-contact__button"
          aria-label="Contact us to build your next product"
        >
          <span>Contact Us</span>
          <ArrowRight size={17} aria-hidden="true" />
        </button>
      </div>

      {/* Interactive Contact & Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            ref={contactDialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-dialog-title"
            className="home-contact__dialog w-full max-w-lg bg-[var(--surface-bg)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-8 shadow-2xl relative text-[var(--text-primary)]"
          >
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 text-slate-400 dark:text-white/60 hover:text-slate-800 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close contact dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {!formSubmitted ? (
              <>
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-color)] mb-2 uppercase font-semibold">
                  <MessageSquare className="w-4 h-4" />
                  <span>Engineering Inquiry</span>
                </div>

                <h3 id="contact-dialog-title" className="text-2xl font-bold tracking-tight mb-2 text-[var(--text-primary)]">
                  Speak with Our Engineering Team
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mb-6">
                  Share your hardware, BSP, camera pipeline, or edge AI specifications with our technical team.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-white/80 mb-1">
                      <span>Full Name</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Vance"
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] text-xs focus:outline-none focus:border-[var(--accent-color)]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-white/80 mb-1">
                      <span>Work Email</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex.vance@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] text-xs focus:outline-none focus:border-[var(--accent-color)]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-project-type" className="block text-xs font-semibold text-slate-700 dark:text-white/80 mb-1">
                      <span>Project Requirement</span>
                    </label>
                    <select
                      id="contact-project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs focus:outline-none focus:border-[var(--accent-color)]"
                    >
                      <option value="Hardware Design (SoM / SBC / Carrier)">Hardware Design (SoM / SBC / Carrier)</option>
                      <option value="Linux / Yocto BSP & Driver Development">Linux / Yocto BSP & Driver Development</option>
                      <option value="Camera & Multimedia Integration">Camera & Multimedia Integration</option>
                      <option value="Edge AI Application Development">Edge AI Application Development</option>
                      <option value="Complete Turnkey Solution">Complete Turnkey Solution</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-white/80 mb-1">
                      Project Details & Requirements (Optional)
                    </label>
                    <textarea
                      id="contact-message"
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your hardware architecture, target timeline, or interfaces required..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] text-xs focus:outline-none focus:border-[var(--accent-color)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="home-contact__submit w-full py-3 rounded-xl font-bold text-xs shadow-md transition-all font-mono flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Technical Inquiry</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 id="contact-dialog-title" className="text-xl font-bold tracking-tight mb-2">
                  Inquiry Received
                </h3>
                <p className="text-xs text-slate-600 dark:text-white/70 max-w-sm mx-auto mb-6">
                  Thank you for reaching out. An Aiegx engineering specialist has received your requirements and will follow up with you directly.
                </p>
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-[#101936] dark:hover:bg-[#101936]/80 border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
}
