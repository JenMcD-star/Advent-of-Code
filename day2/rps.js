//1 for Rock, 2 for Paper, and 3 for Scissors
// 6 win, 3 draw, 0 lose
// elfPlay A for Rock, B for Paper, and C for Scissors.
//myPlay  X for Rock, Y for Paper, and Z for Scissors.
   
let myScore = 0;
let elfScore = 0;
let elfPlay;
let myPlay;
function playRound(myPlay, elfPlay) {
  if (myPlay == "X") {
    console.log('yes')

    if (elfPlay == "A") {
      myScore += 4;
      elfScore += 4;
    } else if (elfPlay == "B") {
      myScore += 1;
      elfScore += 8;
    } else if (elfPlay == "C") {
      myScore += 7;
      elfScore += 3;
    }
  } else if (myPlay == "Y") {
    console.log('yes2')

    if (elfPlay == "A") {
      myScore += 8;
      elfScore += 1;
    } else if (elfPlay == "B") {
      myScore += 5;
      elfScore += 5;
    } else if (elfPlay == "C") {
      myScore += 2;
      elfScore += 9;
    } else {
      console.log("problem two!");
    }
  } else if (myPlay = "Z") {
    console.log('yes3')

    if (elfPlay == "A") {
      myScore += 3;
      elfScore += 7;
    } else if (elfPlay == "B") {
      myScore += 9;
      elfScore += 2;
    } else if (elfPlay == "C") {
      myScore += 6;
      elfScore += 6;
    } else {
      console.log("another problem!");
    }
  }
  return myScore
}

 const solve = (input) => {
   for (let i = 0; i < input.length; i++) {
     let shapes = input[i].split(" ");
      elfPlay = shapes[0];
      myPlay = shapes[1];
      playRound(myPlay, elfPlay);
      console.log(myScore)
   }
 };

const input = require("fs").readFileSync("./input.txt", "utf-8").split("\n");
solve(input);
