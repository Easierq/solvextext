"use client";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Zap,
  Hammer,
} from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "James Anderson",
      role: "Founder & Master Craftsman",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      credentials: ["Certified Flooring Installer", "25+ Years Experience"],
    },
    {
      name: "Robert Martinez",
      role: "Lead Installation Specialist",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      credentials: ["Master Craftsman", "Commercial Expert"],
    },
    {
      name: "Michael Thompson",
      role: "Refinishing Specialist",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      credentials: ["Restoration Expert", "15+ Years Experience"],
    },
    {
      name: "David Chen",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
      credentials: ["PMP Certified", "Quality Control Specialist"],
    },
  ];

  const values = [
    {
      icon: Hammer,
      title: "Expert Craftsmanship",
      description:
        "We bring decades of woodworking expertise and precision to every flooring project, creating lasting beauty.",
    },
    {
      icon: Award,
      title: "Quality Materials",
      description:
        "Our commitment to excellence ensures we use only premium hardwood and finishing products for superior results.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description:
        "Your satisfaction drives our work. We collaborate closely with you to ensure your flooring exceeds expectations.",
    },
    {
      icon: Clock,
      title: "Timely Completion",
      description:
        "We respect your schedule and budget, delivering exceptional flooring on time with minimal disruption.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero */}
      <section className="hidden lg:flex bg-gradient-to-r from-brand to-brand text-white py-20">
        <div className="mx-auto px-[3%] lg:px-[7%]">
          <motion.h1
            className="text-5xl font-medium mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="">TimberCraft Flooring</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-50 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Award-winning wood flooring specialists creating beautiful floors
            since 1998
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
            About <span className="text-slate-600">TimberCraft Flooring</span>
          </motion.h1>
          <motion.p
            className="text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Award-winning wood flooring specialists creating beautiful floors
            since 1998
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="px-[3%] lg:px-[7%] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                TimberCraft Flooring was founded in 1998 by James Anderson, a
                master craftsman with a passion for creating stunning hardwood
                floors that stand the test of time. What began as a small
                installation business has evolved into a full-service flooring
                company with a team of skilled craftsmen and installers.
              </p>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Over the past 25 years, we've installed and refinished over
                3,000 floors in residential and commercial properties, earning
                recognition for our quality workmanship and customer service.
                Our philosophy is simple: every floor has the potential to
                transform a space.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe in timeless craftsmanship that lasts for generations,
                focusing on premium hardwood species, expert installation
                techniques, and durable finishes that enhance each floor's
                natural beauty. Our commitment to quality and attention to
                detail sets us apart in the industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=600&h=500&fit=crop"
                alt="Our Workshop"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="px-[3%] lg:px-[7%] mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-brand" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="px-[3%] lg:px-[7%] mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Our skilled craftsmen bring decades of expertise and dedication to
            every flooring project
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand font-medium mb-4">{member.role}</p>
                  <div className="space-y-2">
                    {member.credentials.map((cert, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-brand to-brand text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-gray-100">Years of Excellence</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">3,000+</div>
              <div className="text-gray-100">Floors Installed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">12</div>
              <div className="text-gray-100">Expert Craftsmen</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 flex items-center justify-center">
                4.9
                <Star className="w-6 h-6 ml-1 fill-current" />
              </div>
              <div className="text-gray-100">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="px-[3%] lg:px-[7%] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free estimate on your wood flooring
              project. We're here to help bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:5551234567"
                className="bg-brand hover:bg-brand text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg"
              >
                Call (555) 123-4567
              </a>
              <a
                href="/book"
                className="border-2 border-brand text-brand hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
