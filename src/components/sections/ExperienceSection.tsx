import React from "react";
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  FolderGit2,
  GitBranch,
  Layers,
} from "lucide-react";
import { resumeData } from "@/data/resumeData";
import { Badge } from "@/components/ui/Badge";
import { MermaidDiagram } from "@/components/ui/MermaidDiagram";
import { FormattedText } from "@/components/ui/FormattedText";

export function ExperienceSection() {
  const { experiences } = resumeData;

  return (
    <section id="experience" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <Briefcase className="h-4 w-4" />
            <span>Professional Career & In-House Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            기업별로 재직 기간 동안 수행한 핵심 설계 및 유지보수 프로젝트 이력입니다.
          </p>
        </div>

        {/* Company Cards List (supports adding future companies naturally) */}
        <div className="mt-8 space-y-8">
          {experiences.map((company) => (
            <article
              key={company.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-8 shadow-xs"
            >
              {/* Company Top Header */}
              <div className="flex flex-col gap-3 border-b border-slate-200/80 dark:border-slate-800 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950">
                      <Building2 className="h-4 w-4" />
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                      {company.companyName}
                    </h3>
                    {company.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 dark:border-emerald-800/80 bg-emerald-50 dark:bg-emerald-950/70 px-3 py-0.5 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        재직 중
                      </span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300">
                    {company.role}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 self-start rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <Calendar className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{company.period}</span>
                </div>
              </div>

              {/* Company Summary & Core Tech Stack */}
              <div className="mt-5">
                <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  {company.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {company.coreStack.map((tech) => (
                    <Badge key={tech} variant="emerald">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Sub-projects inside Company Card */}
              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <FolderGit2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span>주요 수행 프로젝트 및 담당 업무 ({company.projects.length})</span>
                </div>

                <div className="space-y-4">
                  {company.projects.map((proj, index) => (
                    <div
                      key={proj.id}
                      className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/60 p-5 sm:p-6 transition-colors hover:border-slate-300 dark:hover:border-slate-700"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/70 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:text-blue-300">
                          0{index + 1} · {proj.categoryBadge}
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {proj.techStack.map((t) => (
                            <Badge key={t} variant="default">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <h4 className="mt-3 text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                        <FormattedText text={proj.title} />
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        <FormattedText text={proj.summary} />
                      </p>

                      <ul className="mt-4 space-y-2 border-t border-slate-200/70 dark:border-slate-800/80 pt-3.5">
                        {proj.highlights.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                            <FormattedText text={item} />
                          </li>
                        ))}
                      </ul>

                      {proj.architecture && (
                        <details className="group mt-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 overflow-hidden transition-colors">
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100/80 dark:hover:bg-slate-800/70 transition-colors select-none [&::-webkit-details-marker]:hidden">
                            <div className="flex items-center gap-2">
                              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950">
                                <GitBranch className="h-3.5 w-3.5" />
                              </span>
                              <span>아키텍처 & 프로토콜 흐름 보기 (Mermaid.js)</span>
                            </div>
                            <ChevronDown className="h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 group-open:rotate-180" />
                          </summary>

                          <div className="border-t border-slate-200/80 dark:border-slate-800 p-4 sm:p-5 space-y-5">
                            <div className="space-y-1">
                              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                                <Layers className="h-3.5 w-3.5" />
                                <span>{proj.architecture.title}</span>
                              </div>
                              <p className="text-xs text-slate-600 dark:text-slate-400">
                                <FormattedText text={proj.architecture.summary} />
                              </p>
                            </div>

                            <MermaidDiagram chart={proj.architecture.mermaidCode} />

                            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                              {proj.architecture.dataFlowSteps.map((flow) => (
                                <div
                                  key={flow.step}
                                  className="rounded-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/70 p-3"
                                >
                                  <div className="flex items-center gap-2">
                                    <span className="inline-flex h-5 w-6 items-center justify-center rounded bg-slate-900 dark:bg-emerald-500/20 font-mono text-[11px] font-bold text-white dark:text-emerald-300">
                                      {flow.step}
                                    </span>
                                    <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">
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
                        </details>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
