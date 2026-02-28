"use client";

import {
  Award,
  BookOpen,
  Globe,
  ShieldCheck,
  Quote,
  Users,
} from "lucide-react";

export default function AboutSVKM() {
  return (
    <section className="bg-white">
      {/* 1. TYPOGRAPHIC HEADER (Uniform with MRPS Page) */}
      <div className="relative pt-20 pb-12 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-3xl">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                The Foundation
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.85]">
                Shri Vile Parle <br />
                <span className="text-slate-400">Kelavani Mandal</span>
              </h1>
            </div>
            <div className="md:w-1/3 pb-2 flex justify-end">
              <img
                src="/images/svkm_logo.png"
                alt="SVKM Logo"
                className="h-20 opacity-90 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. TRUST HISTORY & QUICK STATS */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8 space-y-6 text-slate-600 leading-relaxed text-lg font-medium">
            <p>
              From its humble beginnings in 1934, SVKM has grown into an
              educational colossus imparting high-level education to more than{" "}
              <strong className="text-slate-900">35,000 students</strong>. What
              started with the Rashtriya Shala in the wake of the National
              Movement is today a hallmark of academic excellence.
            </p>
            <p>
              The ethos of the Mandal is marked by patriotic fervor and selfless
              service. These values permeate institutions like{" "}
              <strong className="text-slate-900 text-base">
                NMIMS, Mithibai College, and D.J. Sanghvi
              </strong>
              , guiding students toward global thinking consistent with national
              interest.
            </p>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {[
              { label: "Established", val: "1934" },
              { label: "Institutes", val: "30+" },
              { label: "Cities", val: "8+" },
              { label: "Legacy", val: "90 yrs" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center"
              >
                <div className="text-2xl font-black text-primary leading-none">
                  {stat.val}
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-400 mt-2 tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. PRESIDENT'S MESSAGE (The Main Feature) */}
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
                  <img
                    src="/images/president_amrishbhai_patel.jpg"
                    alt="Shri Amrishbhai Patel"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-3xl shadow-xl">
                  <Quote size={40} className="text-white opacity-50" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
                  The Visionary
                </span>
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter">
                  President's Message
                </h3>
                <p className="text-slate-400 italic text-xl border-l-2 border-primary pl-6">
                  “A leader’s role is not merely to steer the ship, but to chart
                  a course that inspires others to discover their own strength,
                  believe in their potential, and rise beyond limitations to
                  achieve excellence together.” — Warren Bennis
                </p>
              </div>
              <div className="text-slate-300 space-y-6 leading-relaxed font-medium">
                <p>
                  At SVKM, our mission has always been to nurture institutions
                  that combine academic excellence with strong values. Mukesh R.
                  Patel CBSE School stands as a proud embodiment of this vision
                  — a residential school committed to shaping confident,
                  compassionate, and globally aware citizens.
                </p>
                <p>
                  Education, in our belief, extends far beyond textbooks and
                  examinations. In a residential environment, learning becomes a
                  way of life. Discipline, responsibility, collaboration, and
                  respect are cultivated not only in classrooms but also in
                  hostels, playgrounds, and everyday interactions. Our aim is to
                  prepare students not just for academic success, but for life —
                  equipping them with critical thinking skills, ethical
                  grounding, and the resilience required to thrive in a rapidly
                  evolving world.
                </p>
                <p>
                  We are dedicated to providing a holistic learning experience
                  that integrates academic rigour, co-curricular enrichment,
                  character building, and global exposure. By fostering
                  curiosity, innovation, and leadership, we strive to empower
                  every student to realise their fullest potential and
                  contribute meaningfully to society and nation-building.
                </p>
                <p>
                  As we move forward, our commitment remains steadfast: to
                  create an environment where excellence is a habit, values are
                  a foundation, and every learner is inspired to dream boldly
                  and act responsibly.
                </p>
              </div>
              <div className="pt-4">
                <h4 className="text-white text-2xl font-black uppercase tracking-tighter">
                  Shri Amrishbhai Patel
                </h4>
                <p className="text-primary font-bold text-xs uppercase tracking-widest">
                  President, SVKM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. JOINT PRESIDENT'S MESSAGE (The Collaborative Pillar) */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1 space-y-8">
              <div className="space-y-4">
                <span className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs">
                  Unity in Purpose
                </span>
                <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
                  Joint President's Message
                </h3>
                <p className="text-slate-500 italic text-xl border-l-2 border-slate-200 pl-6">
                  “Great achievements are never the result of one person’s
                  effort alone; they are born from shared vision, collective
                  responsibility, and the willingness of individuals to work in
                  harmony toward a common purpose.” — Peter Drucker
                </p>
              </div>
              <div className="text-slate-600 space-y-6 leading-relaxed font-medium">
                <p>
                  At SVKM, we firmly believe that the strength of an institution
                  lies in unity — the unity of management, educators, parents,
                  and students working together toward excellence. Mukesh R.
                  Patel CBSE School, as a residential institution, reflects this
                  spirit of collaboration in every sphere of learning and
                  living.
                </p>
                <p>
                  Education is most meaningful when it becomes a shared journey.
                  Our dedicated faculty, supportive parents, and committed
                  students together create an environment where discipline,
                  innovation, and values flourish. Within the residential
                  framework, students learn essential life skills — teamwork,
                  leadership, empathy, and responsibility — which prepare them
                  not only for academic milestones but also for global
                  citizenship.
                </p>
                <p>
                  We remain committed to strengthening this culture of
                  cooperation and continuous growth. By nurturing young minds
                  with knowledge, character, and confidence, we ensure that each
                  learner emerges as a responsible individual ready to
                  contribute positively to society.
                </p>
                <p>
                  Together, we shall continue to move forward — united in
                  vision, steadfast in purpose, and determined to uphold the
                  highest standards of excellence.
                </p>
              </div>
              <div className="pt-4">
                <h4 className="text-slate-900 text-2xl font-black uppercase tracking-tighter">
                  Shri Bhupeshbhai Patel
                </h4>
                <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">
                  Joint President, SVKM
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative group">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-slate-100">
                  <img
                    src="/images/joint_president_bhupeshbhai_patel.jpg"
                    alt="Shri Bhupeshbhai Patel"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="absolute -top-6 -left-6 bg-slate-900 p-8 rounded-3xl shadow-xl">
                  <Users size={40} className="text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
