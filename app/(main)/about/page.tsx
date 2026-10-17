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
    <div className="flex min-h-[60vh] items-center justify-center text-center text-7xl font-bold uppercase">
      About Page
    </div>
  );
}
