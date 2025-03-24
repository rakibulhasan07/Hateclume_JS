//1. if statement
if (4 < 5) {
    console.log('Yeah I will be excecuted!');
}

// or,

let myName = 'Rakib';
if (myName === 'Rakib') {
    console.log('You are allowed!');
}


let myName1 = 'sakib';
if (myName1 === 'Rkib') {
    console.log('You are allowed!');
}


var myAge = 20;
if(9 < 20) {
    console.log('Good to go');
}

if(myAge <= 20) {
    console.log('You are adult!');
}

if(myAge < 20) {
    console.log('You are not adult!');
}


// if... else Statement
var age = 21;
if( age > 25) {
    console.log('Now You are Adult!');
}   else {
    console.log('No you are not aged enough to be an Adult!');
}

// if... else if Statement

let whatDay = 'sunday';
if(whatDay === 'Friday') {
    console.log('It is closed today');
} else if(whatDay === 'Thursday') {
    console.log('It is partially closed');
} else if (whatDay === 'Saturday') {
    console.log('Some office are closed today');

} else {
    console.log('it normal working day today');
}
