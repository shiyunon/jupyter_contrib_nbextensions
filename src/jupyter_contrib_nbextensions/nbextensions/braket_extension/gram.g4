grammar gram;
 
// Parser Rules

line : (line2)* (line1)* (line1* line2)* (line1 line2*)* (line2)*;

line2 : WORD | ';' | '\r\n'|'\n'|'\r';

line1 : gate (qubit)* ;

gate : GATE;

qubit : WORD (LEFTBRACE WORD RIGHTBRACE)*;

ignored : . ;

// Lexer Rules

GATE : 'XX' | 'Ry' | 'iSWAP' | 'CZ' | 'Rx' | 'Rz' ;

WORD : ('a'..'z')+;

LEFTBRACE : '[';

RIGHTBRACE : ']';

WHITESPACE : ( '\t' | ' ' | '\r' | '\n'| '\u000C' )+ -> skip ;

Unknown : . -> skip ; // or -> channel(HIDDEN) ;



//line : QC DOTSTR gate OPBRACKET QC CLBRACKET;

//line : line1*;





//Unknown : ('a'..'z' | ';' | '(' | ')' | '.' | '[' | ']')+ -> skip ; // or -> channel(HIDDEN) ;
//Unknown : ('\u0021'..'\u00FF')+ -> skip ; // or -> channel(HIDDEN) ;

//QC : ('a'..'z')+ ;

//DOTSTR : '.';

// ... (WORD (LEFTBRACE NUM RIGHTBRACE)*)*



