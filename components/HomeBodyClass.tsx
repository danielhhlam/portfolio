"use client";

import { useEffect } from "react";

/** Marks <body> so globals.css can lock scrolling on the home page only. */
export function HomeBodyClass() {
  useEffect(() => {
    document.body.classList.add("home-page");
    return () => document.body.classList.remove("home-page");
  }, []);
  return null;
}
