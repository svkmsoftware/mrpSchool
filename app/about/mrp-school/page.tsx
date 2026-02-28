// "use client";

// import {
//   Target,
//   Compass,
//   Home,
//   Trees,
//   BookOpenCheck,
//   Users2,
//   ShieldCheck,
//   School,
//   Quote,
//   GraduationCap,
// } from "lucide-react";

// export default function AboutMRPSchool() {
//   return (
//     <section className="bg-white">
//       {/* 1. TYPOGRAPHIC HEADER */}
//       <div className="relative pt-20 pb-12 border-b border-gray-100 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row justify-between items-end gap-6">
//             <div className="max-w-3xl">
//               <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
//                 The Institution
//               </span>
//               <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.85]">
//                 Mukesh R. Patel <br />
//                 <span className="text-slate-400">School (CBSE)</span>
//               </h1>
//             </div>
//             <div className="flex items-center gap-2 text-slate-500 font-bold uppercase text-xs tracking-widest pb-2 border-b-2 border-primary">
//               Est. 2013 • Shirpur
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 2. STATS RIBBON */}
//       <div className="bg-slate-900 py-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 label: "Campus Size",
//                 val: "40 Acres",
//                 icon: <Trees size={20} />,
//               },
//               {
//                 label: "Grades",
//                 val: "1 - 12",
//                 icon: <BookOpenCheck size={20} />,
//               },
//               {
//                 label: "Facility",
//                 val: "Residential",
//                 icon: <Home size={20} />,
//               },
//               { label: "Status", val: "Co-Ed", icon: <Users2 size={20} /> },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col items-center text-white text-center"
//               >
//                 <div className="p-2 bg-white/10 rounded-lg mb-3 text-primary">
//                   {item.icon}
//                 </div>
//                 <span className="text-2xl font-black leading-none">
//                   {item.val}
//                 </span>
//                 <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mt-2">
//                   {item.label}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* 3. MAIN NARRATIVE */}
//       <div className="py-24 max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//           <div className="space-y-8">
//             <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
//               <p className="text-xl text-slate-900 font-bold leading-snug italic border-l-4 border-primary pl-6">
//                 "At Mukesh R. Patel School (CBSE), we believe that every child
//                 is born with limitless potential, and our mission is to nurture
//                 and guide them toward becoming compassionate, confident, and
//                 capable individuals. Founded on the principles of holistic
//                 education, we create an environment where learning extends far
//                 beyond textbooks and classrooms, fostering curiosity,
//                 creativity, and critical thinking."
//               </p>
//               <p>
//                 Nestled in the serene outskirts of Shirpur, our lush 40-acre
//                 campus is thoughtfully designed to offer an enriching and
//                 inspiring learning experience. Every corner of our institution
//                 reflects a deep commitment to balancing academic excellence with
//                 the overall well-being of our students. Through the seamless
//                 integration of modern technology, interactive learning spaces,
//                 and thoughtfully designed outdoor areas, we provide students
//                 with opportunities to explore, innovate, and grow in a
//                 stress-free and collaborative atmosphere.
//               </p>
//               <p>
//                 Mukesh R. Patel School (CBSE) is a co-educational institution
//                 offering admissions from Grade 1 to Grade 9 and Grade 11. We
//                 cater to the diverse needs of our learners through personalized
//                 learning pathways, state-of-the-art laboratories, expansive
//                 sports facilities, and dynamic extracurricular programs
//                 encompassing the arts, music, leadership development, and
//                 cultural awareness.
//               </p>
//               <p>
//                 Since our inception in 2013, we have remained committed to
//                 fostering a balanced education system that supports the
//                 intellectual, social, emotional, and physical development of
//                 every student. Our experienced and passionate faculty work
//                 diligently to ensure that each child feels valued and is
//                 equipped with the skills and confidence needed to succeed in an
//                 ever-evolving world.
//               </p>
//               <p>
//                 Additionally, we provide residential facilities from Grade 1
//                 onwards, ensuring a true “home away from home,” where students
//                 can live, learn, and develop essential life skills in a safe,
//                 inclusive, and structured environment.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
//                 <h5 className="font-black text-xs uppercase tracking-widest text-primary mb-2">
//                   Competitive Edge
//                 </h5>
//                 <p className="text-xs text-slate-500 font-bold">
//                   Integrated coaching for JEE & NEET starts from the foundation
//                   years.
//                 </p>
//               </div>
//               <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
//                 <h5 className="font-black text-xs uppercase tracking-widest text-primary mb-2">
//                   Sports Excellence
//                 </h5>
//                 <p className="text-xs text-slate-500 font-bold">
//                   Professional training pathways for national and international
//                   levels.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
//               <img
//                 src="/images/carousel/slider_1.jpg"
//                 alt="MRPS Campus"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
//               <div className="flex items-center gap-4">
//                 <div className="h-12 w-12 bg-primary flex items-center justify-center rounded-xl text-white">
//                   <School size={24} />
//                 </div>
//                 <div>
//                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">
//                     Affiliation
//                   </p>
//                   <p className="font-black text-slate-900 leading-none">
//                     CBSE Board
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 4. PRINCIPAL'S MESSAGE (The Featured Card) */}
//       <div className="max-w-7xl mx-auto px-6 pb-24">
//         <div className="bg-slate-50 rounded-[3rem] border border-slate-100 overflow-hidden">
//           <div className="flex flex-col lg:flex-row">
//             {/* Principal Image */}
//             <div className="lg:w-1/3 bg-slate-200">
//               <img
//                 src="/images/principal_manju_singh.jpg"
//                 alt="Principal Ms. Manju Singh"
//                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
//               />
//             </div>

//             {/* Message Content */}
//             <div className="lg:w-2/3 p-10 md:p-16 relative">
//               <Quote
//                 className="text-primary/20 absolute top-10 right-10"
//                 size={80}
//               />

//               <div className="relative z-10">
//                 <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
//                   Leadership Reflection
//                 </span>
//                 <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-8">
//                   Principal's Message
//                 </h3>

//                 <div className="space-y-6 text-slate-600 leading-relaxed italic text-lg font-medium">
//                   <p>
//                     "I feel immensely privileged to introduce this esteemed
//                     residential institution to you. As the Principal of Mukesh
//                     R. Patel CBSE School, it brings me deep joy and pride to
//                     share that we are wholeheartedly committed to providing an
//                     education that truly transforms lives"
//                   </p>
//                   <p className="not-italic text-base">
//                     At MRPS, education is not confined to classrooms or limited
//                     to academic achievements. In our vibrant residential
//                     environment, learning continues round the clock — in
//                     classrooms, hostels, playgrounds, and shared experiences. We
//                     nurture a space where every child feels valued, supported,
//                     and inspired to discover their unique strengths. Here,
//                     students learn not only to excel but also to empathise,
//                     collaborate, and lead with integrity.
//                   </p>
//                   <p className="not-italic text-base">
//                     Through experiential learning, personalised guidance, and
//                     seamless integration of technology, we strive to build
//                     strong academic foundations. Our focused preparation for
//                     competitive examinations like JEE and NEET ensures that
//                     students are well-equipped to pursue their aspirations with
//                     confidence. At the same time, our world-class sports
//                     facilities provide aspiring athletes with professional
//                     training opportunities at national and international levels.
//                   </p>
//                   <p className="not-italic text-base">
//                     In today’s rapidly evolving world, children face complex
//                     challenges. To thrive, they need more than academic
//                     knowledge — they require resilience, critical thinking,
//                     digital fluency, and strong values. Our residential
//                     framework provides ample opportunities to cultivate life
//                     skills, pursue passions, and shape meaningful futures. As
//                     Rabindranath Tagore wisely said,
//                   </p>
//                   <div className="bg-white p-6 rounded-2xl border border-slate-200 text-slate-800 not-italic">
//                     <p className="text-sm font-bold leading-relaxed">
//                       “Do not educate your child to be rich. Educate him to be
//                       happy, so that when he grows up, he knows the value of
//                       things, not the price.”
//                       <span className="block text-primary mt-2 text-xs uppercase tracking-widest">
//                         — Rabindranath Tagore
//                       </span>
//                     </p>
//                   </div>
//                   <p>
//                     At MRPS, we strive to embody this philosophy in everything
//                     we do. In partnership with parents and the community, we are
//                     committed to nurturing knowledgeable, compassionate, and
//                     confident global citizens who will contribute positively to
//                     society.
//                   </p>
//                 </div>

//                 <div className="mt-12 flex items-center gap-4">
//                   <div className="h-1 w-12 bg-primary"></div>
//                   <div>
//                     <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter">
//                       Ms. Manju Singh
//                     </h4>
//                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
//                       Principal, MRPS (CBSE)
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 5. VISION & MISSION */}
//       <div className="bg-slate-900 py-24">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="p-12 bg-white/5 rounded-[3rem] border border-white/10 hover:border-primary/50 transition-colors group">
//               <Compass
//                 className="text-primary mb-6 group-hover:scale-110 transition-transform"
//                 size={40}
//               />
//               <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
//                 Our Vision
//               </h3>
//               <p className="text-slate-400 leading-relaxed">
//                 Our vision is to create a transformative educational experience
//                 that inspires critical thinking, fosters social responsibility,
//                 and cultivates global citizens. We aim to develop a generation
//                 of innovative leaders who will build and sustain a harmonious,
//                 multicultural global community. Through our commitment to
//                 excellence and inclusivity, we empower our students to
//                 contribute positively to the world and drive progress toward a
//                 sustainable and interconnected future.
//               </p>
//             </div>

//             <div className="p-12 bg-primary rounded-[3rem] text-white shadow-2xl shadow-primary/20">
//               <Target className="text-white mb-6" size={40} />
//               <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">
//                 Our Mission
//               </h3>
//               <p className="text-white/80 leading-relaxed font-medium">
//                 At Mukesh R. Patel School (CBSE), our mission is to cultivate an
//                 enriching educational environment that nurtures critical
//                 thinking, social responsibility, and global citizenship. We are
//                 dedicated to shaping a generation of innovative and
//                 compassionate leaders who will contribute to a harmonious and
//                 sustainable world. Through a balanced and inclusive curriculum,
//                 we empower our students to excel academically, uphold strong
//                 ethical values, and embrace cultural diversity, preparing them
//                 to make meaningful contributions to the global community.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import {
  Target,
  Compass,
  Home,
  Trees,
  BookOpenCheck,
  Users2,
  School,
  Quote,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function AboutMRPSchool() {
  const [expandNarrative, setExpandNarrative] = useState(false);
  const [expandPrincipal, setExpandPrincipal] = useState(false);

  return (
    <section className="bg-white">
      {/* 1. TYPOGRAPHIC HEADER */}
      <div className="relative pt-20 pb-12 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-3xl">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                The Institution
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.85]">
                Mukesh R. Patel <br />
                <span className="text-slate-400">School (CBSE)</span>
              </h1>
            </div>
            <div className="flex items-center gap-2 text-slate-500 font-bold uppercase text-xs tracking-widest pb-2 border-b-2 border-primary">
              Est. 2013 • Shirpur
            </div>
          </div>
        </div>
      </div>

      {/* 2. STATS RIBBON */}
      <div className="bg-slate-900 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                label: "Campus Size",
                val: "40 Acres",
                icon: <Trees size={20} />,
              },
              {
                label: "Grades",
                val: "1 - 12",
                icon: <BookOpenCheck size={20} />,
              },
              {
                label: "Facility",
                val: "Residential",
                icon: <Home size={20} />,
              },
              { label: "Status", val: "Co-Ed", icon: <Users2 size={20} /> },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-white text-center"
              >
                <div className="p-2 bg-white/10 rounded-lg mb-3 text-primary">
                  {item.icon}
                </div>
                <span className="text-2xl font-black leading-none">
                  {item.val}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mt-2">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. MAIN NARRATIVE SECTION (Full Text Handling) */}
      <div className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div
              className={`space-y-6 text-slate-600 text-lg leading-relaxed font-medium transition-all duration-700 overflow-hidden ${expandNarrative ? "max-h-[3000px]" : "max-h-[600px]"}`}
            >
              <p className="text-xl text-slate-900 font-bold leading-snug italic border-l-4 border-primary pl-6">
                "At Mukesh R. Patel School (CBSE), we believe that every child
                is born with limitless potential, and our mission is to nurture
                and guide them toward becoming compassionate, confident, and
                capable individuals."
              </p>
              <p>
                Nestled in the serene outskirts of Shirpur, our lush 40-acre
                campus is thoughtfully designed to offer an enriching and
                inspiring learning experience. Every corner of our institution
                reflects a deep commitment to balancing academic excellence with
                the overall well-being of our students.
              </p>
              <p>
                Through the seamless integration of modern technology,
                interactive learning spaces, and thoughtfully designed outdoor
                areas, we provide students with opportunities to explore,
                innovate, and grow in a stress-free and collaborative
                atmosphere.
              </p>
              <p>
                Mukesh R. Patel School (CBSE) is a co-educational institution
                offering admissions from Grade 1 to Grade 9 and Grade 11. We
                cater to the diverse needs of our learners through personalized
                learning pathways, state-of-the-art laboratories, expansive
                sports facilities, and dynamic extracurricular programs
                encompassing the arts, music, leadership development, and
                cultural awareness.
              </p>
              <p>
                Since our inception in 2013, we have remained committed to
                fostering a balanced education system that supports the
                intellectual, social, emotional, and physical development of
                every student. Our experienced and passionate faculty work
                diligently to ensure that each child feels valued and is
                equipped with the skills and confidence needed to succeed in an
                ever-evolving world.
              </p>
              <p>
                Additionally, we provide residential facilities from Grade 1
                onwards, ensuring a true “home away from home,” where students
                can live, learn, and develop essential life skills in a safe,
                inclusive, and structured environment.
              </p>
            </div>

            {!expandNarrative && (
              <div className="absolute bottom-0 left-0 right-0 h-15 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}

            <button
              onClick={() => setExpandNarrative(!expandNarrative)}
              className="mt-8 flex items-center gap-2 text-primary font-black uppercase text-xs tracking-[0.2em] group cursor-pointer"
            >
              {expandNarrative ? (
                <>
                  <ChevronUp size={16} /> Show Less
                </>
              ) : (
                <>
                  <ChevronDown size={16} /> Read Full Institution Profile
                </>
              )}
            </button>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="/images/carousel/slider_1.jpg"
                alt="MRPS Campus"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4 text-slate-900">
                <div className="h-12 w-12 bg-primary flex items-center justify-center rounded-xl text-white">
                  <School size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">
                    Affiliation
                  </p>
                  <p className="font-black leading-none">CBSE Board</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. PRINCIPAL'S MESSAGE (Official Unedited Text) */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-slate-50 rounded-[3.5rem] border border-slate-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-slate-200 min-h-[400px]">
              <img
                src="/images/principal_manju_singh.jpg"
                alt="Principal Ms. Manju Singh"
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="lg:w-2/3 p-10 md:p-20 relative">
              <Quote
                className="text-primary/10 absolute top-10 right-10"
                size={120}
              />

              <div className="relative z-10">
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
                  Leadership Reflection
                </span>
                <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-10">
                  Principal's Message
                </h3>

                <div
                  className={`space-y-6 text-slate-600 leading-relaxed font-medium transition-all duration-1000 overflow-hidden ${expandPrincipal ? "max-h-[4000px]" : "max-h-[500px]"}`}
                >
                  <p className="text-xl italic text-slate-800">
                    "I feel immensely privileged to introduce this esteemed
                    residential institution to you. As the Principal of Mukesh
                    R. Patel CBSE School, it brings me deep joy and pride to
                    share that we are wholeheartedly committed to providing an
                    education that truly transforms lives."
                  </p>

                  <p>
                    At MRPS, education is not confined to classrooms or limited
                    to academic achievements. In our vibrant residential
                    environment, learning continues round the clock — in
                    classrooms, hostels, playgrounds, and shared experiences. We
                    nurture a space where every child feels valued, supported,
                    and inspired to discover their unique strengths. Here,
                    students learn not only to excel but also to empathise,
                    collaborate, and lead with integrity.
                  </p>

                  <p>
                    Through experiential learning, personalised guidance, and
                    seamless integration of technology, we strive to build
                    strong academic foundations. Our focused preparation for
                    competitive examinations like JEE and NEET ensures that
                    students are well-equipped to pursue their aspirations with
                    confidence. At the same time, our world-class sports
                    facilities provide aspiring athletes with professional
                    training opportunities at national and international levels.
                  </p>

                  <p>
                    In today’s rapidly evolving world, children face complex
                    challenges. To thrive, they need more than academic
                    knowledge — they require resilience, critical thinking,
                    digital fluency, and strong values. Our residential
                    framework provides ample opportunities to cultivate life
                    skills, pursue passions, and shape meaningful futures.
                  </p>

                  <div className="bg-white p-8 rounded-3xl border border-slate-200 my-8 shadow-sm">
                    <p className="text-slate-900 font-bold italic mb-4">
                      “Do not educate your child to be rich. Educate him to be
                      happy, so that when he grows up, he knows the value of
                      things, not the price.”
                    </p>
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                      — Rabindranath Tagore
                    </span>
                  </div>

                  <p>
                    At MRPS, we strive to embody this philosophy in everything
                    we do. In partnership with parents and the community, we are
                    committed to nurturing knowledgeable, compassionate, and
                    confident global citizens who will contribute positively to
                    society.
                  </p>

                  <div className="pt-6">
                    <p className="text-slate-900 font-bold">
                      With warmth and dedication,
                    </p>
                    <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mt-2">
                      Ms. Manju Singh
                    </h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                      Principal, MRPS (CBSE)
                    </p>
                  </div>
                </div>

                {!expandPrincipal && (
                  <div className="absolute bottom left-0 right-0 h-15 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
                )}

                <button
                  onClick={() => setExpandPrincipal(!expandPrincipal)}
                  className="mt-10 flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest cursor-pointer"
                >
                  {expandPrincipal ? (
                    <>
                      <ChevronUp size={16} /> Read Less
                    </>
                  ) : (
                    <>
                      <ChevronDown size={16} /> Read Full Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. VISION & MISSION (Full Unedited Text) */}
      <div className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-12 bg-white/5 rounded-[3rem] border border-white/10 group hover:border-primary/50 transition-all">
              <Compass className="text-primary mb-6" size={40} />
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-6">
                Our Vision
              </h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                Our vision is to create a transformative educational experience
                that inspires critical thinking, fosters social responsibility,
                and cultivates global citizens. We aim to develop a generation
                of innovative leaders who will build and sustain a harmonious,
                multicultural global community. Through our commitment to
                excellence and inclusivity, we empower our students to
                contribute positively to the world and drive progress toward a
                sustainable and interconnected future.
              </p>
            </div>

            <div className="p-12 bg-primary rounded-[3rem] text-white shadow-2xl shadow-primary/20">
              <Target className="text-white mb-6" size={40} />
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">
                Our Mission
              </h3>
              <p className="text-white/90 leading-relaxed font-medium">
                At Mukesh R. Patel School (CBSE), our mission is to cultivate an
                enriching educational environment that nurtures critical
                thinking, social responsibility, and global citizenship. We are
                dedicated to shaping a generation of innovative and
                compassionate leaders who will contribute to a harmonious and
                sustainable world. Through a balanced and inclusive curriculum,
                we empower our students to excel academically, uphold strong
                ethical values, and embrace cultural diversity, preparing them
                to make meaningful contributions to the global community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
