"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
import { AiOutlineSend } from "react-icons/ai";
import { LoadingSpinner } from "./LoadingSpinner";

export const HeroSection = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    const data = {
      query: input,
    };
    console.log("submitting");
    setLoading(true);
    axios
      .post("https://askai-f9ii.onrender.com/ask", data)
      .then((res) => {
        setResponse(res.data.response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setResponse("Error, bad request.");
        setLoading(false);
      });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const autoGrow = (element: HTMLTextAreaElement) => {
    element.style.height = "auto";
    element.style.height = element.scrollHeight + "px";
  };

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
        <div className="md:w-1/2 md:mt-2">
          <Image
            className="rounded-full shadow-2xl"
            src="/headshot.png"
            alt="josh garza profile picture"
            width={300}
            height={300}
          />
        </div>
        <div className="md:w-3/5 md:mt-2">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            {"Hi, I'm Josh!"}
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            {"I'm a "}
            <span className="font-semibold text-teal-600">
              {"Software Engineer "}
            </span>
            {"based in the San Francisco Bay Area in California."}
          </p>
          <div className="space-y-4">
            <div className="space-y-4">
              <p className="font-semibold">
                Want to know more about me? Ask JoshGPT anything {":)"}
              </p>
              <div className="flex flex-row space-x-4">
                <form
                  className="flex flex-row items-center w-full space-x-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <textarea
                    rows={1}
                    className="border shadow flex-grow resize-none overflow-hidden px-2"
                    onChange={(e) => {
                      handleChange(e);
                      autoGrow(e.target);
                    }}
                    onKeyDown={(e) => handleKeyDown(e)}
                  ></textarea>

                  <button onClick={handleSubmit}>
                    {<AiOutlineSend size={30} />}
                  </button>
                </form>
              </div>
            </div>
            <div className="">
              <span>{loading ? <LoadingSpinner /> : response}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce cursor-pointer" />
        </Link>
      </div>
    </section>
  );
};
