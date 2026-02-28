"use client";

import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="bg-white">
      {/* UNIFORM HEADER */}
      <div className="relative pt-20 pb-12 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.85]">
            Contact <br />
            <span className="text-slate-400">Our Campus</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* 1. CONTACT INFO CARDS */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6">
                Reach Out to Us
              </h3>
              <p className="text-slate-500 leading-relaxed mb-8">
                Whether you have questions about admissions, our residential
                facilities, or our curriculum, our team is here to help.
              </p>
            </div>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="h-12 w-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">
                    Location
                  </p>
                  <p className="text-slate-700 font-bold leading-relaxed">
                    Mukesh R. Patel School, Near Nimzari Naka, <br />
                    Shirpur, Dist. Dhule, Maharashtra - 425405
                  </p>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <Phone className="text-primary shrink-0" size={20} />
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">
                      Call Us
                    </p>
                    <p className="text-sm font-bold text-slate-700">
                      +91-0000000000
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <Mail className="text-primary shrink-0" size={20} />
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">
                      Email
                    </p>
                    <p className="text-sm font-bold text-slate-700">
                      info@mrpsshirpur.edu.in
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-6 p-6 bg-slate-900 rounded-3xl text-white">
                <Clock className="text-primary shrink-0" size={24} />
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">
                    Office Hours
                  </p>
                  <p className="text-sm font-bold uppercase tracking-tight">
                    Mon — Sat: 9:00 AM to 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. INTERACTIVE MAP PLACEHOLDER */}
          <div className="lg:col-span-7">
            <div className="w-full h-full min-h-[450px] bg-slate-100 rounded-[3rem] overflow-hidden border border-slate-200 relative">
              {/* Replace the div below with an actual Google Maps Iframe */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-12 text-center">
                <MapPin size={48} className="mb-4 opacity-20" />
                <p className="font-black uppercase tracking-widest text-xs">
                  Google Maps Integration
                </p>
                <p className="text-[10px] mt-2 italic">
                  Insert your Google Maps iframe here for the Shirpur Campus
                </p>
              </div>

              {/* Actual Iframe Example (Uncomment and add your API key/link) */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d926.8753814172909!2d74.96147971716509!3d21.314695694472526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf2cd5fc80945f%3A0x2a14cfb860bca769!2sM%20R%20P%20CBSE%20School%2C%20Tande!5e1!3m2!1sen!2sin!4v1771499019098!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
