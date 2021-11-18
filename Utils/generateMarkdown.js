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
  ## Setup/Installation
   ${data.setup}
  ## Technology Used
   ${data.technologyused}
   * First item
  * Second item
  * Third item
  * Fourth item
  ## Known Bugs
   ${data.knownbugs}
  ## Support
   ${data.support}
  ## Contribution
   ${data.contributor}
   1. First item
  2. Second item
  3. Third item
  4. Fourth item
  ### Liscense
   ${data.liscense}
  


`;
}

module.exports = generateMarkdown;
