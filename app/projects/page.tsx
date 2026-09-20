import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectsBrowser } from "@/components/ProjectsBrowser";

export const metadata = { title: "Daniel Lam" };

export default function ProjectsPage() {
  return (
    <div className="min-h-dvh">
      <div className="mx-auto flex min-h-dvh max-w-[780px] animate-fade flex-col px-6 pb-[clamp(12px,2vh,24px)]">
        <Header />
        <Suspense fallback={null}>
          <ProjectsBrowser />
        </Suspense>
        {/* Same footer and bottom spacing as the home page */}
        <div className="mt-auto pt-10">
          <Footer compact />
        </div>
      </div>
    </div>
  );
}
