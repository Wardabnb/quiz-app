"use client";
import QUIZChoice from "@/components/choiceQuiz";
import { GameState, Question } from "@/type";
import { Sun } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[] | []>([]);
  const [gameState, setGameState] = useState<GameState>({
    currentQuestion: 1,
    correctAnswer: [],
    wrongAnswer: [],
  });
  console.log("gameState", gameState);

  const { name } = useParams();
  useEffect(() => {
    fetch(`/${name}.json`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);
  function goToNextQuestion(answer: string) {
    if (answer === questions[gameState.currentQuestion - 1]?.correctAnswer) {
      localStorage.setItem(
        "gameState",
        JSON.stringify({
          ...gameState,
          correctAnswer: [
            ...gameState.correctAnswer,
            gameState.currentQuestion,
          ],
        })
      );
      setGameState((prev) => {
        return {
          ...prev,
          correctAnswer: [...prev.correctAnswer, prev.currentQuestion],
        };
      });
    } else {
      localStorage.setItem(
        "gameState",
        JSON.stringify({
          ...gameState,
          wrongAnswer: [...gameState.wrongAnswer, gameState.currentQuestion],
        })
      );
      setGameState((prev) => {
        return {
          ...prev,
          wrongAnswer: [...prev.wrongAnswer, prev.currentQuestion],
        };
      });
    }
    if (questions.length === gameState.currentQuestion) {
      // localStorage.setItem("gameState", JSON.stringify(gameState));
      router.push(`/${name}/result`);
    } else {
      setGameState((prev) => {
        return {
          ...prev,
          currentQuestion: prev.currentQuestion + 1,
        };
      });
    }
  }
  return (
    <>
      <div className=" bg-div flex flex-col justify-center items-center  p-32 mx-80 my-12  text-white ">
        <h1 className="font-extrabold text-2xl text-center">
          {questions.length > 0
            ? questions[gameState.currentQuestion - 1]?.question
            : "loading"}
        </h1>
        <div className="grid  ">
          <div className="pt-6 grid-cols-2 grid">
            {questions
              ? questions[gameState.currentQuestion - 1]?.choices.map(
                  (choice) => (
                    <QUIZChoice
                      choice={choice}
                      goToNextQuestion={goToNextQuestion}
                    />
                  )
                )
              : "loading..."}
          </div>
        </div>
        <div className="flex gap-11">
          <button className="border px-2 m-3 rounded-lg py-1">
            remove highlight
          </button>
          <button className=" px-3 m-3 rounded-lg w-36 bg-green-800">
            highlight
          </button>
        </div>
      </div>
    </>
  );
}
