//  Global functions

function gameProperties (){
    numberInput = '';
    winner = '';
    gameReward = 1;
    maxNumber = 10;
    gametries ='';
};


function preGame() {

    // let gameLevel = Math.floor(Math.random() * 5 + 1);
    let gameLevel = 1; // dev var, remove or comment when done.

    if (gameLevel === 1) {
        selectedNumber = Math.floor(Math.random() * 10 + 1);
        gameProperties()

        

        // print to html
        document.querySelector('#game_level').innerHTML = 1;
        document.querySelector('#maxNum').innerHTML = maxNumber;
    }
};


function startGame() {

    numberInp = document.getElementById('inputNumber').value;

    if (selectedNumber === +numberInp) {
        // alert('You win');
        $("#correctModal").modal()

    } else {
        // alert('You Lose');
        $("#wrongModal").modal()
    };

    document.querySelector('#numberSelected').innerHTML = selectedNumber;
    document.querySelector('#selectedNum').innerHTML = selectedNumber;



};

function reload1() {
    location.reload();
};





//  Something goes here

preGame()