const inquirer = require("inquirer");

const fs = require("fs");

const util = require("util");

const generatorMarkdown = require('./util/generateMarkdown');

// array of questions
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "What is the project about? Give a detailed description of your project?",
    name: "Description"
}, {
    type: "input",
    message: "Table of Contents.",
    name: "Table of Contents"
}, {
    type: "input",
    message: "What does the user need to install to run this app (ie...dependencies)?",
    name: "Installation"
}, {
    type: "input",
    message: "Provide instructions on how to use app",
    name: "Usage"
}, {
    type: "input",
    message: "What liscence is being used?",
    name: "License"
}, {
    type: "input",
    message: "Who contributed to this project?:",
    name: "Contributing"
}, {
    type: "input",
    message: "What commands are needed to test this app?",
    name: "Testing"
}, {
    type: "input",
    message: "Contact info for any questions.",
    name: "Questions"
}, {
    type: 'input',
    message: 'What is your Github username?',
    name: 'Username'
}, {
    type: 'input',
    message: 'What is your email address?',
    name: 'Email'
},

]


// function call to initialize program
questions()
// getting user answers 
.then(answers => {
    return generatePage(answers);
})

// function to initialize program
function init() {
    return inquirer.prompt(questions);
}

// function call to initialize program
init()
.then(data => {
    console.log('README is complete!');
    return writeToFile('README.md', generateMarkdown(data))
})