"use client";

import React from "react";
import { Trophy, Users, Timer, Target, Dumbbell } from "lucide-react";

// You can pass the specific sport as a prop or create separate files
export default function SportDetail({
  name = "Swimming",
  description = "Professional training from foundation to advanced levels.",
}) {
  return (
    <main className="bg-white">
      {/* Dynamic Hero Section */}
      <section className="relative h-[60vh] bg-slate-900 flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/sports/hero_pattern.jpg')] bg-cover"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block">
            MRPS Sports Academy
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter">
            {name}
          </h1>
        </div>
      </section>

      {/* Sport Stats & Info */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">
              Elite Coaching &{" "}
              <span className="text-primary">Infrastructure</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              At MRPS, {name} is more than a game—it's a discipline. Our 40-acre
              campus provides state-of-the-art facilities including
              professional-grade surfaces, floodlights for evening practice, and
              specialized equipment to help students reach national and
              international levels.
            </p>
            <div className="grid md:grid-cols-2 gap-6 pt-6">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <Target className="text-primary mb-4" />
                <h4 className="font-bold mb-2 uppercase text-sm tracking-widest">
                  Skill Focus
                </h4>
                <p className="text-sm text-slate-500">
                  Focusing on technique, strategic thinking, and physical
                  endurance tailored for {name}.
                </p>
              </div>
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <Users className="text-primary mb-4" />
                <h4 className="font-bold mb-2 uppercase text-sm tracking-widest">
                  Team Spirit
                </h4>
                <p className="text-sm text-slate-500">
                  Building camaraderie and leadership through internal leagues
                  and inter-school tournaments.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-10 text-white h-fit">
            <Trophy className="text-primary mb-6" size={40} />
            <h3 className="text-xl font-black uppercase mb-6 tracking-tight">
              Training Schedule
            </h3>
            <ul className="space-y-4 border-t border-white/10 pt-6">
              <li className="flex justify-between text-sm">
                <span className="text-slate-400">Morning Session</span>
                <span className="font-bold">6:00 AM - 7:30 AM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-slate-400">Evening Session</span>
                <span className="font-bold">4:30 PM - 6:00 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-slate-400">Special Coaching</span>
                <span className="font-bold text-primary">Sat - Sun</span>
              </li>
            </ul>
            <button className="w-full mt-8 py-4 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-xl hover:bg-white hover:text-primary transition-all">
              Enroll in Academy
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
