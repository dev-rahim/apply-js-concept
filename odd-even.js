function oddEven( number ) {
    if ( number % 2 == 0 ) {
        console.log( '' + number + ' is Even' );
    } else {
        console.log( number + ' is Odd' );
    }
}

oddEven( 10 );

function isEven( number ) {
    if ( number % 2 == 0 ) {
        return true;
    }
    return false;
}

const myNumber = 1250;
var ismyNumberEven = isEven( myNumber );
console.log( ismyNumberEven );

function isOdd( number ) {
    if ( number % 2 != 0 ) {
        return true;
    }
    return false;
}
const herNumber = 13501;
isHerNumberOdd = isOdd( herNumber );
console.log( isHerNumberOdd );