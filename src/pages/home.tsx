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
    <div className="w-full h-[95vh]">
      <Carousel
        items={items.map((item) => (
          <CarouselCard {...item} />
        ))}
      />
    </div>
  );
}
