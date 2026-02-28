import { Baby, BookOpen, GraduationCap, Microscope, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PillarsOfExcellence() {
  const pillars = [
    {
      title: "Primary School",
      subtitle: "The Foundation",
      description: "Nurturing curiosity through holistic, play-integrated learning and strong fundamentals.",
      icon: <Baby className="w-8 h-8" />,
      color: "bg-orange-500",
      href: "/academics/primary",
    },
    {
      title: "Middle School",
      subtitle: "The Exploration",
      description: "Transitioning to subject-based learning with a focus on critical thinking and project work.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-blue-600",
      href: "/academics/middle-school",
    },
    {
      title: "Senior School",
      subtitle: "The Rigor",
      description: "Developing academic depth and discipline as students prepare for secondary board challenges.",
      icon: <Microscope className="w-8 h-8" />,
      color: "bg-emerald-600",
      href: "/academics/senior-school",
    },
    {
      title: "Senior Secondary",
      subtitle: "The Launchpad",
      description: "Specialized streams with career-focused guidance for higher education and global readiness.",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "bg-indigo-700",
      href: "/academics/senior-secondary",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Academic Pathways</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
            Pillars of Excellence
          </h3>
          <div className="h-1.5 w-20 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Pillars Grid - 4 Columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-50 rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 border border-transparent hover:border-slate-100 flex flex-col"
            >
              {/* Icon Square */}
              <div className={`w-14 h-14 ${pillar.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-md transform group-hover:rotate-6 transition-transform duration-300`}>
                {pillar.icon}
              </div>

              <div className="flex-grow">
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                  {pillar.subtitle}
                </span>
                <h4 className="text-xl font-black text-slate-900 mt-1 mb-3 uppercase leading-tight">
                  {pillar.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <Link 
                href={pillar.href} 
                className="flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-primary transition-colors uppercase tracking-widest"
              >
                Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {/* Subtle background number */}
              <span className="absolute top-4 right-6 text-4xl font-black text-slate-200/50 group-hover:text-slate-200 transition-colors pointer-events-none">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}