"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useSearch } from "./SearchProvider";
import { SearchIcon } from "./icons";

const chip =
  "flex items-center gap-[7px] rounded-lg border px-2.5 py-1.5 text-[13px] cursor-pointer bg-transparent";
const idle = "border-transparent text-muted hover:border-line hover:text-text";
const current = "border-line text-text hover:bg-hover";

export function Header({ compact = false }: { compact?: boolean }) {
  const path = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const { openSearch } = useSearch();

  return (
    <header
      className={`flex flex-nowrap items-center justify-between gap-2.5 ${
        compact ? "pb-[clamp(13px,2.2vh,26px)] pt-[clamp(14px,2.6vh,28px)]" : "pb-[26px] pt-7"
      }`}
    >
      <span className="font-mono text-[15px] font-medium tracking-[-0.01em]">Daniel Lam</span>
      <nav className="flex flex-wrap items-center justify-end gap-1.5">
        <Link href="/" className={`${chip} ${path === "/" ? current : idle}`} aria-current={path === "/" ? "page" : undefined}>
          Home
        </Link>
        <Link
          href="/projects"
          className={`${chip} ${path === "/projects" ? current : idle}`}
          aria-current={path === "/projects" ? "page" : undefined}
        >
          Projects
        </Link>
        <button
          type="button"
          aria-label="Open search"
          onClick={(e) => openSearch(e.currentTarget)}
          className={`${chip} ${idle}`}
        >
          <SearchIcon />
          Search
        </button>
        <button
          type="button"
          aria-label="Toggle color mode"
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
          className="ml-0.5 flex size-7 cursor-pointer items-center justify-center rounded-lg border border-transparent bg-transparent text-muted hover:border-line"
        >
          <span className="inline-block size-[11px] rounded-full border border-muted bg-text" />
        </button>
      </nav>
    </header>
  );
}
