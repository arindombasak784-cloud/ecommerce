const categories = [
  { name: "Home & Living", description: "Styled essentials for every room." },
  { name: "Fashion", description: "Comfortable, sustainable wardrobe pieces." },
  { name: "Outdoor Gear", description: "Adventure-ready tools and tech." },
  { name: "Wellness", description: "Daily-care products for modern routines." },
];

export default function Categories() {
  return (
    <section id="categories" className="grid gap-6 rounded-[2rem] border border-slate-800 bg-slate-900/85 p-10 lg:grid-cols-2">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Shop by category</p>
        <h2 className="text-3xl font-semibold text-white">Explore curated collections for every lifestyle.</h2>
        <p className="max-w-xl text-sm leading-7 text-slate-400">
          Discover products grouped into categories built for comfort, performance, and mindful style.
        </p>
      </div>
      <div className="grid gap-4">
        {categories.map((category) => (
          <div key={category.name} className="rounded-[1.75rem] border border-slate-700 bg-slate-950/75 p-6 transition hover:border-cyan-500/30 hover:bg-slate-900/90">
            <h3 className="text-xl font-semibold text-white">{category.name}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
