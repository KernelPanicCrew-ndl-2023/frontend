export interface QuestionOption {
  text: string;
  valid: boolean;
}

export default function Answer(props: {
  option: QuestionOption;
  reveal: boolean;
  onClick: () => void;
  selected: boolean;
}) {
  let color = "bg-gray-300";
  if (props.reveal) {
    if (props.option.valid) {
      color = "bg-green-300";
    } else {
      color = "bg-red-300";
    }
  }

  const outline = props.selected ? "outline outline-slate-500" : "";
  return (
    <div
      onClick={props.onClick}
      className={`rounded-full ${color} ${outline} h-24 text-center flex m-2 p-2 w-56 select-none`}
    >
      <p className="m-auto">{props.option.text}</p>
    </div>
  );
}
