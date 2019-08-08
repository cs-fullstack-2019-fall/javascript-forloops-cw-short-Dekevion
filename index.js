// exercise 1

for ( var i = -3; i < 9; i++) {
    console.log(i);
}

//  //exercise 2
for (var c = 0; c < 51; c = c +1) {
    if( c === 10) {
        console.log("Ten!!");
    } else {
        console.log(c);
    }
}

//exercise 3
var x = parseInt(prompt("Enter a number."));
var y = parseInt(prompt("Enter another number"));
for (var x = x; x < y + 1; x++ ) {
    console.log (x)
}