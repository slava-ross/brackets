module.exports = function check( str, bracketsConfig ) {
    let sourceArray = str.split( '' );
    let idx = 0;
    let isPair = false;
    while ( idx < sourceArray.length - 1 ) {
        let currBracket = sourceArray[ idx ];
        let nextBracket = sourceArray[ idx + 1 ];
        for ( let styleArray of bracketsConfig ) {
            if ( currBracket === styleArray[0] && nextBracket === styleArray[1] ) {
                sourceArray.splice( idx, 2 );
                isPair = true;
                break;
            }
        }
        if ( isPair ) {
            idx = 0;
            isPair = false;
        } else {
            idx++;
        }
    }
    return !( sourceArray.length );
}