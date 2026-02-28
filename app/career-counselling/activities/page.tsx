"use client";

import React from "react";
import { 
  Users2, 
  Lightbulb, 
  Tent, 
  GraduationCap, 
  HeartHandshake, 
  ShieldAlert 
} from "lucide-react";

export default function CareerActivities() {
  const activities = [
    {
      title: "Holistic Growth Workshops",
      desc: "Conducted regularly in school houses and dormitories to foster positive friendships and social integration.",
      icon: <Users2 size={24} />,
      tag: "Social"
    },
    {
      title: "Emotional Wellness Sessions",
      desc: "Identifying and addressing student difficulties to ensure emotional hurdles don't block academic success.",
      icon: <Lightbulb size={24} />,
      tag: "Well-being"
    },
    {
      title: "Residential Life Support",
      desc: "Focused sessions on homesickness, personal hygiene, and health within the dormitory environment.",
      icon: <Tent size={24} />,
      tag: "Boarding"
    },
    {
      title: "Academic Intervention",
      desc: "Specialized support for students experiencing performance drops through personalized scientific guidance.",
      icon: <GraduationCap size={24} />,
      tag: "Academic"
    },
    {
      title: "Anti-Bullying Advocacy",
      desc: "Structured group sessions addressing teasing, bullying, and acceptance into peer groups.",
      icon: <ShieldAlert size={24} />,
      tag: "Safety"
    },
    {
      title: "Individual Help Sessions",
      desc: "Encouraging students to reach out for one-on-one sessions to discuss personal and professional ambitions.",
      icon: <HeartHandshake size={24} />,
      tag: "Personal"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Student Support</span>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">
            Guidance <span className="text-slate-400">&</span> <br />Activities
          </h1>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((item, i) => (
            <div key={i} className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                {item.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">{item.tag}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}