import React from "react";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

const MernStack = () => {
  return (
    <div className="flex flex-col items-center">

      {/* Tech Icons */}
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center">
          <SiMongodb className="text-4xl text-green-600" />
          <span className="text-xs mt-1 text-gray-600">MongoDB</span>
        </div>
        <div className="flex flex-col items-center">
          <SiExpress className="text-4xl text-gray-800" />
          <span className="text-xs mt-1 text-gray-600">Express</span>
        </div>
        <div className="flex flex-col items-center">
          <SiReact className="text-4xl text-sky-500" />
          <span className="text-xs mt-1 text-gray-600">React</span>
        </div>
        <div className="flex flex-col items-center">
          <SiNodedotjs className="text-4xl text-green-500" />
          <span className="text-xs mt-1 text-gray-600">Node.js</span>
        </div>
      </div>
    </div>
  );
};

export default MernStack;