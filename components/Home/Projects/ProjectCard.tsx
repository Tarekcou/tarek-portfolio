"use client";
import Link from "next/link";
import { Project } from "./type"; // Import the Project type
import Image from "next/image";

interface ProjectCardProps {
  project: Project; // The prop will be of type Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // console.log(project.image);
  return (
    <div className="bg-gray-800 shadow-lg mx-auto p-4 rounded-xl w-full sm:max-w-[320px] lg:max-w-[350px] xl:max-w-[400px] text-white/80">
      <div className="relative h-[250px]">
        <Image
          width={350}
          height={250}
          src={project.image} // Assuming project.image holds the image file name
          alt={project.title}
          className="rounded-lg w-full h-full object-cover"
        />
        <span className="top-3 left-3 absolute bg-red-400 px-3 py-1 rounded-full font-bold text-white text-xs">
          {project.tag.join(", ")}
        </span>
      </div>
      <h3 className="mt-4 font-bold text-xl">{project.title}</h3>
      <p className="mt-2 text-sm">
        {project.description.slice(0, 100) + "..."}
      </p>
      <div className="flex flex-wrap gap-2 my-3">
        {project.techStack.map((techStack, index) => (
          <span
            key={index}
            className="bg-green-700 px-3 py-1 rounded-full font-bold text-white text-xs"
          >
            {techStack}
          </span>
        ))}
      </div>
      <div className="flex justify-end gap-2">
        <Link
          target="_black"
          className="bg-cyan-500 border-none text-white btn-info btn"
          href={project.link}
        >
          Demo
        </Link>
        <Link
          href={`/projects/${project.id}`}
          className="bg-blue-600 hover:bg-blue-600 border-none rounded-xl text-white transition p btn"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
