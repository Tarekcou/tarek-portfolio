"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const sections = [
  "home",
  "about",
  "skills",
  "projects",
  "services",
  "reviews",
  "contact",
];

const DesktopNav = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            console.log("Active Section:", entry.target.id); // Debugging log
          }
        });
      },
      { threshold: 0.3 } // Reduced from 0.6 to 0.3 for better accuracy
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="hidden md:flex justify-between items-center mx-auto py-5 w-11/12 md:w-10/12 text-white">
      <div className="flex gap-2 px-2 text-2xl">
        <Image
          src="/favicon.ico"
          alt="logo"
          width={30}
          height={40}
          className="rounded-full"
        />
        <h1 className="font-bold">Tarek</h1>
      </div>
      <ul className="flex items-center gap-6 text-base">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() =>
              document
                .getElementById(section)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`nav_link ${
              activeSection === section
                ? "after:scale-x-100 font-bold"
                : "text-white"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
        <Button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/resume.pdf";
            link.download = "My_Resume.pdf";
            link.click();
          }}
          className="bg-white hover:bg-gray-200 rounded-xl text-blue-800 transition-all duration-200"
        >
          <Download /> Resume
        </Button>
      </ul>
    </div>
  );
};

export default DesktopNav;
