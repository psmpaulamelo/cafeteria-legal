export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-8">
      <div>
        <h1 className="text-6xl font-bold text-stone-800">
          Olá, Paula! ☕💛
        </h1>

        <p className="mt-3 text-stone-500">
          Que tal um café incrível hoje?
        </p>
      </div>

      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-200 text-xl">
        👩
      </div>
    </header>
  );
}