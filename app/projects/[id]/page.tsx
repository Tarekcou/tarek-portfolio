import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import { projects } from '@/Data/data';

// Define the Project type (you can extend it as needed)
interface Project {
  id: number;
  title: string;
  image: string;
  techStack: string;
  description: string;
  link: string;
  githubLink: string;
  challenges: string;
  futurePlans: string;
  tag: string[];
}



const ProjectDetails = ({ params }: { params: { id: string } }) => {
  // Access project ID from params
  const projectId = parseInt(params.id);

  // Find the project from the data array using the ID
  const project = projects.find((project) => project.id === projectId);

  // Return loading state if the project is not found
  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="space-y-3 bg-white shadow-md mx-auto mt-5 p-6 rounded-xl max-w-4xl">
      <h2 className="mb-4 font-bold text-2xl text-gray-900">{project.title}</h2>
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="mb-4 rounded-md w-full h-60 object-cover"
      />
      <p><strong>Main Technology Stack:</strong> {project.techStack}</p>
      <p><strong>Description:</strong> {project.description}</p>
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
      <p><strong>Challenges Faced:</strong> {project.challenges}</p>
      <p><strong>Potential Improvements & Future Plans:</strong> {project.futurePlans}</p>
    </div>
  );
};

export default ProjectDetails;
