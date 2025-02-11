"use client"
import Link from "next/link";
import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import  { useEffect, useState } from "react";
const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-blue-950 shadow-md" : "bg-transparent"
      }`}
    >
    <DesktopNav />
    <MobileNav />
    </div>
    
  );
};

export default Nav;
