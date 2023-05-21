"use client";

import FadeUp from "../animation/FadeUp";
import InitialLoader from "../loader/InitialLoader";
import DesktopNav from "../nav/DesktopNav";
import MobileNav from "../nav/MobileNav";

export default function FirstSection() {
  return (
    <>
      <InitialLoader />

      <MobileNav />

      <DesktopNav />

      <div className="container absolute top-0 h-screen left-0 right-0 p-3 md:p-10 flex justify-between items-end">
        <FadeUp delay={0.33}>
          <p className="text-6xl md:text-7xl xl:text-8xl w-[80%]">
            Geschmack auf höchstem Niveau.
          </p>
        </FadeUp>

        <div className="hidden w-[50%] xl:flex flex-col items-end gap-14">
          <FadeUp delay={0.33}>
            <p className="font-extralight text-lg text-right mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita eum, dolor fugiat totam ullam, ipsam vel cumque,
              accusamus nostrum voluptates?
            </p>
          </FadeUp>

          <FadeUp delay={0.33}>
            <div className="text-right">
              <p className="text-8xl">33</p>
              <p className="font-thin">Fleischsorten</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.33}>
            <div className="text-right">
              <p className="text-8xl">42</p>
              <p className="font-thin">Beilagen</p>
            </div>
          </FadeUp>
        </div>
      </div>
    </>
  );
}
