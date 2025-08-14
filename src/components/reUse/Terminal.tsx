"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSpanProps) => (
  <motion.div
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: delay / 1000 }}
    className={cn("grid text-sm font-normal tracking-tight", className)}
    {...props}
  >
    {children}
  </motion.div>
);

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  ...props
}: TypingAnimationProps) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string. Received:");
  }

  const MotionComponent = motion(Component);
  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
};

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
  lightMode?: boolean;
}

export const Terminal = ({
  children,
  className,
  lightMode = false,
}: TerminalProps) => {
  const { theme } = useTheme();
  const isLightMode = lightMode || theme === "light";
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    if (terminalRef.current) {
      const content = Array.from(
        terminalRef.current.querySelectorAll("pre code")
      )
        .map((el) => el.textContent)
        .join("\n");

      navigator.clipboard
        .writeText(content)
        .then(() => {
          console.log("Content copied to clipboard");
        })
        .catch((err) => {
          console.error("Failed to copy content: ", err);
        });
    }
  };

  return (
    <div
      className={cn(
        "z-10 h-full max-h-[400px] w-full max-w-lg rounded-xl",
        isLightMode
          ? "border border-gray-200 bg-gray-50/80 backdrop-blur-sm"
          : "border border-white/20 bg-white/10 backdrop-blur-sm",
        className
      )}
      ref={terminalRef}
    >
      <div
        className={cn(
          "flex flex-col gap-y-2 p-4",
          isLightMode ? "border-b border-gray-200" : "border-b border-white/20"
        )}
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-x-2">
            <div className="h-2 w-2 rounded-full bg-red-500"></div>
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
          </div>
          <button
            onClick={handleCopy}
            className={cn(
              "transition-colors cursor-pointer p-1 rounded",
              isLightMode
                ? "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                : "text-gray-400 hover:text-white hover:bg-white/10"
            )}
            aria-label="Copy terminal content"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
      </div>
      <pre
        className={cn(
          "p-4 overflow-y-auto overflow-x-hidden",
          isLightMode ? "text-gray-800" : "text-gray-100"
        )}
      >
        <code className="grid gap-y-1 break-words whitespace-pre-wrap">
          {children}
        </code>
      </pre>
    </div>
  );
};
