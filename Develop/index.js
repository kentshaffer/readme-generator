// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const createReadme = ({ projectTitle, subtitle, description, area1, area2, area3, area4, area5, appLink, screenshot, screenshotDescription }) =>
//readme skeleton here 
`
# ${projectTitle}

## ${subtitle}

${description}

## Areas Covered:

* ${area1}
* ${area2}
* ${area3}
* ${area4}
* ${area5}

## Deployed application: (${appLink})

![${screenshotDescription}](${screenshot})

`;

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: 'What is the subtitle of your project?',
      name: 'subtitle',
    },
    {
      type: 'input',
      message: 'Write a brief description of your project',
      name: 'description',
    },
    {
      type: 'input',
      message: '1/5 what is one area covered in your application?',
      name: 'area1',
    },
    {
      type: 'input',
      message: '2/5 what is one area covered in your application?',
      name: 'area2',
    },
    {
      type: 'input',
      message: '3/5 what is one area covered in your application?',
      name: 'area3',
    },
    {
      type: 'input',
      message: '4/5 what is one area covered in your application?',
      name: 'area4',
    },
    {
      type: 'input',
      message: '5/5 what is one area covered in your application?',
      name: 'area5',
    },
    {
      type: 'input',
      message: 'Add the link to your deployed application',
      name: 'appLink',
    },
    {
      type: 'input',
      message: 'Add a screenshot of the finished application',
      name: 'screenshot',
    },
    {
      type: 'input',
      message: 'screenshot description (accessibility)',
      name: 'screenshotDescription',
    },
  ])
  .then((answers) => {
    const readmeContent = createReadme(answers);

    fs.writeFile('testREADME.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created your custom README.md!')
    );
  })









// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
