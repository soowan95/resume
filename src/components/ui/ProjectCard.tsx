import React from "react";
import { ChevronDown, Cpu, ExternalLink, GitBranch, Layers, CheckCircle2 } from "lucide-react";
import { ProjectItem } from "@/types/resume";
import { Badge } from "./Badge";
import { MermaidDiagram } from "./MermaidDiagram";
import { FormattedText } from "./FormattedText";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-6 sm:p-8 shadow-xs transition-all hover:border-slate-300 dark:hover:border-slate-700">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-400">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 px-2.5 py-0.5 border border-emerald-200/70 dark:border-emerald-800/60">
              <Cpu className="h-3.5 w-3.5" />
              {project.period}
            </span>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <span className="text-slate-600 dark:text-slate-400">{project.role}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            {project.subtitle}
          </p>
        </div>
        {project.links?.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span>GitHub Repo</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>

      {/* Tech Stack Tags */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => {
          const isPrimary =
            tech.includes("Spring") || tech.includes("NestJS") || tech.includes("Redis");
          return (
            <Badge key={tech} variant={isPrimary ? "emerald" : "default"}>
              {tech}
            </Badge>
          );
        })}
      </div>

      {/* Overview */}
      <p className="mt-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        <FormattedText text={project.overview} />
      </p>

      {/* Key Highlights */}
      <div className="mt-5 space-y-2.5 border-t border-slate-100 dark:border-slate-800/80 pt-4">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Key Engineering Highlights
        </h4>
        <ul className="space-y-2">
          {project.highlights.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
            >
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
              <FormattedText text={item} />
            </li>
          ))}
        </ul>
      </div>

      {/* Native <details> Disclosure for Architecture & Data Flow (supports Find-in-Page) */}
      <details
        open={project.defaultOpen}
        className="group mt-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 overflow-hidden transition-colors"
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 sm:px-5 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100/80 dark:hover:bg-slate-900/80 transition-colors select-none [&::-webkit-details-marker]:hidden">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950">
              <GitBranch className="h-4 w-4" />
            </span>
            <div>
              <span>백엔드 아키텍처 & 주요 데이터 흐름 (Mermaid.js)</span>
              <span className="ml-2 hidden sm:inline-block rounded-md bg-slate-200/80 dark:bg-slate-800 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:text-slate-400">
                클릭하여 토글
              </span>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 group-open:rotate-180" />
        </summary>

        <div className="border-t border-slate-200/80 dark:border-slate-800 p-4 sm:p-6 space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              <Layers className="h-3.5 w-3.5" />
              <span>{project.architecture.title}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <FormattedText text={project.architecture.summary} />
            </p>
          </div>

          {/* Mermaid Diagram */}
          <MermaidDiagram chart={project.architecture.mermaidCode} />

          {/* Step-by-step Data Flow */}
          <div className="space-y-3">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              단계별 데이터 흐름 (Step-by-Step Data Flow)
            </h5>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {project.architecture.dataFlowSteps.map((flow) => (
                <div
                  key={flow.step}
                  className="rounded-lg border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-6 items-center justify-center rounded bg-slate-900 dark:bg-emerald-500/20 font-mono text-[11px] font-bold text-white dark:text-emerald-300">
                      {flow.step}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                      <FormattedText text={flow.title} />
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    <FormattedText text={flow.detail} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </details>
    </article>
  );
}
