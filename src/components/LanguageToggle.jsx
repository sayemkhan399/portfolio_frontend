// src/components/LanguageToggle.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const isEnglish = language === 'en';

  return (
    <div className="flex items-center gap-2.5 px-2 py-1.5 rounded-xl bg-white/5 backdrop-blur-md border border-emerald-400/20">
      {/* English Label */}
      <span
        className={`text-xs font-medium transition-colors ${
          isEnglish ? 'text-emerald-400' : 'text-gray-400'
        }`}
      >
        EN
      </span>

      {/* Toggle Switch */}
      <button
        onClick={toggleLanguage}
        aria-label={isEnglish ? 'Switch to Bangla' : 'Switch to English'}
        className="relative w-11 h-6 flex items-center  rounded-full bg-gray-700/50 backdrop-blur-sm border border-emerald-400/30 
                   transition-all duration-300 hover:bg-gray-600/60 active:scale-[0.96] focus:outline-none"
      >
        {/* Animated Thumb */}
        <span
          className={`absolute w-5 h-5 rounded-full bg-emerald-500 shadow-md transform transition-transform duration-300 ease-in-out ${
            isEnglish ? 'translate-x-0.5' : 'translate-x-5'
          }`}
        />
      </button>

      {/* Bangla Label */}
      <span
        className={`text-xs font-medium transition-colors ${
          !isEnglish ? 'text-emerald-400' : 'text-gray-400'
        }`}
      >
        বাংলা
      </span>
    </div>
  );
};

export default LanguageToggle;