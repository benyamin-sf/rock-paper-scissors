const CHOICES = ['rock', 'paper', 'scissors'];

function getHumanChoice(possibleChoices) {
  const userInput = prompt('Please enter your choice:');

  if (!userInput) return undefined;

  const matchesPossibleChoices = possibleChoices.includes(
    userInput.toLowerCase()
  );
  if (!matchesPossibleChoices) {
    alert(
      `Entered value is unacceptable for this game!\nPossible values are: ${CHOICES.join(
        ', '
      )}.`
    );

    return undefined;
  }

  return userInput.toLowerCase();
}

function getComputerChoice(choices) {
  const randNum = Math.floor(Math.random() * choices.length);
  return choices[randNum];
}

function announceWinner(humanScore, computerScore) {
  const staticMsg = '\n(You can open your browser console for details)';
  if (humanScore === computerScore)
    alert(
      `Hey! it's a tie. You both got ${humanScore} scores\nWanna go again? 🔃 Refresh the page to start a new game...${staticMsg}`
    );
  else if (humanScore > computerScore)
    alert(
      `Hooray! 🎉\nYou won the game with ${humanScore} scores ,while computer only has ${computerScore} scores.${staticMsg}`
    );
  else
    alert(
      `Sorry! You lost this time 😓\nComputer got ${computerScore} while you got stuck at ${humanScore} scores.${staticMsg}`
    );
}

function printScores(roundNumber, humanScore, computerScore) {
  console.log(
    `::ROUND_${roundNumber}: PLAYER <${humanScore}> VS PC <${computerScore}>\n`
  );
}

function playGame(rounds) {
  let roundsCounterAll = 1;
  let roundsCounter = 1;
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    roundsCounter++;

    if (humanChoice === computerChoice) {
      alert(`A tie! ${humanChoice} and ${computerChoice} makes a tie.`);
      return;
    }

    switch (humanChoice) {
      case 'rock': {
        if (computerChoice === 'paper') {
          alert(`You lose!\n📄 (paper) beats the 🪨 (rock).`);
          computerScore++;
        } else if (computerChoice === 'scissors') {
          alert(`You win!\n🪨 (rock) beats the ✂️ (scissors).`);
          humanScore++;
        }
        break;
      }

      case 'paper': {
        if (computerChoice === 'scissors') {
          alert(`You lose!\n✂️ (scissors) beats the 📄 (paper).`);
          computerScore++;
        } else if (computerChoice === 'rock') {
          alert(`You win!\n📄 (paper) beats the 🪨 (rock).`);
          humanScore++;
        }
        break;
      }

      case 'scissors': {
        if (computerChoice === 'rock') {
          alert(`You lose!\n🪨 (rock) beats the ✂️ (scissors).`);
          computerScore++;
        } else if (computerChoice === 'paper') {
          alert(`You win!\n✂️ (scissors) beats the 📄 (paper).`);
          humanScore++;
        }
        break;
      }
    }

    printScores(roundsCounterAll, humanScore, computerScore);
  }

  while (roundsCounter <= rounds) {
    const computerChoice = getComputerChoice(CHOICES);
    const humanChoice = getHumanChoice(CHOICES);

    if (humanChoice) playRound(humanChoice, computerChoice);
    roundsCounterAll++;
  }

  announceWinner(humanScore, computerScore);
}

const GAME_ROUNDS = 5; // game rounds can be modified by changing this variable
setTimeout(() => {
  alert(
    "Hey there,\nwe are playing the rock, paper, scissors here.\nTo start click 'OK' or just press 'Enter' key...\n\n(nothing's happened?! press 'F5' once for messages to show up)"
  );

  playGame(GAME_ROUNDS);
}, 1000);
