grammar gram;
 
// Parser Rules


line : (line2)* (line1)* (line1* line2)* (line1 line2*)* (line2)*;

line2 : WORD | ';';

line1 : GATE (QUBIT)* ;

//line1 : gate (qubit)* ;
//gate : GATE;
//qubit : WORD (LEFTBRACE WORD RIGHTBRACE)*;

ignored : . ;


// Lexer Rules

//WORD        : ('a'..'z')+;
//LEFTBRACE   : '[';
//RIGHTBRACE  : ']';


fragment WORD        : ('a'..'z')+;
fragment LEFTBRACE   : '[';
fragment RIGHTBRACE  : ']';

GATE : 'XX' | 'Ry' | 'iSWAP' | 'CZ' | 'Rx' | 'Rz' ;
QUBIT : WORD LEFTBRACE WORD RIGHTBRACE;


WHITESPACE : ( '\t' | ' ' | '\r' | '\n'| '\u000C' )+ -> skip ;

Unknown : . -> skip ; // or -> channel(HIDDEN) ;




// ... (WORD (LEFTBRACE NUM RIGHTBRACE)*)*



