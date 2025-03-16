import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const MobileNav = ({
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
    <div className="md:hidden block mx-auto py-5 w-11/12">
      <Sheet key={"left"}>
        <div className="flex justify-between w-full">
          <SheetTitle className="font-bold text-white text-xl">
            <div className="flex items-center gap-2 px-2 text-2xl">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={30}
                height={40}
                className="rounded-full w-6 h-6"
              />
              <h1 className="font-bold">Tarek</h1>
            </div>
          </SheetTitle>
          <div className="flex items-center gap-2 text-white">
            <Button
              onClick={handleDownload}
              className="bg-white hover:bg-gray-200 rounded-xl text-blue-950 transition-all duration-200"
            >
              <Download /> Resume
            </Button>
            <SheetTrigger className="flex justify-between items-center w-full">
              <AlignJustify className="text-white" />
            </SheetTrigger>
          </div>
        </div>

        <SheetContent side={"left"} className="bg-black border-none text-white">
          <SheetHeader>
            <SheetDescription>
              {/* Navbar */}

              <div className="flex flex-col justify-start gap-5 mt-10 w-full text-white">
                {/* Navbar menu content here */}

                {navMenu}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
