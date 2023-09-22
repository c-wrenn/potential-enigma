const inquirer = require('inquier');
const fs = require('fs');
const index = require('..index.js');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge = " ";
  if (license === 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Modzilla Public License 2.0') {
    licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }else if (license === 'Apache 2.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }else if (license === 'GNU LGPLv3') {
    licenseBadge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  }else if (license === 'Boost Software License 1.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt) '
  }else if (license === 'The Unlicense') {
    licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  }else {
    licenseBadge = ' '
  }
  return licenseBadge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink = " ";
  if (license === 'MIT') {
    licenseLink = 'https://opensource.org/licenses/MIT'
  } else if (license === 'Modzilla Public License 2.0') {
    licenseLink = 'https://opensource.org/licenses/MPL-2.0'
  }else if (license === 'Apache 2.0') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0'
  }else if (license === 'GNU LGPLv3') {
    licenseLink = 'https://www.gnu.org/licenses/lgpl-3.0'
  }else if (license === 'Boost Software License 1.0') {
    licenseLink = 'https://www.boost.org/LICENSE_1_0.txt'
  }else if (license === 'The Unlicense') {
    licenseLink = 'http://unlicense.org/'
  } else {
    licenseLink = ' '
  }
  return licenseLink;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseSection = ''
  if(license === ' '){
    lincenseSection = ''
  } else {
licenseSection = 
`License: ${license}`
}
return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return 
  `# ${answers.Title}

  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
  ### ${renderLicenseLink(answer.license)}

        ## Table of Contents
      ###  * space creates list
      ###  * [Project Description](#Description)
      ###  * [Usage](#Usage)
      ###  * [Contributing](#Contributing)
      ###  * [Installation](#Installation)
      ###  * [License](#License)
      
        ## Description
        ### ${answers.Description}
      
        ## Usage
        ### ${answers.Usage}
      
        ## Installation
        ### ${answers.install}

        ## Contributions
        ### ${answers.contribution}

        ##Tests
        ### ${answers.test}
      
        ## Questions
        ### ${answers.email}
        
        ## License
        ### ${answers.gitusername}

        ##Questions:
        ### Please reach out if you have any questions
        ### Github: https://github.com/${answer.github}
        ### Email: ${answers.email}
  `;
}

module.exports = generateMarkdown;
