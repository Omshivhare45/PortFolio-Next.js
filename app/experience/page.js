'use client';
import React from "react";
import Image from "next/image";
import gdg from "../../public/gdg.png";

const Page = () => {
  return (
    <div className='min-h-screen'>
      <div>
        <h2 className=" flex items-center justify-center pt-10 text-3xl font-bold text-center">Experience</h2>
        
      </div>
      <div className="mx-auto max-w-4xl">
          <Image src={gdg} alt='GDG Logo' width={100} height={100} className="mx-auto mt-5 object-contain" />
            <h3 className="text-center text-lg font-bold">Google Developer Group Bhopal</h3>
        </div>
    </div>
  );
};

export default Page;