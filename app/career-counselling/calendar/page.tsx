"use client";

import React from "react";
import { Clock, MapPin, CalendarCheck, Info } from "lucide-react";

export default function CareerCalendar() {
  const schedule = [
    { 
      period: "During School Hours", 
      activity: "Walk-in Counselling & Individual Help Sessions", 
      location: "Counselling Office",
      status: "Available Daily"
    },
    { 
      period: "After School Hours", 
      activity: "Specialized Career & Professional Ambition Planning", 
      location: "Academic Wing / Library",
      status: "By Appointment"
    },
    { 
      period: "Evening (Hostel Hours)", 
      activity: "Dormitory Visits & Group Interaction Sessions", 
      location: "Student Houses/Dorms",
      status: "Weekly Rotation"
    },
    { 
      period: "Termly Sessions", 
      activity: "Emotional Wellness & Mental Health Seminars", 
      location: "School Assembly Hall",
      status: "Scheduled Monthly"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      <section className="pt-20 pb-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">
              Engagement <span className="text-primary text-outline">Calendar</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our Counselling department operates in a scientific manner, maintaining 
              active availability to ensure a stress-free environment for every student.
            </p>
          </div>
          
          <div className="bg-slate-900 p-8 rounded-[2rem] text-white w-full md:w-80 shadow-xl">
            <div className="flex items-center gap-3 mb-4 text-primary">
              <Info size={20} />
              <span className="font-bold uppercase tracking-widest text-xs">Note</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed italic">
              "Session summaries and records are maintained with strict confidentiality using 
              secure code language."
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-4">
          {schedule.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary/20 transition-all">
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase tracking-tight">{item.period}</h4>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest">{item.status}</p>
                </div>
              </div>
              
              <div className="md:max-w-md">
                <p className="text-slate-700 font-medium mb-2">{item.activity}</p>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase">
                  <MapPin size={14} /> {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}