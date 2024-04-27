#! /usr/bin/env node

// importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk"

// Display the colorful welcome message
console.log(chalk.bold.cyanBright("\n \t\t Welcome to 'Code With Owais' - Word Counter"));
console.log("=".repeat(76));

// Prompt a user to Enter a text
let answer = await inquirer.prompt([
    {
        name: "text",
        type: "input",
        message: "Enter Your Text :",
    }
]);

// Trimming the text and splitting it into words based on Spaces
let words = answer.text.trim().split(" ");

// Analysis of user input text
console.log("=".repeat(76));
console.log(chalk.bold("- Text Words:\n"));
console.log(words);
console.log(chalk.bold(`\n - Words Count: ${chalk.rgb(255, 131, 51)(words.length)}`));
console.log("=".repeat(76));