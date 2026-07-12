import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Briefcase, FileText } from 'lucide-react';
import { contactInfo } from '../data';

interface HeaderProps {
  onScrollToContact: () => void;
  onOpenPrintView: () => void;
}

export default function Header({ onScrollToContact, onOpenPrintView }: HeaderProps) {
  return (
    <header className="relative w-full bg-slate-50 border-b border-slate-200/80 overflow-hidden no-print">
      {/* Abstract Background Accents */}
      <div className="absolute top-0 right-0 w-[40%] h-[300px] bg-gradient-to-bl from-indigo-500/10 via-emerald-500/5 to-transparent rounded-bl-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[10%] w-[30%] h-[150px] bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-semibold text-indigo-700 font-mono tracking-wider uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Android & ServiceNow Engineer
            </motion.div>

            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-none"
                id="portfolio-title"
              >
                {contactInfo.name}
              </motion.h1>

              {/* Dynamic Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-600 font-sans leading-relaxed max-w-2xl"
              >
                Building high-fidelity Android mobile applications with <span className="text-indigo-600 font-semibold font-display">Kotlin</span> and automating global enterprise workflows with <span className="text-emerald-600 font-semibold font-display">ServiceNow</span>.
              </motion.p>
            </div>

            {/* Core Metadata Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm text-slate-600 font-medium"
            >
              <div className="flex items-center gap-2" id="meta-location">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{contactInfo.location}</span>
              </div>
              <div className="flex items-center gap-2" id="meta-email">
                <Mail className="w-4 h-4 text-slate-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-indigo-600 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2" id="meta-phone">
                <Phone className="w-4 h-4 text-slate-400" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-indigo-600 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
            </motion.div>

            {/* Quick Links & CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button
                onClick={onScrollToContact}
                className="px-6 py-3 bg-slate-950 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 text-sm cursor-pointer"
                id="btn-get-in-touch"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </button>

              <button
                onClick={onOpenPrintView}
                className="px-5 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 flex items-center gap-2 text-sm cursor-pointer"
                id="btn-view-cv"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>View & Print CV</span>
              </button>

              <div className="h-6 w-px bg-slate-200 mx-2 hidden sm:block" />

              <div className="flex items-center gap-3">
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-slate-600 hover:text-indigo-600 rounded-xl transition-all duration-200 shadow-sm"
                  title="LinkedIn Profile"
                  id="link-linkedin"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-950 rounded-xl transition-all duration-200 shadow-sm"
                  title="GitHub Profile"
                  id="link-github"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Graphic Logo Badge (No Placeholder Images) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="flex-shrink-0 mx-auto md:mx-0"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-white border border-slate-200/80 shadow-xl flex items-center justify-center p-6 select-none group overflow-hidden">
              {/* Soft decorative ring */}
              <div className="absolute inset-2 rounded-2xl bg-gradient-to-tr from-indigo-500/5 to-emerald-500/5 group-hover:scale-105 transition-transform duration-300" />
              
              {/* Complex SVG Badge */}
              <svg className="w-full h-full text-slate-800" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Back glowing blob */}
                <circle cx="60" cy="60" r="48" fill="url(#avatar-grad)" fillOpacity="0.08" />
                
                {/* Outer frame */}
                <rect x="25" y="25" width="70" height="70" rx="16" stroke="url(#stroke-grad)" strokeWidth="2.5" />
                
                {/* Visual representing Android */}
                <path d="M40 75V60C40 55 45 50 50 50" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="40" cy="75" r="4" fill="#6366f1" />
                
                {/* Visual representing ServiceNow (green, automated flow) */}
                <path d="M80 45V60C80 65 75 70 70 70" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="80" cy="45" r="4" fill="#10b981" />

                {/* Main Initials */}
                <text x="60" y="66" className="font-display font-black text-2xl" fill="#0f172a" textAnchor="middle" letterSpacing="-0.5">
                  OT
                </text>
                
                {/* Small indicator dots */}
                <circle cx="60" cy="38" r="2.5" fill="#6366f1" />
                <circle cx="60" cy="82" r="2.5" fill="#10b981" />

                <defs>
                  <linearGradient id="avatar-grad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4f46e5" />
                    <stop offset="1" stopColor="#10b981" />
                  </linearGradient>
                  <linearGradient id="stroke-grad" x1="25" y1="25" x2="95" y2="95" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366f1" />
                    <stop offset="1" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
