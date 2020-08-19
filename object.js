// Objects
// one of the JavaScript's Data Types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object

//  object = { key : value };

// 1. Literals and Properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const teddy = { name: 'teddy', age: 22 };
print(teddy);

// with JavaScript Magic (dynamically typed language)
// can add properties later
teddy.hasJob = true;
console.log(teddy.hasJob);

// can delete properties later
delete teddy.hasJob;
console.log(teddy.hasJob);

// 2. Computed Properties
// key should be always string
console.log(teddy.name);
console.log(teddy['name']);
teddy['hasJob'] = true;
console.log(teddy.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(teddy, 'name');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = new Person('teddy', 22);
console.log(person4);

// 4. Constructor Function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator : property existence check (key in obj)
console.log('name' in teddy);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in teddy){
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }
for(value of array){
    console.log(value);
}

// 7. Fun Cloning
// Object.assign(dest, [obj1, obj2, obj3....])
const user = { name: 'teddy', age: 22 };
const user2 = user;
user2.name = 'mansoo';
console.log(user.name); // mansoo

// how to copy object
// old way
const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);