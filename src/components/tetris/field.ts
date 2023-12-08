const blankLine: (HTMLElement | undefined)[] = [
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];

// field : 10*22
export class Field {
  field: Array<Array<HTMLElement | undefined>>;
  constructor() {
    this.field = [];
    for (let i = 0; i < 22; ++i) {
      const line = [];
      for (let j = 0; j < 10; ++j) {
        line.push(undefined);
      }
      this.field.push(line);
    }
  }
  checkLines() {
    let combo = 0;
    for (let i = 0; i < this.field.length; ++i) {
      let full = true;
      for (let j = 0; j < this.field[i].length; ++j) {
        if (this.field[i][j] === undefined) {
          full = false;
          break;
        }
      }
      if (full) {
        ++combo;
        const temp = [blankLine];
        const top = this.field.slice(0, i);
        for (let j = 0; j < top.length; ++j) {
          temp.push(top[j]);
        }
        const bot = this.field.slice(i + 1);
        for (let j = 0; j < bot.length; ++j) {
          console.log(j);
          temp.push(bot[j]);
        }
        this.field = copy2DArray(temp);
      }
    }
    switch (combo) {
      case 0:
        return 0;
      case 1:
        return 40;
      case 2:
        return 100;
      case 3:
        return 300;
      case 4:
        return 1200;
      default:
        return combo * 300;
    }
  }
}

export function copy2DArray<T>(input: Array<Array<T>>) {
  const out: Array<Array<T>> = [];
  for (let i = 0; i < input.length; ++i) {
    const line = [];
    for (let j = 0; j < input[i].length; ++j) {
      line.push(input[i][j]);
    }
    out.push(line);
  }
  return out;
}
