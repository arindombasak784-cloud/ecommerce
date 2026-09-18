import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import BestSellers from "@/components/BestSellers";
import FlashSale from "@/components/FlashSale";
import type { Product } from "@/store/cart-context";

const featuredProducts: Product[] = [
  {
    id: "aurora-lamp",
    name: "Aurora Lamp",
    price: 89,
    description: "Soft ambient lighting with a warm ceramic finish for calming corners and cozy nights.",
    gradient: "from-amber-200 via-orange-300 to-rose-300",
    badge: "Bestseller",
    category: "Home",
  },
  {
    id: "stride-sneaker",
    name: "Stride Sneaker",
    price: 124,
    description: "Lightweight, everyday comfort built for movement, style, and all-day wear.",
    gradient: "from-cyan-300 via-blue-400 to-indigo-500",
    badge: "New",
    category: "Fashion",
  },
  {
    id: "summit-bottle",
    name: "Summit Bottle",
    price: 34,
    description: "Double-wall insulated hydration essential designed to keep drinks cold for hours.",
    gradient: "from-emerald-300 via-teal-400 to-cyan-500",
    badge: "Eco",
    category: "Wellness",
  },
  {
    id: "drift-headphones",
    name: "Drift Headphones",
    price: 149,
    description: "Studio-inspired sound with deep bass and a clean silhouette for focus and travel.",
    gradient: "from-violet-300 via-fuchsia-400 to-pink-500",
    badge: "Popular",
    category: "Tech",
  },
  {
    id: "terra-blanket",
    name: "Terra Blanket",
    price: 72,
    description: "Breathable woven texture that brings warmth and softness to any living space.",
    gradient: "from-stone-200 via-zinc-300 to-slate-400",
    badge: "Cozy",
    category: "Home",
  },
  {
    id: "traveler-pack",
    name: "Traveler Pack",
    price: 96,
    description: "Minimalist carry-all with smart storage for daily essentials, commutes, and weekends.",
    gradient: "from-lime-300 via-emerald-400 to-green-600",
    badge: "Travel",
    category: "Gear",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020817] text-slate-100">
      <Navbar />

      <main id="home" className="mx-auto max-w-7xl space-y-12 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/80 shadow-[0_30px_100px_-50px_rgba(34,211,238,0.5)]">
          <div className="grid items-center gap-10 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-14">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">
                New season arrivals
              </div>

              <div className="space-y-5">
                <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Upgrade your everyday essentials.
                </h1>
                <p className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                  Discover premium home goods, modern essentials, and seasonal favorites designed to make everyday life feel more effortless.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Shop now
                </a>
                <a
                  href="#categories"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-500/40 hover:bg-slate-800"
                >
                  Explore collections
                </a>
              </div>

              <div className="grid max-w-lg gap-5 sm:grid-cols-3">
                <div>
                  <p className="text-3xl font-semibold text-white">12k+</p>
                  <p className="mt-1 text-sm text-slate-400">happy shoppers</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">4.9/5</p>
                  <p className="mt-1 text-sm text-slate-400">average rating</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">48h</p>
                  <p className="mt-1 text-sm text-slate-400">fast shipping</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="absolute -right-8 bottom-8 h-28 w-28 rounded-full bg-fuchsia-500/20 blur-3xl" />

              <div className="relative rounded-[2rem] border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5 shadow-2xl">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cyan-300">
                      This week
                    </span>
                    <span className="text-sm font-medium text-slate-300">Free shipping</span>
                  </div>

                  <div className="rounded-[1.75rem] bg-gradient-to-br from-cyan-300 via-blue-400 to-violet-500 p-[1px]">
                    <div className="rounded-[1.7rem] bg-slate-950/90 p-5">
                      <div className="h-64 rounded-[1.4rem] bg-gradient-to-br from-amber-200 via-orange-300 to-rose-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]" />
                      <div className="mt-5 flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Featured drop</p>
                          <h2 className="mt-2 text-2xl font-semibold text-white">Noir Studio Lamp</h2>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-slate-400">from</p>
                          <p className="mt-1 text-2xl font-semibold text-cyan-300">$89</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FlashSale />

        <Categories />

        <BestSellers />

        <FeaturedProducts products={featuredProducts} />

        <section className="rounded-[2rem] border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/60 p-8 text-center sm:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Why shoppers keep coming back</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Curated quality. Thoughtful design. Everyday value.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-700 bg-slate-950/70 p-6">
              <p className="text-3xl">✨</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Handpicked picks</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">Every item is selected for style, performance, and all-around usefulness.</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-700 bg-slate-950/70 p-6">
              <p className="text-3xl">🚚</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Fast delivery</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">Quick shipping and careful packaging so your order arrives ready to enjoy.</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-700 bg-slate-950/70 p-6">
              <p className="text-3xl">💬</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Real support</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">Friendly experts and easy returns make every purchase feel stress-free.</p>
            </div>
          </div>
        </section>
      </main>

      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </div>
  );
}
