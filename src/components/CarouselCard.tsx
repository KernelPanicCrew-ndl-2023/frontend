export interface CarouselCardProps {
  title: string;
  description: string[];
  link: string;
  image: string;
}

export function CarouselCard(props: CarouselCardProps) {
  return (
    <div
      className="w-full h-full flex flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="w-full h-full flex flex-col justify-between bg-cover bg-center bg-white/50">
        <div className="w-full h-full flex flex-col justify-between align-middle">
          <h1 className="text-3xl font-bold text-center m-4">{props.title}</h1>
          <div>
            {props.description.map((paragraph) => (
              <p className="text-xl text-center">{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <a href={props.link} className="text-xl font-bold underline">
            En savoir plus
          </a>
        </div>
      </div>
    </div>
  );
}
