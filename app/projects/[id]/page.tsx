"use client";
import Image from "next/image";
import React from "react";
import { projects } from "@/Data/data";

import { MoveLeft } from "lucide-react";
import Link from "next/link";

// Define the Project type (you can extend it as needed)

interface ProjectDetailsProps {
  params: { id: string };
}

const ProjectDetails = ({ params }: ProjectDetailsProps) => {
  const { id } = params;

  // Convert the id to an integer
  const projectId = parseInt(id);

  // Find the project from the data array using the ID
  const project = projects.find((project) => project.id === projectId);

  // Return loading state if the project is not found
  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="bg-[#0f0715] py-10">
      <Link
        className="flex items-start mx-auto w-8/12"
        href={"/?route=projects"}
      >
        <h1 className="flex gap-2 text-white text-xl underline">
          <MoveLeft /> Return to Home Page
        </h1>
      </Link>
      <div className="space-y-3 bg-gray-800 shadow-md mx-auto mt-5 p-6 rounded-xl max-w-4xl text-white">
        <h2 className="mb-4 font-bold text-2xl">{project.title}</h2>
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="mb-4 rounded-md w-full h-60 object-cover"
        />
        <p>
          <strong>Main Technology Stack:</strong> {project.techStack}
        </p>
        <p>
          <strong>Description:</strong> {project.description}
        </p>
        <p>
          <strong>Live Project:</strong>{" "}
          <a
            href={project.link}
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.link}
          </a>
        </p>
        <p>
          <strong>GitHub Repository:</strong>{" "}
          <a
            href={project.githubLink}
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.githubLink}
          </a>
        </p>
        <p className="text-gray-300">
          <strong className="text-white">Challenges Faced:</strong>{" "}
          {project.challenges}
        </p>
        <p>
          <strong>Potential Improvements & Future Plans:</strong>{" "}
          {project.futurePlans}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetails;
