export default function Registration() {
  return (
    <section className="bg-white pb-20">
      <div className="pt-20 pb-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Inquiry & Registration</h1>
          <p className="text-slate-500 mt-2">Submit your details and our admissions team will contact you.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 -translate-y-8">
        <form className="bg-white p-10 rounded-[2rem] shadow-2xl border border-slate-100 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Student Name</label>
              <input type="text" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary" placeholder="Full Name" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Grade Applying For</label>
              <select className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary">
                <option>Select Grade</option>
                <option>Grade 1</option>
                <option>Grade 11 (Science)</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Parent Phone Number</label>
            <input type="tel" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary" placeholder="+91" />
          </div>
          <button className="w-full bg-slate-900 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-primary transition-colors">Submit Inquiry</button>
        </form>
      </div>
    </section>
  );
}