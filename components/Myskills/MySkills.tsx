import { skillsData } from "@/Data/data";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import Image from "next/image";

const MySkills = () => {
  return (
    <div className="mx-auto py-10 w-11/12 md:w-10/12">
      <div className="flex items-center my-5 w-full">
        <h2 className="inline-block bg-blue-800 mx-auto mb-4 p-3 font-bold text- text-white text-3xl md:text-4xl -rotate-3 transform">
          I Work With
        </h2>
      </div>
      <div className="gap-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mx-auto max-w-6xl">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-neutral-800 hover:bg-blue-950 shadow-lg border-none rounded-xl text-white">
              <CardContent className="flex flex-col items-center p-4">
                <div>
                  <Image
                    src={skill.image}
                    alt="Skill Icon"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="mb-2 font-bold text-xl">{skill.title}</div>
                <div className="bg-gray-800 rounded-full w-full h-3 overflow-hidden">
                  <div
                    className={`${
                      skill.color ? skill.color : "bg-green-500"
                    } h-3`}
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

// Ensure you have shadcn/ui and Framer Motion installed for animations
// Tailwind CSS should already be set up for styling.
// Run: npm install @shadcn/ui framer-motion if needed.
export default MySkills;
