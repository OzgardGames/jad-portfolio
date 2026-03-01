import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="py-16">

      <h1 className="text-4xl font-bold">
        Projects
      </h1>

      <p className="mt-4 text-gray-400">
        A selection of my game development and technical art work.
      </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
            {projects.map((project) => (
                <ProjectCard
                key={project.slug}
                title={project.title}
                description={project.description}
                slug={project.slug}
                hero={project.hero}
                />
            ))}
        </div>
    </div>
  );
}