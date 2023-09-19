// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
    //Project Title
    //Needs to be displayed as the title of the readme
    type: 'input',
    message: "What is the title of your project?",
    name: 'Title',
},
{
    //user types in
    //Explains the purpose of the project.
    //Needs to be added to the Description section
    type: 'input',
    message: "Provide a description of your project.",
    name: 'description',
},
{
    //user creates a list, still need to onput on this list
    type: 'list',
    message: "Table of contents",
    name: 'TOContents'
},
{
    //holds instructions to install
    //Needs to be added to the Installation section
    type: 'input',
    message: "Enter the installation instructions: ",
    name: 'install'
},
{
    //git license
    //Needs to be added to the Usage section
    type:'list',
    message:"Choose a liscense for your project.",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 
    'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License',
    'Boost Software License 1.0', 'The Unlicense'], 
    name: 'liscense'

  //  WHEN I choose a license for my application from a list of options
//THEN a badge for that license is added near the top of the README and 
//a notice is added to the section of the README entitled License that 
//explains which license the application is covered under
},
{
    //contribution information
    //Needs to be added to the Contribution section
    type: 'input',
    message: "Contribution Information: ",
    name: 'contribution'
},
{
    //test instructions
    //Needs to be added to the Test Instruction section
    type: 'input',
    message: "Enter the test instructions: ",
    name: 'test'
},
    
];



// TODO: Create a function to write README file
function writeToFile(answers) {
    const readmeContents = 
    `
    Title:                      ${answers.username}
    Description:                ${answers.description}
    Table of Contents:          ${answers.TOContents}
    Project Purpose:            ${answers.purpose}
    How to Install:             ${answers.install}
    `;

    //writeFile function will create a file called answers.txt, txt file
    //pass in fileContents variable.
    fs.writeToFile('README.md', readmeContents, (err) => {
        if (err) {
            console.error(err);
        }else {
            console.log("Your README file has been created!");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
.prompt(questions)
.then((answers) => {
    //convert to string
    console.log(JSON.stringify(answers));
    writeToFile(answers);
});
}

// Function call to initialize app
init();
