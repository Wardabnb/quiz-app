import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  difficulty: string;
  numberOfQuestions: number;
  href: string;
};

export default function QuizCard({
  difficulty,
  image,
  numberOfQuestions,
  title,
  href,
}: Props) {
  return (
    <div className="bg-[#006f34] shadow-md rounded-md flex flex-col min-w-[300px]  p-5  gap-5 dark:bg-green-200 ">
      <div className="flex items-center gap-2">
        <Image src={image} alt={title} width={25} height={25} />
        <Link
          href={href}
          className="text-2xl hover:underline flex items-center gap-3"
        >
          {title}
          <ExternalLink size={14} />
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="border w-fit rounded-md p-1 text-xs">{difficulty}</div>
        <div className="text-sm text-gray-300">
          {numberOfQuestions} Questions
        </div>
      </div>
    </div>
  );
}
