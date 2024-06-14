#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold.italic("\t Welcome to To-Do List made by Hamza"));
let toDoList = []; // Array of To-Do List where data will be stored
let conditions = true; // condition to execute To-Do List
let main = async () => {
    while (conditions) { // while loop to execute To-Do List program
        let option = await inquirer.prompt([
            {
                name: "my_choice",
                type: "list",
                message: chalk.yellow("Select an option that you want to perform"),
                choices: ["Add Task", "Delete Task", "Update Task", "View To-Do List", "Exit"]
            }
        ]);
        if (option.my_choice === "Add Task") { // if statement to execute Add task option
            await addTask();
        }
        else if (option.my_choice === "Delete Task") { // else if statement to execute Delete task
            await deleteTask();
        }
        else if (option.my_choice === "Update Task") { // else if statement to execute Update task
            await updateTask();
        }
        else if (option.my_choice === "View To-Do List") { // else if statement to execute View To-Do List
            await viewTask();
        }
        else if (option.my_choice === "Exit") { // else if statement to execute Exit operation
            conditions = false;
            console.log("This is your To-Do List.");
            console.log(toDoList);
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.yellow("Enter a new Task:")
        }
    ]);
    toDoList.push(newTask.task); // will add a task at the end of array
    console.log(`\n${toDoList} New task added successfully in to-do list.`);
};
let viewTask = () => {
    console.log("\n Your To-Do List");
    if (Array.isArray(toDoList)) { // if else statement to run viewTask function
        toDoList.forEach((task, index) => {
            console.log(`${index + 1}: ${task}`); // index + 1 will show the index number with the addition of 1 for the easiness of reader
        });
    }
    else {
        console.log("toDoList is not an array. Please initialize it as an array.");
    }
};
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.yellow("Enter a index no. of the task you want to delete:")
        }
    ]);
    let deleteTask = toDoList.splice(taskIndex.index - 1, 1); // taskIndex.index -1 will delete the original index position task of the array 
    console.log(`${deleteTask} has been deleted successfully.`);
};
let updateTask = async () => {
    let updateTaskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.yellow("Enter the index number of the task that you want to update")
        },
        {
            name: "new_task",
            type: "input",
            message: chalk.yellow("Enter a new task name:")
        }
    ]);
    toDoList[updateTaskIndex.index - 1] = updateTaskIndex.new_task; // (updateTaskIndex.index - 1) will update the original index position task of the array
    console.log(chalk.green(`\n Task at index no. ${updateTaskIndex.index} updated successfully.`));
    console.log(toDoList);
};
main(); // Calling the main function
