import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import { SlideUp } from "./SlideUp";

const projects = [
  {
    name: "Strengthtrainer.app",
    description:
      "Strengthtrainer.app is a web app that connects strength coaches and their clients that allows for tracking long term progress",
    image: "/placeholder-square.jpeg",
    github: "https://github.com/joshgarza/MVP",
    link: "https://www.strengthtrainer.app/",
  },
  {
    name: "Strengthtrainer.app",
    description:
      "Strengthtrainer.app is a web app that connects strength coaches and their clients that allows for tracking long term progress",
    image: "/placeholder-square.jpeg",
    github: "https://github.com/joshgarza/MVP",
    link: "https://www.strengthtrainer.app/",
  },
  {
    name: "Strengthtrainer.app",
    description:
      "Strengthtrainer.app is a web app that connects strength coaches and their clients that allows for tracking long term progress",
    image: "/placeholder-square.jpeg",
    github: "https://github.com/joshgarza/MVP",
    link: "https://www.strengthtrainer.app/",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="mt-8 md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-12 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};
