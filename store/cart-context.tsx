'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  gradient: string;
  badge: string;
  category: string;
};

export type CartItem = Product & {
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  isCartOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, nextQuantity: number) => void;
  incrementItem: (productId: string) => void;
  decrementItem: (productId: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  getItemQuantity: (productId: string) => number;
};

const CART_STORAGE_KEY = 'novamarket-cart';
const CartContext = createContext<CartContextValue | undefined>(undefined);

function readStoredCart(): CartItem[] {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const value = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!value) {
      return [];
    }

    const parsed = JSON.parse(value) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => readStoredCart());
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }
  }, [items]);

  const addItem = (product: Product) => {
    setItems((currentItems) => {
      const foundIndex = currentItems.findIndex((item) => item.id === product.id);

      if (foundIndex >= 0) {
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });

    setIsCartOpen(true);
  };

  const removeItem = (productId: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, nextQuantity: number) => {
    setItems((currentItems) => {
      if (nextQuantity <= 0) {
        return currentItems.filter((item) => item.id !== productId);
      }

      return currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: nextQuantity } : item,
      );
    });
  };

  const incrementItem = (productId: string) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decrementItem = (productId: string) => {
    setItems((currentItems) =>
      currentItems.flatMap((item) => {
        if (item.id !== productId) {
          return [item];
        }

        const nextQuantity = item.quantity - 1;
        return nextQuantity <= 0 ? [] : [{ ...item, quantity: nextQuantity }];
      }),
    );
  };

  const clearCart = () => setItems([]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((current) => !current);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);
    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return {
      items,
      itemCount,
      subtotal,
      isCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      incrementItem,
      decrementItem,
      clearCart,
      openCart,
      closeCart,
      toggleCart,
      getItemQuantity: (productId: string) =>
        items.find((item) => item.id === productId)?.quantity ?? 0,
    };
  }, [items, isCartOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used inside CartProvider');
  }

  return context;
}
