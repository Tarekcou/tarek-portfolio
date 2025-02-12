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

const LatestProjects: React.FC = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col items-center gap-4 mx-auto w-11/12 sm:w-10/12 ">
      
        <div className="flex flex-col items-center my-5 w-full">
          <h2 className="inline-block bg-blue-800 mx-auto mb-4 p-3 font-bold text- text-white text-3xl md:text-4xl 
          -rotate-3 transform">
            Latest Project
          </h2>
          <p className="text-gray-600 text-base">
            Here are some latest projects using react, tailwind, and Nodejs as Backend
          </p>
        </div>

        <Swiper
          pagination={{ dynamicBullets: true }}
          navigation={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1240: { slidesPerView: 3 },
          }}
          className=" w-full h-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                key={project.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >

                <ProjectCard project={project} />


              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Link
          href={"/allProjects"}
          className="bg-red-500 hover:bg-red-600 mt-4 px-6 py-2 text-3xl rounded-full text-white"
        >
          All Projects
        </Link>
      </div>
    </section>
  );
};

export default LatestProjects;
