import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Container({ children, className, id }: ContainerProps) {
  return (
    <div id={id} className={cn("mx-auto w-full max-w-page px-gutter", className)}>
      {children}
    </div>
  );
}
