"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

type Props = {};

export default function ThemeSwitcher({}: Props) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div>
      {" "}
      {theme === "dark" ? (
        <Moon
          className="rounded-full  p-2 w-16 h-16 bg-green-800 text-white"
          onClick={() => {
            setTheme("light");
          }}
        />
      ) : (
        <Sun
          className="rounded-full  p-2 w-16 h-16 bg-green-800 text-white"
          onClick={() => {
            setTheme("dark");
          }}
        />
      )}
    </div>
  );
}
