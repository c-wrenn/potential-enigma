// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
    //Project Title
    type: 'input',
    message: "What is the title of your project?",
    name: 'Title',
},
{
    //user types in
    //Explains the purpose of the project.
    //Needs to be added to the Description section
    type: 'input',
    message: "Provide a description of your project?",
    name: 'Description',
},
// {
//     //user creates a list, still need to onput on this list
//     type: 'input',
//     message: "Table of contents",
//     name: 'TOContents',
// },
{
    //holds instructions to install
    //Needs to be added to the Installation section
    type: 'input',
    message: "Enter the installation instructions: ",
    name: 'install',
},
{
    //git license
    //Needs to be added to the Usage section
    type:'list',
    message:"Choose a liscense for your project.",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 
    'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache 2.0', 'MIT',
    'Boost Software License 1.0', 'The Unlicense'], 
    name: 'license',

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
    name: 'contribution',
},
{
    //test instructions
    //Needs to be added to the Test Instruction section
    type: 'input',
    message: "Enter the test instructions: ",
    name: 'test',
},
{
    type:'input',
    message: "What is your GitHub Username?",
    name:'gitusername',
    //validate: function(answer) {
      //  if(answer.length < 1){
        //    return console.log("Please enter a valid Username.");
        //}
        //return true;
    //}
},
// {
//     type:'input',
//     message:"What is the name of your GitHub repository?",
//     name:'gitrepo'
// }
];




// TODO: Create a function to write README file
// function writeToFile(answers) {
//     const readmeContents = 
//     `
//     Title:                      ${answers.username}
//     Description:                ${answers.description}
//     Table of Contents:          ${answers.TOContents}
//     Project Purpose:            ${answers.purpose}
//     How to Install:             ${answers.install}
//     `;

//     //writeFile function will create a file called answers.txt, txt file
//     //pass in fileContents variable.
//     fs.writeToFile('README.md', readmeContents, (err) => {
//         if (err) {
//             console.error(err);
//         }else {
//             console.log("Your README file has been created!");
//         }
//     })
// }


// .then((answers) => {
//        //convert to string
//          console.log(JSON.stringify(answers));
//          writeToFile(answers);
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./ourgeneratedREADME.md', fileContent, err =>{
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

// }
function init() {
    inquirer
    .prompt(questions)
    .then(function(answers) {
        //store answers as strings
        console.log(JSON.stringify(answers));
        //writeFile using the answers
        var fileContent = generateMarkdown(answers);
        writeToFile(fileContent)
    });
}
    //function write our answers into the readme.md
    // function writeFile(answers) {
    //     const fileContents = 
    //     `# ${answers.Title}

    //     ## Table of Contents
    //     * space creates list
    //     * [Project Description](#Description)
    //     * [Usage](#Usage)
    //     * [Contributing](#Contributing)
    //     * [Installation](#Installation)
    //     * [License](#License)
      
    //     ## Description
    //     ${answers.Description}
      
    //     ## Usage
    //     ${answers.Usage}
      
    //     ## Installation
    //     ${answers.Contributing}
      
    //     ## Questions
    //     ${answers.email}
        
    //     ## License
    //     ${answers.github}

    //     `;
    //newest write file fucntion
   // createNewFile(title,fileContents)

// function createNewFile(fileName, fileContents) {
//     fs.writeFile(`./${fileName.toLowerCase().split(' ').join(' ')}.md`,data)
// }
        //writeFile function will create a file called answers.txt, txt file
        //pass in fileContents variable.
    //     fs.writeFile('README.md', fileContents, (err) => {
    //         if (err) {
    //             console.error(err);
    //         }else {
    //             console.log("Your README file is complete!!");
    //         }
    //     })
    // }

//const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
// async function init() {
//  const responses = await inquirer.prompt(questions);
//  console.log("All Answers: ", responses);

//Now pass inquiere responses to generateMarkdown
// console.log("Generating your README file...");
// const markdown = generateMarkdown(responses);
// console.log(markdown);

// //Write markdown to file.
// await writeFileAsync('README.md', markdown);

//}
// .then((answers) => {
//     //convert to string
//     console.log(JSON.stringify(answers));
//     writeToFile(answers);


// });
// }

// Function call to initialize app
init();
module.exports = questions;