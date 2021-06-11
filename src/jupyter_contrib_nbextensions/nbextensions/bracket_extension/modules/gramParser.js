// Generated from gram.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import gramListener from './gramListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\b@\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0003\u0002\u0007\u0002\f\n\u0002\f\u0002",
    "\u000e\u0002\u000f\u000b\u0002\u0003\u0002\u0007\u0002\u0012\n\u0002",
    "\f\u0002\u000e\u0002\u0015\u000b\u0002\u0003\u0002\u0007\u0002\u0018",
    "\n\u0002\f\u0002\u000e\u0002\u001b\u000b\u0002\u0003\u0002\u0007\u0002",
    "\u001e\n\u0002\f\u0002\u000e\u0002!\u000b\u0002\u0003\u0002\u0003\u0002",
    "\u0007\u0002%\n\u0002\f\u0002\u000e\u0002(\u000b\u0002\u0007\u0002*",
    "\n\u0002\f\u0002\u000e\u0002-\u000b\u0002\u0003\u0002\u0007\u00020\n",
    "\u0002\f\u0002\u000e\u00023\u000b\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0007\u00049\n\u0004\f\u0004\u000e\u0004<\u000b\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0002\u0002\u0006\u0002\u0004\u0006",
    "\b\u0002\u0003\u0004\u0002\u0003\u0003\b\b\u0002C\u0002\r\u0003\u0002",
    "\u0002\u0002\u00044\u0003\u0002\u0002\u0002\u00066\u0003\u0002\u0002",
    "\u0002\b=\u0003\u0002\u0002\u0002\n\f\u0005\u0004\u0003\u0002\u000b",
    "\n\u0003\u0002\u0002\u0002\f\u000f\u0003\u0002\u0002\u0002\r\u000b\u0003",
    "\u0002\u0002\u0002\r\u000e\u0003\u0002\u0002\u0002\u000e\u0013\u0003",
    "\u0002\u0002\u0002\u000f\r\u0003\u0002\u0002\u0002\u0010\u0012\u0005",
    "\u0006\u0004\u0002\u0011\u0010\u0003\u0002\u0002\u0002\u0012\u0015\u0003",
    "\u0002\u0002\u0002\u0013\u0011\u0003\u0002\u0002\u0002\u0013\u0014\u0003",
    "\u0002\u0002\u0002\u0014\u001f\u0003\u0002\u0002\u0002\u0015\u0013\u0003",
    "\u0002\u0002\u0002\u0016\u0018\u0005\u0006\u0004\u0002\u0017\u0016\u0003",
    "\u0002\u0002\u0002\u0018\u001b\u0003\u0002\u0002\u0002\u0019\u0017\u0003",
    "\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a\u001c\u0003",
    "\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001c\u001e\u0005",
    "\u0004\u0003\u0002\u001d\u0019\u0003\u0002\u0002\u0002\u001e!\u0003",
    "\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002\u001f \u0003",
    "\u0002\u0002\u0002 +\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002",
    "\u0002\"&\u0005\u0006\u0004\u0002#%\u0005\u0004\u0003\u0002$#\u0003",
    "\u0002\u0002\u0002%(\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002\u0002",
    "&\'\u0003\u0002\u0002\u0002\'*\u0003\u0002\u0002\u0002(&\u0003\u0002",
    "\u0002\u0002)\"\u0003\u0002\u0002\u0002*-\u0003\u0002\u0002\u0002+)",
    "\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,1\u0003\u0002\u0002",
    "\u0002-+\u0003\u0002\u0002\u0002.0\u0005\u0004\u0003\u0002/.\u0003\u0002",
    "\u0002\u000203\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u000212\u0003",
    "\u0002\u0002\u00022\u0003\u0003\u0002\u0002\u000231\u0003\u0002\u0002",
    "\u000245\t\u0002\u0002\u00025\u0005\u0003\u0002\u0002\u00026:\u0007",
    "\u0004\u0002\u000279\u0007\u0005\u0002\u000287\u0003\u0002\u0002\u0002",
    "9<\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002",
    "\u0002;\u0007\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002=>\u000b",
    "\u0002\u0002\u0002>\t\u0003\u0002\u0002\u0002\n\r\u0013\u0019\u001f",
    "&+1:"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class gramParser extends antlr4.Parser {

    static grammarFileName = "gram.g4";
    static literalNames = [ null, "';'" ];
    static symbolicNames = [ null, null, "GATE", "QUBIT", "WHITESPACE", 
                             "Unknown", "WORD" ];
    static ruleNames = [ "line", "line2", "line1", "ignored" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = gramParser.ruleNames;
        this.literalNames = gramParser.literalNames;
        this.symbolicNames = gramParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, gramParser.RULE_line);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 8;
	                this.line2(); 
	            }
	            this.state = 13;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 17;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 14;
	                this.line1(); 
	            }
	            this.state = 19;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	        this.state = 29;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 23;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===gramParser.GATE) {
	                    this.state = 20;
	                    this.line1();
	                    this.state = 25;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 26;
	                this.line2(); 
	            }
	            this.state = 31;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===gramParser.GATE) {
	            this.state = 32;
	            this.line1();
	            this.state = 36;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 33;
	                    this.line2(); 
	                }
	                this.state = 38;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	            }

	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===gramParser.T__0 || _la===gramParser.WORD) {
	            this.state = 44;
	            this.line2();
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	line2() {
	    let localctx = new Line2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, gramParser.RULE_line2);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        _la = this._input.LA(1);
	        if(!(_la===gramParser.T__0 || _la===gramParser.WORD)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	line1() {
	    let localctx = new Line1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, gramParser.RULE_line1);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(gramParser.GATE);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===gramParser.QUBIT) {
	            this.state = 53;
	            this.match(gramParser.QUBIT);
	            this.state = 58;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ignored() {
	    let localctx = new IgnoredContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, gramParser.RULE_ignored);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.matchWildcard();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

gramParser.EOF = antlr4.Token.EOF;
gramParser.T__0 = 1;
gramParser.GATE = 2;
gramParser.QUBIT = 3;
gramParser.WHITESPACE = 4;
gramParser.Unknown = 5;
gramParser.WORD = 6;

gramParser.RULE_line = 0;
gramParser.RULE_line2 = 1;
gramParser.RULE_line1 = 2;
gramParser.RULE_ignored = 3;

class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramParser.RULE_line;
    }

	line2 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Line2Context);
	    } else {
	        return this.getTypedRuleContext(Line2Context,i);
	    }
	};

	line1 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Line1Context);
	    } else {
	        return this.getTypedRuleContext(Line1Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.exitLine(this);
		}
	}


}



class Line2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramParser.RULE_line2;
    }

	WORD() {
	    return this.getToken(gramParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.enterLine2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.exitLine2(this);
		}
	}


}



class Line1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramParser.RULE_line1;
    }

	GATE() {
	    return this.getToken(gramParser.GATE, 0);
	};

	QUBIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gramParser.QUBIT);
	    } else {
	        return this.getToken(gramParser.QUBIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.enterLine1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.exitLine1(this);
		}
	}


}



class IgnoredContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramParser.RULE_ignored;
    }


	enterRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.enterIgnored(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramListener ) {
	        listener.exitIgnored(this);
		}
	}


}




gramParser.LineContext = LineContext; 
gramParser.Line2Context = Line2Context; 
gramParser.Line1Context = Line1Context; 
gramParser.IgnoredContext = IgnoredContext; 
