import React from "react";
import { resumeData } from "@/data/resumeData";

export function Footer() {
  const { profile } = resumeData;
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950 py-10 print:hidden">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8 text-xs text-slate-500 dark:text-slate-400">
        <div>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {profile.name} ({profile.englishName})
          </span>{" "}
          · {profile.role}
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
          >
            {profile.email}
          </a>
          <span>·</span>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
