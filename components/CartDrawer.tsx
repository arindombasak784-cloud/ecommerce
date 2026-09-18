'use client';

import Link from 'next/link';
import { useCart } from '@/store/cart-context';

export default function CartDrawer() {
  const { items, subtotal, isCartOpen, closeCart, incrementItem, decrementItem, removeItem } = useCart();

  if (!isCartOpen) {
    return null;
  }

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm"
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-slate-800 bg-slate-950 shadow-2xl shadow-cyan-950/40">
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Your cart</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{items.length} item{items.length === 1 ? '' : 's'}</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-slate-700 px-3 py-1.5 text-sm text-slate-300 transition hover:border-cyan-500/40 hover:text-white"
          >
            Close
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-slate-700 bg-slate-900/60 p-8 text-center">
              <p className="text-lg font-medium text-white">Your bag is empty</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Add a few favorites to begin building your order.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="rounded-[1.5rem] border border-slate-800 bg-slate-900/80 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className={`mb-3 h-16 w-16 rounded-2xl bg-gradient-to-br ${item.gradient}`} />
                    <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-slate-400 transition hover:text-rose-300"
                  >
                    Remove
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 p-1">
                    <button
                      type="button"
                      onClick={() => decrementItem(item.id)}
                      className="h-8 w-8 rounded-full text-lg text-slate-200 transition hover:bg-slate-800"
                      aria-label={`Decrease quantity for ${item.name}`}
                    >
                      -
                    </button>
                    <span className="min-w-6 text-center text-sm font-medium text-white">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => incrementItem(item.id)}
                      className="h-8 w-8 rounded-full text-lg text-slate-200 transition hover:bg-slate-800"
                      aria-label={`Increase quantity for ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-lg font-semibold text-white">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-slate-800 bg-slate-950 px-6 py-5">
          <div className="flex items-center justify-between text-sm text-slate-400">
            <span>Subtotal</span>
            <span className="text-lg font-semibold text-white">${subtotal.toFixed(2)}</span>
          </div>
          {items.length > 0 ? (
            <Link
              href="/checkout"
              onClick={closeCart}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Checkout
            </Link>
          ) : (
            <button
              type="button"
              className="mt-5 w-full rounded-full bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-400"
              disabled
            >
              Checkout
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
