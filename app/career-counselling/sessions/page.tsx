"use client";

import { 
  HeartPulse, 
  Brain, 
  UserCheck, 
  Users, 
  ShieldCheck, 
  Stethoscope,
  ArrowRight
} from "lucide-react";

export default function CounsellingSessions() {
  const counsellingProcess = [
    { step: "01", title: "Relationship Building", desc: "Establishing trust and a safe space." },
    { step: "02", title: "Problem Assessment", desc: "Identifying the root causes of distress." },
    { step: "03", title: "Goal Setting", desc: "Defining clear objectives for the student." },
    { step: "04", title: "Counselling Intervention", desc: "Active therapeutic work and strategies." },
    { step: "05", title: "Evaluation or Referral", desc: "Assessing progress or seeking specialist care." }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Holistic Well-being</span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
            Counselling & <span className="text-primary">Mental Health</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            According to WHO, Mental Health is the right of every human being. We support the growth of students holistically with sound mental, emotional, and physical health.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="bg-slate-50 p-8 rounded-3xl border-l-8 border-primary italic text-xl text-slate-700 font-medium">
            "For a person to Grow, they need an environment that provides them with genuineness, unconditional positive regard, acceptance and empathy."
            <span className="block text-sm font-bold mt-4 uppercase tracking-widest text-primary">— Carl Rogers</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            A counsellor is crucial in helping students become independent, self-assured, and self-determining adults who optimize their learning outcomes. We ensure that life's challenges do not hinder academic success.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Confidentiality", icon: <ShieldCheck /> },
            { label: "Active Listening", icon: <Users /> },
            { label: "Non-Judgemental", icon: <UserCheck /> },
            { label: "Scientific Method", icon: <Brain /> }
          ].map((item, i) => (
            <div key={i} className="p-6 border border-slate-100 rounded-2xl flex flex-col items-center text-center hover:shadow-lg transition-all">
              <div className="text-primary mb-3">{item.icon}</div>
              <span className="font-bold text-slate-800 text-sm uppercase">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* The 5-Step Process */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-12 text-center">Scientific Counselling Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {counsellingProcess.map((item, i) => (
              <div key={i} className="relative group">
                <div className="bg-white p-8 rounded-3xl border border-slate-200 h-full hover:border-primary transition-colors text-center">
                  <span className="text-4xl font-black text-slate-100 group-hover:text-primary/10 transition-colors block mb-4">{item.step}</span>
                  <h4 className="font-bold text-slate-900 mb-2 leading-tight">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
                {i < 4 && <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-slate-300 z-10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Experts */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">Expert Guidance</h3>
            <p className="text-white/80 mb-8 leading-relaxed">
              To nurture healthy and happy personalities, we offer services from our specialized team including Psychologist, Play therapist, and Counsellors available during and after school hours.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center">
                <Stethoscope size={32} />
              </div>
              <div>
                <p className="font-black text-xl leading-none">Miss Kalyani M. Pawar</p>
                <p className="text-sm text-white/70 uppercase font-bold tracking-widest mt-1">Psychologist & Play Therapist</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 p-8 rounded-3xl border border-white/20 w-full md:w-80">
            <h5 className="font-bold mb-4 uppercase tracking-widest text-sm">Key Focus Areas</h5>
            <ul className="space-y-2 text-sm text-white/80">
              <li>• Positive Friendships</li>
              <li>• Overcoming Bullying</li>
              <li>• Hygiene & Health</li>
              <li>• Homesickness Support</li>
              <li>• Academic Anxiety</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}