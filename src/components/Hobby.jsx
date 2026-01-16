import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Code,
  BookOpen,
  Mountain,
  Camera,
  Music,
  Gamepad2,
  Palette,
  Coffee,
} from "lucide-react";

const Hobby = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "My Hobbies & Interests",
      subtitle: "Beyond code — what fuels my creativity and curiosity",
      hobbies: [
        {
          title: "Open Source",
          desc: "Contributing to community-driven projects.",
          icon: Code,
        },
        {
          title: "Reading",
          desc: "Books on system design and algorithms.",
          icon: BookOpen,
        },
        {
          title: "Travelling",
          desc: "Mountains, trails, and nature.",
          icon: Mountain,
        },
        {
          title: "Photography",
          desc: "Light, moments, and urban aesthetics.",
          icon: Camera,
        },
        {
          title: "Music",
          desc: "Playing guitar and lo-fi tracks.",
          icon: Music,
        },
        {
          title: "Gaming",
          desc: "Strategy and story-driven games.",
          icon: Gamepad2,
        },
        {
          title: "Digital Art",
          desc: "UI and design experiments.",
          icon: Palette,
        },
        {
          title: "Coffee",
          desc: "Brewing and bean exploration.",
          icon: Coffee,
        },
      ],
    },
    bn: {
      title: "আমার শখ ও আগ্রহ",
      subtitle: "কোডের বাইরে — যা আমাকে অনুপ্রাণিত করে",
      hobbies: [
        { title: "ওপেন সোর্স", desc: "কমিউনিটি প্রকল্পে অবদান।", icon: Code },
        { title: "পড়া", desc: "সিস্টেম ডিজাইন ও অ্যালগরিদম।", icon: BookOpen },
        { title: "ভ্রমণ", desc: "প্রকৃতি ও পাহাড়।", icon: Mountain },
        { title: "ফটোগ্রাফি", desc: "আলো ও মুহূর্ত ধারণ।", icon: Camera },
        { title: "সঙ্গীত", desc: "গিটার ও লো-ফাই।", icon: Music },
        { title: "গেমিং", desc: "কৌশলভিত্তিক গেম।", icon: Gamepad2 },
        { title: "ডিজিটাল আর্ট", desc: "UI ও ডিজাইন পরীক্ষা।", icon: Palette },
        { title: "কফি", desc: "ব্রুইং ও বীজ অনুসন্ধান।", icon: Coffee },
      ],
    },
  };

  const t = translations[language];

  return (
    <section className="relative w-full bg-[#070b14] py-24 px-3 sm:px-4 overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-3">
            {t.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base josefin">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div
            className="absolute top-0 w-0.5 h-full bg-linear-to-b from-emerald-500 via-emerald-400 to-amber-400 
                          left-4 sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="space-y-12 sm:space-y-16">
            {t.hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="relative flex items-center"
                >
                  {/* Dot */}
                  <div
                    className="absolute w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-emerald-400 
                                  flex items-center justify-center z-10 shadow-lg backdrop-blur-sm
                                  left-4 sm:left-1/2 sm:-translate-x-1/2"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                  </div>

                  {/* Card wrapper */}
                  <div
                    className={`w-full sm:w-[42%] px-2 sm:px-3
                                ${
                                  isLeft
                                    ? "sm:pr-10 sm:text-right sm:mr-auto"
                                    : "sm:pl-10 sm:ml-auto"
                                } 
                                ml-16 sm:ml-0`}
                  >
                    {/* Card */}
                    <div
                      className="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-emerald-400/30 p-3 sm:p-5 
                                    transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:bg-white/20"
                    >
                      <h3 className="text-sm sm:text-base font-semibold text-emerald-300 mb-1 josefin">
                        {hobby.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed josefin">
                        {hobby.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobby;
