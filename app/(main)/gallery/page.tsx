"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { X, Zap, Palette, CheckCircle } from "lucide-react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      category: "Living Spaces",
      images: [
        {
          url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop",
          title: "Modern Living Room",
        },
        {
          url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop",
          title: "Luxury Lounge",
        },
        {
          url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=400&fit=crop",
          title: "Contemporary Space",
        },
      ],
    },
    {
      category: "Bedrooms",
      images: [
        {
          url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop",
          title: "Master Suite",
        },
        {
          url: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600&h=400&fit=crop",
          title: "Elegant Bedroom",
        },
        {
          url: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600&h=400&fit=crop",
          title: "Serene Retreat",
        },
      ],
    },
    {
      category: "Kitchens & Dining",
      images: [
        {
          url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop",
          title: "Modern Kitchen",
        },
        {
          url: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=400&fit=crop",
          title: "Chef's Kitchen",
        },
        {
          url: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=400&fit=crop",
          title: "Dining Space",
        },
      ],
    },
    {
      category: "Commercial Projects",
      images: [
        {
          url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
          title: "Office Design",
        },
        {
          url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
          title: "Workspace",
        },
        {
          url: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=600&h=400&fit=crop",
          title: "Retail Space",
        },
      ],
    },
  ];

  return (
    <div className="flex min-h-[60vh] items-center justify-center text-center text-7xl font-bold uppercase">
      Gallery Page
    </div>
  );
}
