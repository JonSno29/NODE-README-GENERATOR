// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'Title',
    message: 'What is the title of your project?'
},{
    type: 'input',
    name: 'Description',
    message: 'Summary of your project',
},{
    type: 'input',
    name: 'Table Of Contents',
    message: 'Table Of Contents?',
},{
    type: 'input',
    name: 'Installation',
    message: 'What did you use to make this project work?',
},{
    type: 'input',
    name: 'Usage',
    message: 'What are the steps to use this application?',
},{
    type: 'input',
    name: 'Licenses',
    message: 'What licenses did you use?',
},{
    type: 'input',
    name: 'Contributing',
    message: 'Who contributed to this project?',
},{
    type: 'input',
    name: 'Tests',
    message: 'How did you test your application?',
},{
    type: 'input',
    name: 'GitHub',
    message: 'Links to repo and/or live webpage please',
},{
    type: 'input',
    name: 'Contact For Questions',
    message: 'Please enter your e-mail',

}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
    console.log(data)
    err ? console.log(err) : console.log("README.md has successfully been generated!");
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
