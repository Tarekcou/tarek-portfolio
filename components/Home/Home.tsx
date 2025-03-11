"use client";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import Nav from "./Navbar/Nav";
import Hero from "./Hero/Hero";
import Footer from "../Footer/Footer";
import AboutMe from "./About/About";
import Services from "./Services/Services";
import MySkills from "../Myskills/MySkills";
import ClientReviews from "./Reviews/Review";
import ContactPage from "../Contact/Contact";
import LatestProjects from "./Projects/LatestProject/LatestProject";
import LatestProjectsMobile from "./Projects/LatestProject/LatestProjectMobile";
import { useRouter, useSearchParams } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeComponent, setActiveComponent] = useState<string>("home"); // Default section
  const behaviorType = activeComponent !== "home" ? "auto" : "smooth";

  const handleScroll = useCallback(
    (id: string) => {
      setActiveComponent(id); // Highlight active section
      document.getElementById(id)?.scrollIntoView({ behavior: behaviorType });
    },
    [behaviorType] // ✅ Include dependencies
  );

  useEffect(() => {
    const name = searchParams.get("route");
    if (name) {
      handleScroll(name);
      router.replace("/", { scroll: false }); // Prevent infinite rerenders
    }
  }, [searchParams, handleScroll, router]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="relative bg-[#0f0715] mx-auto overflow-hidden">
        <div className="min-h-screen">
          <Nav
            setActiveComponent={handleScroll}
            activeComponent={activeComponent}
          />
          <div className="pt-20">
            <Section id="hero" activeComponent={activeComponent}>
              <Hero />
            </Section>
            <Section id="about" activeComponent={activeComponent}>
              <AboutMe />
            </Section>
            <Section id="skills" activeComponent={activeComponent}>
              <MySkills />
            </Section>
            <Section id="projects" activeComponent={activeComponent}>
              <LatestProjects />
              <LatestProjectsMobile />
            </Section>
            <Section id="services" activeComponent={activeComponent}>
              <Services />
            </Section>
            <Section id="reviews" activeComponent={activeComponent}>
              <ClientReviews />
            </Section>
            <Section id="contact" activeComponent={activeComponent}>
              <ContactPage />
            </Section>
            <Footer setActiveComponent={handleScroll} />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

// ✅ Extracted Section Component for cleaner code
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
