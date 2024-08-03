import {ship} from "./index.js" 

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
  
  