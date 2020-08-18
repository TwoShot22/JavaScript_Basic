// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello(){
    console.log('Hello');
}

printHello();

function log(message){
    console.log(message);
}

log('Hello with Parameter');

// 2. Parameters
// premitive parameters : passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}

const teddy = { name: 'teddy' };
changeName(teddy);
console.log(teddy);

// 3. Default Parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}

showMessage('Hi!');

// 4. Rest Parameters (added in ES6)
function printAll(...args){
    // for(let i = 0; i < args.length; i++){
    //     console.log(args[i]);
    // }

    // for (const arg of args){
    //     console.log(arg);
    // }

    args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'teddy');

// 5. Local Scope
let globalMessage = 'global'; // global variable
function printMessage(){
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    printAnother();

    function printAnother(){
        console.log(message);
        let childMessage = 'helloooo';
        console.log(childMessage);
    }
}
printMessage();

// 6. Return a value
function sum(a, b){
    return a + b;
}

const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Earty return, early exit
// bad
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic...
    }
}

// good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }

    // long upgrade logic...
}


// First-Class Function
// Functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returend by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function() { // anonymous function
    console.log('print'); 
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'teddy'){
        printYes();
    } else{
        printNo();
    }
}

// anonymous function
const printYes = function(){
    console.log('Yes!');
}

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print(){
    console.log('No');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('teddy', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function(){
    console.log('simplePrint!');
}

const simpleFunction = () => console.log('simpleFunction');
const add = (a, b) => a + b;
const simpleMultipy = (a, b) => {
    // do something
    return a * b;
}

// IIFE : Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();