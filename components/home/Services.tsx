"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Sun,
  Lightbulb,
  ShieldCheck,
  Zap,
  ChevronRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "residential-wiring",
      name: "Câblage résidentiel",
      icon: Home,
      description:
        "Constructions neuves, recâblage, prises et interrupteurs pour votre maison",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop",
    },
    {
      id: "commercial",
      name: "Installations commerciales",
      icon: Building2,
      description:
        "Tableaux de distribution et systèmes électriques pour bureaux et commerces",
      image:
        "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=400&h=300&fit=crop",
    },
    {
      id: "solar",
      name: "Solaire et onduleurs",
      icon: Sun,
      description:
        "Installation de panneaux solaires, d’onduleurs et de batteries pour une alimentation stable",
      image:
        "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=400&h=300&fit=crop",
    },
    {
      id: "lighting",
      name: "Installation d’éclairage",
      icon: Lightbulb,
      description:
        "Éclairage intérieur, extérieur et de sécurité installé dans les règles de l’art",
      image:
        "https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?w=400&h=300&fit=crop",
    },
    {
      id: "repairs",
      name: "Diagnostic de pannes et réparations",
      icon: ShieldCheck,
      description:
        "Diagnostic rapide des pannes, disjoncteurs qui sautent et coupures de courant",
      image:
        "https://images.unsplash.com/photo-1758101755915-462eddc23f57?w=400&h=300&fit=crop",
    },
    {
      id: "power-lines",
      name: "Maintenance des lignes électriques",
      icon: Zap,
      description:
        "Lignes aériennes, poteaux et raccordements au réseau électrique",
      image:
        "https://images.unsplash.com/photo-1595856619767-ab739fa7daae?w=400&h=300&fit=crop",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-12  relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="container px-6 max-w-7xl mx-auto w-full relative">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-950 mb-4">
            Nos{" "}
            <span className="bg-yellow-300 px-2 text-blue-950 rounded-md">
              services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Des travaux électriques sûrs et certifiés pour chaque maison et
            entreprise
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Link
                  // href={`/contact?service=${encodeURIComponent(service.name)}`}
                  href="/"
                >
                  <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>

                      {/* Badge d’icône */}
                      {/* <div className="absolute top-4 right-4 bg-yellow-300 text-neutral-900 p-3 rounded-full shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div> */}
                    </div>

                    {/* Contenu */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-200 text-sm mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center bg-blue-950 p-2 rounded-md w-max text-yellow-300 transition-colors">
                        <span className="font-medium">Réserver maintenant</span>
                        <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
