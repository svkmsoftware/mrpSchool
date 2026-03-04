"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function WelcomeSection() {
  const points = ["Digitally Enabled Classrooms", "Holistic Sports Academy", "Nurturing Boarding Life"];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Welcome to MRPS</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-[0.9] mb-6">
              Preparing Students <br /><span className="text-primary italic font-light">for Life.</span>
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              At Mukesh R. Patel School (CBSE), we prepare students not just for examinations — but for life. 
              Experience a nurturing environment where academic excellence blends seamlessly with 
              innovation, creativity, and holistic development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {points.map((p, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-700 font-bold text-sm uppercase tracking-tight">
                  <CheckCircle2 className="text-primary" size={18} /> {p}
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="h-64 bg-slate-100 rounded-3xl overflow-hidden shadow-xl translate-y-8">
               <img src="/images/infrastructure/classroom.jpeg" className="w-full h-full object-cover" alt="Classroom" />
            </div>
            <div className="h-64 bg-slate-100 rounded-3xl overflow-hidden shadow-xl">
               <img src="/images/infrastructure/swimmingpool_sports.jpeg" className="w-full h-full object-cover" alt="Sports" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}