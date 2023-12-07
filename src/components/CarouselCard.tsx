export interface CarouselCardProps {
  title: string;
  description: string;
  link: string;
  image?: string;
  color?: string;
}

export function CarouselCard(props: CarouselCardProps) {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center transition-all">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">{props.title}</h1>
        <p className="text-xl">{props.description}</p>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <a href={props.link} className="text-xl font-bold underline">
          En savoir plus
        </a>
      </div>
    </div>
  );
}
