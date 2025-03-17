"use client";

import React, { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import SearchParamsHandler from "./SearchParamsHandler";

// ✅ Dynamically import all child components with `ssr: false`
const Nav = dynamic(() => import("./Navbar/Nav"), { ssr: false });
const Hero = dynamic(() => import("./Hero/Hero"), { ssr: false });
const Footer = dynamic(() => import("../Footer/Footer"), { ssr: false });
const AboutMe = dynamic(() => import("./About/About"), { ssr: false });
const Services = dynamic(() => import("./Services/Services"), { ssr: false });
const MySkills = dynamic(() => import("../Myskills/MySkills"), { ssr: false });
const ClientReviews = dynamic(() => import("./Reviews/Review"), { ssr: false });
const ContactPage = dynamic(() => import("../Contact/Contact"), { ssr: false });
const LatestProjects = dynamic(
  () => import("./Projects/LatestProject/LatestProject"),
  { ssr: false }
);
const LatestProjectsMobile = dynamic(
  () => import("./Projects/LatestProject/LatestProjectMobile"),
  { ssr: false }
);

const SECTIONS = [
  "home",
  "about",
  "skills",
  "projects",
  "services",
  "reviews",
  "contact",
];

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("home");

  const handleScroll = useCallback((id: string | null) => {
    if (!id) return;
    setActiveComponent(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveComponent(visibleSection.target.id);
        }
      },
      { threshold: 0.5 }
    );

    SECTIONS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      SECTIONS.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <SearchParamsHandler onUpdate={handleScroll} />
      <div className="relative !bg-[#0f0715] mx-auto overflow-hidden">
        <div className="min-h-screen">
          <Nav
            setActiveComponent={handleScroll}
            activeComponent={activeComponent}
          />
          <div className="pt-20">
            {SECTIONS.map((id) => (
              <Section key={id} id={id} activeComponent={activeComponent}>
                {id === "home" && <Hero />}
                {id === "about" && <AboutMe />}
                {id === "skills" && <MySkills />}
                {id === "projects" && (
                  <>
                    <LatestProjects />
                    <LatestProjectsMobile />
                  </>
                )}
                {id === "services" && <Services />}
                {id === "reviews" && <ClientReviews />}
                {id === "contact" && <ContactPage />}
              </Section>
            ))}
            <Footer setActiveComponent={handleScroll} />
          </div>
        </div>
      </div>
    </>
  );
};

const Section = ({
  id,
  activeComponent,
  children,
}: {
  id: string;
  activeComponent: string;
  children: React.ReactNode;
}) => (
  <div
    id={id}
    className={
      activeComponent === id ? "bg-blue-950 text-white" : "bg-transparent"
    }
  >
    {children}
  </div>
);

export default Home;
