"use client";

import dynamic from "next/dynamic";
import localFont from "next/font/local";
// import Lottie from "lottie-light-react";

const Card = dynamic(() => import("@/app/components/Card"));

const myFont = localFont({
  src: "../../../../public/fonts/DrukWide.ttf",
  display: "swap",
});

export default function ContactSection() {
  const ClickStyle = { width: 400, height: 400 };
  return (
    <main className="flex flex-col items-center w-full h-full">
      {/* <h1 className={`${myFont.className} text-4xl text-white`}>CONTACT</h1> */}

      <div className="flex items-center justify-center w-full h-full border border-blue-500">
        <div className=" border-red-500 border">
          {/* <Lottie animationData={GreenArrow} style={ClickStyle} /> */}
        </div>
        <Card />
      </div>
    </main>
  );
}
