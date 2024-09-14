export type Question = {
  id: number;
  question: string;
  correctAnswer: string;
  choices: string[];
};
export type GameState = {
  currentQuestion: number;
  correctAnswer: number[];
  wrongAnswer: number[];
};
