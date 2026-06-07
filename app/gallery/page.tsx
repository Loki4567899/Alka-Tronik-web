export default function GalleryPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-32">

      <h1 className="text-5xl font-black mb-12">
        Gallery
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <img src="/gallery1.jpg" className="rounded-xl" />
        <img src="/gallery2.jpg" className="rounded-xl" />
        <img src="/hero.jpg" className="rounded-xl" />

      </div>

    </main>
  );
}
