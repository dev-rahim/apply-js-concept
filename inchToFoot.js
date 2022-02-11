// Inch to Feet/Foot 
function inchToFeet( inches ) {
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var foot = inchToFeet( myInches );
console.log( 'My inches  to feet', foot );

var dadiInches = 144;
var foot = inchToFeet( dadiInches );
console.log( 'Dadi inches to feet', foot );

var naniInches = 156;
var foot = inchToFeet( naniInches );
console.log( 'Nani iches to feet', foot );


// mile to km 
function mileToKm( mile ) {
    var km = mile * 1.60934;
    return km;
}

var marathon = mileToKm( 26.2 );
console.log( 'Marathon in km= ', marathon );