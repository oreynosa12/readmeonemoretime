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
    name: "project",
    message: "What is your project name?",
  },
  {
    type: "input",
    name: "description",
    message: "What is your project description?",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install it?:",
  },

  {
    type: "input",
    name: "usage",
    message: "What is the usage?",
  },
  {
    type: "input",
    name: "credits",
    message: "Do you want to add credits?",
  },
  {
    type: "input",
    name: "license",
    message: "What type of license did you use?",
  },
  {
    type: "input",
    name: "contributing",
    message: "How can other people contribute?",
  },
  {
    type: "input",
    name: "tests",
    message: "What tests should I run?",
  },
  {
    type: "input",
    name: "questions",
    message: "Where can someone submit question?",
  },
];

// TODO: Create a function to write README file--Contributing, Tests, and Questions
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.log(err)
      : console.log("Successfully created a README.md file!")
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
