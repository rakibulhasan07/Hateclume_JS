// let a = 10;
// console.log(window.a)


// // execution face
// first()
// function first() {
//     console.log('Hellow ')
// }


// let welcome = 'Hello World!'
// console.log(welcome);

// Execution Stack:
let name = 'Rakib';
function first() {
    let welcome = 'Hello ';
    second();
    console.log(welcome + name);
}
function second() {
    let welcome2 = 'Hi ';
    third();
    console.log(welcome2 + name);
}
function third() {
   let welcome3 = 'hey ';
    console.log(welcome3 + name);
}
first();


// let name = 'Rakib';
// function first() {
//     let welcome = 'Hello ';
//     second();
//     console.log(welcome  + name)
// }

// function second() {
//     let welcome2 = 'Hi! ';

//     third();
//     console.log(welcome2 + name)

// }

// function third() {
//     let welcome3 = 'hey ';
//     console.log(welcome3 + name)
// }

// first();