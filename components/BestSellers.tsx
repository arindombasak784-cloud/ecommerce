const bestSellers = [
  { title: "Daypack Pro", price: "$99", badge: "New" },
  { title: "Eco Mug", price: "$18", badge: "Top" },
  { title: "Home Diffuser", price: "$34", badge: "Limited" },
];

export default function BestSellers() {
  return (
    <section className="grid gap-6 rounded-[2rem] border border-slate-800 bg-slate-900/85 p-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Best sellers</p>
        <h2 className="text-3xl font-semibold text-white">Customer favorites that keep coming back.</h2>
        <p className="max-w-xl text-sm leading-7 text-slate-400">
          Shop the top-rated picks selected by shoppers who love quality, sustainability, and style.
        </p>
      </div>
      <div className="grid gap-4">
        {bestSellers.map((product) => (
          <div key={product.title} className="rounded-[1.75rem] border border-slate-700 bg-slate-950/80 p-6 transition hover:border-cyan-500/30 hover:bg-slate-900/95">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-white">{product.title}</h3>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
                {product.badge}
              </span>
            </div>
            <p className="mt-4 text-3xl font-semibold text-white">{product.price}</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">Great value for everyday use, with top reviews for quality and comfort.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
