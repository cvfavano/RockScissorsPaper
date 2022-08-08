var computerChoice;
var playerChoice;
var playerScore = 0;
var computerScore = 0;
var round = 0;

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

//create listeners with a callback to start game play

var imgs = document.querySelectorAll('div.options img');

imgs.forEach(img => img.addEventListener('click', (event) => {
        gamePlay(event.target.id);
    })
)




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
    Computer: ${computerScore}`);
}

//Run game


function gamePlay(choice){
    
        console.log(`Round: ${++round}`);
        let userChoice = choice;
        console.log(userChoice)
        let compChoice = getComputerChoice();
       
        
        //user cancels out of prompt
     
            console.log('\nResult: ');
        
            playRound(userChoice, compChoice);
            console.log(`\n Scoreboard: 
                Player: ${playerScore}
                Computer: ${computerScore}`)
            console.log("=========================");
            console.log(" \n" ); 
        
    
        //declare wiiner after 5 rounds 
   
    if(playerScore == 5 || computerScore ==5) {
    declareWinner(playerScore,computerScore);
        
    }
}

