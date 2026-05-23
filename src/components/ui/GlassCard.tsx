"use client";

import { type HTMLAttributes, type ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  interactive?: boolean;
  glowOnHover?: boolean;
  className?: string;
};

export function GlassCard({
  children,
  interactive = false,
  glowOnHover = true,
  className = "",
  ...rest
}: Props) {
  const interactiveClasses = interactive
    ? "transition-all duration-500 ease-out hover:-translate-y-1 hover:border-gold-primary/70"
    : "";
  const glowClasses = glowOnHover && interactive ? "hover:shadow-gold-glow" : "";

  return (
    <div
      className={`relative glass rounded-2xl p-6 md:p-8 ${interactiveClasses} ${glowClasses} ${className}`}
      {...rest}
    >
      {/* corner ornaments */}
      <span className="pointer-events-none absolute -top-px -left-px h-3 w-3 border-t border-l border-gold-soft/80 rounded-tl-2xl" />
      <span className="pointer-events-none absolute -top-px -right-px h-3 w-3 border-t border-r border-gold-soft/80 rounded-tr-2xl" />
      <span className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b border-l border-gold-soft/80 rounded-bl-2xl" />
      <span className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b border-r border-gold-soft/80 rounded-br-2xl" />
      {children}
    </div>
  );
}
