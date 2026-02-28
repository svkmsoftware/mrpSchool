import { Quote } from "lucide-react";

export default function PresidentMessage() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3">Leadership</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">President's Message</h3>
          <div className="h-1.5 w-24 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* 1. Image Section - The "Framed" Look */}
          <div className="w-full lg:w-1/3 sticky top-24">
            <div className="relative">
              {/* Decorative background box */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10"></div>
              
              <div className="overflow-hidden rounded-2xl shadow-2xl bg-white p-3">
                <img 
                  src="/images/president.jpg" 
                  alt="President Mukesh R Patel" 
                  className="w-full h-auto rounded-xl grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-[3/4]"
                />
                <div className="mt-6 pb-2 text-center">
                  <h4 className="text-xl font-bold text-slate-900">Shri Mukesh R. Patel</h4>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wide">President, MRP School</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Message Content */}
          <div className="w-full lg:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 relative">
            {/* Large Decorative Quote Icon */}
            <Quote className="absolute top-8 right-8 text-slate-100 h-24 w-24 -z-0" />

            <div className="relative z-10 prose prose-slate prose-lg max-w-none">
              <p className="text-xl font-medium text-slate-700 leading-relaxed italic mb-8">
                "Education is not just the process of learning; it is the journey of becoming the best version of oneself."
              </p>
              
              <div className="space-y-6 text-slate-600 leading-loose">
                <p>
                  At <strong>Mukesh R Patel School</strong>, we believe that every child is a unique spark of potential. Our mission is to provide an environment that nurtures curiosity, fosters character, and encourages excellence in every field of human endeavor.
                </p>
                
                <p>
                  In a rapidly changing world, our focus remains steadfast on holistic development. We don't just prepare students for exams; we prepare them for life. By blending traditional values with modern technology and innovative teaching methodologies, we ensure our students are ready to lead and serve the global community.
                </p>

                <p>
                  I invite you to be a part of this transformative journey. Together, let us build a foundation where our children can dream big and achieve even bigger.
                </p>
              </div>

              {/* Signature Area */}
              <div className="mt-12 pt-8 border-t border-slate-100">
                <div className="flex flex-col items-start">
                  {/* If you have a signature image, place it here */}
                  {/* <img src="/images/signature.png" alt="Signature" className="h-16 mb-2" /> */}
                  <p className="font-serif text-2xl text-slate-800">Mukesh R. Patel</p>
                  <p className="text-slate-500 text-sm">President & Founder</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}