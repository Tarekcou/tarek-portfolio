"use client";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";
import { Download, Facebook, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BaseInfo } from "@/Data/data";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Ensure the PDF is in the public folder
    link.download = "My_Resume.pdf";
    link.click();
  };
  return (
    <section className="bg-black">
      <div className="flex lg:flex-row flex-col justify-between items-center gap-5 mx-auto my-5 py-10 w-11/12 lg:w-10/12 text-white">
        {/* Left Content */}
        <div className="flex-1 gap-2">
          <h1 className="mb-2 font-semibold text-2xl lg:text-3xl">
            I am <br></br>
            <span className="text-3xl md:text-5xl">{BaseInfo.name}</span>
          </h1>
          <h2 className="bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 font-bold text-transparent text-xl lg:text-3xl">
            {BaseInfo.position}
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            {BaseInfo.description}
          </p>
          <div className="flex gap-4 my-5">
            <Image
              className="w-10 sm:w-8 md:w-10 h-10 sm:h-8 md:h-10"
              width={30}
              height={30}
              alt="react"
              src="/images/react.svg"
            />
            <Image
              className="bg-white w-10 sm:w-8 md:w-10 h-10 sm:h-8 md:h-10"
              width={40}
              height={40}
              alt="react"
              src={"/images/nextjs-icon.svg"}
            ></Image>
            <Image
              width={40}
              height={40}
              alt="react"
              className="w-10 sm:w-8 md:w-10 h-10 sm:h-8 md:h-10"
              src={"/images/mongo.svg"}
            ></Image>
            <Image
              width={40}
              height={40}
              alt="react"
              className="w-10 sm:w-8 md:w-10 h-10 sm:h-8 md:h-10"
              src={"/images/node.svg"}
            ></Image>
          </div>
          <Button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 mt-6 px-6 py-3 rounded-xl font-semibold text-white"
          >
            Download CV <Download size={20} />
          </Button>
          {/* Locaton */}

          <div className="my-4">
            <h1 className="flex items-center gap-2 text-base">
              <FaLocationDot /> Chattogram, Bangladesh
            </h1>
          </div>
          {/* Social Icon */}

          <div className="flex gap-5 mt-5 text-gray-300">
            <a
              href="https://github.com/Tarekcou"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="hover:text-yellow-500 text-xl cursor-pointer" />
            </a>
            <a
              href="https://wa.me/01818424256"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:text-green-500 text-2xl cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/shoriful_tarek/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="hover:text-pink-500 text-xl cursor-pointer" />
            </a>

            <a
              href="https://www.facebook.com/Tarekict/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="hover:text-blue-600 text-xl cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="m-12 md:m-0 border-2 border-blue-700 rounded-3xl overflow-hidden">
          <Image
            src={BaseInfo.profilePic} // Replace with your image path
            alt="Profile Picture"
            width={350}
            height={350}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
