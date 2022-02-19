const container = document.getElementById("container");

const GameBoard = (() => {

    const gameBoard = ["x", "o", "o", "x", "x", "o", "x", "x", "o"];

    const makeBoard = () => {
        gameBoard.forEach((e) => {
           const div = document.createElement("div");
           div.classList.add("test");
           container.appendChild(div);
           div.innerText = e;
        });
    }

    return {makeBoard};

})();

GameBoard.makeBoard();

const test = document.querySelectorAll(".test");

const Player = (name, move) => {
    
    const getName  = () => name;
    const getMove = () => move;

    const play = () => {
        test.forEach( (e) => {
            e.onclick = () =>{
                e.innerText = move;
            }
        })
    }

    return {play, getName, getMove}
};

const player1 = Player("player1", "x");
player1.play();
