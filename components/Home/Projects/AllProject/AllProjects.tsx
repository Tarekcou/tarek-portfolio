import { projects } from "@/Data/data";
import React from "react";
import ProjectCard from "../ProjectCard";

const AllProjects: React.FC = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col items-center gap-4 mx-auto w-10/12">
        <h2 className="font-bold text-3xl text-gray-900 mb-6">All Projects</h2>
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
