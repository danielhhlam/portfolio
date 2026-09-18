import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { SearchProvider } from "@/components/SearchProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Lam",
  description: "Daniel Lam, software engineer studying Computer Engineering at the University of Waterloo.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
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
