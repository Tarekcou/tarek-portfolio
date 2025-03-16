"use client";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import ProjectCard from "@/components/Home/Projects/ProjectCard";
import { projects } from "@/Data/data";

import { MoveLeft } from "lucide-react";
import Link from "next/link";
// Projects Data

// MyProjects Component
const AllProjectPage = () => {
  const categories = ["All Projects", "React JS", "Next JS", "Fullstack"];

  const getFilteredProjects = (category: string) => {
    return category === "All Projects"
      ? projects
      : projects.filter((project) => project.tag.includes(category));
  };

  // const [, setActiveComponent] = useState<string>("home"); // Default section
  // const handleScroll = (id: string) => {
  //   setActiveComponent(id); // Highlight active section
  //   document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <div className="">
      {/* <Nav setActiveComponent={handleScroll} /> */}

      <section className="bg-[rgb(15,7,21)] py-12 pt-16 min-h-screen text-white">
        <div className="mx-auto w-11/12 md:w-10/12">
          <div className="mx-auto px-4 max-w-6xl">
            <Link href={"/"}>
              <h1 className="flex gap-2 text-white text-xl underline">
                <MoveLeft /> Return to Home Page
              </h1>
            </Link>
            <div className="mb-10 text-center">
              <h2 className="font-bold text-3xl">My Projects</h2>
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
        </div>
      </section>
    </div>
  );
};

export default AllProjectPage;
