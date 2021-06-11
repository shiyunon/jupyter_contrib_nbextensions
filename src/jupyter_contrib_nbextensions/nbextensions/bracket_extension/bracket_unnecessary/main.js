define([
    'base/js/namespace',
    'require'
   
  


 
], function(Jupyter, requirejs){
    

    // Run on start
    function load_ipython_extension() {
        console.log("Hello world");
        requirejs(['./new/antlr4'], function() {
            //ping.call();
        });

    }
    //
    return {
        load_ipython_extension: load_ipython_extension
    };
 

    
});





