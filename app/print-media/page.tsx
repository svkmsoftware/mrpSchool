"use client";
import { Newspaper } from "lucide-react";

export default function PrintMedia() {
  return (
    <main className="py-24 bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-16">In The <span className="text-primary">Press</span></h1>
        <div className="grid md:grid-cols-2 gap-12">
          {[1, 2].map(i => (
            <div key={i} className="group">
              <div className="aspect-video bg-white/5 rounded-[2rem] border border-white/10 mb-6 flex items-center justify-center text-white/20">
                <Newspaper size={64} />
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-tight group-hover:text-primary transition-colors">SVKM MRPS Recognized for Sustainability Initiatives</h3>
              <p className="text-slate-400 text-sm uppercase font-bold tracking-widest">The Times of India | Oct 2025</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}