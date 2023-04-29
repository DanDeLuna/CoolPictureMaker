const fs = require('fs');
const inquirer= require('inquirer') ;
const //shape = ;


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
