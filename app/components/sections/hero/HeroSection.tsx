"use client";

import BeanBag from "../../../../public/images/lottie/guy-on-bean-bag.json";
import GreenMouseClick from "../../../../public/images/lottie/Green-mouse-click.json";
import Scroll from "../../../../public/images/lottie/scroll.json";

import { motion } from "framer-motion";
// import LottiePlayer from "../../LottiePlayer";
import dynamic from "next/dynamic";

const LottiePlayer = dynamic(() => import("@/app/components/LottiePlayer"));

export default function HeroSection() {
  const ClickStyle = { width: 100, height: 100 };
  const ScrollStyle = { width: 800, height: 800 };

  const textVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <main className="border border-red-500 flex items-center justify-between w-full h-full pt-14">
      <div className="relative flex items-center justify-center w-2/3 h-full">
        <div className="absolute flex flex-col items-center justify-around w-full h-2/3 pt-14 left-24 top-10">
          <motion.div
            variants={textVariant}
            initial={"hidden"}
            animate={"show"}
            className="flex flex-col gap-4"
          >
            <motion.p
              variants={textVariant}
              className="text-4xl underline underline-offset-2 decoration-1 decoration-yellow-500"
            >
              Crafting Code
            </motion.p>
            <motion.p
              variants={textVariant}
              className="text-4xl underline underline-offset-2 decoration-1 decoration-yellow-500"
            >
              Building Blueprints
            </motion.p>
            <motion.p
              variants={textVariant}
              className="text-4xl underline underline-offset-2 decoration-1 decoration-yellow-500"
            >
              Greater Future
            </motion.p>
            <motion.div
              variants={textVariant}
              className="mt-8  w-72 h-12 rounded-md relative bg-yellow-600 mr-14"
            >
              <a href="#contact">
                <button className="w-72 h-12 text-xl absolute rounded-md bg-sky-950 border border-yellow-600 text-slate-300 hover:text-slate-100 top-[3px] left-[2px] active:top-0 active:left-0">
                  Need code? Let's Talk!
                  <div className="absolute top-0 right-10">
                    <LottiePlayer
                      animationData={GreenMouseClick}
                      style={ClickStyle}
                    />
                  </div>
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -100, y: -100, scale: 0 }}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        transition={{
          delay: 1.2,
          type: "spring",
          stiffness: 50,
        }}
        className="flex w-full h-full mr-20"
      >
        <LottiePlayer animationData={BeanBag} />
      </motion.div>
    </main>
  );
}
