// 1:Import and configure inquirer
// 2: Process Answers
// 3:Generate HTML file

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require(`fs`);
const generateMarkdown = require(`./generateMarkdown.js`);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Project",
    message: "What is your project name?",
  },
  {
    type: "input",
    name: "Description",
    message: "What is your project description?",
  },
  {
    type: "input",
    name: "Installation",
    message: "How do you install it?:",
  },

  {
    type: "input",
    name: "Usage",
    message: "What is the usage?",
  },
  {
    type: "input",
    name: "Credits",
    message: "Do you want to add credits?",
  },
  {
    type: "input",
    name: "License",
    message: "What type of license did you use?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const content = generateMarkdown(answers);
    writeToFile("./generated/README.md", content);
  });
}

// Function call to initialize app
init();
