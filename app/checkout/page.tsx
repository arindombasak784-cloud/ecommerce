'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/store/cart-context';

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  });

  const shipping = subtotal > 0 ? 12 : 0;
  const total = subtotal + shipping;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!items.length) {
      return;
    }

    clearCart();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-16">
        <div className="w-full rounded-[2rem] border border-emerald-500/20 bg-slate-900/90 p-8 text-center shadow-[0_30px_120px_-80px_rgba(16,185,129,0.6)]">
          <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Order placed</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Thanks, {form.name || 'friend'}!</h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Your order is confirmed and a receipt has been sent to {form.email || 'your email'}.
          </p>
          <div className="mt-6 inline-flex rounded-full border border-slate-700 bg-slate-950/80 px-4 py-2 text-sm text-slate-300">
            Order total: ${total.toFixed(2)}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!items.length) {
    return (
      <main className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-16">
        <div className="w-full rounded-[2rem] border border-slate-800 bg-slate-900/85 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Checkout</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Your cart is empty</h1>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Pick a few favorites from the storefront before checking out.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Return to shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10 lg:px-10">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Checkout</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">Complete your order</h1>
        </div>
        <Link href="/" className="text-sm text-slate-300 transition hover:text-white">
          Continue shopping
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 sm:p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white">Shipping details</h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 sm:col-span-2">
                <span className="text-sm text-slate-300">Full name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
                  placeholder="Alex Morgan"
                />
              </label>

              <label className="space-y-2 sm:col-span-2">
                <span className="text-sm text-slate-300">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
                  placeholder="alex@example.com"
                />
              </label>

              <label className="space-y-2 sm:col-span-2">
                <span className="text-sm text-slate-300">Street address</span>
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
                  placeholder="42 Market Street"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm text-slate-300">City</span>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
                  placeholder="Seattle"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm text-slate-300">ZIP code</span>
                <input
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
                  placeholder="98101"
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Place order
          </button>
        </form>

        <aside className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-white">Order summary</h2>

          <div className="mt-6 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 rounded-[1.5rem] border border-slate-800 bg-slate-950/75 p-3">
                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${item.gradient}`} />
                <div className="flex-1">
                  <p className="font-medium text-white">{item.name}</p>
                  <p className="text-sm text-slate-400">Qty {item.quantity}</p>
                </div>
                <p className="font-semibold text-white">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-3 border-t border-slate-800 pt-6 text-sm text-slate-300">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-base font-semibold text-white">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
