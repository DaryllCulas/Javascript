
/*********** Function parameter - puts a value into a function ************/

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

      // If the player picked SCISSOR button
    if(playerMove === 'SCISSOR') {

      // Compare the moves to get the result
      if(computerMove === 'Rock') {
        result = 'Lose';
      }
      else if(computerMove === 'Paper') {
        result = 'Win'

      }
      else if(computerMove === 'Scissor') {
        result = 'Tie';
      }
    }

      // If the player picked PAPER button
    else if(playerMove === 'PAPER') {

      // Compare the moves to get the result
        if(computerMove === 'Rock') {
          result = 'Win';
        }
        else if(computerMove === 'Paper') {
          result = 'Tie'

        }
        else if(computerMove === 'Scissor') {
          result = 'Lose';
        }


    }
    
    else if(playerMove === 'ROCK') {
      // Compare the moves to get the result
        if(computerMove === 'Rock') {
          result = 'Tie';
        }
        else if(computerMove === 'Paper') {
          result = 'Lose'

        }
        else if(computerMove === 'Scissor') {
          result = 'Win';
        }


    }
        // Display the result to pop up
        alert(`You picked: ${playerMove} \nComputer Picked: ${computerMove.toUpperCase()}\n\nResult: ${result.toUpperCase()}`);

}

/****************** Function return - gets a value out of a function *********************************/
function pickComputerMove() {
  let computerMove = '';
  const randomNumber = Math.random();

      // Computer randomly selects a move
      if(randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'Rock';  
      }
      else if(randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'Paper';
  
      }
      else if(randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'Scissor';

      }
      return computerMove;
      
}

