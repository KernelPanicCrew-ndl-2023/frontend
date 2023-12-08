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
  for (let i = 0; i < fallingPiece.pattern.length; ++i) {
    for (let j = 0; j < fallingPiece.pattern[i].length; ++j) {
      if (
        fallingPiece.pattern[i][j] &&
        (fallingPiece.x + xOffset + j > currentField.field[0].length + 1 ||
          fallingPiece.x + xOffset + j < 0)
      ) {
        //touche le le bord

        return FitStatus.BORDER;
      } else if (
        fallingPiece.pattern[i][j] &&
        fallingPiece.y + yOffset + i > currentField.field.length - 1
      ) {
        //console.log(fallingPiece.y)

        //touche le fond
        // fallingPiece.deconstruct(currentField);
        return FitStatus.GROUND;
      } else if (
        fallingPiece.pattern[i][j] &&
        currentField.field[fallingPiece.y + yOffset + i][
          fallingPiece.x + xOffset + j
        ]
      ) {
        // if (yOffset != 0) fallingPiece.deconstruct(currentField);
        return FitStatus.BLOCK;

        yOffset = 0;
      }
    }
  }

  return FitStatus.FREE;
}
