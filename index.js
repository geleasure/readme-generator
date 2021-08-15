// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    // Project Name 
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter the project name!')
                return false;
            }
        }
    },
    // Project Description 
    {
        type: 'input',
        name: 'description',
        message: 'What is the description for your project?',
        validate: descInput => {
            if(descInput) {
                return true;
            } else {
                console.log('Please enter a description!')
                return false;
            }
        }
    },
    // Used Languages and Tools 
    {
        type: 'checkbox',
        name: 'usedLanguagesTools',
        message: 'Select the languages/tools used in the project',
        choices: [
            'HTML',
            'CSS', 
            'Javascript', 
            'Java', 
            'Python', 
            'Ruby', 
            'Node.js', 
            'React', 
            'jQuery', 
            'AngularJS',
        ]
    },