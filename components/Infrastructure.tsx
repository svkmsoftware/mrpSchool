"use client";

import {
  Monitor,
  FlaskConical,
  Trophy,
  BookText,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function Infrastructure() {
  const facilities = [
    {
      title: "Smart Classrooms",
      desc: "Interactive digital boards and ergonomic seating for modern learning.",
      icon: <Monitor size={20} />,
      image: "/images/carousel/slider_1.jpg",
      // Spans 2 cols, 1 row (Top Left)
      gridClass: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Advanced STEM Labs",
      desc: "Cutting-edge robotics and science equipment.",
      icon: <FlaskConical size={20} />,
      image: "/images/infrastructure/chemistry_lab.jpeg",
      // Spans 1 col, 2 rows (Right Side Tall)
      gridClass: "md:col-span-1 md:row-span-2",
    },
    {
      title: "Sports & Swimming",
      desc: "Olympic-sized pool and multi-sport turf.",
      icon: <Trophy size={20} />,
      image: "/images/infrastructure/swimmingpool_sports.jpg",
      // Spans 1 col, 1 row (Bottom Left)
      gridClass: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Central Library",
      desc: "A vast collection of 15,000+ books and digital resources.",
      icon: <BookText size={20} />,
      image: "/images/infrastructure/library.jpg",
      // Spans 1 col, 1 row (Bottom Middle)
      gridClass: "md:col-span-1 md:row-span-1",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3">
            Campus Life
          </h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
              World-Class <br /> Infrastructure
            </h3>
            <p className="max-w-md text-slate-600 font-medium">
              We provide an environment where technology meets comfort, ensuring
              students have every resource to excel.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
          {facilities.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-slate-200 ${item.gridClass}`}
            >
              {/* Image Background */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary rounded-lg text-white">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-bold uppercase tracking-tight">
                    {item.title}
                  </h4>
                </div>

                <p className="text-white/80 text-sm max-w-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {item.desc}
                </p>

                <Link
                  href="/infrastructure"
                  className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white hover:text-primary"
                >
                  <ArrowUpRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-block px-8 py-4 border-2 border-slate-200 rounded-full font-bold text-slate-700 hover:bg-primary hover:text-white hover:border-primary transition-all"
          >
            Take a Virtual Campus Tour
          </Link>
        </div>
      </div>
    </section>
  );
}
