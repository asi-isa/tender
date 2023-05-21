"use client";

import Link from "next/link";

import { NavItems } from "./nav-items";
import FadeUp from "../animation/FadeUp";
export default function DesktopNav() {
  return (
    <FadeUp delay={0.33}>
      <nav className="container relative justify-between p-4 hidden md:flex">
        <Link href="/" className="text-2xl">
          tender
        </Link>

        <ul className="flex gap-4">
          {NavItems.map(({ title, href }, index) => {
            const isLastElement = index === NavItems.length - 1;

            return (
              <li
                key={title}
                className={`${
                  isLastElement && "bg-white text-black"
                } px-4 py-1 rounded-3xl`}
              >
                <Link href={href} className="font-extralight text-xl">
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </FadeUp>
  );
}
