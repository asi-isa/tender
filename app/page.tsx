"use client";

import FirstSection from "@/components/sections/FirstSection";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [yValue, setYValue] = useState(0);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setYValue(latest);
  });

  return (
    <main className="h-[1500vh]">
      <p className="fixed top-0 z-50">{yValue}</p>

      <FirstSection />
    </main>
  );
}
