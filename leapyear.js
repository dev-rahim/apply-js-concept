function isLeapYear( year ) {
    if ( ( year % 100 == 0 ) ? ( year % 400 == 0 ) : ( year % 4 == 0 ) ) {
        return true
    }
    else {
        return false
    }
}

const myYear = 2020;
const isMyYearLeapYear = isLeapYear( myYear );
console.log( 'this is Leap Year ', isMyYearLeapYear );

const yourYear = 2100;
const isyourYearLeapYear = isLeapYear( yourYear );
console.log( 'your year is leap year', isyourYearLeapYear );