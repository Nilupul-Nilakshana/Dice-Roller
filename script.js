var diceImage = document.getElementById("dice");
var rollButton = document.querySelector(".btn");

function rollDice() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);

  // Display the initial dice image
  diceImage.src = "images/dice_1.png";

  // Roll the dice animation
  var counter = 0;
  var interval = setInterval(function () {
    if (counter === 10) {
      clearInterval(interval);
      // Set the final dice image based on the random number
      switch (randomNumber) {
        case 1:
          diceImage.src = "images/dice_1.png";
          break;
        case 2:
          diceImage.src = "images/dice_2.png";
          break;
        case 3:
          diceImage.src = "images/dice_3.png";
          break;
        case 4:
          diceImage.src = "images/dice_4.png";
          break;
        case 5:
          diceImage.src = "images/dice_5.png";
          break;
        case 6:
          diceImage.src = "images/dice_6.png";
          // Show a message to the user if they win
          alert("Congratulations, you rolled a 6 and won the game!");
          break;
        default:
          break;
      }
      return;
    }

    // Change the dice image randomly during the roll animation
    var randomImageNumber = Math.floor(Math.random() * 6) + 1;
    diceImage.src = "images/dice_" + randomImageNumber + ".png";

    counter++;
  }, 100);
}

// Add an event listener to the Roll button
rollButton.addEventListener("click", rollDice);
