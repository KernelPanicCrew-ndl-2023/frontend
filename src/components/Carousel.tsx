import React from "react";

export default function Carousel(props: { items: React.ReactNode[] }) {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent((current + 1) % props.items.length);
  };

  const prev = () => {
    setCurrent((current - 1 + props.items.length) % props.items.length);
  };
  return (
    <div className="carousel w-full h-full flex flex-row justify-between items-center overflow-hidden ">
      <div onClick={prev} className="group p-10 h-full flex items-center cursor-pointer select-none hover:shadow-[90px_0_50px_-60px_rgba(0,0,0,0.9)_inset] duration-500 hover:opacity-80">
        <p className="w-5 h-5 select-none grid group-hover:scale-[1.8] duration-500 align-middle opacity-1">&lt;</p>
      </div>
        {props.items[current]}
      <div onClick={next} className="p-10 h-full flex items-center cursor-pointer select-none hover:scale-[1.8] hover:shadow-[-90px_0_50px_-60px_rgba(0,0,0,0.9)_inset] duration-500 hover:opacity-80">
      <p className="w-5 h-5 select-none grid group-hover:scale-[1.8] duration-500 align-middle opacity-1">&gt;</p>
      </div>
    </div>
  );
}
