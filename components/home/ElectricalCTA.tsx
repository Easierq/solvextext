"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  ShieldCheck,
  Clock,
  BadgeCheck,
} from "lucide-react";

// Country code + number, no "+" or spaces
const WHATSAPP_NUMBER = "234XXXXXXXXXX";
const PHONE_NUMBER = "+234XXXXXXXXXX";

const perks = [
  { icon: Clock, text: "24/7 emergency service" },
  { icon: ShieldCheck, text: "Licensed & insured" },
  { icon: BadgeCheck, text: "Free, honest quotes" },
];

export default function ElectricalCTA({
  eyebrow = "Need an electrician?",
  title = "Let's power your next project, safely.",
  body = "Tell us what you need and get a free quote fast. Certified electricians, clear pricing, and work that is built to last.",
  ctaLabel = "Get a Free Quote",
  callLabel = "Call Us Now",
  marqueeText = "POWER YOUR PROJECT",
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
      "Hello, I'd like a free quote for an electrical job. Please get back to me.";
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
              alt="Electrician at work"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-yellow-300/20" />

            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 rounded-2xl bg-blue-950 text-white px-5 py-3 shadow-xl">
              <p className="text-3xl font-black text-yellow-300 leading-none">
                24/7
              </p>
              <p className="text-xs text-neutral-300 mt-1">
                Emergency callouts
              </p>
            </div>
          </motion.div>

          {/* Content */}
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
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-950 text-yellow-300 px-7 h-14 text-base font-bold shadow-lg hover:bg-neutral-800 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                {ctaLabel}
              </motion.button>

              <motion.a
                href={`tel:${PHONE_NUMBER}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-blue-950 text-blue-950 px-7 h-14 text-base font-bold hover:bg-blue-950 hover:text-yellow-300 transition-colors"
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
