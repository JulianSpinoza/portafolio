// Edita aquí tus proyectos. Agregar uno nuevo = agregar un objeto al arreglo.
// Las imágenes van en la carpeta /public/projects/ (ej: public/projects/taberna.png)
// Deja un enlace como undefined (o bórralo) si no lo tienes: el botón no aparecerá.

export type Project = {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  year: string;
  links: {
    demo?: string;
    video?: string;
    repo?: string;
    figma?: string;
  };
};

export const projects: Project[] = [
  {
    title: "Taberna Literaria - Virtual Platform",
    description:
      "A virtual platform for a roleplaying community. I built a rich-text editor so writers can format and preview their work, designed the reading view, and modeled the content in a NoSQL schema to keep requests fast.",
    image: "/projects/TabernaLiterariaPortafolio.gif",
    tags: ["React", "TypeScript", "NoSQL", "UI/UX"],
    year: "2025 – Present",
    links: {
      repo: "https://github.com/JulianSpinoza/PrototypeTabernaLiteraria",
      figma:
        "https://www.figma.com/site/f5Zwn1EC7EE4jjCIzyPJdV/TabernaLiteraria?node-id=0-1&t=DYB1z70hOhljsYK9-1",
    },
  },
  {
    title: "Virtual experience of the botanical garden of colombia",
    description:
      "Videogame 3D to encourage the visit to the botanical garden.",
    image: "/projects/Lego.gif",
    tags: ["Unity"],
    year: "2026 – Present",
    links: {
      
    },
  },
  {
    title: "Colombianstay",
    description:
      "A booking platform prototype for accommodation in Colombia. Built with React and Django on top of PostgreSQL, with query optimization, developed incrementally with Scrum.",
    image: "/projects/ColombianStay.gif",
    tags: ["React", "Django", "PostgreSQL"],
    year: "2026",
    links: {
      repo: "https://github.com/JulianSpinoza/ColombianStay",
    },
  },
  {
    title: "RPG Story Tracker with AI",
    description:
      "A tool that keeps role-playing campaigns consistent: it turns session notes into a graph of characters, places and events, and summarizes and translates sessions using spaCy and GPT-4o mini.",
    tags: ["Python", "spaCy", "LLMs", "Graphs"],
    year: "2025",
    links: {
      repo: "https://github.com/JotaDGBarnel/Roleplaying-tool-app",
    },
  },
];
