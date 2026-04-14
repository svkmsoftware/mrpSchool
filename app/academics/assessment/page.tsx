"use client";

import { Calendar, Clock, ClipboardCheck, GraduationCap } from "lucide-react";

export default function AssessmentPage() {
  const scheduleMain = [
    { event: "PT-1 / UT-1", date: "6th July — 14th July 2026", grades: "Grades III - XII" },
    { event: "PT-2 / UT-2", date: "17th Aug — 25th Aug 2026", grades: "Grades III - XII" },
    { event: "Mid-Term Exam", date: "28th Sept — 10th Oct 2026", grades: "All Grades III - XII" },
    { event: "PT-3 / UT-3", date: "1st Dec — 8th Dec 2026", grades: "Grades III - XI" },
    { event: "PT-4 / UT-4", date: "18th Jan — 27th Jan 2027", grades: "Grades III - XI" },
    { event: "Annual Exam (IX/XI)", date: "9th Feb — 18th Feb 2027", grades: "Grades IX & XI" },
    { event: "Annual Exam (III-VIII)", date: "8th Mar — 19th Mar 2027", grades: "Grades III - VIII" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="pt-24 pb-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-primary font-black uppercase text-xs tracking-widest">Academic Calendar 2026-27</span>
          <h1 className="text-6xl font-black text-slate-900 uppercase tracking-tighter mt-4 leading-none">
            Assessment <br /> <span className="text-slate-300">Schedule</span>
          </h1>
          <p className="mt-8 text-slate-500 max-w-xl text-sm leading-relaxed font-medium">
            Continuous assessment through projects, assignments, and presentations. Our rigorous testing cycles prepare students for Board Examinations with confidence.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-2">
              <Calendar size={14} className="text-primary" /> Main Examination Cycle
            </h3>
            {scheduleMain.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 flex justify-between items-center group hover:border-primary transition-all">
                <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase">{item.event}</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.grades}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 px-4 py-2 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900 rounded-[2rem] p-8 text-white">
              <h4 className="text-primary font-black uppercase text-xs tracking-widest mb-6">Grades 1 & 2</h4>
              <p className="text-xs text-slate-400 mb-6 font-bold uppercase tracking-tighter">Unit Test Cycles (CT 1-6)</p>
              <div className="space-y-4 border-l border-white/10 pl-6">
                {["July 2026", "Aug 2026", "Sept 2026", "Dec 2026", "Jan 2027", "Mar 2027"].map((m, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-primary font-black text-xs">CT-{i+1}</span>
                    <span className="text-[11px] font-bold text-slate-300">{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-slate-200">
              <ClipboardCheck className="text-primary mb-4" />
              <h5 className="text-sm font-black uppercase text-slate-900 mb-2">Pre-Board Requirements</h5>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Grades 10 and 12 are required to appear for mandatory Pre-Board Examinations to ensure competence for the AISSCE/AISSE boards.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}