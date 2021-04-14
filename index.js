// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter Project Title',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter Project Description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter Project Installation Instructions',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Enter Project Usage Information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter Project Contribution Guidelines',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter Project Test Instructions',
        name: 'test-instructions',
    },
    {
        type: 'input',
        message: 'Enter GitHub Username to be contacted for any questions',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Enter Email Address to be contacted for any questions',
        name: 'email',
    },
    {
        type: 'checkbox',
        message: 'Choose licenses for this project',
        choices: ['choice1','choice2','choice3'],
        name: 'licenses',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data);
    });
}

// Function call to initialize app
init();
