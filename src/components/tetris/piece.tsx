import { Block } from "./Block";
import { blockWidth } from "./const";
import { Field, copy2DArray } from "./field";

const Lright: Array<Array<number>> = [
  [0, 12, 0, 0],
  [0, 11, 0, 0],
  [0, 10, 9, 0],
  [0, 0, 0, 0],
];
const Lleft = [
  [0, 16, 0, 0],
  [0, 15, 0, 0],
  [13, 14, 0, 0],
  [0, 0, 0, 0],
];
const barre = [
  [0, 1, 0, 0],
  [0, 2, 0, 0],
  [0, 3, 0, 0],
  [0, 4, 0, 0],
];
const carre = [
  [0, 0, 0, 0],
  [0, 5, 6, 0],
  [0, 7, 8, 0],
  [0, 0, 0, 0],
];

const Z1 = [
  [0, 0, 0, 0],
  [21, 22, 0, 0],
  [0, 23, 24, 0],
  [0, 0, 0, 0],
];
const Z2 = [
  [0, 0, 0, 0],
  [0, 19, 20, 0],
  [17, 18, 0, 0],
  [0, 0, 0, 0],
];

const T = [
  [0, 0, 0, 0],
  [0, 0, 28, 0],
  [0, 25, 26, 27],
  [0, 0, 0, 0],
];
export const pieceArray = [T, Z2, Z1, carre, barre, Lleft, Lright];

export function randomPiece() {
  return pieceArray[Math.floor(Math.random() * pieceArray.length)];
}

export class Piece {
  pattern: number[][];

  x: number;
  y: number;
  falling = true;
  constructor(pattern: Array<Array<number>>) {
    this.x = 0;
    this.y = 0;

    this.pattern = copy2DArray(pattern);
  }

  rotate() {
    const temp = [];
    for (let j = 0; j < this.pattern[0].length; ++j) {
      const line: number[] = [];
      for (let i = 0; i < this.pattern.length; ++i) {
        //line.push(this.pattern[i][j])
        arrayInsertTop(line, this.pattern[i][j]);
      }
      temp.push(line);
      //arrayInsertTop(temp, line)
    }
    this.pattern = temp;
  }

  show() {
    return (
      <g>
        {this.pattern.map((line, i) => (
          <>
            {line.map((b, j) => (
              <Block
                x={this.x * blockWidth + j * blockWidth + 1}
                y={this.y * blockWidth + i * blockWidth + 1}
                width={blockWidth - 2}
                height={blockWidth - 2}
                texture={b}
              />
            ))}
          </>
        ))}
      </g>
    );
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
  for (let i = 0; i < piece.pattern.length; ++i) {
    for (let j = 0; j < piece.pattern[i].length; ++j) {
      if (piece.pattern[i][j])
        currentField.field[i + piece.y][j + piece.x] = piece.pattern[i][j];
    }
  }
  piece.falling = false;
}
