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

        gameTry = '';
        for (let t = 1; t <= 2; t++) {
            gameTry += ` <i class="fas fa-hexagon"></i> `;
            };

        triesRemain ='';
        for (let n = 1; n <= 2; n++) {
            triesRemain = 1;
            };
            
        // print to html
        document.querySelector('#game_level').innerHTML = 1;
        document.querySelector('#maxNum').innerHTML = maxNumber;
        document.querySelector('#strikes').innerHTML = gameTry;
        document.querySelector('#triesRemain').innerHTML = triesRemain;

    }
};

preGame()

function startGame() {
    numberInp = document.getElementById('inputNumber').value;
    if (selectedNumber === +numberInp) {
        // alert('You win');
        $("#correctModal").modal();
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