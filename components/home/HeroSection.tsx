"use client";
import { motion } from "framer-motion";
import { Hammer, Phone, Calendar, Shield } from "lucide-react";
import Link from "next/link";
import BgGlassmorphism from "../layout/BgGlassmorphism";
import Image from "next/image";
import imagePng from "@/public/hero-right.png";

export default function HeroSection() {
  return (
    <section className="relative text-white z-10 py-20 pt-32 lg:py-32 lg:pt-40 overflow-hidden min-h-[600px]">
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-20 left-10 animate-pulse">
          <Hammer className="w-32 h-32" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-1000">
          <Hammer className="w-24 h-24" />
        </div>
      </div>

      <div className="px-[4%] lg:px-[7%] mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-7 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl text-slate-600 font-black mb-6 leading-tight">
              Professional Wood Flooring <br />
              <span className="">Craftsmanship You Trust</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Expert hardwood flooring specialists delivering beautiful, lasting
              results for your home. We provide professional installation,
              refinishing, and restoration with quality materials and honest
              pricing.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/book"
                className="bg-primary-600 w-full lg:w-max hover:bg-primary-700 text-white px-6 py-4 rounded-lg font-semibold text-center transition-all duration-300 transform shadow-sm flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Get Free Quote</span>
              </Link>
              <a
                href="tel:5551234567"
                className="bg-white w-full lg:w-max hover:bg-gray-100 text-secondary-900 px-6 py-4 rounded-lg font-semibold text-center transition-all duration-300 transform shadow-sm flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (555) 123-4567</span>
              </a>
            </div>

            <div className="hidden md:flex flex-wrap gap-6 pt-6 border-t border-slate-400/50">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-primary-400" />
                <span className="text-slate-600 font-semibold">
                  Licensed & Insured
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-primary-400" />
                <span className="text-slate-600 font-semibold">
                  25+ Years Experience
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-primary-400" />
                <span className="text-slate-600 font-semibold">
                  Quality Guaranteed
                </span>
              </div>
            </div>
          </motion.div>
          <div className="flex-grow">
            <Image className="w-full" src={imagePng} alt="hero" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
