import Image from "next/image";
import type { Project } from "@/lib/projects";

const LINK_LABELS: Record<keyof Project["links"], string> = {
  demo: "Live demo",
  video: "Video",
  repo: "Code",
  figma: "Design",
};

export default function ProjectCard({ project }: { project: Project }) {
  const links = Object.entries(project.links).filter(([, url]) => url) as [
    keyof Project["links"],
    string,
  ][];

  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
      {project.image && (
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          width={1280}
          height={720}
          className="aspect-video w-full object-cover"
        />
      )}

      <div className="space-y-4 p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <span className="shrink-0 text-sm text-neutral-500">{project.year}</span>
        </div>

        <p className="leading-relaxed text-neutral-600 dark:text-neutral-300">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
            >
              {tag}
            </li>
          ))}
        </ul>

        {links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-2">
            {links.map(([kind, url]) => (
              <a
                key={kind}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium transition hover:bg-neutral-900 hover:text-white dark:border-neutral-700 dark:hover:bg-white dark:hover:text-neutral-900"
              >
                {LINK_LABELS[kind]} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
