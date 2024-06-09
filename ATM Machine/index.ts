#! /usr/bin/env node

import inquirer from "inquirer" 
import chalk from "chalk"

let myBalance = 50000 // Variable to store Balance Amount
console.log("\t\"Welcome to ATM Machine\"") // Welcome message
let myPin = 2310 // Variable to store ATM Machine Pin

let pinAddress = await inquirer.prompt([                    // Declaring variable to enter the PIN from the user
    {
        name: "pin",
        type:"number",
        message:chalk.yellowBright("Enter your PIN")
    }
])

if (pinAddress.pin === myPin){                              // if statement will run when correct PIN will be be enter
    console.log(chalk.green("Pin is Correct. Login Successfully"))       // Print statement if correct PIN is entered.
    let operation = await inquirer.prompt([                 // Declaring variable which operation will be perform by the user
       {
        name: "Operation",
        type: "list",
        message: "Select an Operation",
        choices: ["Check Balance", "Withdraw Amount"]     // Choices defined for the user
       } 
    ])    
    if (operation.Operation === "Check Balance"){           // if statement will run when Check balance will be choose from the user
        console.log("Your Current Balance is:" + chalk.blue(myBalance)) // Print statement to display the current balance
        let newFunction = await inquirer.prompt([           // Declaring variable which operation will be perform by the user in Check Balance option  
            {
                name: "newFunction",
                type: "list",
                message: "Enter new function",
                choices: ["Terminate", "Withdraw", "fastCash"]
            }
        ])
        if (newFunction.newFunction === "Terminate"){       // To terminate all the operation
            console.log(chalk.greenBright("Thank You for visiting."))          // Print statement on terminating the operation
        }
        else if (newFunction.newFunction === "Withdraw"){   // To withdraw amount after checking the Current Balance
                let amountAns = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter the amount to Withdraw:",
                    }
                ])
                if (amountAns.amount >= myBalance){         // To check the amount enetered is in the account or not
                    console.log(chalk.redBright("Insufficient Balance"))     // Print statement if the Balance is not enough 
                }
                else{
                    myBalance -= amountAns.amount           // To store the new amount after withdrawal of required amount
                    console.log(`${amountAns.amount} Withdraw Successfully.`)  // Print statement on withdrawal of amount
                    console.log(chalk.green(`Your remaining balance is: ${myBalance}`))     // Print statement of new Balance
                }
        }
        else if (newFunction.newFunction === "fastCash"){
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select amount",
                    choices: [5000, 10000, 20000, 30000, 40000]
                }
            ])
            if (fastCashAns.fastCash > myBalance){
                console.log(chalk.red("Insufficient Balance"))
            }
            else {
            myBalance -= fastCashAns.fastCash                   // To store the new amount after withdrawal of fast cash amount
            console.log(`${fastCashAns.fastCash} Withdraw Successfully.`) // Print statement on withdrawal of amount
            console.log(chalk.green(`Your remaining balance is: ${myBalance}`))    // Print statement of new Balance
            }
        }
        else if (operation.Operation === "Withdraw Amount"){ // To withdraw amount without checking the current balance
            let withdrawAmo = await inquirer.prompt([       // To introduce withdrawal method
            {
                name:"Withdraw_Method",
                type:"list",
                message: "Select a Withdraw method",
                choices: ["Fast Cash", "Enter Amount"]
            }
            ])
        if (withdrawAmo.Withdraw_Method === "Fast Cash"){      // To withdraw amount using fast cash
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select amount",
                    choices: [5000, 10000, 20000, 30000, 40000]
                }
            ])
            if (fastCashAns.fastCash > myBalance){              // if statement when fast cash amount greater than my Balance
                console.log("Insufficient Balance")             // Print statement when fast cash amount greater than my Balance
            }
            else {
            myBalance -= fastCashAns.fastCash                   // To store the new amount after withdrawal of fast cash amount
            console.log(`${fastCashAns.fastCash} Withdraw Successfully.`) // Print statement on withdrawal of amount
            console.log(`Your remaining balance is: ${myBalance}`)    // Print statement of new Balance
            }
        }
        else if (withdrawAmo.Withdraw_Method === "Enter Amount"){
                let amountAns = await inquirer.prompt([         // To store the amount that you want to withdraw
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to Withdraw:",
                }
            ])
            if (amountAns.amount >= myBalance){                 // To check the amount enetered is in the account or not
                console.log(chalk.red("Insufficient Balance"))             // Print statement if the Balance is not enough 
            }
            else{
                myBalance -= amountAns.amount                   // To store the new amount after withdrawal of required amount
                console.log(`${amountAns.amount} Withdraw Successfully.`) // Print statement on withdrawal of amount
                console.log(`Your remaining balance is: ${myBalance}`)    // Print statement of new Balance
            }
        }    
    }
    }
}
else {
    console.log(chalk.redBright("Error. Enter the correct Pin."))    // Print statement if the PIN enetered is incorrect
}         