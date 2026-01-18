import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Work Experience",
      subtitle: "My professional journey and key projects",
      current: "Present",
    },
    bn: {
      title: "কর্ম অভিজ্ঞতা",
      subtitle: "আমার পেশাদার যাত্রা এবং প্রধান প্রকল্প",
      current: "বর্তমান",
    },
  };

  const t = translations[language];

  const [roles, setRoles] = useState([]);
  useEffect(() => {
    fetch("https://ftpserver2.vercel.app/experience")
      .then((res) => res.json())
      .then((data) => setRoles(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="relative w-full bg-[#070b14] py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* ✅ UNIQUE GREEN-THEMED AMBIENT BACKGROUND — Bottom-left + Top-right */}
      <div className="absolute bottom-20 -left-40 w-[500px] h-[500px] bg-teal-400/10 blur-[140px] rounded-full" />
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-amber-400/10 blur-[160px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-3 text-emerald-400">
            {t.title}
          </h2>
          <p className="text-gray-400 josefin max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="space-y-8">
          {[...roles].reverse().map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-emerald-400/30"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-2.5 top-1 w-5 h-5 rounded-full bg-emerald-400 border-4 border-[#070b14] shadow-lg"></div>

              {/* Role Card — Glass-morphism */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {role.title}
                    </h3>
                    <p className="text-emerald-400 font-medium">
                      {role.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-gray-300 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{role.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-gray-300 text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{role.location}</span>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {role.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
