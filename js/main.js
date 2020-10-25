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
    document.querySelector('#game-level').innerHTML = 1; 
    document.querySelector('#maxNum').innerHTML = maxNumber;
    document.querySelector('#numberSelected').innerHTML = selectedNumber;
    
    gameTry = '';
    for (let t = 1; t <= 1; t++) {
        gameTry += `<img src="/img/Icon_feather-hexagon_s.png" alt="tries hexa" style="margin: 0 .5em">`;
        
        };
    
    document.querySelector('#strikes').innerHTML = gameTry; 


    
} else if (gameLevel === 2) {
    selectedNumber = Math.floor(Math.random() * 20 + 1);
    numberInput = '';
    
    if (selectedNumber === +numberInput) {
        winner = "you WIN!";
    } else {
        winner = "you Lose!";
    };

    let gameReward = .50;   
    let maxNumber = 20;

    // print to html
    document.querySelector('#game-level').innerHTML = 2;
    document.querySelector('#maxNum').innerHTML = maxNumber;
    document.querySelector('#numberSelected').innerHTML = selectedNumber;

    gameTry = '';
    for (let t = 1; t <= 2; t++) {
        gameTry += `<img src="/img/Icon_feather-hexagon_s.png" alt="tries hexa" style="margin: 0 .5em">`;
        
        };
    
    document.querySelector('#strikes').innerHTML = gameTry;



    
} else if (gameLevel === 3) {
    selectedNumber = Math.floor(Math.random() * 30 + 1);
    numberInput = '';
    winner = '';
    
    if (selectedNumber === +numberInput) {
        winner = "you WIN!";
    } else {
        winner = "you Lose!";
    };

    gameReward = .75; 
    maxNumber = 30;

    // print to html
    document.querySelector('#game-level').innerHTML = 3;
    document.querySelector('#maxNum').innerHTML = maxNumber;
    document.querySelector('#numberSelected').innerHTML = selectedNumber;

    gameTry = '';
    for (let t = 1; t <= 3; t++) {
        gameTry += `<img src="/img/Icon_feather-hexagon_s.png" alt="tries hexa" style="margin: 0 .5em">`;
        
        };
    
    document.querySelector('#strikes').innerHTML = gameTry;




    
} else if (gameLevel === 4) {
    selectedNumber = Math.floor(Math.random() * 40 + 1);
    numberInput = '';
    winner = '';
    
    if (selectedNumber === +numberInput) {
        winner = "you WIN!";
    } else {
        winner = "you Lose!";
    };

    gameReward = 1; 
    maxNumber = 50;

    // print to html
    document.querySelector('#game-level').innerHTML = 4;
    document.querySelector('#maxNum').innerHTML = maxNumber;
    document.querySelector('#numberSelected').innerHTML = selectedNumber;

    gameTry = '';
    for (let t = 1; t <= 4; t++) {
        gameTry += `<img src="/img/Icon_feather-hexagon_s.png" alt="tries hexa" style="margin: 0 .5em">`;
        
        };
    
    document.querySelector('#strikes').innerHTML = gameTry;



    
} else if (gameLevel === 5) {
    selectedNumber = Math.floor(Math.random() * 50 + 1);
    numberInput = '';
    winner = '';
    
    if (selectedNumber === +numberInput) {
        winner = "you WIN!";
    } else {
        winner = "you Lose!";
    };

    gameReward = 5; 
    maxNumber = 50;
   
    // print to html
    document.querySelector('#game-level').innerHTML = 5;
    document.querySelector('#maxNum').innerHTML = maxNumber;
    document.querySelector('#numberSelected').innerHTML = selectedNumber;
   
    gameTry = '';
    for (let t = 1; t <= 5; t++) {
        gameTry += `<img src="/img/Icon_feather-hexagon_s.png" alt="tries hexa" style="margin: 0 .5em">`;
        
        };
    
    document.querySelector('#strikes').innerHTML = gameTry;



};