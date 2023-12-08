const colors = [
  "none",
  "#00FFFF",
  "#FFFF00",
  "#AA00FF",
  "#FFA500",
  "#0000FF",
  "#FF0000",
  "#00FF00",
];

export function Block(props: {
  x: number;
  y: number;
  width: number;
  height: number;
  texture: number;
}) {
  return (
    <rect
      x={props.x}
      y={props.y}
      width={props.width}
      height={props.height}
      fill={colors[props.texture]}
    ></rect>
  );
}
