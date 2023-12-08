import { Field } from "./field";
import { Piece } from "./piece";

export enum FitStatus {
  FREE,
  BORDER,
  GROUND,
  BLOCK,
}

export function checkFit(
  fallingPiece: Piece,
  currentField: Field,
  xOffset: number,
  yOffset: number
): FitStatus {
  let moved = FitStatus.FREE;

  for (let i = 0; i < fallingPiece.elements.length; ++i) {
    for (let j = 0; j < fallingPiece.elements[i].length; ++j) {
      if (moved) {
        if (
          fallingPiece.elements[i][j] &&
          (fallingPiece.x + xOffset + i > currentField.field[0].length + 1 ||
            fallingPiece.x + xOffset + i < -1)
        ) {
          //touche le le bord

          moved = FitStatus.BORDER;
        } else if (
          fallingPiece.elements[i][j] &&
          fallingPiece.y + yOffset + i > currentField.field.length - 1
        ) {
          //console.log(fallingPiece.y)

          //touche le fond
          // fallingPiece.deconstruct(currentField);
          moved = FitStatus.GROUND;
        } else if (
          fallingPiece.elements[i][j] &&
          currentField.field[fallingPiece.y + yOffset + i][
            fallingPiece.x + xOffset + j
          ]
        ) {
          // if (yOffset != 0) fallingPiece.deconstruct(currentField);
          moved = FitStatus.BLOCK;

          yOffset = 0;
        }
      }
    }
  }

  return moved;
}
