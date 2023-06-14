"use client";

import { motion } from "framer-motion";
import ProjectCardInfo from "./ProjectCardInfo";
import dynamic from "next/dynamic";
import Skillset from "./Skillset";

const ProjectCard = dynamic(() => import("./ProjectCard"));

const ProjectSection = () => {
  return (
    <main className="border border-purple-500 pt-4 px-20 w-full h-full flex flex-col items-center">
      <Skillset />
      <div className="mt-4 py-20 gap-20 border-green-500 border w-full h-full flex flex-col items-center">
        {ProjectCardInfo.map((item: any) => (
          <ProjectCard
            key={item.title}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            imageWidth={item.imageWidth}
            imageHeight={item.imageHeight}
            demoUrl={item.demoUrl}
            githubUrl={item.imageUrl}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </main>
  );
};

export default ProjectSection;
