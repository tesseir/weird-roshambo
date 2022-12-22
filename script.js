var playerChoice; 
var computerChoice; 
var wins; 
var losses;
var ties;

const roshambo = ["rock", "paper", "scissor"];

function start(){
  playerChoice = null;
  computerChoice = null;
  wins = false
  ties = false
  losses = false

  if (confirm("Would you like to play roshambo?")){
    choice()
  }else{ alert("you dont have a choice, pick again.")
    start()
  }
}

function choice(){
  playerChoice = prompt("pick your impact device: Rock, Paper, or Scissors").toLowerCase();

  if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissor"){
    alert("Pick one of the options, idiot.")
    choice()
  } 

  computerchooses()
}

function computerchooses(){
  computerChoice = roshambo[Math.floor(Math.random()*3)];
  console.log(computerChoice)
  decideWhoWins();
}

function decideWhoWins(){
 if (playerChoice === "r" && computerChoice === "s" ){
  wins = true 
} else if (playerChoice === "p" && computerChoice === "r" ){
  wins = true 
} else if (playerChoice === "s" && computerChoice === "p" ){
  wins = true 
} else if (playerChoice === "s" && computerChoice === "r" ){
  losses = true 
} else if (playerChoice === "r" && computerChoice === "p" ){
  losses = true 
} else if (playerChoice === "p" && computerChoice === "s" ){
  losses = true
} else if (playerChoice === "p" && computerChoice === "p" ){
  ties = true 
} else if (playerChoice === "r" && computerChoice === "r" ){
  ties = true
} else {
  ties = true 
}
displayOutcome();
}

function displayOutcome(){
  if (ties === true){
    alert("A shame. We tied... but you lose anyways.")
  } else if (wins === true){
    alert("Lookie lookie, you won! But you lose regardless.")
  } else if (losses === true){
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
