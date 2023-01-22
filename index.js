const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown");

function validateField(name, input) {
    if (!input && input.length <= 0) {
        return `${name} is required`
    }
    return true;
}

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'What is the project title?',
        validate: (input) => validateField('Title', input)
    },
    {
        name: 'description',
        message: 'What is the project description?',
        validate: (input) => validateField('Description', input)
    },
    {
        name: 'installationInstructions',
        message: 'What is the project\'s installation instructions?',
        validate: (input) => validateField('Installation Instructions', input)
    },
    {
        name: 'usageInformation',
        message: 'What is the project usage information?',
        validate: (input) => validateField('Usage Information', input)
    },
    {
        name: 'contributionGuidelines',
        message: 'What is the project contribution guidelines?',
        validate: (input) => validateField('Contribution Guidelines', input)
    },
    {
        name: 'testInstructions',
        message: 'What is the project test instructions?',
        validate: (input) => validateField('Test Instructions', input)
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the project license?',
        choices: ['MIT', 'Apache License 2.0', 'BSD 3-Clause License', 'GNU GPLv3'],
    },
    {
        name: 'username',
        message: 'What is your GitHub username?',
        validate: (input) => validateField('Username', input)
    },
    {
        name: 'email',
        message: 'What is your contact email?',
        validate: (input) => {
            if (!input)
                return "Email is required"
            if (!/\S+@\S+\.\S+/.test(input))
                return "Email format is not valid"
            return true;
        }
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        // In case of a error throw err.
        if (err) throw err;
        console.log(`${fileName} generated.`)
    })
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile("README_GENERATED.md", generateMarkdown(answers))
        })
        .catch((error) => {
            console.log("There was an error when attempting to render the markdown file.")
            console.error(error)
        });  
}

// Function call to initialize app
init();
