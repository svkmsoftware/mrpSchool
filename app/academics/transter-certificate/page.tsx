"use client";

import { FileText, Download, ShieldCheck, HelpCircle } from "lucide-react";

export default function TransferCertificatePage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="pt-24 pb-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Administrative Compliance</span>
          <h1 className="text-6xl font-black text-slate-900 uppercase tracking-tighter mt-4">
            Transfer <br /> <span className="text-slate-300">Certificate</span>
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <FileText className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Public Disclosure</h3>
            <p className="text-slate-500 text-sm max-w-lg font-medium leading-relaxed">
              In accordance with CBSE guidelines, the school maintains transparent records of student withdrawals and transfer certificates.
            </p>
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-3 hover:bg-primary transition-colors">
              <Download size={16} /> Access TC Database
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-slate-200">
            <div className="flex gap-4">
              <ShieldCheck className="text-primary shrink-0" />
              <div>
                <h5 className="text-xs font-black uppercase text-slate-900 mb-2">Verified Documents</h5>
                <p className="text-[11px] text-slate-500 font-medium">All certificates are digitally signed and verified by the school administration.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <HelpCircle className="text-primary shrink-0" />
              <div>
                <h5 className="text-xs font-black uppercase text-slate-900 mb-2">TC Procedure</h5>
                <p className="text-[11px] text-slate-500 font-medium">For withdrawal requests, please contact the administrative office at least 15 days in advance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
