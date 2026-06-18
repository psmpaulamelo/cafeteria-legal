"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

type Ingredient = {
  id: number;
  name: string;
  type: "base" | "additional";
  price: number;
};

type GeneratedDrink = {
  generatedName: string;
  name?: string;
  drinkName?: string;
};

export default function CustomDrinksPage() {
  const router = useRouter();
  
  const [ingredients, setIngredients] =
    useState<Ingredient[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [selectedBase, setSelectedBase] =
  useState("");

 const [selectedSize, setSelectedSize] =
  useState("");

  const [
    consumptionType,
    setConsumptionType,
  ] = useState("");
   
  const { addItem } = useCart();


  function handleContinueShopping() {
    router.push("/");
  }

  const [selectedExtras, setSelectedExtras] =
  useState<string[]>([]);  
      useEffect(() => {
      async function loadIngredients() {
        try {
          const response =
            await fetch(
              "http://127.0.0.1:3001/ingredients"
            );

          const data =
            await response.json();

          console.log(
            "API RETORNOU:",
            data
          );

          setIngredients(data);

        } catch (error) {

          console.error(
            "Erro ao carregar ingredientes",
            error
          );

        } finally {
          setLoading(false);
        }
      }

      loadIngredients();
    }, []);
    const [generatedDrink, setGeneratedDrink] =
    useState<GeneratedDrink | null>(null);

  const baseIngredients =
    ingredients.filter(
      ingredient =>
        ingredient.type === "base"
    );

    const additionalIngredients =
    ingredients.filter(
      ingredient =>
        ingredient.type ===
        "additional"
    );

  if (loading) {
    return (
      <div className="p-8">
        Carregando ingredientes...
      </div>
    );
  }
        console.log(
        "INGREDIENTS:",
        ingredients
      );

      console.log(
        "BASES:",
        baseIngredients
      );

      console.log(
        "EXTRAS:",
        additionalIngredients
      );
  
        function toggleExtra(
        extraName: string
        ) {
        setSelectedExtras(prev => {
            if (
            prev.includes(extraName)
            ) {
            return prev.filter(
                item =>
                item !== extraName
            );
            }

            return [...prev, extraName];
        });
        }

        const selectedBaseItem =
        baseIngredients.find(
            item =>
            item.name ===
            selectedBase
        );

        const extrasPrice =
        additionalIngredients
            .filter(item =>
            selectedExtras.includes(
                item.name
            )
            )
            .reduce(
            (acc, item) =>
                acc + item.price,
            0
            );

        let totalPrice =
          (selectedBaseItem?.price || 0) +
          extrasPrice;

        if (selectedSize === "medium")
          totalPrice += 2;

        if (selectedSize === "large")
          totalPrice += 4;

        if (
          consumptionType ===
          "takeaway"
        ) {

          if (selectedSize === "medium")
            totalPrice += 2;

          if (selectedSize === "large")
            totalPrice += 3;
        }
    async function handleCreateRecipe() {
      if (!selectedBase) {
        alert("Selecione uma base.");
        return;
      }

      if (!selectedSize) {
        alert("Selecione um tamanho.");
        return;
      }

      if (!consumptionType) {
        alert("Selecione a forma de consumo.");
        return;
      }

      try {
        const payload = {
          ingredients: [
            selectedBase,
            ...selectedExtras,
          ],
          size: selectedSize,
          consumption: consumptionType,
        };

        console.log("Payload enviado:", payload);

        const response = await fetch(
          "http://localhost:3001/custom-drinks/generate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();

        console.log("Drink gerado:", data);

        setGeneratedDrink(data);

        // adiciona automaticamente ao carrinho
        addItem({
          id: Date.now(),
          name: data.generatedName,
          price: totalPrice,
          size: selectedSize,
          consumption: consumptionType,
        });

      } catch (error) {
        console.error(error);
      }
    }
      
    function getDrinkImage(name: string) {
    const images: Record<string, string> = {

        // Drinks do banco
        Choconela:
        "/assets/drinks/choconela.png",

        Lexpresso:
        "/assets/drinks/lexpresso.png",

        Baunela:
        "/assets/drinks/baunela.png",

        Chocopuma:
        "/assets/drinks/chocopuma.png",

        Caraleite:
        "/assets/drinks/caraleite.png",

        Espumita:
        "/assets/drinks/espumita.png",

        Tremidão:
        "/assets/drinks/tremidao.png",

        "Geladinho Nervoso":
        "/assets/drinks/geladinho-nervoso.png",

        // Receitas clássicas
        Latte:
        "/assets/drinks/latte.png",

        Cappuccino:
        "/assets/drinks/cappuccino.png",

        Mocha:
        "/assets/drinks/mocha.png",

        Espresso:
        "/assets/drinks/espresso.png",

        Americano:
        "/assets/drinks/americano.png",

        Macchiato:
        "/assets/drinks/macchiato.png",

        // Receita não encontrada
        "Misturadão ESPRESSO":
        "/assets/drinks/misturadao-espresso.png",

        "Misturadão CHOCOLATE":
        "/assets/drinks/misturadao-chocolate.png",

        "Misturadão CARAMELO":
        "/assets/drinks/misturadao-caramelo.png",

        "Misturadão BAUNILHA":
        "/assets/drinks/misturadao-baunilha.png",

        "Misturadão CHA":
        "/assets/drinks/misturadao-cha.png",
    };

    return (
        images[name] ||
        "/assets/drinks/default-drink.png"
    );
    }
    function handleClearSelections() {
      setSelectedBase("");
      setSelectedExtras([]);
      setSelectedSize("");
      setConsumptionType("");
      setGeneratedDrink(null);
    }

    function handleAddToCart() {
      if (!generatedDrink) return;

      addItem({
        id: Date.now(),
        name: generatedDrink.generatedName,
        price: totalPrice,
        image: getDrinkImage(generatedDrink.generatedName),
        size: selectedSize,
        consumption:
          consumptionType === "local"
            ? "Consumir na Loja"
            : "Levar para Casa",
      });

      router.push("/");
    }

return (
  <main className="min-h-screen bg-[#F8F6F2] p-8">
    <div className="mx-auto max-w-7xl">

      <h1 className="mb-2 text-4xl font-bold">
        Personalize seu Café ☕
      </h1>

      <p className="mb-8 text-stone-500">
        Monte sua bebida do seu jeito.
      </p>
    

      <div className="grid gap-8 lg:grid-cols-2">

        {/* COLUNA ESQUERDA */}
        <div className="rounded-3xl bg-white p-8 shadow-sm">

          {/* BASES */}
          <h2 className="mb-4 text-xl font-bold">
            Escolha sua Base ☕
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {baseIngredients.map((ingredient) => (
              <button
                key={ingredient.id}
                onClick={() =>
                  setSelectedBase(
                    ingredient.name
                  )
                }
                className={`
                  rounded-2xl
                  bg-grey  p-5   shadow-md 
                  p-4
                  text-left
                  transition
                  ${
                    selectedBase ===
                    ingredient.name
                      ? "border-green-500 bg-green-50"
                      : "hover:border-green-500"
                  }
                `}
              >
                <p className="font-bold">
                  {ingredient.name}
                </p>

                <p className="text-sm text-stone-500">
                  R$
                  {ingredient.price.toFixed(
                    2
                  )}
                </p>
              </button>
            ))}
          </div>

          {/* EXTRAS */}
          <h2 className="mb-4 mt-8 text-xl font-bold">
            Extras ✨
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {additionalIngredients.map(
              (ingredient) => (
                <button
                  key={ingredient.id}
                  onClick={() =>
                    toggleExtra(
                      ingredient.name
                    )
                  }
                  className={`
                    rounded-2xl
                    bg-grey  p-5   shadow-md 
                    p-4
                    text-left
                    transition
                    ${
                      selectedExtras.includes(
                        ingredient.name
                      )
                        ? "border-green-500 bg-green-50"
                        : "hover:border-green-500"
                    }
                  `}
                >
                  <p className="font-bold">
                    {ingredient.name}
                  </p>

                  <p className="text-sm text-stone-500">
                    + R$
                    {ingredient.price.toFixed(
                      2
                    )}
                  </p>
                </button>
              )
            )}
          </div>

          {/* TAMANHO */}
          <h2 className="mb-4 mt-8 text-xl font-bold">
            Tamanho 📏
          </h2>

          <div className="grid grid-cols-3 gap-4">

            <button
              onClick={() =>
                setSelectedSize("small")
              }
              className={`
                rounded-xl
                bg-grey  p-5   shadow-md 
                p-4
                ${
                  selectedSize ===
                  "small"
                    ? "border-green-500 bg-green-50"
                    : ""
                }
              `}
            >
              Pequeno
            </button>

            <button
              onClick={() =>
                setSelectedSize("medium")
              }
              className={`
                rounded-xl
                bg-grey  p-5   shadow-md 
                p-4
                ${
                  selectedSize ===
                  "medium"
                    ? "border-green-500 bg-green-50"
                    : ""
                }
              `}
            >
              Médio
            </button>

            <button
              onClick={() =>
                setSelectedSize("large")
              }
              className={`
                rounded-xl
                bg-grey  p-5   shadow-md 
                p-4
                ${
                  selectedSize ===
                  "large"
                    ? "border-green-500 bg-green-50"
                    : ""
                }
              `}
            >
              Grande
            </button>

          </div>

          {/* ENTREGA */}
          <h2 className="mb-4 mt-8 text-xl font-bold">
            Entrega 🚚
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <button
              onClick={() =>
                setConsumptionType(
                  "local"
                )
              }
              className={`
                rounded-xl
                bg-grey  p-5   shadow-md 
                p-4
                ${
                  consumptionType ===
                  "local"
                    ? "border-green-500 bg-green-50"
                    : ""
                }
              `}
            >
              ☕ Consumir na Loja
            </button>

            <button
              onClick={() =>
                setConsumptionType(
                  "takeaway"
                )
              }
              className={`
                rounded-xl
                bg-grey  p-5   shadow-md 
                p-4
                ${
                  consumptionType ===
                  "takeaway"
                    ? "border-green-500 bg-green-50"
                    : ""
                }
              `}
            >
              🛍️ Levar para Casa
            </button>

          </div>
           <button
              onClick={handleCreateRecipe}
              className="
                mt-8
                w-full
                rounded-full
                bg-green-500
                py-3
                font-semibold
                text-white
                transition
                hover:bg-green-600
              "
            >
              Criar Minha Receita
         </button>
            <button
              onClick={handleClearSelections}
              className="
                mt-3
                w-full
                rounded-full
                bg-amber-500
                py-3
                font-semibold
                text-white
                transition
                hover:bg-amber-600
              "
              >
                Limpar Seleções
              </button>
        </div>

        {/* COLUNA DIREITA */}
            <div className="space-y-6">
                  {/* RECEITA */}
                  <div className="rounded-3xl bg-white p-8 shadow-sm">

                          <h2 className="mb-6 text-2xl font-bold">
                            {generatedDrink
                              ? "☕ Receita criada exclusivamente para você"
                              : "☕ Monte sua Receita"}
                          </h2>

                          <p className="mt-3 text-stone-500">
                            {generatedDrink
                              ? "Esperamos que goste, fizemos com carinho ❤️"
                              : "Escolha uma base e extras para descobrir uma bebida exclusiva."}
                          </p>
                          {generatedDrink ? (
                              <div className="text-center">
                                
                                <img
                                  src={
                                    getDrinkImage(
                                      generatedDrink.generatedName
                                    ) || "/assets/drinks/latte.png"
                                  }
                                  alt={generatedDrink.generatedName}
                                  onError={(e) => {
                                    e.currentTarget.src =
                                      "/assets/drinks/latte.png";
                                  }}
                                  className="
                                    mx-auto
                                    mb-6
                                    h-48
                                    w-48
                                    rounded-full
                                    object-cover
                                    shadow-lg
                                  "
                                />
                                
                                <h3 className="text-4xl font-bold text-amber-700">
                                  {generatedDrink.generatedName}
                                </h3>

                                <p className="mt-3 text-stone-500">
                                  Receita criada especialmente para você.
                                </p>

                                <div className="mt-6 text-center">
                                  <h3 className="mt-4 text-3xl font-bold text-amber-700">
                                    {generatedDrink.generatedName}
                                  </h3>
                                  <p className="text-sm font-medium text-stone-500">
                                    Valor Total
                                  </p>

                                  <p className="mt-1 text-3xl font-extrabold text-amber-600">
                                    {totalPrice.toLocaleString("pt-BR", {
                                      style: "currency",
                                      currency: "BRL",
                                    })}
                                  </p>

                                </div>

                                <button
                                  onClick={() =>
                                    router.push("/payment")
                                  }
                                  className="
                                    mt-8
                                    w-full
                                    rounded-full
                                    bg-amber-500
                                    py-3
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-amber-600
                                  "
                                >
                                  Ir para Pagamento
                                </button>

                              </div>
                            ) : (
                            <div className="text-center">

                              <img
                                src="/assets/drinks/choconela.png"
                                alt="Café"
                                className="
                                  mx-auto
                                  mt-8
                                  mb-6
                                  h-40
                                  w-40
                                  rounded-full
                                  object-cover
                                  shadow-lg
                                "
                              />
                              <button
                                onClick={handleAddToCart}
                                className="
                                  mt-3
                                  w-full
                                  rounded-full
                                  bg-green-500
                                  py-3
                                  font-semibold
                                  text-white
                                  transition
                                  hover:bg-green-600
                                "
                              >
                                Adicionar ao Carrinho
                              </button>
                              
                            </div>
                            
                          )}
              {/* RESUMO */}
              <div className="rounded-3xl bg-white p-6">

                <h2 className="mb-6 text-2xl font-bold">
                  Resumo do Pedido
                </h2>

                <div className="grid gap-6 md:grid-cols-2">

                  <div>
                    <p className="text-sm text-stone-500">
                      Base
                    </p>

                    <p className="font-semibold">
                      {selectedBase || "Nenhuma selecionada"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-stone-500">
                      Extras
                    </p>

                    <p className="font-semibold">
                      {selectedExtras.length
                        ? selectedExtras.join(", ")
                        : "Nenhum"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-stone-500">
                      Tamanho
                    </p>

                    <p className="font-semibold">
                      {selectedSize || "Não selecionado"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-stone-500">
                      Entrega
                    </p>

                    <p className="font-semibold">
                      {!consumptionType
                        ? "Não selecionado"
                        : consumptionType === "local"
                        ? "Consumir na Loja"
                        : "Levar para Casa"}
                    </p>
                  </div>

                </div>

                {/* BOTÃO */}
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={handleContinueShopping}
                    className="
                      mt-8
                      w-full
                      rounded-full
                      bg-yellow-500
                      py-3
                      font-semibold
                      text-white
                      transition
                      hover:bg-yellow-600
                    "
                  >
                    Continuar Comprando
                  </button>
                </div>

              </div>

              
                    </div>

            </div>

      </div>

    </div>
  </main>
);}
