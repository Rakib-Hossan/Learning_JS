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
