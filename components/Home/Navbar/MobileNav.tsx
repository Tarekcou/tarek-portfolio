import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { AlignJustify, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  const navMenu = (
    <>
      <Link className="nav_link" href="/">
        Home
      </Link>
      <Link className="nav_link" href="/about">
        About
      </Link>
      <Link className="nav_link" href="/service">
        Service
      </Link>
      <Link className="nav_link" href="/project">
        Project
      </Link>
      <Link className="nav_link" href="/contact">
        Contact
      </Link>
    </>
  );
  return (
    <div className="md:hidden block mx-auto py-5 w-11/12">
      <Sheet key={"left"}>
        <div className="flex justify-between w-full">
          <SheetTitle className="font-bold text-white text-xl">
            Shoriful Islam
          </SheetTitle>
          <div className="flex items-center gap-2 text-white">
            <Button className="bg-white hover:bg-gray-200 rounded-xl text-blue-950 transition-all duration-200">
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

              <div className="flex flex-col justify-start gap-5 mt-10 text-white">
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
