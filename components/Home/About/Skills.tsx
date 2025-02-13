import React from "react";
import { Users, Rocket, BadgeCheck, LineChart } from "lucide-react";
import { SquareCheck } from "lucide-react";
import { aboutInfo } from "@/Data/data";
const Skills = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col justify-center items-center gap-10">
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
    </div>
  );
};

export default Skills;
