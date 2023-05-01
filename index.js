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
 // function to create shape based on user input
function createforma(data) {
    if (data.shape == "circle") {
        return new formas.Circle(data.letra, data.letraColor, data.formaColor);
    } else if (data.forma == "triangle") {
        return new formas.Triangle(data.letra, data.letraColor, data.formaColor);
    } else if (data.forma == "square") {
        return new formas.Square(data.letra, data.letraColor, data.formaColor);
    }
};
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
        const formaa = createforma(data);
        const logo = formaa.generateforma();
        writeToFile(logo);
    })
}

//initialize
init();