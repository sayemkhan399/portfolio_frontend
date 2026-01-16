import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import {
  ArrowLeft,
  ArrowRight,
  Code,
  Server,
  Database,
  Layers,
  Lock,
} from "lucide-react";

const ServiceCarousel = () => {
  const { language } = useLanguage();
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  /* -------------------- TRANSLATIONS -------------------- */
  const translations = {
    en: {
      title: "What I Offer ?",
      subtitle:
        "Focused, scalable, and modern solutions tailored to your product",
      services: [
        {
          title: "Frontend Development",
          desc: "Responsive, animated UI using React, Tailwind CSS, and Framer Motion.",
          icon: Code,
          // Removed linear — using solid dark cards
        },
        {
          title: "Backend Development",
          desc: "Robust APIs with Node.js, Express, authentication, and clean architecture.",
          icon: Server,
        },
        {
          title: "Database Engineering",
          desc: "Optimized MongoDB schemas, indexing, and performance-focused models.",
          icon: Database,
        },
        {
          title: "Full-Stack Solutions",
          desc: "End-to-end MERN applications from idea to production deployment.",
          icon: Layers,
        },
        {
          title: "Auth & Security",
          desc: "JWT, OAuth, protected routes, hashing, and role-based access.",
          icon: Lock,
        },
      ],
    },
    bn: {
      title: "আমি যা অফার করি ?",
      subtitle:
        "আপনার প্রোডাক্টের জন্য আধুনিক ও স্কেলযোগ্য সমাধান",
      services: [
        {
          title: "ফ্রন্টএন্ড ডেভেলপমেন্ট",
          desc: "React, Tailwind CSS ও Framer Motion দিয়ে রেসপন্সিভ UI।",
          icon: Code,
        },
        {
          title: "ব্যাকএন্ড ডেভেলপমেন্ট",
          desc: "Node.js, Express ও নিরাপদ API আর্কিটেকচার।",
          icon: Server,
        },
        {
          title: "ডাটাবেস ইঞ্জিনিয়ারিং",
          desc: "MongoDB স্কিমা, ইনডেক্সিং ও পারফরম্যান্স অপটিমাইজেশন।",
          icon: Database,
        },
        {
          title: "ফুল-স্ট্যাক সলিউশন",
          desc: "আইডিয়া থেকে প্রোডাকশন পর্যন্ত সম্পূর্ণ MERN অ্যাপ।",
          icon: Layers,
        },
        {
          title: "অথেন্টিকেশন ও সিকিউরিটি",
          desc: "JWT, OAuth, রোল-ভিত্তিক অ্যাক্সেস কন্ট্রোল।",
          icon: Lock,
        },
      ],
    },
  };

  const t = translations[language];
  const total = t.services.length;

  /* -------------------- AUTOPLAY -------------------- */
  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 5000);
    return () => clearInterval(id);
  }, [autoPlay, total]);

  const prev = () => {
    setIndex((i) => (i - 1 + total) % total);
    setAutoPlay(false);
  };

  const next = () => {
    setIndex((i) => (i + 1) % total);
    setAutoPlay(false);
  };

  /* -------------------- VISIBLE CARDS -------------------- */
  const visible = [-2, -1, 0, 1, 2].map((offset) => ({
    offset,
    data: t.services[(index + offset + total) % total],
  }));

  // Card accent colors (for icons & ring)
  const getAccentColor = (offset) => {
    if (offset === 0) return "text-emerald-400";
    return "text-gray-400";
  };

  return (
    <section className="relative w-full bg-[#070b14] py-24 px-3 sm:px-4 overflow-hidden">
      {/* ✅ Ambient Glowing Orbs */}
      {/* <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-400/20 blur-[140px] rounded-full" />
      <div className="absolute top-32 -right-40 w-[500px] h-[500px] bg-cyan-400/20 blur-[140px] rounded-full" /> */}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-3">
            {t.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base josefin">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative h-[300px] sm:h-[340px] md:h-[380px] flex items-center justify-center">
          {visible.map(({ offset, data }, i) => {
            const Icon = data.icon;
            const isCenter = offset === 0;
            const accentColor = getAccentColor(offset);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{
                  opacity: isCenter ? 1 : 0.35,
                  scale: isCenter ? 1 : 0.88,
                  x: offset * 90,
                  rotate: offset * 6,
                  zIndex: 10 - Math.abs(offset),
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className={`absolute
                  w-[85%] sm:w-[70%] md:w-[55%]
                  h-full rounded-2xl 
                  bg-white/5 backdrop-blur-sm 
                  border border-emerald-400/20
                  shadow-[0_8px_30px_rgba(0,0,0,0.3)]
                  px-4 sm:px-6 py-6
                  flex flex-col items-center justify-center text-center`}
              >
                {isCenter && (
                  <span className="absolute inset-0 rounded-2xl ring-2 ring-emerald-400/50 pointer-events-none" />
                )}

                <Icon className={`w-9 h-9 sm:w-10 sm:h-10 ${accentColor} mb-3`} />

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 josefin">
                  {data.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed josefin hidden sm:block">
                  {data.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-emerald-400/30 hover:bg-emerald-400/20 transition flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-400" />
          </button>
          <button
            onClick={next}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-emerald-400/30 hover:bg-emerald-400/20 transition flex items-center justify-center"
          >
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;