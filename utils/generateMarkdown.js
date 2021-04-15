// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return `[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)`;
  } else if (license == 'APACHE 2.0') {
    return `![Hex.pm](https://img.shields.io/hexpm/l/apa?style=flat) `;
  } else if (license == 'GPL 3.0') {
    return `[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)`;
  } else if (license == 'BSD 3') {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return `[Link to License](https://choosealicense.com/licenses/mit/)`;
  } else if (license == 'APACHE 2.0') {
    return `[Link to License](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (license == 'GPL 3.0') {
    return `[Link to License](https://choosealicense.com/licenses/gpl-3.0/)`;
  } else if (license == 'BSD 3') {
    return `[Link to License](https://opensource.org/licenses/BSD-3-Clause)`;
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'MIT') {

  } else if (license == 'APACHE 2.0') {

  } else if (license == 'GPL 3.0') {

  } else if (license == 'BSD 3') {

  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, install, usage, contribution, tests, username, email, licenses} = data;

  return `# ${title}
  ${renderLicenseBadge(licenses)}
  ## Table of Contents
  
  1. [Description](##Description)
  2. [Installation](##Installation)
  3. [Usage](##Usage)
  4. [Contributing](##Contributing)
  5. [Tests](##Tests)
  6. [License](##License)
  7. [Contact](##Contact)
  
  ---
  ## Description
  ${description}
  
  ## Installation
  ${install}
  
  ## Usage
  ${usage}
  
  ## Contributing
  ${contribution}
  
  ## Tests
  ${tests}
  
  ## License



  
  ## Contact
  For any questions contact GitHub user [${username}](https://github.com/${username}) or at this email: ${email}
`;
}

module.exports = generateMarkdown;
