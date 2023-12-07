import { Box, Button } from "@mui/material";
import Answer, { QuestionOption } from "./Answer";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export interface QuestionInfo {
  question: string;
  options: QuestionOption[];
}

export function Question(props: {
  questionInfo: QuestionInfo;
  onNext: () => void;
  onValidate: (selected: number) => void;
  reveal: boolean;
  selected?: number;
}) {
  return (
    <div className="max-w-2xl m-auto">
      <h1 className="text-xl font-medium w-full text-center mb-5">
        {props.questionInfo.question}
      </h1>
      <Box className="flex flex-wrap max-w-lg m-auto mb-7">
        {props.questionInfo.options.map((option, index) => (
          <Answer
            key={option.text}
            option={option}
            reveal={props.reveal}
            onClick={() => {
              props.onValidate(index);
            }}
            selected={props.selected === index}
          />
        ))}
      </Box>
      <div className="w-full flex">
        <Button
          onClick={props.onNext}
          variant="contained"
          endIcon={<NavigateNextIcon />}
          sx={{ mr: 4, ml: "auto" }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
