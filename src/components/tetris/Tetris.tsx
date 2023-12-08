import { useEffect, useRef, useState } from "react";
import { FitStatus, checkFit } from "./fit";
import { Piece, deconstructOnField, drawPiece, randomPiece } from "./piece";
import { Field, copy2DArray } from "./field";

enum GameState {
  MENU,
  GAME,
  END,
  PAUSE,
}

function randomNextPiece() {
  const p = new Piece(drawPiece(randomPiece()));
  p.x = 15;
  p.y = 3;
  return p;
}

const keysParam = new Map();
keysParam.set("right", "ArrowRight");
keysParam.set("left", "ArrowLeft");
keysParam.set("down", "Space");
keysParam.set("rotate", "ArrowUp");

let frameCount = 0;

let animationFrame = 0;

const tickrate = 60; // every 30 frames

const keyMap = new Map();

export function Tetris() {
  const [gameState, setGameState] = useState(GameState.MENU);
  const [score, setScore] = useState(0);

  const [nextPiece, setNextPiece] = randomNextPiece();
  const [piece1, setPiece1] = randomNextPiece();
  const [gameField, setGameField] = useState(new Field());

  const divRef = useRef<null | HTMLDivElement>(null);

  const svgRef = useRef<null | SVGSVGElement>(null);

  function initGame() {
    nextPiece = randomNextPiece();
    piece1 = randomNextPiece();
    gameField = new Field();
    frameCount = 0;
    changePieces();
  }

  function changePieces() {
    piece1 = nextPiece;
    nextPiece = randomNextPiece();
    piece1.x = 2;
    piece1.y = 0;
    if (svgRef.current) {
      piece1.show(svgRef.current);

      const rect = document.createElement("rect");

      rect.setAttribute("x", `10`);
      rect.setAttribute("y", `10`);
      rect.setAttribute("width", `10`);
      rect.setAttribute("height", `10`);
      const color = "#FFFFFF";
      rect.setAttribute("fill", color);

      svgRef.current.appendChild(rect);
      setScore(1);
    }
    // if (divRef.current) {
    //   const a = divRef.current.getElementsByTagName("svg");
    //   let svg;
    //   if (a.length === 0) {
    //     svg = document.createElement("svg");
    //   } else {
    //     svg = a.item(0);
    //   }
    //   piece1.show(svg as SVGElement);
    // }
  }

  function goDown() {
    const fit = checkFit(piece1, gameField, 0, 1);
    if (fit === FitStatus.FREE) {
      piece1.x += 0;
      piece1.y += 1;
    } else {
      deconstructOnField(gameField, piece1);
      changePieces();
    }
  }

  const gameLoop = () => {
    console.log("loop");
    switch (gameState) {
      case GameState.GAME: {
        frameCount += 1;

        // check for completed lines
        if (frameCount % 5 === 0) {
          const scored = gameField.checkLines();
          if (scored > 0) {
            setScore((old) => old + scored);
          }
        }
        if (keyMap.get(keysParam.get("down"))) {
          goDown();
        }

        if (frameCount >= tickrate) {
          goDown();
          frameCount = 0;
        }
        piece1.update();
      }
    }
  };

  useEffect(() => {
    const frame = () => {
      gameLoop();
      if (animationFrame != -1) {
        animationFrame = requestAnimationFrame(frame);
      }
    };
    frame();
    return () => {
      cancelAnimationFrame(animationFrame);
      // animationFrame = -1;
    };
  });

  useEffect(() => {
    const up = (e: KeyboardEvent) => {
      keyMap.set(e.code, false);
    };

    addEventListener("keyup", up);

    const down = (e: KeyboardEvent) => {
      keyMap.set(e.code, true);
      if (gameState === GameState.END) {
        if (e.code === "Enter") {
          setGameState(GameState.MENU);
        }
      }

      /// pause
      // else if (gameState === gameState.) {
      //     if (e.code === "Escape") {
      //         gameState = 1
      //     }
      //     if (e.code === "Enter") {
      //         gameState = 2
      //     }

      // }

      /// key set
      // else if (gameState === 5) {
      //     keysParam.set(keyToChange, e.code)
      //     gameState = oldGameState

      //     let el = <HTMLSpanElement>document.getElementById(keyToChange + "Key")
      //     el.innerText = e.code.toString()
      //     let elb = <HTMLButtonElement>document.getElementById(keyToChange + "Button")
      //     elb.innerText = "change " + keyToChange + " key"
      // }
      else if (gameState === GameState.MENU) {
        if (e.code === "Enter") {
          initGame();
          setGameState(GameState.GAME);
        }
      } else if (gameState === GameState.GAME) {
        /// pause

        // if (e.code === "Escape") {
        //   gameState = 4;
        // }

        if (e.code === keysParam.get("rotate")) {
          const temp = copy2DArray(piece1.elements);
          const pieceTemp = new Piece(temp);
          pieceTemp.x = piece1.x;
          pieceTemp.y = piece1.y;
          pieceTemp.rotate();
          if (checkFit(pieceTemp, gameField, 0, 0) === FitStatus.FREE) {
            piece1.rotate();
          } else {
            if (pieceTemp.x < 5) {
              pieceTemp.x += 1;
              if (checkFit(pieceTemp, gameField, 0, 0) === FitStatus.FREE) {
                piece1.x += 1;

                piece1.rotate();
              }
            } else {
              pieceTemp.x -= 1;
              if (checkFit(pieceTemp, gameField, 0, 0) === FitStatus.FREE) {
                piece1.x -= 1;
                piece1.rotate();
              }
            }
          }
        }
        if (e.code === keysParam.get("right")) {
          if (checkFit(piece1, gameField, 1, 0) === FitStatus.FREE) {
            piece1.x += 1;
          }
        }
        if (e.code === keysParam.get("left")) {
          if (checkFit(piece1, gameField, -1, 0) === FitStatus.FREE) {
            piece1.x += -1;
          }
        }
      }
    };
    addEventListener("keydown", down);
    return () => {
      removeEventListener("keydown", down);
      removeEventListener("keyup", up);
    };
  });

  return (
    <div>
      <p>Score : {score}</p>
      <button
        onClick={() => {
          initGame();
          setGameState(GameState.GAME);
        }}
      >
        init
      </button>
      <div ref={divRef}></div>
      <svg ref={svgRef} className="bg-black" width={400} height={440}>
        <rect width="1" height="1" fill="white" x="10" y="100" />
        {score}
      </svg>
    </div>
  );
}
