var playerChoice; 
var computerChoice; 
var wins; 
var losses;
var ties;
var whoWon;
var result; 

const roshambo = ["r", "p", "s"];

function start(){
  if (confirm("Would you like to play roshambo?")){
    choice()
  }else{ alert("you dont have a choice, pick again.")
    start()
  }
}

function choice(){
  playerchooses = prompt("pick your impact device: Rock, Paper, or Scissors");
  computerchooses()
}

function computerchooses(){
  var random = Math.floor(Math.random()*3);
  computerChoice = roshambo[random];
  console.log(computerChoice)
  decideWhoWins();
}

function decideWhoWins(){
 if (playerChoice === "r" && computerChoice === "s" ){
  wins 
} else if (playerChoice === "p" && computerChoice === "r" ){
  wins 
} else if (playerChoice === "s" && computerChoice === "p" ){
  wins 
} else if (playerChoice === "s" && computerChoice === "r" ){
  losses 
} else if (playerChoice === "r" && computerChoice === "p" ){
  losses 
} else if (playerChoice === "p" && computerChoice === "s" ){
  losses
} else if (playerChoice === "p" && computerChoice === "p" ){
  ties 
} else if (playerChoice === "r" && computerChoice === "r" ){
  ties
} else {
  ties 
}
displayOutcome();
}

function displayOutcome(){
  var result
  if (ties){
    alert("A shame. We tied... but you lose anyways.")
  } else if (wins){
    alert("Lookie lookie, you won! But you lose regaurdless.")
  } else{
    alert("Poor poor poor human... you lost as always...")
  }

  playAgain()
}

function playAgain(){
  if (confirm("Would you like to play again?")){
    choice()
  }else{ alert("you dont have a choice, pick again.")
    start()
  }
}

start()
