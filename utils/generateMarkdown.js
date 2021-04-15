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
  const {title, description, install, usage, contribution, tests, username, email, licenses} = data;

  return `# ${title}

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
  filler text
  
  ## Contact
  For any questions contact GitHub user [${username}](https://github.com/${username}) or at this email: ${email}
`;
}

module.exports = generateMarkdown;
