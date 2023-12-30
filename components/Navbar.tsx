import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

function Navbar() {
  return (
    <nav className="flex w-full relative items-center justify-between py-5">
      <Link href={"/"} className="font-bold text-3xl">
        Marshal<span className="text-primary">Blog</span>
      </Link>
      <ModeToggle />
    </nav>
  );
}

export default Navbar;
