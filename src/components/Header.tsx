import { Link } from "react-router-dom";

export default function Header() {
  const items = [
    {
      title: "Acceuil",
      link: "/",
    },
    {
      title: "Quiz",
      link: "/quizz",
    },
    {
      title: "Testez-vous",
      link: "/survey",
    },
  ];

  return (
    <header className="w-full h-10 flex flex-row justify-evenly items-center shadow-md bg-[#095228] text-white">
      {items.map((item) => (
        <Link to={item.link} className="w-full flex justify-center items-center h-full hover:shadow-lg">
          <span className="font-bold underline w-full text-center">{item.title}</span>
        </Link>
      ))}
    </header>
  );
}
