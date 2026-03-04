"use client";

import { Image as ImageIcon, Maximize2 } from "lucide-react";

export default function SportsGallery() {
  return (
    <main className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <ImageIcon className="mx-auto text-primary mb-4" />
        <h1 className="text-5xl font-black uppercase tracking-tighter">Action <span className="text-primary">Gallery</span></h1>
        <p className="text-slate-500 mt-4">Capturing moments of triumph, discipline, and team spirit.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Placeholder for professional photos */}
        {[1,2,3,4,5,6,7,8].map((img) => (
          <div key={img} className="relative aspect-square bg-slate-100 rounded-3xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
              <Maximize2 size={32} />
            </div>
            <div className="w-full h-full flex items-center justify-center text-slate-300 text-xs font-bold uppercase">
              Sports Photo {img}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}