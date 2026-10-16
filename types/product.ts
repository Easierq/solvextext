// types/product.ts
// export interface FurnitureProduct {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   salePrice?: number;
//   category: string;
//   subcategory: string;
//   brand: string;
//   rating: number;
//   reviews: number;
//   inStock: boolean;
//   stockQuantity: number;
//   images: string[];
//   mainImage: string;

//   // Furniture-specific
//   dimensions: {
//     width: number;
//     height: number;
//     depth: number;
//     unit: "inches" | "cm";
//   };
//   weight: number;
//   material: string[];
//   colors: ProductColor[];
//   styles: string[];
//   assemblyRequired: boolean;
//   assemblyTime?: string;
//   warranty: string;

//   // Customization options
//   customizations?: ProductCustomization[];

//   // Shipping
//   shippingInfo: {
//     freeShipping: boolean;
//     estimatedDelivery: string;
//     shippingCost?: number;
//     whiteGloveDelivery?: boolean;
//   };

//   // SEO & Metadata
//   sku: string;
//   tags: string[];
//   featured: boolean;
//   newArrival: boolean;
//   bestseller: boolean;
//   careInstructions?: string;
// }

// export interface ProductColor {
//   name: string;
//   hexCode: string;
//   imageUrl: string;
//   inStock: boolean;
// }

// export interface ProductCustomization {
//   name: string;
//   type: "color" | "material" | "size" | "fabric";
//   options: CustomizationOption[];
//   required: boolean;
// }

// export interface CustomizationOption {
//   name: string;
//   priceAdjustment: number;
//   imageUrl?: string;
//   available: boolean;
// }

// export interface ProductCategory {
//   id: string;
//   name: string;
//   slug: string;
//   description: string;
//   icon: string;
//   image: string;
//   productCount: number;
//   subcategories: string[];
//   featured: boolean;
// }

// export interface CartItem {
//   id: string;
//   product: FurnitureProduct;
//   selectedColor?: ProductColor;
//   selectedCustomizations: {
//     [key: string]: string;
//   };
//   quantity: number;
//   totalPrice: number;
// }

// export interface ShopFilters {
//   search: string;
//   categories: string[];
//   priceRange: [number, number];
//   styles: string[];
//   materials: string[];
//   colors: string[];
//   inStock: boolean;
//   freeShipping: boolean;
//   onSale: boolean;
// }

//with ?
// export interface FurnitureProduct {
//   id: number;
//   name: string;
//   price: number;
//   salePrice?: number;
//   category?: string;
//   subcategory?: string;
//   style?: string;
//   material?: string;
//   color?: string;
//   rating?: string;
//   reviews?: number;
//   inStock?: boolean;
//   freeShipping?: boolean;
//   // badge: "New" | "Sale" | "Bestseller";
//   badge?: string;
//   image: string;
//   images?: string[]; // Multiple images for gallery

//   // Additional product details
//   brand?: string;
//   description?: string;
//   dimensions?: {
//     width: number;
//     height: number;
//     depth: number;
//     unit: "inches" | "cm";
//   };
//   weight?: number;
//   materials?: string[]; // Multiple materials
//   colors?: ProductColor[];
//   styles?: string[];
//   assemblyRequired?: boolean;
//   assemblyTime?: string;
//   warranty?: string;

//   // Customization options
//   customizations?: ProductCustomization[];

//   // Shipping info
//   shippingInfo?: {
//     freeShipping: boolean;
//     estimatedDelivery: string;
//     shippingCost?: number;
//     whiteGloveDelivery?: boolean;
//   };

//   // SEO & Metadata
//   sku?: string;
//   tags?: string[];
//   featured?: boolean;
//   newArrival?: boolean;
//   bestseller?: boolean;
//   careInstructions?: string;
// }

export interface FurnitureProduct {
  id: number;
  name: string;
  price: number;
  salePrice?: number;
  category: string;
  subcategory?: string;
  style: string;
  material: string;
  color: string;
  rating: string;
  reviews: number;
  inStock: boolean;
  freeShipping: boolean;
  badge?: "New" | "Sale" | "Bestseller" | null;
  image: string;
  images?: string[]; // Multiple images for gallery

  // Additional product details
  brand?: string;
  description?: string;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
    unit: "inches" | "cm";
  };
  weight?: number;
  materials?: string[]; // Multiple materials
  colors?: ProductColor[];
  styles?: string[];
  assemblyRequired?: boolean;
  assemblyTime?: string;
  warranty?: string;

  // Customization options
  customizations?: ProductCustomization[];

  // Shipping info
  shippingInfo?: {
    freeShipping: boolean;
    estimatedDelivery: string;
    shippingCost?: number;
    whiteGloveDelivery?: boolean;
  };

  //   // SEO & Metadata
  sku?: string;
  tags?: string[];
  featured?: boolean;
  newArrival?: boolean;
  bestseller?: boolean;
  careInstructions?: string;
}

export interface ProductColor {
  name: string;
  hexCode: string;
  imageUrl?: string;
  inStock: boolean;
}

export interface ProductCustomization {
  name: string;
  type: "color" | "material" | "size" | "fabric";
  options: CustomizationOption[];
  required: boolean;
}

export interface CustomizationOption {
  name: string;
  priceAdjustment: number;
  imageUrl?: string;
  available: boolean;
}

export interface ShopFilters {
  search: string;
  categories: string[];
  priceRange: [number, number];
  styles: string[];
  materials: string[];
  colors: string[];
  inStock: boolean;
  freeShipping: boolean;
  onSale: boolean;
}

export interface CartItem {
  id: string;
  product: FurnitureProduct;
  selectedColor?: ProductColor;
  selectedCustomizations?: {
    [key: string]: string;
  };
  quantity: number;
  totalPrice: number;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
  image?: string;
  productCount: number;
  subcategories?: string[];
  featured: boolean;
}
