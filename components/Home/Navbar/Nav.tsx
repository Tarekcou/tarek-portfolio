import Link from "next/link";
import React from "react";

const Nav = () => {
  const navMenu = (
    <>
      <li key="home">
        <Link href="/">Home</Link>
      </li>
      <li key="about">
        <Link href="/about">About</Link>
      </li>
      <li key="service">
        <Link href="/service">Service</Link>
      </li>
      <li key="project">
        <Link href="/project">Project</Link>
      </li>
      <li key="contact">
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col bg-blue-950 drawer-content">
        {/* Navbar */}
        <div className="mx-auto w-10/12 text-white navbar">
          <div className="lg:hidden flex-none">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block stroke-current w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 mx-2 px-2 text-xl">Shoriful Islam</div>
          <div className="hidden lg:block flex-none">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {navMenu}
            </ul>
          </div>
        </div>
        {/* Page content here */}
        {/* Content */}
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="bg-blue-900 p-4 pt-32 w-80 min-h-full text-white menu">
          {/* Sidebar content here */}
          {navMenu}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
