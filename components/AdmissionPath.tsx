"use client";

import { MessageSquare, Map, UserCheck, School } from "lucide-react";

export default function AdmissionPath() {
  const steps = [
    { title: "Inquiry", desc: "Fill the online form or visit us.", icon: <MessageSquare /> },
    { title: "Campus Visit", desc: "Experience our world-class facilities.", icon: <Map /> },
    { title: "Interaction", desc: "A brief session with the child.", icon: <UserCheck /> },
    { title: "Admission", desc: "Welcome to the MRPS family!", icon: <School /> },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Get Started</h2>
          <h3 className="text-4xl font-black tracking-tight uppercase">Admission Process</h3>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-8" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {step.icon}
              </div>
              <div className="absolute -top-4 -right-2 text-6xl font-black text-white/5 select-none italic">0{i+1}</div>
              <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">{step.title}</h4>
              <p className="text-slate-400 text-sm max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}