import Link from "next/link";
export default function HeroBanner() {
  return (
    <section
      className="
        rounded-3xl
        bg-gradient-to-r
        from-purple-200
        to-pink-200
        p-8
        shadow-sm
      "
    >
      <h2 className="text-2xl font-bold text-stone-800">
        Monte do seu jeito! 😍
      </h2>

      <p className="mt-3 text-stone-700">
        Escolha ingredientes e personalize seu café.
      </p>

      <Link
        href="/custom-drinks"
        className="
          mt-6
          inline-flex
          rounded-full
          bg-white
          px-6
          py-3
          font-semibold
          shadow
          transition
          hover:shadow-md
        "
      >
        Personalizar
      </Link>
    </section>
  );
}