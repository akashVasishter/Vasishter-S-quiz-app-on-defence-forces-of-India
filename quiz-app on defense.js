const chalk = require('chalk')
const log = console.log;

var readlineSync = require('readline-sync');
var userName = readlineSync.question(chalk.bold.redBright("what is your name? "));
console.log(chalk.italic.yellowBright.underline("Hello "  + userName + " Welcome to VasishterS quiz on Defence forces of India"));
var score = 0;

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  
  if(userAnswer === answer){
    console.log(chalk.bold.blueBright(userName+" you answered: "+userAnswer+ " you are right!!"))
    score++

  }

  else{
    console.log(chalk.bold.red(userName+" you answered:"+userAnswer+ " you are wrong!"));
    score--
  }
console.log(chalk.bold.red("what you want to do ?"))
var userKey=prompt(chalk.green.inverse("press e to exit,enter key to continue!"))
if(userKey==='e')
{
fail;
}
   
}

var question = [{
  question:chalk.bold.blueBright("how many defence forces are there in India?\na.one\nb.two\nc.three\n\t"),
  answer:"c"
},

{
  question:chalk.bold.blueBright("choose the main forces?\na.indian army\nb.indian air force\nc.indian navy\nd.all the above\n\t"),
  answer:'d'
 
},

{
  question:chalk.bold.blueBright("what was the operation name held on 26/11 attack?\na.black tornado\nb.white tornado\nc.red tornado\n\t"),
  answer:'a'
},{

  question:chalk.bold.blueBright('what is the name of the special forces in indian army?\na.para special forces\nb.garud\nc.macros\n\t '),
  answer:'a'
},

{
  question:chalk.bold.blueBright('who is the  cds of india?\na.bipin rawat\nb.ramnath kovindh\nc.narendra modi\n\t '),
  answer:'a'
}
];

for(var i=0;i<question.length;i++)
{
  var currentQuestion = question[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log(chalk.bold.yellowBright.underline("yay your score is ",score));