/************
    Loop in js
=>  Loops can execute a block of code a number of times. if we want to run the same code over and over again, each time with a different value.
*************/

// while loop 

var num = 1; //loop variable
//while loop condition
while(num<=10){
    console.log(num);
    num++; // increasing or decreasing variable value;
}

// for loop 
    //here i=1 means lop variable; i<=10 means loop condition: i++ means increment or decrement variable value;
for (var i = 1; i <= 10; i++){
    console.log(i);
}

/************
    break statement 
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
    continue statement
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

/******************
    Function in JS
=>  A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

    Syntax of function in js
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
    Object in JS
=>  An object is a collection of properties, and a property is an association between a name (or key) and a value

    Syntax of object in js
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