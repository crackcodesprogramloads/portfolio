import ProjectCard from "./ProjectCard";
import ProjectCardInfo from "./ProjectCardInfo";

const ProjectSection = () => {
  return (
    <main className="mt-0 sm:mt-10 w-full flex flex-col items-center">
      <div className="gap-16 mt-10 sm:mt-14 w-[95%] h-1/2 flex flex-col justify-center items-center">
        <p className="text-4xl">PROJECTS</p>
        {ProjectCardInfo.map((item: any) => (
          <ProjectCard
            key={item.title}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            imageWidth={item.imageWidth}
            imageHeight={item.imageHeight}
            demoUrl={item.demoUrl}
            githubUrl={item.githubUrl}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </main>
  );
};

export default ProjectSection;
