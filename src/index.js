import { ship, cell, gameBoard, Player } from "./module.js";
import "./style.css";
import "./cross-square-svgrepo-com.svg";
import "./dot-svgrepo-com.svg";

let playerOne;
let playerTwo;
let currentPlayer;
const playerselect = document.querySelector("#player-select");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
container2.classList.add("show")


playerselect.addEventListener("input", (event) => {
  if (event.currentTarget.value === "local") {
    const playercontainer = document.querySelector(".playercontainer");
    const playerOneContainer = document.createElement("div");
    playerOneContainer.classList.add("playercontainerOne");
    const playerTwoContainer = document.createElement("div");
    playerTwoContainer.classList.add("playercontaineTwo");
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("startgameButton");

    playercontainer.appendChild(playerOneContainer);
    playercontainer.appendChild(playerTwoContainer);
    playercontainer.appendChild(buttonContainer);

    const playerOneInputName = document.createElement("input");
    playerOneInputName.setAttribute("id", "playerOneName");
    const playerOnelabel = document.createElement("label");
    playerOnelabel.setAttribute("for", "playerOneName");
    playerOneInputName.setAttribute("placeholder", "Name");
    playerOnelabel.textContent = "Player One:";

    const playerTwoInputName = document.createElement("input");
    playerTwoInputName.setAttribute("id", "playerTwoName");
    const playerTwolabel = document.createElement("label");
    playerTwoInputName.setAttribute("placeholder", "Name");
    playerTwolabel.textContent = "Player Two:";

    const buttonStartGame = document.createElement("button");
    buttonStartGame.setAttribute("id", "startGameButton");
    buttonStartGame.textContent = "Start game";
    buttonStartGame.addEventListener("click", () => {
      playerOne = new Player(playerOneInputName.value);
      console.log(playerOne)
      playerOne.gameBoard.randomShipPlacement()
      playerTwo = new Player(playerTwoInputName.value);
      playerTwo.gameBoard.randomShipPlacement()
      console.log(playerTwo)
      currentPlayer = playerOneInputName.value
      makeBoard(playerOne)
      makeBoard(playerTwo)
      playercontainer.remove()
      
    });

    playerOneContainer.appendChild(playerOnelabel);
    playerOneContainer.appendChild(playerOneInputName);
    playerTwoContainer.appendChild(playerTwolabel);
    playerTwoContainer.appendChild(playerTwoInputName);
    buttonContainer.appendChild(buttonStartGame);
  }
});

function makeBoard(player) {
  
  const playerGameBoard = player.gameBoard;
  const playerHeaderOne = document.createElement('h3')
  const playerHeaderTwo = document.createElement('h3')
  playerHeaderOne.classList.add("playerheader", `${playerOne.name}`)
  playerHeaderTwo.classList.add("playerheader", `${playerTwo.name}`)
  playerHeaderOne.textContent=`${playerOne.name} turn`
  playerHeaderTwo.textContent=`${playerTwo.name} turn`
  const gridTextOne = document.createElement('h5')
  const gridTextTwo = document.createElement('h5')
  gridTextOne.classList.add("gridtextone", "gridheader")
  gridTextTwo.classList.add("gridtexttwo", "gridheader")
  gridTextOne.textContent="Your grid"
  gridTextTwo.textContent="Opponent's grid"
  const gameBoardDiv = document.createElement("div");
  const gameBoardDiv2 = document.createElement("div");
  gameBoardDiv.classList.add("gameboard", `${player.name}`, "game");
  gameBoardDiv2.classList.add("gameboard", `${player.name}`, "display");

  console.log(player.name);

  if (player.name === playerOne.name) {
    gameBoardDiv.classList.add("inactive");
  }
  if (playerGameBoard.player === playerOne.name) {
    container.appendChild(gameBoardDiv);
    container2.appendChild(gameBoardDiv2);
    container2.appendChild(playerHeaderOne);
    container2.appendChild(gridTextOne)
    container2.appendChild(gridTextTwo)
  } else {
    container.appendChild(gameBoardDiv2);
    container.appendChild(playerHeaderTwo)
    container2.appendChild(gameBoardDiv);
    container.appendChild(gridTextOne)
    container.appendChild(gridTextTwo)
  }

  let storeDomBoard1 = [];
  let storeDomBoard2 = [];
  for (let i = 0; i < playerGameBoard.board.length; i++) {
    let array1 = [];
    let array2 = [];
    storeDomBoard1.push(array1);
    storeDomBoard2.push(array2);
    for (let j = 0; j < playerGameBoard.board[i].length; j++) {
      const gameCell = document.createElement("div");
      const gameCell2 = document.createElement("div");
      array1.push(gameCell);
      array2.push(gameCell2);
      gameBoardDiv.appendChild(gameCell);
      gameBoardDiv2.appendChild(gameCell2);
      gameCell.classList.add("gamecell");
      gameCell2.classList.add("gamecell", "2");
      if (playerGameBoard.board[i][j].ship) {
        gameCell2.classList.add("ship");
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

          renderBoard(
            playerGameBoard,
            i,
            j,
            gameCell,
            gameCell2,
            storeDomBoard1,
            storeDomBoard2,
          );
        },
        { once: true },
      );
    }
  }

  /*render ships on gameboard  2*/
}

function renderBoard(
  playerGameBoard,
  i,
  j,
  gameCell,
  gameCell2,
  storeDomBoard1,
  storeDomBoard2,
) {
  

  if (
    playerGameBoard.board[i][j].ship === null &&
    playerGameBoard.board[i][j].miss
  ) {
    console.log("hej");
    gameCell.classList.add("missed");
    gameCell2.classList.add("missed");
  }
  if (
    playerGameBoard.board[i][j].ship &&
    playerGameBoard.board[i][j].beenHit &&
    !playerGameBoard.board[i][j].ship.isSunk()
  ) {
    
    gameCell.classList.add("hitShip");
    gameCell2.classList.add("hitShip");
    console.log("test");
    return;
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

    if (playerGameBoard.allShipSunk()) {
     
      const gridheader = document.querySelectorAll('.gridheader')
      const winnerHeader = document.createElement('h3')
      winnerHeader.classList.add("winnerHeader")
      gridheader.forEach(item=>item.remove())
      const gameboards = document.querySelectorAll('.gameboard')
      gameboards.forEach(item => item.classList.add("gameOver"))
      container.classList.add("show")
      container2.classList.add("show")
        const playerheaderTwo = document.querySelector(`.playerheader.${playerTwo.name}`)
        playerheaderTwo.textContent=`${playerTwo.name}`
        const playerheaderOne = document.querySelector(`.playerheader.${playerOne.name}`)
        playerheaderTwo.textContent=`${playerTwo.name}`
        playerheaderOne.textContent=`${playerOne.name}`
      if (playerGameBoard.player === playerOne.name) {
    
        winnerHeader.textContent=`${playerTwo.name} wins!`
        const mainHeader = document.querySelector('.mainHeader')
        mainHeader.appendChild(winnerHeader)

      } else {
        winnerHeader.textContent=`${playerOne.name} wins!`
        const mainHeader = document.querySelector('.mainHeader')
        mainHeader.appendChild(winnerHeader)
      }
    }
    return;
  }

  /* check if game ended */

  /* switch player */
 
  currentPlayer =
    currentPlayer === playerOne.name ? playerTwo.name : playerOne.name;
  const playerOneGameBoard = document.querySelector(`.${playerOne.name}.game`);
  const playerTwoGameBoard = document.querySelector(`.${playerTwo.name}.game`);
  console.log(playerTwoGameBoard);
  console.log(currentPlayer);

  if (currentPlayer === playerOne.name) {
    playerOneGameBoard.classList.add("inactive");
    playerTwoGameBoard.classList.remove("inactive");
  }

  if (currentPlayer === playerTwo.name) {
    playerOneGameBoard.classList.remove("inactive");
    playerTwoGameBoard.classList.add("inactive");
  }

  
  const continueButton = document.querySelector(".continueButton")
  const continueHeader = document.querySelector('.continueHeader')
  continueHeader.textContent=`${currentPlayer}'s turn`
  continueButton.classList.add("show")
  container.classList.remove("show")
  container2.classList.remove("show")
  continueButton.addEventListener('click', (event)=> {

    event.currentTarget.classList.remove("show")
    if(currentPlayer===playerOne.name) {
      container2.classList.add("show")
    }
    else container.classList.add("show")
  })


  
}
