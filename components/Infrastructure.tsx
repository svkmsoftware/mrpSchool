"use client";

import { Monitor, FlaskConical, Trophy, BookText, ArrowUpRight, ShieldCheck, Utensils } from "lucide-react";
import Link from "next/link";

export default function Infrastructure() {
  const facilities = [
    {
      title: "Digital Ecosystem",
      desc: "Apple iPads for every student and interactive smartboards in every classroom.",
      icon: <Monitor size={20} />,
      image: "/images/carousel/slider_1.jpeg",
      gridClass: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Science & STEM",
      desc: "State-of-the-art Physics, Chemistry, and Bio labs alongside advanced Robotics centers.",
      icon: <FlaskConical size={20} />,
      image: "/images/infrastructure/chemistry_lab.jpeg",
      gridClass: "md:col-span-1 md:row-span-2",
    },
    {
      title: "Elite Athletics",
      desc: "Olympic-sized pool, floodlit courts, and professional Horse Riding facilities.",
      icon: <Trophy size={20} />,
      image: "/images/infrastructure/swimmingpool_sports.jpeg",
      gridClass: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Residential Life",
      desc: "Safe, separate hostels with RO water, laundry, and 24/7 medical infirmary.",
      icon: <ShieldCheck size={20} />,
      image: "/images/infrastructure/hostel.jpeg", 
      gridClass: "md:col-span-1 md:row-span-1",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3">Campus Life</h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
              World-Class <br /> Facilities
            </h3>
            <p className="max-w-md text-slate-600 font-medium">
              From Olympic-sized pools to Apple-integrated classrooms, we provide an environment built for the future.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {facilities.map((item, index) => (
            <div key={index} className={`group relative overflow-hidden rounded-3xl bg-slate-200 min-h-[300px] md:min-h-0 ${item.gridClass}`}>
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary rounded-lg text-white">{item.icon}</div>
                  <h4 className="text-2xl font-bold uppercase tracking-tight">{item.title}</h4>
                </div>
                <p className="text-white/80 text-sm max-w-xs transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 italic">
                  {item.desc}
                </p>
                <Link href="/infrastructure" className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white hover:text-primary">
                  <ArrowUpRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}