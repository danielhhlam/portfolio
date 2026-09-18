"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { allTechs, projects } from "@/data/projects";
import { GitHubIcon } from "./icons";

const pill = "cursor-pointer rounded-full border px-[11px] py-[5px] font-mono text-[11px] transition-[border-color,color] duration-200";
const off = "border-line bg-transparent text-muted hover:border-text hover:text-text";
const on = "border-text bg-text text-bg";

export function ProjectsBrowser() {
  const router = useRouter();
  // ?p=<Title> (from Home or search) shows a single project
  const only = useSearchParams().get("p") ?? "";
  const [picked, setPicked] = useState<string[]>([]);

  const clearOnly = () => {
    if (only) router.replace("/projects", { scroll: false });
  };

  const shown = only
    ? projects.filter((p) => p.title.toLowerCase() === only.toLowerCase())
    : projects.filter((p) => !picked.length || picked.some((t) => p.tags.includes(t)));

  const allActive = !picked.length && !only;

  return (
    <>
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <p className="m-0 font-mono text-[10.5px] uppercase tracking-[.16em] text-muted">Filter by technology</p>
        <span className="whitespace-nowrap font-mono text-[11.5px] text-muted">
          {shown.length} {shown.length === 1 ? "project" : "projects"}
        </span>
      </div>

      <div className="mb-[26px] flex flex-wrap gap-[7px]">
        <button
          type="button"
          aria-pressed={allActive}
          onClick={() => {
            setPicked([]);
            clearOnly();
          }}
          className={`${pill} ${allActive ? on : off}`}
        >
          All
        </button>
        {allTechs.map((t) => {
          const isOn = picked.includes(t);
          return (
            <button
              key={t}
              type="button"
              aria-pressed={isOn}
              onClick={() => {
                clearOnly();
                setPicked((s) => (s.includes(t) ? s.filter((x) => x !== t) : [...s, t]));
              }}
              className={`${pill} ${isOn ? on : off}`}
            >
              {t}
            </button>
          );
        })}
      </div>

      <section className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,330px),1fr))] gap-4">
        {shown.map((p) => (
          <a
            key={p.id}
            href={p.repo}
            target="_blank"
            rel="noopener"
            title="Open on GitHub"
            className="flex animate-in flex-col overflow-hidden rounded-[14px] border border-line bg-surface text-text transition-[transform,border-color,box-shadow,background] duration-[250ms] ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-text hover:bg-hover hover:shadow-[0_14px_34px_rgba(0,0,0,.35)]"
          >
            {/* Placeholder until project screenshots are supplied */}
            <div className="h-[150px] border-b border-line bg-hover" aria-hidden="true" />
            <div className="flex flex-col gap-[9px] p-4">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="m-0 text-[15.5px] font-medium">{p.title}</h3>
                <GitHubIcon size={15} className="flex-none text-muted" />
              </div>
              <p className="m-0 text-[13.5px] leading-[1.6] text-muted [text-wrap:pretty]">{p.blurb}</p>
              <div className="mt-0.5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-line px-[7px] py-[3px] font-mono text-[10.5px] text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </section>

      {shown.length === 0 && (
        <div className="py-11">
          <p className="m-0 text-sm">Nothing built with that combination yet.</p>
          <button
            type="button"
            onClick={() => {
              setPicked([]);
              clearOnly();
            }}
            className="mt-3.5 cursor-pointer rounded-lg border border-line bg-transparent px-[13px] py-2 text-[13px] text-text transition-colors duration-200 hover:border-text"
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
