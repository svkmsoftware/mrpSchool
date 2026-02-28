"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navigation } from "@/data/navigation";
import { PhoneCall, Mail, ChevronDown, Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full bg-white relative">
      {/* 1. TOP UTILITY BAR - Hidden on small mobile to save space */}
      <div className="border-b border-gray-100 py-2 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex gap-4 md:gap-6 text-[11px] md:text-[13px] font-medium text-slate-600">
            <a href="tel:+911234567890" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <PhoneCall size={14} className="text-primary" /> 
              <span className="hidden sm:inline">+91 1234567890</span>
              <span className="sm:hidden">Call Us</span>
            </a>
            <a href="mailto:info@mrpschool.ac.in" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail size={14} className="text-primary" />
              <span className="hidden sm:inline">info@mrpschool.ac.in</span>
              <span className="sm:hidden">Email Us</span>
            </a>
          </div>
          <div className="flex gap-4">
            <Link href="/career" className="text-[10px] md:text-[12px] uppercase tracking-wider font-bold text-slate-500 hover:text-primary">Career</Link>
            <Link href="/contact" className="text-[10px] md:text-[12px] uppercase tracking-wider font-bold text-slate-500 hover:text-primary">Contact</Link>
          </div>
        </div>
      </div>

      {/* 2. CENTERED BRANDING */}
      <div className="py-4 md:py-6 border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
          <Link href="/" className="flex flex-col items-center group">
            <img
              src="/images/school_logo.png"
              alt="Logo"
              className="h-16 md:h-24 w-auto mb-2 transition-transform duration-500 group-hover:scale-105"
            />
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
              Mukesh R Patel School
            </h1>
            <p className="mt-1 md:my-2 text-primary font-bold tracking-[0.1em] md:tracking-[0.3em] text-[10px] md:text-sm uppercase">
              Where Dreams Ignite, and Knowledge Soars
            </p>
          </Link>
        </div>
      </div>

      {/* 3. STACKED NAVIGATION RIBBON */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center justify-center gap-4 xl:gap-8">
            <li>
              <Link href="/" className="block py-4 text-xs xl:text-sm font-bold text-slate-700 hover:text-primary uppercase tracking-wide border-b-2 border-transparent hover:border-primary transition-all">
                Home
              </Link>
            </li>

            {navigation.map((menu, index) => (
              <li
                key={menu.title}
                className="relative group"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <button className="flex items-center gap-1 py-4 text-xs xl:text-sm font-bold text-slate-700 hover:text-primary uppercase tracking-wide border-b-2 border-transparent hover:border-primary transition-all group-hover:border-primary">
                  {menu.title}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`} />
                </button>

                {openIndex === index && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-56 bg-white shadow-2xl border border-slate-100 rounded-b-xl py-3 z-[60]">
                    {menu.items.map((item) => (
                      <Link key={item.name} href={item.href} className="block px-6 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary font-medium transition-colors">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex items-center justify-between py-3">
             <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Menu</span>
             <button 
               onClick={() => setIsMobileMenuOpen(true)}
               className="p-2 text-primary"
             >
               <Menu size={28} />
             </button>
          </div>
        </div>
      </nav>

      {/* 4. MOBILE MENU OVERLAY (Side Drawer) */}
      <div className={`fixed inset-0 z-[100] transition-transform duration-300 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        
        {/* Drawer Content */}
        <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl flex flex-col">
          <div className="p-6 border-b flex justify-between items-center">
            <span className="font-black text-primary uppercase">MRPS Navigation</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-500">
              <X size={24} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-6">
            <ul className="space-y-4">
              <li>
                <Link href="/" className="block py-2 text-lg font-bold text-slate-800 border-b border-slate-50">Home</Link>
              </li>
              {navigation.map((menu, index) => (
                <li key={menu.title} className="border-b border-slate-50 pb-2">
                  <button 
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex items-center justify-between w-full py-2 text-lg font-bold text-slate-800"
                  >
                    {menu.title}
                    <ChevronDown className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
                  </button>
                  {openIndex === index && (
                    <div className="mt-2 ml-4 flex flex-col gap-3">
                      {menu.items.map((item) => (
                        <Link 
                          key={item.name} 
                          href={item.href} 
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-slate-600 font-medium py-1"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-slate-50 border-t">
            <Link 
              href="/admissions" 
              className="block w-full bg-primary text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}