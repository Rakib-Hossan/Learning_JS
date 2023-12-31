/***************
(#) what is array?
=> An array is like a container who can hold many values under a single variable, and we can access the values by referring to an index number.
****************/

// how to declare an array 

var picnicFee = [500, 450, 480, 470, 570]
/***************
here picnicFee is the name of array which is declare like variable
the value which is store in array we write under the [...] symbol.
***************/

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

// how to convert an array into a string 
var names = ['rakib', 'hossan', 'redoy'];
console.log(names);
var fullName = names.toString();
console.log(fullName);
console.log(typeof(fullName));

// how to join all element of an array 
var love = ['i', 'love', 'programming'];
console.log(love);
var fullMassage = love.join(' ');
console.log(fullMassage);

// how to add two different array in an single array 
var bestFriends = ['seam','tanvir','akash','shuvo'];
var casualFriends = ['rony','shakib','jabed'];
var allFriends = bestFriends.concat(casualFriends);
console.log(allFriends);

// how to slices out a piece of an array into a new array.
var names = ['rakib', 'hridoy', 'hamim', 'rony'];
var sliceNames = names.slice(1,3);
console.log(sliceNames);

// how to add new elements on an array to a specific index of an array 
var friends = ['rakib', 'hridoy', 'hamim', 'rony'];
friends.splice(1,0,'hossan','redoy');
console.log(friends);

// how to check element exit on an array 
var friends = ['rakib', 'hossan', 'hridoy'];
var searchFriends = friends.includes('hossan');
console.log(searchFriends);

// sort method in array 
const nameSort = ['rakib','rasib','akib','shakib'];
const sortName = nameSort.sort();
console.log(sortName);

// reverse method in array 
const nameReverse = ['rakib','rasib','akib','shakib','zakir'];
const reverseName = nameReverse.reverse();
console.log(reverseName);

/****************
 array iteration
 ***************/

// forEach 
const eachPoints = [10, 5, 25, 14, 19, 20];
function myForEach(v,i){
    console.log("index " + i + " = " + v);
}
eachPoints.forEach(myForEach);

// map 
const points = [10, 5, 25, 14, 19, 20];
function myMap(v){
    return v * 2;
}
const doublePoints = points.map(myMap);
console.log(doublePoints);

// filter 
const friendName = ['rakib', 'akib', 'rony', 'shadin', 'rohan', 'shakib'];
function myFilter(v,i){
    return v.startsWith('r');;
}
const filterName = friendName.filter(myFilter);
console.log(filterName);

// reduce 
const reduceNumbers = [45, 4, 9, 16, 25];
function reduceSum(total, value) {
  return total + value;
}
let sum = reduceNumbers.reduce(reduceSum);
console.log(sum);

// every 
const friendsName = ['rakib', 'akib', 'rony', 'shadin', 'rohan', 'shakib'];
function myEvery(value){
    return value.endsWith('kib'); 
}
/* when all condition are true 
 then its return true */
const isEvery = friendsName.every(myEvery);
console.log(isEvery);

// some 
const someFriend = ['rakib', 'akib', 'rony', 'shadin', 'rohan', 'shakib'];
function mySome(value){
    return value.endsWith('kib');
}
/* when any one condition are true 
 then its return true */
const isSome = someFriend.some(mySome);
console.log(isSome);


/************ 
 comparison operator 
************/
// comparison with > operator
console.log(6>4);

// comparison with < operator
console.log(6<4);

// comparison with >= operator
console.log(6>=5);

// comparison with <= operator
console.log(6<=5);

// comparison with == operator
console.log(6==6);

// comparison with != operator
console.log(6!=6);

// logical operator 

// and (&&) operator 
var numOne = 25;
var numTwo = 14;
console.log(numOne>=numTwo && numOne==numTwo); //when all condition are true then we see true

// or (||) operator 
var numOne = 25;
var numTwo = 14;
console.log(numOne>=numTwo || numOne==numTwo); //when any condition are true then we see true

// if statement
var exam = "passed";
if(exam == "passed"){
    console.log("your are eligible for job");
}

// if..else statement
var money = 1000;
if(money >=1250){
    console.log("you will be join the session")
}
else{
    console.log("you will not be join the session");
}

// if...else statement with multiple condition 

// and operator 
var mark = 85;
if (mark<=100 && mark>=80){
    console.log("you got A+");
}
else{
    console.log('you are unable to got A+');
}

// nested if...else statement 

var mark = 50;

if(mark>=80){
    if(mark>=90){
        console.log("you got gpa 4");
    }
    else{
        console.log('you got gpa 3.75');
    }
}
else if(mark<=79 && mark >=70) {
    console.log('you got gpa 3.50');
}
else{
    console.log('you got gpa 3');
}

// switch statement 

var color = "green";

switch(color){
    case 'green':
        console.log('Please Go');
        break;
    
    case 'yellow':
        console.log('Please wait');
        break;
    
    case 'red':
        console.log('Please stop');
        break;
    
    default:
        console.log('This is not traffic light');
}

// short form of using condition 
let age = 15;
console.log(age >= 18 ? "you are adult" : 'you are not adult');