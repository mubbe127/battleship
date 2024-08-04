export { ship };

class ship {
  constructor(length) {
    this.hit = 0;
    this.length = length;
  }

  getLength() {
    return this.length;
  }

  getHitCount() {
    return this.hit;
  }
  incrementHit() {
    if (this.hit >= this.length) {
      return;
    }
    this.hit++;
    return this.hit;
  }

  isSunk() {
    if (this.length === this.hit) {
      return true;
    } else {
      return false;
    }
  }
}

function cell(i, j) {
  this.ship = null;
  this.miss = false;
  this.beenHit = false;
  this.value = [i, j];
}

class gameBoard {
  constructor() {
    this.board = this.createArray();
    this.ships = [];
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
        array.push([nx, ny]);
      } else array.push(0);
    });

    let finalarray = [];

    console.log(array);

    array.forEach((item, index) => {
      let collided = false;
      if (!(item instanceof Array)) {
        finalarray.push(item);
        return false;
      }
      let [a, b] = [x, y];

      const [nx, ny] = item;
      if (this.board[x][y].ship instanceof ship) {
        finalarray.push(0);
        return false;
      }

      if (index === 0) {
        while (nx > a) {
          a++;
          if (this.board[a][b].ship instanceof ship) {
            collided = true;
          }
        }
        if (collided === false) {
          finalarray.push(item);
        } else {
          finalarray.push(0);
        }
        collided = false;
      }
      if (index === 1) {
        while (a > nx) {
          a--;
          if (this.board[a][b].ship instanceof ship) {
            collided = true;
            console.log("index 1");
          }
        }
        if (collided === false) {
          finalarray.push(item);
        } else {
          finalarray.push(0);
          collided = false;
        }
      }
      if (index === 2) {
        while (ny > b) {
          b++;
          if (this.board[a][b].ship instanceof ship) {
            collided = true;
            console.log("index 2");
          }
        }
        if (collided === false) {
          finalarray.push(item);
        } else {
          finalarray.push(0);
          collided = false;
        }
      }
      if (index === 3) {
        while (b >= ny) {
          b--;
          if (this.board[a][b] instanceof ship) {
            console.log("index 3");
            collided = true;
          }
        }
        if (collided === false) {
          finalarray.push(item);
        } else {
          collided = false;
          finalarray.push(0);
        }
      }
    });
    return finalarray;
  }

  placeTheShip(x, y, length, move) {
    let array = this.battlemove(x, y, length);

    console.log(array);

    switch (move) {
      case "down":
        array = array[0];
        break;
      case "up":
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
    if (array instanceof Array) {
      const [z, w] = array;
      if (x !== z && y !== w) {
        console.log("jiep");
        return;
      }
      const newShip = new ship(length);
      this.ships.push(newShip);
      if (y === w && z >= x) {
        this.board[x][y].ship = newShip;

        while (z >= x) {
          this.board[x++][y].ship = newShip;
        }
      }
      if (x === z && w >= y) {
        this.board[x][y].ship = newShip;
        while (w >= y) {
          this.board[x][y++].ship = newShip;
          console.log(y);
        }
      }
      if (y === w && x >= z) {
        this.board[x][y].ship = newShip;
        while (x >= z) {
          this.board[x--][y].ship = newShip;
        }
      }
    } else {
      console.log("No path found");
    }
  }
  recieveAttack([x, y]) {
    if (
      this.board[x][y].ship instanceof ship &&
      this.board[x][y].beenHit === false
    ) {
      this.board[x][y].beenHit = true;
      this.board[x][y].ship.incrementHit();
    } else if (this.board[x][y].beenHit === true) {
      return;
    } else {
      this.board[x][y].miss = true;
    }
  }

  allShipSunk() {

    return this.ships.every(item => 
        item.isSunk()

    )
  }
}

Player {

    constructor(name){

        this.name= 
        this.gameBoard= new gameBoard()
    }
}

const thegame = new gameBoard();
thegame.placeTheShip(6, 0, 2, "down");
thegame.placeTheShip(4, 0, 2, "up");
thegame.recieveAttack([4, 0]);
thegame.recieveAttack([3, 0]);
thegame.recieveAttack([7,0])
thegame.recieveAttack([6,0])
console.log(thegame.board[3][0]);
console.log(thegame.board[4][0]);
console.log(thegame.board[7][0]);
console.log(thegame.ships[1].isSunk())
console.log(thegame.allShipSunk())
