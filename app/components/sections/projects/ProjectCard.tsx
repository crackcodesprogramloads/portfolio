"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  demoUrl: string;
  githubUrl?: string;
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
  return (
    <div className="w-[80%] sm:w-[70%] md:w-[50%] lg:w-[85%] xl:w-[67%] flex flex-col lg:flex-row border border-yellow-700 rounded-lg">
      <Image
        priority
        className="flex rounded-t-lg lg:rounded-l-lg"
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
      <div className="p-6 flex flex-col justify-center bg-slate-800 rounded-b-lg lg:rounded-r-lg">
        <div className="w-[95%] mb-4 flex flex-col md:flex-row items-center justify-between">
          <Link href={demoUrl}>
            <h2 className="text-3xl mb-2 md:mb-0">{title}</h2>
          </Link>
          <div className="gap-4 flex flex-row items-center">
            <Link
              href={demoUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="w-16 h-8 rounded-md relative bg-yellow-600"
            >
              <button className="w-16 h-8 text-xl absolute rounded-md bg-sky-950 border border-yellow-600 text-slate-300 hover:text-slate-100 top-[2px] left-[1px] active:top-0 active:left-0">
                Site
              </button>
            </Link>
            {githubUrl ? (
              <Link
                href={githubUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="w-24 h-8 rounded-md relative bg-yellow-600"
              >
                <button className="w-24 h-8 text-xl absolute rounded-md bg-sky-950 border border-yellow-600 text-slate-300 hover:text-slate-100 top-[2px] left-[1px] active:top-0 active:left-0">
                  Source
                </button>
              </Link>
            ) : null}
          </div>
        </div>
        <p className="flex text-xl">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
