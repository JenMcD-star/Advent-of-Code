//get data, seperate items within each array with an 'n'
const input = require("fs").readFileSync("./text.txt", "utf-8").split("\n\n");

//set empty array to contain the for loop returns
let total = [];

//create a loop to go over each array in the input
for (let i = 0; i < input.length; i++) {
  //within each array split the numbers by the 'n'
  let calories = input[i].split("\n");
  //take all of the calories with a single array and add them together
  calories = calories.reduce((a, v) => {
    //return the calories added together as a number (default was string??)
    return parseInt(a) + parseInt(v);
  });
  //add calories to the total variable array
  total.push(calories);
}
//sort the calores- the b - a part is because sort goes alphabetically
total.sort((a, b) => b - a);

console.log(`Most calories: ${total[0]}`);
console.log(`top 3 ${total[0]} ${total[1]} and ${total[2]}`);

let top3 = parseInt(total[0]) + parseInt(total[1]) + parseInt(total[2])
console.log(top3)