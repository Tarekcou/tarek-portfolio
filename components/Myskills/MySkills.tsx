import { skillsData } from "@/Data/data";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const MySkills = () => {
  return (
    <div className="mx-auto py-10 w-11/12 md:w-10/12">
      <div className="flex items-center my-5 w-full">
        <h2 className="inline-block bg-blue-800 mx-auto mb-4 p-3 font-bold text- text-white text-2xl md:text-4xl -rotate-3 transform">
          I Work With
        </h2>
      </div>
      <div className="gap-3 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 mx-auto">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-neutral-800 hover:bg-blue-950 shadow-lg border-none rounded-xl text-white">
              <CardContent className="flex flex-col items-center p-4">
                <div className="">
                  <img
                    src={skill.image}
                    alt="Skill Icon"
                    className="bg-white w-10 h-10"
                  />
                </div>
                <div className="mb-2 font-bold text-xs md:text-base">
                  {skill.title}
                </div>
                <div className="bg-gray-300 rounded-full w-full h-1 overflow-hidden">
                  <div
                    className={`${
                      skill.color ? "bg-blue-500" : "bg-green-500"
                    } h-1`}
                    style={{ width: skill.percent }}
                  ></div>
                </div>
                <div className="mt-2 text-gray-400 text-sm">
                  {skill.percent}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
