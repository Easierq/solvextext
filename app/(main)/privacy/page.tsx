"use client";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, including your name, email address, phone number, property address, and project details when you request a quote, schedule a consultation, or contact us.",
        },
        {
          subtitle: "Automatically Collected Information",
          text: "We automatically collect certain information about your device, including IP address, browser type, operating system, referring URLs, and pages visited on our website through cookies and similar technologies.",
        },
        {
          subtitle: "Project Information",
          text: "When you work with us, we may collect property photos, room measurements, subfloor conditions, wood species preferences, finish selections, and project specifications related to your flooring installation.",
        },
      ],
    },
    {
      icon: UserCheck,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to provide, maintain, and improve our wood flooring services, including scheduling consultations, creating installation estimates, ordering materials, and managing your flooring projects.",
        },
        {
          subtitle: "Communication",
          text: "We use your contact information to respond to inquiries, send appointment reminders, provide project updates, share maintenance tips, and communicate company news (with your consent).",
        },
        {
          subtitle: "Business Operations",
          text: "We use collected data to analyze trends, monitor website performance, prevent fraud, and improve our services and user experience.",
        },
      ],
    },
    {
      icon: Lock,
      title: "Information Sharing and Disclosure",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with trusted third-party service providers who assist us in operating our business, such as payment processors, material suppliers, equipment rental companies, and scheduling systems.",
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law, court order, or governmental regulation, or if we believe disclosure is necessary to protect our rights or the safety of others.",
        },
        {
          subtitle: "Business Transfers",
          text: "If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction, with notice provided to you.",
        },
      ],
    },
    {
      icon: Eye,
      title: "Your Rights and Choices",
      content: [
        {
          subtitle: "Access and Update",
          text: "You have the right to access, update, or correct your personal information at any time by contacting us directly.",
        },
        {
          subtitle: "Marketing Communications",
          text: "You can opt out of receiving promotional emails by clicking the unsubscribe link in any marketing email or by contacting us directly.",
        },
        {
          subtitle: "Data Deletion",
          text: "You may request deletion of your personal information, subject to certain legal obligations that may require us to retain project records and warranty documentation.",
        },
        {
          subtitle: "Cookie Preferences",
          text: "You can manage cookie preferences through your browser settings, though this may affect website functionality.",
        },
      ],
    },
    {
      icon: Shield,
      title: "Data Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, maintain warranty coverage, and comply with legal requirements, unless a longer retention period is required by law.",
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
            <Shield className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-5xl font-medium font-display mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-50">
              Your privacy is important to us. Learn how we collect, use, and
              protect your information.
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
            Privacy Policy
          </motion.h1>
          <motion.p
            className="text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your privacy is important to us. Learn how we collect, use, and
            protect your information.
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
        <div className="px-[3%] lg:px-[7%] mx-auto">
          <motion.div
            className="max-w-4xl mx-auto bg-card rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              At Timbercraft, we respect your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website or use our wood flooring services.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              By using our website or services, you agree to the collection and
              use of information in accordance with this policy. If you do not
              agree with our policies and practices, please do not use our
              services.
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
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {item.subtitle}
                        </h3>
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

      {/* Contact Section */}
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
              Questions About Privacy?
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              If you have any questions about this Privacy Policy or our data
              practices, please don't hesitate to contact us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:privacy@timbercraft.com"
                className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>privacy@timbercraft.com</span>
              </a>
              <a
                href="tel:5551234567"
                className="flex items-center space-x-2 border border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(555) 123-4567</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
