import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { SearchProvider } from "@/components/SearchProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Lam — Software Engineer",
  description: "Daniel Lam, software engineer studying Computer Engineering at the University of Waterloo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false} storageKey="dhl-theme">
          <SearchProvider>{children}</SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
