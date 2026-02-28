"use client";

import { ClipboardList, MapPin, FileText, UserCheck, CheckCircle, Info } from "lucide-react";

export default function AdmissionProcess() {
  const steps = [
    { title: "Inquiry & Registration", desc: "Complete the inquiry form online or visit the school office.", icon: <ClipboardList /> },
    { title: "Campus Orientation", desc: "Visit our 40-acre campus to experience our facilities and programs.", icon: <MapPin /> },
    { title: "Application Submission", desc: "Submit the completed form with all required documentation.", icon: <FileText /> },
    { title: "Interaction & Entrance Test", desc: "Informal interaction and academic proficiency assessment.", icon: <UserCheck /> },
    { title: "Seat Confirmation", desc: "Payment of admission fee and first installment of tuition.", icon: <CheckCircle /> },
  ];

  return (
    <section className="bg-white">
      {/* UNIFORM HEADER */}
      <div className="pt-20 pb-12 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Enrollment</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.85]">Admission <br /><span className="text-slate-400">Process</span></h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Steps Column */}
          <div className="lg:col-span-7 space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="h-14 w-14 bg-slate-900 text-primary rounded-2xl flex items-center justify-center text-2xl font-black group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {index + 1}
                  </div>
                  {index !== steps.length - 1 && <div className="h-full w-px bg-slate-100 my-2"></div>}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Documentation Sidebar */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 p-10 rounded-[3rem] sticky top-24 border border-slate-100">
              <h4 className="font-black text-slate-900 uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
                <Info className="text-primary" size={20} /> Required Documents
              </h4>
              <ul className="space-y-4">
                {[
                  "Original Birth Certificate",
                  "4 Recent Passport-sized Photographs",
                  "Transfer Certificate (Grade 1+)",
                  "Previous School Report Card (Grade 2+)",
                  "Aadhaar Card (Student & Parents)",
                  "Caste Certificate (If applicable)"
                ].map((doc) => (
                  <li key={doc} className="flex items-start gap-3 text-sm font-bold text-slate-600 uppercase italic">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}