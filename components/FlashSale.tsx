export default function FlashSale() {
  return (
    <section className="rounded-[2rem] border border-cyan-500/20 bg-slate-900/85 p-10 shadow-[0_40px_120px_-70px_rgba(34,211,238,0.45)]">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Flash sale</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Today only: 25% off selected essentials.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
            Unlock premium savings on the most-loved products. Stock is limited—grab the deal before it disappears.
          </p>
        </div>
        <button className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-slate-100">
          Shop flash sale
        </button>
      </div>
    </section>
  );
}
