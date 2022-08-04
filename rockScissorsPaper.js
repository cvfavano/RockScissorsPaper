var computerChoice;
var playerChoice;

//Generate random number and assign to computer choice
function getComputerChoice()  {
    let rock;
    let scissors;
    let paper;

    let getNumber = Math.floor(Math.random() * 3) + 1;

    switch(getNumber) {
        case 1 :
            getNumber = 'rock';
            break
        case 2:
            getNumber = 'scissors';
            break;
        case 3:
            getNumber = 'paper';
            break;
    }

    return getNumber;
}


/*

if switch(GetNumber)
1 computer choice is rock
2 choice is paper
3 computer chose is scissors

Return computerChoice 

returns computer choice Rock Paper Scissors 

Function getUserChoice
use prompt() to get user choice
Check if rock scissors paper, case insensitive
    else reprompt for correct input


returns Rock paper Scissors

FunctionPlayRound(playerSelection, computerSelection){
compare choices
    if( possibilities for player 1 for a win)
         { player wins}
        increment winning point for player

    if (possibilities for comp to win)
        {comp wins}
        increment winning point for computer
    Else 
        tie

incrementRound		

increment scoreboard
returns String “win/lose, x beats y”
}
*/
function gamePlay(){
    for (let i = 0; i < 5; i++ ) {
        getComputerChoice();

    }
}


gamePlay();