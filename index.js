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
      message: " Describe your project.",
      name: "description",
    },
    {
      type: "input",
      message: " What steps were taken to create your project?",
      name: "setup/installation",
    },
    {
      type: "input",
      message: "What technologies were used for your project",
      name: "technology used",
    },
    {
      type: "input",
      message: " What problems did you have while completing your project?",
      name: "known bugs",
    },
    {
      type: "input",
      message: " List support team or person email responsible for this project.",
      name: "support",
    },
    {
      type: "input",
      message: " List any contributions made to this project.",
      name: "support",
    },
    {
      type: "input",
      message: " List any contribution site(s) tied to this project.",
      name: "contributor",
    },
    {
      type: "input",
      message: " List any liscense(s) for the project created.",
      name: "liscense",
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
