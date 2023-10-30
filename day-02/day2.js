/*

what is array?
--> An array is like a container who can hold many values under a single variable, and we can access the values by referring to an index number.

*/

// how to declare an array 

var picnicFee = [500, 450, 480, 470, 570]

// here picnicFee is the name of array which is declare like variable
// the value which is store in array we write under the [...] symbol.

// how to find the length of array 

var picnicFee = [500, 450, 480, 470, 570];
console.log(picnicFee.length); // picnicFee.length property used to find the length of Array. 


// how get single data from array

var picnicFee = [500, 450, 480, 470, 570];
console.log(picnicFee[2]);

//here picnicFee[2] mean the 2 no index number of data in array. In array the index number are started with 0.

// how to change specific data from an array 
var picnicFee = [500, 450, 480, 470, 570];
console.log(picnicFee);
picnicFee[3] = 500;
console.log(picnicFee);

// how find index of an element 
var picnicFee = [500, 450, 480, 470, 570];
console.log(picnicFee.indexOf(480));

// how to add new element in an array 
var picnicFee = [500, 450, 480, 470, 570];
picnicFee.push(540); // push method add new element to the end of the array
console.log(picnicFee);

// how to add new element in an array 
var picnicFee = [500, 450, 480, 470, 570];
picnicFee.unshift(540); // unshift method add new element to the beginning of the array
console.log(picnicFee);

// how to add remove last element from an array 
var picnicFee = [500, 450, 480, 470, 570];
picnicFee.pop();
console.log(picnicFee);

// how to add remove first element from an array 
var picnicFee = [500, 450, 480, 470, 570];
picnicFee.shift();
console.log(picnicFee);