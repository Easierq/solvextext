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
    <div className="flex min-h-[60vh] items-center justify-center text-center text-7xl font-bold uppercase">
      Services Page
    </div>
  );
}
