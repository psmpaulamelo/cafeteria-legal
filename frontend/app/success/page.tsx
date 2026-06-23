"use client";

import { useState } from "react";
import Link from "next/link";

  type OrderItem = {
    id: number;
    quantity: number;
    unitPrice: number;
    drink?: {
      name: string;
    };
    customDrink?: {
      generatedName: string;
    };
  };

  type Order = {
    orderNumber: string;
    status: string;
    paymentMethod: string;
    totalPrice: number;
    createdAt: string;
    items: OrderItem[];
  };

  export default function SuccessPage() {
  const [order] = useState<Order | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const data = localStorage.getItem("lastOrder");

    return data ? JSON.parse(data) : null;
  });

  if (!order) {
    return (
      <main
        className="
          flex
          min-h-screen
          items-center
          justify-center
        "
      >
        Carregando...
      </main>
    );
  }

  return (
    <main
      className="
        min-h-screen
        bg-[#F8F6F2]
        flex
        items-center
        justify-center
        p-6
      "
    >
      <div
        className="
          w-full
          max-w-2xl
          rounded-3xl
          bg-white
          p-8
          shadow-lg
        "
      >
        {/* Título */}
        <div className="text-center">
          <h1
            className="
              text-4xl
              font-bold
              text-green-600
            "
          >
            ✅ Pedido realizado!
          </h1>

          <p className="mt-2 text-stone-500">
            Seu café já está sendo preparado.
          </p>
        </div>

        {/* Pedido */}
        <div
          className="
            mt-8
            rounded-2xl
            bg-amber-50
            p-5
          "
        >
          <p className="text-sm text-stone-500">
            Número do Pedido
          </p>

          <h2
            
            className="
              text-4xl
              font-extrabold
              text-amber-600
            "
          >
          
            #{order.orderNumber}
          </h2>

          <div className="mt-4">
            <p className="text-sm text-stone-500">
              Data do Pedido
            </p>

            <p className="font-medium">
              {new Date(
                order.createdAt
              ).toLocaleString(
                "pt-BR"
              )}
            </p>
          </div>
        </div>
  
        {/* Forma de Pagamento */}
        <div className="mt-6">
          <h3 className="mb-2 font-semibold">
            Forma de Pagamento
          </h3>

          <span
            className="
              rounded-full
              bg-amber-100
              px-4
              py-2
              text-sm
              font-medium
              text-amber-700
            "
          >
            💳 {order.paymentMethod}
          </span>
        </div>

        {/* Tempo */}
        <div
          className="
            mt-6
            rounded-2xl
            bg-blue-50
            p-4
          "
        >
          <p className="font-semibold">
            Tempo estimado
          </p>

          <p className="text-stone-600">
            Seu pedido ficará pronto
            em aproximadamente
            15 minutos.
          </p>
        </div>

          {/* Itens */}
            <div className="mt-8">
              <h3 className="mb-4 text-xl font-bold">
                Itens do Pedido
              </h3>

              {order.items.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b py-3"
                  >
                    <div>
                      <p className="font-medium">
                        {item.drink?.name ??
                          item.customDrink?.generatedName ??
                          "Café Especial"}
                      </p>

                      <p className="text-sm text-stone-500">
                        Quantidade: {item.quantity}
                      </p>
                    </div>

                    <span className="font-semibold text-amber-700">
                      R$
                      {(
                        (item.unitPrice ?? 0) *
                        (item.quantity ?? 1)
                      ).toFixed(2)}
                    </span>
                  </div>
                );
              })}

              <div className="mt-6 rounded-2xl bg-amber-50 p-4">
                <div className="flex justify-between">
                  <span className="text-lg font-bold">
                    Total do Pedido
                  </span>

                  <span className="text-2xl font-extrabold text-amber-600">
                    R$
                    {(order.totalPrice ?? 0).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
        {/* Retirada */}
        <div
          className="
            mt-8
            rounded-3xl
            bg-green-50
            p-6
            text-center
          "
          >
          <h3
            className="
              text-2xl
              font-bold
              text-green-700
            "
            >
            ☕ Pedido em Preparação
          </h3>

          <p className="mt-3 text-stone-600">
            Seu pedido foi recebido com sucesso.
          </p>

          <p className="mt-2 text-stone-600">
            Dirija-se ao balcão e acompanhe
            o número do pedido para retirada.
          </p>

          <p
            className="
              mt-4
              text-lg
              font-semibold
              text-green-700
            "
            >
            Tempo estimado:
            10 a 15 minutos
          </p>
          </div>

          {/* Botões */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-4
            "
            >
            <Link
              href="/"
              className="
                rounded-full
                bg-amber-500
                px-6
                py-3
                text-white
                transition
                hover:bg-amber-600
              "
              >
              Voltar para Home
            </Link>

              <Link
                href="/"
                className="
                  rounded-full
                  bg-stone-200
                  px-6
                  py-3
                  transition
                  hover:bg-stone-300
                "
                >
                Fazer Novo Pedido
              </Link>
        </div>
      </div>
    </main>
  );
}
