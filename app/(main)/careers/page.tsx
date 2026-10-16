"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Heart,
  TrendingUp,
  MapPin,
  Clock,
  DollarSign,
  Award,
  Send,
  Hammer,
  Home,
  Coffee,
} from "lucide-react";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Thank you for your application! We will review it and get back to you soon."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      coverLetter: "",
      resume: null,
    });
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description:
        "Industry-leading compensation packages with performance bonuses",
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description:
        "Comprehensive health, dental, and vision insurance for you and your family",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Professional development opportunities and clear advancement paths",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible hours, consistent schedules, and generous PTO",
    },
    {
      icon: Users,
      title: "Team Culture",
      description:
        "Work with skilled craftsmen in a supportive, professional environment",
    },
    {
      icon: Award,
      title: "Recognition",
      description:
        "Performance bonuses and awards for outstanding craftsmanship",
    },
  ];

  const openPositions = [
    {
      id: "1",
      title: "Lead Flooring Installer",
      department: "Installation",
      location: "New York, NY",
      type: "Full-Time",
      icon: Hammer,
      description:
        "Lead installation teams on residential and commercial flooring projects",
      requirements: [
        "5+ years of hardwood flooring installation experience",
        "Strong knowledge of wood species and installation techniques",
        "Proficiency with flooring tools and equipment",
        "Excellent attention to detail and craftsmanship",
        "Valid driver's license required",
      ],
    },
    {
      id: "2",
      title: "Flooring Installer",
      department: "Installation",
      location: "New York, NY",
      type: "Full-Time",
      icon: Home,
      description:
        "Install and finish hardwood floors in residential and commercial settings",
      requirements: [
        "2+ years of flooring installation experience",
        "Knowledge of sanding and finishing techniques",
        "Ability to work independently and as part of a team",
        "Strong work ethic and reliability",
        "Physical ability to lift 50+ lbs",
      ],
    },
    {
      id: "3",
      title: "Project Coordinator",
      department: "Operations",
      location: "New York, NY",
      type: "Full-Time",
      icon: Briefcase,
      description:
        "Coordinate multiple flooring projects ensuring quality and timely completion",
      requirements: [
        "3+ years of project coordination experience",
        "Excellent organizational and communication skills",
        "Experience with scheduling and client management",
        "Ability to read blueprints and floor plans",
        "Construction or flooring background preferred",
      ],
    },
    {
      id: "4",
      title: "Flooring Apprentice",
      department: "Installation",
      location: "New York, NY",
      type: "Apprenticeship",
      icon: Users,
      description: "Learn the trade from experienced master craftsmen",
      requirements: [
        "Interest in learning wood flooring installation",
        "Strong work ethic and willingness to learn",
        "Physical stamina for demanding work",
        "Available 40 hours per week",
        "No experience necessary - will train",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-body pt-16">
      {/* Hero */}
      <section className="hidden lg:flex bg-brand text-white py-16">
        <div className="px-[3%] lg:px-[7%] mx-auto">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Briefcase className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-5xl font-medium font-display mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-50 mb-8">
              Build your career with a trusted wood flooring company
            </p>
          </motion.div>
        </div>
      </section>

      <section className="flex lg:hidden text-slate-800 py-10 pb-2">
        <div className="px-[3%] lg:px-[7%] text-start">
          <motion.h1
            className="text-4xl font-medium font-display mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Join Our Team
          </motion.h1>
          <motion.p
            className="text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Build your career with a trusted wood flooring company
          </motion.p>
          <motion.p
            className="text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Last Updated: November 8, 2025
          </motion.p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="px-[3%] lg:px-[7%] mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-display text-gray-800 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're more than just a flooring company—we're a team of skilled
              craftsmen passionate about quality workmanship
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-card rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-medium font-display text-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-display text-gray-800 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our current opportunities and find your perfect role
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {openPositions.map((position, index) => {
              const IconComponent = position.icon;
              return (
                <motion.div
                  key={position.id}
                  className="bg-card rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex items-start space-x-4 mb-4 md:mb-0">
                      <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold font-display text-gray-800 mb-2">
                          {position.title}
                        </h3>
                        <p className="text-primary-600 font-medium mb-2">
                          {position.department}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{position.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        setFormData({ ...formData, position: position.title })
                      }
                      className="bg-gradient-gold hover:bg-gradient-gold-dark text-white px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap"
                    >
                      Apply Now
                    </button>
                  </div>

                  <p className="text-gray-700 mb-4">{position.description}</p>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">
                      Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="px-[3%] lg:px-[7%] mx-auto">
          <motion.div
            className="max-w-3xl mx-auto bg-card rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-display text-gray-800 mb-2">
              Apply Now
            </h2>
            <p className="text-gray-600 mb-8">
              Submit your application and join our team of skilled craftsmen
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="John Smith"
                    required
                  />
                </div>

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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Position *
                  </label>
                  <select
                    value={formData.position}
                    onChange={(e) =>
                      setFormData({ ...formData, position: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a position</option>
                    {openPositions.map((pos) => (
                      <option key={pos.id} value={pos.title}>
                        {pos.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Cover Letter *
                </label>
                <textarea
                  value={formData.coverLetter}
                  onChange={(e) =>
                    setFormData({ ...formData, coverLetter: e.target.value })
                  }
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about your flooring experience and why you'd be a great fit for our team..."
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Resume *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors">
                  <input
                    type="file"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        resume: e.target.files?.[0] || null,
                      })
                    }
                    className="hidden"
                    id="resume-upload"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center">
                      <Briefcase className="w-12 h-12 text-primary-600 mb-2" />
                      <p className="text-gray-700 font-medium mb-1">
                        {formData.resume
                          ? formData.resume.name
                          : "Click to upload resume"}
                      </p>
                      <p className="text-sm text-gray-500">
                        PDF, DOC, or DOCX (Max 5MB)
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>References:</strong> Please provide at least two
                  professional references in your cover letter or be prepared to
                  provide them upon request.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-gold hover:bg-gradient-gold-dark text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors shadow-lg"
              >
                <Send className="w-5 h-5" />
                <span>Submit Application</span>
              </button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this application, you agree to our privacy policy
                and terms of service
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-brand">
        <div className="px-[3%] lg:px-[7%] mx-auto">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-display text-gray-100 mb-6">
              Our Culture & Values
            </h2>
            <p className="text-lg text-gray-50 mb-8 leading-relaxed">
              At TimberCraft Flooring, we believe that quality work comes from
              skilled teams. We foster a professional, supportive environment
              where craftsmanship thrives and every team member is valued. Our
              craftsmen are our greatest asset, and we invest in their training,
              safety, and career growth.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-card p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🔨</div>
                <h3 className="text-xl font-bold font-display text-gray-800 mb-2">
                  Master Your Craft
                </h3>
                <p className="text-gray-600">
                  Learn advanced techniques while working on diverse projects
                  with experienced mentors
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold font-display text-gray-800 mb-2">
                  Team Support
                </h3>
                <p className="text-gray-600">
                  Work alongside skilled craftsmen who help each other succeed
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold font-display text-gray-800 mb-2">
                  Career Advancement
                </h3>
                <p className="text-gray-600">
                  Clear paths from apprentice to lead installer with ongoing
                  training
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Equal Opportunity Statement */}
      <section className="py-16">
        <div className="px-[3%] lg:px-[7%] mx-auto">
          <motion.div
            className="max-w-4xl mx-auto bg-card rounded-2xl shadow-lg p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold font-display text-gray-800 mb-4">
              Equal Opportunity Employer
            </h3>
            <p className="text-gray-600 leading-relaxed">
              TimberCraft Flooring is an equal opportunity employer committed to
              creating an inclusive environment for all employees. We celebrate
              diversity and are committed to building a team that represents a
              variety of backgrounds, perspectives, and skills. We do not
              discriminate on the basis of race, religion, color, national
              origin, gender, sexual orientation, age, marital status, veteran
              status, or disability status.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-16 bg-brand text-white">
        <div className="px-[3%] lg:px-[7%] mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-display mb-4">
              Questions About Careers?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Our HR team is here to help answer any questions about working at
              TimberCraft Flooring
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:careers@timbercraftflooring.com"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                careers@timbercraftflooring.com
              </a>
              <a
                href="tel:5559876543"
                className="border border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                (555) 987-6543
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
