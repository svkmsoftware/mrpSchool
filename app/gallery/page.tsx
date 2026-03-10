"use client";
export default function PhotoGallery() {
  const categories = ["All", "Campus", "Sports", "Cultural", "Labs"];
  return (
    <main className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-8">Visual <span className="text-primary">Journey</span></h1>
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
          {categories.map(c => (
            <button key={c} className="px-6 py-2 rounded-full border border-slate-200 text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all whitespace-nowrap">
              {c}
            </button>
          ))}
        </div>
        <div className="columns-1 md:columns-3 gap-6 space-y-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="rounded-3xl overflow-hidden bg-slate-100 border border-slate-100 group">
              <div className="h-64 md:h-auto md:aspect-auto flex items-center justify-center text-slate-300 font-bold uppercase tracking-widest text-[10px]">
                [High Res Image {i}]
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}