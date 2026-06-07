export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-32">

      <h1 className="text-5xl font-black mb-8">
        About Alka Tronik
      </h1>

      <div className="grid md:grid-cols-2 gap-12">

        <div>
          <img
            src="/hero.jpg"
            alt="Alka Tronik"
            className="rounded-2xl"
          />
        </div>

        <div>
          <p className="text-zinc-300 leading-8">
            Alka Tronik is an emerging Zimbabwean hip-hop artist
            from Harare, representing a new generation of creative
            talent. At only 18 years old, he balances education
            with a growing music career while building a strong
            presence across digital platforms.
          </p>

          <p className="text-zinc-300 leading-8 mt-6">
            Known for his energetic performances, authentic
            storytelling, and modern hip-hop sound, Alka Tronik
            continues to establish himself as one of the young
            artists to watch in Zimbabwe's urban music scene.
          </p>

          <p className="text-zinc-300 leading-8 mt-6">
            Through consistency, creativity and dedication,
            he aims to inspire young people while taking
            Zimbabwean hip-hop to wider audiences.
          </p>
        </div>

      </div>

    </main>
  );
}
