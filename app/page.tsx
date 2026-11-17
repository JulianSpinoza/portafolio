import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

// Cambia estos datos por los tuyos
const ME = {
  name: "Julián Camilo Espinosa Morales",
  tagline: "I build tools for storytelling and games.",
  intro:
    "Systems Engineering student in Bogotá, Colombia. I like building products for writers and players — from a literary platform with a rich-text editor to an AI tool that keeps RPG campaigns consistent.",
  github: "https://github.com/JulianSpinoza",
  linkedin: "https://www.linkedin.com/in/julian-espinosa-m/",
  email: "juliancaesmorales@ejemplo.com",
  cv: "/CV.pdf", // pon tu CV en /public/cv.pdf
};

export default function Home() {
  const contactLinks = [
    { label: "GitHub", href: ME.github },
    { label: "LinkedIn", href: ME.linkedin },
    { label: "Email", href: `mailto:${ME.email}` },
    { label: "CV (PDF)", href: ME.cv },
  ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      {/* Encabezado */}
      <header className="space-y-5">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{ME.name}</h1>
        <p className="text-2xl text-neutral-700 dark:text-neutral-200">{ME.tagline}</p>
        <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          {ME.intro}
        </p>
        <nav className="flex flex-wrap gap-4 pt-2">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="font-medium underline decoration-neutral-300 underline-offset-4 hover:decoration-current"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Proyectos */}
      <section className="mt-20">
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-neutral-500">
          Projects
        </h2>
        <div className="grid gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Sobre mí (opcional) */}
      <section className="mt-20">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-500">
          About
        </h2>
        <p className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          Outside of code I play and run tabletop RPGs, and I&apos;m currently building a
          LEGO-style block terrain in Unity. Languages: Spanish (native), English (C1),
          Japanese (A1).
        </p>
      </section>

      <footer className="mt-24 border-t border-neutral-200 pt-6 text-sm text-neutral-500 dark:border-neutral-800">
        Built with Next.js, TypeScript and Tailwind · Deployed on Vercel
      </footer>
    </main>
  );
}
