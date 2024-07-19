"use client";

import Link from "next/link";
import { useState } from "react";
import BURGER from "/public/images/burger.svg";
import Image from "next/image";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleClick = () => {
    setNavbarOpen((prev) => {
      if (prev) document.body.classList.remove("overflow-hidden", "md:overflow-auto");
      else document.body.classList.add("overflow-hidden", "md:overflow-auto");
      return !prev;
    });
  };

  return (
    <nav className="h-14 z-10 border-b border-yellow-600 backdrop-filter bg-gray-800/40 backdrop-blur-sm sticky top-0 w-full transition-all duration-200 md:flex md:flex-row">
      <div className="pl-4 w-full h-full">
        <div className="h-full flex items-center justify-between">
          <a href="/">
            <div className="flex items-end">
              <p className="h-full text-2xl lg:text-3xl text-slate-300 hover:text-slate-100 hover:underline underline-offset-8 decoration-1 decoration-yellow-500">
                MIKE PADIAL&nbsp;
              </p>
              <p className="text-lg hidden md:flex">. DEV</p>
            </div>
          </a>

          <button onClick={handleClick} className="pr-4 md:hidden hover:text-slate-100">
            <Image src={BURGER} alt="burgermenu" width="35" height="35" />
          </button>
        </div>
      </div>
      <ul
        className={`sticky left-0 text-3xl md:text-xl h-full space-y-8 pt-8 pl-8 transform transition duration-200 md:w-full md:h-full md:flex md:flex-row md:items-center md:justify-end md:relative md:min-h-0 md:space-y-0 md:space-x-6 md:p-0 md:pr-4 md:translate-x-0 ${
          navbarOpen ? "md:bg-transparent w-full h-screen bg-gray-800/80" : "hidden"
        } `}
      >
        <li className=" text-slate-300 hover:text-slate-100 hover:underline underline-offset-8 decoration-1 decoration-yellow-500">
          <Link href="#home">HOME</Link>
        </li>
        <li className="text-slate-300 hover:text-slate-100 hover:underline underline-offset-8 decoration-1 decoration-yellow-500">
          <Link href="#projects">PROJECTS</Link>
        </li>
        <li className="text-slate-300 hover:text-slate-100 hover:underline underline-offset-8 decoration-1 decoration-yellow-500">
          <Link href="#contact">CONTACT</Link>
        </li>
        <li className="text-slate-300 hover:text-slate-100 hover:underline underline-offset-8 decoration-1 decoration-yellow-500">
          <Link href="#about">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

// import { MouseEventHandler, SyntheticEvent, useCallback, useEffect } from "react"

// const [scrollFromTop, setScrollFromTop] = useState(false);

// const handleScroll = useCallback((event: Event) => {
//   const scrollPosition = (event.currentTarget as Window).scrollY;
//   setScrollFromTop(scrollPosition > 1);
// }, []);

// useEffect(() => {
//   window.onscroll = handleScroll;
//   return () => {
//     window.onscroll = null;
//   };
// }, [handleScroll]);
