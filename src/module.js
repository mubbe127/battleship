export { ship, cell, gameBoard, Player };

class ship {
  constructor(length) {
    this.hit = 0;
    this.length = length;
    this.coordinates = [];
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
  this.validCell = true;
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
      if (
        this.board[x][y].ship instanceof ship ||
        !this.board[x][y].validCell
      ) {
        finalarray.push(0);
        return false;
      }

      if (index === 0) {
        while (nx > a) {
          a++;
          if (
            this.board[a][b].ship instanceof ship ||
            !this.board[a][b].validCell
          ) {
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
          if (
            this.board[a][b].ship instanceof ship ||
            !this.board[x][y].validCell
          ) {
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
          if (
            this.board[a][b].ship instanceof ship ||
            !this.board[x][y].validCell
          ) {
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
        while (b > ny) {
          b--;
          if (this.board[a][b].ship instanceof ship ||
            !this.board[x][y].validCell) {
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

    console.log(array[3]);

    switch (move) {
      case "down":
        array = array[0];
        break;
      case "up":
        array = array[1];
        break;
      case "right":
        array = array[2];
        break;
      case "left":
        array = array[3];
        break;

      default:
        console.log("jiep");
    }
    if (array instanceof Array) {
      const [z, w] = array;
      /* denna if testar att om funktionen skulle matas koordinater
      att x eller y har samma koordinat som slutkordinat(vilket innebär en rak skepp) */
      if (x !== z && y !== w) {
      
        return;
      }
      const newShip = new ship(length);
      this.ships.push(newShip);
      this.board[x][y].ship = newShip;
      newShip.coordinates.push([x, y]);
      if (y === w && z >= x) {
        while (z > x) {
          x++
          this.board[x][y].ship = newShip;
          newShip.coordinates.push([x, y]);
      
        }
      }
      else if(y === w && x >= z) {
        while (x > z) {
          x--
          this.board[x][y].ship = newShip;
          newShip.coordinates.push([x, y]);
    
        }
      }
      else if(x === z && w >= y) {
        while (w > y) {
          y++
          this.board[x][y].ship = newShip;
          newShip.coordinates.push([x, y]);
        }
      }
      else if(x===z && y> w) {
        while (y>=w) {
          y--
          this.board[x][y].ship = newShip;
          newShip.coordinates.push([x, y]);
        }
      }

      
    newShip.coordinates.forEach((item)=> {

      const [nx,ny] = item

      const newarray = hej(nx,ny).filter(([nz,nw])=> this.isWithinBounds(nz,nw))
      newarray.forEach(([nx,ny]) => {
        
        this.board[nx][ny].validCell=false
      })
    })
    
    } else {
      console.log("No path found");
    }

    /* function for making the cells bording ship invalid */
    function hej(x,y) {
    const bordingCells = [
     [x+1, y], 
     [x-1, y],
     [x,y+1],
     [x,y-1],
     [x+1,y+1],
     [x+1,y-1],
     [x-1, y+1],
     [x-1,y-1]
    ]
    return bordingCells
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
    return this.ships.every((item) => item.isSunk());
  }
}

class Player {
  constructor(name) {
    this.name = this.gameBoard = new gameBoard();
  }

  attack(playerBoard, [x, y]) {
    playerBoard.recieveAttack([x, y]);
  }
}

const thegame = new gameBoard();

thegame.placeTheShip(0,1, 2, "right")

thegame.placeTheShip(0)






console.log(thegame.board[1][0]);
console.log(thegame.board[0][1]);
console.log(thegame.board[1][1]);
console.log(thegame.board[6][3])
