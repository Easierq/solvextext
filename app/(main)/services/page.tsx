"use client";
import { motion } from "framer-motion";
import {
  Hammer,
  Home,
  CheckCircle,
  Layers,
  Sparkles,
  Ruler,
  PaintBucket,
  Wrench,
  Store,
  Building2,
  Layout,
  Paintbrush,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Installation Services",
      icon: Building2,
      color: "primary",
      services: [
        {
          name: "Hardwood Floor Installation",
          description:
            "Complete hardwood flooring installation with premium materials and expert craftsmanship",
          price: "From $6.99/sqft",
          features: [
            "Premium wood selection",
            "Professional installation",
            "Subfloor preparation",
            "Finishing included",
          ],
          icon: Building2,
        },
        {
          name: "Engineered Hardwood",
          description:
            "Durable engineered hardwood perfect for high-moisture areas and modern homes",
          price: "From $5.99/sqft",
          features: [
            "Moisture resistant",
            "Dimensionally stable",
            "Wide plank options",
            "Quick installation",
          ],
          icon: Layers,
        },
        {
          name: "Custom Pattern Installation",
          description:
            "Unique herringbone, chevron, and custom wood floor patterns",
          price: "From $9.99/sqft",
          features: [
            "Herringbone patterns",
            "Chevron designs",
            "Mixed species",
            "Artistic layouts",
          ],
          icon: Layout,
        },
      ],
    },
    {
      title: "Refinishing Services",
      icon: Paintbrush,
      color: "secondary",
      services: [
        {
          name: "Floor Refinishing",
          description:
            "Professional sanding, staining, and sealing to restore your floors",
          price: "From $3.99/sqft",
          features: [
            "Dustless sanding",
            "Custom stain colors",
            "Multiple finish options",
            "Fast turnaround",
          ],
          icon: Paintbrush,
        },
        {
          name: "Floor Restoration",
          description:
            "Bring antique and damaged floors back to their original beauty",
          price: "From $4.99/sqft",
          features: [
            "Repair damaged boards",
            "Color matching",
            "Historical preservation",
            "Antique finishing",
          ],
          icon: Wrench,
        },
        {
          name: "Commercial Refinishing",
          description:
            "High-traffic commercial floor refinishing with durable finishes",
          price: "From $5.49/sqft",
          features: [
            "Heavy-duty finishes",
            "Minimal downtime",
            "After-hours service",
            "Warranty included",
          ],
          icon: Store,
        },
      ],
    },
    {
      title: "Consultation Services",
      icon: Hammer,
      color: "accent",
      services: [
        {
          name: "Wood Species Consultation",
          description:
            "Expert guidance on selecting the perfect wood species for your space",
          price: "Free",
          features: [
            "Species comparison",
            "Durability assessment",
            "Color & grain analysis",
            "Budget planning",
          ],
          icon: PaintBucket,
        },
        {
          name: "Floor Design Planning",
          description:
            "Professional floor layout planning and pattern recommendations",
          price: "From $250",
          features: [
            "Layout visualization",
            "Pattern mockups",
            "Material estimates",
            "Installation timeline",
          ],
          icon: Ruler,
        },
        {
          name: "Virtual Flooring Consultation",
          description:
            "Remote consultation with digital samples and recommendations",
          price: "From $150",
          features: [
            "Video consultations",
            "Digital samples",
            "Material links",
            "Email support",
          ],
          icon: Sparkles,
        },
      ],
    },
    {
      title: "Specialty Services",
      icon: Layers,
      color: "primary",
      services: [
        {
          name: "Floor Repair",
          description:
            "Expert repair of scratches, dents, and damaged floorboards",
          price: "From $2.99/sqft",
          features: [
            "Board replacement",
            "Scratch removal",
            "Color matching",
            "Seamless repairs",
          ],
          icon: Home,
        },
        {
          name: "Subfloor Services",
          description:
            "Complete subfloor preparation, leveling, and moisture barrier installation",
          price: "From $2.49/sqft",
          features: [
            "Floor leveling",
            "Moisture barriers",
            "Structural repair",
            "Noise reduction",
          ],
          icon: Hammer,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero */}
      <section className="hidden lg:flex bg-gradient-to-r from-brand to-brand text-white py-20">
        <div className="px-[3%] lg:px-[7%] mx-auto text-center">
          <motion.h1
            className="text-5xl font-medium mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="">Flooring Services</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-50 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive wood flooring solutions tailored to your home and
            lifestyle
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
            Our <span className="text-slate-600">Flooring Services</span>
          </motion.h1>
          <motion.p
            className="text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive wood flooring solutions tailored to your home and
            lifestyle
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="px-[3%] lg:px-[7%] mx-auto">
          {serviceCategories.map((category, catIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={catIndex}
                className="mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-gray-50 rounded-lg">
                    <CategoryIcon className="w-8 h-8 text-brand" />
                  </div>
                  <h2 className="text-3xl font-medium text-gray-800">
                    {category.title}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => {
                    const ServiceIcon = service.icon;
                    return (
                      <div
                        key={serviceIndex}
                        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100"
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="bg-gray-50 p-2 rounded-lg">
                            <ServiceIcon className="w-6 h-6 text-brand" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {service.name}
                          </h3>
                        </div>
                        <p className="text-gray-600 mb-4">
                          {service.description}
                        </p>
                        <div className="text-2xl font-bold text-brand mb-4">
                          {service.price}
                        </div>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center space-x-2 text-gray-600"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/book"
                          className="block w-full bg-brand hover:bg-brand text-white text-center py-3 rounded-lg font-semibold transition-colors"
                        >
                          Get Quote
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don't See What You're Looking For?
          </h2>
          <p className="text-yellow-50 text-lg mb-8">
            We offer custom flooring solutions for unique projects. Let's
            discuss your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:5551234567"
              className="bg-white text-brand hover:bg-yellow-50 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
            >
              Call (555) 123-4567
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-brand px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
