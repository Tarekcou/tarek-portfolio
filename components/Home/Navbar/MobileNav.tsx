import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { AlignJustify, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MobileNav = () => {


  const navMenu = (
    <>
            <Link  className="nav_link" href="/">Home</Link>
            <Link  className="nav_link" href="/about">About</Link>
            <Link  className="nav_link" href="/service">Service</Link>
            <Link  className="nav_link" href="/project">Project</Link>
            <Link  className="nav_link" href="/contact">Contact</Link>


    </>
  );
  return <div className="w-11/12 mx-auto py-5 block md:hidden">

  <Sheet key={"left"}>
  <SheetTrigger  className="flex items-center w-full justify-between ">   
  <SheetTitle className="text-xl  font-bold text-white">Shoriful Islam</SheetTitle>
  <div className="flex items-center gap-2 text-white">

  <Button className="bg-white text-blue-950 hover:bg-gray-200 transition-all duration-200 rounded-xl" ><Download /> Resume</Button>
     <AlignJustify className="text-white"/>
  </div>
  </SheetTrigger>
  <SheetContent side={"left"} className=" text-white bg-black border-none">
    <SheetHeader>
      

      <SheetDescription>
        {/* Navbar */}
         
          <div className=" flex flex-col gap-5 justify-start text-white mt-10">
              {/* Navbar menu content here */}
              
              {navMenu}

            
   
        </div>
      


      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>
};

export default MobileNav;
