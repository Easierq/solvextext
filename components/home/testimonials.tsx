"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  testimonial: string;
  featured?: boolean;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Propriétaire",
    avatar: "https://mockmind-api.uifaces.co/content/human/97.jpg",
    testimonial:
      "Le courant sautait tous les soirs. Ils ont trouvé le circuit défectueux en moins d’une heure et l’ont réparé le jour même.",
  },
  {
    name: "Daniel Kim",
    role: "Propriétaire, cuisine Kim",
    avatar: "https://mockmind-api.uifaces.co/content/human/80.jpg",
    testimonial:
      "Ils ont refait le câblage de notre cuisine de restaurant pendant un week-end, sans interrompre le service. L’équipe était soignée, ponctuelle et m’a expliqué chaque modification. Notre alimentation est stable depuis.",
    featured: true,
  },
  {
    name: "Emily Chen",
    role: "Gestionnaire immobilier",
    avatar: "https://mockmind-api.uifaces.co/content/human/113.jpg",
    testimonial:
      "Je gère douze logements locatifs et je les appelle pour chaque problème électrique. Ils interviennent vite, établissent des devis honnêtes et les certificats sont toujours prêts pour les inspecteurs. Je ne ferais appel à personne d’autre.",
  },
  {
    name: "Raj Mehta",
    role: "Rénovateur de maisons",
    avatar: "https://mockmind-api.uifaces.co/content/human/90.jpg",
    testimonial: "Câblage soigné, prix juste et aucun désordre laissé derrière eux.",
  },
  {
    name: "Aisha Patel",
    role: "Propriétaire",
    avatar: "https://mockmind-api.uifaces.co/content/human/116.jpg",
    testimonial: "Ils ont installé notre nouvel éclairage en une journée. Le résultat est superbe !",
  },
  {
    name: "Liam Garcia",
    role: "Propriétaire d’atelier",
    avatar: "https://mockmind-api.uifaces.co/content/human/112.jpg",
    testimonial:
      "J’avais besoin d’un nouveau tableau et d’une alimentation triphasée pour mes machines. Ils ont expliqué clairement les options, terminé dans les délais et le devis correspondait à la facture finale. Un travail sûr et soigné du début à la fin.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const headerItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

const reduced: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
};

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
    >
      <path d="M13.5 6C7.7 8.1 4 12.9 4 19.2V26h9.5v-9.5H9.2c.2-3.2 1.9-5.4 5.1-6.7L13.5 6Zm14.5 0c-5.8 2.1-9.5 6.9-9.5 13.2V26H28v-9.5h-4.3c.2-3.2 1.9-5.4 5.1-6.7L28 6Z" />
    </svg>
  );
}

function Card({
  item,
  shouldReduce,
}: {
  item: Testimonial;
  shouldReduce: boolean;
}) {
  const { name, avatar, role, testimonial, featured } = item;

  return (
    <motion.figure
      variants={shouldReduce ? reduced : cardItem}
      whileHover={shouldReduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group mb-6 break-inside-avoid rounded-2xl border p-1.5 transition-colors duration-300 ${
        featured
          ? "border-yellow-300/40 bg-yellow-300/10"
          : "border-white/10 bg-white/[0.04] hover:border-yellow-300/50"
      }`}
    >
      <div
        className={`relative flex flex-col overflow-hidden rounded-xl px-6 pt-8 pb-4 ${
          featured
            ? "bg-yellow-300 text-blue-950"
            : "border border-white/10 bg-blue-950 text-white"
        }`}
      >
        <QuoteIcon
          className={`size-9 ${featured ? "text-blue-950" : "text-yellow-300"}`}
        />

        <blockquote
          className={`grow py-6 font-medium text-balance ${
            featured
              ? "text-xl leading-snug sm:text-2xl"
              : "text-lg leading-relaxed"
          }`}
        >
          {testimonial}
        </blockquote>

        <figcaption className="mt-2 flex items-center gap-3 py-3.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatar}
            alt={`Portrait de ${name}`}
            loading="lazy"
            decoding="async"
            className={`size-12 rounded-full object-cover ring-2 ring-offset-2 transition-colors duration-300 ${
              featured
                ? "ring-blue-950 ring-offset-yellow-300"
                : "ring-white/20 ring-offset-blue-950 group-hover:ring-yellow-300"
            }`}
          />
          <div className="flex flex-col">
            <span className="font-semibold">{name}</span>
            <span
              className={`text-sm ${
                featured ? "text-blue-950/70" : "text-blue-200/70"
              }`}
            >
              {role}
            </span>
          </div>
        </figcaption>
      </div>
    </motion.figure>
  );
}

export function Testimonials() {
  const shouldReduce = useReducedMotion() ?? false;

  return (
    <section className="bg-blue-950 text-white selection:bg-yellow-300 selection:text-blue-950">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto max-w-(--breakpoint-xl) px-6 py-12 sm:py-16 mt-8"
      >
        {/* Titre */}
        <div className="mx-auto max-w-5xl">
          <motion.h2
            variants={shouldReduce ? reduced : headerItem}
            className="text-4xl font-black leading-[1.1] tracking-tight text-balance md:text-5xl lg:text-6xl"
          >
            La confiance des maisons et des{" "}
            <span className="inline-block rounded-md bg-yellow-300 px-2 text-blue-950">
              entreprises
            </span>
          </motion.h2>

          <motion.p
            variants={shouldReduce ? reduced : headerItem}
            className="mt-4 max-w-xl text-lg text-blue-200/80 sm:mt-5 sm:text-xl"
          >
            Des travaux électriques sûrs et fiables que nos clients recommandent
          </motion.p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl columns-1 gap-6 sm:columns-2 lg:columns-3">
          {testimonials.map((item) => (
            <Card key={item.name} item={item} shouldReduce={shouldReduce} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
