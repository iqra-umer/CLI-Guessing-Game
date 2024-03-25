import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "gussed a number between 1 to 10",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulations you win");
}
else {
    console.log("sorry try again...");
}
;
