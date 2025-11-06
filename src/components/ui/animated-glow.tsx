import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedGlowProps extends React.ComponentProps<"div"> {
  variant?: "center" | "top" | "bottom";
  intensity?: "light" | "medium" | "strong";
}

export default function AnimatedGlow({
  className,
  variant = "center",
  intensity = "light",
  ...props
}: AnimatedGlowProps) {
  const opacityMap = {
    light: "opacity-20",
    medium: "opacity-30",
    strong: "opacity-40",
  };

  const darkOpacityMap = {
    light: "dark:opacity-30",
    medium: "dark:opacity-40",
    strong: "dark:opacity-50",
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      {...props}
    >
      {/* 主光晕层 - 大范围柔和光晕 */}
      <div
        className={cn(
          "absolute left-1/2 top-1/2 h-[600px] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full",
          "bg-radial from-primary/20 from-10% to-primary/0 to-60%",
          "animate-glow-pulse",
          opacityMap[intensity],
          darkOpacityMap[intensity],
          variant === "top" && "top-0 translate-y-0",
          variant === "bottom" && "top-auto bottom-0 translate-y-0"
        )}
      />

      {/* 次光晕层 - 浮动光晕 */}
      <div
        className={cn(
          "absolute left-1/2 top-1/2 h-[400px] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full",
          "bg-radial from-accent/15 from-10% to-accent/0 to-60%",
          "animate-glow-float",
          opacityMap[intensity],
          darkOpacityMap[intensity],
          variant === "top" && "top-0 translate-y-0",
          variant === "bottom" && "top-auto bottom-0 translate-y-0"
        )}
        style={{
          animationDelay: "1s",
        }}
      />

      {/* 第三光晕层 - 更小的浮动光晕 */}
      <div
        className={cn(
          "absolute left-1/2 top-1/2 h-[300px] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full",
          "bg-radial from-primary/10 from-10% to-primary/0 to-60%",
          "animate-glow-float",
          opacityMap[intensity],
          darkOpacityMap[intensity],
          variant === "top" && "top-0 translate-y-0",
          variant === "bottom" && "top-auto bottom-0 translate-y-0"
        )}
        style={{
          animationDelay: "2s",
        }}
      />
    </div>
  );
}

