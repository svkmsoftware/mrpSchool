"use client";

import React from "react";
import {
  Star,
  ShieldCheck,
  Trophy,
  HeartHandshake,
  PenTool,
  Quote,
} from "lucide-react";

// --- Types & Interfaces ---

interface Student {
  name: string;
  role?: string;
  image: string;
}

interface House {
  house: string;
  color: string;
  captain: Student;
  vice: Student;
}

interface CouncilData {
  apex: Student[];
  houses: House[];
  juniors: Student[];
  boarding: Student[];
  clubs: {
    principal: Student[];
    editorial: Student[];
  };
}

interface StudentListCardProps extends Student {
  dark?: boolean;
}

// --- Data ---

const councilData: CouncilData = {
  apex: [
    { name: "Ranver Chavan", role: "Head Boy", image: "/api/placeholder/150/150" },
    { name: "Arushi Agrawal", role: "Head Girl", image: "/api/placeholder/150/150" },
    { name: "Haridip Patil", role: "Sports Captain", image: "/api/placeholder/150/150" },
    { name: "Ganesh Patil", role: "Cultural Secretary", image: "/api/placeholder/150/150" },
  ],
  houses: [
    { 
      house: "Charity", color: "bg-red-500",
      captain: { name: "Aaradhy Wadgaonkar", image: "/api/placeholder/100/100" },
      vice: { name: "Yashwardhan Rajput", image: "/api/placeholder/100/100" }
    },
    { 
      house: "Hope", color: "bg-blue-500",
      captain: { name: "Meet Jaiswal", image: "/api/placeholder/100/100" },
      vice: { name: "Jalak Bhat", image: "/api/placeholder/100/100" }
    },
    { 
      house: "Joy", color: "bg-yellow-500",
      captain: { name: "Gaurav Patil", image: "/api/placeholder/100/100" },
      vice: { name: "Kalpesh Bagul", image: "/api/placeholder/100/100" }
    },
    { 
      house: "Peace", color: "bg-emerald-500",
      captain: { name: "Ravinandan Patil", image: "/api/placeholder/100/100" },
      vice: { name: "Parth Patil", image: "/api/placeholder/100/100" }
    },
  ],
  juniors: [
    { name: "Chandan Mahajan", role: "Jr. Head Boy", image: "/api/placeholder/80/80" },
    { name: "Dhairya Shewale", role: "Jr. Head Girl", image: "/api/placeholder/80/80" },
    { name: "Khush Patil", role: "Jr. Sports Captain", image: "/api/placeholder/80/80" },
  ],
  boarding: [
    { name: "Jayesh Chaudhary", role: "Seniors (Boys)", image: "/api/placeholder/80/80" },
    { name: "Chirantan Chaudhary", role: "Juniors (Boys)", image: "/api/placeholder/80/80" },
    { name: "Jigisha Rathod", role: "Seniors (Girls)", image: "/api/placeholder/80/80" },
    { name: "Hetakshi Patil", role: "Juniors (Girls)", image: "/api/placeholder/80/80" },
  ],
  clubs: {
    principal: [
      { name: "Mayank Gerase", image: "/api/placeholder/60/60" },
      { name: "Aryan Jaiswal", image: "/api/placeholder/60/60" },
      { name: "Venkatesh Sonar", image: "/api/placeholder/60/60" },
      { name: "Manav Mali", image: "/api/placeholder/60/60" },
      { name: "Palak Mandlik", image: "/api/placeholder/60/60" },
      { name: "Kranti Bagul", image: "/api/placeholder/60/60" },
    ],
    editorial: [
      { name: "Diya Bhagwani", image: "/api/placeholder/60/60" },
      { name: "Araina Gracious", image: "/api/placeholder/60/60" }
    ],
  },
};

// --- Reusable Components ---

const StudentListCard: React.FC<StudentListCardProps> = ({ name, role, image, dark = false }) => (
  <div className={`flex items-center gap-4 border-b ${dark ? 'border-white/10' : 'border-slate-100'} pb-4`}>
    <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 shrink-0">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-col">
      <span className={`text-[11px] font-black uppercase ${dark ? 'text-white' : 'text-slate-900'}`}>{name}</span>
      {role && <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">{role}</span>}
    </div>
  </div>
);

// --- Main Page ---

export default function LeadershipPage() {
  return (
    <main className="bg-[#F8FAFC] pb-24 selection:bg-primary/10">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-28 overflow-hidden bg-white">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-1.5 rounded-full mb-6">
            <Star size={14} className="text-primary fill-primary" />
            <span className="text-xs font-bold uppercase tracking-widest">Student Governance</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.85] mb-8">
                Shaping <span className="text-primary">Future</span> Leaders
              </h1>
              <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-md">
                We identify individuals driven by inner motivation and channel their quest for excellence into positive community impact.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
              <Quote className="text-primary/20 mb-4" size={32} />
              <p className="text-slate-600 text-lg italic font-medium leading-relaxed">
                "Leadership is the art of inspiring others to willingly achieve a shared vision."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. APEX BOARD */}
      <section className="max-w-5xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {councilData.apex.map((leader, i) => (
            <div key={i} className="group bg-white p-4 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-100">
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-tight">{leader.name}</h4>
              <p className="text-[10px] font-bold text-primary uppercase tracking-widest mt-1">{leader.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOUSE GOVERNANCE */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-12">House Governance</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {councilData.houses.map((house, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-3xl overflow-hidden">
              <div className={`h-1.5 w-full ${house.color}`}></div>
              <div className="p-6 space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400 block">{house.house} House</span>
                <StudentListCard name={house.captain.name} role="Captain" image={house.captain.image} />
                <StudentListCard name={house.vice.name} role="Vice Captain" image={house.vice.image} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. JUNIOR & BOARDING */}
      <section className="max-w-5xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="text-primary" size={20} />
            <h3 className="text-sm font-black uppercase tracking-widest">Junior Council</h3>
          </div>
          <div className="space-y-6">
            {councilData.juniors.map((j, i) => (
              <StudentListCard key={i} name={j.name} role={j.role} image={j.image} dark />
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10">
          <div className="flex items-center gap-3 mb-8">
            <HeartHandshake className="text-primary" size={20} />
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Boarding Prefects</h3>
          </div>
          <div className="space-y-6">
            {councilData.boarding.map((b, i) => (
              <StudentListCard key={i} name={b.name} role={b.role} image={b.image} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLUBS */}
      <section className="max-w-5xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-blue-50 rounded-[2.5rem] p-10">
          <div className="flex items-center gap-3 mb-8">
            <ShieldCheck className="text-blue-600" size={20} />
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Principal Club</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {councilData.clubs.principal.map((student, i) => (
              <StudentListCard key={i} name={student.name} image={student.image} />
            ))}
          </div>
        </div>

        <div className="bg-orange-50 rounded-[2.5rem] p-10">
          <div className="flex items-center gap-3 mb-8">
            <PenTool className="text-orange-600" size={20} />
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Editorial Team</h3>
          </div>
          <div className="space-y-6">
            {councilData.clubs.editorial.map((student, i) => (
              <StudentListCard key={i} name={student.name} image={student.image} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}