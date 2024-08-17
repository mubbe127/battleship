import {gameBoard, ship} from "./module.js" 

describe('matching cities to foods', () => {
    let theship;
    beforeEach(() => {
      theship =  new ship(4);
      theship.incrementHit()
      theship.incrementHit()
      theship.incrementHit()
      theship.incrementHit()
    });
  
    test("is the ship sunk", () => {
      expect(theship.isSunk()).toBe(true);
    });

    test("is the ship hit", () => {
      expect(theship.getHitCount()).toBe(4)
    })

    test("ship length", ()=> {

      expect(theship.getLength()).toBe(4)

    })
  
  });
  
  describe('test the gameboard class', () => {
    let gameboard;
    beforeEach(()=>{

      gameboard = new gameBoard("playerOne")
    })

    test("test possiblemoves", ()=>{
      console.log(gameboard)
      expect(gameboard.possibleMoves(1,5,4)).toEqual([[4,5],0,[1,8],[1,2]])
      expect(gameboard.possibleMoves(3,1,4)).toEqual([[6,1],[0,1],[3,4],0])
    })

    test("")

  })