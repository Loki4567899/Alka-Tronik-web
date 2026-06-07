export default function VideosPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-32">

      <h1 className="text-5xl font-black mb-12">
        Videos
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        <iframe
          className="w-full aspect-video rounded-xl"
          src="https://www.youtube.com/embed/"
          allowFullScreen
        />

        <iframe
          className="w-full aspect-video rounded-xl"
          src="https://www.youtube.com/embed/"
          allowFullScreen
        />

      </div>

    </main>
  );
}
