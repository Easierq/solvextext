"use client";

import { ArrowRight, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useState } from "react";
import HeroImageSlide from "./HeroImageSlide";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

export function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center pt-24 md:pt-40 pb-12 md:pb-16">
      {/* ── Fenêtre vidéo ── */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-10">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-xl"
            onClick={() => setShowVideo(false)}
          />
          <div className="relative w-full max-w-6xl aspect-square md:aspect-video bg-black border border-white/10 shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-6 right-6 z-10 text-white hover:text-yellow-300 transition-colors"
            >
              <X className="size-8" />
            </button>

            <iframe
              src="https://www.youtube.com/embed/HTmKIq6hy44?autoplay=1&rel=0&modestbranding=1"
              title="Gestion des visites Oasis."
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent pointer-events-none">
              <p className="text-[8px] font-black text-yellow-300 uppercase tracking-widest mb-1">
                Lecture en cours
              </p>
              <p className="text-sm font-bold text-white uppercase italic tracking-widest">
                Solvex Electrical Services.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Grille à motif discret ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="relative z-10 container px-6 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center w-full">
          <div className="space-y-8 order-2 lg:order-1">
            {/* Titre */}
            <motion.h1
              variants={fadeUp}
              initial="initial"
              animate="animate"
              custom={1}
              className="text-5xl md:text-6xl lg:text-7xl font-black md:font-black tracking-tight leading-[1.1] text-blue-950"
            >
              Alimentez chaque <br />
              <span className="bg-yellow-300 px-2 text-blue-950 inline-block rounded-md">
                projet,
              </span>
              <br /> en toute sécurité.
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              variants={fadeUp}
              initial="initial"
              animate="animate"
              custom={2}
              className="text-lg md:text-xl text-slate-800 leading-relaxed max-w-lg"
            >
              Électriciens agréés pour le câblage, les installations, les
              réparations et les systèmes solaires. Intervention rapide,
              travail certifié et tarifs transparents — pour les maisons
              comme pour les entreprises.
            </motion.p>

            {/* Appels à l’action */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* <Button
                size="lg"
                variant="outline"
                className="group w-full sm:w-auto h-14 px-8 rounded-2xl bg-yellow-300 hover:bg-yellow-400 text-blue-950 font-bold text-base shadow-lg transition-all"
              >
                Obtenir un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button> */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group w-full sm:w-auto h-14 px-8 rounded-2xl bg-yellow-300 hover:bg-yellow-400 text-blue-950 font-bold text-base shadow-lg transition-all"
              >
                <a
                  href="https://wa.me/3247735046?text=Bonjour,%20je%20souhaiterais%20obtenir%20un%20devis%20gratuit."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Obtenir un devis gratuit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group w-full sm:w-auto h-14 md:h-14 px-8 rounded-2xl bg-blue-950 text-yellow-300 hover:bg-blue-950/95 font-semibold text-base md:text-base transition-all"
                onClick={() => setShowVideo(true)}
              >
                Voir nos réalisations
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="relative flex flex-col w-full order-1 lg:order-2"
          >
            <h2 className="lg:hidden text-3xl text-blue-950 font-bold mb-4">
              Bon retour,
            </h2>
            <div className="relative rounded-md overflow-hidden border-2 border-yellow-300 bg-white w-full">
              <div className="hidden lg:block w-full">
                <HeroImageSlide height={420} />
              </div>
              <div className="block lg:hidden w-full">
                <HeroImageSlide height={360} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
