import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-xl px-4 py-2 font-medium transition",

        variant === "primary" &&
          "bg-green-500 hover:bg-green-600",

        variant === "secondary" &&
          "bg-slate-700 hover:bg-slate-600",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}