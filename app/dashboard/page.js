"use client";

import { Lottie } from "lottie-react";
import Developing from "../../public/final1.json";

const Page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1F1218] via-[#4A2635] to-[#8B3A50] text-white">
      
      
      <nav className="flex items-center justify-between px-20 py-8">
        
        <h2 className=" px-26.5 signature-font wrap-no-wrap text-5xl">
          Om Shivhare
        </h2>

        <div className="flex items-center gap-8 text-xl">
          <span>✉</span>
          <span>◉</span>
          <span>in</span>
        </div>

      </nav>

  
      {/* Hero Section */}
      <section className="h-150 m-5 mx-auto gap-5 flex min-h-[400px] max-w-[1300px] items-center px-20">
        
        {/* Left Side */}
        <div className="flex w-1/2 flex-col justify-center">
          
          <h1 className="text-4xl font-bold">
            Hey there, I'm Om Shivhare
          </h1>

          <p className="mt-8 max-w-[650px] text-xl leading-relaxed text-gray-200">
            I'm a passionate full stack developer, and a great problem solver,
            having hands on experience of building web applications using
            React.js, Node.js, Next.js, REST Framework, AWS, GCP and
            many more...
          </p>


          
          <div className="mt-12 flex gap-5">
            <button className="flex h-14 cursor-pointer w-14 items-center justify-center rounded-full bg-sky-500 text-xl">
              in
            </button>

            <button className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gray-900 text-xl">
              Git
            </button>

            <button className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-red-500 text-xl">
              ✉
            </button>
          </div>


          {/* Buttons */}
          <div className="mt-5 mb-10 flex gap-5">
            
            <button className="rounded bg-white px-8 py-4 font-bold text-gray-800">
              📄 RESUME
            </button>

            <button className="rounded bg-white px-8 py-4 font-bold text-gray-800">
              📄 CODING PROFILES
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

        <div className=''> </div>

      </section>
    </main>
  );
};

export default Page;