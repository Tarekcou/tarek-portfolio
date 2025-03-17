"use client";

import React from "react";
import Education from "./Education";
import Skills from "./Skills";

const AboutMe = () => {
  return (
    <section className="space-y-4 bg-black mx-auto md:py-5 text-white">
      <div className="flex items-center my-5 w-full">
        <h2 className="inline-block bg-blue-800 mx-auto mb-4 p-3 font-bold text-white text-2xl md:text-4xl -rotate-3 transform">
          About Me
        </h2>
      </div>

      <div className="mx-auto w-11/12 md:w-10/12">
        {/* Headings */}
        {/* <div className="flex justify-around space-x-10 mb-6">
          <h3 className="font-bold text-red-500 text-2xl">Professional</h3>
          <h3 className="font-bold text-red-500 text-2xl">Education</h3>
        </div> */}

        {/* Content: Skills and Education Side by Side */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
          <div className="shadow-2xl p-4 border border-gray-800 rounded-lg shacdow">
            <Skills />
          </div>
          <div className="shadow-2xl mx-auto p-4 md:pt-10 border border-gray-800 rounded-lg">
            <Education />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
