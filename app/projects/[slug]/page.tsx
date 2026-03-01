import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ImageLightbox from "@/components/ImageLightbox";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured projects and case studies: technical art, gameplay systems, and interactive design work in Unreal Engine and Unity.",
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {

  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return <div className="py-16">Project not found</div>;
  }

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

return (
  <div className="py-16 space-y-16 max-w-6xl mx-auto px-6">
    <Link
      href="/projects"
      className="text-sm text-gray-400 hover:text-blue-400 transition">
      ← Back to Projects
    </Link>

    {/* HERO SECTION */}
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-gray-800">

      <Image
        src={project.hero}
        alt={project.title}
        fill
        className="object-cover"
      />

      <div className="
      absolute inset-0
      bg-gradient-to-t
      from-black via-black/60 to-transparent
      flex items-end">

         {/*TITLE & DESCRIPTION */}
        <div className="p-8">
          <h1 className="text-4xl font-bold">
            {project.title}
          </h1>

          <p className="text-gray-300 mt-2">
            {project.description}
          </p>

          {/* FACTS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-white/10 bg-[#111] rounded-xl p-6">
            <div>
              <p className="text-xs text-gray-500">Engine</p>
              <p className="mt-1 text-gray-200">{project.engine}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Team</p>
              <p className="mt-1 text-gray-200">{project.teamSize}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Duration</p>
              <p className="mt-1 text-gray-200">{project.duration}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Platform</p>
              <p className="mt-1 text-gray-200">{project.platform}</p>
            </div>
          </div>

        </div>

      </div>
    </div>

    <div>
      <h2 className="text-xl font-semibold">Role</h2>
      <p className="text-blue-400 mt-2 font-medium">
        {project.role}
      </p>
    </div>

    {/* TOOLS SECTION */}
    <div className="border-t border-white/5 pt-10">
      <h2 className="text-xl font-semibold">Tools</h2>

      <div className="flex flex-wrap gap-3 mt-3">
        {project.tools.map((tool) => (
          <span
            key={tool}
              className="
              border border-gray-700
              px-3 py-1
              rounded-md
              text-sm
              bg-[#111]
              hover:border-blue-400
              transition">
            {tool}
          </span>
        ))}
      </div>
    </div>

    {/* OVERVIEW SECTION */}
    <div className="border-t border-white/5 pt-10">
      <h2 className="text-xl font-semibold">Overview</h2>
      <p className="text-gray-400 mt-2 max-w-3xl">
        {project.overview}
      </p>
    </div>

    {/* HIGHLIGHTS SECTION */}
    {project.highlights?.length ? (
      <div className="border-t border-white/5 pt-10">
        <h2 className="text-xl font-semibold">Key Contributions</h2>

        <ul className="mt-4 space-y-3 text-gray-400">
          {project.highlights.map((h: string) => (
            <li key={h} className="flex gap-3">
              <span className="text-blue-400 mt-1">▸</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    ) : null}

    <div>
  <h2 className="text-xl font-semibold">Gallery</h2>


  {/* GALLERY SECTION */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
    {project.gallery?.map((src, i) => (
    <ImageLightbox
      key={src}
      src={src}
      alt={`${project.title} screenshot ${i + 1}`}
    />
    ))}
  </div>

{/* VIDEO SECTION */}
{project.video ? (
  <div>
    <h2 className="text-xl font-semibold">Video</h2>

    <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border border-gray-800 hover:border-blue-400 transition">

      {project.video.startsWith("http") ? (
        <iframe
          className="w-full h-full"
          src={project.video}
          title={`${project.title} video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <video
          className="w-full h-full object-cover"
          src={project.video}
          controls
          playsInline
        />
      )}

    </div>
  </div>
) : null}

    <div className="border-t border-white/5 pt-10 flex justify-between gap-6">
      {prev ? (
        <Link
          href={`/projects/${prev.slug}`}
          className="text-gray-400 hover:text-blue-400 transition"
        >
          ← {prev.title}
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className="text-gray-400 hover:text-blue-400 transition text-right"
        >
          {next.title} →
        </Link>
      ) : (
        <div />
      )}
    </div>

  </div>
</div>
);
}