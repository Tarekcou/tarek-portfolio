"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import hero from "@/public/images/hero.png";
import { Button } from "@/components/ui/button";
import { BaseInfo } from "@/Data/data";
const Hero = () => {
  return (
    <section className="flex lg:flex-row flex-col justify-between items-center gap-5 mx-auto py-10 w-11/12 lg:w-10/12 text-white">
      {/* Left Content */}
      <div className="max-w-xl">
        <h1 className="mb-2 font-semibold text-2xl lg:text-5xl">
          I am <br></br>
          {BaseInfo.name}
        </h1>
        <h2 className="bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 font-bold text-transparent text-4xl lg:text-6xl">
          {BaseInfo.position}
        </h2>
        <p className="mt-4 text-gray-400 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro
          numquam ad, vero consequuntur aperiam cumque voluptatum pariatur
          veniam? Qui facilis est ipsam odio cum!
        </p>
        <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 mt-6 px-6 py-3 rounded-xl font-semibold text-white">
          Download CV <Download size={20} />
        </Button>
      </div>

      {/* Right Image */}
      <div className="m-12 md:m-0 border-2 border-blue-700 rounded-3xl overflow-hidden">
        <Image
          src={hero} // Replace with your image path
          alt="Profile Picture"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
