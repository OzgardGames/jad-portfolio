import Link from "next/link";

export default function AboutStrip() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-[#111] p-10">
          <h2 className="text-3xl font-bold">About</h2>

          <p className="mt-4 text-gray-400 max-w-3xl leading-relaxed">
            I’m Jad Boukentar — a Technical Artist with strong gameplay and design experience.
            I build shaders, lighting setups, tools, and interactive systems that improve readability,
            game feel, and production workflows.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="px-6 py-3 rounded-lg bg-blue-500 font-semibold hover:bg-blue-400 transition"
            >
              More about me
            </Link>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-white/15 hover:border-blue-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
