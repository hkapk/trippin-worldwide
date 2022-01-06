# Trippin Worldwide

## Description

Our Application is live: [Click this link to visit our site](https://trippin-worldwide.herokuapp.com/)

This application will provide a user the ability to journalize information about their travels such as description, start and end dates, city and country, activities, and cuisine as well as provide an opportunity to review/comment on other users' adventures. In addition, the most visited cities will be displayed via a map to help plan any future journeys.

The web application uses Node.js and Express.js to create a RESTful API, Handlebars.js as a templating engine, MySQL and Sequelize ORM for the database, dotenv and bcrypt for securing sensitive data, bootstrap/CSS for styling, AWS S3 Bucket for storage, and Google Maps Geocoding and JavaScript APIs for mapping locations visited within a map view.

## Table of Contents

[Description](#description) | [Installation](#installation) | [Project Requirements](#project-requirements) | [Presentation Requirements](#presentation-requirements) | [Grading Requirements](#grading-requirements) | [Contributing](#contributing) | [Tests](#tests) | [Questions](#questions)

## Installation

To install necessary dependencies into the node_modules folder, run the following command:

```
npm i
```

To install the application clone the following Github repository to your computer. Create a .env file in the root of your directory and add the following:

```
DB_NAME='travel_blog_db'
DB_USER='root'
DB_PW= '<your password>'
```

[back to top](#table-of-contents)

## Requirements

Requirements for this project use skills and technologies learned over the past six weeks (server-side JavaScript, RESTful APIs, databases, object-relational mapping, environment variables, templating, and authentication) as well as new technologies learned during the project (Google Maps API, AWS S3 Bucket Storage).

### Project Requirements:

- Use Node.js and Express.js to create a RESTful API.

- Use Handlebars.js as the templating engine.

- Use MySQL and the Sequelize ORM for the database.

- Have both GET and POST routes for retrieving and adding new data.

- Be deployed using Heroku (with data).

- Use at least one new library, package, or technology that we haven’t discussed.

- Have a polished UI.

- Be responsive.

- Be interactive (i.e., accept and respond to user input).

- Have a folder structure that meets the MVC paradigm.

- Include authentication (express-session and cookies).

- Protect API keys and sensitive information with environment variables.

- Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class/id naming conventions, indentation, quality comments, etc.).

- Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

- Add your project to the portfolio that you created in Module 2.

[back to top](#table-of-contents)

### Presentation Requirements

Give a 10-minute presentation on project, with about 7 minutes devoted to the presentation itself, followed by a 3-minute Question & Answer session. Use this Project Presentation Template (Links to an external site.) to address the following:

- Elevator pitch: A one-minute description of your application.

- Concept: What is your user story? What was your motivation for development?

- Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?

- Demo: Show your stuff!

- Directions for future development.

- Links to the deployed application and the GitHub repository.

[back to top](#table-of-contents)

### Grading Requirements

This project is graded based on the following criteria:

_Technical Acceptance Criteria: 25%_

Satisfies the following code requirements:

- Application uses a Node and Express back end and uses both GET and POST routes for retrieving and adding new data.

- Application has a folder structure that meets the MVC paradigm and uses Handlebars.js as the template engine.

- Application is backed by a MySQL database with a Sequelize ORM and protects API keys and sensitive information with environment variables.

- Application includes user authentication (express-session and cookies).

- Application uses at least one new library, package, or technology not covered in class.

_Concept 10%_

- Application should be a unique and novel idea.

- Your group should clearly and concisely articulate your project idea.

_Deployment: 20%_

- Application deployed at live URL on Heroku and loads with no errors.

- Application GitHub URL submitted.

- Portfolio at live URL submitted, featuring project.

_Repository Quality: 10%_

- Repository has a unique name.

- Repository follows best practices for file structure and naming conventions.

- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

- Repository contains multiple descriptive commit messages.

- Repository contains a quality README file with description, screenshot, and link to deployed application.

_Application Quality: 15%_

- Application user experience is intuitive and easy to navigate.

- Application user interface style is clean and polished.

- Application is responsive.

_Presentation 10%_

- Your group should present using Powerpoint or a similar presentation software.

- Every group member should speak during the presentation.

- Your presentation should follow the Project Presentation Template (Links to an external site.).

_Collaboration 10%_

- There are no major disparities in the number of GitHub contributions between group members.
- Due Date: You and your group members will work on this project over the course of the next two weeks.

- Project presentations will take place during the second virtual class on the week of the next module, Module 16.

- The project itself is due on the Sunday following group presentations.
- Each member of your group is required to submit the following for review:

  - The URL of the deployed application.

  - The URL of the GitHub repository, with a unique name and a README describing the project.

  - The URL of your portfolio, with your project added to it.

[back to top](#table-of-contents)

## Contributing

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./docs/code_of_conduct.md#top)

To help make community values explicit, and signal commitment to creating a welcoming and safe environment for everyone, the [Contributor Covenant](./docs/code_of_conduct.md) has been adopted.

[back to top](#table-of-contents)

## Tests

No tests created for this project.

[back to top](#table-of-contents)

## Questions

If you have any questions about the repo, open an issue or contact us directly at:

|       Name       |            Email            |                         GitHub                          |
| :--------------: | :-------------------------: | :-----------------------------------------------------: |
|  Kristin Gaito   |    kngurley25@gmail.com     |     [kngurley25](https://www.github.com/kngurley25)     |
|  Sam Davenport   |   samueldavenport@att.net   | [steadysamwise4](https://www.github.com/steadysamwise4) |
|     Raman TV     |     ramantv@outlook.com     |        [ramantv](https://www.github.com/ramantv)        |
|    Hank Kapka    |     hankkapka@gmail.com     |          [hkapk](https://www.github.com hkapk)          |
| Christine Baxter | christine.d.baxter@live.com |  [baxters4karma](https://www.github.com/baxters4karma)  |

[back to top](#table-of-contents)
