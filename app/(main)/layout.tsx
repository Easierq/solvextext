"use client";

import BgGlassmorphism from "@/components/layout/BgGlassmorphism";
import { Footer } from "@/components/layout/Footer";

import { Navbar } from "@/components/layout/Navbar";
import type { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative bg-white">
      <Navbar />
      <main className="">
        <BgGlassmorphism />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
