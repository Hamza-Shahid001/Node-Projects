#! usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to Number Guessing Game made by Hamza");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 to 5):",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulations! You guess a right number.");
}
else {
    console.log("Sorry, you guess a wrong number");
}
