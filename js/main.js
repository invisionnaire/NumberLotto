let gameLevel = Math.floor(Math.random() * 5 + 1);

if (gameLevel === 1) {
    selectedNumber = Math.floor(Math.random() * 10 + 1);
    numberInput = '';
    winner = '';
    
        if (selectedNumber === +numberInput) {
            winner = "you WIN!";
        } else {
            winner = "you Lose!";
        };

    gameReward = .25; 
    maxNumber = 10;

    // print to html
    document.querySelector('#game_level').innerHTML = 1; 
    document.querySelector('#maxNum').innerHTML = maxNumber;
    document.querySelector('#numberSelected').innerHTML = selectedNumber;
    
    gameTry = '';
    for (let t = 1; t <= 2; t++) {
        gameTry += ` <i class="fas fa-hexagon"></i> `;
        
        };
    
    document.querySelector('#strikes').innerHTML = gameTry; 


    
} else if (gameLevel === 2) {
    selectedNumber = Math.floor(Math.random() * 30 + 1);
    numberInput = '';
    
    if (selectedNumber === +numberInput) {
        winner = "you WIN!";
    } else {
        winner = "you Lose!";
    };

    let gameReward = .50;   
    let maxNumber = 30;

    // print to html
    document.querySelector('#game_level').innerHTML = 2;
    document.querySelector('#maxNum').innerHTML = maxNumber;
    document.querySelector('#numberSelected').innerHTML = selectedNumber;

    gameTry = '';
    for (let t = 1; t <= 2; t++) {
        gameTry += ` <i class="fas fa-hexagon"></i> `;
        
        };
    
    document.querySelector('#strikes').innerHTML = gameTry;



    
} else if (gameLevel === 3) {
    selectedNumber = Math.floor(Math.random() * 60 + 1);
    numberInput = '';
    winner = '';
    
    if (selectedNumber === +numberInput) {
        winner = "you WIN!";
    } else {
        winner = "you Lose!";
    };

    gameReward = .75; 
    maxNumber = 60;

    // print to html
    document.querySelector('#game_level').innerHTML = 3;
    document.querySelector('#maxNum').innerHTML = maxNumber;
    document.querySelector('#numberSelected').innerHTML = selectedNumber;

    gameTry = '';
    for (let t = 1; t <= 2; t++) {
        gameTry += ` <i class="fas fa-hexagon"></i> `;
        
        };
    
    document.querySelector('#strikes').innerHTML = gameTry;




    
} else if (gameLevel === 4) {
    selectedNumber = Math.floor(Math.random() * 80 + 1);
    numberInput = '';
    winner = '';
    
    if (selectedNumber === +numberInput) {
        winner = "you WIN!";
    } else {
        winner = "you Lose!";
    };

    gameReward = 1; 
    maxNumber = 80;

    // print to html
    document.querySelector('#game_level').innerHTML = 4;
    document.querySelector('#maxNum').innerHTML = maxNumber;
    document.querySelector('#numberSelected').innerHTML = selectedNumber;

    gameTry = '';
    for (let t = 1; t <= 3; t++) {
        gameTry += ` <i class="fas fa-hexagon"></i> `;
        
        };
    
    document.querySelector('#strikes').innerHTML = gameTry;



    
} else if (gameLevel === 5) {
    selectedNumber = Math.floor(Math.random() * 100 + 1);
    numberInput = '';
    winner = '';
    
    if (selectedNumber === +numberInput) {
        winner = "you WIN!";
    } else {
        winner = "you Lose!";
    };

    gameReward = 5; 
    maxNumber = 100;
   
    // print to html
    document.querySelector('#game_level').innerHTML = 5;
    document.querySelector('#maxNum').innerHTML = maxNumber;
    document.querySelector('#numberSelected').innerHTML = selectedNumber;
   
    gameTry = '';
    for (let t = 1; t <= 4; t++) {
        gameTry += ` <i class="fas fa-hexagon"></i> `;
        
        };
    
    document.querySelector('#strikes').innerHTML = gameTry;



};