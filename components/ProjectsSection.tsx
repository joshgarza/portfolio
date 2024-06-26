import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import { SlideUp } from "./SlideUp";

const projects = [
  {
    name: "Robert Half",
    description:
      "Robert Half connects employers & job seekers to staff positions in finance, law, technology & more. Contact a recruiter today to get started.",
    image: "/rh-homepage.png",
    width: 1000,
    height: 1000,
    link: "https://www.roberthalf.com/us/en",
  },
  {
    name: "Big Snacks Little Shop",
    description:
      "Natalie Massarany is a San Francisco based textural artist and sculptor who creates rich, three-dimensional plaster sculptures.",
    image: "/bslswebsite.png",
    width: 1000,
    height: 1000,
    link: "https://www.bigsnackslittleshop.com/",
  },
  {
    name: "Embodied Guitarist",
    description:
      "A new, innovative approach to guitar playing that enhances your technique, prevents injuries, and promotes effortless music-making.",
    image: "/embodiedguitarist.png",
    width: 1000,
    height: 1000,
    link: "https://www.embodiedguitarist.com/",
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
                  <div className="flex items-center justify-center mt-8 md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={project.width}
                        height={project.height}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-12 md:w-1/2">
                    <h1 className="mx-2 text-4xl font-semibold mb-6 md:mx-0">
                      {project.name}
                    </h1>
                    <p className="mx-2 text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400 md:mx-0">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4 mx-2 md:mx-0">
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
