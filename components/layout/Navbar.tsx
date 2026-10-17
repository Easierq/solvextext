"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import Link from "next/link";
import { cn } from "@/lib/utils";

import { QuickAccessIcon } from "@/misc/icon";
import { Button } from "../ui/button";
import { Logo } from "./logo";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/" },
  { name: "Dėpannage", href: "/" },
  { name: "Cartifications", href: "/" },
  { name: "Blog", href: "/" },
  // { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
    return () => document.body.classList.remove("sidebar-open");
  }, [isOpen]);

  return (
    <>
      {/* Desktop Nav */}
      <nav
        className={`hidden md:flex fixed top-0 w-full z-[70] transition-all duration-500 ${
          scrolled ? "py-4" : "py-8"
        }`}
      >
        <div className="container mx-auto px-6">
          <div
            className={`flex justify-between items-center border border-white/10 bg-yellow-300 px-5 py-3 rounded-full transition-all ${
              scrolled
                ? "shadow-yellow-500/10 border-none backdrop-blur-xl bg-white/5"
                : "backdrop-blur-xl"
            }`}
          >
            <div className="flex gap-3 sm:gap-5">
              <Logo />
            </div>

            <div className="hidden lg:flex items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs font-medium tracking-[0.2em] text-blue-950 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-blue-950 transition-all group-hover:w-full" />
                </Link>
              ))}
              <Link href="/">
                <Button
                  variant="outline"
                  className={cn(
                    "w-auto px-6 text-yellow-300 font-bold border-none bg-blue-950 rounded-full",
                  )}
                >
                  Contactez-nous
                </Button>
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="w-10 h-10 flex lg:hidden items-center justify-center bg-white/5 border-[0.5] border-black rounded-full text-black hover:bg-white/10 transition-all"
            >
              <QuickAccessIcon
                className={cn("h-6 w-6 mr-1 mb-1 cursor-pointer")}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={cn(
          "z-[70] h-16 w-full fixed md:hidden top-0",
          scrolled && "bg-yellow-300",
        )}
      >
        <div className="flex h-full items-center justify-between max-w-7xl container mx-auto px-6">
          <div className="flex gap-3 sm:gap-5">
            <Logo />
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-white/5 border-none text-blue-950 hover:bg-white/10 transition-all"
          >
            <QuickAccessIcon
              className={cn("h-6 w-6 mr-1 mb-1 cursor-pointer")}
            />
          </button>
        </div>
      </nav>

      {/* Sidebar / Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            // className="fixed inset-0 z-[200] bg-blue-50 flex flex-col p-10 overflow-y-scroll hidden-scrollbar"
            className="fixed top-0 left-0 right-0 bottom-0 min-h-screen z-[200] bg-yellow-300 flex flex-col p-10 overflow-y-scroll hidden-scrollbar"
          >
            <div className="flex justify-between items-center mb-12">
              <Logo />
              <button
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 flex items-center justify-center border-2 border-black rounded-full text-black"
              >
                <X />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => {
                return (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-black tracking-tighter hover:italic hover:text-blue-950 transition-all text-blue-950"
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-auto pt-10 border-t border-blue-950 flex justify-between items-end">
              {/* <div className="text-right cursor-pointer">
                <p className="text-blue-950 font-bold italic text-xl leading-none mb-1">
                  Let's talk.
                </p>
                <p className="text-gray-600 text-xs tracking-tighter">
                  +32 477 3504 6
                </p>
              </div> */}
              <a
                href="tel:+3247735046"
                className="block text-right cursor-pointer group"
              >
                <p className="text-blue-950 font-bold italic text-xl leading-none mb-1 group-hover:underline">
                  Let's talk.
                </p>
                <p className="text-gray-600 text-xs tracking-tighter">
                  +32 477 3504 6
                </p>
              </a>
              <div></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
