// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None')
  return ` `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None')
  return `## License\n This project is under the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({project, description, installation, usage, credits, license, contributing, tests, questions}) {
  return `
  # ${project}
  ${renderLicenseBadge (license)}
## Description

${description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}


## Usage
${usage}

${renderLicenseSection(license)}

## Credits
${credits}



## Contributing

${contributing}


## Tests

${tests}


## Questions

${questions}


  `

;
}

module.exports = generateMarkdown;
