"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Home } from "lucide-react";
import { useState } from "react";
import AboutMe from "../About/About";
import Services from "../Services/Services";
import LatestProjects from "../Projects/LatestProject/LatestProject";
import ContactPage from "@/components/Contact/Contact";
import Image from "next/image";

const DesktopNav = ({
  setActiveComponent,
}: {
  setActiveComponent: (section: string) => void;
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Ensure the PDF is in the public folder
    link.download = "My_Resume.pdf";
    link.click();
  };
  const navMenu = (
    <>
      <button onClick={() => setActiveComponent("hero")} className="nav_link">
        Home
      </button>
      <button onClick={() => setActiveComponent("about")} className="nav_link">
        About
      </button>
      <button onClick={() => setActiveComponent("skills")} className="nav_link">
        Skills
      </button>
      <button
        onClick={() => setActiveComponent("projects")}
        className="nav_link"
      >
        Projects
      </button>
      <button
        onClick={() => setActiveComponent("services")}
        className="nav_link"
      >
        Services
      </button>
      <button
        onClick={() => setActiveComponent("reviews")}
        className="nav_link"
      >
        Reviews
      </button>
      <button
        onClick={() => setActiveComponent("contact")}
        className="nav_link"
      >
        Contact
      </button>
    </>
  );

  return (
    <div className="hidden md:flex justify-between items-center mx-auto py-5 w-11/12 md:w-10/12 text-white">
      <div className="flex gap-2 px-2 text-2xl">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={30}
          height={40}
          className="rounded-lg"
        />
        <h1 className="font-bold">Tarek</h1>
      </div>
      <ul className="flex items-center gap-5 text-base nav_link">
        {navMenu}
        <Button
          onClick={handleDownload}
          className="bg-white hover:bg-gray-200 rounded-xl text-blue-800 transition-all duration-200"
        >
          <Download /> Resume
        </Button>
      </ul>
    </div>
  );
};

export default DesktopNav;
