import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// Lucide Icons
import { Palette, Server, Languages, Database, Code2 } from "lucide-react";

// React Icons
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaJava,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiC,
  SiCplusplus,
  SiGithub,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

import { useLanguage } from "../contexts/LanguageContext";

/* -------------------- Translations -------------------- */
const translations = {
  en: {
    title: "Tech Proficiency",
    subtitle: "A Breakdown of My Core Development Strengths",
    frontend: "Frontend ",
    backend: "Backend ",
    tools: "Tools & Technologies",
    languages: "Programming Languages",
    react: "React",
    next: "Next.js",
    javascript: "JavaScript",
    htmlcss: "HTML & CSS",
    tailwind: "Tailwind CSS",
    redux: "Redux",
    node: "Node.js",
    express: "Express.js",
    mongodb: "MongoDB",
    rest: "REST APIs",
    firebase: "Firebase",
    python: "Python",
    c: "C",
    cpp: "C++",
    java: "Java",
    typescript: "TypeScript",
    sql: "SQL",
    git: "Git",
    figma: "Figma",
    github: "GitHub",
    netlify: "Netlify",
    vercel: "Vercel",
  },
  bn: {
    title: "টেক দক্ষতা",
    subtitle: "আমার মূল ডেভেলপমেন্ট দক্ষতার সংক্ষিপ্ত বিবরণ",
    frontend: "ফ্রন্টএন্ড",
    backend: "ব্যাকএন্ড",
    tools: "টুলস ও প্রযুক্তি",
    languages: "প্রোগ্রামিং ভাষা",
    react: "রিএক্ট",
    next: "নেক্সট জেএস",
    javascript: "জাভাস্ক্রিপ্ট",
    htmlcss: "এইচটিএমএল ও সিএসএস",
    tailwind: "টেইলউইন্ড",
    redux: "রিডাক্স",
    node: "নোড জেএস",
    express: "এক্সপ্রেস",
    mongodb: "মঙ্গোডিবি",
    rest: "রেস্ট এপিআই",
    firebase: "ফায়ারবেস",
    python: "পাইথন",
    c: "সি",
    cpp: "সি++",
    java: "জাভা",
    typescript: "টাইপস্ক্রিপ্ট",
    sql: "এসকিউএল",
    git: "গিট",
    figma: "ফিগমা",
    github: "গিটহাব",
    netlify: "নেটলিফাই",
    vercel: "ভার্সেল",
  },
};

/* -------------------- Skill Bar -------------------- */
const SkillBar = ({ name, icon: Icon, level, color }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      width: `${level}%`,
      transition: { duration: 1.2, ease: "easeOut" },
    });
  }, [controls, level]);

  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <Icon className={`w-5 h-5 ${color}`} />
          <span className="text-sm font-medium text-white/90">{name}</span>
        </div>
        <span className="text-xs text-emerald-300">{level}%</span>
      </div>

      <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          className="h-full rounded-full bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-300 shadow-[0_0_14px_rgba(52,211,153,0.6)]"
        />
      </div>
    </div>
  );
};

/* -------------------- Card Wrapper -------------------- */
const SkillCard = ({ title, icon: Icon, accent, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="relative bg-white/5 p-7 rounded-2xl border border-white/10 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] hover:shadow-[0_30px_90px_-20px_rgba(52,211,153,0.35)] transition-all duration-500 group"
  >
    <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-emerald-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    <h3 className="relative z-10 text-xl font-semibold text-white mb-7 flex items-center gap-3">
      <Icon className={`w-6 h-6 ${accent}`} />
      {title}
    </h3>

    {skills.map((skill, i) => (
      <SkillBar key={i} {...skill} />
    ))}
  </motion.div>
);

/* -------------------- Main Component -------------------- */
const TechProficiency = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const skillsData = {
    frontend: [
      { name: t.react, icon: FaReact, level: 95, color: "text-cyan-300" },
      { name: t.next, icon: SiNextdotjs, level: 85, color: "text-white" },
      { name: t.javascript, icon: FaJs, level: 90, color: "text-yellow-300" },
      { name: t.htmlcss, icon: FaHtml5, level: 95, color: "text-orange-400" },
      { name: t.tailwind, icon: SiTailwindcss, level: 92, color: "text-teal-300" },
      { name: t.redux, icon: SiRedux, level: 85, color: "text-purple-300" },
    ],
    backend: [
      { name: t.node, icon: FaNodeJs, level: 90, color: "text-green-400" },
      { name: t.express, icon: SiExpress, level: 88, color: "text-white/70" },
      { name: t.mongodb, icon: SiMongodb, level: 85, color: "text-emerald-400" },
      { name: t.rest, icon: Server, level: 90, color: "text-cyan-300" },
      { name: t.firebase, icon: SiFirebase, level: 80, color: "text-yellow-400" },
      { name: t.sql, icon: Database, level: 80, color: "text-emerald-300" },
    ],
    programming: [
      { name: t.python, icon: FaPython, level: 85, color: "text-green-300" },
      { name: t.c, icon: SiC, level: 80, color: "text-blue-300" },
      { name: t.cpp, icon: SiCplusplus, level: 78, color: "text-indigo-300" },
      { name: t.java, icon: FaJava, level: 75, color: "text-red-300" },
      { name: t.typescript, icon: SiTypescript, level: 78, color: "text-blue-300" },
    ],
    tools: [ 
      { name: t.github, icon: SiGithub, level: 92, color: "text-white" },
      { name: t.netlify, icon: SiNetlify, level: 90, color: "text-cyan-400" },
      { name: t.vercel, icon: SiVercel, level: 88, color: "text-white" },
      { name: t.git, icon: FaGitAlt, level: 90, color: "text-red-300" },
      { name: t.figma, icon: FaFigma, level: 82, color: "text-pink-300" },
    ],
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 md:px-10 bg-[#070b14] overflow-hidden">
      {/* Ambient lights */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-400/20 blur-[140px] rounded-full" />
      <div className="absolute top-32 -right-40 w-[500px] h-[500px] bg-cyan-400/20 blur-[140px] rounded-full" />

      {/* Header */}
      <div className="relative text-center mb-16">
        <span className="text-xs tracking-[0.35em] text-emerald-400 uppercase">
          Skills
        </span>
        <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white/90">
          {t.title}
        </h2>
        <p className="mt-4 text-white/60 max-w-xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      {/* Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <SkillCard title={t.frontend} icon={Palette} accent="text-emerald-400" skills={skillsData.frontend} delay={0.1} />
        <SkillCard title={t.backend} icon={Server} accent="text-cyan-400" skills={skillsData.backend} delay={0.2} />
        <SkillCard title={t.languages} icon={Code2} accent="text-teal-400" skills={skillsData.programming} delay={0.3} />
        <SkillCard title={t.tools} icon={Languages} accent="text-green-400" skills={skillsData.tools} delay={0.4} />
      </div>
    </section>
  );
};

export default TechProficiency;
