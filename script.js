// Choices will be requested each round inside playGame()

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

function getHumanChoice() {
  return prompt("Enter your choice (rock, paper, scissors): ");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(computerChoice, humanChoice) {
    if (typeof humanChoice !== 'string') humanChoice = '';
    humanChoice = humanChoice.toLowerCase();
    if (computerChoice === "rock" && humanChoice === "paper") {
      console.log("You win! Paper beats Rock");
      humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
      console.log("You Lose! Rock beats Scissors");
      computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      console.log("You Lose! Paper beats Rock");
      computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
      console.log("You win! Scissors beats Paper");
      humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
      console.log("You win! Rock beats Scissors");
      humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      console.log("You Lose! Scissors beats Paper");
      computerScore++;
    } else {
      console.log("It's a tie!");
    }
  }

  for (let round = 1; round <= 5; round++) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    console.log(`Round ${round} - Computer Choice: `, computerSelection);
    console.log(`Round ${round} - Human Choice: `, humanSelection);
    playRound(computerSelection, humanSelection);
  }

  console.log("Final Scores - Human: ", humanScore, "Computer: ", computerScore);
  if (humanScore > computerScore) {
    console.log("Congratulations! You beat the computer!");
  } else if (humanScore < computerScore) {
    console.log("The computer beat you! Better luck next time!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
