const container = document.getElementById("container");

const GameBoard = (() => {

    const gameBoard = ["", "", "", "", "", "", "", "", ""];

    const makeBoard = () => {
        gameBoard.forEach((e) => {
           const div = document.createElement("div");
           div.classList.add("square");
           container.appendChild(div);
           div.innerText = e;
        });
    }

    return {makeBoard};

})();

GameBoard.makeBoard();

const square = document.querySelectorAll(".square");

const Player = (name, move) => {
    
    const getName  = () => name;
    const getMove = () => move;
    let turn = true;
    const play = (adversary) => {
        square.forEach( (e) => {
            e.onclick = () =>{
                if (e.innerText === "") {
                    if (turn) {
                        e.innerText = move;
                        turn = false;
                    }
                    else{
                        e.innerText = adversary.getMove();
                        turn = true;
                    }
                }
            }
        })
    }

    return {play, getName, getMove}
    
};

const player1 = Player("player1", 'x');
const player2 = Player("player2", 'o');
player1.play(player2);
