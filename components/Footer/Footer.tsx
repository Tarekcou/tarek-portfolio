import Image from "next/image";
import React from "react";

const Footer = ({
  setActiveComponent,
}: {
  setActiveComponent: (section: string) => void;
}) => {
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
    <footer className="flex flex-col justify-center items-center bg-black/90 mx-auto p-10 w-full text-neutral-content text-white/80 text-center footer">
      <nav>
        <div className="flex justify-center items-center gap-2 mx-auto px-2 text-2xl">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={30}
            height={40}
            className="rounded-lg"
          />
          <h1 className="font-bold">Tarek</h1>
        </div>

        <div className="gap-4 grid grid-flow-col">
          <ul className="flex items-center gap-5 text-base nav_link">
            {navMenu}
          </ul>
        </div>
      </nav>
      <footer className="p-4 text-gray-400 footer footer-center">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Shoriful Islam Tarek
          </p>
        </aside>
      </footer>
    </footer>
  );
};

export default Footer;
