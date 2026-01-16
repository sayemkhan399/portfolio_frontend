import React from "react";
import { Rocket } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import Logo from "../components/Logo";

const Footer = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      description:
        "Passionate MERN Stack Developer crafting responsive, interactive web experiences with modern tools.",
      copyright: "All rights reserved.",
      builtWith: "Built with",
      mern: "MERN Stack"
    },
    bn: {
      description:
        "আধুনিক টুলস ব্যবহার করে রেসপন্সিভ, ইন্টারঅ্যাকটিভ ওয়েব অভিজ্ঞতা তৈরিকারী একজন উৎসাহী MERN স্ট্যাক ডেভেলপার।",
      copyright: "সর্বস্বত্ব সংরক্ষিত।",
      builtWith: "তৈরি করা হয়েছে",
      mern: "MERN স্ট্যাক দিয়ে"
    }
  };

  const t = translations[language];

  return (
    <footer className="relative w-full bg-[#070b14] overflow-hidden">
      {/* ✅ UNIQUE AMBIENT BACKGROUND — Horizontal Emerald + Lime Wave */}
      <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-r from-emerald-500/5 via-lime-400/5 to-emerald-500/5 blur-xl" />

      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col items-center text-center relative z-10">
        {/* Logo + Name */}
        <div className="flex items-center space-x-3 mb-6">
          <Logo />
        </div>

        {/* Description */}
        <p className="max-w-2xl text-sm md:text-base text-gray-400 leading-relaxed mb-8 josefin">
          {t.description}
        </p>

        {/* MERN Stack Icons */}
        <div className="flex flex-col items-center">
          <p className="text-xs text-emerald-400/90 mb-2 font-medium">
            {t.builtWith} <span className="text-gray-300">{t.mern}</span>
          </p>
          <div className="flex items-center gap-5">
            <SiMongodb className="text-2xl text-emerald-400 drop-shadow-lg" />
            <SiExpress className="text-2xl text-gray-400 drop-shadow" />
            <SiReact className="text-2xl text-sky-400 drop-shadow" />
            <SiNodedotjs className="text-2xl text-emerald-500 drop-shadow" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-emerald-400/20" />

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto px-6 py-5 text-center text-xs md:text-sm text-gray-500 relative z-10">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-emerald-400">MD. SAYEM KHAN</span>. {t.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;