import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type InteractiveHoverButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full bg-transparent py-1.5 px-5 text-center font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black border border-white/20",
        className as string
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        {/* <div className="h-2 w-2 rounded-full bg-white transition-all duration-300 group-hover:scale-0 group-hover:opacity-0"></div> */}
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute inset-0 z-10 flex translate-x-12 items-center justify-center gap-2 text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
