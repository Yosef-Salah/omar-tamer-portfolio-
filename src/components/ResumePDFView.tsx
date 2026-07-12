import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { contactInfo, education, projects, skills, training } from '../data';

export default function ResumePDFView() {
  const androidSkills = skills.filter(s => s.category === 'android');
  const servicenowSkills = skills.filter(s => s.category === 'servicenow');
  
  const androidSubCategories = Array.from(new Set(androidSkills.map(s => s.subCategory)));
  const softSkills = skills.filter(s => s.category === 'soft').map(s => s.name);
  const languages = skills.filter(s => s.category === 'languages').map(s => s.name);

  return (
    <div className="hidden print:block bg-white text-slate-900 font-sans p-4 max-w-[21cm] mx-auto text-xs leading-relaxed">
      {/* PAGE 1 */}
      <div className="space-y-4 min-h-[29.7cm]">
        
        {/* Header */}
        <div className="text-center space-y-2 pb-3 border-b-2 border-slate-200">
          <h1 className="text-3xl font-extrabold text-blue-800 tracking-wide uppercase">
            {contactInfo.name}
          </h1>
          
          <div className="flex justify-center items-center gap-4 text-[10px] text-slate-600 font-semibold font-mono">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> Alexandria, Egypt
            </span>
            <span>|</span>
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" /> {contactInfo.email}
            </span>
            <span>|</span>
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> {contactInfo.phone}
            </span>
          </div>

          <div className="flex justify-center items-center gap-4 text-[9px] text-blue-700 font-bold font-mono">
            <span className="flex items-center gap-1">
              <Linkedin className="w-3 h-3" /> linkedin.com/in/omar-t.
            </span>
            <span>|</span>
            <span className="flex items-center gap-1">
              <Github className="w-3 h-3" /> github.com/omar-tamer33
            </span>
            <span>|</span>
            <span className="text-slate-500">ServiceNow Resume</span>
          </div>
          
          <div className="text-right text-[8px] text-slate-400 font-mono italic">
            Last updated in September 2024
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-1">
          <h2 className="text-xs font-bold text-blue-800 uppercase border-b border-slate-300 pb-0.5 tracking-wider">
            Summary
          </h2>
          <p className="text-[10px] text-slate-700 leading-normal text-justify">
            {contactInfo.summary}
          </p>
        </div>

        {/* Education */}
        <div className="space-y-1">
          <h2 className="text-xs font-bold text-blue-800 uppercase border-b border-slate-300 pb-0.5 tracking-wider">
            Education
          </h2>
          <div className="space-y-1">
            <div className="flex justify-between items-start font-semibold text-[10px]">
              <div>
                <span className="font-bold text-slate-900">{education.institution}</span>, <span className="text-slate-700 italic">{education.fieldOfStudy}</span>
              </div>
              <span className="font-mono text-[9px] text-slate-500">{education.duration}</span>
            </div>
            <ul className="list-disc pl-4 text-[9.5px] text-slate-600 space-y-0.5">
              <li>{education.degree}</li>
              <li>GPA: Very Good (GPA: 3.03/4.0) - Graduation project: padellex - Grade: A+</li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-2">
          <h2 className="text-xs font-bold text-blue-800 uppercase border-b border-slate-300 pb-0.5 tracking-wider">
            Skills
          </h2>
          <div className="grid grid-cols-2 gap-4 text-[9.5px]">
            {/* Android Dev */}
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-0.5">Android Development</h3>
              <div className="space-y-0.5 text-[9px] text-slate-700">
                {androidSubCategories.map(subCat => {
                  const groupSkills = androidSkills.filter(s => s.subCategory === subCat).map(s => s.name).join(', ');
                  return (
                    <p key={subCat}>
                      <strong>• {subCat}:</strong> {groupSkills}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* ServiceNow Dev */}
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-0.5">ServiceNow Development</h3>
              <div className="space-y-0.5 text-[9px] text-slate-700">
                <p><strong>• Core Platforms:</strong> ServiceNow Studio, App Engine Studio, ITSM</p>
                <p><strong>• Key Skills:</strong></p>
                <ul className="list-disc pl-4 text-[8.5px] text-slate-600 space-y-0.5">
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

        {/* Projects Part 1 */}
        <div className="space-y-2">
          <h2 className="text-xs font-bold text-blue-800 uppercase border-b border-slate-300 pb-0.5 tracking-wider">
            Projects
          </h2>
          
          <div className="space-y-2.5">
            {/* Padellex */}
            <div className="space-y-0.5">
              <div className="flex justify-between items-start text-[10px]">
                <span className="font-bold text-slate-900">Padellex - Graduation Project</span>
                <span className="font-mono text-[9px] text-blue-700 font-semibold">GitHub</span>
              </div>
              <ul className="list-disc pl-4 text-[9px] text-slate-600 space-y-0.5">
                <li>Built a comprehensive Kotlin/Android application using MVVM, Dagger Hilt, Retrofit and Coroutines</li>
                <li>Integrated Firebase (Auth, Realtime Database, Storage) and Cloudinary for media hosting</li>
                <li>Enabled padel players to book court slots and manage reservations, profiles, and real-time chat</li>
              </ul>
            </div>

            {/* Facility Issue */}
            <div className="space-y-0.5">
              <div className="flex justify-between items-start text-[10px]">
                <span className="font-bold text-slate-900">Facility Issue Reporting System – ServiceNow</span>
                <span className="font-mono text-[9px] text-blue-700 font-semibold">GitHub</span>
              </div>
              <ul className="list-disc pl-4 text-[9px] text-slate-600 space-y-0.5">
                <li>Automated facility issue reporting, escalation, and resolution with Flow Designer and SLA.</li>
                <li>Smart assignment of issues to groups and technicians based on priority, skill, and availability, including sensor-triggered issues.</li>
                <li>Role-based access, employee self-service portal, and dashboards for management visibility.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer page identifier */}
        <div className="text-center text-[8px] text-slate-400 font-mono pt-4 mt-auto">
          Omar Tamer - Page 1 of 2
        </div>
      </div>

      {/* PAGE BREAK FOR PRINT */}
      <div className="print-page-break" style={{ pageBreakBefore: 'always' }} />

      {/* PAGE 2 */}
      <div className="space-y-4 pt-4 min-h-[29.7cm] flex flex-col justify-between">
        <div className="space-y-4">
          
          {/* Projects Part 2 */}
          <div className="space-y-2.5">
            {/* E-Commerce */}
            <div className="space-y-0.5">
              <div className="flex justify-between items-start text-[10px]">
                <span className="font-bold text-slate-900">E-Commerce App - Clean Architecture</span>
                <span className="font-mono text-[9px] text-blue-700 font-semibold">GitHub</span>
              </div>
              <ul className="list-disc pl-4 text-[9px] text-slate-600 space-y-0.5">
                <li>Developed a scalable e-commerce application using Kotlin and Jetpack Compose</li>
                <li>Followed Clean Architecture principles for clear separation between layers</li>
                <li>Integrated REST APIs and utilized DataStore for managing user preferences</li>
              </ul>
            </div>

            {/* IT Equipment */}
            <div className="space-y-0.5">
              <div className="flex justify-between items-start text-[10px]">
                <span className="font-bold text-slate-900">IT Equipment Request Automation – ServiceNow</span>
                <span className="font-mono text-[9px] text-blue-700 font-semibold">GitHub</span>
              </div>
              <ul className="list-disc pl-4 text-[9px] text-slate-600 space-y-0.5">
                <li>Built a custom ServiceNow app to automate IT equipment requests with approval and fulfillment workflows</li>
                <li>Implemented Flow Designer, Client Scripts, and Business Rules for approvals, cost calculation, and manager assignment</li>
                <li>Enforced secure access with ACLs and exposed an Inbound Scripted REST API for external integrations</li>
              </ul>
            </div>

            {/* News App */}
            <div className="space-y-0.5">
              <div className="flex justify-between items-start text-[10px]">
                <span className="font-bold text-slate-900">News App</span>
                <span className="font-mono text-[9px] text-blue-700 font-semibold">GitHub</span>
              </div>
              <ul className="list-disc pl-4 text-[9px] text-slate-600 space-y-0.5">
                <li>Developed a News application with real-time content fetching</li>
                <li>Ensured scalability and efficiency in the app's architecture</li>
              </ul>
            </div>
          </div>

          {/* Courses and Training */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-blue-800 uppercase border-b border-slate-300 pb-0.5 tracking-wider">
              Courses and Training
            </h2>
            
            <div className="space-y-2">
              {/* Route Academy */}
              <div className="space-y-0.5">
                <div className="flex justify-between items-start text-[10px]">
                  <div>
                    <span className="font-bold text-slate-900">Route Academy</span>, <span className="text-slate-700 italic">Android Mobile App Development Trainee</span>
                  </div>
                  <span className="font-mono text-[9px] text-slate-500 font-semibold">Nov 2024 – Apr 2025</span>
                </div>
                <ul className="list-disc pl-4 text-[9px] text-slate-600 space-y-0.5">
                  <li>Developing mobile applications for Android</li>
                  <li>Gaining expertise in soft skills, freelancing</li>
                </ul>
              </div>

              {/* AZM Squad */}
              <div className="space-y-0.5">
                <div className="flex justify-between items-start text-[10px]">
                  <div>
                    <span className="font-bold text-slate-900">AZM Squad</span>, <span className="text-slate-700 italic">ServiceNow developer Intern</span>
                  </div>
                  <span className="font-mono text-[9px] text-slate-500 font-semibold">Oct 2025 – Jan 2026</span>
                </div>
                <ul className="list-disc pl-4 text-[9px] text-slate-600 space-y-0.5">
                  <li>Designed and developed custom ServiceNow applications using App Engine Studio and Flow Designer.</li>
                  <li>Automated workflows, integrated REST APIs, and customized Service Portal and Knowledge Management.</li>
                  <li>Gained experience in Scripting and App Engine Studio to build automation solutions for enterprise service management.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Soft Skills & Languages */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-blue-800 uppercase border-b border-slate-300 pb-0.5 tracking-wider">
              Soft Skills & Languages
            </h2>
            <div className="space-y-1 text-[9px] text-slate-700 leading-relaxed">
              <p>
                <strong className="text-slate-900 font-bold">• Soft Skills:</strong> {softSkills.join(' ,')}
              </p>
              <p>
                <strong className="text-slate-900 font-bold">• Languages:</strong> {languages.join(', ')}
              </p>
            </div>
          </div>

        </div>

        {/* Footer page identifier */}
        <div className="flex justify-between items-center text-[8px] text-slate-400 font-mono pt-4 border-t border-slate-200 mt-auto">
          <span>Omar Tamer</span>
          <span>Page 2 of 2</span>
        </div>
      </div>
    </div>
  );
}
