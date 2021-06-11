define([
    ///'./antlr4/src/antlr4',
    './gramLexer',
    './gramParser',
    './HtmlQCListener'
], function(
    ///antlr4,
    gramLexer,
    gramParser,
    HtmlQCListener
) {
    'use strict';

   // const { CommonTokenStream, InputStream } = antlr4

    function GetCompatibleHardware() {

        var input_text = "XX g[a] f[b];\nmatt;\niSWAP h[c];\nRy g[d];";
        var chars = new InputStream(input_text, true);
        var lexer = new gramLexer(chars);
        var tokens  = new CommonTokenStream(lexer);
        var parser = new gramParser(tokens);
            
        parser.buildParseTrees = true;   
        var tree = parser.line();   
        var html_qc = new HtmlQCListener(res);
        var str = html_qc.arr.join('\n');
        console.log(str);
   
        //antlr4.tree.ParseTreeWalker.DEFAULT.walk(qc_listener, tree);

    }

    //return {get_hardware: GetCompatibleHardware};
});
