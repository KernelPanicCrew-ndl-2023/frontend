import { useState } from "react";
import { Question } from "../../components/quizz/Question";
import { Results } from "../../components/quizz/Results";
import Santa from "../../assets/Santa.svg";
import Bear from "../../assets/Bear.svg";
import Deer from "../../assets/Deer.svg";

const questions = [
  {
    question:
      "En Europe, en 2017, la pollution de l’air a été responsable de la mort prématurée de :",
    options: [
      { text: "400 personnes", valid: false },
      { text: "4.000 personnes", valid: false },
      { text: "40.000 personnes", valid: false },
      { text: "400.000 personnes", valid: true },
    ],
  },
  {
    question:
      "Quel est le pourcentage de production d’électricité d'origine photovoltaïque par rapport à la production totale d’électricité au niveau mondial ?",
    options: [
      { text: "0.1%", valid: false },
      { text: "1%", valid: true },
      { text: "30%", valid: false },
      { text: "70%", valid: false },
    ],
  },
  {
    question:
      "A combien se monte la production d’énergie hydraulique en 2017 dans la production totale d’électricité en France ? ",
    options: [
      { text: "9%", valid: true },
      { text: "19%", valid: false },
      { text: "29%", valid: false },
      { text: "39%", valid: false },
    ],
  },
  {
    question:
      "Quel pourcentage d’émission de dioxyde de carbone est attribué aux villes (qui n’occupent que 3% de la masse continentale mondiale) ?",
    options: [
      { text: "3%", valid: false },
      { text: "10%", valid: false },
      { text: "30%", valid: false },
      { text: "70%", valid: true },
    ],
  },
  {
    question:
      "En France, quelle est en moyenne la part des trajets domicile/travail effectués en voiture ?",
    options: [
      { text: "40%", valid: false },
      { text: "60%", valid: false },
      { text: "70%", valid: true },
      { text: "90%", valid: false },
    ],
  },
  {
    question:
      "En France, un passager dans un tramway émet 3 g de CO2 par km. Combien émet un conducteur seul de voiture thermique en milieu urbain en moyenne ?",
    options: [
      { text: "1.3 g/km", valid: false },
      { text: "13 g/km", valid: false },
      { text: "130 g/km", valid: true },
      { text: "1300 g/km", valid: false },
    ],
  },
  {
    question:
      "La production d’électricité (et de chaleur) et l'agriculture sont les deux premiers postes d’émission de Gaz à Effet de Serre dans le monde (respectivement 25%, 24%). Parmi les propositions suivantes, quel secteur vient ensuite : ",
    options: [
      { text: "La construction", valid: false },
      { text: "Le transport", valid: false },
      { text: "Le numérique", valid: false },
      { text: "L’industrie", valid: true },
    ],
  },
  {
    question:
      "Les forêts occupent environ 30% de la surface émergée de la planète et représentent un puits de carbone. Quel pourcentage de CO2 d'origine humaine absorbe-t-elle ? ",
    options: [
      { text: "1%", valid: false },
      { text: "10%", valid: false },
      { text: "15%", valid: false },
      { text: "20%", valid: true },
    ],
  },
  {
    question:
      "Le réchauffement climatique provient d'une concentration en CO2 dans l'atmosphère. Cette concentration volumique alarmante est d'environ : ",
    options: [
      { text: "0,04%", valid: true },
      { text: "0,4%", valid: false },
      { text: "4%", valid: false },
      { text: "40%", valid: false },
    ],
  },
  {
    question:
      "Les océans représentent 70% de la surface de la planète. Quelle quantité́ de CO2 d'origine humaine absorbent-ils ?",
    options: [
      { text: "1%", valid: false },
      { text: "10%", valid: false },
      { text: "30%", valid: true },
      { text: "60%", valid: false },
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
  const [counter, setCounter] = useState(0);

  const onNext = () => {
    setCounter(0)
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
      // Is valide :
      if (questions[index].options[selected].valid){
        setCounter(counter + 1);
        console.log(counter);
      }
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
      <h1 className="text-4xl font-medium"> Quiz</h1>
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
          <>
          <Question
            questionInfo={questions[index]}
            reveal={reveal}
            onNext={onNext}
            onValidate={(selected) => onValidate(selected)}
            selected={answers[index]}
          />
          {counter >= 5 && counter < 10 ? (
            <img className="h-64 w-64 right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src={Santa} alt="Santa pas content"/>
              ) : null }
          {counter >= 10 && counter < 15 ? (
            <img className="h-64 w-64 right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src={Deer} alt="Deer pas content"/>
              ) : null }
          {counter >= 15 ? (
            <img className="h-64 w-64 right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src={Bear} alt="Bear pas content"/>
              ) : null }
          </>
      )}
    </div>
  );
}
