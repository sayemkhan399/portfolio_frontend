import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";

const translations = {
  en: {
    sectionTitle: "My Work",
    sectionSubtitle:
      "Here are some of my recent projects. I focus on clean code, responsive design, and seamless user experience.",
    demo: "Demo →",
    seeAll: "See All...",
    filters: {
      all: "All Projects",
      single: "Single",
      collaborate: "Collaborate",
    },
  },
  bn: {
    sectionTitle: "আমার কাজ",
    sectionSubtitle:
      "এখানে আমার কিছু সাম্প্রতিক প্রকল্প রয়েছে। আমি ক্লিন কোড, রেসপন্সিভ ডিজাইন এবং মসৃণ ইউজার এক্সপেরিয়েন্সের উপর ফোকাস করি।",
    demo: "ডেমো →",
    seeAll: "সব দেখুন...",
    filters: {
      all: "সব প্রজেক্ট",
      single: "সিঙ্গেল",
      collaborate: "কলাবোরেট",
    },
  },
};

const Work = ({ showAll = false }) => {
  const { language } = useLanguage();
  const t = translations[language];

  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("http://localhost:5001/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  const filterButtons = [
    { key: "all", label: t.filters.all },
    { key: "single", label: t.filters.single },
    { key: "collaborate", label: t.filters.collaborate },
  ];

  return (
    <section className="relative w-full bg-[#070b14] py-20 px-4 overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute -top-20 -left-32 w-[600px] h-[600px] bg-emerald-500/15 blur-[160px] rounded-full" />
      <div className="absolute -bottom-10 -right-40 w-[500px] h-[500px] bg-amber-400/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2 text-emerald-400"
        >
          {t.sectionTitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg text-center text-gray-400 max-w-3xl mx-auto mb-10"
        >
          {t.sectionSubtitle}
        </motion.p>

        {/* 🔹 FILTER BAR */}
        <div className="flex justify-center mb-14">
          <div className="relative flex gap-2 p-1 rounded-full bg-white/5 border border-emerald-400/20 backdrop-blur-md">
            {filterButtons.map((btn) => (
              <button
                key={btn.key}
                onClick={() => setFilter(btn.key)}
                className={`
                  relative px-5 py-2 text-sm font-medium rounded-full z-10 transition-colors
                  ${filter === btn.key ? "text-[#070b14]" : "text-gray-300"}
                `}
              >
                {filter === btn.key && (
                  <motion.span
                    layoutId="activeFilter"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute inset-0 rounded-full bg-emerald-400"
                  />
                )}
                <span className="relative z-10">{btn.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-xl overflow-hidden border border-emerald-400/20 bg-white/5 backdrop-blur-sm hover:border-emerald-400/40 transition-all"
            >
              {/* Header */}
              <div className="bg-linear-to-r from-emerald-500 to-teal-600 p-5 h-40 flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white">
                  <img src={project.icon} alt={project.title} />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white text-center">
                  {project.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="text-gray-300 text-sm mb-4 min-h-20 josefin">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-1 bg-white/10 text-gray-200 rounded-full border border-emerald-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 text-sm font-medium"
                  >
                    {t.demo}
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All */}
        {!showAll && projects.length > 6 && (
          <div className="flex justify-center mt-14">
            <Link
              to="/all-projects"
              className="px-10 py-3 bg-linear-to-r from-emerald-500 to-teal-600 text-white rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg"
            >
              {t.seeAll}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
