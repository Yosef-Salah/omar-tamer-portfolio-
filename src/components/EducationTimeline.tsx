import { BookOpen, Briefcase, Calendar, GraduationCap, Trophy } from 'lucide-react';
import { education, training } from '../data';

export default function EducationTimeline() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200/60 no-print" id="experience-section">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-mono font-bold text-indigo-600 uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-500" />
            <span>Education & Internships</span>
          </h2>
          <p className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Academic Foundation & Professional Training
          </p>
        </div>

        {/* Double Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Academic Education */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="p-2.5 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-xl">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900">
                Academic Education
              </h3>
            </div>

            {/* University Card */}
            <div className="relative pl-6 border-l-2 border-indigo-500/30 space-y-4">
              {/* Timeline dot */}
              <span className="absolute left-[-6px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-600 border-4 border-white shadow-sm" />

              <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-lg leading-snug">
                      {education.institution}
                    </h4>
                    <p className="text-sm font-semibold text-indigo-600 font-sans mt-0.5">
                      {education.degree} in {education.fieldOfStudy}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold rounded-lg self-start sm:self-auto font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{education.duration}</span>
                  </span>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <Trophy className="w-4 h-4 text-amber-500" />
                    <span>
                      Academic Rank: <span className="font-bold text-slate-900">{education.gpa}</span>
                    </span>
                  </div>

                  {education.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-slate-600 bg-indigo-50/40 p-3 rounded-xl border border-indigo-100/50 leading-relaxed font-sans">
                      🎓 <span className="font-medium text-slate-800">Graduation Project:</span> {detail.replace("Graduation project: ", "")}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Courses & Training */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="p-2.5 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-xl">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900">
                Courses & Training
              </h3>
            </div>

            {/* Timeline Cards */}
            <div className="space-y-8 relative">
              {training.map((train, idx) => {
                const isAndroid = train.category === 'android';
                const cardAccent = isAndroid ? 'indigo' : 'emerald';
                
                return (
                  <div key={train.id} className="relative pl-6 border-l-2 border-slate-200 space-y-4">
                    {/* Timeline dot */}
                    <span className={`absolute left-[-6px] top-1.5 w-3.5 h-3.5 rounded-full bg-${cardAccent === 'indigo' ? 'indigo-600' : 'emerald-600'} border-4 border-white shadow-sm`} />

                    <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                        <div>
                          <span className={`inline-block px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase rounded-md mb-1 bg-${cardAccent}-50 border border-${cardAccent}-100 text-${cardAccent}-700`}>
                            {isAndroid ? 'Android Trainee' : 'ServiceNow Intern'}
                          </span>
                          <h4 className="font-display font-bold text-slate-900 text-lg leading-snug">
                            {train.title}
                          </h4>
                          <p className="text-sm font-semibold text-slate-500 font-sans mt-0.5">
                            {train.provider}
                          </p>
                        </div>

                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold rounded-lg self-start sm:self-auto font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{train.duration}</span>
                        </span>
                      </div>

                      <ul className="space-y-2 pt-2 border-t border-slate-100/80">
                        {train.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2 font-sans">
                            <span className="text-slate-400 mt-1 flex-shrink-0">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
