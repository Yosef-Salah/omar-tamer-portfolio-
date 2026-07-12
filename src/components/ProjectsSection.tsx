import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Smartphone, Layers, CheckCircle2, Cpu } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'android' | 'servicenow'>('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-100 no-print" id="projects-section">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-sm font-mono font-bold text-indigo-600 uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <Cpu className="w-4 h-4 text-indigo-500" />
            <span>Featured Projects</span>
          </h2>
          <p className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Production & Prototyping Work
          </p>
          <p className="mt-3 text-slate-500 font-sans text-sm md:text-base">
            Explore a curated selection of native mobile apps and enterprise automation systems.
          </p>
        </div>

        {/* Filter Toggle */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="inline-flex bg-slate-100/80 border border-slate-200/50 p-1.5 rounded-2xl">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
              id="filter-projects-all"
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter('android')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                filter === 'android'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-600 hover:text-indigo-600'
              }`}
              id="filter-projects-android"
            >
              <Smartphone className="w-4.5 h-4.5" />
              <span>Android ({projects.filter(p => p.category === 'android').length})</span>
            </button>
            <button
              onClick={() => setFilter('servicenow')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                filter === 'servicenow'
                  ? 'bg-white text-emerald-600 shadow-sm'
                  : 'text-slate-600 hover:text-emerald-600'
              }`}
              id="filter-projects-servicenow"
            >
              <Layers className="w-4.5 h-4.5" />
              <span>ServiceNow ({projects.filter(p => p.category === 'servicenow').length})</span>
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
          >
            {filteredProjects.map((project) => {
              const isAndroid = project.category === 'android';
              const cardAccent = isAndroid ? 'indigo' : 'emerald';
              
              return (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative group`}
                  id={`project-card-${project.id}`}
                >
                  {/* Decorative bar on top */}
                  <div className={`h-1.5 w-full bg-${cardAccent === 'indigo' ? 'indigo-600' : 'emerald-600'}`} />

                  <div className="p-6 md:p-8 space-y-6 flex-grow">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                          isAndroid 
                            ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' 
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                        }`}>
                          {isAndroid ? <Smartphone className="w-3 h-3" /> : <Layers className="w-3 h-3" />}
                          {isAndroid ? 'Android Mobile' : 'ServiceNow App'}
                        </span>
                        <h3 className="text-xl font-display font-extrabold text-slate-900 group-hover:text-indigo-950 transition-colors pt-2">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono font-medium text-slate-500">
                          {project.subtitle}
                        </p>
                      </div>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 rounded-xl text-slate-600 hover:text-slate-950 transition-all shadow-sm flex-shrink-0"
                          title="View Repository"
                          id={`project-github-${project.id}`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    {/* Bullets lists */}
                    <ul className="space-y-3.5 flex-grow">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed font-sans">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 text-${cardAccent === 'indigo' ? 'indigo-500' : 'emerald-500'}`} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                  {/* Footer (Tags) */}
                  <div className="p-6 md:px-8 border-t border-slate-100/80 bg-slate-50/50 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 bg-white border border-slate-200 text-xs font-medium rounded-lg text-slate-600 cursor-default transition-colors hover:border-${cardAccent === 'indigo' ? 'indigo-200' : 'emerald-200'} hover:text-slate-800`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
