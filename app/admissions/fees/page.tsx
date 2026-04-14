"use client";

import React from "react";
import {
  CreditCard,
  ShieldCheck,
  Clock,
  HelpCircle,
  Download,
  Phone,
} from "lucide-react";

// Fee data extracted from official 2025-26 documentation
const feeData = [
  {
    grade: "1st",
    tuition: "49,575",
    term: "8,263",
    activity: "38,657",
    mess: "65,339",
    hostel: "66,166",
    other: "15,500",
    total: "2,43,500",
  },
  {
    grade: "2nd",
    tuition: "49,575",
    term: "8,263",
    activity: "38,657",
    mess: "65,339",
    hostel: "66,166",
    other: "15,500",
    total: "2,43,500",
  },
  {
    grade: "3rd",
    tuition: "49,575",
    term: "8,263",
    activity: "38,657",
    mess: "65,339",
    hostel: "66,166",
    other: "15,500",
    total: "2,43,500",
  },
  {
    grade: "4th",
    tuition: "49,575",
    term: "8,263",
    activity: "38,657",
    mess: "65,339",
    hostel: "66,166",
    other: "15,500",
    total: "2,43,500",
  },
  {
    grade: "5th",
    tuition: "49,575",
    term: "8,263",
    activity: "38,657",
    mess: "65,339",
    hostel: "66,166",
    other: "15,500",
    total: "2,43,500",
  },
  {
    grade: "6th",
    tuition: "58,890",
    term: "9,814",
    activity: "38,591",
    mess: "72,585",
    hostel: "74,120",
    other: "15,500",
    total: "2,69,500",
  },
  {
    grade: "7th",
    tuition: "58,890",
    term: "9,814",
    activity: "38,591",
    mess: "72,585",
    hostel: "74,120",
    other: "15,500",
    total: "2,69,500",
  },
  {
    grade: "8th",
    tuition: "58,890",
    term: "9,814",
    activity: "38,591",
    mess: "72,585",
    hostel: "74,120",
    other: "19,500",
    total: "2,73,500",
  },
  {
    grade: "9th",
    tuition: "58,890",
    term: "9,814",
    activity: "38,591",
    mess: "72,585",
    hostel: "74,120",
    other: "20,200",
    total: "2,74,200",
  },
  {
    grade: "10th",
    tuition: "58,890",
    term: "9,814",
    activity: "38,591",
    mess: "72,585",
    hostel: "74,120",
    other: "22,000",
    total: "2,76,000",
  },
  {
    grade: "11th",
    tuition: "66,979",
    term: "11,163",
    activity: "38,469",
    mess: "78,509",
    hostel: "72,880",
    other: "22,200",
    total: "2,90,200",
  },
  {
    grade: "12th",
    tuition: "66,979",
    term: "11,163",
    activity: "38,469",
    mess: "78,509",
    hostel: "72,880",
    other: "24,000",
    total: "2,92,000",
  },
];

export default function FeeStructure() {
  return (
    <section className="bg-white pb-20">
      {/* 1. HEADER SECTION */}
      <div className="pt-20 pb-12 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                Financials
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.85]">
                Fee <br />
                <span className="text-slate-400">Structure</span>
              </h1>
            </div>
            <div className="pb-2">
              <span className="bg-slate-100 text-slate-500 px-4 py-2 rounded-full font-bold uppercase text-[10px] tracking-widest">
                Academic Year 2025-26
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* 2. PAYMENT POLICY BOX */}
        <div className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 mb-16 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-6">
              Residential Fee Policy
            </h2>
            <p className="text-slate-400 leading-relaxed mb-10 max-w-2xl">
              As a residential CBSE institution, our comprehensive fee covers
              academic tuition, full residential boarding, nutritious mess
              facilities, and all mandatory activities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4 items-start">
                <Clock className="text-primary shrink-0" size={24} />
                <div>
                  <p className="font-bold uppercase text-xs tracking-widest mb-1 text-white">
                    Annual Schedule
                  </p>
                  <p className="text-sm text-slate-400">
                    Fees are collected in structured installments. Contact the
                    office for the payment timeline.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <ShieldCheck className="text-primary shrink-0" size={24} />
                <div>
                  <p className="font-bold uppercase text-xs tracking-widest mb-1 text-white">
                    Inclusive Costs
                  </p>
                  <p className="text-sm text-slate-400">
                    Total fees include Tuition, Term, Activity, Mess, and Hostel
                    components.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        {/* 3. FEE TABLE SECTION */}
        <div className="space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                Grade-Wise Breakdown
              </h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">
                All amounts in INR (₹)
              </p>
            </div>
            <a
              href="/docs/mandatory-disclosure/fees-structure.pdf"
              download
              className="flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-[0.2em] border-b-2 border-primary pb-1 hover:text-slate-900 hover:border-slate-900 transition-all"
            >
              <Download size={14} /> Download PDF
            </a>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-slate-100 shadow-xl bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Grade
                  </th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Tuition
                  </th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Term
                  </th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Activity
                  </th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Mess
                  </th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Hostel
                  </th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Other
                  </th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5">
                    Total Fees
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {feeData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 transition-colors group"
                  >
                    <td className="p-6 font-black text-slate-900 uppercase text-sm">
                      {row.grade}
                    </td>
                    <td className="p-6 text-slate-500 font-medium text-sm">
                      ₹{row.tuition}
                    </td>
                    <td className="p-6 text-slate-500 font-medium text-sm">
                      ₹{row.term}
                    </td>
                    <td className="p-6 text-slate-500 font-medium text-sm">
                      ₹{row.activity}
                    </td>
                    <td className="p-6 text-slate-500 font-medium text-sm">
                      ₹{row.mess}
                    </td>
                    <td className="p-6 text-slate-500 font-medium text-sm">
                      ₹{row.hostel}
                    </td>
                    <td className="p-6 text-slate-500 font-medium text-sm">
                      ₹{row.other}
                    </td>
                    <td className="p-6 font-black text-slate-900 text-sm bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      ₹{row.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. ASSISTANCE CALL-TO-ACTION */}
        <div className="mt-20 p-12 bg-slate-50 rounded-[3rem] text-center border border-slate-100">
          <div className="max-w-xl mx-auto space-y-6">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto text-primary">
              <HelpCircle size={32} />
            </div>
            <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
              Need Clarification?
            </h3>
            <p className="text-slate-500 leading-relaxed">
              If you have questions regarding the fee structure, payment
              methods, or corporate tie-ups, please speak with our accounts and
              admissions office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="tel:+918806363306"
                className="flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-primary transition-all"
              >
                <Phone size={18} /> Call Admissions
              </a>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Ms. Avishna S. Girase: +91 88063 63306
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
