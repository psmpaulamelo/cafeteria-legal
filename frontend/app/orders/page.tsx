"use client";


import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function OrdersPage() {
  const router = useRouter();

  const {
    items,
    removeItem,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  function handleCheckout() {
    router.push("/payment");
  }

  function handleContinueShopping() {
    router.push("/");
  }

  function handleClearCart() {
    clearCart();
    router.push("/");
  }

  return (
    <main className="min-h-screen bg-[#F8F6F2] p-8 pb-32">
      <div className="mx-auto max-w-4xl">
        {/* Título */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-stone-800">
            Meu Pedido
          </h1>

          <p className="mt-2 text-stone-500">
            Revise seus itens antes de finalizar.
          </p>
        </div>

        {/* Lista de itens */}
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="
                rounded-3xl
                bg-white
                p-6
                shadow-sm
              "
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2
                    className="
                      text-xl
                      font-bold
                      text-stone-800
                    "
                  >
                    {item.name}
                  </h2>

                  <div className="mt-3 space-y-1">
                    <p className="text-sm text-stone-500">
                      Tamanho:
                      <span className="ml-1 font-semibold text-stone-700">
                        {item.size}
                      </span>
                    </p>

                    <p className="text-sm text-stone-500">
                      Consumo:
                      <span className="ml-1 font-semibold text-stone-700">
                        {item.consumption === "takeaway"
                          ? "Levar para Casa"
                          : "Consumir na Loja"}
                      </span>
                    </p>

                    <p className="pt-2 text-stone-500">
                      Preço unitário:
                      {" "}
                      R$ {item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p
                    className="
                      text-2xl
                      font-medium
                      text-stone-500
                    "
                  >
                    Total
                  </p>

                  <p
                    className="
                      text-3xl
                      font-extrabold
                      text-amber-700
                    "
                  >
                    R$
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-between
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                    className="
                      h-10
                      w-10
                      rounded-full
                      bg-stone-200
                      text-lg
                      font-bold
                      hover:bg-stone-300
                    "
                  >
                    −
                  </button>

                  <span
                    className="
                      min-w-[30px]
                      text-center
                      font-semibold
                    "
                  >
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                    className="
                      h-10
                      w-10
                      rounded-full
                      bg-amber-500
                      text-lg
                      font-bold
                      text-white
                      hover:bg-amber-600
                    "
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="
                    text-sm
                    font-medium
                    text-red-500
                    hover:text-red-700
                  "
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Botões */}
        <div
          className="
            mt-8
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >
          <button
            onClick={handleContinueShopping}
            className="
              rounded-full
              bg-amber-500
              px-8
              py-3
              font-medium
              text-white
              transition
              hover:bg-amber-600
            "
          >
            Continuar Comprando
          </button>

          <button
            onClick={handleCheckout}
            className="
              rounded-full
              bg-green-500
              px-8
              py-3
              font-medium
              text-white
              transition
              hover:bg-green-600
            "
          >
            Ir para Pagamento
          </button>

          <button
            onClick={handleClearCart}
            className="
              rounded-full
              bg-red-500
              px-8
              py-3
              font-medium
              text-white
              transition
              hover:bg-red-600
            "
          >
            Limpar Carrinho
          </button>
        </div>
      </div>
    </main>
  );
}