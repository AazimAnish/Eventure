"use client";

import React, { useEffect, useState } from "react";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { Vortex } from "../components/ui/vortex";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import Link from "next/link";

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
    <div className="w-full h-screen overflow-hidden relative flex flex-col justify-center items-center">
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
            transition={{ duration: 2 }}
            className="text-white text-9xl font-bold mb-4"
          >
            Eventure
          </motion.h1>
          <TypewriterEffect words={taglineWords} />
          <div className="flex flex-row gap-4 mt-8">
            <Button variant="outline">
              <Link href="/eventReg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Event Registration
              </Link>
            </Button>
            <Button variant="outline">
              <Link href="/communityReg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Community Registration
              </Link>
            </Button>
            <Button variant="outline">
              <Link href="/profile" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Profile
              </Link>
            </Button>
            <Button variant="outline">
              <Link href="/eventDash" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Event Dashboard
              </Link>
            </Button>
            <Button variant="outline">
              <Link href="/communityDash" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Community Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </Vortex>
    </div>
  );
}

export default Home;