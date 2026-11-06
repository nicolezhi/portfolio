"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FadeInProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
};

export function FadeIn({
  children,
  className,
  initial,
  animate,
  transition,
  ...props
}: FadeInProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={initial ?? (reducedMotion ? false : { opacity: 0 })}
      animate={animate ?? (reducedMotion ? undefined : { opacity: 1 })}
      transition={transition ?? { duration: 0.35, ease: "easeOut" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
