console.log('tic-tac-toe');

let player = 'player1';
let firstChoice = ['player11'];
let firstChoice1 = 'player11';
let captureFirstChoice;

let quadrants = {
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

function validation(val) {
    //console.log(val);
    if((quadrants[1] === 'player1' && quadrants[2] === 'player1' && quadrants[3] === 'player1') || (quadrants[4] === 'player1' && quadrants[5] === 'player1' && quadrants[6] === 'player1') || (quadrants[7] === 'player1' && quadrants[8] === 'player1' && quadrants[9] === 'player1') //horizontal
    || (quadrants[1] === 'player1' && quadrants[4] === 'player1' && quadrants[7] === 'player1') || (quadrants[2] === 'player1' && quadrants[5] === 'player1' && quadrants[8] === 'player1') || (quadrants[3] === 'player1' && quadrants[6] === 'player1' && quadrants[9] === 'player1') //vertical
    || (quadrants[1] === 'player1' && quadrants[5] === 'player1' && quadrants[9] === 'player1') || (quadrants[3] === 'player1' && quadrants[5] === 'player1' && quadrants[7] === 'player1')) { //diagonal
        console.log('player 1 wins');
    };
    if((quadrants[1] === 'player2' && quadrants[2] === 'player2' && quadrants[3] === 'player2') || (quadrants[4] === 'player2' && quadrants[5] === 'player2' && quadrants[6] === 'player2') || (quadrants[7] === 'player2' && quadrants[8] === 'player2' && quadrants[9] === 'player2') //horizontal
    || (quadrants[1] === 'player2' && quadrants[4] === 'player2' && quadrants[7] === 'player2') || (quadrants[2] === 'player2' && quadrants[5] === 'player2' && quadrants[8] === 'player2') || (quadrants[3] === 'player2' && quadrants[6] === 'player2' && quadrants[9] === 'player2') //vertical
    || (quadrants[1] === 'player2' && quadrants[5] === 'player2' && quadrants[9] === 'player2') || (quadrants[3] === 'player2' && quadrants[5] === 'player2' && quadrants[7] === 'player2')) {
        console.log('player 2 wins');
    };
};
console.log(quadrants);

let lever = 'off';
function quadrantsAll(val) {
    if(firstChoice1 === captureFirstChoice) {
        quadrants[val] = player;
        lever = 'on'; 
    };    
        if(quadrants[val] !== 'player1') {
            player = 'player2';
            if(player === 'player2' && lever === 'on') {
                quadrants[val] = 'player2';
                lever = 'off'
            }
            if(lever === 'off' && quadrants[val] !== 'player2') {
                player = 'player1';
                if(player === 'player1') {
                    quadrants[val] = 'player1';
                    lever = 'on';                    
                };  
            };  
        };
        validation();
};
function quadrantOne() {
    captureFirstChoice = firstChoice.pop();
    quadrantsAll(1);
};
function quadrantTwo() {
    captureFirstChoice = firstChoice.pop();
    quadrantsAll(2);
};
function quadrantThree() {
    captureFirstChoice = firstChoice.pop();
    quadrantsAll(3);
};
function quadrantFour() {
    captureFirstChoice = firstChoice.pop();
    quadrantsAll(4);
};
function quadrantFive() {
    captureFirstChoice = firstChoice.pop();
    quadrantsAll(5);
};
function quadrantSix() {
    captureFirstChoice = firstChoice.pop();
    quadrantsAll(6);
};
function quadrantSeven() {
    captureFirstChoice = firstChoice.pop();
    quadrantsAll(7);
};
function quadrantEight() {
    captureFirstChoice = firstChoice.pop();
    quadrantsAll(8);
};
function quadrantNine() {
    captureFirstChoice = firstChoice.pop();
    quadrantsAll(9);
};












