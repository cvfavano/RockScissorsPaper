
var playerChoice;


var computerChoice = () =>  {
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
    console.log(getNumber);
    return getNumber;
}
function getReady(){
    console.log(computerChoice);}

    getReady();

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

gamePlay(){
if rounds < 5
    run comp Choice
    run comp user choice
    playRound
}

*/