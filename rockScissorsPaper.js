var computerChoice;
var playerChoice;
var playerScore = 0;
var computerScore = 0;
var round = 0;

function appendElement(id, text) {
    document.querySelector(id).innerHTML = "";
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
            getNumber = "rock";
            break
        case 2:
            getNumber = "scissors"; 
            break;
        case 3:
            getNumber = "paper";
            break;
    }
    return getNumber;
}

//create listeners for images with a callback to start game play
var imgs = document.querySelectorAll("div.player-pick img");

imgs.forEach(img => img.addEventListener("click", clickHandler));

function clickHandler(event) {
    gamePlay(event.target.id);
}

var resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click",(event) => clearBoard()); 

var beginBtn = document.querySelector(".begin");

function clearHTML(id) {
    document.querySelector(id).innerHTML = "";
}

beginBtn.addEventListener("click",(event) => showBoard());
function showBoard() {
    beginBtn.style.display="none";
    document.querySelector(".board").style.display = "block";

    document.querySelector(".container.welcome").firstElementChild.style.display = "none";
}

function clickHandler(event) {
    gamePlay(event.target.id);
}

function clearBoard() {
    clearHTML("#round span") ;
    clearHTML("#computer span"); 
    clearHTML("#player span") ;
    document.querySelector("button.reset").style.display = "none";
    document.querySelector(".result").style.display = "none";
    
    var imgs = document.querySelectorAll("div.player-pick img");

    imgs.forEach(img => img.addEventListener("click", clickHandler));

    //clear scores, set back to 0
     playerScore = 0;
     computerScore = 0;
     round = 0;  
}

//compare choices of player vs computer
function playRound(playerSelection, computerSelection){
    // player 1 wins point
    if( playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "rock" ) {
            appendElement(".round-comment p", "Player 1 earns a point"); 
            return  ++playerScore;
    }
    
    //comp wins
    else if (computerSelection == "rock" && playerSelection == "scissors" ||
            computerSelection == "scissors" && playerSelection == "paper" ||
            computerSelection == "paper" && playerSelection == "rock" ) {
                appendElement(".round-comment p", "Computer earns a point");
                return  ++computerScore;
    }    
    //tie
    else {
        appendElement(".round-comment p", "It's a tie");
    }
}

// compare scores and declare winner
function declareWinner(playerScore, computerScore){
    var winMessage = "wins best of 5!"

    if(playerScore > computerScore){
        appendElement("#computer span",computerScore);
        appendElement(".round-comment p", "Player1 wins!");
    }
    
    else if (computerScore > playerScore) {
        appendElement(".round-comment p", "Computer wins");
    }
    
    else {
        appendElement(".round-comment p","It's a tie!");
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
    clearHTML(".round-comment p") ;
    let userChoice = choice;
    let compChoice = getComputerChoice();
         
    playRound(userChoice, compChoice);
    appendElement(".computer-pick .turn-result", compChoice);
    appendElement("#round span",round);
    appendElement("#player span",playerScore);
    appendElement("#computer span",computerScore);
        
    //declare wiiner after 5 rounds 
    if(playerScore == 5 || computerScore == 5) {
        imgs.forEach(img => img.removeEventListener("click", clickHandler));
        declareWinner(playerScore,computerScore);
        showElement("button.reset");
    }
}