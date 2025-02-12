import { skillsData } from "@/Data/data";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Image } from "lucide-react";

const skills = [
  { name: "React", level: 90, color: "bg-blue-500" },
  { name: "CSS", level: 97, color: "bg-blue-400" },
  { name: "JavaScript", level: 77, color: "bg-yellow-400" },
  { name: "TypeScript", level: 67, color: "bg-blue-600" },
  { name: "HTML", level: 67, color: "bg-orange-500" },
  { name: "Node JS", level: 77, color: "bg-green-600" },
  { name: "MongoDB", level: 65, color: "bg-green-500" },
  { name: "Python", level: 55, color: "bg-yellow-600" },
  { name: "Firebase", level: 75, color: "bg-orange-400" },
  { name: "Vue", level: 35, color: "bg-green-400" },
];

const MySkills = () => {
  return (
    <div className="bg-neutral-900 py-10">
      <h1 className="mb-6 font-bold text-white text-3xl text-center">
        My Skills
      </h1>
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto p-5 max-w-6xl">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-neutral-800 shadow-lg rounded-xl text-white">
              <CardContent className="flex flex-col items-center p-4">
                <div>
                  <img src={skill.image} alt="" />
                </div>
                <div className="mb-2 font-bold text-xl">{skill.title}</div>
                <Progress
                  value={parseInt(skill.percent)}
                  className={`h-2 w-full ${skill.color}`}
                />
                <div className="mt-2 text-gray-400 text-sm">
                  {skill.percent}%
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
