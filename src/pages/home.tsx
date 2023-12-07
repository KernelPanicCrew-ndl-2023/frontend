import Carousel from "../components/Carousel";
import { CarouselCard, CarouselCardProps } from "../components/CarouselCard";

export default function Home() {
  const items: CarouselCardProps[] = [
    {
      title: "Titre 1",
      description: "Description 1",
      link: "https://www.google.com",
      image: "https://picsum.photos/200/300",
      color: "bg-red-500",
    },
    {
      title: "Titre 2",
      description: "Description 2",
      link: "https://www.google.com",
      image: "https://picsum.photos/200/300",
      color: "bg-blue-500",
    },
    {
      title: "Titre 3",
      description: "Description 3",
      link: "https://www.google.com",
      image: "https://picsum.photos/200/300",
      color: "bg-green-500",
    },
    {
      title: "Titre 4",
      description: "Description 4",
      link: "https://www.google.com",
      image: "https://picsum.photos/200/300",
      color: "bg-yellow-500",
    },
  ];

  return (
    <>
      <div className="w-full h-[95vh]">
        <Carousel
          items={items.map((item) => (
            <CarouselCard {...item} />
          ))}
        />
      </div>
      <div className="bg-red-600 p-5">
        <div className="bg-white rounded p-5">
        <p>
          Bienvenue sur notre site dédié à la sensibilisation aux problèmes liés
          aux émissions de <span className="highlight">CO2E</span>. Notre mission :
          vous aider à comprendre l'impact de nos émissions de gaz à effet de
          serre sur notre environnement afin de mieux les réduire.
        </p>
        <p>
          Ici, nous vous proposons des informations approfondies sur les
          émissions de <span className="highlight">CO2E</span>, avec la ferme
          conviction que la connaissance est le premier pas vers le changement
          positif.
        </p>
        <img src="images/earth-saving.png" alt="La Terre qui sauve le monde" />
        <p>
          Explorez des données précises, engagez-vous dans des analyses
          détaillées et découvrez des solutions concrètes pour réduire les
          émissions. Notre approche est pragmatique, axée sur l'éducation et
          l'action.
        </p>
        <p>
          Participez à nos sessions interactives, plongez dans des études de cas
          réelles et comprenez comment chacun de nous peut contribuer à créer un
          avenir plus durable.
        </p>
        <blockquote>
          <p>
            "Sauvons la planète ensemble, car c'est notre responsabilité
            collective et individuelle. Chaque geste compte, chaque action fait
            la différence." - L'équipe d'Exploration CO2E
          </p>
        </blockquote>
        </div>
      </div>
    </>
  );
}
