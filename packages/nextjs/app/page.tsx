"use client";

import React, { useEffect, useState } from "react";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { Vortex } from "../components/ui/vortex";
import { motion } from "framer-motion";

export function Home() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setOpacity(1), 500);
    return () => clearTimeout(timer);
  }, []);

  const taglineWords = [
    { text: "Unlock", className: "text-gray-300" },
    { text: "your", className: "text-gray-300" },
    { text: "event", className: "text-gray-300" },
    { text: "experience", className: "text-gray-300" },
    { text: "with", className: "text-gray-300" },
    { text: "Eventure.", className: "text-gray-300" },
  ];

  return (
    <div className="w-full h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center w-full h-full"
      >
        <div className="text-center" style={{ opacity }}>
          <motion.h1
            initial={{ filter: "blur(10px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ duration: 2 }} // Increased animation time
            className="text-white text-9xl font-bold mb-4" // Increased font size
          >
            Eventure
          </motion.h1>
          <TypewriterEffect words={taglineWords} />
        </div>
      </Vortex>
    </div>
  );
}

export default Home;
