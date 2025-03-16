import { projects } from "@/Data/data";
import React from "react";
import ProjectCard from "../ProjectCard";

const AllProjects: React.FC = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col items-center gap-4 mx-auto w-11/12 md:w-10/12 min-h-screen">
        <h2 className="mb-6 font-bold text-gray-900 text-3xl">All Projects</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
