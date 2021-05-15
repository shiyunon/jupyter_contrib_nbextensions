define([
    'base/js/namespace',
    'jquery',
    'require',
    'base/js/events',
    'base/js/utils',
    'services/config',
    'codemirror/lib/codemirror'
], function(Jupyter, $, requirejs, events, configmod, utils, CodeMirror, ){
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

    // alert(cm.getValue()); 
    // alert(cm.getTokenAt(pos).className);
    //var myStr = "Hello World";
    //alert(myStr);
    //alert("hello")
    //alert("This circuit can be instantiated on:\n Rigetti \n Local noise simulator \n ionQ");
     
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Getting the text from a selected Jupyter Notebook cell
    var cell_index = Jupyter.notebook.get_selected_index();
    var cell_content = Jupyter.notebook.get_cell(cell_index);
    var cell_text = String(cell_content.get_text());
    // alert(cell_text); * commented out for week2 task


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

    // the code below extracts the first word of code of a cell and then saves this word in the vriable firstword
    // function getFirstWord(str) {
    //     let space_Index = str.indexOf(' ');
    //     return space_Index === -1 ? str : str.substr(0, space_Index);
    // };
    var firstword = line_0_array[zero_indent];

    // function removeEmptyLine(text) {
    //      return text.replace("\n", '');
    // }

    if (firstword=='def') {
        //var line_array = [];        
        var line_array = cell_text.split('\n');
        // removes line_number+1 number of elements starting from the first
        //removeEmptyLine(cell_text);


        line_array.splice(0,line_number+1);
        // var string_length = line_array[0].length;
        // Now we find where the function ends by indentation considerations
        ////////////////////////////////////////////////////////////////////////////
        // modifying line_array
        // var index = 0;

        // while (true) {
        //     var line_i = line_array_with_empty_str[i];
        //     var line_i_array = line_i.split(" ");
        //     var j = 0;
        //     var string_length = line_array_with_empty_str[i].length;
        //     while (line_i_array[j]=="") {
        //         j = j + 1;
        //     }
        //     if (j!=string_length) {
        //         line_array[index] = line_array_with_empty_str[i];
        //         index = index + 1;
        //     }
        //     // Number of lines below the def is given by line_array.length
        //     if (line_array.length == i + 1) {
        //         break;
        //     }
        //     i = i + 1;
        // }
        

        // var i = 0;
        // var k = 0;
        // var line_array = [];
        // while (i<line_array_with_empty_str.length) {
        //     var current_string = line_array_with_empty_str[i];
        //     var string_length = current_string.length;
        //     var j = 0;
        //     while (j<string_length) {
        //         if (current_string[j]!="") {
        //             line_array[k] = line_array_with_empty_str[i];
        //             k = k + 1;  
        //             break;                
        //         } else {
        //             j = j + 1;
        //         }   
        //     }
        //     i = i + 1;
        // }
        ////////////////////////////////////////////////////////////////////////////
        
       

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
        var final_func_body = new_body_2.join('\n'); 

    } else {
        var final_func_body = "There must be a function in the line";
    }
    alert(final_func_body);

    //alert(cell_lines[pos.line]);
    //alert(pos.line);
    
   // alert(line_array[0]);
    
    
    }   
    // Add Toolbar button
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
    return {
        load_ipython_extension: load_ipython_extension
    };
    // var braket_extension = function () {

    //     // console.log("hihi");
    //     // this.cell = cell;
    //     // this.editor = cell.code_mirror;
    //     var conf_sect;
    //     if (Jupyter.notebook) {
    //         // we're in notebook view
    //         conf_sect = Jupyter.notebook.config;
    //     }
    //     else if (Jupyter.editor) {
    //         // we're in file-editor view
    //         conf_sect = new configmod.ConfigSection('notebook', {base_url: Jupyter.editor.base_url});
    //         conf_sect.load();
    //     }
    //     else {
    //         // we're some other view like dashboard, terminal, etc, so bail now
    //     return;
    //     }

    //     conf_sect.loaded
    //     .then(function () { update_params(conf_sect.data); })
    //     .then(on_config_loaded);
    // };

    // return {
    //     load_jupyter_extension : braket_extension,
    //     load_ipython_extension : braket_extension
    // };


});