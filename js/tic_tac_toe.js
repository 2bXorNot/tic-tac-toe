console.log('tic-tac-toe');

let player = 'player1';
let firstChoice = ['player11'];
let firstChoice1 = 'player11';
let captureFirstChoice;

let grid = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: ''
};

function validation() {
    
    if((grid[1] === 'player1' && grid[2] === 'player1' && grid[3] === 'player1') || (grid[4] === 'player1' && grid[5] === 'player1' && grid[6] === 'player1') || (grid[7] === 'player1' && grid[8] === 'player1' && grid[9] === 'player1') //horizontal
    || (grid[1] === 'player1' && grid[4] === 'player1' && grid[7] === 'player1') || (grid[2] === 'player1' && grid[5] === 'player1' && grid[8] === 'player1') || (grid[3] === 'player1' && grid[6] === 'player1' && grid[9] === 'player1') //vertical
    || (grid[1] === 'player1' && grid[5] === 'player1' && grid[9] === 'player1') || (grid[3] === 'player1' && grid[5] === 'player1' && grid[7] === 'player1')) { //diagonal
        console.log('player 1 wins');
    };
    if((grid[1] === 'player2' && grid[2] === 'player2' && grid[3] === 'player2') || (grid[4] === 'player2' && grid[5] === 'player2' && grid[6] === 'player2') || (grid[7] === 'player2' && grid[8] === 'player2' && grid[9] === 'player2') //horizontal
    || (grid[1] === 'player2' && grid[4] === 'player2' && grid[7] === 'player2') || (grid[2] === 'player2' && grid[5] === 'player2' && grid[8] === 'player2') || (grid[3] === 'player2' && grid[6] === 'player2' && grid[9] === 'player2') //vertical
    || (grid[1] === 'player2' && grid[5] === 'player2' && grid[9] === 'player2') || (grid[3] === 'player2' && grid[5] === 'player2' && grid[7] === 'player2')) {
        console.log('player 2 wins');
    };
};
console.log(grid);

let lever = 'off';
function gridAll(val, val2) {
    if(firstChoice1 === captureFirstChoice) {
        grid[val] = player;
        lever = 'on';
        console.log(`${player} chose ${val2}`); 
    };    
        if(grid[val] !== 'player1') {
            player = 'player2';
            if(player === 'player2' && lever === 'on') {
                grid[val] = 'player2';
                console.log(`${player} chose ${val2}`); 
                lever = 'off'
            }
            if(lever === 'off' && grid[val] !== 'player2') {
                player = 'player1';
                if(player === 'player1') {
                    grid[val] = 'player1';
                    console.log(`${player} chose ${val2}`); 
                    lever = 'on';                    
                };  
            };  
        };
        validation();
};
function gridOne() {
    captureFirstChoice = firstChoice.pop();
    gridAll(1, 'G1');
  
};
function gridTwo() {
    captureFirstChoice = firstChoice.pop();
    gridAll(2, 'G2');
};
function gridThree() {
    captureFirstChoice = firstChoice.pop();
    gridAll(3, 'G3');
};
function gridFour() {
    captureFirstChoice = firstChoice.pop();
    gridAll(4, 'G4');
};
function gridFive() {
    captureFirstChoice = firstChoice.pop();
    gridAll(5, 'G5');
};
function gridSix() {
    captureFirstChoice = firstChoice.pop();
    gridAll(6, 'G6');
};
function gridSeven() {
    captureFirstChoice = firstChoice.pop();
    gridAll(7, 'G7');
};
function gridEight() {
    captureFirstChoice = firstChoice.pop();
    gridAll(8, 'G8');
};
function gridNine() {
    captureFirstChoice = firstChoice.pop();
    gridAll(9, 'G9');
};

