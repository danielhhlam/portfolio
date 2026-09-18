import { GitHubIcon, LinkedInIcon, MailIcon, XIcon } from "./icons";

const link = "flex text-muted transition-colors duration-200 hover:text-text";

export function Footer({ compact = false }: { compact?: boolean }) {
  return (
    <footer
      className={`flex flex-wrap items-center justify-between gap-3 border-t border-line ${
        compact ? "flex-none mt-[clamp(10px,1.6vh,18px)] pt-[clamp(10px,1.6vh,18px)]" : "mt-14 pt-5"
      }`}
    >
      <nav className="flex items-center gap-[18px]">
        <a href="https://x.com/danielhhlam" target="_blank" rel="noopener" aria-label="X" title="X" className={link}>
          <XIcon />
        </a>
        <a href="https://github.com/danielhhlam" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub" className={link}>
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/danielhhlam/" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn" className={link}>
          <LinkedInIcon />
        </a>
        <a href="mailto:danielhhlam@gmail.com" aria-label="Email" title="Email" className={link}>
          <MailIcon />
        </a>
      </nav>
      <span className="ml-auto font-mono text-[11px] text-muted">2026 &copy; Daniel Lam</span>
    </footer>
  );
}
