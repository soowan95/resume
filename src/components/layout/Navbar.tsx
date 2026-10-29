import React from "react";
import { Terminal } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Featured Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md print:hidden">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#about"
          className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight text-slate-900 dark:text-slate-100"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950">
            <Terminal className="h-4 w-4" />
          </span>
          <span>soowan.backend</span>
        </a>

        <nav aria-label="주요 섹션 이동" className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <nav aria-label="모바일 섹션 이동" className="flex md:hidden items-center gap-3 mr-1 text-xs">
            <a href="#tech-stack" className="text-slate-600 dark:text-slate-400 font-medium">
              Stack
            </a>
            <a href="#projects" className="text-slate-600 dark:text-slate-400 font-medium">
              Projects
            </a>
            <a href="#experience" className="text-slate-600 dark:text-slate-400 font-medium">
              Exp
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
