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
    console.log('Computer picks '  + getNumber);
    return getNumber;
}

//prompt user for choice
function getUserChoice(question){
    var keyEntry = prompt(question);
    var entry = checkUserSelection(keyEntry);

    console.log(`User picks ${entry}`);
    return entry;
}

//check if user used whitespace, emptry string, or incorrect word
function checkUserSelection(entry) {
    let stringEntry = entry.toLowerCase().trim(); 
    switch (stringEntry) {
        case 'rock':
         return 'rock';
         break;

        case 'paper':
            return 'paper';
            break;

        case 'scissors':
            return 'scissors';
            break;

        case '': 
            return getUserChoice('Please reenter choice with rock, scissors or paper only');
            break;

        default:
            return getUserChoice('Please reenter choice with rock, scissors or paper only');

    }


}

/*

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
    var round = 0;
    for (let i = 0; i < 5; i++ ) {
        console.log(`Round: ${++round}`);
        getComputerChoice();
        getUserChoice('Rock, Scissors, Paper?');
        console.log("=========================" ) 
        console.log(" \n" ) ;
    }
}


gamePlay();