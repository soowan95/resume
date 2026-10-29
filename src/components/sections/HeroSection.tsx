"use client";

import React, { useState } from "react";
import { Check, Copy, Github, Mail, MapPin, Printer, Server } from "lucide-react";
import { resumeData } from "@/data/resumeData";
import { FormattedText } from "@/components/ui/FormattedText";

export function HeroSection() {
  const { profile } = resumeData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-slate-200/80 dark:border-slate-800/80 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 dark:border-emerald-800/70 bg-emerald-50/80 dark:bg-emerald-950/60 px-3.5 py-1 text-xs font-semibold text-emerald-800 dark:text-emerald-300">
          <Server className="h-3.5 w-3.5" />
          <span>{profile.role}</span>
          <span className="text-emerald-400 dark:text-emerald-600">•</span>
          <span className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 font-normal">
            <MapPin className="h-3 w-3" />
            {profile.location}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          안녕하세요, 백엔드 엔지니어{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            {profile.name}({profile.englishName})
          </span>
          입니다.
        </h1>

        <p className="mt-4 text-base sm:text-lg font-medium text-slate-700 dark:text-slate-200 leading-relaxed break-keep">
          {profile.tagline}
        </p>

        <div className="mt-5 space-y-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed break-keep">
          {profile.summary.map((paragraph, index) => (
            <p key={index}>
              <FormattedText text={paragraph} />
            </p>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3 print:hidden">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-emerald-500 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white dark:text-slate-950 shadow-xs transition-all hover:bg-slate-800 dark:hover:bg-emerald-400 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                <span>이메일 복사 완료 ({profile.email})</span>
              </>
            ) : (
              <>
                <Mail className="h-4 w-4" />
                <span>{profile.email}</span>
                <Copy className="h-3.5 w-3.5 opacity-75" />
              </>
            )}
          </button>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-2xs transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-2xs transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
          >
            <Printer className="h-4 w-4" />
            <span>이력서 인쇄 / PDF 저장</span>
          </button>
        </div>

        {/* Core Identity Metrics Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {profile.keyMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50 p-4"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {metric.label}
              </div>
              <div className="mt-1 text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                {metric.value}
              </div>
              <div className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
