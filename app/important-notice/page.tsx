"use client";
import { Bell, Download, ExternalLink } from "lucide-react";

export default function ImportantNotices() {
  const notices = [
    { title: "Admission Open for Academic Year 2026-27", date: "Oct 10, 2025", category: "Admission", isNew: true },
    { title: "Final Examination Schedule - Grade X & XII", date: "Oct 05, 2025", category: "Examination", isNew: true },
    { title: "Annual Sports Meet Guidelines", date: "Sep 28, 2025", category: "Events", isNew: false },
  ];

  return (
    <main className="py-24 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">Important <span className="text-primary">Notices</span></h1>
        <div className="space-y-4">
          {notices.map((notice, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary/20 transition-all group">
              <div className="flex gap-4 items-start">
                <div className={`p-3 rounded-xl ${notice.isNew ? 'bg-primary text-white animate-pulse' : 'bg-slate-200 text-slate-500'}`}>
                  <Bell size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">{notice.category}</span>
                    {notice.isNew && <span className="bg-red-500 text-white text-[8px] px-2 py-0.5 rounded-full font-bold uppercase">New</span>}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{notice.title}</h3>
                  <p className="text-sm text-slate-400 mt-1">{notice.date}</p>
                </div>
              </div>
              <button className="mt-6 md:mt-0 flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-white px-6 py-3 rounded-xl border border-slate-200 hover:bg-slate-900 hover:text-white transition-all">
                <Download size={16} /> Download PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}