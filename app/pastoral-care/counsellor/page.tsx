"use client";

import React from "react";
import { BrainCircuit, Droplets, Wind, Leaf, UserCircle2 } from "lucide-react";

export default function SchoolCounsellor() {
  return (
    <main className="bg-white">
      {/* Psychological Support */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[4rem] p-16 text-white flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/3">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">
              Student Well-being
            </span>
            <h2 className="text-4xl font-black uppercase mt-4 mb-6">
              Expert <span className="text-primary">Psychological</span> Support
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              To nurture healthy and happy personalities, MRPS offers the
              services of specialized professionals to manage psychological,
              personal, and social problems.
            </p>
            <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/10">
              <UserCircle2 className="text-primary" size={48} />
              <div>
                <h4 className="text-xl font-bold">Miss Kalyani M. Pawar</h4>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">
                  Psychologist, Play Therapist & Counsellor
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 bg-white/5 p-8 rounded-3xl border border-white/10">
            <h5 className="font-bold text-sm mb-4 uppercase tracking-widest text-primary">
              Focus Areas
            </h5>
            <ul className="text-sm text-slate-300 space-y-3">
              <li>• Academic obstacles</li>
              <li>• Interpersonal challenges</li>
              <li>• Maladjustment & Stress</li>
              <li>• Anxiety & Performance pressure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Leaf className="text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-black uppercase tracking-tighter">
              Sustainable <span className="text-primary">Living</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto mt-4">
              Nurturing environmentally responsible global citizens through
              lived experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100">
              <Droplets className="text-primary mb-6" size={40} />
              <h4 className="text-2xl font-black uppercase mb-4">
                Water Harvesting
              </h4>
              <p className="text-slate-500 leading-relaxed">
                Advanced initiatives saving thousands of litres annually,
                reinforcing responsible resource management across the campus.
              </p>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 relative overflow-hidden">
              <div className="relative z-10">
                <Wind className="text-primary mb-6" size={40} />
                <h4 className="text-2xl font-black uppercase mb-4">
                  Hydro Harvester
                </h4>
                <p className="text-slate-500 leading-relaxed">
                  Innovative technology extracting moisture from air to produce
                  up to{" "}
                  <span className="text-slate-900 font-black">1000 litres</span>{" "}
                  of potable water daily.
                </p>
              </div>
              <div className="absolute right-[-10%] bottom-[-10%] text-slate-50">
                <Wind size={200} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
