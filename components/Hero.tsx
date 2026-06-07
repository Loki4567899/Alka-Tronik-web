import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-7xl font-black">
          ALKA TRONIK
        </h1>

        <p className="text-xl mt-4 max-w-xl">
          Zimbabwe's rising hip-hop voice.
          Music. Culture. Energy.
        </p>

        <div className="mt-8 flex gap-4">

          <Link
            href="/music"
            className="bg-white text-black px-6 py-3 rounded-lg"
          >
            Listen Now
          </Link>

          <Link
            href="/contact"
            className="border px-6 py-3 rounded-lg"
          >
            Book Artist
          </Link>

        </div>

      </div>

    </section>
  );
}
