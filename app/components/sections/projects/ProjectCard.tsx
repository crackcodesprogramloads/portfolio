"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  demoUrl: string;
  githubUrl: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  demoUrl,
  githubUrl,
  title,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-3/4 flex flex-row border border-red-600 text-slate-300">
      <div>TEXT</div>
      <Image
        className="rounded-md"
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
    </div>
  );
};

export default ProjectCard;

{
  /* <div className="flex flex-row rounded-xl bg-gray-900 hover:shadow-md hover:scale-105 transition duration-500 hover:shadow-slate-400">
      <a href={demoUrl}>
        <Image
          className="rounded-l-xl"
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
        />
      </a>
      <div className="flex justify-center p-4">
        <div className="flex flex-col justify-center">
          <a href={demoUrl}>
            <h5 className="w-full mb-2 text-2xl font-bold tracking-tight text-slate-300">
              {title}
            </h5>
          </a>
          <p className="w-full mb-3 font-normal text-gray-400">{description}</p>
          <div className="flex flex-row justify-between">
            <a
              href={demoUrl}
              className="flex px-3 py-2 text-sm font-medium items-center text-center text-slate-300 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Live Demo
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href={githubUrl}
              className="flex px-3 py-2 text-sm font-medium items-center text-center text-slate-300 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Github
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div> */
}
