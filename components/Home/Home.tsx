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

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative bg-[#0f0715] mx-auto overflow-hidden">
      <div className="min-h-screen">
        <div
          className={`fixed w-full top-0 z-50 transition-all duration-300  ${
            isScrolled ? "bg-blue-950 shadow-md" : "bg-transparent"
          }`}
        >
          <Nav />
        </div>
        <div className="pt-20">
          <Hero />
        </div>

        <div>
          <AboutMe />
        </div>

        <div>
          <Services />
        </div>
        <div>
          <MySkills />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
