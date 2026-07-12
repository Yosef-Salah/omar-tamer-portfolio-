import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Smartphone, Layers, Award, Sparkles } from 'lucide-react';
import { skills } from '../data';
import { Skill } from '../types';

export default function SkillsGrid() {
  const [activeTab, setActiveTab] = useState<'all' | 'android' | 'servicenow' | 'soft_lang'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Group skills by category for better visualization
  const filteredSkills = skills.filter((skill) => {
    // Tab filter
    if (activeTab === 'android' && skill.category !== 'android') return false;
    if (activeTab === 'servicenow' && skill.category !== 'servicenow') return false;
    if (activeTab === 'soft_lang' && skill.category !== 'soft' && skill.category !== 'languages') return false;
    
    // Search filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      return (
        skill.name.toLowerCase().includes(query) ||
        skill.subCategory.toLowerCase().includes(query)
      );
    }
    return true;
  });

  // Unique subcategories in the filtered list
  const subCategories = Array.from(new Set(filteredSkills.map(s => s.subCategory)));

  return (
    <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200/60 no-print" id="skills-section">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Skills & Competencies</span>
            </h2>
            <p className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
              Technical & Interpersonal Matrix
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search skills (e.g. Kotlin, ITSM)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800 placeholder-slate-400 font-sans shadow-sm"
              id="skill-search-input"
            />
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4 mb-8">
          <button
            onClick={() => { setActiveTab('all'); setSearchQuery(''); }}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
            id="tab-all-skills"
          >
            <span>All Expertise</span>
          </button>
          
          <button
            onClick={() => { setActiveTab('android'); setSearchQuery(''); }}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'android'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
            id="tab-android-skills"
          >
            <Smartphone className="w-4 h-4" />
            <span>Android Development</span>
          </button>

          <button
            onClick={() => { setActiveTab('servicenow'); setSearchQuery(''); }}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'servicenow'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
            id="tab-servicenow-skills"
          >
            <Layers className="w-4 h-4" />
            <span>ServiceNow Platform</span>
          </button>

          <button
            onClick={() => { setActiveTab('soft_lang'); setSearchQuery(''); }}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'soft_lang'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
            id="tab-soft-skills"
          >
            <Award className="w-4 h-4" />
            <span>Strengths & Languages</span>
          </button>
        </div>

        {/* Skills Cards Matrix */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + searchQuery}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {subCategories.length > 0 ? (
              subCategories.map((subCat) => {
                const subCatSkills = filteredSkills.filter(s => s.subCategory === subCat);
                const isAndroidGroup = subCatSkills.some(s => s.category === 'android');
                const isServiceNowGroup = subCatSkills.some(s => s.category === 'servicenow');
                
                let accentBorder = 'border-slate-200/80';
                let accentHeader = 'bg-slate-100 text-slate-800';
                
                if (isAndroidGroup) {
                  accentBorder = 'hover:border-indigo-300 border-slate-200/80';
                  accentHeader = 'bg-indigo-50 text-indigo-700 border-indigo-100';
                } else if (isServiceNowGroup) {
                  accentBorder = 'hover:border-emerald-300 border-slate-200/80';
                  accentHeader = 'bg-emerald-50 text-emerald-700 border-emerald-100';
                } else {
                  accentBorder = 'hover:border-amber-300 border-slate-200/80';
                  accentHeader = 'bg-amber-50 text-amber-700 border-amber-100';
                }

                return (
                  <div
                    key={subCat}
                    className={`bg-white border rounded-2xl p-6 shadow-sm transition-all duration-300 flex flex-col justify-between ${accentBorder}`}
                  >
                    <div>
                      {/* Subcategory Label */}
                      <div className={`inline-block px-3 py-1 text-xs font-mono font-bold rounded-lg mb-4 border ${accentHeader}`}>
                        {subCat}
                      </div>

                      {/* Skills list */}
                      <div className="flex flex-wrap gap-2.5">
                        {subCatSkills.map((skill) => (
                          <span
                            key={skill.name}
                            className={`px-3 py-1.5 rounded-lg text-sm font-sans font-medium transition-colors cursor-default ${
                              skill.category === 'android'
                                ? 'bg-indigo-50/50 hover:bg-indigo-100/50 text-slate-700 border border-slate-100'
                                : skill.category === 'servicenow'
                                ? 'bg-emerald-50/50 hover:bg-emerald-100/50 text-slate-700 border border-slate-100'
                                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-100'
                            }`}
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full py-12 text-center text-slate-400 font-sans">
                No matching skills found. Try searching for another keyword.
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
