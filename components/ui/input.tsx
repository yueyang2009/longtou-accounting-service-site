import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "flex h-11 w-full rounded-md border border-brand-line/40 bg-[#0c1310] px-3 py-2 text-sm text-[#ede9e0] placeholder:text-brand-muted/60 focus:border-brand-gold/50 focus:outline-none focus:ring-2 focus:ring-brand-gold/20",
      className
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
