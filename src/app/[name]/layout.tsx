"use client";
import ThemeSwitcher from "@/components/theme-switcher";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { Children, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <>
      <div className="flex justify-between my-5 mx-10 ">
        <Link href="/">
          {" "}
          <h1 className="text-5xl font-extrabold text-white">Quizly</h1>
        </Link>
        <ThemeSwitcher />
      </div>
      {children}
    </>
  );
}
