import { motion } from 'motion/react';
import { Smartphone, Layers, Terminal, Sparkles } from 'lucide-react';
import { contactInfo } from '../data';

export default function Summary() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-100 no-print" id="summary-section">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-sm font-mono font-bold text-indigo-600 uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-500 animate-spin" style={{ animationDuration: '4s' }} />
            <span>Professional Summary</span>
          </h2>
          <p className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Bridging the Gap Between Mobile Innovation & Enterprise Automation
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-1 rounded-2xl bg-gradient-to-tr from-slate-100 to-slate-50 border border-slate-200/60 shadow-sm">
              <div className="p-6 md:p-8 bg-white rounded-xl">
                <p className="text-slate-700 leading-relaxed text-base md:text-lg font-sans">
                  {contactInfo.summary}
                </p>
                
                <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-slate-500">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    <span>Native Android (Kotlin)</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>ServiceNow Certified Skills</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    <span>Jetpack Compose</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>ITIL / ITSM Workflows</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* High-impact quote */}
            <div className="pl-6 border-l-4 border-indigo-600/60 italic text-slate-600 text-sm md:text-base font-sans">
              "Developing isn't just about writing code; it's about solving real-world friction. Whether that's designing responsive Android UI or configuring enterprise workflows in ServiceNow, the focus is always on high performance, scalability, and absolute user convenience."
            </div>
          </div>

          {/* Dual Pillar Highlights */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            
            {/* Android Core Card */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full pointer-events-none group-hover:bg-indigo-500/10 transition-colors" />
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-slate-900 text-lg">
                    Android Mobile Engineering
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Developing modern, robust mobile products utilizing <span className="font-semibold text-slate-800">MVVM & Clean Architecture</span>, Room, Retrofit, and declarative layouts using <span className="font-semibold text-slate-800">Jetpack Compose</span>.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ServiceNow Core Card */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-slate-900 text-lg">
                    ServiceNow Workflows
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Automating IT processes using <span className="font-semibold text-slate-800">Flow Designer</span>, Service Portal design, Custom Scripting, and implementing scalable ITSM solutions to power modern enterprises.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
