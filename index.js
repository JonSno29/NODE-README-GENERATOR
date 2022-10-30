// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown.js")
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
},{
    type: 'input',
    name: 'github',
    message: 'Enter your github username',
},{
     type: 'input',
    name: 'description',
    message: 'Summary of your project',
},{
    type: 'input',
    name: 'tableofcontents',
    message: 'Table Of Contents, press enter',
},{
    type: 'input',
    name: 'installation',
    message: 'What did you use to make this project work?',
},{
    type: 'input',
    name: 'usage',
    message: 'What are the steps to use this application?',
},{
    type: 'list',
    name: 'license',
    message: 'What license did you use?',
    choices: ['None', 'MIT', 'Apache', 'Boost'],
    validate: (licenseInput) => {
        if (licenseInput)  {
          return true;
        } else {
          console.log("Please enter a license!");
          return false;
        } 
    }
},{
    type: 'input',
    name: 'contributions',
    message: 'Who contributed to this project?',
},{
    type: 'input',
    name: 'test',
    message: 'How did you test your application?',
},{
    type: 'input',
    name: 'contact',
    message: 'Please enter your google username',

}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
    console.log(data)
    err ? console.log(err) : console.log("README.md has successfully been generated!!!");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data))
        console.log(data.license);
    })
    
}

// Function call to initialize app
init();
