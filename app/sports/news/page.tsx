"use client";

import { Newspaper, Calendar, ArrowRight } from "lucide-react";

export default function SportsNews() {
  const news = [
    { title: "MRPS Cricket Team Wins District Championship", date: "Oct 24, 2025", category: "Cricket" },
    { title: "National Level Taekwondo Medals for Grade 9 Students", date: "Sep 12, 2025", category: "Martial Arts" },
    { title: "New Olympic-sized Swimming Pool Inaugurated", date: "Aug 05, 2025", category: "Infrastructure" }
  ];

  return (
    <main className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl font-black uppercase tracking-tighter">Sports <span className="text-primary">Highlights</span></h2>
          <Newspaper className="text-slate-200" size={80} />
        </div>
        <div className="grid gap-6">
          {news.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center group cursor-pointer hover:shadow-xl transition-all">
              <div className="flex flex-col gap-2">
                <span className="text-primary font-bold text-xs uppercase tracking-widest">{item.category}</span>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <Calendar size={14} /> {item.date}
                </div>
              </div>
              <div className="mt-4 md:mt-0 h-12 w-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <ArrowRight size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}