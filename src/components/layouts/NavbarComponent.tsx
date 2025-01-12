import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PanelsTopLeft } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

const NavbarComponents = () => {
  return (
    <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
      <div className="container h-14 flex items-center">
        <Link
          href="/"
          className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
        >
          <PanelsTopLeft className="w-6 h-6 mr-3" />
          <span className="font-bold">WordWeave</span>
          <span className="sr-only">Back to main page</span>
        </Link>
        <nav className="ml-auto flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Button variant="default">Register</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavbarComponents;
