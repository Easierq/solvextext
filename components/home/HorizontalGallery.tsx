"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Wrench,
  Calendar,
  MessageCircle,
  Expand,
  Quote,
} from "lucide-react";

// Indicatif pays + numéro, sans "+" ni espaces
const WHATSAPP_NUMBER = "234XXXXXXXXXX";

const u = (id: string, w = 1000, h = 1100) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop`;

interface Project {
  title: string;
  category: string;
  client: string;
  location: string;
  duration: string;
  scope: string;
  year: number;
  challenge: string;
  solution: string;
  testimonial: string;
  images: string[];
  wMd: string;
}

// const projects: Project[] = [
//   {
//     title: "Full Home Rewiring",
//     category: "Residential",
//     client: "Mr. Adeyemi",
//     location: "Ibadan, Oyo State",
//     duration: "5 days",
//     scope: "Rewiring, sockets & lighting",
//     year: 2026,
//     challenge:
//       "Old, unsafe wiring was causing frequent tripping and posed a fire risk.",
//     solution:
//       "Full rewiring with new cables, a safer consumer unit, and every circuit tested and certified before handover.",
//     testimonial:
//       "Neat work, no mess, and the house finally feels safe. Highly recommended.",
//     images: [
//       u("1621905251189-08b45d6a269e"),
//       u("1544724569-5f546fd6f2b5"),
//       u("1612257911111-074bd8388f88"),
//     ],
//     wMd: "40vw",
//   },
//   {
//     title: "Solar & Inverter Setup",
//     category: "Solar",
//     client: "Mrs. Bello",
//     location: "Lagos",
//     duration: "3 days",
//     scope: "Panels, inverter & batteries",
//     year: 2026,
//     challenge:
//       "Constant power cuts and rising generator costs were hurting the household.",
//     solution:
//       "Rooftop solar with inverter and battery backup sized for the home's daily load.",
//     testimonial:
//       "We barely notice outages now, and our fuel bill has dropped a lot.",
//     images: [
//       u("1613665813446-82a78c468a1d"),
//       u("1783419482520-2f8b80a40369"),
//       u("1635335874521-7987db781153"),
//     ],
//     wMd: "26vw",
//   },
//   {
//     title: "Distribution Board Upgrade",
//     category: "Commercial",
//     client: "Retail Store Owner",
//     location: "Abuja",
//     duration: "2 days",
//     scope: "New breakers & panel",
//     year: 2025,
//     challenge:
//       "An overloaded board kept tripping and shutting down the shop mid-trade.",
//     solution:
//       "Replaced the board with modern breakers, balanced the load and labelled every circuit clearly.",
//     testimonial:
//       "Zero downtime since the upgrade. Professional from start to finish.",
//     images: [
//       u("1544724569-5f546fd6f2b5"),
//       u("1601462904263-f2fa0c851cb9"),
//       u("1758101755915-462eddc23f57"),
//     ],
//     wMd: "36vw",
//   },
//   {
//     title: "Fault Finding & Testing",
//     category: "Repairs",
//     client: "Property Manager",
//     location: "Ibadan, Oyo State",
//     duration: "Same day",
//     scope: "Diagnosis & repair",
//     year: 2026,
//     challenge: "A recurring fault had defeated two earlier attempts to fix it.",
//     solution:
//       "Traced the fault with proper test equipment, repaired it, then verified every connection.",
//     testimonial:
//       "They found in an hour what others couldn't in weeks. Problem solved.",
//     images: [
//       u("1758101755915-462eddc23f57"),
//       u("1615774925655-a0e97fc85c14"),
//       u("1660330589693-99889d60181e"),
//     ],
//     wMd: "24vw",
//   },
//   {
//     title: "Power Line Maintenance",
//     category: "Utility",
//     client: "Community Project",
//     location: "Oyo State",
//     duration: "4 days",
//     scope: "Overhead lines & poles",
//     year: 2025,
//     challenge:
//       "Damaged lines and loose pole connections were causing outages across the area.",
//     solution:
//       "Trained linemen repaired and secured the lines with full safety gear and procedures.",
//     testimonial:
//       "Power was restored quickly and safely. The crew was disciplined and thorough.",
//     images: [
//       u("1595856619767-ab739fa7daae"),
//       u("1597502310092-31cdaa35b46d"),
//       u("1543489816-c87b0f5f7dd4"),
//     ],
//     wMd: "38vw",
//   },
//   {
//     title: "Control Panel Installation",
//     category: "Industrial",
//     client: "Factory Manager",
//     location: "Lagos",
//     duration: "1 week",
//     scope: "Panel wiring & testing",
//     year: 2025,
//     challenge:
//       "The site needed a reliable control panel that maintenance staff could service easily.",
//     solution:
//       "Neat, fully labelled panel wiring built for reliability and simple future maintenance.",
//     testimonial:
//       "The cleanest panel work we've had on site. Easy to maintain and rock solid.",
//     images: [
//       u("1783419482520-2f8b80a40369"),
//       u("1635335874521-7987db781153"),
//       u("1646640381839-02748ae8ddf0"),
//     ],
//     wMd: "28vw",
//   },
// ];

const projects: Project[] = [
  {
    title: "Recâblage complet d’une maison",
    category: "Résidentiel",
    client: "M. Peeters",
    location: "Ixelles, Bruxelles",
    duration: "5 jours",
    scope: "Recâblage, prises et éclairage",
    year: 2026,
    challenge:
      "Un câblage ancien et dangereux provoquait des coupures fréquentes et présentait un risque d’incendie.",
    solution:
      "Recâblage complet avec de nouveaux câbles, un tableau plus sûr et chaque circuit testé et certifié avant la remise des travaux.",
    testimonial:
      "Travail soigné, aucun désordre et la maison est enfin sûre. Je recommande vivement.",
    images: [
      u("1621905251189-08b45d6a269e"),
      u("1544724569-5f546fd6f2b5"),
      u("1612257911111-074bd8388f88"),
    ],
    wMd: "40vw",
  },
  {
    title: "Installation solaire et onduleur",
    category: "Solar",
    client: "Mme Janssens",
    location: "Uccle, Bruxelles",
    duration: "3 jours",
    scope: "Panneaux, onduleur et batteries",
    year: 2026,
    challenge:
      "La hausse des factures d’énergie et l’absence d’alimentation de secours pénalisaient le foyer.",
    solution:
      "Installation solaire sur toiture avec onduleur et batteries de secours dimensionnées selon les besoins quotidiens de la maison.",
    testimonial:
      "Notre facture d’énergie a beaucoup baissé et nous remarquons à peine les coupures désormais.",
    images: [
      u("1613665813446-82a78c468a1d"),
      u("1783419482520-2f8b80a40369"),
      u("1635335874521-7987db781153"),
    ],
    wMd: "26vw",
  },
  {
    title: "Mise à niveau du tableau électrique",
    category: "Commercial",
    client: "M. Dubois, propriétaire de boutique",
    location: "Schaerbeek, Bruxelles",
    duration: "2 jours",
    scope: "Nouveaux disjoncteurs et tableau",
    year: 2025,
    challenge:
      "Un tableau surchargé disjonctait continuellement et interrompait l’activité du commerce.",
    solution:
      "Remplacement du tableau par des disjoncteurs modernes, équilibrage de la charge et étiquetage clair de chaque circuit.",
    testimonial:
      "Aucune interruption depuis la mise à niveau. Un service professionnel du début à la fin.",
    images: [
      u("1544724569-5f546fd6f2b5"),
      u("1601462904263-f2fa0c851cb9"),
      u("1758101755915-462eddc23f57"),
    ],
    wMd: "36vw",
  },
  {
    title: "Diagnostic de pannes et tests",
    category: "Réparations",
    client: "Mme Lambert, gestionnaire immobilière",
    location: "Saint-Gilles, Bruxelles",
    duration: "Le jour même",
    scope: "Diagnostic et réparation",
    year: 2026,
    challenge:
      "Une panne récurrente avait résisté à deux tentatives de réparation précédentes.",
    solution:
      "Localisation de la panne avec un équipement de test adapté, réparation puis vérification de chaque connexion.",
    testimonial:
      "Ils ont trouvé en une heure ce que d’autres n’avaient pas trouvé en plusieurs semaines. Problème résolu.",
    images: [
      u("1758101755915-462eddc23f57"),
      u("1615774925655-a0e97fc85c14"),
      u("1660330589693-99889d60181e"),
    ],
    wMd: "24vw",
  },
  {
    title: "Maintenance des lignes électriques",
    category: "Réseau électrique",
    client: "Commune d'Anderlecht",
    location: "Anderlecht, Bruxelles",
    duration: "4 jours",
    scope: "Lignes aériennes et poteaux",
    year: 2025,
    challenge:
      "Des lignes endommagées et des connexions de poteaux desserrées provoquaient des coupures dans toute la zone.",
    solution:
      "Des techniciens qualifiés ont réparé et sécurisé les lignes avec l’équipement et les procédures de sécurité requis.",
    testimonial:
      "L’alimentation a été rétablie rapidement et en toute sécurité. L’équipe était rigoureuse et minutieuse.",
    images: [
      u("1595856619767-ab739fa7daae"),
      u("1597502310092-31cdaa35b46d"),
      u("1543489816-c87b0f5f7dd4"),
    ],
    wMd: "38vw",
  },
  {
    title: "Installation d’un panneau de commande",
    category: "Industrial",
    client: "M. Claes, directeur d’usine",
    location: "Forest, Bruxelles",
    duration: "1 semaine",
    scope: "Câblage et test du panneau",
    year: 2025,
    challenge:
      "Le site nécessitait un panneau de commande fiable, facile à entretenir par le personnel de maintenance.",
    solution:
      "Câblage soigné et entièrement étiqueté, conçu pour la fiabilité et une maintenance future simplifiée.",
    testimonial:
      "Le travail de panneau le plus soigné que nous ayons eu sur le site. Facile à entretenir et extrêmement fiable.",
    images: [
      u("1783419482520-2f8b80a40369"),
      u("1635335874521-7987db781153"),
      u("1646640381839-02748ae8ddf0"),
    ],
    wMd: "28vw",
  },
];
export default function HorizontalGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const [projectIndex, setProjectIndex] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const active = projectIndex !== null ? projects[projectIndex] : null;

  const openProject = (i: number) => {
    setProjectIndex(i);
    setImageIndex(0);
  };
  const close = () => setProjectIndex(null);

  const nextImage = () =>
    setImageIndex((i) => (active ? (i + 1) % active.images.length : i));
  const prevImage = () =>
    setImageIndex((i) =>
      active ? (i - 1 + active.images.length) % active.images.length : i,
    );

  // Défilement horizontal
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const distance = track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -distance,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${distance}`,
        scrub: 1,
        pin: true,
        animation: tween,
        invalidateOnRefresh: true,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // Verrouillage du clavier et du défilement lorsque la fenêtre est ouverte
  useEffect(() => {
    if (projectIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectIndex]);

  // Prise en charge du balayage sur les appareils tactiles
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) nextImage();
      else prevImage();
    }
    touchStartX.current = null;
  };

  const handleBook = (project: Project) => {
    const message = `Bonjour, j’ai vu votre projet « ${project.title} » et je souhaiterais réaliser des travaux similaires. Merci de me communiquer vos disponibilités et un devis.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="relative h-screen overflow-hidden text-black flex flex-col"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:56px_56px]" />

        <div className="relative z-10 shrink-0 px-6 md:px-10 pt-8 md:pt-10 pb-6 md:pb-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] text-blue-950">
              Nos réalisations{" "}
              <span className="bg-yellow-300 px-2 rounded-md inline-block">
                récentes
              </span>
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              De vrais projets, réalisés en toute sécurité. Faites défiler pour
              explorer, puis sélectionnez un projet pour voir les détails.
            </p>
          </div>
        </div>

        <div className="relative flex-1 min-h-0 pb-8 md:pb-10 pl-6 md:pl-10">
          <div
            ref={trackRef}
            className="flex items-center h-full w-max gap-5 md:gap-6 will-change-transform"
          >
            {projects.map((p, i) => (
              <button
                key={p.title}
                type="button"
                onClick={() => openProject(i)}
                aria-label={`Voir ${p.title}`}
                style={{ "--md-width": p.wMd } as React.CSSProperties}
                className="group relative flex-shrink-0 w-[78vw] sm:w-[340px] md:w-[var(--md-width)] h-full max-h-[540px] rounded-2xl overflow-hidden text-left shadow-lg hover:shadow-2xl transition-shadow cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300"
              >
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <span className="absolute top-4 left-4 bg-yellow-300 text-blue-950 text-xs font-bold px-3 py-1 rounded-full shadow">
                  {p.category}
                </span>

                <span className="absolute top-4 right-4 bg-blue-950 text-yellow-300 p-2 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <Expand className="w-4 h-4" />
                </span>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-white text-lg md:text-xl font-bold leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-yellow-300 text-sm mt-1 font-medium">
                    Voir le projet
                  </p>
                </div>
              </button>
            ))}
            <div className="flex-shrink-0 w-[10vw]" />
          </div>
        </div>
      </section>

      {/* Fenêtre modale */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="project-modal"
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 lg:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            {/* Arrière-plan */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={close}
            />

            {/* Panneau */}
            <motion.div
              className="relative w-full max-w-7xl max-h-[96dvh] lg:h-[88vh] bg-blue950text-blue-950 text-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-y-auto lg:overflow-hidden grid grid-cols-1 lg:grid-cols-3"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.3 }}
            >
              {/* Fermer */}
              <button
                onClick={close}
                aria-label="Fermer"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 bg-yellow-300 hover:bg-yellow-400 text-blue-950 p-2 sm:p-2.5 rounded-full shadow-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Colonne de galerie */}
              <div className="lg:col-span-2 flex flex-col bg-black min-h-0">
                <div
                  className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:flex-1 min-h-0"
                  onTouchStart={onTouchStart}
                  onTouchEnd={onTouchEnd}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={active.images[imageIndex]}
                      src={active.images[imageIndex]}
                      alt={`${active.title} – photo ${imageIndex + 1}`}
                      className="absolute inset-0 w-full h-full object-contain"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      draggable={false}
                    />
                  </AnimatePresence>

                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-yellow-300 text-blue-950 text-xs font-bold px-3 py-1 rounded-full shadow">
                    {active.category}
                  </span>

                  {/* Flèches */}
                  <button
                    onClick={prevImage}
                    aria-label="Photo précédente"
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
                  </button>
                  <button
                    onClick={nextImage}
                    aria-label="Photo suivante"
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
                  </button>

                  {/* Compteur */}
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-xs sm:text-sm px-3 py-1 rounded-full">
                    {imageIndex + 1} / {active.images.length}
                  </span>
                </div>

                {/* Miniatures */}
                <div className="flex gap-2 sm:gap-3 p-3 sm:p-4 overflow-x-auto bg-neutral-950">
                  {active.images.map((img, i) => (
                    <button
                      key={img + i}
                      onClick={() => setImageIndex(i)}
                      aria-label={`Afficher la photo ${i + 1}`}
                      className={`relative flex-shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        i === imageIndex
                          ? "border-yellow-300 opacity-100"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Colonne des détails */}
              <div className="p-5 sm:p-6 lg:p-8 lg:overflow-y-auto min-h-0 hidden-scrollbar">
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight mb-5 pr-10 lg:pr-0">
                  <span className="text-white px-2 rounded-md box-decoration-clone">
                    {active.title}
                  </span>
                </h3>

                {/* Informations clés */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: MapPin, label: "Lieu", value: active.location },
                    { icon: Clock, label: "Durée", value: active.duration },
                    { icon: Wrench, label: "Portée", value: active.scope },
                    {
                      icon: Calendar,
                      label: "Année",
                      value: String(active.year),
                    },
                  ].map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="bg-white/5 border border-white/10 rounded-xl p-3"
                    >
                      <div className="flex items-center gap-1.5 text-yellow-300 text-xs font-semibold mb-1">
                        <Icon className="w-3.5 h-3.5" />
                        {label}
                      </div>
                      <p className="text-sm font-medium text-white leading-snug">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-5 mb-6 pb-6 border-b border-white/15">
                  <div>
                    <h4 className="font-bold text-yellow-300 mb-1.5">
                      Le défi
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {active.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-yellow-300 mb-1.5">
                      Notre solution
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {active.solution}
                    </p>
                  </div>
                </div>

                {/* Témoignage */}
                <div className="relative bg-yellow-300/10 border border-yellow-300/30 rounded-xl p-4 mb-6">
                  <Quote className="w-5 h-5 text-yellow-300 mb-2" />
                  <p className="text-sm italic text-gray-200 leading-relaxed">
                    “{active.testimonial}”
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    — {active.client}
                  </p>
                </div>

                <button
                  onClick={() => handleBook(active)}
                  className="w-full bg-yellow-300 hover:bg-yellow-400 text-blue-950 font-bold py-3.5 sm:py-4 rounded-2xl shadow-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                  Réserver un projet similaire
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
