"use client";
import { motion } from "framer-motion";
import { Star, Hammer } from "lucide-react";
import Link from "next/link";

export default function FeaturedProjects() {
  const deals = [
    {
      title: "Hardwood Installation Special",
      description:
        "Premium hardwood installation with professional finishing included",
      originalPrice: "$8.99/sqft",
      salePrice: "$6.99/sqft",
      savings: "Save $2/sqft",
      badge: "Limited Time",
      image:
        "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=300&fit=crop",
    },
    {
      title: "Floor Refinishing Package",
      description:
        "Complete floor refinishing with sanding, staining, and sealing service",
      originalPrice: "$4.99/sqft",
      salePrice: "$3.99/sqft",
      savings: "Save $1/sqft",
      badge: "Popular",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop",
    },
    {
      title: "Floor Restoration Bundle",
      description:
        "Comprehensive restoration service to bring old floors back to life",
      originalPrice: "$6.99/sqft",
      salePrice: "$5.49/sqft",
      savings: "Save $1.50/sqft",
      badge: "Hot Deal",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
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
            <Hammer className="w-5 h-5 mr-2" />
            <span className="font-semibold">Special Offers</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured <span className="text-primary-600">Service Deals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Save on professional wood flooring services with our exclusive
            packages
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
                  Get Quote
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
                estimate for your flooring project
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
