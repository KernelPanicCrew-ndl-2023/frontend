import { useState } from "react";
import { Question } from "../../components/quizz/Question";
import { Results } from "../../components/quizz/Results";

const questions = [
  {
    question: "What is the capital of France?",
    options: [
      { text: "Option 1", valid: true },
      { text: "Option 2", valid: false },
      { text: "Option 3", valid: false },
      { text: "Option 4", valid: false },
    ],
  },
  {
    question: "What is the capital of Germany?",
    options: [
      { text: "Option 1", valid: false },
      { text: "Option 2", valid: false },
      { text: "Option 3", valid: true },
      { text: "Option 4", valid: false },
    ],
  },
];

export default function Index() {
  const [index, setIndex] = useState(0);
  const [reveal, setReveal] = useState(false);
  const [answers, setAnswers] = useState(
    Array(questions.length).fill(undefined)
  );
  const [finished, setFinished] = useState(false);

  const onNext = () => {
    if (reveal) {
      setReveal(false);
      if (index >= questions.length - 1) {
        setFinished(true);
      } else {
        setIndex(index + 1);
      }
    }
  };

  const onValidate = (selected: number) => {
    if (reveal) {
      return;
    }
    setReveal(true);
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[index] = selected;
      return newAnswers;
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-medium"> Quizz</h1>
      {finished ? (
        <Results
          answers={answers}
          questions={questions}
          onRestart={() => {
            setFinished(false);
            setAnswers(Array(questions.length).fill(undefined));
            setIndex(0);
          }}
        />
      ) : (
        <Question
          questionInfo={questions[index]}
          reveal={reveal}
          onNext={onNext}
          onValidate={(selected) => onValidate(selected)}
          selected={answers[index]}
        />
      )}
    </div>
  );
}
