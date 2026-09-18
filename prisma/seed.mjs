import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  {
    id: "solar-street-lamp",
    name: "Solar Street Lamp",
    price: 129,
    description: "Long-lasting LED street lamp with smart motion sensing.",
    gradient: "from-sky-500 to-cyan-500",
    badge: "Popular",
    category: "Outdoor",
  },
  {
    id: "minimal-tote-bag",
    name: "Minimal Tote Bag",
    price: 42,
    description: "Premium vegan leather, perfect for everyday carry.",
    gradient: "from-rose-500 to-fuchsia-500",
    badge: "Best value",
    category: "Accessories",
  },
  {
    id: "eco-active-sneakers",
    name: "Eco Active Sneakers",
    price: 88,
    description: "Lightweight recycled mesh sneakers with soft support.",
    gradient: "from-emerald-500 to-lime-500",
    badge: "Trending",
    category: "Footwear",
  },
];

async function main() {
  for (const product of products) {
    await prisma.product.upsert({
      where: { id: product.id },
      update: product,
      create: product,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });