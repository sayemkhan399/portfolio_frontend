// src/components/LanguageToggle.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label={language === 'en' ? 'Switch to Bangla' : 'Switch to English'}
      className="px-3 py-1.5 text-sm font-medium bg-green-400 hover:bg-green-500 text-gray-700 cursor-pointer rounded-lg transition-colors"
    >
      {language === 'en' ? 'বাংলা' : 'English'}
    </button>
  );
};

export default LanguageToggle;