const githubLink = document.querySelector("#github-link");
const githubLogo = document.querySelector("#github-logo");
githubLink.addEventListener("pointerenter", () => githubLogo.style.transform = "rotate(540deg)");
githubLink.addEventListener("pointerleave", () => githubLogo.style.transform = "rotate(0deg)");

const GameBoard = (() => {
    let _gameboardArray = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    const makeMove = (player, location) => {
        let row = location[0];
        let column = location[1];

        _gameboardArray[row][column] = player.getToken();
    };

    const checkBoard = () => {
        let rowCheck, columnCheck, diagCheck, winIndex, winner, transpose
        _gameboardArray.forEach((e, index) => e.forEach((value, jndex) => transpose[jndex][index] = value));
        _gameboardArray.forEach((e, index) => {
            if (e.reduce((previousValue, currentValue) => previousValue + currentValue) === 3){rowCheck = true; winIndex = index; winner = 1;} 
            else if (e.reduce((previousValue, currentValue) => previousValue + currentValue) === -3){rowCheck = true; winIndex = index; winner = -1;}
        });
        transpose.forEach((e, index) => {
            if (e.reduce((previousValue, currentValue) => previousValue + currentValue) === 3){columnCheck = true; winIndex = index; winner = 1;} 
            else if (e.reduce((previousValue, currentValue) => previousValue + currentValue) === -3){columnCheck = true; winIndex = index; winner = -1;}            
        });
        let diagSum = [
            _gameboardArray[0][0] + _gameboardArray[1][1] + _gameboardArray[2][2],
            _gameboardArray[2][0] + _gameboardArray[1][1] + _gameboardArray[0][2]
        ];
        diagSum.forEach((e, i) => {
            if (e === 3) {diagCheck = true; winIndex = i; winner = 1;}
        });
    };
        
    const gameState = () => {
        return _gameboardArray;
    };

    return {
        makeMove,
        checkBoard,
        gameState,
    };
})();