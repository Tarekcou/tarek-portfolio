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
import { projects } from "@/Data/data";

// Projects Object

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const LatestProjects: React.FC = () => {
  return (
    <section className="hidden md:block !bg-[#0f0715] py-12">
      <div className="flex flex-col items-center gap-4 mx-auto w-11/12 sm:w-10/12">
        <div className="flex flex-col items-center my-5 w-full">
          <h2 className="inline-block bg-blue-800 mx-auto mb-4 p-3 font-bold text- text-white text-2xl md:text-4xl -rotate-3 transform">
            Latest Project
          </h2>
          <div className="mx-auto w-10/12 text-center">
            <p className="text-white/80 text-base">
              Here are some latest projects using MERN Stack
            </p>
          </div>
        </div>
        {/* prpjects */}
        <div className="gap-5 grid grid-cols-1 md:grid-cols-2 w-full">
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
        {/* <Swiper
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
            1240: { slidesPerView: 2 },
          }}
          className="w-full h-full"
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
        </Swiper> */}
        <div className="bg-red-500 divide-red-500 divide"></div>
        <Link
          href={"/allProjects"}
          className="bg-red-500 hover:bg-red-600 mt-4 rounded-full text-white text-xl md:text-2xl btn"
        >
          See All Projects
        </Link>
      </div>
    </section>
  );
};

export default LatestProjects;
