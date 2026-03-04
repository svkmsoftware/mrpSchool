"use client";

import React from "react";
import { Utensils, Apple, Users, CheckCircle2 } from "lucide-react";

export default function SchoolMess() {
  return (
    <main className="bg-white pb-24">
      <section className="py-24 bg-slate-50 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <Utensils className="mx-auto text-primary mb-6" size={48} />
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic mb-6">
            “Good nutrition is the foundation of healthy minds and bright futures.”
          </h2>
          <p className="text-slate-500 font-medium">State-of-the-art kitchen facilities ensuring the highest standards of hygiene and quality.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-black uppercase tracking-tighter">The Mess <span className="text-primary text-outline">Committee</span></h3>
            <p className="text-slate-600 leading-relaxed">The menu is reviewed and updated regularly in consultation with our committee, ensuring balanced and diverse meals.</p>
            <div className="space-y-4">
              {["Expert Nutritionist", "Selected Staff Members", "Student Representatives"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span className="font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 p-12 rounded-[3rem] text-white">
            <h3 className="text-2xl font-black uppercase mb-6">Dining Etiquette</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">Members of the staff dine alongside students, encouraging healthy eating habits, proper portions, and informal interaction.</p>
            <div className="p-8 border-2 border-dashed border-white/20 rounded-3xl flex items-center justify-center text-slate-500">
               
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}