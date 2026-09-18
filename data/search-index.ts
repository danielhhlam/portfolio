export type SearchItem = {
  label: string;
  kind: string;
  href: string;
  external?: boolean;
  keys: string;
};

export const searchIndex: SearchItem[] = [
  { label: "Home", kind: "Page", href: "/", keys: "home about summary experience education interests" },
  { label: "Projects", kind: "Page", href: "/projects", keys: "projects work built portfolio filter technology" },
  { label: "OpenCafe", kind: "Project", href: "/projects?p=OpenCafe", keys: "postgresql typescript express angular vercel sql pos cafe" },
  { label: "Mind Moistener", kind: "Project", href: "/projects?p=Mind%20Moistener", keys: "arduino c firebase javascript iot embedded esp32 hydration" },
  { label: "Slotify", kind: "Project", href: "/projects?p=Slotify", keys: "mongodb express react node tailwind vite mern scheduling" },
  { label: "Computer Engineering, UWaterloo", kind: "Education", href: "https://uwaterloo.ca/future-students/programs/computer-engineering", external: true, keys: "waterloo university degree coop engineering" },
  { label: "ComputerTalk", kind: "Experience", href: "https://www.computer-talk.com/", external: true, keys: "software developer markham azure openai rag documentation tool" },
  { label: "WARG", kind: "Experience", href: "https://www.uwarg.com/", external: true, keys: "aerial robotics autonomy drones opencv python" },
  { label: "WATonomous", kind: "Experience", href: "https://www.watonomous.ca/", external: true, keys: "autonomous vehicles ros robotics c++" },
  { label: "GitHub", kind: "Link", href: "https://github.com/danielhhlam", external: true, keys: "code repos git" },
  { label: "LinkedIn", kind: "Link", href: "https://www.linkedin.com/in/danielhhlam/", external: true, keys: "resume profile" },
  { label: "X", kind: "Link", href: "https://x.com/danielhhlam", external: true, keys: "twitter social" },
  { label: "Email", kind: "Link", href: "mailto:danielhhlam@gmail.com", keys: "contact mail gmail" },
];

export function searchItems(query: string): SearchItem[] {
  const q = query.trim().toLowerCase();
  return searchIndex.filter(
    (r) => !q || `${r.label} ${r.kind} ${r.keys}`.toLowerCase().includes(q),
  );
}
