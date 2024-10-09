#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellow("=".repeat(70)));
console.log(chalk.yellow("\n \t               Welcome to our Calculator App         \n"));
console.log(chalk.bold.yellow("=".repeat(70)));
const answer = await inquirer.prompt([
    { message: "Enter your First Number", type: "number", name: "Firstnumber" },
    { message: "Enter your Second Number", type: "number", name: "Secondnumber" },
    {
        message: chalk.bgBlueBright("Select one operator to perform action"),
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
    },
]);
// CONDITIONAL STATEMENT :
if (answer.operator === "ADDITION") {
    console.log(answer.Firstnumber + answer.Secondnumber);
}
else if (answer.operator === "SUBTRACTION") {
    console.log(answer.Firstnumber - answer.Secondnumber);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(answer.Firstnumber * answer.Secondnumber);
}
else if (answer.operator === "DIVISION") {
    console.log(answer.Firstnumber / answer.Secondnumber);
}
else {
    chalk.red("please select correct operator");
}
;
