const inquirer = require('inquirer');
const fs = require('fs');

const createReadme = ({ projectTitle, subtitle, description, area1, area2, area3, area4, area5, appLink, screenshot, screenshotDescription, installation, usage, credits, badges, contDev, tests, license }) =>

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

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## Badges

${badges}

## Continuing Development

${contDev}

## Tests

${tests}

---

© ${license}

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
      message: '1/5 what is an area covered in your application?',
      name: 'area1',
    },
    {
      type: 'input',
      message: '2/5 what is another area covered in your application?',
      name: 'area2',
    },
    {
      type: 'input',
      message: '3/5 what is another area covered in your application?',
      name: 'area3',
    },
    {
      type: 'input',
      message: '4/5 what is another area covered in your application?',
      name: 'area4',
    },
    {
      type: 'input',
      message: '5/5 what is another area covered in your application?',
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
    {
      type: 'input',
      message: 'Add installation instructions',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Add usage instructions',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Add any relevant credits',
      name: 'credits',
    },
    {
      type: 'input',
      message: 'Information about earned badges',
      name: 'badges',
    },
    {
      type: 'input',
      message: 'Include instructions for future development',
      name: 'contDev',
    },
    {
      type: 'input',
      message: 'Show code tests',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'License information',
      name: 'license',
    },
  ])
  .then((answers) => {
    const readmeContent = createReadme(answers);

    fs.writeFile('newREADME.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created your custom README.md!')
    );
  })
