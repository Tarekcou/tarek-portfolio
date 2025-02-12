"use client"
import Link from "next/link";
import { Project } from './type'; // Import the Project type
import Image from "next/image";

interface ProjectCardProps {
  project: Project; // The prop will be of type Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // console.log(project.image);
  return (
    <div className="bg-gray-800 text-white/80 shadow-lg p-4  rounded-xl w-full sm:w-[320px] lg:w-[350px] xl:w-[400px] mx-auto">
      <div className="relative  h-[250px]">
        <Image
          width={350}
          height={250}
          src={project.image} // Assuming project.image holds the image file name
          alt={project.title}
          className="rounded-lg w-full h-full object-cover"
        />
        <span className="top-3 left-3 absolute bg-red-500 px-3 py-1 rounded-full font-bold text-white text-xs">
          {project.tag.join(", ")}
        </span>
      </div>
      <h3 className="mt-4 font-bold  text-xl">{project.title}</h3>
      <p className="mt-2  text-sm">{project.description}</p>
      <div className=" my-3 flex">

      {project.techStack.map((techStack) =>
        <div className="badge mt-0 bg-red-700 text-white border-none line-clamp-2  mx-1 border">{techStack}</div>

      )}
      </div>

      <Link
        href={`/projects/${project.id}`}
        className="bg-blue-600 border-none hover:bg-blue-600 my-2 px-4 py-2 rounded-xl text-white transition btn"
      >
        Details
      </Link>
    </div>
  );
};

export default ProjectCard;
