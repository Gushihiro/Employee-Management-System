const inquirer = require('inquirer');
const fs = require('fs')
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const engineerArray = [];
const internArray = [];
const managerArray = [];
const engineerCardArray = [];
const internCardArray = [];
let generateManager;


function askQuestion() {
        inquirer.prompt([
            {
                name: "question",
                type: "input",
                message: "Welcome to Gushihiro Management Systems. Who is the manager of this team?"
            },
            {
                name: "questionID",
                type: "input",
                message: "What is the manager's id?"
            },
            {
                name: "questionEmail",
                type: "input",
                message: "What is the manager's email?"
            },
            {
                name: "questionOffice",
                type: "input",
                message: "What is the manager's office number?"
            }
        ]).then(answers => {
            const newManager = new Manager(answers.question, answers.questionID, answers.questionEmail, answers.questionOffice)
            managerArray.push(newManager)
            generateManager = `
            <card>
            <div class ="card-header">
                <h2>${managerArray[0].name}</h2>
                <h3>${managerArray[0].role}</h3>
            </div>
            <div class = "card-body">
                <ul>
                    <li>ID: ${managerArray[0].id}</li>
                    <li>Email: ${managerArray[0].email}</li>
                    <li>Office Number: ${managerArray[0].officeNumber}</li>
                </ul>
            </div>
        </card>
            `
        console.log(generateManager)
            mainMenu()
        })   
}

function mainMenu() {
    inquirer.prompt([
        {
            name: "questionMain",
            type: "list",
            message: "Welcome to Gushihiro Management Systems.",
            choices: ["Add an Engineer", "Add an Intern", "Finish Setup"]
        }
    ]).then(answers => {
        switch (answers.questionMain) {
            case "Add an Engineer":
                addEngineer();
                break;
            
            case "Add an Intern":
                addIntern();
                break;

            default:
                console.log("gg no re")
                generateEngineer();
                generateIntern();
                generateTeam = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>My Team Profile</title>
                    <link rel="stylesheet" href="./dist/style.css">
                </head>
                <body>
                    <header>
                        <h1>My Team</h1>
                    </header>
                    <section>
                    ${generateManager}
                    ${engineerCardArray.join("")}
                    ${internCardArray.join("")}
                    </section>
                </body>
                </html>
            `
                fs.writeFile('index.html', generateTeam, (err) => {
                    if (err) {
                        throw err
                    }
                })
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            name: "engineerName",
            type: "input",
            message: "What is the engineer's name?"
        },
        {
            name: "engineerID",
            type: "input",
            message: "What is the engineer's id?"
        },
        {
            name: "engineerEmail",
            type: "input",
            message: "What is the engineer's email?"
        },
        {
            name: "engineerGithub",
            type: "input",
            message: "What is the engineer's github?"
        }
    ]).then(answers => {
        const newEngineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub)
        engineerArray.push(newEngineer);
        console.log(engineerArray)
        mainMenu()
    })
}

function generateEngineer() {
    for (let i = 0; i < engineerArray.length; i++) {
        const engineerCard = `
        <card>
        <div class ="card-header">
            <h2>${engineerArray[i].name}</h2>
            <h3>${engineerArray[i].role}</h3>
        </div>
        <div class = "card-body">
            <ul>
                <li>ID: ${engineerArray[i].id}</li>
                <li>Email: ${engineerArray[i].email}</li>
                <li>Github: <a href="http://github.com/${engineerArray[i].github}">${engineerArray[i].github}</a></li>
            </ul>
        </div>
    </card>
        `
    engineerCardArray.push(engineerCard)
    }
}

function addIntern() {
    inquirer.prompt([
        {
            name: "internName",
            type: "input",
            message: "What is the intern's name?"
        },
        {
            name: "internID",
            type: "input",
            message: "What is the intern's id?"
        },
        {
            name: "internEmail",
            type: "input",
            message: "What is the intern's email?"
        },
        {
            name: "internSchool",
            type: "input",
            message: "What is the intern's school?"
        }
    ]).then(answers => {
        const newIntern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
        internArray.push(newIntern);
        console.log(internArray)
        mainMenu()
    })
}

function generateIntern() {
    for (let i = 0; i < internArray.length; i++) {
        const internCard = `
        <card>
        <div class ="card-header">
            <h2>${internArray[i].name}</h2>
            <h3>${internArray[i].role}</h3>
        </div>
        <div class = "card-body">
            <ul>
                <li>ID: ${internArray[i].id}</li>
                <li>Email: ${internArray[i].email}</li>
                <li>Office Number: ${internArray[i].school}</li>
            </ul>
        </div>
    </card>
        `
    internCardArray.push(internCard)
    }
}
askQuestion()