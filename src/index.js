import { ship, cell, gameBoard, Player } from "./module.js";
import "./style.css";
import "./cross-square-svgrepo-com.svg";
import "./dot-svgrepo-com.svg";

const playerOne = new Player("playerOne");
const playerTwo = new Player("playerTwo");
let currentPlayer = playerOne.name;
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
playerTwo.gameBoard.placeTheShip(0,0,3,"right")

function makeBoard(player) {
  const playerGameBoard = player.gameBoard;
  const gameBoardDiv = document.createElement("div");
  const gameBoardDiv2 = document.createElement("div");
  gameBoardDiv.classList.add("gameboard", `${player.name}`, "game");
  gameBoardDiv2.classList.add("gameboard", `${player.name}`, "display")
 
  console.log(player.name)

  if (player.name==="playerOne") {
    gameBoardDiv.classList.add('inactive')
  }
  console.log(gameBoardDiv.classList)
  if(playerGameBoard.player==="playerOne")  {
  container.appendChild(gameBoardDiv)
  container2.appendChild(gameBoardDiv2)
}
else {
  container.appendChild(gameBoardDiv2)
  container2.appendChild(gameBoardDiv)

}
  
  let storeDomBoard1 = [];
  let storeDomBoard2 =[]
  for (let i = 0; i < playerGameBoard.board.length; i++) {
    let array1 = [];
    let array2 = []
    storeDomBoard1.push(array1);
    storeDomBoard2.push(array2)
    for (let j = 0; j < playerGameBoard.board[i].length; j++) {
      const gameCell = document.createElement("div");
      const gameCell2 = document.createElement("div");
      array1.push(gameCell);
      array2.push(gameCell2)
      gameBoardDiv.appendChild(gameCell);
      gameBoardDiv2.appendChild(gameCell2)
      gameCell.classList.add("gamecell");
      gameCell2.classList.add("gamecell", "2")
      if(playerGameBoard.board[i][j].ship){
        gameCell2.classList.add("ship")
      }
      gameCell.addEventListener(
        "click",
        function handleClick() {
          if (player === playerOne) {
            playerTwo.attack(playerGameBoard, [i, j]);
          }
          if (player === playerTwo) {
            playerOne.attack(playerGameBoard, [i, j]);
          }
          console.log(gameCell);
          console.log(playerGameBoard.board[i][j]);
          renderBoard(playerGameBoard, i, j, gameCell, gameCell2, storeDomBoard1, storeDomBoard2);
        },
        { once: true },
      );
    }
  }

  /*render ships on gameboard  2*/


}
makeBoard(playerOne)
makeBoard(playerTwo);


function renderBoard(playerGameBoard, i, j, gameCell, gameCell2, storeDomBoard1, storeDomBoard2) {
  if (
    playerGameBoard.board[i][j].ship === null &&
    playerGameBoard.board[i][j].miss
  ) {
    console.log("hej");
    gameCell.classList.add("missed");
    gameCell2.classList.add("missed");
  }
  if (playerGameBoard.board[i][j].ship && playerGameBoard.board[i][j].beenHit && !playerGameBoard.board[i][j].ship.isSunk()) {
    gameCell.classList.add("hitShip");
    gameCell2.classList.add("hitShip");
    console.log("test")
    return
  }
  if (
    playerGameBoard.board[i][j].ship &&
    playerGameBoard.board[i][j].ship.isSunk()
  ) {
    playerGameBoard.board[i][j].ship.coordinates.forEach(([nx, ny]) => {
      storeDomBoard1[nx][ny].classList.add("sunk");
      storeDomBoard2[nx][ny].classList.add("sunk");
      gameCell.classList.add("hitShip");
      gameCell2.classList.add("hitShip");
    });
    playerGameBoard.board[i][j].ship.borders.forEach(([nx, ny]) => {
      if (!storeDomBoard1[nx][ny].classList.contains("missed"))
        storeDomBoard1[nx][ny].classList.add("showBorder");
        storeDomBoard2[nx][ny].classList.add("showBorder");
    });
    
  if(playerGameBoard.allShipSunk()) {

    if(playerGameBoard.name==="playerOne") {
      console.log("playerTwo Won")
    }
    else console.log("playerOne Won")
  }
    return
  }

  /* check if game ended */

  /* switch player */
  currentPlayer =
    currentPlayer === playerOne.name ? playerTwo.name : playerOne.name;
  const playerOneGameBoard = document.querySelector(`.${playerOne.name}.game`);
  const playerTwoGameBoard = document.querySelector(`.${playerTwo.name}.game`);
  console.log(playerTwoGameBoard)
  console.log(currentPlayer)

  if (currentPlayer === playerOne.name) {
    playerOneGameBoard.classList.add("inactive");
    playerTwoGameBoard.classList.remove("inactive");

  }

  if (currentPlayer === playerTwo.name) {
    playerOneGameBoard.classList.remove("inactive");
    playerTwoGameBoard.classList.add("inactive");
  }
}
