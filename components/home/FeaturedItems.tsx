"use client";
import { motion } from "framer-motion";
import { Star, Zap } from "lucide-react";
import Link from "next/link";

export default function FeaturedItems() {
  const deals = [
    {
      title: "Panel Upgrade Special",
      description:
        "Complete electrical panel upgrade with modern circuit breakers",
      originalPrice: "$1,499",
      salePrice: "$1,199",
      savings: "Save $300",
      badge: "Limited Time",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
    },
    {
      title: "LED Lighting Package",
      description: "Energy-efficient LED lighting installation for entire home",
      originalPrice: "$899",
      salePrice: "$699",
      savings: "Save $200",
      badge: "Popular",
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=300&fit=crop",
    },
    {
      title: "EV Charger Installation",
      description: "Level 2 electric vehicle charger setup with smart features",
      originalPrice: "$1,099",
      salePrice: "$899",
      savings: "Save $200",
      badge: "Hot Deal",
      image:
        "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-16">
      <div className="px-[4%] lg:px-[7%] mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center bg-primary-100 text-primary-600 px-4 py-2 rounded-full mb-4">
            <Zap className="w-5 h-5 mr-2" />
            <span className="font-semibold">Special Offers</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured <span className="text-primary-600">Service Deals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Save on essential electrical services with our exclusive packages
          </p>
        </motion.div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
          {deals.map((deal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    {deal.badge}
                  </span>
                </div>

                {/* Savings */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {deal.savings}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                  {deal.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {deal.description}
                </p>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-gray-400 line-through text-sm mr-2">
                      {deal.originalPrice}
                    </span>
                    <span className="text-3xl font-bold text-primary-600">
                      {deal.salePrice}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/book"
                  className="block w-full bg-primary-600 hover:bg-primary-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-secondary-800 to-secondary-900 rounded-2xl p-8 text-white text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold mb-2">Need a Custom Quote?</h3>
              <p className="text-gray-300">
                Call us for a free consultation and we'll provide a detailed
                estimate
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:5551234567"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                Call (555) 123-4567
              </a>
              <Link
                href="/services"
                className="border border-white text-white hover:bg-white hover:text-secondary-900 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
