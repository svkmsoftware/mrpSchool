"use client";

import React from "react";
import { 
  Quote, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Star,
  Award,
  BookOpen,
  Heart,
  ChevronRight
} from "lucide-react";

const alumniData = [
  {
    name: "Mihir Sanghavi",
    batch: "Batch 2021",
    title: "Higher Education Aspirant",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop",
    heading: "Memories of MRPS",
    content: "My schooling days at MRPS were truly some of the most beautiful and memorable days of my life. Even today, when life has moved forward, I often find myself missing those simple and joyful moments. MRPS was not only about academics but also about the culture, friendships, supportive teachers, sports, and unforgettable hostel life. Those experiences taught me many good values and habits that continue to guide me today. In my opinion, everyone should experience hostel life at least once. MRPS is truly the best residential school, as it not only educates you but also shapes your character and helps you grow into the best version of yourself.",
    accent: "bg-purple-600",
    lightAccent: "bg-purple-50",
    icon: <Heart className="text-purple-600" size={16} />
  },
  {
    name: "Deepak Goyal",
    batch: "Batch 2018",
    title: "IIT Madras Alumni",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&fit=crop",
    heading: "The Journey That Shaped Me",
    content: "Joining Mukesh R. Patel Residential CBSE School at the age of eleven was the beginning of a journey that shaped my character and independence. Living away from home was challenging at first, but the disciplined environment, constant encouragement from dedicated teachers, and the support of friends helped me grow stronger with each passing year. I feel truly fortunate to have studied in such a school with world-class infrastructure and excellent facilities that provided the perfect environment for learning and growth. The school not only guided me academically but also instilled confidence and leadership. I remain deeply grateful for the care, guidance, and values imparted here, which transformed a hesitant child into a confident individual. Mukesh R. Patel School will always remain a place that built the foundation of who I am today.",
    accent: "bg-blue-600",
    lightAccent: "bg-blue-50",
    icon: <Award className="text-blue-600" size={16} />
  },
  {
    name: "Pinkal Agarwal",
    batch: "Batch 2018",
    title: "Professional Excellence",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop",
    heading: "Four Years That Shaped Me – MRPS",
    content: "MRPS is not just a school; it is a beautiful memory that will always live in my heart. The four years I spent here were filled with learning, friendship, laughter, and unforgettable experiences. From hostel life and early morning routines to the joy of sports, classes, and countless moments with friends, every day added something special to who I am today. The guidance of our teachers, the discipline of the school, and the strong bonds of friendship shaped my personality and gave me confidence to face life ahead. Even though time has moved on and everyone is busy with their own journeys, the memories of MRPS remain precious. MRPS will always remain the place where my journey began and memories for a lifetime were made.",
    accent: "bg-orange-600",
    lightAccent: "bg-orange-50",
    icon: <Star className="text-orange-600" size={16} />
  },
  {
    name: "Pratiksha Somani",
    batch: "Batch 2019",
    title: "Chartered Accountant (Final Stage)",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&fit=crop",
    heading: "A Home Away From Home",
    content: "There are places that do not just educate you; they shape you and quietly become a part of who you are. For me, that place will always be MRPS. Today, I am proud to share that I am pursuing the Chartered Accountancy course and have reached its Final Stage. The discipline, determination, and academic foundation I received at MRPS have guided me throughout this journey. Beyond academics, what truly made the experience special was hostel life. Living away from home, surrounded by friends and caring staff who became like family, we were never treated merely as students; we were cared for like their own children. I will always remain grateful and proud to call myself an MRPian. The bonds I formed here will always remain my extended family.",
    accent: "bg-emerald-600",
    lightAccent: "bg-emerald-50",
    icon: <BookOpen className="text-emerald-600" size={16} />
  }
];

export default function PerfectAlumniPage() {
  return (
    <main className="bg-[#F8FAFC] pb-24 selection:bg-primary/10">
      {/* 1. REFINED HERO */}
      <section className="relative pt-24 pb-28 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-slate-200">
            <GraduationCap size={14} className="text-primary" />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em]">The Alumni Chronicle</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-tight mb-6">
            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-indigo-600">Impact</span>
          </h1>
          
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            From the quiet halls of our campus to prestigious global platforms, 
            these are the voices of students who became leaders.
          </p>
        </div>
      </section>

      {/* 2. STAGGERED TESTIMONIALS */}
      <section className="max-w-5xl mx-auto px-6 -mt-12 relative z-20 space-y-24">
        {alumniData.map((alumni, i) => (
          <div 
            key={i} 
            className={`group flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16 items-start`}
          >
            {/* Image Block */}
            <div className="w-full md:w-[300px] sticky top-24">
              <div className="relative">
                <div className={`absolute -inset-3 ${alumni.lightAccent} rounded-[2rem] -rotate-2 transition-transform group-hover:rotate-0 duration-500`}></div>
                <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden border-4 border-white shadow-xl">
                  <img 
                    src={alumni.image} 
                    alt={alumni.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <p className="text-[8px] font-black uppercase tracking-widest text-primary mb-0.5">Current Path</p>
                    <p className="text-[11px] font-bold leading-tight">{alumni.title}</p>
                  </div>
                </div>
                {/* Icon Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-slate-50">
                   <div className={`w-8 h-8 rounded-xl ${alumni.lightAccent} flex items-center justify-center`}>
                      {alumni.icon}
                   </div>
                </div>
              </div>

              <div className="mt-6 space-y-1">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">{alumni.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{alumni.batch}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-primary">MRPS Alumni</span>
                </div>
              </div>
            </div>

            {/* Content Block */}
            <div className="w-full md:flex-1 pt-2">
              <Quote className="text-slate-200 mb-4" size={40} strokeWidth={3} />
              <h4 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tight mb-4 leading-tight">
                {alumni.heading}
              </h4>
              <div className="relative">
                <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${alumni.accent} opacity-20 rounded-full`}></div>
                <p className="pl-6 text-sm md:text-base text-slate-600 leading-relaxed font-medium italic">
                  "{alumni.content}"[cite: 2]
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-3 text-primary font-black uppercase text-[9px] tracking-widest group/link cursor-pointer">
                <span>The {alumni.name} Journey</span>
                <ChevronRight size={12} className="transition-transform group-hover/link:translate-x-1" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. CTA */}
      <section className="mt-32 max-w-5xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight mb-6">
                Your <span className="text-primary">Future</span> <br />Starts Here.
              </h2>
              <p className="text-slate-400 text-sm md:text-base font-medium mb-8 leading-relaxed">
                Join a community that doesn't just educate, but shapes character and 
                builds foundations for a lifetime of success[cite: 2].
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="bg-primary text-white px-8 py-3.5 rounded-xl font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-transform">
                  Apply for Admission
                </button>
                <button className="bg-white/10 text-white border border-white/10 px-8 py-3.5 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-slate-900 transition-all">
                  Contact Counselor
                </button>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="aspect-[16/10] bg-gradient-to-br from-primary to-blue-600 rounded-2xl rotate-3 relative overflow-hidden shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1523050335392-938511794244?q=80&w=800&auto=format&fit=crop" 
                   className="w-full h-full object-cover opacity-40 mix-blend-overlay" 
                   alt="Campus"
                 />
                 <div className="absolute inset-0 flex items-center justify-center p-6">
                    <p className="text-xl font-black uppercase tracking-tighter text-center leading-none">
                      100% Residential <br />Excellence
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}