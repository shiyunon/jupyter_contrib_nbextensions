import { createServer } from 'http';
import antlr4 from 'antlr4';
const { CommonTokenStream, InputStream } = antlr4;
import gramLexer from './gramLexer.js';
import gramParser from './gramParser.js';
import HtmlQCListener from './HtmlQCListener.js';

createServer((req, res) => {
   
   res.writeHead(200, {
       'Content-Type': 'text/html',        
   });

   res.write('<html><head><meta charset="UTF-8"/></head><body>');
   res.write('Function Definition Input:<input type="text" name="input" id="input"></input>');
   res.write('<script>var mystr = document.getElementByID("input");</script>');
   

   //res.write('<button type="button" id="myBtn">Try it</button>');

   res.write('<button type="button" id="myBtn" onclick = "() => {alert(22)}">Try it</button>', 'utf8', () => {
     final();
   });


   function final () {
    var input = mystr;
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
   
   res.write('</body></html>');
   
   res.end();

}).listen(1337);


// public static void main(String[] args) {
//     try {
//         ANTLRInputStream input = "XX g[a] f[b];\nmatt;\niSWAP h[c];\nRy g[d];";    

//         var chars = new InputStream(input, true)   
//         var lexer = new gramLexer(chars);
//         var tokens  = new CommonTokenStream(lexer);
//         var parser = new gramParser(tokens);
      
//         parser.buildParseTrees = true;   
//         var tree = parser.line();   
//         var html_qc = new HtmlQCListener(res);
//         antlr4.tree.ParseTreeWalker.DEFAULT.walk(html_qc, tree);
//         // Start parsing
//         parser.program(); 
//     } catch (IOException e) {
//         e.printStackTrace();
//     }
// }
