import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = React.useState(null);

  const aboutData = [
    {
      question: {
        en: "Who am I?",
        bn: "আমি কে?",
      },
      answer: {
        en: "I'm Md. Sayem Khan, a passionate MERN Stack Developer and Computer Science student specializing in React, Tailwind CSS, and Framer Motion.",
        bn: "আমি মোঃ সাইয়েম খান, একজন উৎসাহী MERN স্ট্যাক ডেভেলপার এবং কম্পিউটার সায়েন্সের ছাত্র যিনি রিঅ্যাক্ট, টেইলউইন্ড সিএসএস এবং ফ্রেমার মোশনে বিশেষজ্ঞ।",
      },
    },
    {
      question: {
        en: "What do I build?",
        bn: "আমি কী তৈরি করি?",
      },
      answer: {
        en: "I craft responsive and interactive web applications with modern technologies like React, Node.js, Express, and MongoDB.",
        bn: "আমি রিঅ্যাক্ট, নোড.জেএস, এক্সপ্রেস এবং মঙ্গোডিবির মতো আধুনিক প্রযুক্তি ব্যবহার করে রেসপন্সিভ এবং ইন্টারঅ্যাকটিভ ওয়েব অ্যাপ্লিকেশন তৈরি করি।",
      },
    },
    {
      question: {
        en: "My design approach",
        bn: "আমার ডিজাইন পদ্ধতি",
      },
      answer: {
        en: "I focus on clean code, intuitive user experiences, and pixel-perfect responsive designs that work seamlessly across all devices.",
        bn: "আমি ক্লিন কোড, সহজবোধ্য ইউজার এক্সপেরিয়েন্স এবং পিক্সেল-পারফেক্ট রেসপন্সিভ ডিজাইনের উপর ফোকাস করি যা সমস্ত ডিভাইসে মসৃণভাবে কাজ করে।",
      },
    },
    {
      question: {
        en: "Current focus",
        bn: "বর্তমান ফোকাস",
      },
      answer: {
        en: "Currently pursuing my Computer Science degree while building full-stack web applications and contributing to open-source projects.",
        bn: "বর্তমানে কম্পিউটার সায়েন্সের ডিগ্রি অর্জন করছি এবং একইসাথে ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন তৈরি করছি এবং ওপেন-সোর্স প্রকল্পে অবদান রাখছি।",
      },
    },
    {
      question: {
        en: "Let's connect!",
        bn: "যোগাযোগ করুন!",
      },
      answer: {
        en: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
        bn: "আমি সর্বদা নতুন প্রকল্প, সৃজনশীল আইডিয়া বা আপনার ভিশনের অংশ হওয়ার সুযোগ নিয়ে আলোচনার জন্য উন্মুক্ত।",
      },
    },
  ];

  const translations = {
    en: {
      aboutTitle: "Frequently Asked Questions",
      aboutSubtitle:
        "Get to know me through these key aspects of my journey as a developer.",
    },
    bn: {
      aboutTitle: "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী",
      aboutSubtitle:
        "ডেভেলপার হিসেবে আমার যাত্রার এই গুরুত্বপূর্ণ দিকগুলোর মাধ্যমে আমাকে জানুন।",
    },
  };

  const t = translations[language];

  return (
    <section className="relative w-full bg-[#070b14] py-20 px-4 sm:px-6 overflow-hidden">
      {/* ✅ UNIQUE AMBIENT BACKGROUND — Lime (top-center) + Emerald (bottom-right) */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-lime-400/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-20 -right-40 w-[600px] h-[600px] bg-emerald-500/15 blur-[160px] rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mt-2 text-emerald-400">
            {t.aboutTitle}
          </h1>
          <p className="text-lg sm:text-xl text-center josefin my-5 sm:mb-10 text-gray-400 max-w-2xl mx-auto px-2">
            {t.aboutSubtitle}
          </p>

          <div className="w-full mt-10 flex flex-col gap-5 items-start text-left">
            {aboutData.map((item, index) => (
              <div key={index} className="flex flex-col items-start w-full">
                <div
                  className="flex items-center justify-between w-full cursor-pointer 
                             bg-white/10 backdrop-blur-sm border border-emerald-400/20 
                             p-5 rounded-xl hover:border-emerald-400/40 transition-all duration-300"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h2 className="text-base font-medium text-gray-200">
                    {item.question[language]}
                  </h2>
                  <ChevronDown
                    size={20}
                    className={`text-emerald-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <p
                  className={`text-gray-300 px-5 transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "opacity-100 max-h-96 pt-4"
                      : "opacity-0 max-h-0 -translate-y-2"
                  }`}
                >
                  {item.answer[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;