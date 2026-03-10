"use client";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    { name: "Mrs. Snehal Patil", role: "Parent", text: "The focus on digital learning with iPads has completely transformed how my son approaches complex science concepts." },
    { name: "Rahul Mehta", role: "Alumni (Batch 2022)", text: "MRPS isn't just a school; it's a launchpad. The leadership opportunities I got here helped me get into a top-tier university." },
  ];

  return (
    <main className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-black uppercase tracking-tighter text-center mb-16">Voice of our <span className="text-primary text-outline">Community</span></h1>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-12 rounded-[3rem] shadow-sm relative overflow-hidden">
              <Quote className="absolute -top-4 -right-4 text-slate-50" size={120} />
              <p className="relative z-10 text-slate-600 text-lg italic leading-relaxed mb-8">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full" />
                <div>
                  <h4 className="font-black uppercase text-sm tracking-tight">{r.name}</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}