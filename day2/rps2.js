/*
 X means you need to lose, 
 Y means you need to end the round in a draw, 
 and Z means you need to win. 
*/
let myScore = 0;
let elfScore = 0;
let elfPlay;
let myPlay;
let rock = 1;
let paper = 2;
let scissors = 3;
let win = 6;
let draw = 3;
//1 for Rock, 2 for Paper, and 3 for Scissors
// 6 win, 3 draw, 0 lose
// elfPlay A for Rock, B for Paper, and C for Scissors.

function playRound(myPlay, elfPlay) {
  if (myPlay == "X") {
    console.log('yes')

    if (elfPlay == "A") {
      myScore += scissors;
      elfScore += rock + win;
    } else if (elfPlay == "B") {
      myScore += rock;
      elfScore += paper + win;
    } else if (elfPlay == "C") {
      myScore += paper;
      elfScore += scissors + win;
    }
  } else if (myPlay == "Y") {
    console.log('yes2')

    if (elfPlay == "A") {
      myScore += rock + draw;
      elfScore += rock + draw;
    } else if (elfPlay == "B") {
      myScore += paper + draw;
      elfScore += paper + draw;
    } else if (elfPlay == "C") {
      myScore += scissors + draw;
      elfScore += scissors + draw;
    } else {
      console.log("problem two!");
    }
  } else if (myPlay = "Z") {
    console.log('yes3')

    if (elfPlay == "A") {
      myScore += paper + win;
      elfScore += rock;
    } else if (elfPlay == "B") {
      myScore += scissors + win;
      elfScore += paper;
    } else if (elfPlay == "C") {
      myScore += rock + win;
      elfScore += scissors;
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
