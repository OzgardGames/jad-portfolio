import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Jad Boukentar — Technical Artist & Game Designer focused on shaders, lighting, tools, and gameplay systems.",
};

export default function AboutPage() {
  return (
    <main className="py-16 max-w-6xl mx-auto px-6 space-y-14">

      {/* Top nav back */}
      <div>
        <Link
          href="/#projects"
          className="text-sm text-gray-400 hover:text-blue-400 transition"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-5xl font-bold">About</h1>
        <p className="text-gray-400 max-w-3xl leading-relaxed">
          I’m <span className="text-gray-200 font-medium">Jad Boukentar</span> — a{" "}
          <span className="text-blue-400 font-medium">Technical Artist</span> with strong{" "}
          <span className="text-gray-200 font-medium">game design</span> and gameplay systems experience.
          I build shaders, lighting, tools, and interactive systems that improve clarity, game feel, and production workflows.
        </p>
      </section>

      {/* What I do */}
      <section className="border-t border-white/5 pt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-white/10 bg-[#111] p-6">
          <h2 className="text-xl font-semibold">Technical Art</h2>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li className="flex gap-3"><span className="text-blue-400">▸</span>Shaders / materials & reusable functions</li>
            <li className="flex gap-3"><span className="text-blue-400">▸</span>Lighting, mood, and readability tuning</li>
            <li className="flex gap-3"><span className="text-blue-400">▸</span>VFX and post-process support for storytelling</li>
            <li className="flex gap-3"><span className="text-blue-400">▸</span>Animator-friendly workflows and rig support</li>
          </ul>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#111] p-6">
          <h2 className="text-xl font-semibold">Game Design & Systems</h2>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li className="flex gap-3"><span className="text-blue-400">▸</span>Movement, combat, and interaction systems</li>
            <li className="flex gap-3"><span className="text-blue-400">▸</span>Prototyping and iteration for game feel</li>
            <li className="flex gap-3"><span className="text-blue-400">▸</span>Level design pacing and player guidance</li>
            <li className="flex gap-3"><span className="text-blue-400">▸</span>UI/UX implementation and polish</li>
          </ul>
        </div>
      </section>

      {/* Quick facts */}
      <section className="border-t border-white/5 pt-10">
        <h2 className="text-xl font-semibold">Quick facts</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          <div className="rounded-xl border border-white/10 bg-[#111] p-5">
            <p className="text-xs text-gray-500">Focus</p>
            <p className="mt-1 text-gray-200">Technical Art + Design</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#111] p-5">
            <p className="text-xs text-gray-500">Engines</p>
            <p className="mt-1 text-gray-200">Unreal, Unity</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#111] p-5">
            <p className="text-xs text-gray-500">Tools</p>
            <p className="mt-1 text-gray-200">Blender, 3ds Max</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#111] p-5">
            <p className="text-xs text-gray-500">Location</p>
            <p className="mt-1 text-gray-200">Ottawa, Canada</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 pt-10">
        <div className="rounded-2xl border border-white/10 bg-[#111] p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">Let’s connect</h2>
            <p className="mt-2 text-gray-400 max-w-xl">
              If you’re hiring for Technical Artist roles (or hybrid tech + design), I’d love to talk.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg bg-blue-500 font-semibold hover:bg-blue-400 transition"
            >
              Resume
            </a>

            <a
              href="/#contact"
              className="px-6 py-3 rounded-lg border border-white/15 hover:border-blue-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}