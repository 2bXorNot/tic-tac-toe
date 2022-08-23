console.log('tic-tac-toe');

let player = '';
let firstChoice = ['player11'];
console.log(firstChoice);
let firstChoice1 = 'player11';
let count = 0
console.log(count);

let quadrants = {
    1: '',
    2: '',
    3: '',
    4: ''
};
console.log(quadrants);

let lever = 'off';
function quadrantOne() {
    let captureFirstChoice;
    captureFirstChoice = firstChoice.pop();

    console.log(firstChoice);
    if(firstChoice1 === captureFirstChoice) {
        quadrants[1] = 'player1';
        lever = 'on'; 
    };    
        if(quadrants[1] !== 'player1') {
            player = 'player2';
            if(player === 'player2' && lever === 'on') {
                quadrants[1] = 'player2';
                lever = 'off'
            }
            if(lever === 'off' && quadrants[1] !== 'player2') {
                player = 'player1';
                if(player === 'player1') {
                    quadrants[1] = 'player1';
                    lever = 'on';
                };
            };

        };
};
function quadrantTwo() {
    let captureFirstChoice;
    captureFirstChoice = firstChoice.pop();
    console.log(firstChoice);
    if(firstChoice1 === captureFirstChoice) {
        quadrants[2] = 'player1';
        lever = 'on'; 
    };    
        if(quadrants[2] !== 'player1') {
            
            player = 'player2';
            if(player === 'player2' && lever === 'on') {
                quadrants[2] = 'player2';
                lever = 'off'
            }
            if(lever === 'off' && quadrants[2] !== 'player2' ) {
                player = 'player1';
                if(player === 'player1') {
                    quadrants[2] = 'player1';
                    lever = 'on';
                };
            };

        }; 
};
function quadrantThree() {
    captureFirstChoice = firstChoice.pop();
    console.log(firstChoice);
    if(firstChoice1 === captureFirstChoice) {
        quadrants[3] = 'player1'; 
        lever = 'on';
    };    
        if(quadrants[3] !== 'player1') {
            player = 'player2';
            
            if(player === 'player2' && lever === 'on') {
                quadrants[3] = 'player2';
                lever = 'off'
            }
            if(lever === 'off' && quadrants[3] !== 'player2') {
                player = 'player1';
                if(player === 'player1') {
                    quadrants[3] = 'player1';
                    lever = 'on';
                };
            };
        }; 
};
function quadrantFour() {
    captureFirstChoice = firstChoice.pop();
    console.log(firstChoice);
    if(firstChoice1 === captureFirstChoice) {
        quadrants[4] = 'player1'; 
        lever = 'on';
    };    
        if(quadrants[4] !== 'player1') {
            player = 'player2';
            
            if(player === 'player2' && lever === 'on') {
                quadrants[4] = 'player2';
                lever = 'off'
            }
            if(lever === 'off' && quadrants[4] !== 'player2') {
                player = 'player1';
                if(player === 'player1') {
                    quadrants[4] = 'player1';
                    lever = 'on';
                };
            };

        }; 
};












