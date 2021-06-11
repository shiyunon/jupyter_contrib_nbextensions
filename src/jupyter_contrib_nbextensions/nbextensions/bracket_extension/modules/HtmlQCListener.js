//import antlr4 from 'antlr4';
import gramLexer from './gramLexer.js';
import gramParser from './gramParser.js';
import gramListener  from './gramListener.js';

export default class HtmlQCListener extends gramListener {    
    constructor() {
        super();
        this.arr = [];
       // this.Res = res;
        this.gate_dictionary = {
            "XX": ["ionQ"],
            "Rx": ["Rigetti"],
            "Ry": ["ionQ", "Rigetti"],
            "Rz": ["Rigetti"],
            "Cz": ["Rigetti"],
            "iSWAP": ["Rigetti"]
        }
    }
    
    // enterLine1(ctx) {          
    //     this.Res.write("<strong>");    
    // }
    
    exitLine1(ctx) {
        var gate = ctx.GATE().getText();
       // var arr = [];
        if(gate in this.gate_dictionary){
            var hardwares = this.gate_dictionary[gate];
           // this.Res.write('Can run ' + gate + ' on ');
            ///////////////////////////////////////////////////////////////
            // console.log('Can run ' + gate + ' on ');
            var str1 = "Can run " + gate + " on ";
            //this.arr.push("Can run " + gate + " on ")

            ////////////////////////////////////////////////////////////////
            var myarr = [str1];
            for(var i = 0; i < hardwares.length; i++){
                if(i < hardwares.length - 1)
                    myarr.push(hardwares[i] + ', ');
                else
                    myarr.push(hardwares[i] + ' hardware.');
            }
            var final_str = myarr.join(" ");
            this.arr.push(final_str);

            // this.Res.write('<br />');
        }
        //console.log(this.arr[0]);
        //console.log(arr[1]);
        // this.Res.write('<br />');
        // if(Object.prototype.toString.call(ctx.QUBIT()) == "[object Array]"){
        //     // Multiple qubits provided
        //     for(var i=0; i < ctx.QUBIT().length; i++) {
        //         this.Res.write(ctx.QUBIT()[i].getText());
        //     }
        // }
        // else
        //     this.Res.write(ctx.QUBIT().getText());

        // this.Res.write("</strong> ");
    }
}
