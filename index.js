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
      name: "title"
    },
    {
      type: "input",
      message: " Describe your project.",
      name: "description",
    },
    {
      type: "input",
      message: " What will your project consist of?",
      name: "bio",
    },
    {
      type: "input",
      message: "What was downloaded/input for your project",
      name: "linkedIn",
    },
    {
      type: "input",
      message: " What methods was used to complete your project?",
      name: "gitHub",
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
