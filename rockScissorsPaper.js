var computerChoice;
var playerChoice;
var playerScore = 0;
var computerScore = 0;
var round = 0;


function appendElement(id, text) {
    document.querySelector(id).innerHTML ='';
    document.querySelector(id).append(text);
}
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

imgs.forEach(img => img.addEventListener('click', clickHandler));

function clickHandler(event) {
    gamePlay(event.target.id);
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
        appendElement("#computer span",computerScore);
        appendElement(".result span", "Player1!");
    }
    
    else if (computerScore > playerScore) {
        appendElement(".result span", "Computer");
    }
    
    else {
        appendElement(".result span","It's a tie!");
    }
}

//reset button 
function showElement(id){

    const element = document.querySelector(id);
const compStyles = window.getComputedStyle(element);
    
    if (compStyles.display === "none") {
        element.style.display = "flex";
    }
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

    appendElement("#round span",round);
    appendElement("#player span",playerScore);
    appendElement("#computer span",computerScore);
    console.log(`\n Scoreboard: 
        Player: ${playerScore}
        Computer: ${computerScore}`)
    console.log("=========================");
    console.log(" \n" ); 
        
    //declare wiiner after 5 rounds 
    if(playerScore == 5 || computerScore == 5) {
        imgs.forEach(img => img.removeEventListener('click', clickHandler));
        declareWinner(playerScore,computerScore);
        showElement("button.reset");
    }
}



