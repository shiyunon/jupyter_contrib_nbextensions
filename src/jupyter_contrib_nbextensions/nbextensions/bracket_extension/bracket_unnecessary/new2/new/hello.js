function hello() {
    bello();
    console.log("Hello");
    return 23;
}
// define([
//     './mytest'
//     // './gramParser',
//     // './HtmlQCListener'
// ], function(
//     mytest
//     // gramParser,
//     // HtmlQCListener
// ) {
//     // 'use strict';

//    // const { CommonTokenStream, InputStream } = antlr4
//    //mytest;

//     function hello() {
//         mytest.bello();
//         console.log("Hello");
//         return 23;
//     }

//     //return {get_hardware: GetCompatibleHardware};
// });


// import antlr4 from 'antlr4';
// const { CommonTokenStream, InputStream } = antlr4;
// import gramLexer from './gramLexer.js';
// import gramParser from './gramParser.js';
// import HtmlQCListener from './HtmlQCListener.js';


   

// function hello() {
//     var input = "XX g[a] f[b];\nmatt;\niSWAP h[c];\nRy g[d];";
//     var chars = new InputStream(input, true)   
//     var lexer = new gramLexer(chars);
//     var tokens  = new CommonTokenStream(lexer);
//     var parser = new gramParser(tokens);
          
//     parser.buildParseTrees = true;   
//     var tree = parser.line();   
//     var html_qc = new HtmlQCListener();
//     //antlr4.tree.ParseTreeWalker.DEFAULT.walk(html_qc, tree);
//     var str = html_qc.arr.join('\n');
//     console.log(str);
//     return str;
// }
// module.exports = { hello };
