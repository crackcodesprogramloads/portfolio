"use client";

import BeanBag from "../../../../public/images/lottie/guy-on-bean-bag-light.lottie";
import GreenMouseClick from "../../../../public/images/lottie/Green-mouse-click-light.lottie";
import { m, LazyMotion, domAnimation } from "framer-motion";
import dynamic from "next/dynamic";

export default function HeroSection() {
  const LottiePlayer = dynamic(() => import("@/app/components/LottiePlayer"), {
    ssr: false,
  });

  const ClickStyle = { width: 100, height: 100 };

  const textVariant = {
    hidden: { opacity: 0.01 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <main className="flex flex-col md:flex-row items-center justify-between w-full h-full">
      <LazyMotion features={domAnimation}>
        <div className="mt-24 sm:mt-20 md:mt-0 md:relative flex items-center justify-center w-[95%] md:w-3/4 h-full">
          <div className="md:absolute flex flex-col items-center justify-around w-full h-2/3 pt-14 sm:left-24 top-10">
            <m.div variants={textVariant} initial={"hidden"} animate={"show"} className="flex flex-col gap-4">
              <m.p
                variants={textVariant}
                className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl underline underline-offset-2 decoration-1 decoration-yellow-500"
              >
                Crafting Code
              </m.p>
              <m.p
                variants={textVariant}
                className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl underline underline-offset-2 decoration-1 decoration-yellow-500"
              >
                Building Blueprints
              </m.p>
              <m.p
                variants={textVariant}
                className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl underline underline-offset-2 decoration-1 decoration-yellow-500"
              >
                Launching Projects
              </m.p>
              <m.div variants={textVariant} className="mt-8 w-64 h-12 sm:w-64 lg:w-72 rounded-md relative bg-yellow-600 mr-14">
                <a href="#contact">
                  <button className="w-64 h-12 sm:w-64 lg:w-72 text-xl sm:text-lg lg:text-xl absolute rounded-md bg-sky-950 border border-yellow-600 text-slate-300 hover:text-slate-100 top-[3px] left-[2px] active:top-0 active:left-0">
                    Need code? Let&apos;s Talk!
                    <div className="absolute top-0 right-10">
                      <LottiePlayer animationData={GreenMouseClick} style={ClickStyle} />
                    </div>
                  </button>
                </a>
              </m.div>
            </m.div>
          </div>
        </div>
        <m.div
          initial={{ opacity: 0.01, x: -100, y: -100, scale: 0 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          transition={{
            delay: 0.9,
            type: "spring",
            stiffness: 50,
          }}
          className="flex w-full h-full md:mt-60 lg:mt-40 md:mr-10 lg:mr-20"
        >
          <LottiePlayer animationData={BeanBag} />
        </m.div>
      </LazyMotion>
    </main>
  );
}
