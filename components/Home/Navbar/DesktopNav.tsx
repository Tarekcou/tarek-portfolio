
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DesktopNav = () => {
 

  const navMenu = (
    <>
      <Link className="nav_link" href="/">Home</Link>
      <Link className="nav_link" href="/about">About</Link>
      <Link className="nav_link" href="/service">Service</Link>
      <Link className="nav_link" href="/project">Project</Link>
      <Link className="nav_link" href="/contact">Contact</Link>
    </>
  );

  return (
    
      <div className="hidden py-5 mx-auto w-10/12 text-white md:flex justify-between items-center">
        <div className="flex-1 mx-2 px-2 text-2xl">Shoriful Islam</div>
        <ul className="flex gap-5 items-center text-base nav_link">
          {navMenu}
          <Button className="bg-white text-blue-800 hover:bg-gray-200 transition-all duration-200 rounded-xl">
            <Download /> Resume
          </Button>
        </ul>
      </div>
 
  );
};

export default DesktopNav;