//  for Statement

for ( let i = 0; i < 5; i++) {
    console.log('Go ' + i + ' Step')
}

//  do...while Statement

let num = 15;
do {
    console.log('Inside the loop, num is: ' + num);
    num += 1
} while (num < 10);

console.log('Outside the loop');

var nuM = 10;
do {
    console.log('Inside the loop, num is: ' + nuM);
    nuM += 1;
} while (nuM < 20)
    console.log('Outside the Loop');
// break Statement:
for (var i = 0; i < 10; i++) {
    if(i === 5) {
        break;
    }
    console.log(`i is now at: ` + i)
}
// continue
for (var i = 0; i < 10; i++) {
    if(i === 5) {
        console.log( i + 'is skipped')
        continue;
    }
    console.log(`i is now at: ` + i)
}