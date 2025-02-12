'use client'
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import tutorly from "../../assets/tutorly.png";
import equi from "../../assets/equi.png";
import bari from "../../assets/bari.png";
import career from "../../assets/career.png";
import ProjectCard from "@/components/Home/Projects/ProjectCard";
import { projects } from "@/Data/data";
// Projects Data


// MyProjects Component
const AllProjectPage = () => {

  const categories = ["All Projects", "React JS", "Next JS", "Fullstack"];

  const getFilteredProjects = (category:string) => {
    return category === "All Projects"
      ? projects
      : projects.filter((project) => project.tag.includes(category));
  };
  return (
    <section className="mx-auto py-12 w-11/12 md:w-10/12">
      <div className="mx-auto px-4 max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="font-bold text-3xl text-gray-900">
            <span className="text-red-500">•</span> My Projects
          </h2>
        </div>

        {/* Tabs */}
        <Tabs>
          <TabList className="flex justify-center space-x-4 mb-6">
            {categories.map((category) => (
              <Tab
                key={category}
                className="hover:bg-red-500 border rounded-full text-gray-600 hover:text-white transition cursor-pointer btn btn-sm md:btn-wide md:btn-md"
                selectedClassName="bg-red-500 text-white"
              >
                {category}
              </Tab>
            ))}
          </TabList>

          {/* Tab Panels */}
          {categories.map((category) => (
            <TabPanel key={category}>
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {getFilteredProjects(category).map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default AllProjectPage;
