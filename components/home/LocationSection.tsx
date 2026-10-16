"use client";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Car,
  Train,
  Mail,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LocationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-16">
      <div className="px-[4%] lg:px-[7%] mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Visit Our <span className="text-primary-600">Showroom</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conveniently located to serve all your wood flooring needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7128647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e10e1e1%3A0x1234567890abcdef!2sFlooring%20Services!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
                title="Flooring Showroom Location"
              />

              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span className="font-semibold text-gray-800">
                    TimberCraft Flooring
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Professional Wood Flooring Services
                </p>
              </div>

              <div className="absolute bottom-4 right-4">
                <a
                  href="https://maps.google.com/?q=TimberCraft+Flooring+456+Service+Road"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Navigation className="w-4 h-4" />
                  <span className="font-medium">Get Directions</span>
                </a>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-white rounded-lg shadow-md">
                <Car className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Free Parking</p>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-md">
                <Train className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Transit Access</p>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-md">
                <MapPin className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Easy Access</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              variants={itemVariants}
            >
              <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Address
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  456 Service Road
                  <br />
                  Industrial District
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://maps.google.com/?q=456+Service+Road+New+York"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1 transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions</span>
                  </a>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 transition-colors">
                    <Globe className="w-4 h-4" />
                    <span>View on Map</span>
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              variants={itemVariants}
            >
              <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Contact Information
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <a
                      href="tel:+15551234567"
                      className="text-gray-600 hover:text-brand transition-colors"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <a
                      href="mailto:info@timbercraftflooring.com"
                      className="text-gray-600 hover:text-brand transition-colors"
                    >
                      info@timbercraftflooring.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">
                      www.timbercraftflooring.com
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+15551234567"
                    className="bg-brand hover:bg-brand/95 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                  <Link
                    href="/contact"
                    className="border border-brand text-brand hover:bg-primary-50 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Message</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              variants={itemVariants}
            >
              <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                <Car className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Getting Here
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Car className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      <span className="text-gray-600">Large parking lot</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Train className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      <span className="text-gray-600">Bus stop nearby</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      <span className="text-gray-600">Easy highway access</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      <span className="text-gray-600">Free consultation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Navigation className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      <span className="text-gray-600">
                        Wheelchair accessible
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      <span className="text-gray-600">Sample showroom</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready for Beautiful Hardwood Floors?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Whether you need new installation or refinishing, our expert
              craftsmen are ready to transform your space with premium wood
              flooring solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/book"
                className="bg-white text-primary-600 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Free Quote
              </Link>
              <Link
                href="/services"
                className="border border-white text-white hover:bg-white hover:text-primary-600 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
