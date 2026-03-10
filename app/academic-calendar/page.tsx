"use client";
export default function AcademicCalendar() {
  const months = [
    { month: "June 2026", events: ["School Reopens", "Investiture Ceremony"] },
    { month: "August 2026", events: ["Independence Day Celebration", "Unit Test 1"] },
  ];

  return (
    <main className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">Academic <span className="text-primary text-outline">Planner</span></h1>
        <div className="grid md:grid-cols-3 gap-6">
          {months.map((m, i) => (
            <div key={i} className="border border-slate-100 rounded-3xl p-8 hover:bg-slate-900 group transition-all">
              <h3 className="text-2xl font-black uppercase mb-6 group-hover:text-primary transition-colors">{m.month}</h3>
              <ul className="space-y-4">
                {m.events.map((e, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-slate-500 group-hover:text-slate-300 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> {e}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}