"use client";

import { Lottie } from "lottie-react";
import Developing from "../../public/developer skills.json";

const Page = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-white">
      
      
      <nav className="flex items-center justify-between px-20 py-8">
        
        <h2 className="signature-font text-4xl">
          Om Shivhare
        </h2>

        <div className="flex items-center gap-8 text-xl">
          <span>✉</span>
          <span>◉</span>
          <span>in</span>
        </div>

      </nav>


      {/* Hero Section */}
      <section className="mx-auto flex min-h-[700px] max-w-[1500px] items-center px-20">
        
        {/* Left Side */}
        <div className="flex w-1/2 flex-col justify-center">
          
          <h1 className="text-5xl font-bold">
            Hey all, I'm Om Shivhare
          </h1>

          <p className="mt-8 max-w-[650px] text-2xl leading-relaxed text-gray-200">
            I'm a passionate full stack developer, and a great problem solver,
            having hands on experience of building web applications using
            React.js, Node.js, Next.js, Django, REST Framework, AWS, GCP and
            many more...
          </p>


          {/* Social Icons */}
          <div className="mt-12 flex gap-5">
            <button className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-xl">
              in
            </button>

            <button className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-xl">
              Git
            </button>

            <button className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-xl">
              ✉
            </button>
          </div>


          {/* Buttons */}
          <div className="mt-5 flex gap-5">
            
            <button className="rounded bg-white px-8 py-4 font-bold text-gray-800">
              📄 MY RESUME
            </button>

            <button className="rounded bg-white px-8 py-4 font-bold text-gray-800">
              📄 MY CODING PROFILES
            </button>

          </div>

        </div>


        {/* Right Side */}
        <div className="flex w-1/2 items-center justify-center">
          
          <Lottie
            src={Developing}
            loop
            autoplay
            className="h-[550px] w-[550px]"
          />

        </div>

      </section>
    </main>
  );
};

export default Page;