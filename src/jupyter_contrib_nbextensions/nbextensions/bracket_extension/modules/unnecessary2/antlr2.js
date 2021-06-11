import { createServer } from 'http';
import antlr4 from 'antlr4';
const { CommonTokenStream, InputStream } = antlr4;
import gramLexer from './gramLexer.js';
import gramParser from './gramParser.js';
import HtmlQCListener from './HtmlQCListener.js';


   

   
var input = "XX g[a] f[b];\nmatt;\niSWAP h[c];\nRy g[d];";
var chars = new InputStream(input, true)   
var lexer = new gramLexer(chars);
var tokens  = new CommonTokenStream(lexer);
var parser = new gramParser(tokens);
      
parser.buildParseTrees = true;   
var tree = parser.line();   
var html_qc = new HtmlQCListener();
//antlr4.tree.ParseTreeWalker.DEFAULT.walk(html_qc, tree);
var str = html_qc.arr.join('\n');
console.log(str);