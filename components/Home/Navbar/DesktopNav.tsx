"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

import Image from "next/image";

const DesktopNav = ({
  setActiveComponent,
  activeComponent,
}: {
  setActiveComponent: (section: string) => void;
  activeComponent: string;
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Ensure the PDF is in the public folder
    link.download = "My_Resume.pdf";
    link.click();
  };
  const navMenu = (
    <>
      <button
        onClick={() => setActiveComponent("hero")}
        className={`nav_link ${
          activeComponent == "hero" ? "after:scale-x-100" : " "
        }`}
      >
        Home
      </button>

      <button
        onClick={() => setActiveComponent("about")}
        className={`nav_link ${
          activeComponent == "about" ? "after:scale-x-100" : " "
        }`}
      >
        About
      </button>
      <button
        onClick={() => setActiveComponent("skills")}
        className={`nav_link ${
          activeComponent == "skills" ? "after:scale-x-100" : " "
        }`}
      >
        Skills
      </button>
      <button
        onClick={() => setActiveComponent("projects")}
        className={`nav_link ${
          activeComponent == "projects" ? "after:scale-x-100" : " "
        }`}
      >
        Projects
      </button>
      <button
        onClick={() => setActiveComponent("services")}
        className={`nav_link ${
          activeComponent == "services" ? "after:scale-x-100" : " "
        }`}
      >
        Services
      </button>
      <button
        onClick={() => setActiveComponent("reviews")}
        className={`nav_link ${
          activeComponent == "reviews" ? "after:scale-x-100" : " "
        }`}
      >
        Reviews
      </button>
      <button
        onClick={() => setActiveComponent("contact")}
        className={`nav_link ${
          activeComponent == "contact" ? "after:scale-x-100" : " "
        }`}
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
