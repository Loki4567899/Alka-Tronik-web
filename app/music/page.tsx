export default function MusicPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-32">

      <h1 className="text-5xl font-black mb-12">
        Music
      </h1>

      <div className="grid md:grid-cols-2 gap-12">

        <img
          src="/album-cover.jpg"
          alt="Garazviya"
          className="rounded-2xl shadow-2xl"
        />

        <div>

          <h2 className="text-4xl font-bold">
            GARAZVIYA
          </h2>

          <p className="text-zinc-400 mt-4">
            A powerful project showcasing
            Alka Tronik's growth, lyrical ability,
            and creative vision.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">

            <a
              href="https://youtube.com/@alkatronikvevo"
              target="_blank"
              className="bg-white text-black px-5 py-3 rounded-lg"
            >
              Listen on YouTube
            </a>

          </div>

        </div>

      </div>

    </main>
  );
}
