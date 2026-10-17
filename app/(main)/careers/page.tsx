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
      "Thank you for your application! We will review it and get back to you soon.",
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
    <div className="flex min-h-[60vh] items-center justify-center text-center text-7xl font-bold uppercase">
      Careers Page
    </div>
  );
}
