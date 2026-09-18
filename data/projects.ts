export type Project = {
  id: number;
  title: string;
  repo: string;
  blurb: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "OpenCafe",
    repo: "https://github.com/andrxke/OpenCafe",
    blurb:
      "Open-source POS built with a 3-person team, serving 30+ weekly cafe users — live order queue, usage analytics, and a normalized ACID-compliant schema.",
    tags: ["PostgreSQL", "TypeScript", "Express.js", "Angular", "Vercel", "SQL"],
  },
  {
    id: 2,
    title: "Mind Moistener",
    repo: "https://github.com/danielhhlam/mind-moistener",
    blurb:
      "End-to-end IoT hydration tracker for delirium patients on an ESP32 — ±5 mm accuracy, embedded firmware feeding live web visualization.",
    tags: ["Arduino", "C/C++", "Firebase", "JavaScript", "IoT", "Embedded"],
  },
  {
    id: 3,
    title: "Slotify",
    repo: "https://github.com/danielhhlam/slotify",
    blurb:
      "Full-stack MERN scheduling platform letting student businesses manage services and bookings, with RESTful APIs and a responsive booking UI.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "Vite"],
  },
];

/** Union of all tags in first-appearance order. */
export const allTechs: string[] = projects.reduce<string[]>((acc, p) => {
  p.tags.forEach((t) => {
    if (!acc.includes(t)) acc.push(t);
  });
  return acc;
}, []);
