export default function Recommendations() {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-stone-800">
        Recomendados para você
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl bg-pink-100 p-5">
          <h3 className="font-semibold">
            Matcha Latte
          </h3>

          <p className="text-sm text-stone-600">
            Energize seu dia
          </p>

          <p className="mt-3 font-bold">
            R$ 13,90
          </p>
        </div>

        <div className="rounded-3xl bg-amber-100 p-5">
          <h3 className="font-semibold">
            Caramelo Macchiato
          </h3>

          <p className="text-sm text-stone-600">
            Doce na medida certa
          </p>

          <p className="mt-3 font-bold">
            R$ 13,90
          </p>
        </div>

        <div className="rounded-3xl bg-blue-100 p-5">
          <h3 className="font-semibold">
            Iced Coffee
          </h3>

          <p className="text-sm text-stone-600">
            Refrescante e delicioso
          </p>

          <p className="mt-3 font-bold">
            R$ 12,90
          </p>
        </div>
      </div>
    </section>
  );
}