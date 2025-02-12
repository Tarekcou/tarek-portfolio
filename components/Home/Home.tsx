"use client";
import React from "react";
import Nav from "./Navbar/Nav";
import Hero from "./Hero/Hero";
import { useEffect, useState } from "react";

import Link from "next/link";
import Footer from "../Footer/Footer";
import AboutMe from "./About/About";
import Services from "./Services/Services";
import MySkills from "../Myskills/MySkills";
import ClientReviews from "./Reviews/Review";
import BlogPage from "./Blog/BlogPage";
import ContactPage from "../Contact/Contact";
import LatestProjects from "./Projects/LatestProject/LatestProject";
import LatestProjectsMobile from "./Projects/LatestProject/LatestProjectMobile";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState<string>("home"); // Default section
  const handleScroll = (id: string) => {
    setActiveComponent(id); // Highlight active section
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-[#0f0715] mx-auto overflow-hidden">
      <div className="min-h-screen">
        <div>
          <Nav setActiveComponent={handleScroll} />
        </div>
        <div className="pt-20">
          <div
            id="hero"
            className={`${
              activeComponent === "hero"
                ? "bg-blue-950 text-white"
                : "bg-transparent"
            }`}
          >
            <Hero />
          </div>

          <div
            id="about"
            className={`${
              activeComponent === "about"
                ? "bg-blue-950 text-white"
                : "bg-transparent"
            }`}
          >
            <AboutMe />
          </div>

          <div
            id="skills"
            className={`${
              activeComponent === "skills"
                ? "bg-blue-950 text-white"
                : "bg-transparent"
            }`}
          >
            <MySkills />
          </div>

          <div
            id="projects"
            className={`${
              activeComponent === "projects"
                ? "bg-blue-950 text-white"
                : "bg-transparent"
            }`}
          >
            <LatestProjects />
            <LatestProjectsMobile />
          </div>

          <div
            id="services"
            className={`${
              activeComponent === "services"
                ? "bg-blue-950 text-white"
                : "bg-transparent"
            }`}
          >
            <Services />
          </div>

          <div
            id="reviews"
            className={`${
              activeComponent === "reviews"
                ? "bg-blue-950 text-white"
                : "bg-transparent"
            }`}
          >
            <ClientReviews />
          </div>

          <div
            id="contact"
            className={`${
              activeComponent === "contact"
                ? "bg-blue-950 text-white"
                : "bg-transparent"
            }`}
          >
            <ContactPage />
          </div>
          <Footer setActiveComponent={handleScroll} />
        </div>
      </div>
    </div>
  );
};

export default Home;
