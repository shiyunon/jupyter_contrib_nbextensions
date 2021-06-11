define([
    './new/antlr4/CommonTokenStream',
    './new/antlr4/InputStream',
    './new/gramLexer',
    './new/gramParser',
    './new/HtmlQCListener'
], function(
    CommonTokenStream,
    InputStream,
    gramLexer,
    gramParser,
    HtmlQCListener
) {


// function lol() {
    // import promptSync from 'prompt-sync';
    // //import { createServer } from 'http';
    // import antlr4 from 'new/antlr4';
    //const { CommonTokenStream, InputStream } = antlr4;
    // import gramLexer from './new/gramLexer.js';
    // import gramParser from './new/gramParser.js';
    // import HtmlQCListener from './new/HtmlQCListener.js';
    const prompt = promptSync();
    
    
    var input = prompt('Input: ');
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
    //return str;

    
});