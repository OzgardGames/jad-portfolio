export default function ContactCTA() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-[#0f1115] p-10">
          <h2 className="text-3xl font-bold">Let’s work together</h2>

          <p className="mt-4 text-gray-400 max-w-2xl">
            If you’re hiring for Technical Artist or hybrid roles (tech + design), I’d love to connect.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:scale-105 transition"
              href="mailto:your.email@example.com"
            >
              Email me
            </a>

            <a
              className="px-6 py-3 rounded-lg border border-white/15 hover:border-blue-400 transition"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-6 text-xs text-gray-500">
            Replace the email + LinkedIn links with your real contact info.
          </p>
        </div>
      </div>
    </section>
  );
}