"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Nav = ({
  setActiveComponent,
}: {
  setActiveComponent: (section: string) => void;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Handle scroll event to update navbar background and shadow
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Change navbar style on scroll
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scroll and active section change
  const handleSectionScroll = (sectionId: string) => {
    // Set active section state (for highlighting the active section)
    setActiveComponent(sectionId);

    // Scroll smoothly to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={`fixed w-full top-0 z-50 transition-all duration-300 !important ${
        isScrolled ? "bg-blue-950 shadow-md" : "bg-transparent"
      }`}
    >
      <DesktopNav setActiveComponent={handleSectionScroll} />
      <MobileNav setActiveComponent={handleSectionScroll} />
    </div>
  );
};

export default Nav;
