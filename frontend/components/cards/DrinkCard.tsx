"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface DrinkCardProps {
  id: number;
  name: string;
  price: number;
  image?: string;
  favorite?: boolean;
}

export default function DrinkCard({
  id,
  name,
  price,
  image,
  favorite = false,
}: DrinkCardProps) {
  const {
    items,
    addItem,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const cartItem = items.find(
    (item) => item.id === id
  );
  const [selectedSize, setSelectedSize] =
    useState("M");

  const [consumption, setConsumption] =
    useState("local");


  const finalPrice = (() => {
      if (consumption === "takeaway") {
        if (selectedSize === "M") {
          return price + 2;
        }

        if (selectedSize === "G") {
          return price + 3;
        }
      }

      return price;
    })();

  const quantity =
    cartItem?.quantity || 0;
    

  return (
    <div
      className="
        relative
        min-h-[260px]
        rounded-3xl
        bg-white
        p-4
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        cursor-pointer
      "
    >
      {/* Favorito */}
      <button
        className="
          absolute
          right-4
          top-4
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-md
          z-10
        "
      >
        {favorite ? "❤️" : "🤍"}
      </button>

      {/* Imagem */}
      <div
        className="
          mb-4
          flex
          h-40
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-b
          from-amber-50
          to-amber-100
          overflow-hidden
        "
      >
        <div className="relative h-28 w-28">
          <Image
            src={
              image ||
              "/assets/drinks/latte.png"
            }
            alt={name}
            fill
            sizes="112px"
            className="
              object-contain
              drop-shadow-lg
            "
          />
        </div>
      </div>

        {/* Conteúdo */}
        <h3 className="text-lg font-semibold text-stone-800">
          {name}
        </h3>

        <p className="mt-1 text-sm text-stone-500">
          Café especial da casa
        </p>

       {/* TAMANHO */}
          <div className="mt-4">
            <p className="mb-1 text-xs font-semibold text-stone-500">
              Tamanho
            </p>

            <div className="mt-2 flex gap-3">

              <button
                onClick={() => setSelectedSize("P")}
                className={`
                  min-w-[48px]
                  rounded-xl
                  bg-grey  p-5   shadow-md 
                  px-3
                  py-2
                  text-sm
                  font-medium
                  ${
                    selectedSize === "P"
                      ? "border-amber-500 bg-amber-100"
                      : ""
                  }
                `}
              >
                P
              </button>

              <button
                onClick={() => setSelectedSize("M")}
                className={`
                  min-w-[48px]
                  rounded-xl
                  bg-grey  p-5   shadow-md 
                  px-3
                  py-2
                  text-sm
                  font-medium
                  ${
                    selectedSize === "M"
                      ? "border-amber-500 bg-amber-100"
                      : ""
                  }
                `}
              >
                M
              </button>

              <button
                onClick={() => setSelectedSize("G")}
                className={`
                  min-w-[48px]
                  rounded-xl
                  bg-grey  p-5   shadow-md 
                  px-3
                  py-2
                  text-sm
                  font-medium
                  ${
                    selectedSize === "G"
                      ? "border-amber-500 bg-amber-100"
                      : ""
                  }
                `}
              >
                G
              </button>

            </div>
          </div>

        {/* CONSUMO */}
            <div className="mt-4">
              <p className="mb-1 text-xs font-semibold text-stone-500">
                Consumo
              </p>

              <div className="mt-2 flex gap-3 ">

                <button
                  onClick={() =>
                    setConsumption("local")
                  }
                  className={`
                    flex-1
                    rounded-xl
                    bg-grey  p-5   shadow-md 
                    px-3
                    py-2
                    text-sm
                    font-medium
                    ${
                      consumption === "local"
                        ? "border-green-500 bg-green-50"
                        : ""
                    }
                  `}
                >
                  ☕ Loja
                </button>

                <button
                  onClick={() =>
                    setConsumption("takeaway")
                  }
                  className={`
                    flex-1
                    rounded-xl
                    bg-grey  p-5   shadow-md 
                    px-3
                    py-2
                    text-sm
                    font-medium
                    ${
                      consumption === "takeaway"
                        ? "border-green-500 bg-green-50"
                        : ""
                    }
                  `}
                >
                  🥤 Levar
                </button>

              </div>
            </div>

        {/* QUANTIDADE */}
            <div className="mt-4 flex items-center justify-center gap-1">

              <button
                onClick={() => decreaseQuantity(id)}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-stone-200
                  font-bold
                  text-lg
                  hover:bg-stone-300
                "
              >
                -
              </button>

              <span
                className="
                  min-w-[30px]
                  text-center
                  text-lg
                  font-bold
                "
              >
                {quantity}
              </span>

              <button
                onClick={() => {
                  if (!cartItem) {
                    addItem({
                     id,
                    name,
                    price: finalPrice,
                    size: selectedSize,
                    consumption,
                    });
                  } else {
                    increaseQuantity(id);
                  }
                }}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-amber-500
                  text-white
                  font-bold
                  text-lg
                  hover:bg-amber-600
                "
              >
                +
              </button>

            </div>

            {/* PREÇO */}
            <div className="mt-3 text-center">

              <span
                className="
                  text-xl
                  font-bold
                  text-amber-700
                "
              >
                R$ {finalPrice.toFixed(2)}
              </span>
        </div>
    </div>
  );
}