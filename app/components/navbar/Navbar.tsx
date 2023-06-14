"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";
import { MouseEventHandler, SyntheticEvent, useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrollFromTop, setScrollFromTop] = useState(false);

  const pathname = usePathname();

  const handleScroll = useCallback((event: Event) => {
    const scrollPosition = (event.currentTarget as Window).scrollY;
    setScrollFromTop(scrollPosition > 1);
  }, []);

  useEffect(() => {
    window.onscroll = handleScroll;
    return () => {
      window.onscroll = null;
    };
  }, [handleScroll]);

  const handleClick = () => {
    setNavbarOpen((prev) => {
      if (prev)
        document.body.classList.remove("overflow-hidden", "md:overflow-auto");
      else document.body.classList.add("overflow-hidden", "md:overflow-auto");
      return !prev;
    });
  };
  // bg-gray-800/40
  // backdrop-filter backdrop-blur-sm
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

          <button
            onClick={handleClick}
            className="pr-4 md:hidden hover:text-slate-100"
          >
            <RxHamburgerMenu style={{ height: "35px", width: "35px" }} />
          </button>
        </div>
      </div>
      <ul
        className={`sticky left-0 text-3xl md:text-xl h-full space-y-8 pt-8 pl-8 transform transition duration-200 md:w-full md:h-full md:flex md:flex-row md:items-center md:justify-end md:relative md:min-h-0 md:space-y-0 md:space-x-6 md:p-0 md:pr-4 md:translate-x-0 ${
          navbarOpen
            ? "translate-x-0 md:bg-transparent w-full h-screen bg-gray-800/80"
            : "translate-x-full pl-12"
        } `}
      >
        <li className=" text-slate-300 hover:text-slate-100 hover:underline underline-offset-8 decoration-1 decoration-yellow-500">
          <a href="#home">HOME</a>
        </li>
        <li className="text-slate-300 hover:text-slate-100 hover:underline underline-offset-8 decoration-1 decoration-yellow-500">
          <a href="#projects">PROJECTS</a>
        </li>
        <li className="text-slate-300 hover:text-slate-100 hover:underline underline-offset-8 decoration-1 decoration-yellow-500">
          <a href="#contact">CONTACT</a>
        </li>
        <li className="text-slate-300 hover:text-slate-100 hover:underline underline-offset-8 decoration-1 decoration-yellow-500">
          <a href="#about">ABOUT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
