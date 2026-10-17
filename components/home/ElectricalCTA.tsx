"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  ShieldCheck,
  Clock,
  BadgeCheck,
} from "lucide-react";

// Indicatif pays + numéro, sans "+" ni espaces
const WHATSAPP_NUMBER = "234XXXXXXXXXX";
const PHONE_NUMBER = "+234XXXXXXXXXX";

const perks = [
  { icon: Clock, text: "Service d’urgence 24 h/24, 7 j/7" },
  { icon: ShieldCheck, text: "Agréés et assurés" },
  { icon: BadgeCheck, text: "Devis gratuits et honnêtes" },
];

export default function ElectricalCTA({
  eyebrow = "Besoin d’un électricien ?",
  title = "Donnons vie à votre prochain projet, en toute sécurité.",
  body = "Dites-nous ce dont vous avez besoin et obtenez rapidement un devis gratuit. Électriciens certifiés, tarifs clairs et travail durable.",
  ctaLabel = "Obtenir un devis gratuit",
  callLabel = "Appelez-nous maintenant",
  marqueeText = "ALIMENTEZ VOTRE PROJET",
  imageSrc = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&h=1000&fit=crop",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  ctaLabel?: string;
  callLabel?: string;
  marqueeText?: string;
  imageSrc?: string;
}) {
  const loop = Array(6).fill(marqueeText).join("  ⚡  ") + "  ⚡  ";

  const handleQuote = () => {
    const message =
      "Bonjour, je souhaiterais un devis gratuit pour des travaux électriques. Merci de me recontacter.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 md:px-10">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden bg-yellow-300 shadow-xl">
        <div className="relative grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[260px] sm:h-[320px] md:h-auto md:min-h-[520px] overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt="Électricien au travail"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-yellow-300/20" />

            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 rounded-2xl bg-blue-950 text-white px-5 py-3 shadow-xl">
              <p className="text-3xl font-black text-yellow-300 leading-none">
                24/7
              </p>
              <p className="text-xs text-neutral-300 mt-1">
                Interventions d’urgence
              </p>
            </div>
          </motion.div>

          {/* Contenu */}
          <div className="p-7 sm:p-10 md:p-14 flex flex-col justify-center text-blue-950">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-black tracking-tight leading-[1.1] mb-5"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-neutral-800 text-base md:text-lg leading-relaxed mb-6 max-w-md"
            >
              {body}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-wrap gap-x-5 gap-y-2 mb-8"
            >
              {perks.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-2 text-sm font-semibold"
                >
                  <Icon className="h-4 w-4" />
                  {text}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.button
                onClick={handleQuote}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-950 text-yellow-300 px-5 h-14 text-base font-medium shadow-lg hover:bg-blue-950 transition-colors"
              >
                <svg
                  viewBox="0 0 32 32"
                  className="relative h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M16.003 3C8.83 3 3 8.83 3 16c0 2.29.6 4.52 1.74 6.49L3 29l6.7-1.72A12.94 12.94 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16.003 3Zm0 23.7c-1.95 0-3.86-.52-5.53-1.5l-.4-.23-3.98 1.02 1.06-3.88-.26-.4A10.67 10.67 0 0 1 5.3 16c0-5.9 4.8-10.7 10.7-10.7S26.7 10.1 26.7 16 21.9 26.7 16.003 26.7Zm5.87-8c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.21.32-.84 1.05-1.03 1.26-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.68 0 1.58 1.15 3.1 1.31 3.32.16.21 2.26 3.45 5.48 4.84.77.33 1.37.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.62-.37Z" />
                </svg>
                {ctaLabel}
              </motion.button>

              <motion.a
                href={`tel:${PHONE_NUMBER}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-blue-950 text-blue-950 px-5 h-14 text-base font-medium hover:bg-blue-950 hover:text-yellow-300 transition-colors"
              >
                <Phone className="h-5 w-5" />
                {callLabel}
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
