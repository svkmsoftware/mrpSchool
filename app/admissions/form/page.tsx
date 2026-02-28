"use client";

import { Download, FileText } from "lucide-react";

export default function AdmissionForm() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <FileText className="text-primary" size={40} />
        </div>
        <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">Official Admission Form</h2>
        <p className="text-slate-500 text-lg leading-relaxed mb-12">
          You can download the comprehensive admission form for the Academic Year 2026-27. 
          Please fill it manually and submit it at the school office along with the required documents.
        </p>
        
        <div className="bg-slate-50 p-8 rounded-[2rem] border-2 border-dashed border-slate-200 flex flex-col items-center">
          <p className="font-bold text-slate-400 uppercase text-[10px] tracking-widest mb-6 italic">File Format: PDF (2.4 MB)</p>
          <button className="flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-xl">
            <Download size={20} /> Download Form
          </button>
        </div>
      </div>
    </section>
  );
}