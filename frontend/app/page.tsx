import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";

import FeaturedDrinks from "@/components/sections/FeaturedDrinks";
import Categories from "@/components/sections/Categories";
import HeroBanner from "@/components/sections/HeroBanners";
import Recommendations from "@/components/sections/Recommendations";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] pb-28">
      <div className="mx-auto max-w-[1400px] px-6">
        <Header />

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Conteúdo Principal */}
          <div className="space-y-10 lg:col-span-2">
            <FeaturedDrinks />

            <Categories />

            <HeroBanner />

            <Recommendations />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-stone-800">
                🏅 Nível Ouro
              </h3>

              <p className="mb-4 text-stone-500">
                Faltam 320 pontos para o próximo nível
              </p>

              <div className="h-3 overflow-hidden rounded-full bg-stone-200">
                <div className="h-full w-[68%] rounded-full bg-amber-500" />
              </div>

              <p className="mt-3 text-sm text-stone-500">
                680 / 1000 pontos
              </p>
            </div>

            <div className="rounded-3xl bg-yellow-100 p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold">
                🎯 Desafio do Dia
              </h3>

              <p className="mb-4">
                Peça um café gelado e ganhe 50 pontos.
              </p>

              <button className="rounded-full bg-amber-500 px-5 py-2 text-white">
                Participar
              </button>
            </div>

            <div className="rounded-3xl bg-green-50 p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold">
                ⚡ Pedido Rápido
              </h3>

              <p className="text-stone-600">
                Latte Caramelo
              </p>

              <button className="mt-4 rounded-full bg-green-500 px-5 py-2 text-white">
                Pedir novamente
              </button>
            </div>
          </aside>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}