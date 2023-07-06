import VSCODE from "/public/images/skillsets/vscode.svg";
import HTML from "/public/images/skillsets/html.svg";
import CSS from "/public/images/skillsets/css.svg";
import JS from "/public/images/skillsets/js.svg";
import REACT from "/public/images/skillsets/react.svg";
import MATERIAL from "/public/images/skillsets/materialui.svg";
import TAILWIND from "/public/images/skillsets/tailwind.svg";
import NODE from "/public/images/skillsets/nodejs.svg";
import EXPRESS from "/public/images/skillsets/express.svg";
import NEXT from "/public/images/skillsets/next.svg";
import FIREBASE from "/public/images/skillsets/firebase.svg";
import MONGO from "/public/images/skillsets/mongo.svg";
import SOLIDITY from "/public/images/skillsets/solidity.svg";
import THREE from "/public/images/skillsets/threejs.svg";
import PRISMA from "/public/images/skillsets/prisma.svg";
import TS from "/public/images/skillsets/typescript.svg";
import VITE from "/public/images/skillsets/vite.svg";
import FIGMA from "/public/images/skillsets/figma.svg";
import ASTRO from "/public/images/skillsets/astro.svg";
import SUPABASE from "/public/images/skillsets/supabase.svg";

import Image, { StaticImageData } from "next/image";

const iconList = [
  VSCODE,
  HTML,
  CSS,
  JS,
  TS,
  REACT,
  NEXT,
  NODE,
  EXPRESS,
  FIGMA,
  MATERIAL,
  TAILWIND,
  MONGO,
  PRISMA,
  FIREBASE,
  SUPABASE,
  SOLIDITY,
  THREE,
  ASTRO,
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

  return list.map((icon, index) => {
    const iconName = getIconAlt(icon);
    return (
      <Image
        key={index}
        src={icon}
        alt={iconName}
        width={1}
        height={1}
        className="flex-grow"
      />
    );
  });
};

const Skillset = () => {
  return (
    <div className="mt-0 sm:mt-24 md:mt-0 Logos relative w-full h-8 md:h-10 lg:h-16 overflow-x-hidden">
      <div
        className="absolute top-0 left-0 primary flex flex-row gap-1 md:gap-2 lg:gap-5"
        style={{ width: "inherit" }}
      >
        <IconsList />
      </div>
      <div
        className="absolute top-0 left-0 secondary flex flex-row gap-1 md:gap-2 lg:gap-5"
        style={{ width: "inherit" }}
      >
        <IconsList />
      </div>
    </div>
  );
};

export default Skillset;
