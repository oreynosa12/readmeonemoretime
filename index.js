// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require(`fs`);
// const generateMarkdown = require(`generateMarkdown.js`)

// TODO: Create an array of questions for user input
inquirer.prompt ( [
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your project description?',
        name: 'password',
      },
      {
        type: 'input',
        message: 'How do you install it?:',
        name: 'confirm',
      },
      {
        type: 'input',
        message: 'What is the usage?',
        name: 'confirm',
      },
      {
        type: 'input',
        message: 'Do you want to add credits?',
        name: 'confirm',
      },
      {
        type: 'input',
        message: 'What type of license did you use?',
        name: 'confirm',
      },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  if (error){
    console.log(error)
  }
}  

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// ***PRACTICE*****

// const a = process.argv[2]
// const b = process.argv[3]

// if (a === b){
// console.log ('They are equal')
// }
// else{
//   console.log('They are not equal')
// }

