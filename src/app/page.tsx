"use client";
import QuizCard from "@/components/quiz-card";
import ThemeSwitcher from "@/components/theme-switcher";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const quizzes = [
    {
      title: "React",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
      difficulty: "easy",
      numberOfQuestions: 5,
      href: "/react",
    },
  ];
  return (
    <>
      <div className="flex justify-between my-5 mx-10 text-white">
        <h1 className="text-5xl font-extrabold ">Quizly</h1>

        <ThemeSwitcher />
      </div>
      <div className="flex w-full gap-5 justify-center flex-wrap">
        {quizzes.map((quiz) => (
          <QuizCard
            title={quiz.title}
            image={quiz.image}
            difficulty={quiz.difficulty}
            numberOfQuestions={quiz.numberOfQuestions}
            href={quiz.href}
          />
        ))}
      </div>
    </>
  );
}
