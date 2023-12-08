/// <reference types="vite-plugin-svgr/client" />

import B1 from "../../assets/tetris/b1.svg?react";
import B2 from "../../assets/tetris/b2.svg?react";
import B3 from "../../assets/tetris/b3.svg?react";
import B4 from "../../assets/tetris/b4.svg?react";
import C1 from "../../assets/tetris/c1.svg?react";
import C2 from "../../assets/tetris/c2.svg?react";
import C3 from "../../assets/tetris/c3.svg?react";
import C4 from "../../assets/tetris/c4.svg?react";
import D1 from "../../assets/tetris/d1.svg?react";
import D2 from "../../assets/tetris/d2.svg?react";
import D3 from "../../assets/tetris/d3.svg?react";
import D4 from "../../assets/tetris/d4.svg?react";
import L1 from "../../assets/tetris/l1.svg?react";
import L2 from "../../assets/tetris/l2.svg?react";
import L3 from "../../assets/tetris/l3.svg?react";
import L4 from "../../assets/tetris/l4.svg?react";
import N1 from "../../assets/tetris/n1.svg?react";
import N2 from "../../assets/tetris/n2.svg?react";
import N3 from "../../assets/tetris/n3.svg?react";
import N4 from "../../assets/tetris/n4.svg?react";
import Nr1 from "../../assets/tetris/nr1.svg?react";
import Nr2 from "../../assets/tetris/nr2.svg?react";
import Nr3 from "../../assets/tetris/nr3.svg?react";
import Nr4 from "../../assets/tetris/nr4.svg?react";
import T1 from "../../assets/tetris/t1.svg?react";
import T2 from "../../assets/tetris/t2.svg?react";
import T3 from "../../assets/tetris/t3.svg?react";
import T4 from "../../assets/tetris/t4.svg?react";

const textures = [
  <></>,
  <L1 />,
  <L2 />,
  <L3 />,
  <L4 />,
  <N1 />,
  <N2 />,
  <N3 />,
  <N4 />,
  <Nr1 />,
  <Nr2 />,
  <Nr3 />,
  <Nr4 />,
  <T1 />,
  <T2 />,
  <T3 />,
  <T4 />,
  <B1 />,
  <B2 />,
  <B3 />,
  <B4 />,
  <C1 />,
  <C2 />,
  <C3 />,
  <C4 />,
  <D1 />,
  <D2 />,
  <D3 />,
  <D4 />,
  
];
{
  /* <g width={100} height={100}></g>, */
}

export function Block(props: {
  x: number;
  y: number;
  width: number;
  height: number;
  texture: number;
}) {
  if (props.texture === 0) {
    return null;
  }
  return (
    <g transform={`translate(${props.x} ${props.y}) scale(0.2) `}>
      {textures[props.texture]}
    </g>
  );
}
