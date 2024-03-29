/*************
 JS Date
 ************/
 const day = new Date();
 console.log(day);

 
/**********
  date method 
 ***********/

// getTime method 
const dayTime = new Date();
const timeOfDay = dayTime.getTime();
console.log(timeOfDay);

// getFullYear method 
const dayYear = new Date();
const YearOfDay = dayYear.getFullYear();
console.log(YearOfDay);

// getMonth method 
const dayMonth = new Date();
const MonthOfDay = dayMonth.getMonth();
console.log(MonthOfDay);

// getDate method 
const dayDate = new Date();
const DateOfDay = dayDate.getDate();
console.log(DateOfDay);

// getDay method 
const dayDay = new Date();
const DayOfDay = dayDay.getDay();
console.log(DayOfDay);

/**********
 Js Math
 **********/
// Number to Interger 

// Math.round(x) {Returns x rounded to its nearest integer}
console.log(Math.round(5.3));

// Math.ceil(x) {Returns x rounded up to its nearest integer}
console.log(Math.ceil(5.5));

// Math.floor(x) {Returns x rounded down to its nearest integer} 
console.log(Math.floor(4.6));

// Math.trunc(x) {Returns the integer part of x} 
console.log(Math.trunc(4.2));

// Math.sign(x) {Returns the value positive or negative} 
console.log(Math.sign(-2));

// Math.pow(x,y) {Returns the value of x to the power of y} 
console.log(Math.pow(5,2));

// Math.sqrt(x) {Returns the square root of x}
console.log(Math.sqrt(9));

// Math.abs(x) {returns the absolute (positive) value of x}
console.log(Math.abs(-2.5));

// Math.min() {Returns the lowest value in a list of arguments}
console.log(Math.min(2,4,1,6,10,25,9));

// Math.max() {Returns the highest value in a list of arguments}
console.log(Math.max(2,4,1,6,10,25,9));

// Math.random() {Returns a random number between 0 (inclusive), and 1 (exclusive)}
console.log(Math.random());

// Math.random() used with Math.floor() can be used to return random integers 
console.log(Math.floor(Math.random() * 10));

// A Proper Random Function
// This JavaScript function always returns a random number between min and max (both included)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  console.log(getRndInteger(1,10));

  
/************
(#) Loop in js
=>  Loops can execute a block of code a number of times. if we want to run the same code over and over again, each time with a different value.
*************/

// while loop 
var num = 1; //loop variable
//while loop condition
while(num<=10){
    console.log(num);
    num++; // increasing or decreasing variable value;
}

// do...while loop 
const numBars = [10,20,25,36,14];
let ii = 0;
do{
  console.log(numBars[ii]);
  ii++;
}
while(i<numBars.length)

// for loop 
    //here i=1 means lop variable; i<=10 means loop condition: i++ means increment or decrement variable value;
for (var i = 1; i <= 10; i++){
    console.log(i);
}

// for in loop {it best used for object}
const mySelf = { fname: "Rakib", mname:"hossan",lname:"redoy"};

for(let fullName in mySelf){
  console.log(mySelf[fullName]);
}

// for of loop {best used for array or any iterable object}
const numArray = [ 10, 12, 54, 123, 15]
for (let x of numArray){
    console.log(x);
}

/************
(#) break statement 
=>  The break statement "jumps out" of a loop.
*************/ 
// break example 
for( var i=1; i<=20; i++){
    console.log("i love you");
    if(i>5){
        console.log("Loop are stopped for break statement");
        break;
    }
}

/******************
(#) continue statement
=>  The continue statement "jumps over" one iteration in the loop.
******************/
// continue example 
var num = [50, 25, 14, 51, 65, 27, 100, 87, 54, 90];
for (var i=0; i<num.length;i++){
    var number = num[i];
    if(number>50){
        continue;
    }
    console.log(number);
}

/*********
 JS Sets
 *******/
// Define JS Sets 
const nameSet = new Set(['R','a','k','i','b']);
console.log(nameSet);

// Add element in sets 
nameSet.add('');
nameSet.add('H');
nameSet.add('o');
nameSet.add('s');
nameSet.add('s');
nameSet.add('a');
nameSet.add('n');
console.log(nameSet);
// In sets we cannot add an element onces 

// Delete element in sets 
nameSet.delete(''); // we delete '' element from the sets
console.log(nameSet);

// has method in sets to check element in a set 
console.log(nameSet.has("H"))

// value method in sets to see values of sets
console.log(nameSet.values());

/*********
 JS Map
 ********/
// Define JS Map
const products = new Map([['Books', 450],['Pen',120],['Eraser',50]]);
console.log(products);

// Add element in Map 
products.set('Pencil Box',500);
console.log(products);

// Find the how much element in a map 
console.log(products.size);

// Delete element in Map 
products.delete('Eraser');
console.log(products)

// Check element has on map 
console.log(products.has('Pen'));

// To Get key value in Map 
console.log(products.get('Pen'));

/******************
(#) Function in JS
=>  A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

(#) Syntax of function in js
=> function function_name(parameters){
    -------codes--------
    -------codes--------
}
******************/

//simple function
function massage(){
    console.log('I Love Bangladesh');
}
massage();

// function with parameter 
function massage(love){
    console.log(love);
}
massage('i love programming');

// function with multiple parameter 
function add(x,y){
    var result = x + y;
    console.log(result);
}
add(5,4);

// function with return 
function moneyGetBack(money,cost){
    var getBack = money - cost;
    return getBack;
}

var payment = moneyGetBack(1000,780);
console.log("Money Get Back:", payment);


/******************
(#) Object in JS
=>  An object is a collection of properties, and a property is an association between a name (or key) and a value

(#) Syntax of object in js
=> var object_name = {
    property_name : property value;
    property_name : property value;
}
******************/

// how to declare a object in js 
var mobile = {
    name : "xaiomi",
    model : "Note 9",
    ram : "4GB",
    rom : "64GB",
    price : 19500
}
console.log(mobile);

// how to find specific property value from an object 
var mobile = {
    name : "xaiomi",
    model : "Note 9",
    ram : "4GB",
    rom : "64GB",
    price : 19500
}
console.log(mobile.ram);
console.log(mobile['rom']); //another way to find object property value

// how to change specific property value in an Object
var mobile = {
    name : "xaiomi",
    model : "Note 9",
    ram : "4GB",
    rom : "64GB",
    price : 19500
}
mobile.ram = "8GB";
mobile['rom'] = "128GB" //another way to set object property value
console.log(mobile);

// how to find object property and values separately
var mobile = {
    name : "xaiomi",
    model : "Note 9",
    ram : "4GB",
    rom : "64GB",
    price : 19500
}

// find Object property names
var properties = Object.keys(mobile);
console.log(properties);

// find Object property values 
var propertiesValues = Object.values(mobile);
console.log(propertiesValues);

// Dynamic way to set object property and values 
var mobile = {
    name : "xaiomi",
    model : "Note 9",
    ram : "4GB",
    rom : "64GB",
    price : 19500
}
// set property Name 
var propertyName = "price";
var propertyValues = mobile[propertyName];
console.log(propertyName, propertyValues);
console.log(mobile)
// set property Values
var propValue = 25000;
mobile[propertyName] = propValue;
console.log( propertyName, propValue);
console.log(mobile)

// how to excess all property of an object by using for loop
var details = {
    name         : 'Shakib',
    age          :  27,
    height       : '5 fit 6 inch',
    education    : 'Bsc',
    hobby        : 'programming'
}

var key = Object.keys(details);

for (var i = 0; i < key.length; i++){
    var propertyName = key[i];
    var propertyValue = details[propertyName];
    console.log(propertyName,' : ',propertyValue);
}

/****************
JS try...catch , throw
****************/
// js try...catch
try{
    let a = 20;
  console.log(a+b);
  }catch(err){
    console.log(err.massage);
  }
  
  // js throw 
  let x = 10;
  try{
    if(x == '') throw 'empty';
    if(isNaN(x)) throw 'not a number';
    if(x<5) throw 'too low';
    if(x>10) throw 'too high';
  
  } catch(err){
    console.log(err)
  }

  /****************
 JS this Keyword
 ***************/

const myDetails = {
    fname : 'rakib',
    lname : 'hossan',
    age : 26,
    fullName : function (){
      return this.fname + ' ' + this.lname;
      // the this keyword refers to myDetails object
    }
  }

console.log(myDetails.fullName());

// using this with call()
const myInfo = {
  age : 26,
  fullName : function (){
    return this.fname + ' ' + this.lname;
    //the this keyword refers to myName object
  }
}

const myName = {
  fname : 'rakib',
  lname : 'hossan',
}

console.log(myInfo.fullName.call(myName));

/******************
 JS arrow function
 *****************/

// simple arrow function 
let myFName = () =>'rakib hossan';
console.log(myFName());

// arrow function with parameter 

// single parameter 
let age = num => 'age' + " : " +num;
console.log(age(26));

// multiple parameter 
let sumResult = (a,b) => {
  let result = a + b;
  console.log("Sum is : " + result)
}
sumResult(25,15);

/****************
 JS Class
 ***************/
// simple class in js 
class Friend{
  constructor(name, age){
    this.fname = name;
    this.fage = age;
  }
}

const FriendOne = new Friend('Seam', 27);// Using Friend class we create FriendOne object.
console.log(FriendOne);

// In class we also create function 
class Friend{
  constructor(name, age){
    this.fname = name;
    this.fage = age;
  }
  play(status){
    console.log (this.fname + " is playing " +status);
  }
}
const FriendNumOne = new Friend('Seam', 27);
FriendNumOne.play("cricket");

// class inheritance 
class Details{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  giveName(){
    return 'My name is ' + this.name + ' and I am ' + this.age +' years old. ';
  }
}

class Hobby extends Details {
  constructor(name, age, hobby){
    super(name,age);
    this.hobby = hobby;
  }
  showDetails(){
    return this.giveName() + this.hobby + ' is my Hobby';
  }
}

let myInformation = new Hobby('Rakib',26,'Programming')

console.log(myInformation.showDetails());

/**************
 JS Constructor
 **************/
 //When a function name written by capital letter that function call constructor. Constructor is a template of creating new object; 

 function Human (name, age, country) {
  this.name = name;
  this.age = age;
  this.country = country;
  this.hobby = function(hobby){
    return `${name}'s hobby is ${hobby}`;
  }
 };

const rakib = new Human('rakib',26,"Bangladesh");
console.log(rakib.hobby("playing Cricket"));

/********************
 Asynchronous JavaScript
 ********************/

//  callbacks in js 
let payment = true;
let mark = 90;

function enroll(callback){
  console.log("Enrollment processing are started");

  setTimeout(function(){
    if(payment){
      console.log('Payment successful!!')
      callback();
    }
    else{
      console.log('Payment is not successful!')
    }
  },2000)
}

function progress(callback){
  console.log('Course are running');
 
  setTimeout(function(){
    if(mark>=80){
      console.log('Course are completed.')
      callback();
    }
    else{
      console.log('Keep trying');
    }
  },3000)
}

function getCertificate(){
console.log('Ready to get certificate')

setTimeout(function(){
  console.log("Congress!! For your performance. Print your certificate.")
},1000)
}

enroll(function(){
  progress(getCertificate);
});

// Promise 

let addFee = true;
let courseMark = 60;

function admission(){
    console.log('Admission process are started.');

    const admissionPromise = new Promise(function(resolve,reject){
      setTimeout(function(){
        if(addFee){
          console.log('Payment Successful!')
          resolve();
        }
        else{
          reject('Payment Failed!!')
        }
      },2000)
    })

    return admissionPromise;
}

function course(){
  console.log("Course on Progress");

  const coursePromise = new Promise(function(resolve,reject){
    setTimeout(function(){
      if(courseMark>=75){
        console.log('Your are ready to get certificate.')
        resolve();
      }
      else{
        reject('Keep trying!! You are not eligible to get certificate.')
      }
    },3000)
  })

  return coursePromise;
}

function getCertified(){
  console.log("Your certificate on the way");

  const certificatePromise = new Promise(function(resolve){
    setTimeout(function(){
      resolve('Congress!! Print your certificate.')
    },2000)
  })
  return certificatePromise;
}

admission()
          .then(course)
          .then(getCertified)
          .then(function(value){
            console.log(value);
          })
          .catch(function(err){
            console.log(err);
         })

// async-await in js 

let ticketMoney = false;

function ticketBooking(){
  console.log('Ticket Booking on Progress.');

  const ticketPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
      if(ticketMoney){
        resolve();
      }
      else{
        reject('Payment failed!!');
      }
    },2000)
  })
  return ticketPromise;
}

function seatConfirm(){
  console.log('Seat booking process on progress')

  return Promise.resolve('Congress! Your seat are confirm. You are ready to go.')
}

async function ticketSystem(){
  try{
    await ticketBooking();
    const message = await seatConfirm();
    console.log(message);
  }
  catch(err){
    console.log(err);
  }
}

ticketSystem();