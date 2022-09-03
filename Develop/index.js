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
    // {
    //   type: 'input',
    //   message: 'What is the title of your project?',
    //   name: 'projectTitle',
    // },
    // {
    //   type: 'input',
    //   message: 'What is the subtitle of your project?',
    //   name: 'subtitle',
    // },
    // {
    //   type: 'input',
    //   message: 'Write a brief description of your project',
    //   name: 'description',
    // },
    // {
    //   type: 'input',
    //   message: '1/5 what is an area covered in your application?',
    //   name: 'area1',
    // },
    // {
    //   type: 'input',
    //   message: '2/5 what is another area covered in your application?',
    //   name: 'area2',
    // },
    // {
    //   type: 'input',
    //   message: '3/5 what is another area covered in your application?',
    //   name: 'area3',
    // },
    // {
    //   type: 'input',
    //   message: '4/5 what is another area covered in your application?',
    //   name: 'area4',
    // },
    // {
    //   type: 'input',
    //   message: '5/5 what is another area covered in your application?',
    //   name: 'area5',
    // },
    // {
    //   type: 'input',
    //   message: 'Add the link to your deployed application',
    //   name: 'appLink',
    // },
    // {
    //   type: 'input',
    //   message: 'Add a screenshot of the finished application',
    //   name: 'screenshot',
    // },
    // {
    //   type: 'input',
    //   message: 'screenshot description (accessibility)',
    //   name: 'screenshotDescription',
    // },
    // {
    //   type: 'input',
    //   message: 'Add installation instructions',
    //   name: 'installation',
    // },
    // {
    //   type: 'input',
    //   message: 'Add usage instructions',
    //   name: 'usage',
    // },
    // {
    //   type: 'input',
    //   message: 'Add any relevant credits',
    //   name: 'credits',
    // },
    // {
    //   type: 'input',
    //   message: 'Information about earned badges',
    //   name: 'badges',
    // },
    // {
    //   type: 'input',
    //   message: 'Include instructions for future development',
    //   name: 'contDev',
    // },
    // {
    //   type: 'input',
    //   message: 'Show code tests',
    //   name: 'tests',
    // },
    {
      type: 'list',
      message: 'License information',
      name: 'license',
      choices: ['Apache', 'Boost', 'Eclipse', 'IBM', 'ISC', 'MIT', 'Mozilla', 'SIL', 'Unlicense', 'WTFPL', 'Zlib'],
    },
  ])
  .then((answers) => {        
    if (answers.license === 'Apache') {
    answers.license = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (answers.license === 'Boost') {
    answers.license = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    } else if (answers.license === 'Eclipse') {
    answers.license = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    } else if (answers.license === 'IBM') {
    answers.license = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
    } else if (answers.license === 'ISC') {
    answers.license = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    } else if (answers.license === 'MIT') {
    answers.license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (answers.license === 'Mozilla') {
    answers.license = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    } else if (answers.license === 'SIL') {
    answers.license = '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)';
    } else if (answers.license === 'Unlicense') {
    answers.license = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    } else if (answers.license === 'WTFPL') {
    answers.license = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
    } else {
    answers.license = '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
    }

    const readmeContent = createReadme(answers);
    
    fs.writeFile('newREADME.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created your custom README.md!')
    );
  })
