// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    case "BSD 3-Clause License":
      return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    case "GNU GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      default:
      return "";
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT"
    case "Apache License 2.0":
      return "https://opensource.org/licenses/Apache-2.0"
    case "BSD 3-Clause License":
      return "https://opensource.org/licenses/BSD-3-Clause"
    case "GNU GPLv3":
      return "https://www.gnu.org/licenses/gpl-3.0"
      default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
## License
  This application is covered under the [${license}](${renderLicenseLink(license)}) license.
`
  }

  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

# Table of contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)

## Description
${data.description}

## Installation
${data.installationInstructions}

## Usage
${data.usageInformation}

## Contributing
${data.contributionGuidelines}

## Tests
${data.testInstructions}
${renderLicenseSection(data.license)}

## Questions
[Github Profile](https://github.com/${data.username})

### Have a question?
[Contact Me](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
