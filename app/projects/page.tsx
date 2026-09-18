import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectsBrowser } from "@/components/ProjectsBrowser";

export const metadata = { title: "Projects — Daniel Lam" };

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[780px] animate-fade px-6 pb-[72px]">
        <Header />
        <Suspense fallback={null}>
          <ProjectsBrowser />
        </Suspense>
        <Footer />
      </div>
    </div>
  );
}
