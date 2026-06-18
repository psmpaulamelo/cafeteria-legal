"use client";

import Link from "next/link";
import {
  Coffee,
  Home,
  ShoppingBag,
  User,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function BottomNav() {
  const { items } = useCart();

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav
      className="
        fixed
        bottom-0
        left-0
        right-0
        h-20
        border-t
        bg-white
        shadow-lg
        z-50
      "
    >
      <div
        className="
          mx-auto
          flex
          h-full
          max-w-5xl
          items-center
          justify-around
        "
      >
        <Link
          href="/"
          className="
            flex
            flex-col
            items-center
            gap-1
            text-stone-600
            hover:text-amber-600
          "
        >
          <Home size={28} />
          <span className="text-xs font-medium">
            Home
          </span>
        </Link>

        <Link
          href="/menu"
          className="
            flex
            flex-col
            items-center
            gap-1
            text-stone-600
            hover:text-amber-600
          "
        >
          <Coffee size={28} />
          <span className="text-xs font-medium">
            Menu
          </span>
        </Link>

        <Link
          href="/orders"
          className="
            relative
            flex
            flex-col
            items-center
            gap-1
            text-stone-600
            hover:text-amber-600
          "
        >
          <ShoppingBag size={28} />

          <span className="text-xs font-medium">
            Pedidos
          </span>

          {totalItems > 0 && (
            <span
              className="
                absolute
                -right-2
                top-0
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-red-500
                text-xs
                font-bold
                text-white
              "
            >
              {totalItems}
            </span>
          )}
        </Link>

        <Link
          href="/profile"
          className="
            flex
            flex-col
            items-center
            gap-1
            text-stone-600
            hover:text-amber-600
          "
        >
          <User size={28} />
          <span className="text-xs font-medium">
            Perfil
          </span>
        </Link>
      </div>
    </nav>
  );
}