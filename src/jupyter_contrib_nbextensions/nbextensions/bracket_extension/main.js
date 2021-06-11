define([
    'base/js/namespace',
    'jquery',
    'require',
    'base/js/events',
    'base/js/utils',
    'services/config',
    'codemirror/lib/codemirror'
    //'./new/text.js'


 
], function(Jupyter, $, requirejs, events, configmod, utils, CodeMirror){
    
    //var antlr4 = require('./new/antlr4/index');
    // var gramLexer = require('./new/gramLexer');
    // var gramParser = require('./new/gramParser');
    // var HtmlQCListener = require('./new/HtmlQCListener');

   // var child_process = require('child_process');
    "use strict";
    var hotkey_params = {
        check_qpu : 'Alt-b',
        init_delay : 1000
    };

    var update_params = function (config_data) {
        for (var key in hotkey_params) {
            if (config_data.hasOwnProperty(key)) {
                hotkey_params[key] = config_data[key];
            }
        }
    };
    
   var on_config_loaded = function () {
        if (Jupyter.notebook !== undefined) {
            // register actions with ActionHandler instance
            var prefix = 'auto';
            var name = 'qpu-detection';
            var action = {
                icon: 'fa-comment-o',
                help    : 'qpu compatibility detection',
                help_index : 'bq',
                id : 'qpu_detection',
                handler : showTooltip
            };
            var action_full_name = Jupyter.keyboard_manager.actions.register(action, name, prefix);

            // define keyboard shortcuts
            var edit_mode_shortcuts = {};
            edit_mode_shortcuts[hotkey_params.check_qpu] = action_full_name;

            // register keyboard shortcuts with keyboard_manager
            Jupyter.notebook.keyboard_manager.edit_shortcuts.add_shortcuts(edit_mode_shortcuts);
            Jupyter.notebook.keyboard_manager.command_shortcuts.add_shortcuts(edit_mode_shortcuts);
        }
        else {
            // we're in edit view
            var extraKeys = Jupyter.editor.codemirror.getOption('extraKeys');
            extraKeys[hotkey_params.check_qpu] = showTooltip;
            CodeMirror.normalizeKeyMap(extraKeys);
            console.log('[braket extension] binding hotkey', hotkey_params.check_qpu);
            Jupyter.editor.codemirror.setOption('extraKeys', extraKeys);
        }
    };
    
    
 
   function showTooltip () {
    var cm; 
    var pos = {line: 0, ch: 0, xRel: 0}; 
    if (Jupyter.notebook !== undefined) {
        cm = Jupyter.notebook.get_selected_cell().code_mirror;
        if (Jupyter.notebook.mode === 'edit') {
            pos = cm.getCursor();
        }   
    }   
    else {
        cm = Jupyter.editor.codemirror;
        pos = cm.getCursor();
    }   

    
     
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Getting the text from a selected Jupyter Notebook cell
    var cell_index = Jupyter.notebook.get_selected_index();
    var cell_content = Jupyter.notebook.get_cell(cell_index);
    var cell_text = String(cell_content.get_text());
    // alert(cell_text); * commented out for week2 task

    // week 2 task



    //////////////////////////////////////////////////////////////////////////////
    // Getting FUNCTION LINE content
    var cell = Jupyter.notebook.get_selected_cell();
    var cm = cell.code_mirror;
    var pos = cm.getCursor();
    var cell_lines = cm.getValue().split('\n');
    var line_number = pos.line;
    //////////////////////////////////////////////////////////////////////////////
    // cell_lines[pos.line] gives the line content
    // First we get the first indentation
    var line_0 = cell_lines[pos.line];
    var line_0_array = line_0.split(" ");
    var i = 0;
    while (line_0_array[i]=="") {
        i = i + 1;
    }
    var zero_indent = i; 

  
    var firstword = line_0_array[zero_indent];



    if (firstword=='def') {
     
        var line_array = cell_text.split('\n');
       


        line_array.splice(0,line_number+1);

        
       

        // First we get the first indentation
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        function stripComments(s) {
            var re1 = /^\s+|\s+$/g;  // Strip leading and trailing spaces
            var re2 = /\s*[#;].+$/g; // Strip everything after # or ; to the end of the line, including preceding spaces
            return s.replace(re1,'').replace(re2,'');
        }
        var line_1 = line_array[0];
        var line_1_array = line_1.split(" ");



        var i = 0;
        while (line_1_array[i]=="") {
            i = i + 1;
        }
        var initial_indent = i; 
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        // Instead of getting the first indent like that way we can 
        // fo zero_indent+4 which is what I redefine here. This makes the code block above useless...but we still keep it
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        var initial_indent = zero_indent+4;
        // Now we want to loop over all the lines
        var i = 0;
        var body_array = [];
        var temp_array = [];

        while (true) {
            var line_i = line_array[i];
            var line_i_array = line_i.split(" ");
            var j = 0;
            while (line_i_array[j]=="") {
                j = j + 1;
            }
            var current_indent = j;
            if (current_indent<initial_indent) {
                if (current_indent!=line_i_array.length) {
                    break;
                }
            } else {
                body_array[i] = line_array[i]; 
                temp_array = body_array[i].split("#");
                body_array[i] = temp_array[0];
                
            }
            // Number of lines below the def is given by line_array.length
            if (line_array.length == i + 1) {
                break;
            }
            i = i + 1;
        }

        var func_body = body_array.join('\n');
        // The code block below removes block comments
        var block_comm_1_arr = func_body.split('\'\'\'');
        var arr_length = block_comm_1_arr.length;
        var i = 0;
        var e = 0;
        var new_body = []
        while (e<arr_length) {
            new_body[i] = block_comm_1_arr[e];
            e = e + 2;
            i = i + 1;
        }
        var temp_body_array = new_body.join('\n');

        // The code block below removes block comments
        var block_comm_2_arr = temp_body_array.split('\"\"\"');
        var arr_length = block_comm_2_arr.length;
        var i = 0;
        var e = 0;
        var new_body_2 = []
        while (e<arr_length) {
            new_body_2[i] = block_comm_2_arr[e];
            e = e + 2;
            i = i + 1;
        }
        var main_func_body = new_body_2.join('\n');
        var interm_func_body = main_func_body.split('\n');
        var final_func_body = interm_func_body.join(" ");
        var display_string = "The functionbody you copied is:\n" + final_func_body;
        //document.execCommand("copy");
        function copyToClipboard(text) {
            var input = document.body.appendChild(document.createElement("input"));
            input.value = text;
            input.focus();
            input.select();
            document.execCommand('copy');
            input.parentNode.removeChild(input);
        }
        copyToClipboard(final_func_body);


      

    } else {
        var final_func_body = "There must be a function in the line";
        var display_string = final_func_body;
    }
    console.log(display_string);


    /// RUN THE CODE IN TEXT.JS HERE
    // with the input as display string
    //text("Rx anc");

    alert(display_string);









    // requirejs(["child_process"]);
    // requirejs(["./chill"], function (cp) {
      

    // });

    // const hello = require(['./new/hello']);

    // require(['common'], function () {
    //     require(['app/app1','app/app1jq']);
    // });
    // hello.hello();
    /////////////////////////////////////////////////////////////////
    // requirejs(['./new/antlr4'], function(){

    // });
    //requirejs(['./new/antlr4/index', './mymodule'], function () {
    // requirejs(['./new/antlr4/index'], function () {
    // //     requirejs(['./new/antlr4/BufferedTokenStream', './new/antlr4/polyfills/codepointat', './new/antlr4/polyfills/fromcodepoint']);
    // //     requirejs(['./new/antlr4/Token']);
    // //     requirejs(['./new/gramLexer', './new/gramParser', './new/HtmlQCListener', './new/antlr4/CommonTokenStream',
    // // './new/antlr4/InputStream']);
    //     const myModule = require('./mymodule');
    //     let val = myModule.hello();
    //     console.log(val);
    //     console.log(final_func_body);

    //     var input_text = "XX g[a] f[b];\nmatt;\niSWAP h[c];\nRy g[d];";
    //     var chars = InputStream(input_text, true);
    //     var lexer = gramLexer(chars);
    //     var tokens  = CommonTokenStream(lexer);
    //     var parser = gramParser(tokens);

            
    //     parser.buildParseTrees = true;   
    //    // var tree = parser.line();   
    //     var html_qc = HtmlQCListener(res);
    //     var str = html_qc.arr.join('\n');
    //     console.log(str);
    //     //hello();
    //     // NEED TO KNOW WHAT TO DO WITH THIS
    // });
    
    // var objShell = new ActiveXObject("Shell.Application");
    // objShell.ShellExecute("cmd.exe");

    //var child_process = require(['child_process']);
    //requirejs(["./new/dojo/node"]);
    // require([ "./new/dojo/node!child_process" ], function(fs){
    //     // Utilise the "fs" module
    // $.get("../nbextensions/bracket_extension/sc.php").done(function(script, textStatus) {
    //      console.log("finished loading and running test.js. with a status of" + textStatus);
    //      //console.log(a);
    // //     console.log(wow);
    // });
    // $.get("../nbextensions/bracket_extension/chill.js", function(script, textStatus) {
    //     console.log("finished loading and running test.js. with a status of" + textStatus);

    // });
    
    // $.ajax({
    //     url: '../nbextensions/bracket_extension/sc.php',
    //     success: function(data) {
    //         console.log(data);
    //       console.log($('.result').html(data));
    //     }
    //   });
    // });
    /////////////////////////////////////////////////////////////

    // require(['child_process'], function (foo) {
    //     //foo is now loaded.
    // });
    // alert(final_func_body);

    

    // function execute(command) {
    //     const exec = requirejs('child_process').exec
      
    //     exec(command, (err, stdout, stderr) => {
    //       process.stdout.write(stdout)
    //     })
    // }
      
    // execute('echo "Hello World!"')


    ///////////////////////////////////////////////////////////////////////////////////////
    // TO-DO MODIFY IT AS TOMASSETTI
    /////////////////////////////////////////////////////////////////////////////////////
    // var antlr4 = require('./new/antlr4/index');
    // var gramLexer = require('./new/gramLexer');
    // var gramParser = require('./new/gramParser');
    // var HtmlQCListener = require('./new/HtmlQCListener');
    //antlr4

    // function GetCompatibleHardware() {

    //     var input_text = "XX g[a] f[b];\nmatt;\niSWAP h[c];\nRy g[d];";
    //     var chars = antlr4.InputStream(input_text, true);
    //     var lexer = gramLexer.gramLexer(chars);
    //     var tokens  = antlr4.CommonTokenStream(lexer);
    //     var parser = gramParser.gramParser(tokens);
            
    //     parser.buildParseTrees = true;   
    //     var tree = parser.line();   
    //     var html_qc = HtmlQCListener.HtmlQCListener(res);
    //     var str = html_qc.arr.join('\n');
    //     console.log(str);
   
    //     //antlr4.tree.ParseTreeWalker.DEFAULT.walk(qc_listener, tree);

    // }
   // GetCompatibleHardware();
    //////////////////////////////////////////AKAM ////////////////////////////////////////////////////////////////////


    //alert(cell_lines[pos.line]);
    //alert(pos.line);
    
   // alert(line_array[0]);





    

    
    
    } 
    
    var mybutton = function () {
        console.log();
        Jupyter.toolbar.add_buttons_group([
            Jupyter.keyboard_manager.actions.register ({
                'help': 'Add planet jupyter cell',
                'icon' : 'fa-paper-plane',
                'handler': showTooltip
            }, 'addplanetjupyter-cell', 'Planet Jupyter')
        ])
    }
    // Run on start
    function load_ipython_extension() {
        mybutton();
    }
    //
    return {
        load_ipython_extension: load_ipython_extension
    };
 

    
});





