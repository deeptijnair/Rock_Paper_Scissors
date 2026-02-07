const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

console.log("Computer Choice: ", computerChoice);
console.log("Human Choice: ", humanChoice);

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return "rock";
  } else if (randomNumber == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}


function getHumanChoice(){
    return prompt("Enter your choice (rock, paper, scissors): ");
}
