"use client";

import React from "react";
import { Check, Users, Rocket, BadgeCheck, LineChart } from "lucide-react";
import { SquareCheck } from "lucide-react";
import { aboutInfo } from "@/Data/data";

const AboutMe = () => {
  return (
    <section className="space-y-4 bg-black mx-auto px-6 md:py-10 text-white">
      <div className="flex items-center my-5 w-full">
        <h2 className="inline-block bg-blue-800 mx-auto mb-4 p-3 font-bold text- text-white text-3xl md:text-4xl -rotate-3 transform">
          About Me
        </h2>
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center gap-10 mx-auto w-11/12 md:w-10/12">
        <div className="flex-1">
          <h1 className="font-extrabold text-purple-400 text-3xl md:text-4xl leading-tight">
            {aboutInfo.title}
          </h1>
          <p className="mt-4 text-gray-400 text-base">
            {aboutInfo.description}
          </p>
          <div className="flex md:flex-row flex-col gap-8 mt-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <SquareCheck className="text-blue-500" />
                <span className="font-semibold text-xl">
                  Frontend Development
                </span>
              </div>
              <div className="flex items-center gap-2">
                <SquareCheck className="text-red-500" />
                <span className="font-semibold text-xl">
                  Backend Development
                </span>
              </div>
              <div className="flex items-center gap-2">
                <SquareCheck className="text-green-500" />
                <span className="font-semibold text-xl">
                  Full Stack Development
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="gap-6 grid grid-cols-2 text-gray-300 text-center">
            <div>
              <Users className="mx-auto text-yellow-400" size={60} />
              <h3 className="font-bold text-xl">{aboutInfo.client}</h3>
              <p className="text-xs">Satisfied Customers</p>
            </div>

            <div>
              <LineChart className="mx-auto text-pink-400" size={60} />
              <h3 className="font-bold text-xl">{aboutInfo.experience}</h3>
              <p className="text-xs">Years Experience</p>
            </div>

            <div>
              <BadgeCheck className="mx-auto text-green-400" size={60} />
              <h3 className="font-bold text-xl">{aboutInfo.project}</h3>
              <p className="text-xs">Completed Projects</p>
            </div>

            <div>
              <Rocket className="mx-auto text-red-500" size={60} />
              <h3 className="font-bold text-xl">{aboutInfo.website}</h3>
              <p className="text-xs">Websites Launched</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
