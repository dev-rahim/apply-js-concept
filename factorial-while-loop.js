// function getFactorialrial( num ) {
//     let factorial = 1;
//     let i = 1;
//     while ( i <= num ) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial
// }

// const myFactorial = getFactorialrial( 6 );
// console.log( 'Fctorial is= ', myFactorial );

// while loop reverse 

function getFactorial( num ) {
    let factorial = 1;
    let i = num;
    while ( i > 0 ) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
let myFactorial = getFactorial( 7 );
console.log( 'Factorial is= ', myFactorial );