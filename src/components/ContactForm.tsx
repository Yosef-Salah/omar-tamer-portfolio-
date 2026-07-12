import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Linkedin, Github, MessageSquare } from 'lucide-react';
import { contactInfo } from '../data';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white no-print" id="contact-section">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-mono font-bold text-indigo-600 uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <MessageSquare className="w-4 h-4 text-indigo-500" />
            <span>Connect & Collaborate</span>
          </h2>
          <p className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Let's Build Something Together
          </p>
          <p className="mt-3 text-slate-500 font-sans text-sm md:text-base">
            Have an open position, an automation proposal, or an Android project? Drop a line!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Info Cards & Social Links (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-display font-bold text-slate-900 pb-3 border-b border-slate-100">
              Direct Channels
            </h3>

            {/* Email Copier */}
            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-400 font-mono uppercase tracking-wider">Email Me</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-sm md:text-base font-semibold text-slate-800 hover:text-indigo-600 transition-colors break-all block">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(contactInfo.email, 'email')}
                className="p-2 bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-800 rounded-xl border border-slate-200 transition-colors flex-shrink-0 cursor-pointer"
                title="Copy to Clipboard"
                id="btn-copy-email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Copier */}
            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 font-mono uppercase tracking-wider">Call Directly</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-sm md:text-base font-semibold text-slate-800 hover:text-emerald-600 transition-colors block font-mono">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(contactInfo.phone, 'phone')}
                className="p-2 bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-800 rounded-xl border border-slate-200 transition-colors flex-shrink-0 cursor-pointer"
                title="Copy to Clipboard"
                id="btn-copy-phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl shadow-sm flex items-center gap-3">
              <div className="p-2.5 bg-slate-200/60 text-slate-600 rounded-xl flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 font-mono uppercase tracking-wider">Base Location</p>
                <p className="text-sm md:text-base font-semibold text-slate-800">
                  {contactInfo.location}
                </p>
              </div>
            </div>

            {/* Social Grid */}
            <div className="pt-4">
              <p className="text-xs font-semibold text-slate-400 font-mono uppercase tracking-wider mb-3">Other Profiles</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-slate-600 hover:text-indigo-600 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 text-sm shadow-sm"
                  id="contact-linkedin"
                >
                  <Linkedin className="w-4 h-4 text-indigo-500" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-950 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 text-sm shadow-sm"
                  id="contact-github"
                >
                  <Github className="w-4 h-4 text-slate-900" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Message Form (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/80 p-6 md:p-8 rounded-2xl shadow-sm relative overflow-hidden">
            <h3 className="text-xl font-display font-bold text-slate-900 pb-3 border-b border-slate-200 mb-6">
              Send a Quick Message
            </h3>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  id="form-contact"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider" htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider" htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider" htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800"
                      placeholder="Collaboration opportunity..."
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800 resize-none"
                      placeholder="Hi Omar, I would love to talk about..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm cursor-pointer"
                    id="btn-submit-message"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4 flex flex-col items-center justify-center"
                  id="contact-success"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce" />
                  <div className="space-y-1.5">
                    <h4 className="text-lg font-display font-extrabold text-slate-900">
                      Message Received!
                    </h4>
                    <p className="text-sm text-slate-500 max-w-sm mx-auto font-sans">
                      Thank you for reaching out. Your message has been sent successfully. Omar will respond to your inquiry shortly!
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-sm transition-colors cursor-pointer"
                    id="btn-send-another"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
