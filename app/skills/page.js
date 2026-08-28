"use client"
import React from "react";
import { Lottie } from "lottie-react";
import Developing from "../../public/coding in office.json";

const Page = () => {
  const skills = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
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
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "Google Cloud",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
  ];

  const highlights = [
    "Building responsive and modern web applications",
    "Developing RESTful APIs using Node.js and Express",
    "Working with databases like MongoDB and MySQL",
    "Experience with cloud platforms and deployment",
    "Strong problem solving and debugging skills",
  ];

  return (
    <section className="min-h-screen bg-white px-6 py-10 text-[#3f4a63] md:px-10 lg:px-20">

      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl font-semibold md:text-5xl">
          Skills
        </h2>

        <p className="mt-10 text-lg font-medium uppercase tracking-wide text-[#56647a] md:text-2xl">
          I am a full stack developer with great problem solving & debugging
          skills
        </p>
      </div>

      {/* Main Content */}
      <div className="mx-auto mt-16 grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* LEFT SIDE — LOTTIE */}
        <div className="flex items-center justify-center">
          <Lottie
            src={Developing}
            loop
            autoplay
            className="h-[350px] w-full max-w-[600px] md:h-[450px] lg:h-[520px]"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center lg:items-start">

          {/* Title */}
          <h3 className="mb-10 text-3xl font-medium md:text-4xl">
            Full Stack Development
          </h3>

          {/* Skills Icons */}
          <div className="grid grid-cols-5 gap-4 md:gap-5">

            {skills.map((skill) => (
              <div
                key={skill.name}
                title={skill.name}
                className="
                  group flex h-16 w-16 items-center justify-center
                  rounded-full border border-gray-100 bg-white
                  shadow-[0_4px_15px_rgba(0,0,0,0.08)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_8px_25px_rgba(0,0,0,0.14)]
                  md:h-20 md:w-20
                "
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110 md:h-10 md:w-10"
                />
              </div>
            ))}

          </div>

          {/* Highlights */}
          <div className="mt-10 w-full space-y-5">

            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-base text-[#56647a] md:text-xl"
              >
                <span className="text-xl text-yellow-500 md:text-2xl">
                  ⚡
                </span>

                <p className="leading-relaxed">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>

    </section>
  );
};

export default Page;
