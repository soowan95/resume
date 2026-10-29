import React from "react";
import { Check, Code2, Database, Layers, ShieldCheck } from "lucide-react";
import { resumeData } from "@/data/resumeData";
import { Badge } from "@/components/ui/Badge";
import { FormattedText } from "@/components/ui/FormattedText";

export function TechStackSection() {
  const { primaryBackend, supportingSkills } = resumeData;

  return (
    <section
      id="tech-stack"
      className="scroll-mt-20 border-b border-slate-200/80 dark:border-slate-800/80 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <Code2 className="h-4 w-4" />
            <span>Technical Competence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Tech Stack & Core Engineering
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            주력 백엔드 프레임워크인{" "}
            <strong className="font-semibold text-slate-900 dark:text-slate-200">
              NestJS
            </strong>
            와{" "}
            <strong className="font-semibold text-slate-900 dark:text-slate-200">
              Spring Boot
            </strong>
            를 중심으로 데이터 저장소, 인프라, 그리고 클라이언트 연동 역량을 갖추고 있습니다.
          </p>
        </div>

        {/* Tier 1: Primary Backend Spotlight Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {primaryBackend.map((stack) => {
            const isEmerald = stack.accentColor === "emerald";
            return (
              <div
                key={stack.name}
                className={`relative flex flex-col justify-between rounded-2xl border p-6 sm:p-7 shadow-xs transition-all ${
                  isEmerald
                    ? "border-emerald-200/90 dark:border-emerald-800/60 bg-gradient-to-b from-emerald-50/40 via-white to-white dark:from-emerald-950/25 dark:via-slate-900 dark:to-slate-900"
                    : "border-blue-200/90 dark:border-blue-800/60 bg-gradient-to-b from-blue-50/40 via-white to-white dark:from-blue-950/25 dark:via-slate-900 dark:to-slate-900"
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Badge variant={isEmerald ? "emerald" : "blue"}>{stack.badge}</Badge>
                    <ShieldCheck
                      className={`h-5 w-5 ${
                        isEmerald
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-blue-600 dark:text-blue-400"
                      }`}
                    />
                  </div>

                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    {stack.name}
                  </h3>
                  <p
                    className={`mt-1 text-sm font-semibold ${
                      isEmerald
                        ? "text-emerald-800 dark:text-emerald-300"
                        : "text-blue-800 dark:text-blue-300"
                    }`}
                  >
                    {stack.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {stack.description}
                  </p>

                  {/* Core Modules */}
                  <div className="mt-5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Core Modules & Ecosystem
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {stack.coreModules.map((mod) => (
                        <Badge key={mod} variant="default">
                          {mod}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Architecture Strengths */}
                <div className="mt-6 border-t border-slate-200/70 dark:border-slate-800 pt-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Architecture & Practical Focus
                  </div>
                  <ul className="mt-2.5 space-y-2">
                    {stack.architectureStrengths.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                      >
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            isEmerald
                              ? "text-emerald-600 dark:text-emerald-400"
                              : "text-blue-600 dark:text-blue-400"
                          }`}
                        />
                        <FormattedText text={point} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tier 2: Supporting Tech Stack Categories */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {supportingSkills.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-5"
            >
              <div className="flex items-center gap-2">
                {group.category.includes("Database") ? (
                  <Database className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                ) : (
                  <Layers className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                )}
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  {group.category}
                </h3>
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {group.description}
              </p>

              <div className="mt-4 space-y-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-lg border border-slate-200/70 dark:border-slate-800/90 bg-white dark:bg-slate-950/60 p-3"
                  >
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                      <FormattedText text={skill.name} />
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      <FormattedText text={skill.detail} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
