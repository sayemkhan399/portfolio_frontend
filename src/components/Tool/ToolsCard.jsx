import React from "react";

const ToolsCard = ({ tech }) => {
  const { name, icon } = tech;

  return (
    <div
      className="relative rounded-xl mx-3 sm:mx-4 md:mx-6 w-[120px] h-[100px] sm:w-[140px] sm:h-[110px] md:w-40 md:h-[120px]
                 isolate cursor-pointer flex items-center justify-center
                 bg-white/5 backdrop-blur-sm border border-emerald-400/20
                 hover:border-emerald-400/40 hover:bg-white/10 transition-all duration-300"
    >
      {/* Inner accent glow (subtle) */}
      <div className="absolute inset-0 z-0 rounded-xl bg-emerald-400/5 pointer-events-none"></div>

      {/* Icon and name */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <img
          src={icon}
          alt={name}
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 sm:mb-2 object-contain"
        />
        {/* ✅ Fixed text color for dark bg */}
        <p className="text-xs sm:text-sm md:text-sm font-medium josefin text-gray-200 text-center">
          {name}
        </p>
      </div>
    </div>
  );
};

export default ToolsCard;