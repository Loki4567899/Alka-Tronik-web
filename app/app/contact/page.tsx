export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-32">

      <h1 className="text-5xl font-black mb-10">
        Contact
      </h1>

      <div className="space-y-6">

        <div>
          <h3 className="font-bold text-xl">
            Email
          </h3>

          <p>
            alkatronik24@gmail.com
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl">
            WhatsApp
          </h3>

          <a
            href="https://wa.me/263771837616"
            target="_blank"
            className="underline"
          >
            +263 77 183 7616
          </a>
        </div>

        <div>
          <h3 className="font-bold text-xl">
            Location
          </h3>

          <p>
            Harare, Zimbabwe
          </p>
        </div>

      </div>

    </main>
  );
}
