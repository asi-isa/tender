"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

import { NavItems } from "./nav-items";
import FadeUp from "../animation/FadeUp";

export default function MobileNav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="container relative flex justify-between p-4 md:hidden">
      <FadeUp delay={0.33}>
        <Link href="/" className="text-xl">
          tender
        </Link>
      </FadeUp>

      <FadeUp delay={0.33}>
        <button onClick={() => setShowMenu(true)}>
          <RxHamburgerMenu size={21} />
        </button>
      </FadeUp>

      <motion.ul
        className="fixed top-0 left-0 right-0 h-full w-full bg-black flex flex-col justify-evenly items-center"
        initial={false}
        animate={{ y: showMenu ? "0%" : "-100%" }}
        transition={{ duration: 0.45 }}
      >
        {NavItems.map(({ title, href }) => {
          return (
            <li key={title}>
              <Link href={href} className="font-thin text-2xl">
                {title}
              </Link>
            </li>
          );
        })}
        <li>
          <button onClick={() => setShowMenu(false)}>
            <AiOutlineClose size={28} />
          </button>
        </li>
      </motion.ul>
    </nav>
  );
}
