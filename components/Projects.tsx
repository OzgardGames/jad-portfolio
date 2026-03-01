"use client";

import { useMemo, useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";




export default function Projects() {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const DEFAULT_FILTER: Filter = "Technical Art";

  const FILTERS = ["Technical Art", "All", "Gameplay", "Design"] as const;
  type Filter = (typeof FILTERS)[number];

  const [active, setActive] = useState<Filter>(DEFAULT_FILTER);
  
  useEffect(() => {
    const fromUrl = searchParams.get("filter");
    if (!fromUrl) return;
  
    // Only accept values we recognize
    const decoded = decodeURIComponent(fromUrl) as Filter;
    if (FILTERS.includes(decoded)) {
      setActive(decoded);
    }
  }, [searchParams]);
  
  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.tags?.includes(active));
  }, [active]);

  return (
    <section className="py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <p className="mt-3 text-gray-400 max-w-2xl">
              Filter by discipline — Technical Art first, with gameplay and design work that bridges production.
            </p>
          </div>

          <Link
            href="/projects"
            className="text-sm text-gray-400 hover:text-blue-400 transition"
          >
            View all →
          </Link>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-3">
          {FILTERS.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => {
                  setActive(f);

                  const params = new URLSearchParams(searchParams.toString());

                  if (f === DEFAULT_FILTER) {
                    params.delete("filter");     // keep URL clean on default
                  } else {
                    params.set("filter", f);     // set ?filter=Gameplay etc.
                  }

                  const qs = params.toString();
                  router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
                }}
                className={[
                  "px-4 py-2 rounded-lg text-sm border transition",
                  isActive
                    ? "border-blue-400 bg-blue-400/10 text-blue-300"
                    : "border-white/10 text-gray-300 hover:border-blue-400",
                ].join(" ")}
              >
                {f}
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Showing <span className="text-gray-300">{filtered.length}</span>{" "}
          project{filtered.length === 1 ? "" : "s"}
          {active === "All" ? "" : ` in ${active}`}
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filtered.slice(0, 6).map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              slug={project.slug}
              hero={project.hero}
              tags={project.tags}
              featured={project.featured}
            />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <p className="mt-10 text-gray-400">
            No projects found for this filter yet.
          </p>
        )}
      </div>
    </section>
  );
}