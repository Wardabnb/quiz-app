type Props = {
  choice: string;
  goToNextQuestion: (answer: string) => void;
};
export default function QUIZChoice({ choice, goToNextQuestion }: Props) {
  return (
    <div
      onClick={(e) => goToNextQuestion(choice)}
      className="border p-3 m-10 rounded-lg  text-center bg-qst cursor-pointer hover:bg-white"
    >
      {choice}
    </div>
  );
}
