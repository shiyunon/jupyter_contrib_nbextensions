import antlr4 from 'antlr4';
import gramLexer from './gramLexer.js';
import gramParser from './gramParser.js';
import gramListener  from './gramListener.js';

export default class HtmlQCListener extends gramListener {    
    constructor(res) {
        super();
        this.Res = res;
        this.gate_dictionary = {
            "XX": ["ionQ"],
            "Rx": ["Rigetti"],
            "Ry": ["ionQ", "Rigetti"],
            "Rz": ["Rigetti"],
            "Cz": ["Rigetti"],
            "iSWAP": ["Rigetti"]
        }
    }
    
    enterLine1(ctx) {          
        this.Res.write("<strong>");    
    }
    
    exitLine1(ctx) {
        var gate = ctx.GATE().getText();
        if(gate in this.gate_dictionary){
            var hardwares = this.gate_dictionary[gate];
            this.Res.write('Can run ' + gate + ' on ');
            for(var i = 0; i < hardwares.length; i++){
                if(i < hardwares.length - 1)
                    this.Res.write(hardwares[i] + ', ');
                else
                    this.Res.write(hardwares[i] + ' hardware.');
            }
            this.Res.write('<br />');
        }
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
