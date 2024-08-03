export { ship };

class ship {
    
    constructor(length) {
    this.hit = 0
    this.length=length
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
       

        array.push([nx, ny]);
      } else array.push(0);
    });

    let finalarray = [];

    console.log(array)

    array.forEach((item, index) => {
      let collided = false;
      if (!(item instanceof Array)) {
        return false;
      }
      let [a,b] = [x,y]
      console.log(x,y)
      console.log(a,b)
      const [nx, ny] = item;
      if (this.board[a][b] instanceof ship) {
        console.log([a,b])
         console.log("this can jiep")
        return false;
      }
      if (index === 0) {
        while (nx > a) {
          if (this.board[a++][b] instanceof ship) {
            console.log(nx)
            console.log("index 0")
            console.log(a)
            collided = true;
          }
        }
        if (collided === false) {
          finalarray.push(item);
        } else {
            console.log(a)
            finalarray.push(0);}
            collided=false
      }
      if (index === 1) {
        while (a > nx) {
          if (this.board[a--][b] instanceof ship) {
            collided = true;
            console.log("index 1")
            
          }
        }
        if (collided === false) {
          finalarray.push(item);
        } else {
            finalarray.push(0)
            collided=false}
      }
      if (index === 2) {
        while (ny > b) {
          if (this.board[a][b++] instanceof ship) {
            collided = true;
            console.log("index 2")
            
          }
        }
        if (collided === false) {
          finalarray.push(item);
        } else {
            finalarray.push(0)
            collided=false}; 
      }
      if (index === 3) {
        while (a > ny) {
          if (this.board[a][b--] instanceof ship) {
            console.log("index 3")
            collided = true;
            
          }
        }
        if (collided === false) {
          finalarray.push(item);
        } else {
            collided=false
            finalarray.push(0)};
      }
    });
    return finalarray
  }

  placeTheShip(x, y, length, move) {
    let array = this.battlemove(x, y, length);

    console.log(array[0])

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
    const newShip = new ship(length);
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
thegame.placeTheShip(6,0,2, "down") 
thegame.placeTheShip(4,0,2, "down") 
console.log(thegame.board[5][0])

