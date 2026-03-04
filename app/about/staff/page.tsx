"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  HeartHandshake,
  Mail,
  Award,
  Search,
} from "lucide-react";

export default function StaffPage() {
  const [filter, setFilter] = useState("All");

  const staffMembers = [
    {
      name: "Mr. Vaibhav Andrews",
      role: "Chief Warden",
      department: "Residential",
      qualification: "M.A., Residential Life Mgmt",
      experience: "15+ Years",
      specialty: "Student Welfare & Pastoral Care",
    },
    {
      name: "Miss Kalyani M. Pawar",
      role: "School Psychologist",
      department: "Support",
      qualification: "M.Sc. Psychology, Play Therapy Cert.",
      experience: "8+ Years",
      specialty: "Child Development & Mental Health",
    },
    {
      name: "Senior Academic Lead",
      role: "Head of Science",
      department: "Academic",
      qualification: "Ph.D., M.Sc. Physics",
      experience: "12+ Years",
      specialty: "STEM Innovation",
    },
    // Add more staff members here
  ];

  const filteredStaff =
    filter === "All"
      ? staffMembers
      : staffMembers.filter((s) => s.department === filter);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-6">
            Meet Our <span className="text-primary">Mentors</span>
          </h1>
          <p className="max-w-2xl text-slate-400 text-lg">
            A dedicated team of educators, specialists, and pastoral care
            experts committed to the holistic growth of every student at Mukesh
            R. Patel School.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      {/* Fully Responsive Filter & Search Bar */}
      <section className="sticky top-0 z-20 bg-white border-b border-slate-100 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-6 lg:items-center justify-between">
          {/* Filter Buttons - Horizontal Scroll on Mobile */}
          <div className="flex overflow-x-auto pb-2 lg:pb-0 gap-2 no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
            {["All", "Academic", "Residential", "Support"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all shrink-0 ${
                  filter === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Responsive Search Bar */}
          <div className="relative w-full lg:w-80">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search staff or subject..."
              className="w-full pl-12 pr-6 py-3 bg-slate-100 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none text-slate-900 placeholder:text-slate-400"
            />
          </div>
        </div>
      </section>

      {/* Staff Directory Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStaff.map((staff, i) => (
            <div
              key={i}
              className="group bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              {/* Photo Placeholder */}
              <div className="aspect-[4/5] bg-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-black uppercase text-xs tracking-widest">
                  [Staff Photo]
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter text-slate-900">
                    {staff.department}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-8">
                <h3 className="text-2xl font-black text-slate-900 leading-tight mb-1">
                  {staff.name}
                </h3>
                <p className="text-primary font-bold text-xs uppercase tracking-widest mb-6">
                  {staff.role}
                </p>

                <div className="space-y-3 border-t border-slate-50 pt-6">
                  <div className="flex items-start gap-3 text-sm">
                    <GraduationCap size={16} className="text-slate-400 mt-1" />
                    <span className="text-slate-600">
                      <strong>Edu:</strong> {staff.qualification}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <Award size={16} className="text-slate-400 mt-1" />
                    <span className="text-slate-600">
                      <strong>Exp:</strong> {staff.experience}
                    </span>
                  </div>
                </div>

                <div className="mt-8 flex gap-2">
                  <button className="flex-1 bg-slate-900 text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-2">
                    <Mail size={14} /> Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recruitment CTA */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="bg-slate-50 rounded-[3rem] p-12 text-center border border-slate-100">
          <h3 className="text-3xl font-black uppercase mb-4">
            Join our Faculty
          </h3>
          <p className="text-slate-500 max-w-xl mx-auto mb-8">
            We are always looking for passionate educators and mentors to join
            our residential campus in Shirpur.
          </p>
          <button className="bg-primary text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform">
            Apply Now
          </button>
        </div>
      </section>
    </main>
  );
}
