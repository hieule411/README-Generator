function generateMarkdown(data) {
  return `# ${data.title}
  ![License](https://img.shields.io/badge/License-MIT-blue-$(data.license))

 # Description
${data.description}

# Table of Contents
* [License](#license)
* [Usage](#usage)
* [Installation](#installation)
* [Contribution](#contribution)
* [Testing](#testing)
* [Questions](#questions)

## License
${data.license}

## Usage
${data.usage}

## Installation
${data.instructions}

## Contribution 
${data.contribution}

## Testing
${data.test}

## Questions?
Contact me directly for any questions${data.questions}; Email: ${data.email}.
`;
}

module.exports = generateMarkdown;
