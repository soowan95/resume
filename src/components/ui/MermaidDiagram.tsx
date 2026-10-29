"use client";

import React, { useEffect, useId, useState } from "react";
import { useTheme } from "next-themes";

interface MermaidDiagramProps {
  chart: string;
}

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const { resolvedTheme } = useTheme();
  const rawId = useId();
  const safeId = `mermaid-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [renderTrigger, setRenderTrigger] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const details = el.closest("details");
    if (!details) return;

    const handleToggle = () => {
      if (details.open) {
        setRenderTrigger((prev) => prev + 1);
      }
    };

    details.addEventListener("toggle", handleToggle);
    return () => {
      details.removeEventListener("toggle", handleToggle);
    };
  }, []);

  useEffect(() => {
    let isCancelled = false;

    async function renderDiagram() {
      try {
        const mermaid = (await import("mermaid")).default;
        const isDark = resolvedTheme === "dark";

        mermaid.initialize({
          startOnLoad: false,
          theme: isDark ? "dark" : "neutral",
          securityLevel: "loose",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
          flowchart: {
            htmlLabels: true,
            curve: "basis",
          },
        });

        const uniqueRenderId = `${safeId}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
        const { svg } = await mermaid.render(uniqueRenderId, chart);

        if (!isCancelled) {
          setSvgContent(svg);
          setError(null);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err instanceof Error ? err.message : "Failed to render diagram");
        }
      }
    }

    renderDiagram();

    return () => {
      isCancelled = true;
    };
  }, [chart, resolvedTheme, safeId, renderTrigger]);

  if (error) {
    return (
      <div ref={containerRef}>
        <pre className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4 text-xs text-slate-600 dark:text-slate-400">
          <code>{chart}</code>
        </pre>
      </div>
    );
  }

  if (!svgContent) {
    return (
      <div
        ref={containerRef}
        className="flex min-h-48 items-center justify-center rounded-lg border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-6 text-xs text-slate-500 dark:text-slate-400"
      >
        아키텍처 다이어그램 렌더링 중...
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="mermaid-wrapper overflow-x-auto rounded-lg border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 sm:p-6 shadow-2xs [&_svg]:mx-auto [&_svg]:max-w-full [&_svg]:h-auto"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
