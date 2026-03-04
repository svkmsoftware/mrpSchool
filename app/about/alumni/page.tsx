"use client";

import React from "react";
import { Globe, Award, Rocket, MessageSquareQuote } from "lucide-react";

export default function AlumniPage() {
  return (
    <main className="bg-white pb-24">
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Rocket className="mx-auto text-primary mb-6" size={40} />
          <h1 className="text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">Global <span className="text-primary">Legacy</span></h1>
          <p className="text-slate-500 max-w-xl mx-auto">Our alumni are making significant contributions to society as compassionate and confident global citizens.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white border border-slate-100 p-10 rounded-[3rem] hover:shadow-2xl transition-all">
              <MessageSquareQuote className="text-primary/20 mb-6" size={40} />
              <p className="text-slate-600 italic mb-8 font-medium leading-relaxed">
                "MRPS gave me the resilience and critical thinking skills needed to succeed in an ever-evolving world."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-slate-200 rounded-full"></div>
                <div>
                  <h5 className="font-black text-slate-900 uppercase tracking-tight text-sm">Alumni Name</h5>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Batch of 2018 | Medical Student</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}