"use client";

import React from "react";
import { Home, Shirt, Clock, Users2, BookOpen, Tv } from "lucide-react";

export default function BoardingHouse() {
  return (
    <main className="bg-white">
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-xs">Ages 6 to 18</span>
            <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter mt-4 mb-8">Home Away <br/><span className="text-slate-400">From Home</span></h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              At MRPS, boarding begins from Grade 1. We provide a structured yet nurturing environment where children develop independence, responsibility, and lifelong friendships.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 font-bold text-slate-800 flex items-center gap-3">
                <Clock className="text-primary" size={20}/> Structured Routine
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 font-bold text-slate-800 flex items-center gap-3">
                <BookOpen className="text-primary" size={20}/> Supervised Study
              </div>
            </div>
          </div>
          <div className="relative aspect-video bg-slate-100 rounded-[3rem] overflow-hidden flex items-center justify-center text-slate-400 border-4 border-dashed border-slate-200">
             
          </div>
        </div>
      </section>

      {/* Laundry Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 flex items-center gap-4">
              <Shirt className="text-primary" /> Professional Laundry
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Managing the needs of 500+ boarders with daily collection and supervised washing/drying. Clothes are neatly folded and returned to individual cupboards.
            </p>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <p className="text-sm italic"><span className="text-primary font-bold">Mandatory:</span> Proper labeling with name tags is required for all clothing items to ensure accurate sorting.</p>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
             <div className="bg-white/10 p-8 rounded-3xl text-center">
               <span className="block text-3xl font-black text-primary mb-2">6 Days</span>
               <span className="text-xs uppercase font-bold tracking-widest">Weekly Service</span>
             </div>
             <div className="bg-white/10 p-8 rounded-3xl text-center">
               <span className="block text-3xl font-black text-primary mb-2">500+</span>
               <span className="text-xs uppercase font-bold tracking-widest">Boarding Capacity</span>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}