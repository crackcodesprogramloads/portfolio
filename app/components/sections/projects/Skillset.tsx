"use client";

import VSCODE from "/public/images/skills/vscode.svg";
import HTML from "/public/images/skills/html.svg";
import CSS from "/public/images/skills/css.svg";
import JS from "/public/images/skills/js.svg";
import REACT from "/public/images/skills/react.svg";
import MATERIAL from "/public/images/skills/materialui.svg";
import TAILWIND from "/public/images/skills/tailwind.svg";
import NODE from "/public/images/skills/nodejs.svg";
import EXPRESS from "/public/images/skills/express.svg";
import NEXT from "/public/images/skills/next.svg";
import FIREBASE from "/public/images/skills/firebase.svg";
import MONGO from "/public/images/skills/mongo.svg";
import SOLIDITY from "/public/images/skills/solidity.svg";
import THREE from "/public/images/skills/threejs.svg";
import PRISMA from "/public/images/skills/prisma.svg";
import TS from "/public/images/skills/typescript.svg";
import VITE from "/public/images/skills/vite.svg";

import Image, { StaticImageData } from "next/image";

const iconList = [
  VSCODE,
  HTML,
  CSS,
  JS,
  REACT,
  MATERIAL,
  TAILWIND,
  NODE,
  EXPRESS,
  NEXT,
  FIREBASE,
  MONGO,
  SOLIDITY,
  THREE,
  PRISMA,
  TS,
  VITE,
];
const getIconAlt = (icon: { src: string }) => {
  const { src } = icon;

  const regex = /(?<=media\/)(.*?)(?=\.)/;
  const matches = src.match(regex);

  const iconName = matches ? matches[0] : "skill icon";

  return iconName;
};

const IconsList = ({ list = iconList }: { list?: StaticImageData[] }) => {
  if (!list.length) return null;

  return list.map((icon) => {
    const iconName = getIconAlt(icon);
    return <Image src={icon} alt={iconName} width="45" height="45" />;
  });
};

const AnimatedIconsSlide = () => {
  const animateClassnames =
    "animateLogos inline-block [&>img]:inline-block [&>img]:mx-1";

  return (
    <>
      <div className={animateClassnames}>
        <IconsList />
      </div>
      <div className={animateClassnames}>
        <IconsList />
      </div>
      <div className={animateClassnames}>
        <IconsList />
      </div>
    </>
  );
};

const Skillset = () => {
  return (
    <div className="Logos relative overflow-hidden rounded-xl whitespace-nowrap">
      <AnimatedIconsSlide />
    </div>
  );
};

export default Skillset;
