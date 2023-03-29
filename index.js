const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message:
        "Hello! Let's get started. Please tell me, What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a description for your project.",
    },
    {
      type: "input",
      name: "installation",
      message: "Please enter instructions on how to install your project.",
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter usage information for your project.",
    },
    {
      type: "input",
      name: "contributions",
      message:
        "Please enter guidelines on how someone can contribute to your project.",
    },
    {
      type: "input",
      name: "tests",
      message:
        "Please describe how to run the automated tests that are included with the project.",
    },
    {
      type: "list",
      name: "license",
      choices: [
        "MIT License",
        "Apache License 2.0",
        "GNU General Public License (GPL)",
        "BSD 3-Clause License",
        "The Unlicense",
      ],
    },
    { type: "input", name: "github", message: "Please enter your github URL." },
    {
      type: "input",
      name: "email",
      message: "Please enter your contact email.",
    },
    {
      type: "input",
      name: "toolURL",
      message: "Please enter the URL to your tool.",
    },
    {
      type: "checkbox",
      name: "languages",
      message:
        "Let's talk about the technologies that were used to create this project. Please choose all languages this project is built with.",
      choices: [
        "HTML",
        "CSS",
        "Javascript",
        "Java",
        "Python",
        "SQL",
        "C++",
        "C#",
        "PHP",
        "Perl",
      ],
    },
    {
      type: "checkbox",
      name: "frameworks",
      message: "What about framworks? Choose any frameworks you might've used.",
      choices: [
        "Bootstrap",
        "Bulma",
        "Tailwind",
        "React",
        "Angular",
        "Materialize",
        "Django",
        "Laravel",
        ".NET Framework",
        "Catalyst",
        "Mojolicious",
      ],
    },
    {
      type: "checkbox",
      name: "libraries",
      message: "Any libraries? I know the creator of this app LOVES jQuery!",
      choices: ["jQuery", "Day.js", "Inquirer", "D3.js"],
    },
    {
      type: "input",
      name: "apis",
      message: "Lastly, APIs? List the APIs here:",
    },
    {
      type: "input",
      name: "other",
      message: "List any other technologies used.",
    },
    {
      type: "input",
      name: "collaborators",
      message:
        "Who contributed to this project? List their githubs using a ',' as the separator and include 'https://' IE. https://github.com/person1, https://github.com/person2",
    },
  ])
  .then((response) => {
    console.log(response);
    const languagesString = response.languages.join(",  ");
    const frameworksString = response.frameworks.join(",  ");
    const librariesString = response.libraries.join(",  ");
    const readMeFile = `# ${response.title} 

${getLicenseBadge(response.license)}

## Description

<strong>Introducing ${response.title}!</strong>
<br>
${response.description}<br>
    
## Table Of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)
- [Tool URL](#toolurl)
- [Technologies](#technologies)
- [Collaborators](#collaborators)
- [License](#license)

## Installation <a id="installation"></a>

${response.installation}

## Usage <a id="usage"></a>

${response.usage}

## Contributions <a id="contributions"></a>

${response.contributions}

## Tests <a id="tests"></a>

${response.tests}

## Questions <a id="questions"></a>

If you have any questions about this project, please contact the project owner by visiting their GitHub profile at [${
      response.github
    }](https://:${response.github}) or by emailing them at [${
      response.email
    }](mailto:${response.email}).

## Tool URL <a id="toolurl"></a>
    
[${response.toolURL}](https://${response.toolURL})
<br>
<br>
    
## Technologies <a id="technologies"></a>
    
The following technologies were used to develop ${response.title}:<br>
<br>
<strong>Languages</strong>
    
- ${languagesString}
    
<strong>Frameworks</strong>
    
- ${frameworksString}
    
<strong>Libraries</strong>
    
- ${librariesString}
    
<strong>APIs</strong>

${response.apis}

<strong>Other</strong>

- ${response.other}
<br>
    
## Collaborators <a id="collaborators"></a>
    
${response.collaborators}
    
## License <a id="license"></a>

This project is licensed under the ${response.license}.

${getLicenseNotice(response.license)}
   
`;

    function getLicenseBadge(license) {
      switch (license) {
        case "MIT License":
          return "[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)";
        case "Apache License 2.0":
          return "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case "GNU General Public License (GPL)":
          return "[![License: GNU General Public License (GPL)](https://img.shields.io/badge/License-GNU%20General%20Public%20License%20(GPL)-blue)](https://opensource.org/license/gpl-3-0/)";
        case "BSD 3-Clause License":
          return "[![License: BSD 3-Clause License (GPL)](https://img.shields.io/badge/License-BSD%203--Clause%20License-blue)](https://opensource.org/license/bsd-3-clause/)";
        case "The Unlicense":
          return "[![License: The Unlicense](https://img.shields.io/badge/License-The%20Unlicense-blue)](https://opensource.org/license/unlicense/)";
        default:
          return "";
      }
    }

    function getLicenseNotice(license) {
      switch (license) {
        case "MIT License":
          return "MIT License Notice: A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
        case "Apache License 2.0":
          return "Apache License 2.0 Notice: A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
        case "GNU General Public License (GPL)":
          return "GNU General Public License (GPL) Notice: Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.";
        case "BSD 3-Clause License":
          return "3-Clause BSD License Notice: Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met: 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. 3. Neither the name of the <organization> nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission. THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.";
        case "The Unlicense":
          return "The Unlicense Notice: A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.";
        default:
          return "";
      }
    }

    fs.writeFile("./My Generated README/README.md", readMeFile, (err) => {
      if (err) throw err;
      console.log("Success! README file has been generated!");
    });
  });
