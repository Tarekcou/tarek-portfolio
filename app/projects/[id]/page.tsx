"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";
import { projects } from "@/Data/data";
import Nav from "@/components/Home/Navbar/Nav";
import Footer from "@/components/Footer/Footer";

// Define the Project type (you can extend it as needed)

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  // Parse project ID from params
  const projectId = parseInt(params.id);

  // Find the project from the data array using the ID
  const project = projects.find((project) => project.id === projectId);

  // Return loading state if the project is not found
  if (!project) {
    return <div>Project not found.</div>;
  }

  const [activeComponent, setActiveComponent] = useState<string>("home"); // Default section
  const handleScroll = (id: string) => {
    setActiveComponent(id); // Highlight active section
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0f0715] pt-28">
      <div>
        <Nav setActiveComponent={handleScroll} />
      </div>
      <div className="space-y-3 shadow-md mx-auto mt-5 p-6 rounded-xl max-w-4xl text-white">
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
        <p>
          <strong>Challenges Faced:</strong> {project.challenges}
        </p>
        <p>
          <strong>Potential Improvements & Future Plans:</strong>{" "}
          {project.futurePlans}
        </p>
      </div>

      <div>
        <Footer setActiveComponent={handleScroll} />
      </div>
    </div>
  );
};

export default ProjectDetails;
