"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FeaturedProductCard } from "./FeaturedProductCard";

export const FeaturedServices = () => {
  const products = [
    {
      id: 1,
      name: "Câblage complet de la maison",
      price: 120,
      salePrice: 100,
      rating: "4.9",
      reviews: 342,
      category: "",
      style: "",
      material: "",
      color: "",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop",
      badge: "Bestseller" as const,
      inStock: true,
      freeShipping: true,
    },
    {
      id: 2,
      name: "Installation solaire et onduleur",
      price: 270,
      salePrice: 235,
      rating: "4.8",
      reviews: 189,
      category: "",
      style: "",
      material: "",
      color: "",
      image:
        "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=400&h=400&fit=crop",
      badge: "New" as const,
      inStock: true,
      freeShipping: true,
    },
    {
      id: 3,
      name: "Mise à niveau du tableau électrique",
      price: 55,
      rating: "4.9",
      reviews: 267,
      category: "",
      style: "",
      material: "",
      color: "",
      image:
        "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=400&h=400&fit=crop",
      inStock: true,
      freeShipping: true,
    },
    {
      id: 4,
      name: "Diagnostic de pannes et réparations",
      price: 15,
      salePrice: 10,
      rating: "4.7",
      reviews: 156,
      category: "",
      style: "",
      material: "",
      color: "",
      image:
        "https://images.unsplash.com/photo-1758101755915-462eddc23f57?w=400&h=400&fit=crop",
      badge: "Sale" as const,
      inStock: true,
      freeShipping: true,
    },
  ];
  return (
    <section className="py-12 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="container px-6 max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-blue-950 mb-4">
            Services{" "}
            <span className="bg-yellow-300 px-2 text-blue-950 rounded-md">
              à la une
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Nos services électriques les plus demandés, réalisés par des
            électriciens certifiés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <FeaturedProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <button className="bg-yellow-300 hover:bg-yellow-400 text-blue-950 px-8 py-4 rounded-lg text-lg font-bold transition-colors inline-flex items-center">
              Voir tous les services
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
