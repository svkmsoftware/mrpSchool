"use client";

import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Affiliation */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <img src="/images/school_logo.png" className="h-16 w-auto mb-4" />
              <div className="font-black text-2xl text-slate-900 uppercase leading-none">
                Mukesh R Patel <br />
                <span className="text-primary text-sm">
                  School of Excellence
                </span>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              {/* Replace with actual CBSE/ICSE logos */}
              <div className="w-12 h-12 bg-white border rounded flex items-center justify-center text-[10px] font-bold text-slate-400">
                CBSE
              </div>
              <div className="text-xs text-slate-500 font-medium leading-tight">
                Affiliated to Central Board of <br /> Secondary Education
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-black uppercase tracking-wider text-slate-900 mb-6">
              Explore
            </h4>
            <ul className="space-y-3 text-slate-600 font-medium">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  Our History
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="hover:text-primary transition-colors"
                >
                  Curriculum
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-primary transition-colors"
                >
                  Campus Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="hover:text-primary transition-colors"
                >
                  Career at MRPS
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="font-black uppercase tracking-wider text-slate-900 mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-slate-600">
              <li className="flex gap-3 items-start italic">
                <MapPin className="text-primary shrink-0" size={18} />
                <span>
                  123, School Road, Patel Nagar, <br />
                  Mumbai, Maharashtra - 400001
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+91 12345 67890</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-primary shrink-0" size={18} />
                <span>info@mrpschool.ac.in</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Location Map */}
          <div>
            <h4 className="font-black uppercase tracking-wider text-slate-900 mb-6">
              Find Us
            </h4>
            <div className="h-40 w-full rounded-2xl overflow-hidden bg-slate-200 shadow-inner">
              {/* Replace with your Google Maps Embed iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d926.8753814172909!2d74.96147971716509!3d21.314695694472526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf2cd5fc80945f%3A0x2a14cfb860bca769!2sM%20R%20P%20CBSE%20School%2C%20Tande!5e1!3m2!1sen!2sin!4v1771499019098!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 Mukesh R Patel School. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-slate-400 hover:text-primary transition-colors"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              className="text-slate-400 hover:text-primary transition-colors"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="#"
              className="text-slate-400 hover:text-primary transition-colors"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="#"
              className="text-slate-400 hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
