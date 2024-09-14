"use client";
import { GameState } from "@/type";
import { cn } from "@/utils/utils";
import { Smile, Sun } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
  const gameState: GameState = JSON.parse(localStorage.getItem("gameState")!);
  console.log("game state", gameState);

  const totalResponse =
    gameState.correctAnswer.length + gameState.wrongAnswer.length;
  const allAnswerCorrext = gameState.correctAnswer.length === totalResponse;
  // Just an example; make sure to define 'name' if it's dynamic
  const { name } = useParams();
  return (
    <>
      <div className="bg-div flex flex-col justify-center items-center p-32 mx-80 my-12 text-white">
        <h1 className="font-extrabold text-2xl">Result</h1>
        <div
          className={cn(
            "smile  text-center ",
            allAnswerCorrext ? "bg-green-500 " : "bg-red-500 "
          )}
        >
          😄
        </div>
        <div className="border mt-6 px-3 text-center py-1 rounded-lg bg-result text-green-600">
          {gameState.correctAnswer.length} OUT OF {totalResponse}- (
          {(gameState.correctAnswer.length * 100) / totalResponse}
          %)
        </div>
        <Link href={`/${name}`}>
          <button className="p-3 m-5 rounded-lg w-36 bg-green-800">
            Restart
          </button>
        </Link>
      </div>
    </>
  );
}
