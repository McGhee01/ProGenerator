// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
   ${data.description}

  ## TableofContents
   ${data.tableofcontents}
   * Installation
   * Usage
   * Liscense
   * Contributing
   * Tests
   * Questions
   * Contact Info 
   
  ## Installation
   ${data.installation}

  ## Usage
   ${data.usage}

  ## Liscense
   ${data.liscense}
   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


  ## Contributor
   ${data.contributor}

  ### Tests
   ${data.tests}

   ### Questions
   ${data.questions}
   * https://github.com/McGhee01
   * https://mail.google.com/mail/u/0/#inbox
   
`;
}

module.exports = generateMarkdown;
