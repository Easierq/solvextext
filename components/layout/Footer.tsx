"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Zap,
  ShieldCheck,
  Clock,
  BadgeCheck,
  ArrowUp,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Logo } from "./logo";
import { SITE_NAME } from "@/lib/constants";

// Indicatif pays + numéro, sans "+" ni espaces
const WHATSAPP_NUMBER = "234XXXXXXXXXX";

const features = [
  {
    icon: Clock,
    title: "Service d’urgence 24 h/24, 7 j/7",
    text: "Toujours disponible",
  },
  {
    icon: ShieldCheck,
    title: "Agréés et assurés",
    text: "Électriciens certifiés",
  },
  {
    icon: BadgeCheck,
    title: "Devis gratuits",
    text: "Tarifs clairs et honnêtes",
  },
  {
    icon: Zap,
    title: "Garantie de qualité",
    text: "Travail sûr et conforme aux normes",
  },
];

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const quickLinks = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Réparations d’urgence", href: "/" },
  { name: "Certifications", href: "/" },
  { name: "Blog", href: "/" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { label: "Câblage résidentiel", href: "/" },
  { label: "Électricité commerciale", href: "/" },
  { label: "Mise à niveau des tableaux électriques", href: "/" },
  { label: "Installation d’éclairage", href: "/" },
  { label: "Solaire et onduleurs", href: "/" },
  { label: "Réparations d’urgence", href: "/" },
];

const legalLinks = [
  { label: "Politique de confidentialité", href: "/privacy" },
  { label: "Conditions d’utilisation", href: "/terms" },
  { label: "Politique relative aux cookies", href: "/cookies" },
];

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    const message =
      "Bonjour, j’ai besoin d’un électricien. Merci de me recontacter.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO : connecter au service de lettre d’information
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden bg-yellow-300 text-neutral-900">
      <div className="relative container px-6 max-w-7xl mx-auto w-full pt-14">
        {/* ── Grille principale ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14">
          {/* Informations sur l’entreprise */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Logo />
            </div>
            <p className="text-neutral-800 mb-6 leading-relaxed max-w-md">
              Des solutions électriques sûres et fiables pour les maisons et les
              entreprises. Des nouvelles installations aux réparations
              d’urgence, nos électriciens certifiés alimentent votre quotidien
              avec une qualité digne de confiance.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex gap-3 mb-8">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-950 text-yellow-300 hover:bg-blue-900 hover:text-yellow-200 hover:-translate-y-1 transition-all"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Lettre d’information */}
            <div>
              <h4 className="font-bold mb-3">
                Recevez des conseils de sécurité électrique et des offres
              </h4>
              <form
                onSubmit={handleSubscribe}
                className="flex max-w-md items-center gap-2 rounded-2xl bg-white p-1.5 shadow-lg"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse e-mail"
                  className="min-w-0 flex-1 bg-transparent px-4 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-950 px-5 py-2.5 font-semibold text-yellow-300 hover:bg-blue-900 transition-colors"
                >
                  S’abonner
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-black mb-5">Liens rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-neutral-800 hover:text-black font-medium transition-colors"
                  >
                    <span className="h-0.5 w-0 bg-neutral-900 group-hover:w-3 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-black mb-5">Nos services</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-neutral-800 hover:text-black font-medium transition-colors"
                  >
                    <span className="h-0.5 w-0 bg-neutral-900 group-hover:w-3 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordonnées */}
          <div>
            <h3 className="text-lg font-black mb-5">Contactez-nous</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a
                  href="tel:+32477350461"
                  className="text-neutral-800 hover:text-black font-medium transition-colors"
                >
                  +32 477 3504 6
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a
                  href={`mailto:support@${SITE_NAME.toLowerCase()}.com`}
                  className="break-all text-neutral-800 hover:text-black font-medium transition-colors"
                >
                  support@{SITE_NAME.toLowerCase()}.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-bold mb-2">Heures d’ouverture</h4>
              <div className="text-sm text-neutral-800 space-y-1">
                <p>Lun. - Ven. : 8 h 00 - 18 h 00</p>
                <p>Sam. : 9 h 00 - 16 h 00</p>
                <p className="font-bold">Urgences : 24 h/24, 7 j/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Barre inférieure ── */}
      <div className="relative bg-blue-950">
        <div className="px-[3%] lg:px-[7%] max-w-[1440px] mx-auto py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm text-center md:text-left">
              © {new Date().getFullYear()} {SITE_NAME}. Tous droits réservés.
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white hover:text-yellow-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bouton de retour en haut */}
      {/* {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Retour en haut"
          className="fixed bottom-6 right-6 z-30 rounded-full bg-blue-950 p-3 text-yellow-300 shadow-xl ring-2 ring-yellow-300 transition-all hover:scale-110 hover:bg-neutral-800"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )} */}
    </footer>
  );
};
