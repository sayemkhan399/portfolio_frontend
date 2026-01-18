import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Mail
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Account = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Connect With Me",
      subtitle: "Let’s build, collaborate, and grow together."
    },
    bn: {
      title: "আমার সাথে যোগাযোগ করুন",
      subtitle: "একসাথে তৈরি করি, শিখি এবং এগিয়ে যাই।"
    }
  };

  const t = translations[language];

  const socialPlatforms = [
    { name: "GitHub", icon: Github, color: "#22c55e", url: "https://github.com/sayemkhan399" },
    { name: "LinkedIn", icon: Linkedin, color: "#0a66c2", url: "https://www.linkedin.com/in/md-sayem-khan-ab0a09286/" },
    { name: "Facebook", icon: Facebook, color: "#1877f2", url: "https://www.facebook.com/md.sayem.khan.7982780/" },
    { name: "Instagram", icon: Instagram, color: "#e1306c", url: "https://www.instagram.com/md_sayem_khan1/" },
    { name: "Email", icon: Mail, color: "#EA4335", url: "mailto:sayem399k@gmail.com" }
  ];

  return (
    <section className="relative w-full bg-[#070b14] py-28 px-4 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 -right-32 w-[600px] h-[600px] bg-cyan-500/10 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-emerald-400 mb-4"
        >
          {t.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-gray-400 max-w-xl mx-auto mb-14 text-lg"
        >
          {t.subtitle}
        </motion.p>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative rounded-3xl
            bg-white/5 backdrop-blur-xl
            border border-emerald-400/20
            shadow-[0_0_40px_rgba(16,185,129,0.15)]
            p-10 sm:p-14
          "
        >
          {/* Animated Border Glow */}
          <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-emerald-500/20 via-transparent to-cyan-500/20 blur-xl pointer-events-none" />

          {/* Social Grid */}
          <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-6">
            {socialPlatforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ scale: 1.08 }}
                  className="
                    group relative rounded-2xl
                    bg-white/5 border border-white/10
                    p-6 flex flex-col items-center justify-center
                    transition-all duration-300
                    hover:border-emerald-400/40
                    hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]
                  "
                >
                  <Icon
                    className="w-8 h-8 mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: platform.color }}
                  />
                  <span className="text-sm text-gray-300 tracking-wide">
                    {platform.name}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Account;
