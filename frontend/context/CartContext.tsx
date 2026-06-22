"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo
} from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  size?: string;
  consumption?: string;
};

type CartContextType = {
  items: CartItem[];
  isLoaded: boolean;

  addItem: (
    item: Omit<CartItem, "quantity">
  ) => void;

  removeItem: (
    id: number
  ) => void;

  clearCart: () => void;

  increaseQuantity: (
    id: number
  ) => void;

  decreaseQuantity: (
    id: number
  ) => void;
};

const CartContext =
  createContext<CartContextType>(
    {} as CartContextType
  );

export function CartProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [items, setItems] = useState<CartItem[]>([]);
const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
  const stored = globalThis.window.localStorage.getItem("cart");

  if (stored) {
    setItems(JSON.parse(stored));
  }

  setIsLoaded(true);
}, []);

useEffect(() => {
  if (!isLoaded) return;

  globalThis.window.localStorage.setItem(
    "cart",
    JSON.stringify(items)
  );
}, [items, isLoaded]);



  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(items)
    );
  }, [items]);

  function addItem(
    item: Omit<CartItem, "quantity">
  ) {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === item.id
      );

      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? {
                ...i,
                quantity:
                  i.quantity + 1,
              }
            : i
        );
      }

      return [
        ...prev,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  }

  function removeItem(id: number) {
    setItems((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  }

  function clearCart() {
    setItems([]);
  }

  function increaseQuantity(
    id: number
  ) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(
    id: number
  ) {
    setItems((prev) =>
      prev.flatMap((item) => {
        if (item.id !== id) {
          return [item];
        }

        if (item.quantity === 1) {
          return [];
        }

        return [
          {
            ...item,
            quantity:
              item.quantity - 1,
          },
        ];
      })
    );
  }

    const value = useMemo(
    () => ({
      items,
      isLoaded,
      addItem,
      removeItem,
      clearCart,
      increaseQuantity,
      decreaseQuantity,
    }),
    [items, isLoaded]
  );
  return (
   <CartContext.Provider value={value}>
 
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(
    CartContext
  );
}