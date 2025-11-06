"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AITextFlowProps extends React.ComponentProps<"div"> {
  words?: string[];
  speed?: number;
  density?: "low" | "medium" | "high";
}

const defaultWords = [
  "AI",
  "智能",
  "心动",
  "浪漫",
  "温柔",
  "表达",
  "话术",
  "情感",
  "魅力",
  "心动",
  "AI",
  "智能",
];

export default function AITextFlow({
  className,
  words = defaultWords,
  speed = 20,
  density = "medium",
  ...props
}: AITextFlowProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const densityMap = {
    low: 3,
    medium: 5,
    high: 8,
  };

  const textElements = Array.from({ length: densityMap[density] }, (_, i) => {
    const word = words[i % words.length];
    const delay = (i * (speed / densityMap[density])) % speed;
    const top = `${(i * 100) / densityMap[density]}%`;

    return (
      <div
        key={i}
        className="absolute left-0 top-0 whitespace-nowrap text-sm font-medium text-primary/20 dark:text-primary/30"
        style={{
          top,
          animation: `text-flow ${speed}s linear infinite`,
          animationDelay: `${delay}s`,
        }}
      >
        {word}
      </div>
    );
  });

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      {...props}
    >
      {textElements}
    </div>
  );
}

