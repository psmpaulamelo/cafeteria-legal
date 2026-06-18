"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext"

function createOrderNumber() {
  return Math.floor(
    1000 + Math.random() * 9000
  );
}

export default function PaymentPage() {
  const router = useRouter();
  const { items } = useCart();

  const total = items.reduce(
  (acc, item) =>
    acc + item.price * item.quantity,
  0
);

  const [paymentMethod, setPaymentMethod] =
    useState("credit");

  const [cardNumber, setCardNumber] =
  useState("");

  const [cardNumberError,
    setCardNumberError] =
    useState("");

  const [cardName, setCardName] =
  useState("");

  const [cardNameError,
    setCardNameError] =
    useState("");

  const [expiry, setExpiry] =
  useState("");

  const [expiryError,
    setExpiryError] =
    useState("");

  const [cvv, setCvv] =
  useState("");

  const [cvvError,
    setCvvError] =
    useState("");

  const [debitPassword,
  setDebitPassword] =
  useState("");

  const [debitError,
    setDebitError] =
    useState("");
function handleFinishPayment() {
  if (paymentMethod === "credit") {
    if (
      !cardNumber ||
      !cardName ||
      !expiry ||
      !cvv
    ) {
      alert(
        "Preencha todos os campos do cartão."
      );
      return;
    }
  }

  if (paymentMethod === "debit") {
    if (debitPassword.length < 4) {
      alert(
        "Informe uma senha válida."
      );
      return;
    }
  }

  const order = {
    orderNumber: createOrderNumber(),
    status: "Em preparação",
    paymentMethod,
    total,
    createdAt: new Date().toISOString(),
    items,
  };

  localStorage.setItem(
    "lastOrder",
    JSON.stringify(order)
  );

  console.log("Pedido salvo:", order);

  router.push("/success");
}  
    
  return (
    <main className="min-h-screen bg-[#F8F6F2] p-8">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-2 text-4xl font-bold">
          Pagamento 💳
        </h1>

        <p className="mb-8 text-stone-500">
          Escolha a forma de pagamento.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ESQUERDA */}
          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">
              Método de Pagamento
            </h2>

            <div className="grid gap-3">

              <button
                onClick={() =>
                  setPaymentMethod(
                    "credit"
                  )
                }
                className={`rounded-xl bg-grey  p-5   shadow-md  p-4 text-left ${
                  paymentMethod ===
                  "credit"
                    ? "border-green-500 bg-green-50"
                    : ""
                }`}
              >
                💳 Cartão de Crédito
              </button>

              <button
                onClick={() =>
                  setPaymentMethod(
                    "debit"
                  )
                }
                className={`rounded-xl bg-grey  p-5   shadow-md  p-4 text-left ${
                  paymentMethod ===
                  "debit"
                    ? "border-green-500 bg-green-50"
                    : ""
                }`}
              >
                💳 Cartão de Débito
              </button>

              <button
                onClick={() =>
                  setPaymentMethod(
                    "pix"
                  )
                }
                className={`rounded-xl bg-grey  p-5   shadow-md  p-4 text-left ${
                  paymentMethod ===
                  "pix"
                    ? "border-green-500 bg-green-50"
                    : ""
                }`}
              >
                📱 PIX
              </button>

              <button
                onClick={() =>
                  setPaymentMethod(
                    "cash"
                  )
                }
                className={`rounded-xl bg-grey  p-5   shadow-md  p-4 text-left ${
                  paymentMethod ===
                  "cash"
                    ? "border-green-500 bg-green-50"
                    : ""
                }`}
              >
                💵 Dinheiro
              </button>

            </div>

            {/* CRÉDITO */}
            {paymentMethod ===
              "credit" && (
              <div className="mt-8 space-y-4">

                <input
                className="
                w-full
                rounded-xl
                border
                p-4
                "
                placeholder="Número do Cartão"
                    value={cardNumber}
                    onChange={(e) => {

                        const value =
                        e.target.value.replace(
                            /\D/g,
                            ""
                        );

                        if (value.length <= 16) {
                        setCardNumber(value);
                        }

                        if (value.length > 16) {
                        setCardNumberError(
                            "Cartão deve possuir no máximo 16 dígitos"
                        );
                        } else {
                        setCardNumberError("");
                        }
                    }}

                />
                    {
                        cardNumberError && (
                            <p className="mt-1 text-sm text-red-500">
                            {cardNumberError}
                            </p>
                        )
                        }
                <input
                className="
                    w-full
                    rounded-xl
                    border
                    p-4
                    "
                    placeholder="Nome no Cartão"
                    value={cardName}
                    onChange={(e) => {

                        const value =
                        e.target.value;

                        if (
                        /^[A-Za-zÀ-ÿ\s]*$/.test(
                            value
                        )
                        ) {
                        setCardName(value);
                        setCardNameError("");
                        } else {
                        setCardNameError(
                            "Digite apenas letras"
                        );
                        }
                    }}
                />
                    {
                        cardNameError && (
                            <p className="mt-1 text-sm text-red-500">
                            {cardNameError}
                            </p>
                        )
                        }

                <div className="grid grid-cols-2 gap-4">

                  <input
                  className="
                    w-full
                    rounded-xl
                    border
                    p-4
                    "
                        placeholder="MM/AA"
                        value={expiry}
                        onChange={(e) => {

                            const value =
                            e.target.value;

                            setExpiry(value);

                            const parts =
                            value.split("/");

                            if (parts.length === 2) {

                            const month =
                                Number(parts[0]);

                            const year =
                                Number(parts[1]);

                            const currentYear =
                                Number(
                                new Date()
                                    .getFullYear()
                                    .toString()
                                    .slice(-2)
                                );

                            if (
                                month < 1 ||
                                month > 12
                            ) {
                                setExpiryError(
                                "Mês inválido"
                                );
                            } else if (
                                year < currentYear
                            ) {
                                setExpiryError(
                                "Cartão expirado"
                                );
                            } else {
                                setExpiryError("");
                            }
                            }
                            }}
                    />
                    {expiryError && (
                        <p className="text-red-500">
                            {expiryError}
                        </p>
                    )}
                  <input
                  className="
                    w-full
                    rounded-xl
                    border
                    p-4
                    "
                    placeholder="CVV"
                        value={cvv}
                        onChange={(e) => {

                            const value =
                            e.target.value.replace(
                                /\D/g,
                                ""
                            );

                            if (value.length <= 3) {
                            setCvv(value);
                            setCvvError("");
                            } else {
                            setCvvError(
                                "CVV deve ter 3 dígitos"
                            );
                            }
                        }}
                    />
                    {cvvError && (
                        <p className="text-red-500">
                            {cvvError}
                        </p>
                    )}

                </div>

              </div>
            )}

            {/* DÉBITO */}
            {paymentMethod ===
              "debit" && (
              <div className="mt-8">

                <p className="mb-4 text-stone-500">
                  Informe a senha do
                  cartão.
                </p>

                <input
                 className="
                    w-full
                    rounded-xl
                    border
                    p-4
                    "
                    type="password"
                    placeholder="Senha"

                    value={debitPassword}

                    onChange={(e) => {

                        const value =
                        e.target.value.replace(
                            /\D/g,
                            ""
                        );

                        if (value.length <= 4) {
                        setDebitPassword(value);
                        setDebitError("");
                        } else {
                        setDebitError(
                            "Senha deve possuir 4 dígitos"
                        );
                        }
                    }}
                />
                    {debitError && (
                        <p className="mt-2 text-sm text-red-500">
                            {debitError}
                        </p>
                    )}

              </div>
            )}

            {/* PIX */}
            {paymentMethod === "pix" && (
              <div
                className="
                  mt-6
                  rounded-2xl
                  border-2
                  border-dashed
                  p-6
                  text-center
                "
              >
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=CAFETERIALEGALPIX"
                  alt="QR Code PIX"
                  className="mx-auto h-52 w-52"
                />

                <p className="mt-4 font-semibold">
                  QR Code PIX
                </p>

                <p className="text-sm text-stone-500">
                  Escaneie para realizar o pagamento
                </p>

                <div
                  className="
                    mt-4
                    rounded-xl
                    bg-stone-100
                    p-3
                    text-xs
                    break-all
                  "
                >
                  CAFETERIALEGALPIX
                </div>
              </div>
            )}

            {/* DINHEIRO */}
            {paymentMethod ===
              "cash" && (
              <div className="mt-8 rounded-xl bg-green-50 p-6">

                <p className="font-semibold text-green-700">
                  Dirija-se ao nosso
                  caixa para realizar o
                  pagamento.
                </p>

              </div>
            )}

          </div>

          {/* DIREITA */}
        <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="flex h-[650px] flex-col">

              <h2 className="mb-6 text-2xl font-bold">
                Resumo do Pedido
              </h2>

              <div className="space-y-4">

                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="
                        rounded-2xl
                        bg-stone-50
                        p-4
                      "
                    >
                      <h3 className="text-xl font-bold">
                        {item.name}
                      </h3>

                      <p className="mt-2 text-sm text-stone-500">
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

                      <p className="text-sm text-stone-500">
                        Quantidade:
                        <span className="ml-1 font-semibold text-stone-700">
                          {item.quantity}
                        </span>
                      </p>

                      <p className="mt-2 text-lg font-bold text-amber-700">
                        R$
                        {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                    

              </div>

              <div className="flex-1" />

              <div
                className="
                  mb-6
                  rounded-2xl
                  bg-amber-50
                  p-5
                "
              >
                <div className="flex justify-between items-center">

                  <span className="text-xl font-bold">
                    Total
                  </span>

                  <span
                    className="
                      text-4xl
                      font-extrabold
                      text-amber-600
                    "
                  >
                    R$ {total.toFixed(2)}
                  </span>

                </div>
              </div>

              <button
                onClick={handleFinishPayment}
                className="
                  w-full
                  rounded-full
                  bg-green-500
                  py-4
                  font-semibold
                  text-white
                  hover:bg-green-600
                "
              >
                Finalizar Pedido
              </button>

            </div>
          </div>

         </div>
        </div> 

    </main>
  );
}
