"use client"
import { useEffect, useState } from "react";

import { SiAmazon, SiJavascript } from "react-icons/si";
import { SiAwslambda } from "react-icons/si";

const techStack = [
  {
    icon: <SiAmazon size={40} />,
    bgColor: "bg-[#232f3e]", // Mild blue 232f3e
    label: "AWS",
  },
  {
    icon: <SiJavascript size={40} color="black" />,
    bgColor: "bg-[#F0DB4F]", // Yellow/Orange
    label: "JavaScript",
  },
  {
    icon: <SiAwslambda size={40} />,
    bgColor: "bg-[#ff9900]", // Green
    label: "Lambda",
  },
];

const RotatingTile = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % techStack.length);
    }, 1500); // 1.5s

    return () => clearInterval(interval);
  }, []);

  const { icon, bgColor, label } = techStack[index];

  return (
    <div
      className={`rounded-xl h-32 flex items-center justify-center text-white transition-all duration-1000 ${bgColor} animate-fadeBounce`}
      title={label}
    >
      {icon}
    </div>
  );
};

export default RotatingTile;
