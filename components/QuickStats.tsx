import { GraduationCap, Users, Trophy, TreePine } from "lucide-react";

export default function QuickStats() {
  const stats = [
    {
      label: "Academic Results",
      value: "100%",
      icon: <GraduationCap className="w-8 h-8" />,
      description: "Consistent Excellence",
    },
    {
      label: "Extracurriculars",
      value: "20+",
      icon: <Trophy className="w-8 h-8" />,
      description: "Beyond the Books",
    },
    {
      label: "Student-Teacher Ratio",
      value: "15:1",
      icon: <Users className="w-8 h-8" />,
      description: "Personalized Attention",
    },
    {
      label: "Green Campus",
      value: "10+",
      icon: <TreePine className="w-8 h-8" />,
      description: "Acres of Learning Space",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-primary py-16">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-slate-900 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="mb-4 p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-primary text-white">
                {stat.icon}
              </div>

              {/* Number */}
              <h2 className="text-4xl md:text-5xl font-black text-white mb-1 tracking-tight">
                {stat.value}
              </h2>

              {/* Label */}
              <p className="text-white/90 font-bold uppercase tracking-wider text-sm md:text-base">
                {stat.label}
              </p>

              {/* Tiny Description */}
              <p className="text-white/60 text-xs mt-2 font-medium uppercase tracking-[0.1em]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}