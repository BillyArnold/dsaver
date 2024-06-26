import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm uppercase tracking-wide text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-white border-white border-2 hover:border-zinc-200 hover:text-zinc-200",
        ghost: "text-white border-2 hover:border-zinc-200 hover:text-zinc-200",
        primary:
          "bg-sky-400 text-primary-foreground hover:bg-sky-400/90 border-sky-400 border-2",
        primaryOutline: "text-sky-400 border-sky-400 border-2",
        secondary:
          "bg-green-500 text-primary-foreground hover:bg-green-500/90 border-green-500 border-2",
        secondaryOutline: "text-green-500 border-green-500 border-2",
        danger:
          "bg-rose-500 text-primary-foreground hover:bg-rose-500/90 border-rose-500 border-2",
        dangerOutline: "text-rose-500 border-rose-500 border-2",
        super:
          "bg-indigo-500 text-primary-foreground hover:bg-indigo-500/90 border-indigo-500 border-2",
        superOutline: "text-indigo-500 border-indigo-500 border-2",
        sidebar:
          "bg-transparent text-white border-2 border-transparent transition-none",
        sidebarOutline:
          "bg-sky-400/15 text-sky-500 border-sky-300 border-2 hover:bg-sky-400/20 transition:none",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
