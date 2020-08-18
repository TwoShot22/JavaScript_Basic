// 1. String Concatenation
console.log('my'+' cat');
console.log('1' + 2);
console.log("teddy's \nbook");

// 2. Numeric Operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(1 / 1);
console.log(5 % 2);
console.log(2 ** 3);

// 3. Increment and decrement Operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment Operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison Operators
console.log(10 < 6);
console.log(10 > 6);
console.log(10 <= 6);
console.log(10 >= 6);

// 6. Logical Operators : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null){
//     nullableObject.something;
// }

function check(){
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('ohio');
    }
    
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const teddy1 = { name: 'teddy' };
const teddy2 = { name: 'teddy' };
const teddy3 = teddy1;
console.log(teddy1 == teddy2);
console.log(teddy1 === teddy2);
console.log(teddy1 === teddy3);

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional Operators : if
// if, else if, else
const name = 'teddy';
if (name === 'teddy'){
    console.log('Welcome, Teddy!');
} else if (name === 'coder'){
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary Operator : ?
// condition ? value1 : value2;
console.log(name === 'teddy' ? 'yes' : 'no');

// 10. Switch Statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'Chrome';
switch(browser){
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
        console.log('God');
        break;
    case 'Firefox':
        console.log('not bad');
        break;
    default:
        console.log('same all');
        break;
}

// 11. Loops
// while Loop, while the condition is truthy,
// body code is executed
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition
do {
    console.log(`do while: ${i}`);
    i--;
} while(i > 0);

// for loop, for (begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i--){
    // inline variable declaration
    console.log(`inline variable for : ${i}`);
}

// nested loop (not good for cpu)
for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// 1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++){
    if (i % 2 == 0){
        continue;
    }
    console.log(`1. ${i}`);
}

// 2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++){
    if (i > 8){
        break;
    }
    console.log(`2. ${i}`);
}