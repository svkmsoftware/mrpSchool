"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroCarousel() {
  const slides = [
    {
      image: "/images/carousel/slider_1.jpg",
      title: "Nurturing Tomorrow's Leaders Today",
      subtitle:
        "Experience a world-class education focused on academic excellence and character building.",
      cta: "Explore Our Campus",
      link: "/infrastructure",
    },
    {
      image: "/images/carousel/slider_2.jpg",
      title: "Empowering Innovation & Creativity",
      subtitle:
        "Our state-of-the-art STEM labs and arts programs encourage students to think beyond boundaries.",
      cta: "View Curriculum",
      link: "/academics",
    },
    {
      image: "/images/carousel/slider_3.jpg",
      title: "A Legacy of Sporting Excellence",
      subtitle:
        "Fostering teamwork and resilience through our Olympic-sized facilities and professional coaching.",
      cta: "Join the Team",
      link: "/sports",
    },
  ];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering on server to avoid ID mismatch
  if (!mounted) {
    return <div className="h-[80vh] bg-slate-900" />; // Return a simple placeholder
  }

  return (
    <div className="relative h-[80vh] md:h-[90vh] w-full group">
      <Swiper
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[5000ms] scale-110 group-active:scale-100"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Dark Gradient for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
              </div>

              {/* Content Container */}
              <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
                <div className="max-w-2xl text-white">
                  <span className="inline-block px-4 py-1.5 mb-4 bg-primary text-[10px] font-bold uppercase tracking-[0.3em] rounded-full animate-in fade-in slide-in-from-bottom-4 duration-700">
                    Welcome to MRPS
                  </span>
                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-lg leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    {slide.subtitle}
                  </p>
                  <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                    <Link
                      href={slide.link}
                      className="px-8 py-4 bg-primary hover:bg-white hover:text-primary text-white font-bold rounded-full transition-all duration-300 shadow-xl shadow-primary/20"
                    >
                      {slide.cta}
                    </Link>
                    <Link
                      href="/contact"
                      className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-slate-900 text-white font-bold rounded-full transition-all duration-300"
                    >
                      Admissions Open
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles for Swiper Pagination/Navigation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .swiper-button-next, .swiper-button-prev {
                color: white !important;
                background: rgba(255,255,255,0.1) !important;
                backdrop-filter: blur(4px);
                width: 50px !important;
                height: 50px !important;
                border-radius: 50%;
                border: 1px solid rgba(255,255,255,0.2);
                opacity: 0;
                transition: all 0.3s ease;
            }
            .group:hover .swiper-button-next, .group:hover .swiper-button-prev {
                opacity: 1;
            }
            .swiper-pagination-bullet-active {
                background: white !important;
                width: 30px !important;
                border-radius: 5px !important;
            }
            `,
        }}
      />
    </div>
  );
}
