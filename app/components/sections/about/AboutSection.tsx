import Image from "next/image";

export default function AboutSection() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <div className="gap-6 mt-10 md:mt-20 w-[85%] h-2/3 flex flex-col justify-center items-center text-center">
        <div className="outline-dotted rounded-full flex flex-col items-center justify-center">
          <Image src="/images/face.png" alt="face" width="300" height="300" />
        </div>
        <p className="text-2xl sm:text-2xl md:text-3xl">
          Full Stack Developer
          <br />
          UI Designer
        </p>
        <p className="text-lg sm:text-xl">
          UK born Kiwi(New Zealand) that lived in Australia for a while.
          <br />
          Now living as a Digital Nomad in South East Asia
        </p>
        <p className="text-2xl sm:text-2xl md:text-3xl">INTERESTS</p>
        <p className="text-lg sm:text-xl">
          Blockchain - Climbing - Music - Gym - Design - Skateboarding
        </p>
        <p className="w-[90%] pt-2 border-t border-dotted mt-4">
          Built with Next.Js, Typescript, Tailwind CSS and Framer motion
        </p>
      </div>
    </main>
  );
}
