import { useState, useEffect, useRef, RefObject } from 'react';
import { Smartphone, Layers, Award, MessageSquare, Briefcase, FileText, Menu, X, ArrowUp } from 'lucide-react';
import Header from './components/Header';
import Summary from './components/Summary';
import SkillsGrid from './components/SkillsGrid';
import ProjectsSection from './components/ProjectsSection';
import EducationTimeline from './components/EducationTimeline';
import ContactForm from './components/ContactForm';
import PrintResume from './components/PrintResume';
import ResumePDFView from './components/ResumePDFView';

export default function App() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // References for smooth scrolling
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Scroll monitoring
  useEffect(() => {
    const handleScroll = () => {
      // Header background state
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is in view
      const scrollPos = window.scrollY + 120;
      
      const aboutEl = aboutRef.current;
      const skillsEl = skillsRef.current;
      const projectsEl = projectsRef.current;
      const timelineEl = timelineRef.current;
      const contactEl = contactRef.current;

      if (contactEl && scrollPos >= contactEl.offsetTop) {
        setActiveSection('contact');
      } else if (timelineEl && scrollPos >= timelineEl.offsetTop) {
        setActiveSection('timeline');
      } else if (projectsEl && scrollPos >= projectsEl.offsetTop) {
        setActiveSection('projects');
      } else if (skillsEl && scrollPos >= skillsEl.offsetTop) {
        setActiveSection('skills');
      } else if (aboutEl) {
        setActiveSection('about');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref: RefObject<HTMLDivElement | null>, name: string) => {
    setMobileMenuOpen(false);
    if (ref.current) {
      const topOffset = ref.current.offsetTop - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
      setActiveSection(name);
    }
  };

  const navItems = [
    { id: 'about', label: 'About', ref: aboutRef, icon: Smartphone },
    { id: 'skills', label: 'Skills', ref: skillsRef, icon: Award },
    { id: 'projects', label: 'Projects', ref: projectsRef, icon: Layers },
    { id: 'timeline', label: 'Timeline', ref: timelineRef, icon: Briefcase },
    { id: 'contact', label: 'Contact', ref: contactRef, icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-500 selection:text-white antialiased text-slate-800">
      
      {/* 1. Main Interactive Layout (Hidden during print) */}
      <div className="no-print flex flex-col min-h-screen relative">
        
        {/* Sticky Top Navigation Bar */}
        <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/60 py-3 shadow-sm' 
            : 'bg-slate-50/90 backdrop-blur-sm border-b border-transparent py-4'
        }`} id="sticky-navbar">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
            
            {/* Logo/Identity */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 cursor-pointer group"
              id="nav-logo"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-emerald-500 flex items-center justify-center font-display font-extrabold text-white text-sm shadow-md group-hover:scale-105 transition-transform">
                OT
              </div>
              <span className="font-display font-extrabold text-slate-900 text-lg tracking-tight group-hover:text-indigo-600 transition-colors">
                Omar Tamer
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1.5" id="desktop-nav-menu">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref, item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    activeSection === item.id
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  <item.icon className={`w-4 h-4 ${activeSection === item.id ? 'text-indigo-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* View Resume CTA */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => setIsCvOpen(true)}
                className="px-4 py-2 bg-slate-950 text-white hover:bg-slate-800 text-xs font-bold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-1.5 cursor-pointer"
                id="nav-btn-cv"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View CV</span>
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-slate-900 cursor-pointer"
                id="btn-mobile-menu"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </nav>

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[60px] z-30 md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 p-6 space-y-4 shadow-xl flex flex-col no-print animate-fade-in" id="mobile-nav-menu">
            <div className="space-y-2 flex-grow">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref, item.id)}
                  className={`w-full px-4 py-3 rounded-xl text-left text-sm font-bold transition-all flex items-center gap-3 ${
                    activeSection === item.id
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => { setMobileMenuOpen(false); setIsCvOpen(true); }}
              className="w-full py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-xl text-center text-sm shadow-md flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>View & Print CV</span>
            </button>
          </div>
        )}

        {/* Content Wrapper */}
        <main className="flex-grow pt-16">
          <div ref={aboutRef}>
            <Header 
              onScrollToContact={() => scrollToSection(contactRef, 'contact')} 
              onOpenPrintView={() => setIsCvOpen(true)}
            />
            <Summary />
          </div>

          <div ref={skillsRef}>
            <SkillsGrid />
          </div>

          <div ref={projectsRef}>
            <ProjectsSection />
          </div>

          <div ref={timelineRef}>
            <EducationTimeline />
          </div>

          <div ref={contactRef}>
            <ContactForm />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 no-print" id="footer-section">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-emerald-400 flex items-center justify-center font-display font-black text-white text-base">
                OT
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm">Omar Tamer</p>
                <p className="text-xs text-slate-500">Android & ServiceNow Engineer</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <button onClick={() => scrollToSection(aboutRef, 'about')} className="hover:text-white transition-colors cursor-pointer font-medium">About</button>
              <button onClick={() => scrollToSection(skillsRef, 'skills')} className="hover:text-white transition-colors cursor-pointer font-medium">Skills</button>
              <button onClick={() => scrollToSection(projectsRef, 'projects')} className="hover:text-white transition-colors cursor-pointer font-medium">Projects</button>
              <button onClick={() => scrollToSection(timelineRef, 'timeline')} className="hover:text-white transition-colors cursor-pointer font-medium">Timeline</button>
              <button onClick={() => scrollToSection(contactRef, 'contact')} className="hover:text-white transition-colors cursor-pointer font-medium">Contact</button>
            </div>

            <p className="text-xs text-slate-600 font-mono">
              &copy; {new Date().getFullYear()} Omar Tamer. All rights reserved.
            </p>

          </div>
        </footer>

        {/* Scroll-to-top Floating Button */}
        {scrolled && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 p-3 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-950 rounded-xl shadow-lg hover:shadow-xl transition-all z-40 cursor-pointer animate-slide-up"
            title="Scroll to Top"
            id="btn-scroll-top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

      </div>

      {/* 2. Interactive Document Overlay (Closed by default, no-print) */}
      <PrintResume isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />

      {/* 3. Pure Print Representation (Always compiled, only shown during printing layout) */}
      <ResumePDFView />

    </div>
  );
}
