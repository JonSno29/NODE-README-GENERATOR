// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licensePicked = data.license;
  
  let licenseBadge = "";

  if (licensePicked === "MIT") {
    licenseBadge =
     "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    return licenseBadge;
  }
  if (licensePicked === "Apache") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      return licenseBadge;
  }
  if (licensePicked === "Boost") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      return licenseBadge;
  }
  if (licensePicked === 'None') {
    return licenseBadge;
  }

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string


function renderLicenseSection(data) {
  const licensePicked = data.license;
 
  if(licensePicked === 'None') {
    return "";
 
  } else {
    return `*
    ${renderLicenseBadge(data)}`;
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

 const renderLicenseTableOfContents = (data) => {
  const licensePicked = data.license;
 
  if(licensePicked === 'None') {
    return "";
 
  } else {
    return "* [license](#license)";
  }
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
# DESCRIPTION:
  ${data.description}
# TABLE OF CONTENTS:
  * [installation](#installation)
  * [usage](#usage)
  * [contributions](#contributions)
  * [test](#test)
  * [questions](#questions)
  * [contact](#contact)
${renderLicenseTableOfContents(data)}
# INSTALLATION:
  ${data.installation}
# USAGE:
  ${data.usage}        
# LICENSE:
  ${renderLicenseSection(data)}
# CONTRIBUTIONS:
  ${data.contributions}
# TEST:
  ${data.test}
# QUESTIONS:
  https://github.com/${data.github}/${data.title}
  
  ${data.contact}@gmail.com
  `;
}


module.exports = generateMarkdown;

