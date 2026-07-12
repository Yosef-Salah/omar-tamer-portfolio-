import { Mail, Phone, MapPin, Linkedin, Github, Printer, X, Download, ExternalLink } from 'lucide-react';
import { contactInfo, education, projects, skills, training } from '../data';

interface PrintResumeProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrintResume({ isOpen, onClose }: PrintResumeProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  // Extract skills by category
  const androidSkills = skills.filter(s => s.category === 'android');
  const servicenowSkills = skills.filter(s => s.category === 'servicenow');
  
  // Group Android skills by subcategory
  const androidSubCategories = Array.from(new Set(androidSkills.map(s => s.subCategory)));
  // Group ServiceNow skills by subcategory
  const servicenowSubCategories = Array.from(new Set(servicenowSkills.map(s => s.subCategory)));

  const softSkills = skills.filter(s => s.category === 'soft').map(s => s.name);
  const languages = skills.filter(s => s.category === 'languages').map(s => s.name);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex justify-center items-start p-4 md:p-10 no-print">
      
      {/* Floating control buttons */}
      <div className="fixed top-6 right-6 flex items-center gap-3 z-50">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer text-sm"
          id="btn-print-doc"
        >
          <Printer className="w-4 h-4" />
          <span>Print or Save PDF</span>
        </button>
        
        <button
          onClick={onClose}
          className="p-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 rounded-xl font-semibold shadow-md transition-all cursor-pointer"
          title="Close document viewer"
          id="btn-close-doc"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Printable Document Container */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-6 md:p-12 text-slate-800 border border-slate-200 overflow-hidden relative font-sans my-8">
        
        {/* Decorative background border for digital viewer only */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-indigo-600" />
        
        {/* PAGE 1 CONTENT */}
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-4 pb-4 border-b-2 border-slate-100">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 uppercase tracking-wide">
              {contactInfo.name}
            </h1>
            
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs md:text-sm text-slate-600 font-semibold font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-slate-400" /> Alexandria, Egypt
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-4 h-4 text-slate-400" /> {contactInfo.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4 text-slate-400" /> {contactInfo.phone}
              </span>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs text-blue-700 font-bold font-mono">
              <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5" /> linkedin.com/in/omar-t
              </a>
              <span>•</span>
              <a href={contactInfo.github} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Github className="w-3.5 h-3.5" /> github.com/omar-tamer33
              </a>
              <span>•</span>
              <span className="text-slate-500">ServiceNow Resume</span>
            </div>
            
            <div className="text-right text-[10px] text-slate-400 font-mono italic">
              Last updated in September 2024
            </div>
          </div>

          {/* Summary Section */}
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-blue-800 uppercase border-b border-slate-300 pb-1 tracking-wider">
              Summary
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed font-sans text-justify">
              {contactInfo.summary}
            </p>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-blue-800 uppercase border-b border-slate-300 pb-1 tracking-wider">
              Education
            </h2>
            
            <div className="space-y-2">
              <div className="flex justify-between items-start text-sm">
                <div>
                  <span className="font-bold text-slate-900">{education.institution}</span>, <span className="text-slate-700 italic">{education.fieldOfStudy}</span>
                </div>
                <span className="font-mono text-xs text-slate-500 font-semibold">{education.duration}</span>
              </div>
              
              <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                <li>{education.degree}</li>
                <li>GPA: Very Good (GPA: 3.03/4.0) - Graduation project: padellex - Grade: A+</li>
              </ul>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-blue-800 uppercase border-b border-slate-300 pb-1 tracking-wider">
              Skills
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              {/* Android Dev Skills */}
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-1">Android Development</h3>
                <div className="space-y-1 text-xs text-slate-700">
                  {androidSubCategories.map(subCat => {
                    const groupSkills = androidSkills.filter(s => s.subCategory === subCat).map(s => s.name).join(', ');
                    return (
                      <p key={subCat} className="leading-relaxed">
                        <strong className="text-slate-900 font-semibold">• {subCat}:</strong> {groupSkills}
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* ServiceNow Dev Skills */}
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-1">ServiceNow Development</h3>
                <div className="space-y-1 text-xs text-slate-700">
                  <p className="leading-relaxed">
                    <strong className="text-slate-900 font-semibold">• Core Platforms:</strong> ServiceNow Studio, App Engine Studio, ITSM
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-slate-900 font-semibold">• Key Skills:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-0.5 text-xs text-slate-600">
                    <li>Service Portal: Service Portal Fundamentals, Service Portal On-Demand</li>
                    <li>Flow Designer: Create, Manage, and Automate Flows</li>
                    <li>Reports and Dashboards: Get Started with Reports</li>
                    <li>Scripting: Scripting in ServiceNow Fundamentals</li>
                    <li>App Engine Studio: Introduction to App Engine Studio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Projects (Page 1 Projects) */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-blue-800 uppercase border-b border-slate-300 pb-1 tracking-wider">
              Projects
            </h2>
            
            <div className="space-y-4">
              {/* Project 1: Padellex */}
              <div className="space-y-1">
                <div className="flex justify-between items-start text-sm">
                  <span className="font-bold text-slate-900">Padellex - Graduation Project</span>
                  <a href="https://github.com/omar-tamer33/padellex" className="text-blue-600 hover:underline text-xs font-semibold flex items-center gap-0.5">
                    GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
                  <li>Built a comprehensive Kotlin/Android application using MVVM, Dagger Hilt, Retrofit and Coroutines</li>
                  <li>Integrated Firebase (Auth, Realtime Database, Storage) and Cloudinary for media hosting</li>
                  <li>Enabled padel players to book court slots and manage reservations, profiles, and real-time chat</li>
                </ul>
              </div>

              {/* Project 2: Facility Issue */}
              <div className="space-y-1">
                <div className="flex justify-between items-start text-sm">
                  <span className="font-bold text-slate-900">Facility Issue Reporting System – ServiceNow</span>
                  <a href="https://github.com/omar-tamer33/facility-issue-reporting" className="text-blue-600 hover:underline text-xs font-semibold flex items-center gap-0.5">
                    GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
                  <li>Automated facility issue reporting, escalation, and resolution with Flow Designer and SLA.</li>
                  <li>Smart assignment of issues to groups and technicians based on priority, skill, and availability, including sensor-triggered issues.</li>
                  <li>Role-based access, employee self-service portal, and dashboards for management visibility.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Page break marker for printer */}
          <div className="print-page-break" />

          {/* PAGE 2 CONTENT */}
          <div className="space-y-4 pt-6 md:pt-12 border-t-2 border-dashed border-slate-200 print:border-none print:pt-0">
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest no-print mb-4">
              Page 2
            </h3>
            
            {/* More Projects */}
            <div className="space-y-4">
              {/* Project 3: E-Commerce */}
              <div className="space-y-1">
                <div className="flex justify-between items-start text-sm">
                  <span className="font-bold text-slate-900">E-Commerce App - Clean Architecture</span>
                  <a href="https://github.com/omar-tamer33/ecommerce-clean-architecture" className="text-blue-600 hover:underline text-xs font-semibold flex items-center gap-0.5">
                    GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
                  <li>Developed a scalable e-commerce application using Kotlin and Jetpack Compose</li>
                  <li>Followed Clean Architecture principles for clear separation between layers</li>
                  <li>Integrated REST APIs and utilized DataStore for managing user preferences</li>
                </ul>
              </div>

              {/* Project 4: IT Equipment Request */}
              <div className="space-y-1">
                <div className="flex justify-between items-start text-sm">
                  <span className="font-bold text-slate-900">IT Equipment Request Automation – ServiceNow</span>
                  <a href="https://github.com/omar-tamer33/it-equipment-automation" className="text-blue-600 hover:underline text-xs font-semibold flex items-center gap-0.5">
                    GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
                  <li>Built a custom ServiceNow app to automate IT equipment requests with approval and fulfillment workflows</li>
                  <li>Implemented Flow Designer, Client Scripts, and Business Rules for approvals, cost calculation, and manager assignment</li>
                  <li>Enforced secure access with ACLs and exposed an Inbound Scripted REST API for external integrations</li>
                </ul>
              </div>

              {/* Project 5: News App */}
              <div className="space-y-1">
                <div className="flex justify-between items-start text-sm">
                  <span className="font-bold text-slate-900">News App</span>
                  <a href="https://github.com/omar-tamer33/news-app" className="text-blue-600 hover:underline text-xs font-semibold flex items-center gap-0.5">
                    GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
                  <li>Developed a News application with real-time content fetching</li>
                  <li>Ensured scalability and efficiency in the app’s architecture</li>
                </ul>
              </div>
            </div>

            {/* Courses and Training */}
            <div className="space-y-4 pt-4">
              <h2 className="text-lg font-bold text-blue-800 uppercase border-b border-slate-300 pb-1 tracking-wider">
                Courses and Training
              </h2>
              
              <div className="space-y-4">
                {/* Route Academy */}
                <div className="space-y-1">
                  <div className="flex justify-between items-start text-sm">
                    <div>
                      <span className="font-bold text-slate-900">Route Academy</span>, <span className="text-slate-700 italic">Android Mobile App Development Trainee</span>
                    </div>
                    <span className="font-mono text-xs text-slate-500 font-semibold">Nov 2024 – Apr 2025</span>
                  </div>
                  <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
                    <li>Developing mobile applications for Android</li>
                    <li>Gaining expertise in soft skills, freelancing</li>
                  </ul>
                </div>

                {/* AZM Squad */}
                <div className="space-y-1">
                  <div className="flex justify-between items-start text-sm">
                    <div>
                      <span className="font-bold text-slate-900">AZM Squad</span>, <span className="text-slate-700 italic">ServiceNow developer Intern</span>
                    </div>
                    <span className="font-mono text-xs text-slate-500 font-semibold">Oct 2025 – Jan 2026</span>
                  </div>
                  <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
                    <li>Designed and developed custom ServiceNow applications using App Engine Studio and Flow Designer.</li>
                    <li>Automated workflows, integrated REST APIs, and customized Service Portal and Knowledge Management.</li>
                    <li>Gained experience in Scripting and App Engine Studio to build automation solutions for enterprise service management.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Soft Skills & Languages */}
            <div className="space-y-3 pt-4">
              <h2 className="text-lg font-bold text-blue-800 uppercase border-b border-slate-300 pb-1 tracking-wider">
                Soft Skills & Languages
              </h2>
              
              <div className="space-y-2 text-xs text-slate-700">
                <p className="leading-relaxed">
                  <strong className="text-slate-900 font-bold">• Soft Skills:</strong> {softSkills.join(' ,')}
                </p>
                <p className="leading-relaxed">
                  <strong className="text-slate-900 font-bold">• Languages:</strong> {languages.join(', ')}
                </p>
              </div>
            </div>

            {/* Footer page identifier */}
            <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pt-6 border-t border-slate-100">
              <span>Omar Tamer</span>
              <span>Page 2 of 2</span>
            </div>
          </div>
          
        </div>

      </div>

    </div>
  );
}
