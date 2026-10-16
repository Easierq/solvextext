"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { X, Zap, Palette, CheckCircle } from "lucide-react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      category: "Living Spaces",
      images: [
        {
          url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop",
          title: "Modern Living Room",
        },
        {
          url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop",
          title: "Luxury Lounge",
        },
        {
          url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=400&fit=crop",
          title: "Contemporary Space",
        },
      ],
    },
    {
      category: "Bedrooms",
      images: [
        {
          url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop",
          title: "Master Suite",
        },
        {
          url: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600&h=400&fit=crop",
          title: "Elegant Bedroom",
        },
        {
          url: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600&h=400&fit=crop",
          title: "Serene Retreat",
        },
      ],
    },
    {
      category: "Kitchens & Dining",
      images: [
        {
          url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop",
          title: "Modern Kitchen",
        },
        {
          url: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=400&fit=crop",
          title: "Chef's Kitchen",
        },
        {
          url: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=400&fit=crop",
          title: "Dining Space",
        },
      ],
    },
    {
      category: "Commercial Projects",
      images: [
        {
          url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
          title: "Office Design",
        },
        {
          url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
          title: "Workspace",
        },
        {
          url: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=600&h=400&fit=crop",
          title: "Retail Space",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-body pt-16">
      {/* Hero */}
      <section className="hidden lg:flex bg-brand text-white py-20">
        <div className="px-[3%] lg:px-[7%] mx-auto text-center">
          <motion.h1
            className="text-5xl font-medium font-display mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="">Work Gallery</span>
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our portfolio of quality electrical installations and
            repairs
          </motion.p>
        </div>
      </section>

      <section className="flex lg:hidden text-slate-800 py-10 pb-2">
        <div className="px-[3%] lg:px-[7%] text-start">
          <motion.h1
            className="text-3xl font-semibold font-display mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-slate-600">Work Gallery</span>
          </motion.h1>
          <motion.p
            className="text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our portfolio of quality electrical installations and
            repairs
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="px-[3%] lg:px-[7%] mx-auto">
          {galleryItems.map((category, catIndex) => {
            return (
              <div key={catIndex} className="mb-16">
                <motion.div
                  className="flex items-center space-x-3 mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-medium font-display text-gray-800">
                    {category.category}
                  </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.images.map((image, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: imgIndex * 0.1 }}
                      viewport={{ once: true }}
                      onClick={() => setSelectedImage(image.url)}
                    >
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute hidden lg:block inset-0 bg-gradient-to-t from-brand/40 via-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-white font-bold font-display text-lg mb-2">
                            {image.title}
                          </h3>
                          <div className="flex items-center border-2 border-white rounded-md p-2 w-max text-gray-50">
                            <Zap className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">
                              View Project
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="absolute block lg:hidden inset-0 bg-gradient-to-t from-brand/40 via-brand/20 to-transparent transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-white font-bold font-display text-lg mb-2">
                            {image.title}
                          </h3>
                          <div className="flex items-center border-2 border-white rounded-md p-2 w-max text-gray-50">
                            <Zap className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">
                              View Project
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Corner Badge */}
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        COMPLETED
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 bg-primary-600 hover:bg-primary-700 p-3 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative">
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm text-white p-4 rounded-lg">
              <div className="flex items-center">
                <Palette className="w-5 h-5 text-secondary-400 mr-2" />
                <span className="font-semibold">
                  Luxe Interiors - Award-Winning Design
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
