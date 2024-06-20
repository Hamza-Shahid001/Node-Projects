#! /usr/bin/env node
import inquirer from "inquirer"; // import statement to use inquirer
import chalk from "chalk"; // import statement to use chalk
console.log(chalk.blue.bold.italic("\t\tWelcome to Currency Converter made by Hamza")); // Welcome statement to welcome to our code
let rate = {
    "USD": 1,
    "EUR": 0.93,
    "CAD": 1.37,
    "AUD": 1.5,
    "JPY": 158.9,
    "CHF": 0.89,
    "PKR": 278.62
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.green("Select the currency to convert from:"),
        choices: ["USD", "EUR", "CAD", "AUD", "JPY", "CHF", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.green("Select the currency to convert into:"),
        choices: ["USD", "EUR", "CAD", "AUD", "JPY", "CHF", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.green("Enter the amount you want to convert:"),
    }
]);
// To save the data given by the user in a variable
let from_amount = rate[user_answer.from_currency];
let to_amount = rate[user_answer.to_currency];
let amount = user_answer.amount;
// Formula of Conversion
let baseAmount = amount / from_amount;
let convertedAmount = baseAmount * to_amount;
//  To display the output
console.log(chalk.yellow(`Converted Amount:`) + chalk.magenta(`${convertedAmount}`));
