"use client";

import React from "react";
import { Activity, Stethoscope, Truck, Building2, UserRoundCheck } from "lucide-react";

export default function MedicalFacilities() {
  return (
    <main className="bg-white">
       <section className="bg-primary py-24 px-6 text-white overflow-hidden relative">
        <Activity className="absolute right-[-5%] top-[-10%] text-white/10" size={400} />
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-6">Medical <br/>Care & <span className="text-slate-900">Sickbay</span></h1>
          <p className="max-w-xl text-white/80 text-lg">Proactive healthcare supervised by qualified doctors and compassionate residential nurses, operational 24 hours a day.</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-3xl hover:shadow-xl transition-all">
             <Truck className="text-primary mb-6" size={40} />
             <h4 className="text-xl font-bold mb-3">Emergency Response</h4>
             <p className="text-slate-500 text-sm">Dedicated on-campus ambulance service for immediate response to any medical emergency.</p>
          </div>
          <div className="p-8 border border-slate-100 rounded-3xl hover:shadow-xl transition-all">
             <Building2 className="text-primary mb-6" size={40} />
             <h4 className="text-xl font-bold mb-3">Hospital Tie-up</h4>
             <p className="text-slate-500 text-sm">Immediate access to advanced care via Indira Gandhi Memorial Hospital, Shirpur.</p>
          </div>
          <div className="p-8 border border-slate-100 rounded-3xl hover:shadow-xl transition-all">
             <UserRoundCheck className="text-primary mb-6" size={40} />
             <h4 className="text-xl font-bold mb-3">Expert Supervision</h4>
             <p className="text-slate-500 text-sm">Medical care provided under the supervision of a reputed and qualified physician.</p>
          </div>
        </div>

        {/* Specialists */}
        <div className="mt-20 p-12 bg-slate-50 rounded-[3rem]">
          <h3 className="text-2xl font-black uppercase mb-12 text-center">Visiting Specialists</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Dentists", "Ophthalmologists", "Dermatologists", "Gynaecologists", "General Physicians"].map((spec, i) => (
              <span key={i} className="bg-white px-8 py-4 rounded-full border border-slate-200 font-bold text-slate-700 shadow-sm">{spec}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}