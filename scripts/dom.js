'use strict';

let playerChoice;
let jigSawChoice;
let gameResult;

const showChoice = document.getElementById('jsChoice');
const showPlayer = document.getElementById('player-choice');
const showResult =document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    playerChoice= e.target.id;
    showPlayer.innerText=playerChoice
    generateJsChoice();
    runGame ();
}))



function generateJsChoice() {
let randomJsChoice= Math.floor (Math.random()*3);
    switch (randomJsChoice)
    {
        case 0:
            jigSawChoice= 'Rock';
            break;
        case 1:
            jigSawChoice= 'Paper';
            break;
        case 2:
            jigSawChoice='Scissors';
    }
    showChoice.innerText=jigSawChoice;
}


function runGame (){
    if (jigSawChoice === playerChoice){
        gameResult = "This time it's a draw!"
    }
    if (jigSawChoice === 'Rock' && playerChoice=== 'Paper'){
        gameResult = "You won! Paper covers Rock"
    }
    if (jigSawChoice === 'Rock' && playerChoice=== 'Scissors'){
        gameResult = "You lost! Rock destroys Scissors"
    }
    if (jigSawChoice === 'Paper' && playerChoice=== 'Scissors'){
        gameResult = "You won! Scissors cut Paper"
    }
    if (jigSawChoice === 'Paper' && playerChoice=== 'Rock'){
        gameResult = "You lost! Paper covers Rock"
    }
    if (jigSawChoice === 'Scissors' && playerChoice=== 'Rock'){
        gameResult = "You won! Rock destroys Scissors"
    }
    if (jigSawChoice === 'Scissors' && playerChoice=== 'Paper'){
        gameResult = "You lost! Scissors cut Paper"
    }
    showResult.innerText= gameResult;
}