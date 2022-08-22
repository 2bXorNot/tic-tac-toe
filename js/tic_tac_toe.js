console.log('tic-tac-toe');


let player = '';
let firstChoice = ['first'];
console.log(firstChoice);
let captureFirstChoice;
let firstChoice1 = 'first';
let count = 0
console.log(count);

let quadrants = {
    1: '',
    2: ''
};
console.log(quadrants);

let keys
for(keys in quadrants) {
    console.log(keys);
};

//let val
function quadrantFunc(val) {    
    return val;
};

/*
function sendToQuadrant(val, val1) {
    quadrants[val] = 'b'
};*/

let foo;
function quadrantOne(val) {
    captureFirstChoice = firstChoice.pop();
    console.log(firstChoice);
    if(firstChoice1 === captureFirstChoice) {
        quadrants[1] = 'player1';
        console.log(quadrants[1] !== 'player1');
        if(quadrants[1] !== 'player1') {
                player = 'player2';
                if(player === 'player2') {
                quadrants[1] = 'player2';
                };
        //quadrants[1] = val;
            };
    /* else {
        quadrants[1] = 'player2'
    }*/
        };
};
function quadrantTwo() {
    captureFirstChoice = firstChoice.pop();
    console.log(firstChoice);
    if(firstChoice1 === captureFirstChoice) {
        quadrants[1] = 'player1';
        console.log(quadrants[1] !== 'player1') 
    }
    if(quadrants[1] === 'player1') {
        player = 'player2';
        if(player === 'player2') {
        quadrants[2] = 'player2';
        };

    };
    
};



/*
function countFunc() {
    
    if(count === 1) {
        let v
        v = firstChoice.pop();
        quadrantOne(v)
    } 

    
    if(count === 2) {
        //sendToQuadrant(playerTwo);
    } 
    if(count === 3) {
        count = 1;
    } 
    console.log(count);
};*/

/*
player = 'player1';
    count++
    //countFunc();
    if(count === 1) {
        quadrants[1] = player;
    }
    if(count === 2) {
        quadrants[1] = player ;
    }
    if(count === 3) {
        count = 1;
    } 
    console.log(count);
*/


const box = {
    1:'a',
    2:'a',
    3:'a'
};

let key
for(key in box) {
    /*
    if(box[key]) {
        console.log('ok');
    }; */
    console.log(box[key]);
};



if(box[1] === 'a', box[2] === 'a', box[3] === 'b') {
    console.log('Yes');
}

//console.log(box.hasOwnProperty(1))

/*
function quadrantTwo() {
    captureFirstChoice = firstChoice.pop();
    console.log(firstChoice);
    if(firstChoice1 === captureFirstChoice) {
        quadrants[1] = 'player1';
    //if(quadrants[1].hasOwnProperty() ===)    
    } else if(firstChoice1 !== captureFirstChoice) {
        player = 'player2';
        if(player === 'player2') {
            quadrants[1] = 'player2';
        };
    };    
    //countFunc();
    //sendToQuadrant(2)
};
*/









