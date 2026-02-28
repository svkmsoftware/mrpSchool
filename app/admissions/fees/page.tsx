"use client";

import { CreditCard, ShieldCheck, Clock, HelpCircle } from "lucide-react";

export default function FeeStructure() {
  return (
    <section className="bg-white">
      <div className="pt-20 pb-12 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Financials</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.85]">Fee <br /><span className="text-slate-400">Structure</span></h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-slate-900 text-white rounded-[3rem] p-12 mb-12 relative overflow-hidden">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Payment Policy</h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            As a residential CBSE institution, our fee structure is designed to be comprehensive, 
            covering academics, residential facilities, and holistic development programs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start">
              <Clock className="text-primary" />
              <div>
                <p className="font-bold uppercase text-xs tracking-widest">Installments</p>
                <p className="text-sm text-slate-400">Fees are paid in structured installments to ensure parent convenience.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <ShieldCheck className="text-primary" />
              <div>
                <p className="font-bold uppercase text-xs tracking-widest">Confirmation</p>
                <p className="text-sm text-slate-400">Admission is confirmed only upon payment of the first installment.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Note: In a real app, you would map through a JSON of fees for Grade 1-12 here */}
        <div className="p-8 border-2 border-dashed border-slate-200 rounded-[2rem] text-center">
          <HelpCircle className="mx-auto text-slate-300 mb-4" size={48} />
          <h3 className="text-xl font-black text-slate-900 uppercase">Detailed Fee Schedule</h3>
          <p className="text-slate-500 mb-6">Please contact our admissions office for the current academic year's grade-wise fee break-up.</p>
          <a href="tel:+910000000000" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-black uppercase text-xs tracking-widest">+91-0000000000</a>
        </div>
      </div>
    </section>
  );
}