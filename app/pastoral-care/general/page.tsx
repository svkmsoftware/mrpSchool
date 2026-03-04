"use client";

import React from "react";
import { ShieldCheck, Heart, Eye, Users, Leaf, Scale } from "lucide-react";

export default function PastoralGeneral() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-24 px-6 text-white text-center">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Commitment</span>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Pastoral <span className="text-primary">Care</span></h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-lg">Every child is seen, heard, valued, and supported in a nurturing environment that fosters resilience and integrity.</p>
      </section>

      {/* Framework Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100">
          <h3 className="text-2xl font-black uppercase mb-8 flex items-center gap-3">
            <ShieldCheck className="text-primary" /> Proactive Measures
          </h3>
          <ul className="space-y-6 text-slate-600 font-medium">
            <li className="flex gap-4">
              <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">✓</div>
              Life skills development to build resilience and emotional strength.
            </li>
            <li className="flex gap-4">
              <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">✓</div>
              Culture of respect, teamwork, and active participation.
            </li>
          </ul>
        </div>

        <div className="p-12 bg-slate-900 rounded-[3rem] text-white">
          <h3 className="text-2xl font-black uppercase mb-8 flex items-center gap-3">
            <Heart className="text-primary" /> Supportive Measures
          </h3>
          <ul className="space-y-6 text-slate-300">
            <li className="flex gap-4">
              <div className="h-6 w-6 rounded-full bg-white/10 text-primary flex items-center justify-center shrink-0">✓</div>
              Mentoring and counseling for emotional support.
            </li>
            <li className="flex gap-4">
              <div className="h-6 w-6 rounded-full bg-white/10 text-primary flex items-center justify-center shrink-0">✓</div>
              Guidance during times of difficulty and disappointment.
            </li>
          </ul>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Safety & <span className="text-primary">Security</span></h2>
            <div className="bg-white px-6 py-2 rounded-full border border-slate-200 text-xs font-bold uppercase tracking-widest">Priority One</div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "24/7 CCTV", desc: "Continuous monitoring to prevent bullying and safeguard students.", icon: <Eye /> },
              { title: "Zero Tolerance", desc: "Strict stance against drugs, alcohol, and tobacco use.", icon: <Scale /> },
              { title: "Eco-Security", desc: "A fully secured and covered 40-acre campus with trained guards.", icon: <Leaf /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm">
                <div className="text-primary mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}