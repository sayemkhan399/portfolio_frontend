import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DiReact, DiHtml5 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { useLanguage } from "../contexts/LanguageContext";
import MernStack from "./MernStack";

const translations = {
  en: {
    badge: "Hi, I'm",
    title: "MD. SAYEM KHAN",
    subtitle:
      "Passionate MERN Stack Developer & Computer Science student building responsive, interactive web applications with modern technologies.",
    button: "Get Started",
  },
  bn: {
    badge: "হাই, আমি",
    title: "মো: সাঈম খাঁন",
    subtitle:
      "আধুনিক প্রযুক্তি ব্যবহার করে রেসপন্সিভ, ইন্টারঅ্যাকটিভ ওয়েব অ্যাপ্লিকেশন নির্মাণকারী একজন উৎসাহী MERN স্ট্যাক ডেভেলপার এবং কম্পিউটার সায়েন্সের ছাত্র।",
    button: "শুরু করুন",
  },
};

const floatY = (delay = 0) => ({
  y: [0, -16, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
    delay,
  },
});

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-10 py-12 overflow-hidden bg-[#070b14]">
      {/* Ambient Orbs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-400/20 blur-[140px] rounded-full" />
      <div className="absolute top-32 -right-40 w-[500px] h-[500px] bg-cyan-400/20 blur-[140px] rounded-full" />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 border border-emerald-400/30 text-emerald-400 rounded-full px-5 py-2.5 backdrop-blur bg-white/5 shadow-lg"
      >
        <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
        <span className="text-sm sm:text-base font-medium">{t.badge}</span>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.8 }}
        className="
          mt-8 text-center text-5xl sm:text-6xl md:text-7xl font-bold
          bg-linear-to-r from-emerald-400 via-teal-300 to-cyan-400
          bg-clip-text text-transparent
        "
      >
        {t.title}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.8 }}
        className="mt-6 max-w-xl text-center text-white/60 sm:text-lg md:text-xl leading-relaxed"
      >
        {t.subtitle}
      </motion.p>

      {/* Button / Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.8 }}
        className="mt-10"
      >
        <MernStack />
      </motion.div>

      {/* Floating Icons */}
      <motion.div
        animate={floatY(0)}
        className="absolute top-1/4 left-8 sm:left-16 text-4xl text-sky-400"
      >
        <DiReact />
      </motion.div>

      <motion.div
        animate={floatY(0.4)}
        className="absolute top-1/3 right-12 sm:right-24 text-4xl text-orange-400"
      >
        <DiHtml5 />
      </motion.div>

      <motion.div
        animate={floatY(0.8)}
        className="absolute bottom-24 left-10 sm:left-28 text-4xl text-teal-400"
      >
        <SiTailwindcss />
      </motion.div>

      <motion.div
        animate={floatY(1.2)}
        className="absolute bottom-16 right-12 text-green-400 opacity-40"
      >
        <ArrowRight className="w-8 h-8 rotate-45" />
      </motion.div>
    </section>
  );
};

export default Hero;
