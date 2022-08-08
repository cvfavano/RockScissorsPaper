var computerChoice;
var playerChoice;
var playerScore = 0;
var computerScore = 0;

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
  /*  var keyEntry = prompt(question);
    var entry = checkUserSelection(keyEntry);
    
    if (entry == null) { return; }
    
    else{
        console.log(`User picks ${entry}`);
        return entry;
    }
    */
}

//check if user used whitespace, emptry string, or incorrect word
function checkUserSelection(entry) {
    
    //user cancels out of prompt
    if(!entry) {
        return;
    }
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
            getUserChoice('Please reenter choice with rock, scissors or paper only');
            break;

        default:
            getUserChoice('Please reenter choice with rock, scissors or paper only');
            break;
    }
}


//compare choices of player vs computer
function playRound(playerSelection, computerSelection){
    // player 1 wins point
    if( playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'rock' ) {
            console.log("Player 1 earns a point")
            return  ++playerScore;
    }
    
    //comp wins
    else if (computerSelection == 'rock' && playerSelection == 'scissors' ||
            computerSelection == 'scissors' && playerSelection == 'paper' ||
            computerSelection == 'paper' && playerSelection == 'rock' ) {
                console.log("Computer earns a point")
                return  ++computerScore;
    }    
    //tie
    else {
        console.log("It's a tie!")
    }
}

// compare scores and declare winner
function declareWinner(playerScore, computerScore){
    var winMessage = "wins best of 5!"
    
    if(playerScore > computerScore){
        console.log('Player ' + winMessage );
    }
    
    else if (computerScore > playerScore) {
        console.log('Computer ' + winMessage);
    }
    
    else {
        console.log("It's a tie!");
    }

    console.log(`\n *** FINAL SCORE: *** 
    Player: ${playerScore}
    Computer: ${computerScore}`)
}

//Run game
function gamePlay(){
    var round = 0;
    for (let i = 0; i < 5; i++ ) {

        console.log(`Round: ${++round}`);
        
        let compChoice = getComputerChoice();
        let userChoice = getUserChoice('Rock, Scissors, Paper?');
        
        //user cancels out of prompt
        if(userChoice === undefined) {
            console.log("Player exited game");
            break;
        }
        else {
            console.log('\nResult: ');
        
            playRound(userChoice, compChoice);
            console.log(`\n Scoreboard: 
                Player: ${playerScore}
                Computer: ${computerScore}`)
            console.log("=========================");
            console.log(" \n" ); 
        }
        //declare wiiner after 5 rounds 
        if(i === 5) {
            declareWinner(playerScore,computerScore);
        }
    }
}

gamePlay();