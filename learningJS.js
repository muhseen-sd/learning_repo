/*let coderDetails = {
    name: 'Muhseen',
    age: 20,
    level: 'sophomore',
    nationality: 'nigerian',
    relationship: 'single',
};

coderDetails.name = "Abdulmuhsin"
coderDetails.age = 19;


console.log(coderDetails);
console.log(coderDetails.name);
console.log(coderDetails.age);


let currencies = ['Naira', 'Euro', 'Dollar', 'Yuan', 'Cefa'];

console.log(currencies[2]); 

//Performing task function
function greeting (name, lastName) {
    console.log("Assalamu Alaykum " + name +" "+ lastName);
}
greeting('Muhseen', 'SD'); 

// Calculating a number function

function square(number){
    return number*number;
}

console.log(square(2));
 
 WAYS OF DISPLAYING JS */

/*let x = 10;
 let y = 34;
 let z = x + y;
 document.getElementById("test1").innerHTML = z;*/

/* const fisrtNum = 17;
 const secondNum = 32;
 let total = fisrtNum * secondNum;
 document.getElementById("test1").innerHTML = total; */

//const empty;
//document.getElementById("test1").innerHTML = empty;

/*let A = 'Hello';
 A += "World";
 
 
 document.getElementById('test1').innerHTML = A; */

/*let x = myFunction(3,4)

 document.getElementById('test1').innerHTML = x;

 function myFunction(a,b){
    return a*b;
 }*/

/*  function toCelsius(fahrenheit) {
        return (5/9) * (fahrenheit - 32);
    }

    let value = toCelsius(77);

    
 document.getElementById('test1').innerHTML = value; */
/*
 const theCoder = {
    name: "Muhseen",
    level: "Sophomore",
    Course: "Software Engineering",
    school: "MAAUN",
    Session: 2023-2027,
 } 

 
 console.log(theCoder.Course.toUpperCase())*/

/* const theCoder = {
    fisrtName: "Muhseen",
    lastName: "SD",
    level: "Sophomore",

    fullName: function() {
        return this.firtName + " " + this.lastName + " " + this.level;
    }

 };

 document.getElementById('test1').innerHTML = theCoder.fullName(); */

// 12th December 2023

/* const family = {
    name: "Barrister SD Family",
    loction: "Kaduna",
    Years: 20,
    goal: "To be united and supportive to one another"

};

document.getElementById("test1").innerHTML = family.name + " " + family.location + " " + family.Years + " " + family.goal; */

// CONTRUCTOR FUNCTION
/* function Person(first, last, years, color){
    this.firstName = first;
    this.lastName = last;
    this.age = years;
    this.fColor = color;

}

const myInfo = new Person("Muhseen", "SD", 10, blue);
const myMom = new Person("Mummy", "Barrister", 30, white);

document.getElementById("test1").innerHTML = myInfo.firstName; */

// 16th - 12 2024
/* function HumanBeing(first, last, middle, age, occupation) {
    this.firstName = first;
    this.surName = last;
    this.middleName = middle;
    this.age = age;
    this.occupation = occupation;
}

const myInfo = new HumanBeing("Muhseen", "Sani", "Dauda", 10, "Software Developer");
const myDad = new HumanBeing("Sani", "Dauda", "Ilyas", 15, "Legal Practice"); 
const myMom = new HumanBeing("Marakisiya", "Sani", "Ba'aga", 15, "Nurse");

document.getElementById("test1").innerHTML = myInfo.first; */

/*
let myText = "I am Learning JavaScript not Java. Java is a different Programming Language";
let myText2 = "Muhseen SD "               
console.log(myText.endsWith("JavaScript", 24));


let firstName = "Muhseem";
let nickName = "SD";

alert("SAY ALHAMDULILLAH FOR BEING ABLE TO BREATH UP TO NOW BEFORE PROCEEDING COZ A LOT ARE DEAD")

//  20th Deecember 2024
MAX_SAFE_INTEGER e.g: Number.MAX_SAFE_INTEGER
MIN_SAFE_INTEGER e.g: Number.MIN_SAFE_INTEGER

Number.isInteger()
Number.isSafeInteger()

BIGINT 
7448494884n =1 
BigInt(7833838839) =2 

JS NUMBER METHODS 
toString()
toExponential(to round number)
toFixed() e.g toFixed(4) = 9.6574  toFixed(2) is perfect for with money.
toPrecision() e.g toPrecision(3) = 9.65
valueOf(): returns a number to a number. e.g (100 + 23).valueOf(); = 123

TO CONVERT VARIABLES TO NUMBERS WE CAN USE THE FOLLOWING METHODS
Number()
parseFloat()
parseInt()

ARRAY
To add a new element to a array use puch() method e.g: fruits.push("Mango"); or
using lenght properties e.g: varName[varName.lenght] = "Mango".

To check either a varible is array or not since array is also an object. You can use:
1. The isArray() Method e.g: Array.isArray(fruits);
2. Using istanceof operator e.g: fruits intanceof Array = true/false

27TH DEC. 2024 >>>>>>>>>>>>>>>>>>>>>>>>
 date.parse() = to convert date to milliseconds 
The syntax of any maths property is Math.property.
The syntax for math any method is: Math.method(number)
Math.sign(x) = return if x is negative, positive or null.
Math.pow(x,y) = return the value of x to the power of y.
Math.sqrt(x) = returns the value of square root of x.
Math.abs(x) = return the absolute positive value of x.
Math.sin(x)
Math.cos(x)
Math.min(x) and Math.max(x).
Math.lod() = return the natural logatithm of x.
Boolean() = You can use the boolean fuction to find out if the expression is true. e.g Boolean(5 > 9)


const fruits = ["Appke", "Banana", "Coconut", "Mango"]

console.log(fruits instanceof ); 


let today= new Date()

console.log(today.getTimezoneOffset());

let today1 = Date.now()
console.log(today1); 
let x = -20;
console.log(Math.sign(x)); 

if ( new Date().getHours() < 18) {
     document.getElementById("test1").innerHTML = "Good day";
} else (
  document.getElementById("test1").innerHTML = "Good night" 


let level = 700;
if (level == 100) {
    document.getElementById("test1").innerHTML = "You are a Fresher"
} else if (level == 200) {
    document.getElementById("test1").innerHTML = "You are a sophomore student"
} else if (level == 300) {
    document.getElementById("test1").innerHTML = "You are a Junior student"
} else if (level == 400){
    document.getElementById("test1").innerHTML = "You are a final year student."
} else {
    document.getElementById("test1").innerHTML = "Your course required addtional years of learning and research";
} 


let day;
switch(new Date().getDay()){
    case 0: 
    day = "Sunday";
    break;

    case 1:
    day = "Monday";
    break;

    case 2:
    day = "Tuesday";
    break;

    case 3:
    day = "Wednesday";
    break;

    case 4:
    day = "Thursday";
    break;
    
    case 5:
    day = "Friday";
    break;

    case 6:
    day = "Saturday";
    break;
    
}

document.getElementById('test1').innerHTML = day; */

// var  i = 5;
// for (var i = 0; i < 10; i++){

// document.getElementById("test1").innerHTML = i;
// }

// PROJECT 1

// let isLoggedIn = true;
// let isBanned = false;

// if(isBanned){
//     console.log(`Access denied: Account banned`);
// } else if(!isBanned & !isLoggedIn){
//     console.log(`Please Login`);
// }else {
//     console.log(`Welcome back`);

// }

// // PROJECT 2

// let email = "";
// let password = "12345"
// let acceptedTerms = true;

// if (email === "" && password && acceptedTerms){
//     console.log(`Signup Successful!`);

// } else{
//     console.log(`Please complete all requirement`);

// }

// // PROJECT 3

// let score = 72;

// if(score >= 90){
//     console.log(`Excellent!`);
// } else if(score >= 70){
//     console.log(`Good!`);
// } else if (score >= 50){
//     console.log(`Pass!`);
// } else{
//     console.log(`Fail!`);

// }

// let email = "";
// let password = "12345"
// let acceptedTerms = true;

// function isSignUpValid(){
//     if(email === ""){
//         return false
//     }

//     if(!(password.length >= 6)){
//         return false
//     }

//     if (!acceptedTerms){
//         return false
//     }

//     return true;
// }

// if (isSignUpValid()){
//     console.log(`Signup Successful!`);
// }else{
//     console.log(`Please complete other requirements`);

// }

// function canAccess(isLoggedIn, isBanned){
//     if(isLoggedIn && !isBanned){
//         return true
//     } else{
//         return false
//     }
// }

// console.log(canAccess(false, false));

// function add(a,b){
//     return a + b;
// }

// console.log(add(3,2))

// function canComment(isLoggedIn, isBanned, hasVerifiedEmail) {
//   if (isLoggedIn && isBanned) {
//     return false;
//   } else if (hasVerifiedEmail && isBanned) {
//     return false;
//   } else if (!isLoggedIn) {
//     return false;
//   } else if(!hasVerifiedEmail) {
//     return false;
//   } else{
//     return true
//   }
// }

// console.log(canComment(true, false, true));

// function canPurcahse(isLoggedIn, isBanned, hasEnoughAmount){
//     if (!isLoggedIn){
//         return false
//     } else if(isBanned){
//         return false
//     } else if(!hasEnoughAmount){
//         return false
//     }else{
//         return true
//     }
// }

// console.log(canPurcahse(false, false, true));


// function canPurcahse2(isLoggedIn, isBanned, hasEnoughAmount){
//     return isLoggedIn && !isBanned && hasEnoughAmount 
// } 

// console.log(canPurcahse2(true, false, false ));


// function canComment(isLoggedIn, isBanned, hasVerifiedEmail){
//     return isLoggedIn && !isBanned && hasVerifiedEmail
// }

// console.log(canComment(false , false, true));

// function canComment(isLoggedIn, isBanned, hasVerifiedEmail){
//     if(isBanned) return false;
//     if(!isLoggedIn) return false;
//     if(!hasVerifiedEmail) return false;

//     return true
// }

// function canPurchase(isLoggedIn, isBanned, hasEnoughMoney) {
//     return !isBanned && isLoggedIn && hasEnoughMoney
// }

// function canPurchase(isLoggedIn, isBanned, hasEnoughMoney) {
//     if (!isBanned) return false
//     if (!isLoggedIn) return false
//     if (!hasEnoughMoney) return false

//     return true
// }


// function canViewAdminPage(isAdmin, isLoggedIn) {
//     return isAdmin && isLoggedIn
// }

// console.log(canViewAdminPage(false, true));



// function canPost(isLoggedIn, isBanned, postLimitReached) {
//     return !isBanned && isLoggedIn && !postLimitReached

// } 

// console.log(canPost(true, false, false));


// function getPostStatus(isLoggedIn, isBanned, postLimitReached) {
//     if(isBanned) return "Account banned"                                                                
//     if(isLoggedIn && postLimitReached) return "Post limit reached"                                                                
//     if (isLoggedIn && !postLimitReached) return "You can post"
// }

// console.log(getPostStatus(true, false, false));


// function getUserBadge(postsCount) {
//     if(postsCount < 9) return "Newbie"
//     if (postsCount < 49) return "Active"
//     if(postsCount >= 50 ) return "Pro" 
// } 

// console.log(getUserBadge(9));

// function doubleNumbers(numbers) {
//     return numbers*2 
// }

// console.log(doubleNumbers(6));
// takes: [1, 2, 3]
// returns: [2, 4, 6]

// function users(){
//     return [
//         {name: "Ali", badge: "Newbie"},
//         {name: "Zainab", badge: "Active"},
//         {name: "Musa", badge: "pro"}
// ]
// }  console.log(users());

// function getUserBadge(postsCount){
//     if (postsCount < 10) return "Newbie"
//     if (postsCount < 50) return "Active"
//     return "pro"
// }

// let aliPost = 100;
// let aliBadge = getUserBadge(aliPost)

// console.log(aliBadge);

// function isAdult(age){
//     return age >= 18
// }

// function canUserRegister(age){
//     if(!isAdult(age)){
//         return 'Cannot register'
//     } 

//     return "Registration successful!"

// } console.log(canUserRegister(16));


// FREE CODE CAMP JS LESSON

// let myString = "I am now using";

// let stringCanct = myString.concat("at freeCodeCamp");

// console.log(stringCanct);

// let name = "Museen"
// let surname = "Sani"
// let othernames = "Dauda"

// console.log("His name is: " + name + " His father's name is: " + surname," And his othername is: " + othernames);


// let bigNumber = Symbol(12345678900987654321n);

// console.log(typeof bigNumber);


// let insertD = prompt("What is your name?", "Guess")
// console.log(insertD);

// let trying = "apple"
// console.log(trying.charCodeAt(0));

// let trying = String.fromCharCode(66);
// console.log(trying);

// let sliceString = "I am at slice method"
// console.log(sliceString.slice(-8));

// let sentence = "Learning JavaScript is fun!";
// let extracted = sentence.slice(9, -5);

// console.log(extracted);

// let ubuntu = "I am there!"
// let trimIt = ubuntu.includes("there1");

// console.log(trimIt);

// console.log(Boolean("0"))

// let a = 4
// let b = 3 

// console.log(a | b);

// let takeDates = true
// let fasting = false

// if(fasting) {
//     console.log(`Take three dates for iftar!`);
// } else{
//     console.log(`No dates for you! Trying and be fasting`);
    
// }

// let random = Math.random()

// console.log(random);

// let randomNum = Math.floor(Math.random() * 10) + 1

// console.log(randomNum);

// let remainingMonths = 6

// switch (remainingMonths){
//     case 1:
//         console.log("Shawwal");
//         break;
//     case 2:
//         console.log("Dhul-Qaadah");
//         break;
//     case 3:
//         console.log("Dhul-Hajj");
//         break;
//     default:
//         console.log(`He have onlt three month left, and ${remainingMonths} is not among.`);
                
// }

// function greet(){
//     console.log("Happy Iftar, Hope you are all had a joice iftar?");
// }
// greet()

// function details(name = "Guest", department = "Software Engineering", level = "Senior"){
//     console.log(`My name is ${name}, I am in ${department} department, I am in ${level}.`)
// }

// details("Muhseen", "SOftware Engineering", "Senior",)
// details("Isah", "Arabic", "Junior",)
// details("Hassan", "Building and Constructons", "Senior",)
// details("Abdulsamad", "Computer Science", "Super Senior",)
// details()

// let multiply = function(num1, num2){
//     return num1 * num2
// }

// console.log(multiply(4,4));

// const type = (name) => {
//     return "Assalamu Alaikum " + name 
// }

// console.log(type("usman"));



// const work = function(num1, num2, num3){
//     return num1 / num2 * num3 
// }

// console.log(work(10, 2, 100));


// let listen = (identity = "Servant") => {
//     return `I will always stick to the Almighty as his ${identity}`
// }

// console.log(listen());

// 3rd May 2026

// let maskEmail = (email) => {
//     const atIndex = email.indexOf("@")

//     const username = email.slice(0, atIndex)
//     const domain = email.slice(atIndex)

//     let fistChar = username[0];
//     let lastChar = username[username.length - 1]

//     let stars = "*".repeat(username.length - 2)

//     return fistChar + stars + lastChar + domain;
// }

// let email = "mrabdulmuhsin@gmail"

// console.log(maskEmail(email));
// console.log(maskEmail("ustadhumusa32@gmail.com"));



// let count = 0;

// function cardCount(card){
//   let gameNumbers = (2, 3, 4, 5, 6, 7, 8, 9, 10)

//   if(card == gameNumbers.length){
//     console.log("It's a number")
//   } else {
//     console.log("It's a string")
//   }
// }

// console.log(cardCount(9))


// function exampleFunction() {
//   return "Hello";
//   return "World!";
// };

// console.log(exampleFunction());


// const sum = (num1, num2) => num1 + num2
// console.log(sum(0, 0) + 10);

// const exampleFunction = (param1, param2) => param1 + param2;
// console.log(exampleFunction(3, "Something"));

// const sum = (num1, num2) => num1 + num2
// console.log(sum(0, 0) + num2);

// const divideTwoNumbers = (num1, num2) => num1 / num2;
// console.log(divideTwoNumbers(3, 0));


// 15/9/1447AH  =4th March 2026 

// Value wapper
// let a = 4;
// let b = 7;

// console.log(a  =  b);

//type detector

// function detectType(value){
//     if (typeof value == "number"){
//         return `${value} type is number`
//     } else if (typeof value == "boolean"){
//         return `${value} type is boolean`
//     } else if (typeof value == "string"){
//         return `${value} type is string`
//     } else if (typeof value == "object") {
//         return `${value} type is object`
//     } else if (typeof value == "null"){
//         return `${value} type is null`
//     } else {
//         return `${value} type is undefined`
//     }

// }

// console.log(detectType());


// function convertingCtoF(celsius){
//     let fahrenheit = (celsius * 9 / 5 ) + 32
//     return fahrenheit
// } 

// console.log(convertingCtoF(32));

// Using variables 

// let celsius = 32;
// let fahrenheit = (celsius * 9 / 5) + 32 

// console.log(fahrenheit);

// // Even or Odd

// function checkNum(num){

//     if (num % 2 === 0){
//         return `${num} is an even number`
//     } else {
//         return `${num} is an odd number`
//     }
// }

// console.log(checkNum(44));

// // Positive, Negative or Zero

// let classifyNum = (numC) =>{
//     if(numC > 0){
//         return `${numC} is a Positive number`
//     } else if(numC < 0){
//         return `${numC} is a Negative number`
//     } else if (numC === 0) {
//         return `${numC} is zero`
//     } else {
//         return `${numC} is not a number`
//     }
// }
// console.log(classifyNum("pres"));

 
// // Voting Eligibility

// function canVote(age, isCitizen){
//     if (age >= 18 && isCitizen){
//         return `Go ahead and cast your vote.`
//     } else{
//         return `You are not eligible to vote`
//     }
// }

// console.log(canVote(13, true));

// // Grading System

// let yourGrade = (score) => {
//     if (score >= 90){
//         return `You got "A", since your score is ${score}`
//     } else if (score >= 80){
//         return `You got "B", since your score is ${score}`
//     } else if(score >= 70){
//         return `You got "C", since your score is ${score}`
//     } else if(score >= 60){
//         return `You got "D", since your score is ${score}`
//     } else {
//         return `You got "F", which means you need to work harder next time!`
//     }
// }

// console.log(yourGrade(7));

// // Max Number

// let num1 = 200
// let num2 = 440
// let num3 = 70

// // let maxNum = Math.max(num1,num2,num3)

// if (num3 > num2 && num1){
//     console.log(`${num3} is the maximum number`);
// } else if(num2 > num1 && num3){
//     console.log(`${num2} is the maximum number`);
// } else if(num1 > num2 && num1) {
//     console.log(`${num1} is the maximum number`);
// }

// // Leap year 

// function leapYear(year){
//     if (year % 400 === 0){
//         return `${year} is a leap year`
//     } else if (year % 100 === 0){
//         return `${year} it is NOT a leap year`
//     } else if (year % 4 === 0){
//         return `${year} is a leap year`
//     } else {
//         return `${year} is NOT a leap year`
//     }
// }

// console.log(leapYear(1996));

// // Loops Muscle building

// let i = 0;

// for(i = 0; i <= 30; i+= 3){
//     console.log(i);
    
// }

// // Printing umber from 20 - 1

// let n = 0;

// for(n = 20; n <= 20; n--){
//     console.log(n);
    
// }

// // Calculator Core

// function turnicateStr(str, num){
//     if (str.length > num){
//         return str + "---"
//     } else {
//         return str
//     }
// }

// console.log(turnicateStr("I am still tryign", 4));
 

// A simple bank app
/*
    - If pin is correct, access garnted
    - Fater granted acceess, you can withdraw if you have sufficient balanec, else you cannot withraw
*/

// const pin = 1231
// let hasAccount = false
// let balance = 10000

// function smallBank(amount){
//     if(hasAccount && pin === 1234 && balance >= amount){
//         return `You can widthraw some cash, you have enough`
//     } else if (hasAccount && pin === 1234 && balance < amount){
//         return `You have insufficent funds`
//     } else if (!hasAccount){
//         return `You are NOT yet a customer!`
//     } else if(pin !== 1234){
//         return `Wrong password`
//     } else {
//         return `Error!`
//     }
// }

// console.log(smallBank(50000));




// 21 Ramadhan 1447AH | 10th March 2026 

// let str = "I am learning JS"
// let strSplit = str.split("")
// let strReverse = strSplit.reverse()
// let strJoin = strReverse.join()
// console.log(strJoin);








// let lunches = []

// function addLunchToEnd(lunches, str){
//   lunches.push(str)

//   console.log(`${str} added to the end of the lunch menu.`) 
//   return lunches
// }

// console.log(addLunchToEnd(lunches, "biscuit"))

// function addLunchToStart(lunches, str){
//   lunches.unshift(str)

//   console.log(`${str} added to the start of the lunch menu`)
// }

// console.log(addLunchToStart(lunches, "Tuwo"))

// function removeLastLunch(lunches){
//   lunches.pop()
  
//   if(lunches.length === 0) {
//   console.log(` removed from the end of the lunch menu.`)
//   } else{
//     console.log(`No lunches to remove`)
//   }
// }

// console.log(removeLastLunch())



// Practising Email Masking 

//identify the @ position
// get the username 
// get the domain 
// get the first's char index of username 
// get the last's char index
// get the middle chars of user name 
// return first char + middleChars + domain 


// function emailMaskTwo(emailTwo){
//     let atPostion = emailTwo.indexOf("@")
//     let userNameTwo = emailTwo.slice(0, atPostion)
//     let domainTwo = emailTwo.slice(atPostion)

//     let firstChar = userNameTwo[0]
//     let lastChar = userNameTwo[userNameTwo.length - 1]

//     let middleChars = userNameTwo.length - 2
//     let getMiddle = "*".repeat(middleChars)

//     return firstChar + getMiddle + lastChar + domainTwo
// }

// let emailTwo = "muhsin@gmail.com"

// console.log(emailMaskTwo(emailTwo))
// console.log(emailMaskTwo("iamsd2233@gmail.com"))
// console.log(emailMaskTwo("heisalsosd247@gmail.com"))







// Concerter APP 

// function convertCtoF(celsius){
//     fahrenheit = celsius * (9/5) + 32
//     return fahrenheit
// }

// console.log(convertCtoF(90))


// let him = "I am feeling good"
// let splitHim = him.split("-")
// console.log(splitHim);






// // Step 1: Create an array of lunch options
// let lunches = ["Pizza", "Burger", "Salad", "Rice", "Sandwich", "Pasta", "Soup"];

// // Step 2: Generate a random index
// let randomIndex = Math.floor(Math.random() * lunches.length);

// // Step 3: Pick the lunch using the random index
// let chosenLunch = lunches[randomIndex];

// // Step 4: Display the result
// console.log("Today's lunch is: " + chosenLunch);

// Optional: Show result on a webpage if you have HTML
// document.getElementById("lunchResult").innerText = "Today's lunch is: " + chosenLunch;


// let min = 1;
// let max = 100;

// let ranNum = Math.floor(Math.random() * (max - min) + min)

// console.log(ranNum)

let theArr = ["one", "two", "three", "four"]

console.log(theArr)

// let theString = "Muhseen"
// let splitIt = theString.split("")
// let reverseIt = splitIt.reverse()
// let joinIt = reverseIt.join("")

// console.log(joinIt);


