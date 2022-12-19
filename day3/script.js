//gets list
let input = require("fs").readFileSync("./input.txt", "utf-8").split("\n");
//sets alphabet as a variable
let alphabet = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
  ""
);
//this will told the priority values as they add up
let total = 0;

for (i = 0; i < input.length; i++) {
  //sets the input for each iteration
  let currentInput = input[i];
  //gets half of the length to split the ruck into two compartments
  let inputLength = currentInput.length / 2;
  //gets the first compartment
  let firstHalf = currentInput.slice(0, inputLength);
  //gets the second compartment
  let secondHalf = currentInput.slice(inputLength, currentInput.length);
  //iterate through the second half- if that iteration item is in the first half
  //then get the index of alphabet to get the priority number and add that number
  //to the total
  for (j = 0; j < inputLength; j++) {
    if (firstHalf.includes(secondHalf[j])) {
      total += alphabet.indexOf(secondHalf[j]);
     // console.log(total);
      break;
    }
  }
}
//now the badges!
let badges = 0;
for (b = 0; b < input.length; b += 3) {
  let one = input[b].split("");
  let two = input[b + 1].split("");
  let three = input[b + 2].split("");
  for (k = 0; k < input.length / 3; k++) {
    if (one.includes(two[k]) && three.includes(two[k])) {
      badges += alphabet.indexOf(two[k])
      console.log(badges)
      break;
    }
  }
}
