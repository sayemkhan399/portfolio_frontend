import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Code,
  GraduationCap,
  MessageCircle,
  Home,
  Database,
  FileUser,
  X,
  Download,
} from "lucide-react";

import image from "../assets/profile.jpeg";

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full bg-[#070b14] text-white px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* ✅ Ambient Glowing Orbs (from TechProficiency) */}
      <div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-emerald-400/20 blur-[140px] rounded-full" />
      <div className="absolute top-40 -right-40 w-[500px] h-[500px] bg-cyan-400/20 blur-[140px] rounded-full" />

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2 text-emerald-400"
      >
        About{" "}
        <span className="bg-emerald-400/20 backdrop-blur-lg rounded-full p-2">
          Me
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-lg sm:text-xl text-center josefin mb-8 sm:mb-10 text-gray-300 max-w-3xl mx-auto px-2"
      >
        Passionate MERN Stack Developer & Computer Science Student
      </motion.p>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8 sm:gap-10 md:gap-12 px-2">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1"
        >
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 px-2">
            Hi, I'm{" "}
            <span className="font-bold text-emerald-400">Md. Sayem Khan</span> — a
            passionate{" "}
            <span className="font-medium text-emerald-400">
              MERN Stack Developer
            </span>{" "}
            currently pursuing my degree in{" "}
            <span className="font-medium text-emerald-400">
              Computer Science and Engineering
            </span>
            .
          </p>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 px-2">
            I love building full-stack web applications with modern technologies
            like React, Node.js, Express, and MongoDB. When I'm not coding,
            you’ll find me exploring new frameworks, contributing to open-source
            projects, or deepening my understanding of system design and
            algorithms.
          </p>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mt-6 px-2">
            <span className="bg-emerald-900/40 text-emerald-300 text-[10px] sm:text-xs px-2.5 py-1 rounded-full flex items-center gap-1 whitespace-nowrap border border-emerald-700/50">
              <Home className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Remote Developer
            </span>
            <span className="bg-cyan-900/40 text-cyan-300 text-[10px] sm:text-xs px-2.5 py-1 rounded-full flex items-center gap-1 whitespace-nowrap border border-cyan-700/50">
              <Code className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              MERN Stack
            </span>
            <span className="bg-purple-900/40 text-purple-300 text-[10px] sm:text-xs px-2.5 py-1 rounded-full flex items-center gap-1 whitespace-nowrap border border-purple-700/50">
              <Database className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              MongoDB Expert
            </span>
            <span className="bg-yellow-900/40 text-yellow-300 text-[10px] sm:text-xs px-2.5 py-1 rounded-full flex items-center gap-1 whitespace-nowrap border border-yellow-700/50">
              <GraduationCap className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              CSE Student
            </span>
            {/* Resume Button */}
            <motion.button
              onClick={() => setOpen(true)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="relative flex items-center gap-2 px-5 py-2 rounded-full
                         bg-linear-to-r from-emerald-500 to-teal-500 text-white
                         text-[10px] sm:text-xs
                         shadow-md hover:shadow-lg
                         transition-all duration-300
                         group overflow-hidden"
            >
              <span className="transition-transform duration-500 group-hover:rotate-180">
                <FileUser className="h-4 w-4" />
              </span>
              <span>Download Resume</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Image + Floating Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 relative flex justify-center order-1 md:order-2"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full blur-xl bg-emerald-500/20 animate-pulse"></div>
            <img
              src={image}
              alt="Md. Sayem Khan"
              className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full object-cover border-4 border-emerald-500 shadow-lg"
            />

            {/* Floating Card 1: Top Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-0 right-0 translate-x-[40%] -translate-y-[40%] sm:translate-x-1/2 sm:-translate-y-1/2 bg-white/10 backdrop-blur-sm p-2.5 sm:p-3 rounded-lg border border-emerald-400/30 text-center w-24 sm:w-28"
            >
              <div className="text-sm font-bold text-emerald-400">MERN</div>
              <div className="text-[10px] text-gray-300 mt-0.5">Full-Stack</div>
              <div className="mt-1">
                <Code className="h-4 w-4 mx-auto text-emerald-400" />
              </div>
            </motion.div>

            {/* Floating Card 2: Bottom Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="absolute bottom-0 left-0 -translate-x-[40%] translate-y-[40%] sm:-translate-x-1/2 sm:translate-y-1/2 bg-white/10 backdrop-blur-sm p-2.5 sm:p-3 rounded-lg border border-emerald-400/30 text-center w-28"
            >
              <div className="text-sm font-bold text-emerald-400">CSE</div>
              <div className="text-[10px] text-gray-300 mt-0.5">Student</div>
              <div className="mt-1">
                <GraduationCap className="h-4 w-4 mx-auto text-emerald-400" />
              </div>
            </motion.div>

            {/* Floating Card 3: Bottom Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute bottom-0 right-0 translate-x-[40%] translate-y-[40%] sm:translate-x-1/2 sm:translate-y-1/2 bg-white/10 backdrop-blur-sm p-2.5 sm:p-3 rounded-lg border border-emerald-400/30 text-center w-24 sm:w-28"
            >
              <div className="text-sm font-bold text-emerald-400">24/7</div>
              <div className="text-[10px] text-gray-300 mt-0.5">Collab</div>
              <div className="mt-1">
                <MessageCircle className="h-4 w-4 mx-auto text-emerald-400" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 40, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 40, scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden border border-emerald-500/20"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-emerald-500/20">
                <h3 className="text-lg font-semibold text-emerald-400">
                  Resume Preview
                </h3>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-full hover:bg-red-900/30 transition"
                >
                  <X className="w-5 h-5 text-gray-400 hover:text-red-400" />
                </button>
              </div>

              {/* PDF Preview */}
              <div className="flex-1 bg-black/30">
                <iframe
                  src="/Sayem_Khan_Resume.pdf"
                  title="Resume Preview"
                  className="w-full h-full"
                />
              </div>

              {/* Footer */}
              <div className="flex justify-end items-center gap-3 px-5 py-4 border-t border-emerald-500/20 bg-gray-900">
                <a
                  href="/Sayem_Khan_Resume.pdf"
                  download
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full
                       bg-linear-to-r from-emerald-500 to-teal-500 text-white text-sm
                       shadow-md hover:shadow-lg transition"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;