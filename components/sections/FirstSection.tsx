"use client";
import { motion, useScroll, useTransform } from "framer-motion";

import FadeUp from "../animation/FadeUp";
import InitialLoader from "../loader/InitialLoader";
import DesktopNav from "../nav/DesktopNav";
import MobileNav from "../nav/MobileNav";

export default function FirstSection() {
  const { scrollYProgress } = useScroll();

  const opacity1 = useTransform(scrollYProgress, [0.03, 0.05], [1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.05], [1, 0.8]);
  const scale2 = useTransform(scrollYProgress, [0, 0.05], [0.8, 1]);
  const scale3 = useTransform(scrollYProgress, [0, 0.05], [0.6, 0.8]);
  const scale4 = useTransform(scrollYProgress, [0, 0.05], [0.8, 1]);
  const y1 = useTransform(scrollYProgress, [0, 0.05], ["42%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0.055, 0.1], ["0", "-100%"]);

  return (
    <motion.div style={{ y: y2 }} className="fixed w-full h-screen">
      <InitialLoader />

      <MobileNav />

      <DesktopNav />

      <div className="container absolute top-0 h-screen left-0 right-0 flex flex-col justify-end overflow-y-hidden">
        <div className=" p-3 md:p-10 flex justify-between items-end ">
          <FadeUp delay={0.33}>
            <p className="text-6xl md:text-7xl xl:text-8xl w-[80%]">
              Geschmack auf höchstem Niveau.
            </p>
          </FadeUp>

          <motion.div
            style={{ y: y1 }}
            className="hidden w-[50%] xl:flex flex-col items-end gap-14"
          >
            <FadeUp delay={0.33}>
              <motion.p
                style={{ scale: scale1, opacity: opacity1 }}
                className="font-extralight text-lg text-right mb-10 origin-bottom-right"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita eum, dolor fugiat totam ullam, ipsam vel cumque,
                accusamus nostrum voluptates?
              </motion.p>
            </FadeUp>

            <FadeUp delay={0.33}>
              <div className="text-right">
                <motion.p
                  className="text-8xl origin-bottom-right"
                  style={{ scale: scale1 }}
                >
                  33
                </motion.p>
                <p className="font-thin">Fleischsorten</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.33}>
              <div className="text-right">
                <motion.p
                  className="text-8xl origin-bottom-right"
                  style={{ scale: scale2 }}
                >
                  42
                </motion.p>
                <p className="font-thin">Beilagen</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.33}>
              <div className="text-right">
                <motion.p
                  className="text-8xl origin-bottom-right"
                  style={{ scale: scale3 }}
                >
                  21
                </motion.p>
                <p className="font-thin">Beilagen</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.33}>
              <motion.p
                style={{ scale: scale4 }}
                className="font-extralight text-lg text-right origin-bottom-right"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita eum, dolor fugiat totam ullam, ipsam vel cumque,
                accusamus nostrum voluptates?
              </motion.p>
            </FadeUp>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
