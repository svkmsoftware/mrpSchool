"use client";

import { Disc, Target, MoveUp } from "lucide-react";

export default function OtherSports() {
  const others = [
    { title: "Table Tennis", level: "Indoor Arena" },
    { title: "Chess", level: "Mental Excellence" },
    { title: "Archery", level: "Precision Training" },
    { title: "Yoga", level: "Spiritual Growth" }
  ];

  return (
    <main className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-16">Diverse <span className="text-primary">Athletics</span></h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {others.map((sport, i) => (
            <div key={i} className="group p-10 border border-slate-100 rounded-[2.5rem] hover:bg-slate-900 transition-all duration-500">
              <div className="mb-6 text-primary group-hover:scale-110 transition-transform"><Target /></div>
              <h3 className="text-xl font-bold group-hover:text-white mb-2">{sport.title}</h3>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{sport.level}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}