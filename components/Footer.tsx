export default function Footer() {
  return (
    <footer id="footer" className="rounded-[2rem] border border-slate-800 bg-slate-900/85 p-10 text-slate-300 shadow-[0_35px_120px_-80px_rgba(15,23,42,0.8)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">NovaMarket</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            A modern marketplace experience for curated products built with clean design and seamless browsing.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>About us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">Support</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>help@novamarket.com</li>
              <li>+1 (555) 012-3456</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
