"use client";
import { motion } from "framer-motion";
import {
  FileText,
  Scale,
  AlertTriangle,
  CheckCircle,
  Ban,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
  const companyName = "Timbercraft";
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        {
          subtitle: "",
          text: "By accessing and using the Timbercraft website and services, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.",
        },
        {
          subtitle: "",
          text: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.",
        },
      ],
    },
    {
      icon: CheckCircle,
      title: "Services Provided",
      content: [
        {
          subtitle: "Flooring Services",
          text: "Timbercraft provides professional wood flooring services including hardwood floor installation, refinishing, sanding, staining, repair, restoration, and maintenance. We work with solid hardwood, engineered hardwood, and luxury vinyl plank flooring. Specific services and deliverables will be outlined in individual contracts or proposals.",
        },
        {
          subtitle: "Service Availability",
          text: "While we strive to maintain consistent service availability, we do not guarantee immediate availability at all times. We may modify, suspend, or reschedule services due to weather conditions, material availability, subfloor issues requiring additional work, or other circumstances beyond our control.",
        },
        {
          subtitle: "Project Scope",
          text: "Each flooring project scope, timeline, materials, and deliverables will be clearly defined in a separate contract or proposal. Additional work beyond the agreed scope (such as subfloor repairs, moisture remediation, or floor leveling) may incur additional fees and will require written approval.",
        },
      ],
    },
    {
      icon: DollarSign,
      title: "Fees and Payment",
      content: [
        {
          subtitle: "Estimates and Quotes",
          text: "Initial consultations and estimates may be complimentary or fee-based as specified at booking. Project fees will be outlined in your contract and may be structured as per square foot pricing, flat fees, or hourly rates depending on the service type and complexity.",
        },
        {
          subtitle: "Payment Terms",
          text: "Payment schedules vary by project and will be specified in your contract. Typically, a deposit is required upon contract signing to reserve your project date and order materials, with progress payments at milestones, and final payment due upon project completion and your approval. We accept various forms of payment including checks, credit cards, and electronic transfers.",
        },
        {
          subtitle: "Cancellation and Refunds",
          text: "Cancellation policies and refund eligibility will be outlined in your contract. Generally, deposits are non-refundable once materials have been ordered or work has commenced. Cancellations must be made in writing. Custom wood species or finishes ordered specifically for your project are non-refundable.",
        },
      ],
    },
    {
      icon: Scale,
      title: "Materials and Installation",
      content: [
        {
          subtitle: "Wood Selection",
          text: "We offer a wide selection of hardwood species, engineered products, and finishes. Wood is a natural product with variations in grain, color, and character. We will help you select appropriate materials for your project, but final color and grain variations are inherent to natural wood and not considered defects.",
        },
        {
          subtitle: "Acclimation Requirements",
          text: "Hardwood flooring must acclimate to your home's environment before installation. Required acclimation time will be specified in your contract. Clients must maintain consistent temperature (60-80°F) and humidity (35-55%) during acclimation and for the life of the floor.",
        },
        {
          subtitle: "Subfloor Conditions",
          text: "Proper subfloor preparation is essential for successful installation. Additional charges may apply if subfloor repairs, leveling, or moisture remediation is required beyond what was visible during initial assessment. We will notify you of any additional work needed before proceeding.",
        },
      ],
    },
    {
      icon: AlertTriangle,
      title: "Limitations of Liability",
      content: [
        {
          subtitle: "",
          text: "Timbercraft is not liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or any pre-existing subfloor conditions, moisture problems, structural issues, or hidden damage not discovered during initial inspection.",
        },
        {
          subtitle: "",
          text: "We are not responsible for delays or failures in performance caused by circumstances beyond our reasonable control, including severe weather, material shortages, supply chain disruptions, unforeseen subfloor conditions requiring additional work, or client-caused delays.",
        },
        {
          subtitle: "",
          text: "Our total liability for any claims related to our services shall not exceed the total amount paid by the client for the specific service giving rise to the claim. We carry appropriate insurance coverage including general liability and workers' compensation as required by law.",
        },
      ],
    },
    {
      icon: Ban,
      title: "Client Responsibilities",
      content: [
        {
          subtitle: "Site Preparation",
          text: "Clients are responsible for removing all furniture, area rugs, and belongings from the work area before installation begins. We can recommend professional moving services if needed. You must also remove or secure any items on walls that could be affected by sanding dust, even with our dust containment systems.",
        },
        {
          subtitle: "Environmental Conditions",
          text: "Clients must maintain consistent temperature (60-80°F) and humidity (35-55%) in the home during acclimation, installation, and the curing period. Failure to maintain proper conditions may void warranty coverage and can result in flooring problems such as gapping, cupping, or finish defects.",
        },
        {
          subtitle: "Access and Safety",
          text: "Clients must provide clear and safe access to all work areas and ensure utilities (electricity and water) are available. You must secure pets during installation. Children should be kept away from work areas for safety. We may use dust containment systems, but some dust is inevitable during sanding and refinishing.",
        },
        {
          subtitle: "Property Disclosure",
          text: "Clients must disclose any known issues including previous water damage, pet stains, structural problems, radiant heating systems, or prior flooring repairs. Hidden conditions not disclosed may result in additional charges if discovered during work.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="hidden lg:flex bg-brand text-white py-16">
        <div className="px-[3%] lg:px-[7%] mx-auto">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Scale className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-5xl font-medium font-display mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-50">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm text-gray-50 mt-4">
              Last Updated: December 6, 2025
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
            Terms of Service
          </motion.h1>
          <motion.p
            className="text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Please read these terms carefully before using our services
          </motion.p>
          <motion.p
            className="text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Last Updated: December 6, 2025
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-card rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 font-semibold text-lg leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your use of the{" "}
              {companyName} website and wood flooring services. By accessing our
              website or engaging our services, you agree to comply with and be
              bound by these Terms.
            </p>
            <p className="text-gray-700 font-semibold text-lg leading-relaxed">
              These Terms constitute a legally binding agreement between you and{" "}
              {companyName}. Please read them carefully and contact us if you
              have any questions before proceeding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-card rounded-2xl shadow-lg p-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <IconComponent className="w-8 h-8 text-primary-600" />
                    </div>
                    <h2 className="text-2xl font-medium font-display text-gray-800">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {section.content.map((item, idx) => (
                      <div key={idx}>
                        {item.subtitle && (
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {item.subtitle}
                          </h3>
                        )}
                        <p className="text-gray-600 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Warranty and Care */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-card rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-primary-100 p-3 rounded-lg">
                <CheckCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold font-display text-gray-800">
                Warranty and Floor Care
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Timbercraft warrants that all work will be performed in a
                professional and workmanlike manner using quality materials
                appropriate for your project. We stand behind our craftsmanship
                and will address any defects in our installation workmanship
                within the warranty period specified in your contract.
              </p>
              <p>
                Our standard warranty covers installation workmanship for two
                years from project completion. Refinishing work is typically
                warranted for one year. Wood flooring material warranties are
                subject to the manufacturer's terms. This warranty does not
                cover damage resulting from normal wear and tear, improper
                maintenance, excessive moisture or humidity fluctuations, pet
                damage, impact damage, or failure to maintain recommended
                environmental conditions (60-80°F temperature, 35-55% humidity).
              </p>
              <p>
                To make a warranty claim, you must notify us in writing within
                the warranty period. We will inspect the issue and, if covered
                under warranty, repair or refinish the affected area at no
                additional charge. Warranty coverage requires proof that proper
                maintenance and environmental conditions have been maintained.
                We will provide detailed care instructions upon project
                completion.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dispute Resolution */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-card rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-accent-100 p-3 rounded-lg">
                <Scale className="w-8 h-8 text-accent-600" />
              </div>
              <h2 className="text-2xl font-bold font-display text-gray-800">
                Dispute Resolution
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Any disputes arising from these Terms or our services shall
                first be attempted to be resolved through good faith
                negotiations between the parties.
              </p>
              <p>
                If negotiations fail, disputes shall be resolved through binding
                arbitration in accordance with the rules of the American
                Arbitration Association. The arbitration shall take place in
                your local jurisdiction or as mutually agreed.
              </p>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the state in which services are provided,
                without regard to its conflict of law provisions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-card rounded-2xl shadow-lg p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-display text-gray-800 mb-4">
              Questions About These Terms?
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              If you have any questions about our Terms of Service, please
              contact us.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-brand hover:bg-brand text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
