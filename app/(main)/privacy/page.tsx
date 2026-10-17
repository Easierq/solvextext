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
    <div className="flex min-h-[60vh] items-center justify-center text-center text-7xl font-bold uppercase">
      Privacy Policy
    </div>
  );
}
