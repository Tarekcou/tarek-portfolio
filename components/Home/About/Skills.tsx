import React from "react";
import { Users, Rocket, BadgeCheck, LineChart } from "lucide-react";
import { SquareCheck } from "lucide-react";
import { aboutInfo } from "@/Data/data";
const Skills = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-col justify-center items-center gap-10">
        <div className="flex-1">
          <h1 className="font-extrabold text-purple-400 text-xl md:text-2xl leading-tight">
            {aboutInfo.title}
          </h1>
          <p className="mt-4 text-gray-400 text-base">
            {aboutInfo.description}
          </p>
          <div className="flex md:flex-row flex-col gap-8 mt-5">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <SquareCheck className="w-4 text-blue-500" />
                <span className="font-semibold text-xs">
                  Frontend Development
                </span>
              </div>
              <div className="flex items-center gap-2">
                <SquareCheck className="w-4 text-red-500" />
                <span className="font-semibold text-xs">
                  Backend Development
                </span>
              </div>
              <div className="flex items-center gap-2">
                <SquareCheck className="w-4 text-green-500 text-xs" />
                <span className="font-semibold text-xs">
                  Full Stack Development
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="flex gap-2 text-gray-300 text-center">
            <div className="space-y-1">
              <Users className="mx-auto text-yellow-400" size={30} />
              <h3 className="font-bold text-xl">{aboutInfo.client}</h3>
              <p className="text-xs">Satisfied Customers</p>
            </div>

            <div className="space-y-1">
              <LineChart className="mx-auto text-pink-400" size={30} />
              <h3 className="font-bold text-xl">{aboutInfo.experience}</h3>
              <p className="text-xs">Years Experience</p>
            </div>

            <div className="space-y-1">
              <BadgeCheck className="mx-auto text-green-400" size={30} />
              <h3 className="font-bold text-xl">{aboutInfo.project}</h3>
              <p className="text-xs">Completed Projects</p>
            </div>

            <div className="space-y-1">
              <Rocket className="mx-auto text-red-500" size={30} />
              <h3 className="font-bold text-xl">{aboutInfo.website}</h3>
              <p className="text-xs">Websites Launched</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
