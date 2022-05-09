const GameBoard = (() => {
    const gameBoardContainer = document.getElementById('gameboard-container')
    let gameBoardArr = [];
    const gameBoard = () => {
        for (let i = 0; i < (9); i++){
            let gameGrid = document.createElement('div');
            gameBoardContainer.appendChild(gameGrid).id = 'gameGrid';
        };
    } 
    function getGameGrid (){
        let gameGridSelector = document.querySelectorAll('#gameGrid');
        gameGridSelector.forEach(placeXO)
    }
    function placeXO (gameGridSelector){
        gameGridSelector.addEventListener('click', () => {
            gameBoardArr.push('X')
            for (let i = 0; i < gameBoardArr.length; i++) {
                gameGridSelector.innerHTML = gameBoardArr[i];
            }
        })
    }   
    return {
        gameBoard,
        getGameGrid
    }
   
})();

const Player = (player) => {
    const getPlayer = () => player;
    
    
    return {
        getPlayer
    }
}
GameBoard.gameBoard();
GameBoard.getGameGrid();
