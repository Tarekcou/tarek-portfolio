import Link from "next/link";
import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import { useEffect, useState } from "react";
const Nav = () => {
  return (
    <div>
      <DesktopNav />
      <MobileNav />
    </div>
  );
};

export default Nav;
