const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const engineerArray = [];
const internArray = [];
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
            console.log(newManager)
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
askQuestion()