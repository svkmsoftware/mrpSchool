"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  User, 
  Send, 
  CheckCircle2,
  AlertCircle
} from "lucide-react";

type FormData = {
  studentName: string;
  grade: string;
  phone: string;
  email: string;
  message: string;
};

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Note: To send actual emails from frontend, you'd typically use 
    // EmailJS, Resend, or a custom Node.js/Next.js API route.
    console.log("Sending inquiry to mrpslearning@gmail.com", data);
    
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <section className="bg-white pb-24">
      {/* HEADER SECTION */}
      <div className="pt-24 pb-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Admissions 2026-27
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Join Our <span className="text-slate-400">Community</span>
          </h1>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-lg">
            Start your child's journey at SVKM’S Mukesh R. Patel School. 
            Submit an inquiry and our team will get back to you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -translate-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: CONTACT INFORMATION */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 h-full">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">
                Registration <br/><span className="text-primary">Contact Details</span>
              </h3>
              
              <div className="space-y-8">
                {/* Contact Person */}
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 shrink-0">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Contact Person</p>
                    <p className="font-bold text-slate-900">Ms. Avishna S. Girase</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Phone Number</p>
                    <a href="tel:+918806363306" className="font-bold text-slate-900 hover:text-primary transition-colors">+91 88063 63306 (W)</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">E-Mail Address</p>
                    <p className="font-bold text-slate-900 break-all">avisha.girase@svkm.ac.in</p>
                    <p className="font-bold text-slate-400 text-sm">mrpslearning@gmail.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Office Address</p>
                    <p className="font-bold text-slate-900 leading-snug">
                      SVKM’S Mukesh R. Patel School (CBSE)<br/>
                      <span className="text-sm font-medium text-slate-500">
                        Ankleshwar-Burhanpur Highway, Shirpur-Chopda Road, Shirpur, Dist. Dhule 425405
                      </span>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Office Hours</p>
                    <p className="font-bold text-slate-900">08:00 a.m. to 04:00 p.m.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: INQUIRY FORM */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 space-y-6 relative overflow-hidden"
            >
              {isSubmitSuccessful && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-500">
                  <CheckCircle2 size={64} className="text-green-500 mb-4" />
                  <h3 className="text-2xl font-black text-slate-900 uppercase">Inquiry Sent!</h3>
                  <p className="text-slate-500 mt-2">We have received your details. Ms. Avishna will contact you shortly.</p>
                  <button 
                    onClick={() => window.location.reload()}
                    className="mt-6 text-primary font-bold uppercase text-xs tracking-widest"
                  >
                    Send another inquiry
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Student Name */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex justify-between">
                    Student Name {errors.studentName && <span className="text-red-500 italic">Required</span>}
                  </label>
                  <input 
                    {...register("studentName", { required: true })}
                    type="text" 
                    className={`w-full bg-slate-50 border-2 ${errors.studentName ? 'border-red-100' : 'border-transparent'} rounded-2xl p-4 focus:ring-0 focus:border-primary transition-all`} 
                    placeholder="Enter full name" 
                  />
                </div>

                {/* Grade */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Grade Applying For</label>
                  <select 
                    {...register("grade")}
                    className="w-full bg-slate-50 border-2 border-transparent rounded-2xl p-4 focus:ring-0 focus:border-primary transition-all"
                  >
                    <option value="Pre-Primary">Pre-Primary</option>
                    <option value="Grade 1-5">Grade 1 to 5</option>
                    <option value="Grade 6-10">Grade 6 to 10</option>
                    <option value="Grade 11-Science">Grade 11 (Science)</option>
                    <option value="Grade 11-Commerce">Grade 11 (Commerce)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex justify-between">
                    Phone Number {errors.phone && <span className="text-red-500 italic text-[9px]">Valid Number Required</span>}
                  </label>
                  <input 
                    {...register("phone", { required: true, pattern: /^[0-9+-]+$/ })}
                    type="tel" 
                    className={`w-full bg-slate-50 border-2 ${errors.phone ? 'border-red-100' : 'border-transparent'} rounded-2xl p-4 focus:ring-0 focus:border-primary transition-all`} 
                    placeholder="+91" 
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex justify-between">
                    Email Address {errors.email && <span className="text-red-500 italic text-[9px]">Invalid Email</span>}
                  </label>
                  <input 
                    {...register("email", { 
                      required: true, 
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                    })}
                    type="email" 
                    className={`w-full bg-slate-50 border-2 ${errors.email ? 'border-red-100' : 'border-transparent'} rounded-2xl p-4 focus:ring-0 focus:border-primary transition-all`} 
                    placeholder="email@example.com" 
                  />
                </div>
              </div>

              {/* Message/Textarea */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Additional Message / Inquiry</label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  className="w-full bg-slate-50 border-2 border-transparent rounded-2xl p-4 focus:ring-0 focus:border-primary transition-all resize-none" 
                  placeholder="Tell us about your requirements..." 
                />
              </div>

              <button 
                disabled={isSubmitting}
                className="w-full bg-slate-900 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-primary transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
                {!isSubmitting && <Send size={18} />}
              </button>
              
              <p className="text-[9px] text-center text-slate-400 font-bold uppercase tracking-widest">
                Mails will be forwarded to mrpslearning@gmail.com
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}