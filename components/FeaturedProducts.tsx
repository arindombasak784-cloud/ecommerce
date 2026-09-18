"use client";

import { useCart, type Product } from "@/store/cart-context";

export default function FeaturedProducts({ products }: { products: Product[] }) {
  const { addItem } = useCart();

  return (
    <section id="products" className="space-y-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Trending now</p>
          <h2 className="text-3xl font-semibold text-white">Fresh picks for your next purchase.</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-400 sm:text-right">
          Browse a small collection of crowd-favorite goods designed for comfort, lifestyle, and sustainability.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article key={product.id} className="group overflow-hidden rounded-[1.75rem] border border-slate-700 bg-slate-900/90 p-6 transition hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-slate-800/95">
            <div className={`h-48 rounded-[1.5rem] bg-gradient-to-br ${product.gradient} shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]`} />
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between gap-4 text-sm text-slate-400">
                <span className="inline-flex rounded-full bg-slate-950/70 px-3 py-1">{product.badge}</span>
                <span className="font-semibold text-white">${product.price}</span>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="text-2xl font-semibold text-white">{product.name}</h3>
                  <span className="rounded-full border border-slate-700 px-2 py-1 text-[10px] uppercase tracking-[0.24em] text-slate-300">
                    {product.category}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">{product.description}</p>
              </div>
              <button
                type="button"
                onClick={() => addItem(product)}
                className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Add to cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
