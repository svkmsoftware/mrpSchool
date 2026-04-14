"use client";

import { Cpu, Microscope, Atom, Lightbulb, Binary, Rocket } from "lucide-react";

export default function StemPage() {
  return (
    <div className="bg-white">
      <div className="pt-24 pb-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Innovation Hub</span>
            <h1 className="text-7xl font-black text-slate-900 uppercase tracking-tighter mt-6 leading-[0.85]">
              STEM <br /> <span className="text-slate-300">Focused</span>
            </h1>
            <p className="mt-8 text-slate-600 leading-relaxed text-sm font-medium italic">
              "Providing state-of-the-art infrastructure including nine wi-fi enabled laboratories for Science, Computer, and Robotics."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-slate-50 rounded-3xl flex flex-col items-center justify-center p-8 text-center group hover:bg-slate-900 transition-all">
              <Cpu className="text-primary mb-4" size={40} />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:text-white">Robotics Lab</span>
            </div>
            <div className="aspect-square bg-slate-50 rounded-3xl flex flex-col items-center justify-center p-8 text-center group hover:bg-slate-900 transition-all">
              <Microscope className="text-primary mb-4" size={40} />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:text-white">Applied Science</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 py-32 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tighter">Competitive Readiness</h2>
            <div className="h-1 w-20 bg-primary mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-10 border border-white/10 rounded-[3rem] hover:bg-white/5 transition-colors">
              <Rocket className="text-primary mb-6" />
              <h4 className="text-xl font-black uppercase mb-4">JEE/NEET Integrated</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-medium">
                Senior Secondary (XI-XII) Science stream is designed for rigorous entrance exam preparation alongside CBSE curriculum.
              </p>
            </div>
            <div className="p-10 border border-white/10 rounded-[3rem] hover:bg-white/5 transition-colors">
              <Binary className="text-primary mb-6" />
              <h4 className="text-xl font-black uppercase mb-4">Design Thinking</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-medium">
                Integrated in the Middle School (6-8) curriculum to foster problem-solving and innovation from an early age.
              </p>
            </div>
            <div className="p-10 border border-white/10 rounded-[3rem] hover:bg-white/5 transition-colors">
              <Lightbulb className="text-primary mb-6" />
              <h4 className="text-xl font-black uppercase mb-4">Kaushal Bodh</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-medium">
                Emphasis on skill and vocational education as per NEP 2020 guidelines for holistic development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}