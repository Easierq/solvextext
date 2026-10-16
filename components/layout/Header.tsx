"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  Clock,
  Menu,
  X,
  Wrench,
  MapPin,
  Mail,
  Hammer,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { QuickAccessIcon } from "@/misc/icon";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-slate-100",
          active && "bg-white backdrop-blur-md bg-opacity-70"
        )}
      >
        <nav className="px-[4%] lg:px-[7%] mx-auto py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div>
                <div className="text-xl font-bold text-gray-800">
                  TimberCraft Flooring
                </div>
                <div className="text-xs text-gray-500">
                  Professional Wood Flooring Services
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-brand font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:5551234567"
                className="border-2 border-brand text-brand hover:bg-primary-50 px-4 py-[6px] rounded-lg font-medium transition-colors"
              >
                Call Now
              </a>
              <Link
                href="/book"
                className="bg-brand hover:bg-brand/90 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Get Free Quote
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-brand hover:text-brand/85 z-50 relative"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <QuickAccessIcon className="h-6 w-6 ml-[2px] mb-1" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-white/50 z-50 lg:hidden hidden-scrollbar"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 shadow-2xl bg-white z-50 lg:hidden overflow-y-auto hidden-scrollbar"
            >
              <div className="bg-brand text-white p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold text-lg">
                        TimberCraft Flooring
                      </div>
                      <div className="text-xs text-primary-100">Since 1998</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-50/20 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="text-sm text-primary-100 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Mon-Sat: 7AM-6PM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>456 Service Road, NY</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-col space-y-1 mb-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="block text-gray-700 hover:text-brand hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col space-y-3 pt-6 border-t border-gray-200">
                  <a
                    href="tel:5551234567"
                    className="border-2 border-brand text-brand hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold text-center transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                  <Link
                    href="/book"
                    className="bg-brand hover:bg-brand/95 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors flex items-center justify-center space-x-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Hammer className="w-5 h-5" />
                    <span>Get Free Quote</span>
                  </Link>
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">
                    Free Consultations
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Transform your space with beautiful hardwood floors.
                    Schedule your free in-home consultation today.
                  </p>
                  <a
                    href="mailto:info@timbercraftflooring.com"
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center space-x-1"
                  >
                    <Mail className="w-4 h-4" />
                    <span>info@timbercraftflooring.com</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
