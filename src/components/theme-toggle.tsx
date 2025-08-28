"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const checkDarkMode = theme === "dark";
  const isDark = checkDarkMode ?? false;
  return (
    <Button
      variant={"ghost"}
      suppressHydrationWarning
      type="button"
      className={cn(
        "flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300",
        isDark
          ? "bg-zinc-950 border border-zinc-800"
          : "bg-white border border-zinc-200",
        className
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      tabIndex={0}
    >
      <div className="flex justify-between items-center w-full">
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            isDark
              ? "transform translate-x-0 bg-zinc-100"
              : "transform translate-x-8 bg-gray-800"
          )}
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-black fill-current" strokeWidth={2} />
          ) : (
            <Sun
              className="w-4 h-4 text-yellow-400 fill-current"
              strokeWidth={2}
            />
          )}
        </div>
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            isDark ? "bg-transparent" : "transform -translate-x-8"
          )}
        >
          {isDark ? (
            <Sun
              className="w-4 h-4 text-yellow-400 "
              strokeWidth={2}
            />
          ) : (
            <Moon className="w-4 h-4 text-black" strokeWidth={2} />
          )}
        </div>
      </div>
    </Button>
  );
}
