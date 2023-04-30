const fs = require('fs');
const inquirer= require('inquirer') ;
const formas = require('./lib/shapes');


//questions 
const questions = [
    {
        type:'list',
        name:'forma',
        message:'pick the shape you would like',
        choices: ["triangle", "circle", "square"]
    },
    {
        type:'input',
        name:'formaColor',
        message:'what color would you like? (hex number or color name)',
    },
    {
        type:'input',
        name:'letra',
        message:'Please chose ONLY 3 letters',
    },
    {
        type:'input',
        name:'letraColor',
        message:'what color do you want your letters',
    },    
];    
 
// fs to make svg file
function writeToFile(data) { 
    fs.writeFile("coollogo.svg", data, function (err) {
        if (err) throw err;
        console.info("Awesome logo.svg created");
    } 
)};

// function for init
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const forma = createforma(data);
        const logo = forma.generateforma();
        writeToFile(logo);
    })
}

//initialize
init();