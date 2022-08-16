// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const createReadme = ({ projectTitle, description, languages }) =>
//readme skeleton here 
`
# ${projectTitle}

## 02 Advanced CSS: Portfolio

${description}

## ${languages}:

* Webpage header with heading text.
* Navigation bar with navigation buttons that shade when hovered and jump to respective sections when pressed.
* Introductory biography for prospective employers to learn more about myself, as well as my capabilities as a developer.
* Thumbnail clickable previews of previous projects were created to showcase past work and abilities
* CSS elements were created in order for previous work thumbnails to stack for viewing on narrower screens.
* Contact methods were added.
* Used semantic HTML elements.
* Created comments throughout the CSS style sheet to make future edits and/or navigation easier. 

## Deployed application: (https://kentshaffer.github.io/module-2-challenge/)

![image screenshot of navigation bar and biography section of deployed application on desktop size](/Assets/images/module-2-challenge-desktop-1.png)

![image screenshot of project card section of deployed application on desktop size](/Assets/images/module-2-challenge-desktop-2.png)

![image screenshot of contact section and footer of deployed application on desktop size](/Assets/images/module-2-challenge-desktop-3.png) 

![image screenshot of header, nav, and bio of deployed application on smartphone size](/Assets/images/module-2-challenge-mobile-1.png) 

![image screenshot of project card section of deployed application on smartphone size](/Assets/images/module-2-challenge-mobile-2.png) 

![image screenshot of header, bio and top of project card section of deployed application on tablet size](/Assets/images/module-2-challenge-tablet-1.png) 
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
      message: 'What languages did you use?',
      name: 'languages',
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
