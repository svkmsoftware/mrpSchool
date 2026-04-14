"use client";

import React from "react";
import {
  FileText,
  Download,
  ExternalLink,
  Calendar,
  Newspaper,
  ArrowRight,
  Search,
} from "lucide-react";

const newsletters = [
  {
    id: 1,
    title: "MRPS Times - Edition 02",
    date: "March 2026",
    description:
      "Annual sports day highlights, science fair winners, and upcoming exam schedules.",
    thumbnail: "/docs/newsletter/thumbnail/newletter_1_thumb.png", // Replace with actual PDF thumbnail image
    link: "/docs/newsletter/file/newsletter_1.pdf", // Link to PDF
    isLatest: true,
  },
  {
    id: 2,
    title: "MRPS Times - Edition 01",
    date: "January 2026",
    description:
      "New year resolutions, academic toppers, and the inauguration of the new robotics lab.",
    thumbnail: "/docs/newsletter/thumbnail/newletter_2_thumb.png",
    link: "/docs/newsletter/file/newsletter_2.pdf",
    isLatest: false,
  },
];

export default function NewslettersPage() {
  const latest = newsletters.find((n) => n.isLatest);
  const archives = newsletters.filter((n) => !n.isLatest);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HEADER */}
      <div className="relative pt-20 pb-12 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-3xl">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                Official Publications
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.85]">
                School <br />
                <span className="text-slate-400">Newsletters</span>
              </h1>
            </div>
            <div className="pb-2 hidden md:block">
              <div className="flex items-center gap-2 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                <Newspaper className="text-primary" size={16} />
                MRPS Times Editorial
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. LATEST EDITION (HERO) */}
      {latest && (
        <div className="py-20 max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative group">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="p-12 md:p-20 space-y-8">
                <div className="inline-block px-4 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                  Latest Edition
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                    {latest.title}
                  </h2>
                  <div className="flex items-center gap-4 text-slate-400 font-bold text-xs uppercase tracking-widest">
                    <Calendar size={14} className="text-primary" />
                    {latest.date}
                  </div>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md italic">
                  "{latest.description}"
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={latest.link}
                    className="flex items-center gap-3 bg-primary hover:bg-white text-white hover:text-slate-900 px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest transition-all duration-300"
                  >
                    Read Online <ExternalLink size={16} />
                  </a>
                  <a
                    href={latest.link}
                    download
                    className="flex items-center gap-3 border border-slate-700 hover:border-white text-white px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest transition-all duration-300"
                  >
                    Download PDF <Download size={16} />
                  </a>
                </div>
              </div>

              <div className="relative p-12 lg:p-0 flex justify-center lg:justify-end">
                <div className="relative w-72 md:w-80 h-[450px] bg-slate-800 rounded-xl shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 overflow-hidden border-4 border-slate-700">
                  <img
                    src={latest.thumbnail}
                    alt="Newsletter Cover"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                    <span className="text-white font-black uppercase text-[10px] tracking-[0.2em]">
                      Press Release • {latest.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Accent */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      )}

      {/* 3. ARCHIVES GRID */}
      <div className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-2">
              <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                Previous Archives
              </h3>
              <p className="text-slate-500 font-bold tracking-widest text-xs uppercase">
                Browse through the history of MRPS
              </p>
            </div>
            <div className="relative w-full md:w-72">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search by Month..."
                className="w-full bg-white border border-slate-200 rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {archives.map((news) => (
              <div
                key={news.id}
                className="group bg-white rounded-3xl border border-slate-100 p-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 mb-6 relative">
                  <img
                    src={news.thumbnail}
                    alt={news.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-900">
                    PDF
                  </div>
                </div>
                <div className="px-6 pb-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-1">
                        {news.date}
                      </p>
                      <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight leading-none">
                        {news.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                    {news.description}
                  </p>
                  <div className="pt-2 flex items-center justify-between border-t border-slate-50 mt-4">
                    <a
                      href={news.link}
                      className="text-slate-900 font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      View <ArrowRight size={14} />
                    </a>
                    <a
                      href={news.link}
                      download
                      className="text-slate-400 hover:text-primary transition-colors"
                    >
                      <Download size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. SUBSCRIPTION CTA */}
      <div className="py-24 max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex justify-center">
            <div className="p-4 bg-slate-100 rounded-full text-slate-400">
              <FileText size={32} />
            </div>
          </div>
          <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
            Stay Notified
          </h3>
          <p className="text-slate-500 text-sm">
            Sign up to receive the latest edition of MRPS Times directly in your
            inbox as soon as it's published.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-8">
            <input
              type="email"
              placeholder="Enter parent email address"
              className="flex-1 px-6 py-4 rounded-full bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-primary transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
