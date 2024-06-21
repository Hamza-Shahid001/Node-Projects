#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow.bold.italic("\t\t\tWelcome to Word Counter made by Hamza")); // Display a colourful Welcome message
console.log("\t\t" + "=".repeat(50));
// Prompt to enter a sentences
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.blue("Enter a sentence:")
    }
]);
// Analysis of User Input
let words = answer.sentence.split(" "); // Words will be separated by spaces
console.log(`Words Count = ${words.length}`); // Number of words will be detected by using this line
