"use client";
import { Play } from "lucide-react";

export default function VideoGallery() {
  return (
    <main className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-16">MRPS <span className="text-primary text-outline">TV</span></h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-video bg-slate-900 rounded-3xl overflow-hidden relative flex items-center justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform">
                  <Play fill="currentColor" size={24} />
                </div>
                <div className="absolute bottom-4 left-4 text-white/50 text-[10px] font-black uppercase tracking-[0.3em]">Virtual Tour</div>
              </div>
              <h4 className="mt-6 text-lg font-bold uppercase tracking-tight leading-tight">Campus Virtual Tour & Drone View</h4>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}