import React from "react";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Javascript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Node" },
  { skill: "Express" },
  { skill: "Postgres" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Cloudflare" },
  { skill: "AWS: Lambda" },
  { skill: "AWS: S3" },
  { skill: "AWS: RDS" },
  { skill: "AWS: EC2" },
  { skill: "Vercel" },
];

export const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              {" "}
              Hi, my name is Josh and I am a{" "}
              <span className="font-bold">{"highly adaptable"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" growth-oriented"}</span> software
              engineer based in the San Francisco Bay Area.
            </p>
            <br />
            <p>
              I graduated from Hack Reactor in December 2022 and have a
              background in music and fitness, having studied classical guitar
              at the San Francisco Conservatory of Music and owned a successful
              gym in San Francisco.
            </p>
            <br />
            <p>
              My diverse interests have led me to excel in various fields. From
              playing classical guitar, managing a gym, powerlifting, to
              building full-stack web applications, I am always eager to explore
              new experiences and continually learn and grow.
            </p>
            <br />
            <p>
              I believe in the power of{" "}
              <span className="font-bold text-teal-500">
                continuous improvement
              </span>{" "}
              {
                "and strive to develop my skills and knowledge in all aspects of my life. With a strong passion for technology and a drive to push the limits of what's possible, I am excited about the future of my career and am always open to new opportunities and challenges."
              }
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 my-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
