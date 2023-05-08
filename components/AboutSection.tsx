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
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in the San Francisco Bay Area.
            </p>
            <br />
            <p>I graduated from Hack Reactor in December 2022.</p>
            <br />
            <p>
              I have a wide range of interests that keep me active. From
              cooking, dancing salsa, powerlifting, to building my next project,
              I am always looking for novel experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              {
                "and that's what I strive to do. I have a passion for technology and a persistent desire to always push the limits of what is possible. I am excited to see where my career takes me and am always open to new opportunities."
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
