"use client";
import {
  CheckCircle,
  Users,
  Clock,
  Award,
  ShieldCheck,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

// Indicatif pays + numéro, sans "+" ni espaces
const WHATSAPP_NUMBER = "234XXXXXXXXXX";

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Électricien certifié",
      description:
        "Formé, qualifié et expérimenté dans les travaux résidentiels et commerciaux",
    },
    {
      icon: Clock,
      title: "Intervention rapide",
      description: "Déplacements rapides et travaux terminés dans les délais",
    },
    {
      icon: ShieldCheck,
      title: "La sécurité avant tout",
      description:
        "Chaque intervention respecte des normes strictes de sécurité et de contrôle",
    },
    {
      icon: Users,
      title: "Agréés et assurés",
      description: "Équipe pleinement agréée avec une assurance complète",
    },
  ];

  const highlights = [
    {
      title: "Matériaux de qualité",
      description: "Uniquement des câbles, disjoncteurs et raccords fiables.",
    },
    {
      title: "Tarifs transparents",
      description: "Des devis clairs dès le départ, sans frais cachés.",
    },
    {
      title: "Garantie sur les travaux",
      description: "Chaque installation est couverte par notre garantie.",
    },
  ];

  const stats = [
    { number: "10+", label: "Années d’expérience" },
    { number: "500+", label: "Projets réalisés" },
    { number: "15", label: "Électriciens experts" },
    { number: "4.9", label: "Note moyenne" },
  ];

  const handleContact = () => {
    const message =
      "Bonjour, j’aimerais parler à un électricien au sujet d’un projet.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="container px-6 max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
          {/* Contenu de gauche */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 bg-yellow-300 text-neutral-900 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
              À propos de notre entreprise
            </span>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-blue-950 leading-[1.1] mb-6">
              Votre partenaire{" "}
              <span className="bg-yellow-300 px-2 rounded-md inline-block">
                électrique
              </span>{" "}
              de confiance
            </h2>

            <p className="text-slate-700 text-lg leading-relaxed mb-5">
              Depuis plus de dix ans, nous alimentons maisons, commerces et
              bureaux grâce à des travaux électriques sûrs et fiables. Du
              câblage aux installations, en passant par le solaire et les
              réparations, nous nous engageons à fournir un travail de qualité
              et un service honnête.
            </p>

            <p className="text-slate-700 text-lg leading-relaxed mb-8">
              Nos électriciens certifiés associent des techniques éprouvées à
              des équipements modernes pour réaliser des installations sûres,
              efficaces et conçues pour durer.
            </p>

            <div className="space-y-4 mb-10">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-blue-950">{item.title}</h4>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="inline-flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-neutral-900 font-bold px-8 h-14 rounded-2xl shadow-lg transition-all"
            >
              <a href="tel:+32477350461">
                <Phone className="w-5 h-5" />
                Parler à un électricien
              </a>
            </Button>
          </motion.div>

          {/* Image de droite */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl bg-yellow-300" />
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=700&fit=crop"
                alt="Électricien installant un câblage"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Grille des avantages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-3 sm:p-6 bg-yellow-50/50 rounded-2xl border border-yellow-200 hover:border-yellow-300 hover:bg-yellow-50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-yellow-300 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:rotate-6 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-neutral-900" />
                </div>
                <h3 className="hidden sm:block text-base sm:text-lg font-bold text-blue-950 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-yellow-100 rounded-3xl p-6 md:p-14 shadow-xl"
        >
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-neutral-900/20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center px-4 py-4"
              >
                <div className="text-5xl md:text-6xl font-black tracking-tight text-blue-950 mb-2">
                  {stat.number}
                </div>
                <div className="inline-block bg-blue-950 text-yellow-300 text-xs md:text-sm font-semibold px-3 py-1 rounded-full">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
