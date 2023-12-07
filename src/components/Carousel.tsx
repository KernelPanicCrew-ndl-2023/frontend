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
    <div className="carousel w-full h-full flex flex-row justify-between items-center">
      <div onClick={prev} className="p-10 cursor-pointer select-none">
        <p className="w-5 h-5 select-none">&lt;</p>
      </div>
      <div>
        {props.items[current]}
      </div>
      <div onClick={next} className="p-10 cursor-pointer select-none">
        &gt;
      </div>
    </div>
  );
}