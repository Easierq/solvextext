// import React from "react";
// import { Instagram } from "lucide-react";
// import { SITE_NAME } from "@/lib/constants";

// export const InstagramFeed = () => {
//   const instagramPosts = [
//     "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300&h=300&fit=crop",
//     "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&h=300&fit=crop",
//     "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=300&h=300&fit=crop",
//     "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
//     "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=300&h=300&fit=crop",
//     "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=300&h=300&fit=crop",
//   ];

//   return (
//     <section className="py-16 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">
//             Follow Us on <span className="text-green-600">Instagram</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
//             Get daily inspiration and see how our customers style their homes
//           </p>
//           <a
//             href="#"
//             className="inline-flex items-center text-green-600 hover:text-green-700 font-bold text-lg"
//           >
//             <Instagram className="w-6 h-6 mr-2" />@{SITE_NAME}
//           </a>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//           {instagramPosts.map((image, index) => (
//             <div
//               key={index}
//               className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
//             >
//               <img
//                 src={image}
//                 alt={`Instagram post ${index + 1}`}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
//                 <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, ArrowUpRight, Zap } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

// Replace with your client's Instagram profile
const INSTAGRAM_URL = "https://instagram.com/";

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=700&h=700&fit=crop`;

const instagramPosts = [
  {
    image: u("1621905251189-08b45d6a269e"),
    caption: "Fresh rewiring job, tested and certified",
  },
  { image: u("1544724569-5f546fd6f2b5"), caption: "Panel upgrade done right" },
  { image: u("1613665813446-82a78c468a1d"), caption: "Solar install complete" },
  { image: u("1758101755915-462eddc23f57"), caption: "Testing every circuit" },
  { image: u("1595856619767-ab739fa7daae"), caption: "Line maintenance crew" },
];

export const InstagramFeed = () => {
  const handle = `@${SITE_NAME.toLowerCase()}`;

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-300 px-4 py-1.5 text-sm font-bold text-neutral-900">
            <Instagram className="h-4 w-4" />
            Instagram
          </span>

          <h2 className="mb-4 text-4xl font-black tracking-tight text-blue-950 md:text-5xl">
            Follow Our{" "}
            <span className="inline-block rounded-md bg-yellow-300 px-2">
              Work
            </span>
          </h2>

          <p className="mx-auto mb-7 max-w-2xl text-lg text-slate-600 md:text-xl">
            See our latest jobs, safety tips and behind-the-scenes from the
            field.
          </p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-2xl bg-neutral-900 px-7 py-3.5 font-bold text-yellow-300 shadow-lg transition-colors hover:bg-neutral-800"
          >
            <Instagram className="h-5 w-5" />
            {handle}
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Bento grid: one big tile + four small */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.image}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View on Instagram: ${post.caption}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative aspect-square overflow-hidden rounded-2xl shadow-md transition-shadow hover:shadow-2xl ${
                index === 0 ? "col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.caption}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-yellow-300/0 p-4 text-center opacity-0 transition-all duration-300 group-hover:bg-yellow-300/90 group-hover:opacity-100">
                <span className="rounded-full bg-neutral-900 p-3 text-yellow-300">
                  <Instagram className={index === 0 ? "h-8 w-8" : "h-6 w-6"} />
                </span>
                <p
                  className={`font-bold text-neutral-900 ${
                    index === 0 ? "text-lg" : "text-sm"
                  }`}
                >
                  {post.caption}
                </p>
              </div>

              {/* Corner bolt */}
              <span className="absolute left-3 top-3 rounded-full bg-yellow-300 p-1.5 text-neutral-900 shadow">
                <Zap className="h-3.5 w-3.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
