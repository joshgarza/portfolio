import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-20 bg-neutral-200 border-0"></hr>
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 space-y-2 md:flex-row md:justify-between md:space-y-0">
        <div className="text-neutral-500 dark:text-neutral-100">
          © 2023 Josh Garza
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a
            href="https://github.com/joshgarza"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/joshbgarza/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
