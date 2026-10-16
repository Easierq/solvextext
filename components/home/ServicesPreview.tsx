"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Star, Clock, Hammer, Sparkles, Award, Layers } from "lucide-react";
import { motion } from "framer-motion";

interface Service {
  id: string;
  name: string;
  description: string;
  startingPrice: number;
  image: string;
  category: string;
  rating: number;
  featured: boolean;
  turnAroundTime: string;
  icon: any;
}

export default function ServicesPreview() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const categories = [
    { name: "Featured", color: "bg-primary-500" },
    { name: "Installation", color: "bg-blue-500" },
    { name: "Refinishing", color: "bg-red-500" },
    { name: "Repair", color: "bg-yellow-500" },
    { name: "Custom", color: "bg-purple-600" },
  ];

  const services: Service[] = [
    {
      id: "1",
      name: "Hardwood Floor Installation",
      description:
        "Complete hardwood flooring installation with premium materials and expert craftsmanship for lasting beauty",
      startingPrice: 6.99,
      image:
        "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=300&fit=crop",
      category: "Featured",
      rating: 4.9,
      featured: true,
      turnAroundTime: "3-5 days",
      icon: Hammer,
    },
    {
      id: "2",
      name: "Floor Refinishing",
      description:
        "Professional sanding, staining, and sealing to restore your hardwood floors to like-new condition",
      startingPrice: 3.99,
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop",
      category: "Featured",
      rating: 4.8,
      featured: true,
      turnAroundTime: "2-4 days",
      icon: Sparkles,
    },
    {
      id: "3",
      name: "Custom Wood Patterns",
      description:
        "Unique herringbone, chevron, and custom patterns crafted with precision and artistic vision",
      startingPrice: 9.99,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
      category: "Custom",
      rating: 4.7,
      featured: true,
      turnAroundTime: "5-7 days",
      icon: Award,
    },
    {
      id: "4",
      name: "Floor Repair Service",
      description:
        "Fix scratches, dents, and damaged boards with seamless repairs that match your existing floor",
      startingPrice: 2.99,
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f1a4f1c?w=400&h=300&fit=crop",
      category: "Repair",
      rating: 4.6,
      featured: false,
      turnAroundTime: "1-2 days",
      icon: Hammer,
    },
    {
      id: "5",
      name: "Commercial Flooring",
      description:
        "Durable wood flooring solutions for offices, retail spaces, and commercial properties",
      startingPrice: 7.99,
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop",
      category: "Installation",
      rating: 4.5,
      featured: false,
      turnAroundTime: "7-10 days",
      icon: Layers,
    },
    {
      id: "6",
      name: "Floor Consultation",
      description:
        "Expert guidance on wood species, finishes, and installation options for your project",
      startingPrice: 0,
      image:
        "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=400&h=300&fit=crop",
      category: "Custom",
      rating: 4.8,
      featured: false,
      turnAroundTime: "Same day",
      icon: Sparkles,
    },
  ];

  const filteredItems =
    activeCategory === "Featured"
      ? services.filter((item) => item.featured === true)
      : services.filter((item) => item.category === activeCategory);

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
    <section className="py-16 bg-gray-50">
      <div className="px-[3%] lg:px-[7%] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold font-display text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our <span className="text-primary-600">Expert Services</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto font-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Transform your space with professional wood flooring services
            tailored to your vision
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.name
                  ? "bg-brand text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600"
              }`}
            >
              <span className="flex items-center">
                <span
                  className={`w-3 h-3 rounded-full ${category.color} mr-2`}
                ></span>
                {category.name}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          key={activeCategory}
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-card rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 space-y-2">
                    {item.featured && (
                      <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                        <Sparkles className="w-4 h-4 mr-1" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-bold">{item.rating}</span>
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <IconComponent className="w-5 h-5 text-primary-600 mr-2" />
                    <h3 className="text-xl font-bold font-display text-gray-800 group-hover:text-primary-600 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{item.turnAroundTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">
                        {item.startingPrice > 0 ? "Starting at" : "Free"}
                      </span>
                      <div className="text-2xl font-bold text-primary-600">
                        {item.startingPrice > 0
                          ? `$${item.startingPrice.toFixed(2)}/sqft`
                          : "Free"}
                      </div>
                    </div>
                    <Link
                      href={`/services/${item.id}`}
                      className="bg-brand hover:bg-brand/90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/services"
            className="inline-flex items-center bg-brand hover:bg-gradient-gold-dark text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Services
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
