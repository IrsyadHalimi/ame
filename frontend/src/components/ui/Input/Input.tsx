import {
  InputHTMLAttributes,
} from "react";

import { cn } from "@/lib/cn";

export default function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        `
        w-full
        rounded-xl
        border
        border-slate-700
        bg-slate-900
        px-4
        py-3
        outline-none
        `,
        className
      )}
      {...props}
    />
  );
}