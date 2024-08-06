import { ship, cell, gameBoard, Player } from "./module.js";
import "./style.css";
import "./cross-square-svgrepo-com.svg"
import "./dot-svgrepo-com.svg"

const playerOne = new Player("playerOne");
const playerOneGameBoard = playerOne.gameBoard;
const playerTwo = new Player("playerTwo")
const playerTwoGameBoard = playerTwo.gameBoard
console.log(playerOneGameBoard);

const container = document.querySelector(".container");

function makeBoard() {
  const gameBoardDiv = document.createElement("div");
  gameBoardDiv.setAttribute('class', "gameboard")
  container.appendChild(gameBoardDiv);

  for (let i = 0; i < playerOneGameBoard.board.length; i++) {
    for (let j = 0; j < playerOneGameBoard.board[i].length; j++) {
      const gameCell = document.createElement("div");
      gameBoardDiv.appendChild(gameCell);
      gameCell.setAttribute("class", "gamecell");
      gameCell.addEventListener('click', () => {
        playerOne.attack(playerTwoGameBoard,[i,j])

        if(playerTwoGameBoard.board[i][j].ship === null && playerTwoGameBoard.board[i][j].miss){
            console.log("hej")
            gameCell.classList.add('missed')
        }
        if(playerTwoGameBoard.board[i][j].ship && playerTwoGameBoard.board[i][j].beenhit) {
            
        }
    })
    }
  }
}

makeBoard();
makeBoard()

