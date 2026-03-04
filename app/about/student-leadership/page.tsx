"use client";

import React from "react";
import { Star, ShieldCheck, Users, Target } from "lucide-react";

export default function LeadershipPage() {
  return (
    <main className="bg-white">
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-6">Building <br/><span className="text-primary">Leaders</span></h1>
            <p className="text-slate-600 text-lg">At MRPS, students learn to empathize, collaborate, and lead with integrity through various representative roles.</p>
          </div>
          <div className="flex gap-4">
            <div className="h-20 w-20 bg-primary flex items-center justify-center rounded-3xl text-white shadow-xl shadow-primary/20"><Star size={32} /></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-12 bg-slate-900 text-white rounded-[3.5rem]">
            <ShieldCheck className="text-primary mb-6" size={40} />
            <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">The Prefectural Board</h3>
            <p className="text-slate-400 leading-relaxed">Our student leaders assist in managing campus discipline, organizing events, and representing the student voice to the management.</p>
          </div>
          <div className="p-12 bg-slate-50 border border-slate-100 rounded-[3.5rem]">
            <Users className="text-primary mb-6" size={40} />
            <h3 className="text-2xl font-black uppercase mb-4 tracking-tight text-slate-900">Mess Committee</h3>
            <p className="text-slate-500 leading-relaxed">Student representatives work alongside the nutritionist to review and update the school menu, ensuring balanced and diverse nutrition.</p>
          </div>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-12 block">Core Leadership Values</h3>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
             {["Integrity", "Resilience", "Empathy", "Accountability"].map((val, i) => (
               <div key={i} className="group">
                 <span className="text-4xl md:text-6xl font-black text-slate-200 group-hover:text-primary transition-colors cursor-default uppercase tracking-tighter">{val}</span>
               </div>
             ))}
          </div>
        </div>
      </section>
    </main>
  );
}