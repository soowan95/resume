import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "emerald" | "blue" | "outline";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles = {
    default:
      "bg-slate-100 text-slate-800 border-slate-200/80 dark:bg-slate-800/90 dark:text-slate-200 dark:border-slate-700",
    emerald:
      "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/70",
    blue:
      "bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800/70",
    outline:
      "bg-transparent text-slate-600 border-slate-300 dark:text-slate-300 dark:border-slate-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
