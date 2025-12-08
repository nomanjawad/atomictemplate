/*
 * product.data.ts
 * 
 * ============================================================================
 * EXAMPLE: How to Create Data Files with Validation
 * ============================================================================
 * 
 * This file demonstrates how to create typed data files that use your
 * validation schemas. This ensures your data is always valid and type-safe.
 * 
 * BENEFITS:
 * - Type safety: TypeScript knows the exact shape of your data
 * - Runtime validation: Zod validates data at runtime
 * - Error catching: Invalid data throws errors during development
 * - Autocomplete: Full IDE support for your data structures
 * 
 * ============================================================================
 */

import { ExampleProduct } from "@validations"

// ============================================================================
// OPTION 1: Type annotation (Recommended for static data)
// ============================================================================
// 
// Use the exported type from your schema file.
// TypeScript will check the data at compile time.

export const featuredProduct: ExampleProduct = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  name: "Premium Wireless Headphones",
  slug: "premium-wireless-headphones",
  description:
    "Experience crystal-clear audio with our premium wireless headphones. " +
    "Featuring advanced noise cancellation and 30-hour battery life.",
  price: {
    amount: 299.99,
    currency: "USD",
    discountPercent: 15,
  },
  images: [
    {
      src: "/images/products/headphones-1.jpg",
      alt: "Premium Wireless Headphones - Front View",
      isPrimary: true,
    },
    {
      src: "/images/products/headphones-2.jpg",
      alt: "Premium Wireless Headphones - Side View",
    },
  ],
  category: "Electronics",
  tags: ["audio", "wireless", "premium", "noise-cancelling"],
  variants: [
    {
      id: "var-black",
      name: "Midnight Black",
      sku: "PWH-001-BLK",
      inStock: true,
    },
    {
      id: "var-white",
      name: "Pearl White",
      sku: "PWH-001-WHT",
      inStock: true,
    },
    {
      id: "var-blue",
      name: "Ocean Blue",
      sku: "PWH-001-BLU",
      price: {
        amount: 319.99,
        currency: "USD",
      },
      inStock: false,
    },
  ],
  status: "active",
  featured: true,
  metaTitle: "Premium Wireless Headphones | Best Noise Cancelling",
  metaDescription:
    "Shop our premium wireless headphones with advanced noise cancellation. " +
    "30-hour battery, crystal-clear audio. Free shipping available.",
}

// ============================================================================
// OPTION 2: Array of products (for product listings)
// ============================================================================

export const productList: ExampleProduct[] = [
  featuredProduct,
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "Ergonomic Keyboard",
    slug: "ergonomic-keyboard",
    description:
      "Type in comfort with our ergonomic split keyboard design. " +
      "Mechanical switches and customizable RGB lighting.",
    price: {
      amount: 149.99,
      currency: "USD",
    },
    images: [
      {
        src: "/images/products/keyboard-1.jpg",
        alt: "Ergonomic Keyboard - Top View",
        isPrimary: true,
      },
    ],
    category: "Accessories",
    tags: ["keyboard", "ergonomic", "mechanical"],
    status: "active",
    featured: false,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    name: "Ultra-Wide Monitor",
    slug: "ultra-wide-monitor",
    description:
      "Immerse yourself in a 34-inch ultra-wide curved display. " +
      "Perfect for productivity and gaming with 144Hz refresh rate.",
    price: {
      amount: 599.99,
      currency: "USD",
      discountPercent: 10,
    },
    images: [
      {
        src: "/images/products/monitor-1.jpg",
        alt: "Ultra-Wide Monitor - Front View",
        isPrimary: true,
      },
    ],
    category: "Electronics",
    tags: ["monitor", "ultra-wide", "gaming", "productivity"],
    status: "active",
    featured: true,
  },
]

// ============================================================================
// USAGE IN COMPONENTS
// ============================================================================
// 
// Import and use in your components:
// 
// import { featuredProduct, productList } from "@data"
// import { ExampleProduct } from "@validations"
// 
// function ProductCard({ product }: { product: ExampleProduct }) {
//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <p>${product.price.amount}</p>
//     </div>
//   )
// }
// 
// function ProductList() {
//   return (
//     <div>
//       {productList.map(product => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   )
// }
// ============================================================================
