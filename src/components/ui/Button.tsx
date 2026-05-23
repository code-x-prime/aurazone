"use client";

import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-red" | "ghost" | "gold-red";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    as?: "button";
    href?: never;
  };

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    as: "a";
    href: string;
  };

type Props = ButtonAsButton | ButtonAsAnchor;

const sizeClass: Record<Size, string> = {
  sm: "px-4 py-2 text-xs tracking-widest",
  md: "px-6 py-3 text-sm tracking-[0.2em]",
  lg: "px-8 py-4 text-sm tracking-[0.25em]",
};

const variantClass: Record<Variant, string> = {
  primary:
    "bg-gold-gradient text-galaxy-black font-semibold shadow-gold-glow hover:shadow-red-glow hover:scale-[1.03] active:scale-[0.98]",
  outline:
    "border border-gold-primary/70 text-gold-soft bg-transparent hover:bg-gold-gradient hover:text-galaxy-black hover:border-transparent hover:shadow-gold-glow",
  "outline-red":
    "border-2 border-red-accent/70 text-red-glow bg-red-soft/15 backdrop-blur-sm hover:bg-red-gradient hover:text-star-white hover:border-red-accent hover:shadow-red-glow",
  "gold-red":
    "bg-gold-red-gradient text-galaxy-black font-semibold shadow-gold-glow hover:shadow-red-glow hover:scale-[1.03] active:scale-[0.98]",
  ghost:
    "text-gold-soft hover:text-star-white hover:bg-gold-primary/10 border border-transparent",
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  function Button(props, ref) {
    const {
      variant = "primary",
      size = "md",
      children,
      className = "",
      icon,
      ...rest
    } = props;

    const base =
      "inline-flex items-center justify-center gap-2 rounded-full font-display uppercase transition-all duration-300 ease-out cursor-pointer whitespace-nowrap select-none";
    const classes = `${base} ${sizeClass[size]} ${variantClass[variant]} ${className}`;

    if (props.as === "a") {
      const anchorRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...anchorRest}
        >
          {icon}
          {children}
        </a>
      );
    }

    const btnRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...btnRest}
      >
        {icon}
        {children}
      </button>
    );
  }
);
