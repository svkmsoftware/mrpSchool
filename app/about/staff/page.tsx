"use client";

import React, { useState } from "react";
import { GraduationCap, Mail, Award, Search, Users } from "lucide-react";

export default function StaffPage() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const staffMembers = [
    // ACADEMIC
    { name: "Manju Singh", role: "Principal", department: "Academic", qualification: "M.A. (English), B.Ed.", experience: "23 Years" },
    { name: "Aniket Sapkal", role: "TGT", department: "Academic", qualification: "B.Sc., M.Ed.", experience: "20 Years" },
    { name: "Jyoti Pundalwal", role: "Primary Teacher", department: "Academic", qualification: "M.A. B.Ed.", experience: "27 Years" },
    { name: "Sushma Poojari", role: "TGT", department: "Academic", qualification: "M.Sc, B.Ed", experience: "14 Years" },
    { name: "Kavita Das", role: "Primary Teacher", department: "Academic", qualification: "B.Com, M.A. (English) B.Ed", experience: "11 Years" },
    { name: "Sachin Gaikwad", role: "TGT", department: "Academic", qualification: "B.A. B.Ed", experience: "13 Years" },
    { name: "Vipinkumar Yadav", role: "PGT", department: "Academic", qualification: "M.Sc , M.Ed", experience: "12 Years" },
    { name: "Sonal Bhardwaj", role: "Primary Teacher", department: "Academic", qualification: "M.Com, B.Ed.", experience: "10 Years" },
    { name: "Atul Tare", role: "PGT", department: "Academic", qualification: "M.Sc., B.Ed.", experience: "33 Years" },
    { name: "Shraddha Kingaonkar", role: "TGT", department: "Academic", qualification: "M.A. B.Ed", experience: "11 Years" },
    { name: "Sunil Wadekar", role: "TGT", department: "Academic", qualification: "M.A. B.Ed.", experience: "24 Years" },
    { name: "Kamlesh Kumar Pandey", role: "TGT", department: "Academic", qualification: "M.A. B.Ed.", experience: "19 Years" },
    { name: "Sylvia Philip", role: "Primary Teacher", department: "Academic", qualification: "B.Com", experience: "7.9 Years" },
    { name: "Iris Victoria", role: "TGT", department: "Academic", qualification: "M.A. B.com., B.Ed.", experience: "19.8 Years" },
    { name: "Dependra Singh Chouhan", role: "TGT", department: "Academic", qualification: "B.Tech., B.Ed", experience: "11.9 Years" },
    { name: "Prafull Gurav", role: "TGT", department: "Academic", qualification: "B.Sc, B.E.d", experience: "8 Years" },
    { name: "Rajesh Thakare", role: "TGT", department: "Academic", qualification: "M.A., M.Ed.", experience: "8.8 Years" },
    { name: "Vishnukumar Gautam", role: "TGT", department: "Academic", qualification: "M.A. B.Ed.", experience: "10.5 Years" },
    { name: "Utpal Pawar", role: "PGT", department: "Academic", qualification: "M.Sc., B.Ed.", experience: "10.4 Years" },
    
    // SPORTS & ARTS
    { name: "Kunal Surve", role: "Head Coach & Sports Co-ordinator", department: "Sports", qualification: "B.A. NIS", experience: "21 Years" },
    { name: "Dhiraj Patil", role: "Sports Co-ordinator", department: "Sports", qualification: "M.Com, B.P.Ed.", experience: "8 Years" },
    { name: "Rajesh Kumar", role: "Coach - Volleyball", department: "Sports", qualification: "H.S.C. M.P.Ed", experience: "7 Years" },
    { name: "Kunal Girase", role: "Coach - Cricket", department: "Sports", qualification: "B.A.", experience: "6.9 Years" },
    { name: "Karan Patil", role: "Coach - Handball", department: "Sports", qualification: "B.A. M.P.Ed", experience: "7.8 Years" },
    { name: "Dipak Jagtap", role: "Head Coach - Cricket", department: "Sports", qualification: "B.Com", experience: "11.9 Years" },
    { name: "Harish Padvi", role: "Coach - Skating", department: "Sports", qualification: "B.A.", experience: "5 Years" },
    { name: "Udit Chaudhari", role: "Coach - Football", department: "Sports", qualification: "HSC, BPES", experience: "3.8 Years" },
    { name: "Pooja Kapate", role: "Coach - Football", department: "Sports", qualification: "H.S.C M.P.Ed.", experience: "1 Year" },
    { name: "Shubham Kadam", role: "Coach - Swimming", department: "Sports", qualification: "H.S.C. M.P.Ed", experience: "1.9 Years" },
    { name: "Rajendra Singh Girase", role: "Trainer - Horse Riding", department: "Sports", qualification: "SSC, NCC", experience: "28 Years" },
    { name: "Dharma Sharma", role: "Dance Teacher", department: "Sports", qualification: "F.Y.B.Com", experience: "16 Years" },
    { name: "Kishor Patil", role: "Art Teacher", department: "Sports", qualification: "B.Sc, B.F.A.", experience: "8 Years" },

    // ADMINISTRATION
    { name: "Ranjankumar Senapati", role: "Administrative Manager", department: "Admin", qualification: "M.B.A., M.Sc", experience: "21.6 Years" },
    { name: "Aniket Dandge", role: "Admin Officer", department: "Admin", qualification: "B.A., M.B.A.", experience: "15 Years" },
    { name: "Mohit Jain", role: "Accountant", department: "Admin", qualification: "M.Com, M.B.A.", experience: "13.5 Years" },
    { name: "Nimba Patil", role: "Asst. Librarian", department: "Admin", qualification: "M.A. M.Lib.Sci", experience: "17 Years" },
    { name: "Yatin Thorat", role: "Jr. Clerk", department: "Admin", qualification: "M.Com", experience: "13 Years" },

    // SUPPORT & RESIDENTIAL
    { name: "Shivani Kadambande", role: "Sr. Lady Warden", department: "Residential", qualification: "B.Com., LLB", experience: "3.5 Years" },
    { name: "Ravi Ghadge", role: "Warden", department: "Residential", qualification: "B.A. B.P.Ed.", experience: "13.8 Years" },
    { name: "Ishwar Patil", role: "Warden", department: "Residential", qualification: "B.A.", experience: "8.5 Years" },
    { name: "Mamta Pawara", role: "Nurse", department: "Residential", qualification: "H.S.C. G.N.M.", experience: "7.5 Years" },
  ];

  const filteredStaff = staffMembers.filter((s) => {
    const matchesFilter = filter === "All" || s.department === filter;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Our Team</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.9] mb-6">
            Meet Our <br /> <span className="text-primary text-outline">Mentors</span>
          </h1>
          <p className="max-w-2xl text-slate-600 text-lg leading-relaxed">
            A diverse group of 50+ experienced professionals dedicated to academic excellence, 
            world-class sports training, and nurturing residential care.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-4 justify-between items-center">
          <div className="flex gap-2 overflow-x-auto no-scrollbar w-full lg:w-auto">
            {["All", "Academic", "Sports", "Admin", "Residential"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shrink-0 ${
                  filter === cat ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search by name or role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3 bg-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStaff.map((staff, i) => (
            <div key={i} className="group bg-slate-50 p-8 rounded-[2.5rem] border border-transparent hover:border-slate-200 hover:bg-white transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                  <Users size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white rounded-full border border-slate-100 text-slate-400">
                  {staff.department}
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-1 group-hover:text-primary transition-colors">{staff.name}</h3>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-6">{staff.role}</p>
              
              <div className="space-y-3 pt-6 border-t border-slate-200/50">
                <div className="flex gap-3 items-start">
                  <GraduationCap size={16} className="text-slate-400 mt-1 shrink-0" />
                  <span className="text-xs text-slate-600 leading-relaxed"><strong>Edu:</strong> {staff.qualification}</span>
                </div>
                <div className="flex gap-3 items-center">
                  <Award size={16} className="text-slate-400 shrink-0" />
                  <span className="text-xs text-slate-600"><strong>Exp:</strong> {staff.experience}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredStaff.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 font-bold uppercase tracking-widest">No staff members found matching your criteria.</p>
          </div>
        )}
      </section>
    </main>
  );
}