// // Person Constructor
// function Person(firstName,lastName,dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);

// }


// // using prototype to put in a function in the constructor
// // this calculates age 
// Person.prototype.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime(); // this calculates current year - dob
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);// make sure to use absolute
// }
// //this returns firstname and lastname via proto
// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`
// }

// // What if the person gets married?
// Person.prototype.getsMarried = function(lastName){
// return this.lastName = lastName;
// }

// // var
// var olgash = new Person('Olgash','Fucktard','11-10-1994');


// // output
// console.log(olgash.getFullName());
// console.log(olgash);

// // activates marriage
// olgash.getsMarried('Fuckalot');

// console.log(olgash.getFullName());





// //person constructor
// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// //greeting
// Person.prototype.greeting = function () {
//     return `Hello There, ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('Allie','Lix');

// // console.log(person1.greeting());

// // CX constructor
// function Customer(firstName,lastName,phone,membership) {
//     Person.call(this, firstName,lastName);
//     this.phone = phone;
//     this.membership = membership;
// }

// // inherit the person proto methods
// Customer.prototype = Object.create(Person.prototype);

// // make customer.prototype return as Customer()
// Customer.prototype.constructor = Customer;

// // customer greeting 
// Customer.prototype.greeting = function(){
//     return `Hello, ${this.firstName} ${this.lastName}, Welcome to my website!`
// }

// // create a cx
// const cx1 = new Customer('Tom','Brady','555-555-5555','Black')

// // output
// console.log(cx1.greeting());
// console.log(cx1);




// // sets protos that you can use for object.create()
// const personProtos = {
//     greeting: function(){
//         return `Hello, ${this.firstName} ${this.lastName}`;// standard greeting
//     },
//     married: function(lastName){
//         return this.lastName = lastName; //chnages last name 
//     },
//     cxGreeting: function(){
//         return `Welcome to my website, ${this.firstName}!`; //different greeting if its a cx
//     }
// }


// // obj create example
// const mary = Object.create(personProtos);// passes protos to use
// mary.firstName = 'Mary';
// mary.lastName = 'Jensen'; // you can just add properties after creating the obj

// mary.married('Coles');// mary got married to a 'coles'

// // alternative obj create syntax ( has a second paramater )
// const brad = Object.create(personProtos,{
//     firstName: {value:'Brad'}, //use {value: x } to enter properties
//     lastName: {value:'Pitt'}
// });

// // output
// console.log(brad);




// // ES6 Classes

// class Person {

//     // you could just declare the constructor within the ES6 class
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(dob);
//     }

//    // you could just put a proto function without mentioning that its a proto 
//     greeting(){
//         return `Hello, ${this.firstName} ${this.lastName}`;
//     }

//     // can modify within too
//     married(lastName){
//         return this.lastName = lastName;
//     }

//     //Calculates age 
//     calculateAge(){
//             const diff = Date.now() - this.birthday.getTime(); // this calculates current year - dob
//             const ageDate = new Date(diff);
//             return Math.abs(ageDate.getUTCFullYear() - 1970);// make sure to use absolute
//     }

//     // static method
//     static addNumbers(x,y){
//     return x + y;
//     }
// }


// const gemma = new Person('Gemmarose', 'Pruneau','11-24-1994');

// gemma.married('Canlas');// gets married


// console.log(gemma);
// console.log(Person.addNumbers(1,1)); // static method requires class name then function



// ES6 Sub classes

class Person {
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello, ${this.firstName} ${this.lastName}`;
    }
}

// Customer as subclass to Person
class Customer extends Person {

    constructor(firstName,lastName,phone,membership) {
        super(firstName,lastName); //using super() borrows from main constructor

        this.phone = phone;
        this.membership = membership;
    }
  
    static getMembershipCost() {
        return 500;
    }
}

const jeremiah = new Customer('Jeremiah','Canlas','555-555-5555','Black')


console.log(jeremiah)
console.log(Customer.getMembershipCost());