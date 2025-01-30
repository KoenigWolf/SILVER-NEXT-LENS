"use client";
import React from "react";
import { Button } from "./moving-border";

export function MovingBorderDemo() {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Click me
      </Button>
      <Button
        borderRadius="0.5rem"
        className="bg-black dark:bg-white text-white dark:text-black border-neutral-800 dark:border-neutral-200"
      >
        Dark Button
      </Button>
      <Button
        duration={5000}
        className="bg-slate-900 text-white border-slate-800"
      >
        Slow Animation
      </Button>
    </div>
  );
}
