'use strict';
// Object-Oriented Programming
// Class
// - Template
// - Declare Once
// - No Data in

// Object
// - Instance of a Class
// - Created Many Times
// - Data in

// JavaScript Classes
// - Introduced in ES6
// - Syntactical sugar over prototype-based inheritance

// 1. Class Declarations
class Person{
    // Constructor
    constructor(name, age){
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const teddy = new Person('teddy', 22);
console.log(teddy.name, teddy.age);
teddy.speak();

// 2. Getter and Setter
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        // if (value < 0){
        //     throw Error('age can not be negative');
        // }
        // this._age = value;

        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static Properties and Methods
class Article {
    static publisher = 'Teddy Kim';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
console.log(Article.publisher);

// 5. Inheritance
// a way for one class to extend another class
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    getArea(){ // Override
        super.draw();
        return (this.width * this.height) / 2;
    }

    toString(){ // Object Class Override
        return `this triangle has ${this.color} color`
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(30, 30, 'red');
triangle.draw();

// 6. Class Checking : instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());