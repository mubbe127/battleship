export { ship };

function ship(length) {
  let hit = 0;
  return {
    getLength() {
      return length;
    },

    getHitCount() {
      return hit;
    },
    incrementHit() {
      if (hit >= length) {
        return;
      }
      hit++;
      return hit;
    },

    isSunk() {
      if (length === hit) {
        return true;
      } else {
        return false;
      }
    },
  };
}
function cell(i, j) {
  this.value = [i, j];
  this.link = [];
}

class gameBoard {
  constructor() {
    this.board = this.createArray();
    this.queue = [];
  }

  createArray() {
    let array = [];
    for (let i = 0; i < 10; i++) {
      array.push([]);

      for (let j = 0; j < 10; j++) {
        array[i].push([]);
        array[i][j] = new cell(i, j);
      }
    }
    return array;
  }

  placeShip(length, [x, y], [z, w]) {
    if (x !== z && y !== w) {
      console.log("jiep");
      return;
    }
    const newShip = ship(length);
    if (y === w && z >= x) {
      this.board[x][y] = newShip;
      while (z >= x) {
        this.board[x++][y] = newShip;
      }
    }
    if (x === z && w >= y) {
      this.board[x][y] = newShip;
      while (w >= y) {
        this.board[x][y++] = newShip;
        console.log(y);
      }
    }
    if (y === w && x >= z) {
      this.board[x][y] = newShip;
      while (x >= z) {
        this.board[x--][y] = newShip;
      }
    }
  }

  isWithinBounds(x, y) {
    return x >= 0 && x < 10 && y >= 0 && y < 10;
  }

  battlemove(x, y, length) {
    const moves = [
      [x + length - 1, y],
      [x - length + 1, y],
      [x, y + length - 1],
      [x, y - length + 1],
    ];
    let array = [];
    moves.forEach(([nx, ny]) => {
      if (this.isWithinBounds(nx, ny)) {
        console.log("jiep");

        array.push([nx, ny]);
      } else array.push(0);

      return array;
    });

    return array;
  }


  placeTheShip(x, y, length, move) {
     let array = this.battlemove(x, y, length);

    switch (move) {
      case "up":
        array = array[0];
        break;
      case "down":
        array = array[1];
        break;
      case "left":
        array = array[2];
        break;
      case "right":
        array = array[3];
        break;

      default:
        console.log("jiep");
    }
    const [z, w] = array;
    if (x !== z && y !== w) {
      console.log("jiep");
      return;
    }
    const newShip = ship(length);
    if (y === w && z >= x) {
      this.board[x][y] = newShip;
      while (z >= x) {
        this.board[x++][y] = newShip;
      }
    }
    if (x === z && w >= y) {
      this.board[x][y] = newShip;
      while (w >= y) {
        this.board[x][y++] = newShip;
        console.log(y);
      }
    }
    if (y === w && x >= z) {
      this.board[x][y] = newShip;
      while (x >= z) {
        this.board[x--][y] = newShip;
      }
    }
  }
}

const thegame = new gameBoard();

console.log(thegame.placeTheShip(5, 0, 3, "down"));
console.log(thegame.board[2][0])
