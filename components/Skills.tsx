export default function Skills() {
  const groups = [
    {
      title: "Technical Art",
      items: ["Shaders", "Lighting", "VFX", "Materials", "Optimization"],
    },
    {
      title: "Tools & Pipelines",
      items: ["Unreal/Unity workflows", "Rigging support", "Reusable systems", "Debug-friendly setups"],
    },
    {
      title: "Gameplay & Systems",
      items: ["Movement controllers", "State machines", "AI behaviors", "Interaction systems"],
    },
    {
      title: "Game Design",
      items: ["Level design", "Player guidance", "UI/UX implementation", "Prototyping"],
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold">Expertise</h2>
        <p className="mt-3 text-gray-400 max-w-2xl">
          Technical Art first — with strong gameplay and design capabilities to bridge art, code, and player experience.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-xl border border-white/10 bg-[#111] p-6 hover:border-blue-400 transition"
            >
              <h3 className="text-xl font-semibold">{g.title}</h3>

              <ul className="mt-4 space-y-2 text-gray-400">
                {g.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-blue-400">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}