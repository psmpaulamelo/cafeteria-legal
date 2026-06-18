const categories = [
  { icon: "☕", label: "Quentes" },
  { icon: "🧊", label: "Gelados" },
  { icon: "🍩", label: "Doces" },
  { icon: "⭐", label: "Especiais" },
  { icon: "🍰", label: "Lanches" },
];

export default function Categories() {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-stone-800">
        Categorias
      </h2>

      <div className="flex gap-4 overflow-x-auto">
        {categories.map((category) => (
          <div
            key={category.label}
            className="flex min-w-[90px] flex-col items-center rounded-3xl bg-white p-4 shadow-sm"
          >
            <span className="text-3xl">{category.icon}</span>
            <span className="mt-2 text-sm font-medium">
              {category.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}