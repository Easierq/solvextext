"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $20,000",
    "$20,000 - $40,000",
    "$40,000+",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Thank you for contacting us! We will get back to you within 24 hours."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
    });
  };

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
            Contact <span className="">Us</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-50 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in touch to discuss your wood flooring project
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
            Contact <span className="text-slate-600">Us</span>
          </motion.h1>
          <motion.p
            className="text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in touch with us for any questions or to schedule your flooring
            estimate
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="px-[3%] lg:px-[7%] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-medium text-gray-800 mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                    <a
                      href="tel:5551234567"
                      className="text-brand hover:text-brand/90"
                    >
                      (555) 123-4567
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Mon-Sat: 7AM-6PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                    <a
                      href="mailto:info@timbercraftflooring.com"
                      className="text-brand hover:text-brand/90"
                    >
                      info@timbercraftflooring.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      24-48 hour response
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Showroom Address
                    </h3>
                    <p className="text-gray-600">
                      456 Service Road
                      <br />
                      Industrial District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Showroom Hours
                    </h3>
                    <p className="text-gray-600">
                      Mon-Fri: 7:00 AM - 6:00 PM
                      <br />
                      Sat: 8:00 AM - 4:00 PM
                      <br />
                      <span className="text-brand font-semibold">
                        Sun: Closed
                      </span>
                      <br />
                      <span className="text-sm text-gray-500 mt-1 block">
                        Free samples available
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7128647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e10e1e1%3A0x1234567890abcdef!2sFlooring%20Showroom!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Location Map"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl h-max"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form and we'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-transparent"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Project Type
                  </label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, projectType: value })
                    }
                  >
                    <SelectTrigger className="w-full h-12 border-gray-300 focus:ring-0">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="residential-single">
                        Residential - Single Room
                      </SelectItem>
                      <SelectItem value="residential-multiple">
                        Residential - Multiple Rooms
                      </SelectItem>
                      <SelectItem value="residential-whole">
                        Residential - Whole Home
                      </SelectItem>
                      <SelectItem value="commercial-office">
                        Commercial - Office
                      </SelectItem>
                      <SelectItem value="commercial-retail">
                        Commercial - Retail
                      </SelectItem>
                      <SelectItem value="commercial-hospitality">
                        Commercial - Restaurant/Hospitality
                      </SelectItem>
                      <SelectItem value="refinishing">
                        Floor Refinishing
                      </SelectItem>
                      <SelectItem value="repair">Floor Repair</SelectItem>
                      <SelectItem value="consultation">
                        Free Estimate Only
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Budget Range
                  </label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) =>
                      setFormData({ ...formData, budget: value })
                    }
                  >
                    <SelectTrigger className="w-full h-12 border-gray-300 focus:ring-0">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {budgetRanges.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-transparent"
                    placeholder="Tell us about your project, square footage, wood species preferences, timeline..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand hover:bg-brand/90 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
