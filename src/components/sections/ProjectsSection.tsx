import React from "react";
import { ArrowRight, GitCommitHorizontal, Network } from "lucide-react";
import { resumeData } from "@/data/resumeData";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FormattedText } from "@/components/ui/FormattedText";

export function ProjectsSection() {
  const { projects, architectureEvolution } = resumeData;

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-slate-200/80 dark:border-slate-800/80 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <Network className="h-4 w-4" />
            <span>Architecture Evolution & Featured Projects</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured Projects & Architecture Narrative
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            초기 Spring Boot 학습기와 서브 프로젝트(
            <code className="rounded bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
              soobook-api
            </code>
            )에서 겪은 레이어드 아키텍처의 한계를, 메인 프로젝트(
            <code className="rounded bg-emerald-50 dark:bg-emerald-950/80 px-1.5 py-0.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300">
              hactto-api
            </code>
            )의 <strong>DDD·클린 아키텍처</strong>로 해소하고 차기{" "}
            <strong>Spring Boot 마이그레이션</strong>으로 확장해 나가는 과정입니다.
          </p>
        </div>

        {/* 3-Stage Architecture Evolution Banner */}
        <div className="mt-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 p-5 sm:p-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <GitCommitHorizontal className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span>백엔드 아키텍처 성장 서사 (Architecture Evolution Journey)</span>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {architectureEvolution.map((step, index) => (
              <div
                key={step.phase}
                className="relative flex flex-col justify-between rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-950/80 p-4 shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center rounded-md bg-emerald-50 dark:bg-emerald-950/70 px-2 py-0.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                      {step.phase}
                    </span>
                    {index < architectureEvolution.length - 1 && (
                      <ArrowRight className="hidden lg:block h-4 w-4 text-slate-400 dark:text-slate-600" />
                    )}
                  </div>
                  <div className="mt-2 font-mono text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {step.period}
                  </div>
                  <h3 className="mt-1 text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-800 dark:text-slate-200">한계점: </strong>
                    <FormattedText text={step.problemOrLimitation} />
                  </p>
                </div>

                <div className="mt-3 border-t border-slate-100 dark:border-slate-800/80 pt-2.5">
                  <p className="text-xs leading-relaxed text-emerald-800 dark:text-emerald-300/90">
                    <strong className="font-semibold">극복 및 교훈: </strong>
                    <FormattedText text={step.solutionOrLesson} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
