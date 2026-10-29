import React from "react";

interface FormattedTextProps {
  text: string;
  className?: string;
}

/**
 * Lightweight inline formatter that renders `code` backticks and **bold** markers
 * as styled React elements instead of raw markdown characters.
 */
export function FormattedText({ text, className }: FormattedTextProps) {
  // Split by **bold** or `code` tokens
  const tokenRegex = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  const parts = text.split(tokenRegex);

  return (
    <span className={className}>
      {parts.map((part, idx) => {
        if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
          const content = part.slice(2, -2);
          return (
            <strong
              key={idx}
              className="font-semibold text-slate-900 dark:text-slate-100"
            >
              <FormattedText text={content} />
            </strong>
          );
        }

        if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
          const code = part.slice(1, -1);
          return (
            <code
              key={idx}
              className="rounded bg-slate-100 dark:bg-slate-800/90 px-1.5 py-0.5 font-mono text-[0.85em] font-semibold text-emerald-800 dark:text-emerald-300 border border-slate-200/70 dark:border-slate-700/70"
            >
              {code}
            </code>
          );
        }

        return <React.Fragment key={idx}>{part}</React.Fragment>;
      })}
    </span>
  );
}
