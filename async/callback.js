'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting : var, function declaration

console.log('1');
setTimeout(function(){
    console.log('2');
}, 1000); // Browser API
console.log('3');

// Synchronous Callback
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous Callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell Example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                id === 'teddy' && password === 'amanda' ||
                id === 'coder' && password === 'next'
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()  => {
            if(user === 'teddy'){
                onSuccess({ name: 'teddy', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user => {
    userStorage.getRoles(
        user, 
        userWithRole => {
            alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
        },
        error => {
            console.log(error);
        }
    );
}, (error) => {
    console.log(error);
});