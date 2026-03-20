"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navigation } from "@/data/navigation";
import { PhoneCall, Mail, ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* 1. TOP UTILITY BAR */}
      <div className="border-b border-gray-100 py-2 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex gap-4 md:gap-6 text-[11px] md:text-[13px] font-medium text-slate-600">
            <a
              href="tel:+918806363306"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <PhoneCall size={14} className="text-primary" />
              <span className="hidden sm:inline">+91 88063 63306</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a
              href="mailto:mrpslearning@gmail.com"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Mail size={14} className="text-primary" />
              <span className="hidden sm:inline">mrpslearning@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
          <div className="flex gap-4">
            <Link
              href="/career"
              className="text-[10px] md:text-[12px] uppercase tracking-wider font-bold text-slate-500 hover:text-primary"
            >
              Career
            </Link>
            <Link
              href="/contact"
              className="text-[10px] md:text-[12px] uppercase tracking-wider font-bold text-slate-500 hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* 2. CENTERED BRANDING */}
      <div className="py-4 md:py-6 border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
          <Link href="/" className="flex flex-col items-center group">
            <img
              src="/images/mrpSchool_logo.png"
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

      {/* 3. STACKED NAVIGATION (Sticky) */}
      <nav
        className={`z-[90] w-full transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 bg-white shadow-xl"
            : "relative bg-white/95"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between lg:justify-center h-16 md:h-20">
            {/* Scrolled Small Logo */}
            {isScrolled && (
              <div className="lg:absolute left-2 xl:left-10 flex items-center animate-in fade-in slide-in-from-left-4">
                <img
                  src="/images/mrpSchool_logo.png"
                  className="h-10 w-auto"
                  alt="Logo"
                />
              </div>
            )}

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
              <li>
                <Link
                  href="/"
                  className="text-xs xl:text-sm font-bold text-slate-700 hover:text-primary uppercase tracking-wide"
                >
                  Home
                </Link>
              </li>
              {navigation.map((menu, index) => (
                <li
                  key={menu.title}
                  className="relative group py-5"
                  onMouseEnter={() => setOpenIndex(index)}
                  onMouseLeave={() => setOpenIndex(null)}
                >
                  <button className="flex items-center gap-1 text-xs xl:text-sm font-bold text-slate-700 hover:text-primary uppercase tracking-wide">
                    {menu.title}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-56 bg-white shadow-2xl border border-slate-100 rounded-b-xl py-3 z-[110]">
                      {menu.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-6 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary font-medium"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Toggle Button - ENSURE Z-INDEX IS HIGH */}
            <div className="lg:hidden flex items-center justify-between w-full">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ps-2">
                {isScrolled ? "MRP School" : "Navigation"}
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -mr-2 text-primary active:scale-90 transition-transform"
                aria-label="Open Menu"
              >
                <Menu size={32} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 4. MOBILE MENU OVERLAY - Fixed position with highest Z-index */}
      <div
        className={`fixed inset-0 z-[200] transition-visibility duration-300 ${isMobileMenuOpen ? "visible" : "invisible"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-6 border-b flex justify-between items-center bg-slate-50">
            <div className="flex items-center gap-3">
              <img
                src="/images/mrpSchool_logo.png"
                className="h-8 w-auto"
                alt="Logo"
              />
              <span className="font-black text-slate-900 text-xs uppercase tracking-tighter">
                Menu
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 bg-white rounded-full shadow-sm text-slate-500"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-6 space-y-2">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-lg font-black text-slate-900 uppercase tracking-tighter border-b border-slate-100"
            >
              Home
            </Link>
            {navigation.map((menu, index) => (
              <div key={menu.title} className="border-b border-slate-50">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex items-center justify-between w-full py-4 text-lg font-black text-slate-900 uppercase tracking-tighter"
                >
                  {menu.title}
                  <ChevronDown
                    size={20}
                    className={`transition-transform text-primary ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-[500px] pb-4" : "max-h-0"}`}
                >
                  <div className="flex flex-col gap-3 pl-4 border-l-2 border-primary/20">
                    {menu.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-slate-600 font-bold text-sm uppercase tracking-wide hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 mt-auto">
            <Link
              href="/admissions"
              className="block w-full bg-primary text-white text-center py-4 rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-primary/30"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Apply Online
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
