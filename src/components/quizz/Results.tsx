import { QuestionInfo } from "./Question";

type Answer = number | undefined;

export function Results(props: {
  questions: QuestionInfo[];
  answers: Answer[];
  onRestart: () => void;
}) {
  const correctAnswers = props.answers.filter(
    (answer, i) => props.questions[i].options[answer || 0].valid
  ).length;
  const totalQuestions = props.questions.length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">Results</h1>
      <p className="text-2xl">
        {correctAnswers} / {totalQuestions} ({percentage}%)
      </p>

      <h2 className="text-2xl font-medium">Answers</h2>
      <div className="list-disc">
        {props.questions.map((question, index) => (
          <Result
            key={index}
            question={question}
            answer={props.answers[index]}
          />
        ))}
      </div>
      <button
        onClick={props.onRestart}
        className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Restart
      </button>
    </div>
  );
}

function Result(props: { question: QuestionInfo; answer: Answer }) {
  if (props.answer === undefined) {
    return <></>;
  }

  const correct = props.question.options[props.answer || 0].valid;

  const selectedColor = correct ? "text-green-600" : "text-red-600";

  return (
    <div>
      <div className="font-medium">{props.question.question}</div>
      <div className={`${selectedColor}`}>
        Selected : {props.question.options[props.answer || 0].text}
      </div>
      {!correct && (
        <div className="text-green-600">
          Solution :{" "}
          {props.question.options.find((option) => option.valid)?.text}
        </div>
      )}
    </div>
  );
}
