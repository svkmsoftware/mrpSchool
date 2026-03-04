"use client";

import React from "react";
import { Map, Wind, Shield, Droplets, Landmark, Trees } from "lucide-react";

export default function CampusPage() {
  const facilities = [
    { title: "Academic Blocks", icon: <Landmark />, desc: "Modern classrooms with integrated smart technology." },
    { title: "Hydro Harvester", icon: <Wind />, desc: "Innovative system producing 1000L of potable water from air daily." },
    { title: "24/7 Security", icon: <Shield />, desc: "Fully covered campus with round-the-clock CCTV surveillance." },
    { title: "Water Harvesting", icon: <Droplets />, desc: "Advanced systems saving thousands of liters annually." },
  ];

  return (
    <main className="bg-white">
      <section className="relative pt-24 pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6 block">The Infrastructure</span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
            40 Acres of <br /><span className="text-primary">Excellence</span>
          </h1>
          <p className="max-w-2xl text-slate-400 text-lg leading-relaxed">
            Nestled in the serene outskirts of Shirpur, our campus is a blend of modern architecture 
            and sustainable living, designed to inspire learning and growth.
          </p>
        </div>
        <Trees className="absolute right-[-5%] bottom-[-10%] text-white/5" size={500} />
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {facilities.map((f, i) => (
          <div key={i} className="p-10 border border-slate-100 rounded-[3rem] hover:bg-slate-50 transition-all">
            <div className="text-primary mb-6">{f.icon}</div>
            <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{f.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Photography Placeholder Section */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="aspect-[21/9] bg-slate-100 rounded-[4rem] border-4 border-dashed border-slate-200 flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest text-xs">
          [Wide-Angle Aerial Campus Photography - To be added by professional]
        </div>
      </section>
    </main>
  );
}