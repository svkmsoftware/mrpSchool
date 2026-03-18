"use client";

import React, { useEffect, useState } from "react";
import {
  FileText,
  ShieldCheck,
  Scale,
  GraduationCap,
  Download,
  ExternalLink,
  CheckCircle,
} from "lucide-react";

export default function MandatoryDisclosure() {
  const [activeTab, setActiveTab] = useState("Legal");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 550) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { id: "Legal", icon: <Scale size={18} />, label: "Legal & Affiliation" },
    {
      id: "Safety",
      icon: <ShieldCheck size={18} />,
      label: "Safety & Hygiene",
    },
    {
      id: "Academic",
      icon: <GraduationCap size={18} />,
      label: "Academic & Results",
    },
  ];

  const documents = [
    {
      id: 1,
      title: "Affiliation Letter (2022-2027)",
      category: "Legal",
      fileName: "affiliation_letter.pdf",
      path: "/docs/mandatory-disclosure/affiliation-letter-01-04-22-to-31-03-27.pdf",
    },
    {
      id: 2,
      title: "Societies Registration Certificate",
      category: "Legal",
      fileName: "society_reg.pdf",
      path: "/docs/mandatory-disclosure/societies-registration-certificate.pdf",
    },
    {
      id: 3,
      title: "No Objection Certificate (NOC)",
      category: "Legal",
      fileName: "noc.pdf",
      path: "/docs/mandatory-disclosure/no-objection-certificates.pdf",
    },
    {
      id: 4,
      title: "Recognition Certificate (RTE 2009)",
      category: "Legal",
      fileName: "recognition_rte.pdf",
      path: "/docs/mandatory-disclosure/recignisation-certificate-ret-2009.pdf",
    },
    {
      id: 7,
      title: "Self Declaration / Affidavit",
      category: "Legal",
      fileName: "self_declaration.pdf",
      path: "/docs/mandatory-disclosure/building-safety-certificate.pdf",
    },
    {
      id: 5,
      title: "Building Safety Certificate",
      category: "Safety",
      path: "/docs/mandatory-disclosure/fire-safety-certificate.pdf",
    },
    {
      id: 6,
      title: "Fire Safety Certificate",
      category: "Safety",
      path: "/docs/mandatory-disclosure/self-decelration.pdf",
    },
    {
      id: 8,
      title: "Water, Health & Sanitary Certificate",
      category: "Safety",
      path: "/docs/mandatory-disclosure/sanitary-condition-certificate.pdf",
    },
    {
      id: 9,
      title: "Fee Structure",
      category: "Academic",
      path: "/docs/mandatory-disclosure/fees-structure.pdf",
    },
    {
      id: 10,
      title: "Annual Academic Calendar",
      category: "Academic",
      path: "/docs/mandatory-disclosure/academic-calender.pdf",
    },
    {
      id: 11,
      title: "School Managing Committee (SMC)",
      category: "Academic",
      path: "/docs/mandatory-disclosure/school-managing-committee.pdf",
    },
    {
      id: 12,
      title: "Parent Teacher Association (PTA) Members",
      category: "Academic",
      path: "/docs/mandatory-disclosure/parent-teacher-association.pdf",
    },
    {
      id: 13,
      title: "Last 3 Years Board Results",
      category: "Academic",
      path: "/docs/mandatory-disclosure/last-three-years-result-of-board-exams.pdf",
    },
  ];

  return (
    <main className="bg-white">
      {/* SECTION 1: HERO */}
      <section className="py-24 border-b border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">
            Public Records & Compliance
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.9] mb-6">
            Mandatory <br />{" "}
            <span className="text-primary text-outline">Disclosure</span>
          </h1>
          <p className="max-w-2xl text-slate-600 text-lg leading-relaxed">
            In adherence to CBSE norms and the Right to Education Act, Mukesh R.
            Patel School provides full access to statutory documents, safety
            certifications, and academic management details for public review.
          </p>
        </div>
      </section>

      {/* SECTION 2: TABS & CONTENT */}
      <section className="py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 items-start">
          {/* Sidebar Navigation (Desktop) / Top Bar (Mobile) */}
          {/* <div className="lg:col-span-1 space-y-2 sticky top-16 md:top-24 p-6 bg-white shadow-lg md:shadow-none "> */}
          <div
            className={`lg:col-span-1 space-y-2 sticky top-16 md:top-24 p-6 bg-white ${isScrolled ? "shadow-lg md:shadow-none" : "shadow-none"}`}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${
                  activeTab === cat.id
                    ? "bg-slate-900 text-white border-slate-900 shadow-xl"
                    : "bg-white text-slate-400 border-slate-100 hover:bg-slate-50"
                }`}
              >
                <span className="flex items-center gap-3">
                  {cat.icon} {cat.label}
                </span>
                {activeTab === cat.id && (
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </div>

          {/* Document Display Area */}
          <div className="lg:col-span-3 space-y-4 px-6">
            {documents
              .filter((doc) => doc.category === activeTab)
              .map((doc) => (
                <div
                  key={doc.id}
                  className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-slate-50 rounded-[2rem] border border-transparent hover:border-slate-200 hover:bg-white transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-primary shadow-sm transition-colors shrink-0">
                      <FileText size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight mb-1">
                        {doc.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
                        Official CBSE Documentation • 2025-26
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6 md:mt-0">
                    <a
                      href={doc.path}
                      target="_blank"
                      className="p-4 bg-white text-slate-400 rounded-xl hover:text-slate-900 transition-colors border border-slate-100"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={doc.path}
                      download
                      className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-900 transition-all shadow-lg shadow-primary/20"
                    >
                      <Download size={16} /> Download
                    </a>
                  </div>
                </div>
              ))}

            {/* Disclaimer Box */}
            {/* <div className="mt-12 p-8 rounded-[2.5rem] bg-slate-900 text-white flex flex-col md:flex-row items-center gap-8">
              <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                <CheckCircle size={32} />
              </div>
              <div>
                <h5 className="text-lg font-bold uppercase tracking-tight mb-1">
                  Official Certification
                </h5>
                <p className="text-slate-400 text-sm leading-relaxed">
                  This information is maintained by the School Management and is
                  updated annually to ensure total compliance with the Central
                  Board of Secondary Education.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
