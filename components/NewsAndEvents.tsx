"use client";

import { CalendarDays, ArrowRight, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function NewsAndEvents() {
  const events = [
    { title: "Annual Day 2024", date: "Mar 15", time: "10:00 AM", location: "School Auditorium" },
    { title: "Inter-School Sports Meet", date: "Apr 02", time: "08:30 AM", location: "Main Ground" },
    { title: "Science Exhibition", date: "Apr 10", time: "09:00 AM", location: "STEM Lab" },
  ];

  const news = [
    { 
      title: "MRPS Students Win State Level Debate", 
      date: "Feb 12, 2024", 
      category: "Achievement",
      image: "/images/news1.jpg" 
    },
    { 
      title: "New Robotics Lab Inaugurated", 
      date: "Feb 05, 2024", 
      category: "Campus",
      image: "/images/news2.jpg" 
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: Upcoming Events */}
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight flex items-center gap-3">
              <CalendarDays className="text-primary" /> Upcoming Events
            </h3>
            <div className="space-y-4">
              {events.map((event, i) => (
                <div key={i} className="group flex gap-6 p-5 rounded-2xl bg-slate-50 hover:bg-primary hover:text-white transition-all duration-300">
                  <div className="flex flex-col items-center justify-center bg-white text-primary px-4 py-2 rounded-xl shadow-sm h-fit group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <span className="text-xl font-black leading-none">{event.date.split(' ')[1]}</span>
                    <span className="text-xs font-bold uppercase">{event.date.split(' ')[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{event.title}</h4>
                    <div className="flex flex-wrap gap-4 text-xs opacity-70 font-medium">
                      <span className="flex items-center gap-1"><Clock size={14} /> {event.time}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Latest News */}
          <div className="lg:col-span-7">
            <div className="flex justify-between items-end mb-8">
              <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Latest News</h3>
              <Link href="/news" className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
                View All News <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {news.map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative h-48 overflow-hidden rounded-2xl mb-4">
                    <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-bold uppercase">{item.date}</span>
                  <h4 className="text-xl font-bold text-slate-900 mt-1 group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}