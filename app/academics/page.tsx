"use client";

import {
  BookOpen,
  GraduationCap,
  Microscope,
  Palette,
  Cpu,
  Trophy,
  CheckCircle,
  QuoteIcon,
  Trees,
  Users2,
  Music,
  Footprints,
} from "lucide-react";

export default function AcademicsPage() {
  return (
    <div className="bg-white">
      {/* 1. UNIFORM HEADER */}
      <div className="relative pt-20 pb-12 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-3xl">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                Learning Framework
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.85]">
                Academic <br />
                <span className="text-slate-400">Excellence</span>
              </h1>
            </div>
            <div className="pb-2">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                CBSE Affiliation No:{" "}
                <span className="text-primary">1130530</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. PHILOSOPHY SECTION */}
      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
              Rigorous, Dynamic & <br /> Experiential
            </h2>
            <div className="text-slate-600 space-y-4 leading-relaxed">
              <p>
                We offer a nationally recognized curriculum prescribed by the
                CBSE, New Delhi. Our students are systematically prepared for
                the <strong>AISSE</strong> and <strong>AISSCE</strong>{" "}
                examinations, equipping them to confidently face national
                competitive exams.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {[
                  "Conceptual Clarity",
                  "Analytical Thinking",
                  "Problem Solving",
                  "Personality Building",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 font-bold text-slate-800 text-xs uppercase tracking-widest"
                  >
                    <CheckCircle className="text-primary" size={16} /> {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-slate-900 p-10 rounded-[3rem] text-white relative overflow-hidden">
            <QuoteIcon
              className="absolute -top-4 -right-4 text-white/5"
              size={160}
            />
            <h4 className="text-primary font-bold uppercase text-xs tracking-widest mb-4">
              Why CBSE?
            </h4>
            <p className="italic text-lg text-slate-300 leading-relaxed">
              "The CBSE framework provides an excellent platform for students to
              build confidence and communication skills, preparing them for
              higher education and global opportunities in a knowledge-driven
              society."
            </p>
          </div>
        </div>
      </div>

      {/* 3. CURRICULUM STAGES */}
      <div className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {/* 3. THE 4-STAGE ACADEMIC JOURNEY */}
            <div className="bg-slate-50 py-24 border-y border-slate-100">
              <div className="max-w-7xl mx-auto px-6">
                <div className="space-y-32">
                  {/* STAGE 01: PRIMARY (1-5) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4 sticky top-24">
                      <span className="text-primary font-black text-6xl opacity-20">
                        01
                      </span>
                      <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                        Primary School
                      </h3>
                      <p className="text-slate-500 mt-2 text-sm font-bold tracking-[0.2em]">
                        GRADES 1 — 5
                      </p>
                      <div className="h-1 w-12 bg-primary mt-6 mb-6"></div>
                      <p className="text-slate-600 leading-relaxed">
                        Focusing on foundational literacy, numeracy, and
                        environmental awareness. We aim to spark curiosity
                        through a blend of core academics and creative arts.
                      </p>
                    </div>
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 z-10">
                      <div className="p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100">
                        <h5 className="text-xs font-black text-primary uppercase tracking-widest mb-4">
                          Academic Core
                        </h5>
                        <ul className="space-y-3 text-slate-700 font-bold text-sm uppercase italic">
                          <li>English & Hindi</li>
                          <li>Marathi</li>
                          <li>Mathematics</li>
                          <li>Environmental Studies</li>
                        </ul>
                      </div>
                      <div className="p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100">
                        <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
                          Skill Labs
                        </h5>
                        <ul className="space-y-3 text-slate-500 text-sm font-medium">
                          <li>Mental Math & Logic</li>
                          <li>Information Technology</li>
                          <li>Visual & Performing Arts</li>
                          <li>Health & Physical Ed.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* STAGE 02: MIDDLE (6-8) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4 sticky top-24">
                      <span className="text-primary font-black text-6xl opacity-20">
                        02
                      </span>
                      <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                        Middle School
                      </h3>
                      <p className="text-slate-500 mt-2 text-sm font-bold tracking-[0.2em]">
                        GRADES 6 — 8
                      </p>
                      <div className="h-1 w-12 bg-primary mt-6 mb-6"></div>
                      <p className="text-slate-600 leading-relaxed">
                        The{" "}
                        <span className="text-slate-900 font-bold">
                          Foundation Stage
                        </span>{" "}
                        for AISSE. Students transition from general studies to
                        specialized Science and Social Science disciplines.
                      </p>
                    </div>
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 z-10">
                      <div className="p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100">
                        <h5 className="text-xs font-black text-primary uppercase tracking-widest mb-4">
                          Core Disciplines
                        </h5>
                        <ul className="space-y-3 text-slate-700 font-bold text-sm uppercase italic">
                          <li>Science (Phy/Chem/Bio)</li>
                          <li>Social Sciences</li>
                          <li>Math & IT</li>
                          <li>Three Language Formula</li>
                        </ul>
                      </div>
                      <div className="p-8 bg-slate-900 rounded-[2rem] shadow-xl text-white">
                        <div className="inline-block px-3 py-1 bg-primary/20 rounded-full text-primary text-[10px] font-black uppercase tracking-widest mb-4">
                          Special Feature
                        </div>
                        <h5 className="text-xl font-black uppercase tracking-tight mb-2">
                          NEET/JEE Foundation
                        </h5>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          Grade 8 students begin specialized foundation modules
                          to prepare for future competitive exams.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* STAGE 03: SENIOR (9-10) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4 sticky top-24">
                      <span className="text-primary font-black text-6xl opacity-20">
                        03
                      </span>
                      <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                        Senior School
                      </h3>
                      <p className="text-slate-500 mt-2 text-sm font-bold tracking-[0.2em]">
                        GRADES 9 — 10
                      </p>
                      <div className="h-1 w-12 bg-primary mt-6 mb-6"></div>
                      <p className="text-slate-600 leading-relaxed">
                        The{" "}
                        <span className="text-slate-900 font-bold">
                          Certification Stage
                        </span>
                        . Rigorous preparation for the AISSE Board Exams with a
                        focus on career awareness.
                      </p>
                    </div>
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 z-10">
                      <div className="p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100">
                        <h5 className="text-xs font-black text-primary uppercase tracking-widest mb-4">
                          Board Curriculum
                        </h5>
                        <ul className="space-y-3 text-slate-700 font-bold text-sm uppercase italic">
                          <li>English (Lang & Lit)</li>
                          <li>Mathematics (Std/Basic)</li>
                          <li>Science & Social Science</li>
                          <li>Information Technology</li>
                        </ul>
                      </div>
                      <div className="p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100">
                        <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
                          Assessment Focus
                        </h5>
                        <p className="text-sm text-slate-500 mb-4 font-medium italic">
                          Integrated Preparation:
                        </p>
                        <ul className="space-y-2 text-[11px] font-black uppercase text-slate-800 tracking-widest">
                          <li className="flex gap-2">
                            <CheckCircle size={14} className="text-primary" />{" "}
                            Pre-Board Exams
                          </li>
                          <li className="flex gap-2">
                            <CheckCircle size={14} className="text-primary" />{" "}
                            Career Guidance
                          </li>
                          <li className="flex gap-2">
                            <CheckCircle size={14} className="text-primary" />{" "}
                            Competitive Readiness
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* STAGE 04: SENIOR SECONDARY (11-12) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4 sticky top-24">
                      <span className="text-primary font-black text-6xl opacity-20">
                        04
                      </span>
                      <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                        Senior Secondary
                      </h3>
                      <p className="text-slate-500 mt-2 text-sm font-bold tracking-[0.2em]">
                        GRADES 11 — 12
                      </p>
                      <div className="h-1 w-12 bg-primary mt-6 mb-6"></div>
                      <p className="text-slate-600 leading-relaxed">
                        Advanced Science Stream (AISSCE). Designed for students
                        aspiring for top-tier Engineering and Medical colleges.
                      </p>
                    </div>
                    <div className="lg:col-span-8 bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 overflow-hidden relative">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                        <div>
                          <h5 className="text-primary font-black uppercase tracking-widest text-[10px] mb-6">
                            JEE Curriculum (PCM)
                          </h5>
                          <ul className="space-y-3 text-slate-700 font-bold text-sm uppercase italic">
                            <li>English • Physics</li>
                            <li>Chemistry • Math</li>
                            <li>Computer Science / PE</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-primary font-black uppercase tracking-widest text-[10px] mb-6">
                            NEET Curriculum (PCB)
                          </h5>
                          <ul className="space-y-3 text-slate-700 font-bold text-sm uppercase italic">
                            <li>English • Physics</li>
                            <li>Chemistry • Biology</li>
                            <li>Computer Science / PE</li>
                          </ul>
                        </div>
                      </div>
                      {/* Internal Assessment Footer */}
                      <div className="mt-12 pt-8 border-t border-slate-100">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">
                          Internal Assessments
                        </p>
                        <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-600">
                          <span>General Studies</span> •{" "}
                          <span>Work Experience</span> •{" "}
                          <span>Health & PE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. CO-CURRICULAR & CLUBS */}
      <div className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4">
            Beyond Textbooks
          </h2>
          <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
            Nurturing Multiple Intelligences
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CCA Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <h4 className="font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                <Palette className="text-primary" size={20} /> CCA Activities
              </h4>
              <p className="text-sm text-slate-500 mb-6">
                Offered from Grades I to X throughout the week.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Classical Dance",
                  "Western Music",
                  "Arts & Craft",
                  "Paintings",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white rounded-full text-[10px] font-bold uppercase text-slate-700 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Clubs Section */}
          <div className="lg:col-span-2 p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm">
            <h4 className="font-black text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-2">
              <Trophy className="text-primary" size={20} /> Student Interest
              Clubs
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { n: "Nature", i: <Trees /> },
                { n: "Heritage", i: <BookOpen /> },
                { n: "Science", i: <Microscope /> },
                { n: "Oratory", i: <Users2 /> },
                { n: "Music", i: <Music /> },
                { n: "Dance", i: <Footprints /> },
                { n: "Art", i: <Palette /> },
                { n: "IT", i: <Cpu /> },
              ].map((club) => (
                <div
                  key={club.n}
                  className="flex flex-col items-center text-center p-4 hover:bg-slate-50 rounded-2xl transition-colors"
                >
                  <div className="text-slate-300 mb-2">{club.i}</div>
                  <span className="text-[10px] font-black uppercase text-slate-800 tracking-tighter">
                    {club.n} Club
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
