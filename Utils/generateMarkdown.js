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
  ## Installation/Setup
   ${data.setup}
   * First item
  * Second item
  * Third item
  * Fourth item
  ## Usage
   ${data.usage}
  ## Liscense
   ${data.liscense}
  ## Contributor
   ${data.contributor}
   1. First item
  2. Second item
  3. Third item
  4. Fourth item
  ### Tests
   ${data.tests}
   ### Questions
   ${data.questions}
  


`;
}

module.exports = generateMarkdown;
