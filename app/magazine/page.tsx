"use client";
import { BookOpen } from "lucide-react";

export default function SchoolMagazine() {
  return (
    <main className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <h1 className="text-5xl font-black uppercase tracking-tighter">The <span className="text-primary">Chronicle</span></h1>
          <p className="max-w-xs text-slate-500 text-sm italic">Capturing a year of creativity, student journalism, and artistic expression at MRPS.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[2025, 2024, 2023].map((year) => (
            <div key={year} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-slate-100 rounded-2xl mb-4 border border-slate-200 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-black text-4xl">
                  {year}
                </div>
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                  <BookOpen className="text-white" size={40} />
                </div>
              </div>
              <h4 className="font-bold text-slate-900 text-center uppercase tracking-widest text-xs">Annual Edition {year}</h4>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}