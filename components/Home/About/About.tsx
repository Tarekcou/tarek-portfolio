"use client";

import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Education from "./Education";
import Skills from "./Skills";

const AboutMe = () => {
  const categories = ["Professional", "Educations"];
  return (
    <section className="space-y-4 bg-black mx-auto md:py-10 text-white">
      <div className="flex items-center my-5 w-full">
        <h2 className="inline-block bg-blue-800 mx-auto mb-4 p-3 font-bold text- text-white text-3xl md:text-4xl -rotate-3 transform">
          About Me
        </h2>
      </div>

      <div className="mx-auto w-11/12 md:w-10/12">
        <Tabs>
          <TabList className="flex justify-center space-x-4 mb-6">
            {categories.map((category) => (
              <Tab
                key={category}
                className="hover:bg-red-500 px-10 border rounded-full text-gray-600 hover:text-white transition cursor-pointer btn btn-md md:btn-wide"
                selectedClassName="bg-red-500 text-white"
              >
                {category}
              </Tab>
            ))}
          </TabList>

          {/* Tab Panels */}
          {/* Skills */}
          <TabPanel>
            <Skills />
          </TabPanel>
          {/* Education */}
          <TabPanel>
            <Education />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default AboutMe;
