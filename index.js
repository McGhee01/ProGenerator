// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [];

// The array below is a variable.
inquirer
  .prompt([
    {
      type: "input",
      message: " What is the title of your project?",
      //Whatever you type in name string will appear once node is ran.
      name: "title"
    },
    {
      type: "input",
      message: " What is the purpose of your project?",
      name: "description",
    },
    {
      type: "input",
      message: " How do you keep it organized?",
      name: "tableofcontents",
    },
    {
      type: "input",
      message: " What steps were taken to create your project?",
      name: "installation/setup",
    },
    {
      type: "input",
      message: "What technologies were used for your project",
      name: "usage",
    },
    {
      type: "input",
      message: " Do you have a liscense present?",
      name: "liscense",
    },
    {
      type: "input",
      message: " List any contribution site(s) tied to this project.",
      name: "contributor",
    },
    {
      type: "input",
      message: " Have you run any tests to make sure your project is ready for deployment?",
      name: "tests",
    },
    {
      type: "input",
      message: " Where or whom do you contact to ask questions?",
      name: "questions",
    },

  ]) 

  .then((data) => {
    const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;

    fs.writeFile(filename, generateMarkdown(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
  //convert 'data' into a string
  //use 'data' in writeToFile
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
