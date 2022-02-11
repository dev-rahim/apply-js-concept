function getFactorialrial( num ) {
    let factorial = 1;
    for ( let i = 1; i <= num; i++ ) {
        factorial = factorial * i;
    }
    return factorial;
}


let firstFactrial = getFactorialrial( 7 );
console.log( 'Factorial is = ', firstFactrial );

let secondFactrial = getFactorialrial( 20 );
console.log( 'Factorial is = ', secondFactrial );

