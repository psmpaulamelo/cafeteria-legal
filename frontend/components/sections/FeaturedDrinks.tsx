import DrinkCard from "@/components/cards/DrinkCard";
import { mockDrinks } from "@/constants/mockDrinks";

export default function FeaturedDrinks() {
  return (
    <section>
      <div className="mb-5 flex items-center justify-between max-w-[900px]">
        <h2 className="text-3xl font-bold text-stone-800">
          Cafés Favoritos
        </h2>

        <button className="text-sm font-medium text-amber-600 hover:text-amber-700">
          Ver todos →
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {mockDrinks.map((drink) => (
          <DrinkCard
            key={drink.id}
            name={drink.name}
            id={drink.id}
            price={drink.price}
            image={drink.image}
            favorite={drink.favorite}
          />
        ))}
      </div>
    </section>
  );
}