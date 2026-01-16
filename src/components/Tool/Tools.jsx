import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import ToolsCard from "./ToolsCard";
import GlassDistortionFilter from "./GlassDistortionFilter";

const Tools = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    fetch("/data/tech_logos.json")
      .then((response) => response.json())
      .then((data) => setLogos(data))
      .catch((err) => console.error("Error loading logos:", err));
  }, []);

  return (
    <section className="relative py-16 bg-[#070b14] px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-emerald-500/5 via-lime-400/5 to-emerald-500/5 blur-xl" />

      {/* Global glass distortion filter */}
      <GlassDistortionFilter />

      <Marquee gradient={false} speed={50} direction="left">
        {logos.map((tech, index) => (
          <ToolsCard key={index} tech={tech} />
        ))}
      </Marquee>
    </section>
  );
};

export default Tools;