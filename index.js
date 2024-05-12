#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const player1 = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Enter your name => "
    }]);
const player2 = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Enter your name => "
    }]);
const player1Game = await inquirer.prompt([{
        name: "player1Game",
        type: "list",
        message: "Select :",
        choices: ["Rock", "Paper", "Scissors"]
    }]);
const player2Game = await inquirer.prompt([{
        name: "player2Game",
        type: "list",
        message: "Select :",
        choices: ["Rock", "Paper", "Scissors"]
    }]);
if (player1Game.player1Game === player2Game.player2Game) {
    console.log(chalk.redBright("GAME TIED"));
}
else if (player1Game.player1Game === "Rock" && player2Game.player2Game === "Scissors" ||
    player1Game.player1Game === "Paper" && player2Game.player2Game === "Rock" ||
    player1Game.player1Game === "Scissors" && player2Game.player2Game === "Paper") {
    console.log(chalk.greenBright(`${player1.name} Win!`));
}
else {
    console.log(chalk.greenBright(`${player2.name} Win!`));
}
