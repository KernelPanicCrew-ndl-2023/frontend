import { blockWidth } from "./const";
import { Field } from "./field";

const Lright: Array<Array<number>> = [
  [0, 4, 0, 0],
  [0, 4, 0, 0],
  [0, 4, 4, 0],
  [0, 0, 0, 0],
];
const Lleft = [
  [0, 5, 0, 0],
  [0, 5, 0, 0],
  [5, 5, 0, 0],
  [0, 0, 0, 0],
];
const barre = [
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
];
const carre = [
  [0, 0, 0, 0],
  [0, 2, 2, 0],
  [0, 2, 2, 0],
  [0, 0, 0, 0],
];

const Z1 = [
  [0, 0, 0, 0],
  [6, 6, 0, 0],
  [0, 6, 6, 0],
  [0, 0, 0, 0],
];
const Z2 = [
  [0, 0, 0, 0],
  [0, 7, 7, 0],
  [7, 7, 0, 0],
  [0, 0, 0, 0],
];

const T = [
  [0, 0, 0, 0],
  [0, 0, 3, 0],
  [0, 3, 3, 3],
  [0, 0, 0, 0],
];
export const pieceArray = [T, Z2, Z1, carre, barre, Lleft, Lright];

export function randomPiece() {
  return pieceArray[Math.floor(Math.random() * pieceArray.length)];
}

const colors = [
  "#FFFFFF",
  "#00FFFF",
  "#FFFF00",
  "#AA00FF",
  "#FFA500",
  "#0000FF",
  "#FF0000",
  "#00FF00",
];
export function drawPiece(pattern: number[][]): (HTMLElement | undefined)[][] {
  const out = [];
  for (let i = 0; i < pattern.length; ++i) {
    const line = [];
    for (let j = 0; j < pattern.length; ++j) {
      if (pattern[i][j] !== 0) {
        const rect = document.createElement("rect");

        rect.setAttribute("x", `${j * blockWidth + 1}`);
        rect.setAttribute("y", `${i * blockWidth + 1}`);
        rect.setAttribute("width", `${blockWidth - 2}`);
        rect.setAttribute("height", `${blockWidth - 2}`);
        const color = colors[pattern[i][j]];
        rect.setAttribute("fill", color);
        line.push(rect);
      }
      line.push(undefined);
    }
    out.push(line);
  }
  return out;
}

export class Piece {
  elements: (HTMLElement | undefined)[][];
  // group containing the blocks
  g: HTMLElement;

  x: number;
  y: number;
  falling = true;
  constructor(pattern: Array<Array<HTMLElement | undefined>>) {
    this.x = 0;
    this.y = 0;

    this.elements = pattern;

    this.g = document.createElement("g");
    for (const line of this.elements) {
      for (const el of line) {
        if (el) this.g.appendChild(el);
      }
    }
  }

  rotate() {
    const temp = [];
    for (let j = 0; j < this.elements[0].length; ++j) {
      const line: (HTMLElement | undefined)[] = [];
      for (let i = 0; i < this.elements.length; ++i) {
        //line.push(this.pattern[i][j])
        arrayInsertTop(line, this.elements[i][j]);
      }
      temp.push(line);
      //arrayInsertTop(temp, line)
    }
    this.elements = temp;
  }

  update() {
    for (let j = 0; j < this.elements[0].length; ++j) {
      for (let i = 0; i < this.elements.length; ++i) {
        const element = this.elements[i][j];
        if (element) {
          element.setAttribute("x", `${this.x * blockWidth + j * blockWidth}`);
          element.setAttribute("y", `${this.y * blockWidth + i * blockWidth}`);
        }
      }
    }
  }

  show(svg: SVGElement) {
    svg.appendChild(this.g);
  }
  remove(svg: SVGElement) {
    svg.removeChild(this.g);
  }
}

function arrayInsertTop<T>(array: Array<T>, i: T) {
  array.push(i);
  for (let i = array.length - 1; i > 0; --i) {
    array[i] = array[i - 1];
  }
  array[0] = i;
}

export function deconstructOnField(currentField: Field, piece: Piece) {
  for (let i = 0; i < piece.elements.length; ++i) {
    for (let j = 0; j < piece.elements[i].length; ++j) {
      if (piece.elements[i][j])
        currentField.field[i + piece.y][j + piece.x] = piece.elements[i][j];
    }
  }
  piece.falling = false;
}
