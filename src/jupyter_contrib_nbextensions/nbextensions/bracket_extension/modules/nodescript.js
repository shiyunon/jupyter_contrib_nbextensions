import promptSync from 'prompt-sync';
import antlr4 from 'antlr4';
const { CommonTokenStream, InputStream } = antlr4;
import gramLexer from './gramLexer.js';
import gramParser from './gramParser.js';
import HtmlQCListener from './HtmlQCListener.js';
const prompt = promptSync();

function final () {
  var input = prompt('Input: ');
  //var input = "XX and Ry gates anc";
  //var input = document.getElementById("input");
  //var neww = final_func_body;
  var chars = new InputStream(input, true)   
  var lexer = new gramLexer(chars);
  var tokens  = new CommonTokenStream(lexer);
  var parser = new gramParser(tokens);
     
  parser.buildParseTrees = true;   
  var tree = parser.line();   
  var html_qc = new HtmlQCListener();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(html_qc, tree);
  var str = html_qc.arr.join('\n');
  console.log(str);
  return str;
}
//module.exports = final();
final();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //const result = prompt(message);
// // Random number from 1 - 10
// const numberToGuess = Math.floor(Math.random() * 10) + 1;
// // This variable is used to determine if the app should continue prompting the user for input
// let foundCorrectNumber = false;
 
// while (!foundCorrectNumber) {
//   // Get user input
//   let guess = prompt('Guess a number from 1 to 10: ');
//   // Convert the string input to a number
//   guess = Number(guess);
 
//   // Compare the guess to the secret answer and let the user know.
//   if (guess === numberToGuess) {
//     console.log('Congrats, you got it!');
//     foundCorrectNumber = true;
//   } else {
//     console.log('Sorry, guess again!');
//   }
// }