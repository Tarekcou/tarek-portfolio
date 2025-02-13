import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./LatestProject.css";
// Components
import ProjectCard from "../ProjectCard";
import Link from "next/link";
import MySkills from "@/components/Myskills/MySkills";
import { projectData, projects } from "@/Data/data";

// Projects Object

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const LatestProjectsMobile: React.FC = () => {
  return (
    <section className="md:hidden block space-y-3 py-12">
      <div className="flex flex-col items-center gap-4 mx-auto w-11/12 sm:w-10/12">
        <div className="flex flex-col items-center my-5 w-full">
          <h2 className="inline-block bg-blue-800 mx-auto mb-4 p-3 font-bold text- text-white text-3xl md:text-4xl -rotate-3 transform">
            Latest Project
          </h2>
          <p className="w-10/12 text-white/70 text-base">
            Here are some latest projects using react, tailwind, and Nodejs as
            Backend
          </p>
        </div>

        <div className="space-y-2 grid grid-cols-1 w-full h-full">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        <Link
          href={"/allProjects"}
          className="bg-red-500 hover:bg-red-600 mt-4 px-6 py-2 rounded-full text-white text-xl md:text-2xl"
        >
          All Projects
        </Link>
      </div>
    </section>
  );
};

export default LatestProjectsMobile;
