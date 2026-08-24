"use client";

import React from "react";
import {Lottie} from "lottie-react";
import Developing from "../../public/developer skills.json";

const Page = () => {
  const skills = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      
      <h2 className="pt-10 text-3xl font-bold text-center">
        Skills
      </h2>

      <div className="mx-auto flex min-h-[600px] max-w-[1300px] items-center justify-center gap-16 px-10">

        {/* Lottie */}
        <div className="w-1/2">
          <Lottie
            src={Developing}
            loop={true}
            autoplay={true}
            className="h-[500px] w-[500px]"
          />
        </div>

        {/* Skills */}
        <div className="grid grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 hover:scale-110"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-10 w-10"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Page;