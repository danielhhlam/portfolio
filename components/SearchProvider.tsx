"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { searchItems, type SearchItem } from "@/data/search-index";
import { SearchIcon } from "./icons";

type Ctx = { openSearch: (opener?: HTMLElement | null) => void };
const SearchCtx = createContext<Ctx>({ openSearch: () => {} });
export const useSearch = () => useContext(SearchCtx);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const opener = useRef<HTMLElement | null>(null);
  const input = useRef<HTMLInputElement>(null);

  const openSearch = useCallback((el?: HTMLElement | null) => {
    opener.current = el ?? (document.activeElement as HTMLElement | null);
    setQuery("");
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    opener.current?.focus();
  }, []);

  // Ctrl/Cmd+K opens, Escape closes
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearch();
      } else if (e.key === "Escape") {
        setOpen((o) => {
          if (o) opener.current?.focus();
          return false;
        });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openSearch]);

  useEffect(() => {
    if (open) input.current?.focus();
  }, [open]);

  const results = searchItems(query);

  const go = (r: SearchItem) => {
    setOpen(false);
    if (r.external) window.open(r.href, "_blank", "noopener");
    else if (r.href.startsWith("mailto:")) window.location.href = r.href;
    else router.push(r.href);
  };

  return (
    <SearchCtx.Provider value={{ openSearch }}>
      {/* inert keeps the page untabbable while the dialog is open */}
      <div className="contents" inert={open}>
        {children}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
          onClick={close}
          className="fixed inset-0 z-50 flex animate-fade-fast items-start justify-center bg-black/55 px-6 pb-6 pt-[14vh] backdrop-blur-[2px]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[480px] animate-pop overflow-hidden rounded-[14px] border border-line bg-surface shadow-[0_24px_60px_rgba(0,0,0,.5)]"
          >
            <div className="flex items-center gap-2.5 border-b border-line px-4 py-3.5">
              <SearchIcon size={14} className="flex-none text-muted" />
              <input
                ref={input}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && results[0]) go(results[0]);
                }}
                placeholder="Search pages, projects, technologies, links…"
                aria-label="Search"
                className="min-w-0 flex-1 bg-transparent text-[13.5px] text-text outline-none"
              />
              <span className="rounded-[4px] border border-line px-[5px] py-[2px] font-mono text-[10px] text-muted">
                ESC
              </span>
            </div>
            <div className="max-h-[44vh] overflow-auto p-2">
              {results.map((r) => (
                <a
                  key={r.label}
                  href={r.href}
                  target={r.external ? "_blank" : undefined}
                  rel={r.external ? "noopener" : undefined}
                  onClick={(e) => {
                    if (r.external || r.href.startsWith("mailto:")) {
                      setOpen(false);
                      return;
                    }
                    e.preventDefault();
                    go(r);
                  }}
                  className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-hover"
                >
                  <span className="text-[13.5px]">{r.label}</span>
                  <span className="whitespace-nowrap font-mono text-[10.5px] text-muted">{r.kind}</span>
                </a>
              ))}
              {results.length === 0 && (
                <p className="m-0 px-3 py-[22px] text-[13px] text-muted">No matches.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </SearchCtx.Provider>
  );
}
