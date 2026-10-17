"use client";
import React from "react";
// import { Star, MessageCircle } from "lucide-react";
import Link from "next/link";
import type { FurnitureProduct } from "@/types/product";

// Indicatif pays + numéro, sans "+" ni espaces
const WHATSAPP_NUMBER = "3247735046";

const badgeLabels: Record<NonNullable<FurnitureProduct["badge"]>, string> = {
  New: "Nouveau",
  Sale: "Promotion",
  Bestseller: "Meilleure vente",
};

interface ProductCardProps {
  product: FurnitureProduct;
}

export const FeaturedProductCard = ({ product }: ProductCardProps) => {
  const discountPercentage = product.salePrice
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0;

  const handleBookNow = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Le bouton est dans un lien : empêcher la navigation de la carte
    e.preventDefault();
    e.stopPropagation();

    const message = `Bonjour, je souhaiterais réserver le service « ${product.name} ». Merci de me communiquer vos disponibilités et un devis.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Link href={`/services/${product.id}`}>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.badge && (
              <span className="bg-yellow-300 text-blue-950 px-3 py-1 rounded-full text-xs font-bold shadow">
                {badgeLabels[product.badge]}
              </span>
            )}
            {discountPercentage > 0 && (
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                -{discountPercentage}%
              </span>
            )}
          </div>

          {/* Toujours visible sur mobile, révélé au survol sur ordinateur */}
          <div className="absolute bottom-4 left-4 right-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleBookNow}
              className="w-full bg-yellow-300 hover:bg-yellow-400 text-blue-950 py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              Réserver maintenant
            </button>
          </div>

          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
              <span className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                Indisponible
              </span>
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-blue-950 mb-2 group-hover:text-yellow-600 transition-colors line-clamp-2">
            {product.name}
          </h3>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">À partir de</p>
              {product.salePrice ? (
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.salePrice.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ${product.price.toLocaleString()}
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold text-gray-800">
                  ${product.price.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
