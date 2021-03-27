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
                handler : showFunctionText
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
            extraKeys[hotkey_params.check_qpu] = showFunctionText;
            CodeMirror.normalizeKeyMap(extraKeys);
            console.log('[braket extension] binding hotkey', hotkey_params.check_qpu);
            Jupyter.editor.codemirror.setOption('extraKeys', extraKeys);
        }
    };

    function showFunctionText () {
        var cell;
        var cm; 
        var cell_lines; 
        var pos;
        if (Jupyter.notebook !== undefined) {
            cell = Jupyter.notebook.get_selected_cell()
            cm = cell.code_mirror;
            if (Jupyter.notebook.mode === 'edit') {
                pos = cm.getCursor()
                cell_lines = cm.getValue().split('\n');
            }   
        }   
        else {
            cm = Jupyter.editor.codemirror;
            pos = cm.getCursor()
            cell_lines = cm.getValue().split('\n');
        }   

        
        alert(cell_lines[pos.line])  // shows current line
        // alert(pos.line)
        // alert(cell.config.mode)
        // var tokens = tokenize(cell_text)
        // alert(tokens)

        // cell_lines[pos.line]

    };

    var braket_extension = function () {
        var conf_sect;
        if (Jupyter.notebook) {
            // we're in notebook view
            conf_sect = Jupyter.notebook.config;
        }
        else if (Jupyter.editor) {
            // we're in file-editor view
            conf_sect = new configmod.ConfigSection('notebook', {base_url: Jupyter.editor.base_url});
            conf_sect.load();
        }
        else {
            // we're some other view like dashboard, terminal, etc, so bail now
        return;
        }

        conf_sect.loaded
        .then(function () { update_params(conf_sect.data); })
        .then(on_config_loaded);
    };

    return {
        load_jupyter_extension : braket_extension,
        load_ipython_extension : braket_extension
    };


});
