// document.getElementById("count-el").innerText = 5;

//let myAge = 99;
//console.log(myAge);

/* let firstBatch = 5;
let secondBatch = 7;

let count = firstBatch + secondBatch;

alert(count); 

let myAge = 99;
let HumanCatRatio = 7;

let myCatAge = myAge * HumanCatRatio;

console.log(myCatAge); 

let bonusPoint = 50

let count = bonusPoint + 70;

console.log(count) 

let count = 0; 

function increment() {
	console.log("The button was click");
}



function myNum() {
	console.log(42);
}

myNum(); 

let lap1 = 34
let lap2 = 33
let lap3 = 36

function sumOfLaps(){
	console.log(lap1 + lap2 + lap3);
}

sumOfLaps(); 

let lapsCompleted = 0;

function lapIncrement() {
	lapsCompleted = lapsCompleted + 1

} 
lapIncrement()
lapIncrement()
lapIncrement()

console.log(lapsCompleted) 


// Another Path

/*
let userName = "Muhseen";

let message1 = "You have three new message,"

console.log(message1 + " " + userName + "!");

let messageToUSer = message1 + " " + userName + ("!")

console.log(messageToUSer)


let name = "Muhseen"

let greetings = "Assalamu Alaikum, I am"

let myGreetings = greetings + " " + name;

console.log(myGreetings) 

let welcomeEl = document.getElementById("welcome-el");

let name = "Muhseen";
let greetings  = "Assalamu alaikum,"

let final = welcomeEl.innerText = greetings + " " + name; 

welcomeEl.innerText = final + "👋"; */



/* let incrementEl = document.getElementById("increment-el")

console.log(incrementEl); */


// ----------- FIRST PROJECT -------------


/* let countEl = document.getElementById("count-el")

console.log(countEl);

let incrementEl = document.getElementById("increment-btn")
console.log(incrementEl)

let count = 0

function increment() {
	count += 1;
	countEl.textContent = count;
}

console.log(count)

let saveEl = document.getElementById("save-el")
console.log(saveEl)

function save() {

	let saveStr = count + " - "

	countEl.textContent = 0;
	saveEl.textContent += saveStr
	count = 0;

} */



// SOME PRACTICES TO BE DONE BEFORE DIVING IN TO THE SECOND PROJECT

/* let firstName = "Abdulmuhsin"
let lastName = "Sani"
let othersName = "Dauda"

let fullName = firstName + " " + lastName + " " + othersName

console.log(fullName) */
 /*
let name = "Usman"
let greetings = "Assalamu Alaikuma"

function greetingUsman() {
	console.log(greetings + "," + " " + name + "!")
}
greetingUsman()


let myPoints = 3

function add3Points() {
  myPoints += 3
}


function remove1Point() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()

remove1Point()
remove1Point() 


console.log(myPoints) 

let errorMsg = document.getElementById('error-msg')
console.log(errorMsg)

let errorEl = document.getElementById('error-el')
console.log(errorEl)

function errorTxt() {
  errorEl.innerText = "Something went wrong, please try again later"
} 
 
 // Simple Calculator 

let num1 = 8
let num2 = 3

document.getElementById('num1').textContent = num1
document.getElementById('num2').textContent = num2

let Total = document.getElementById("total")
console.log(Total)

function addNum() {
	let result = num1 + num2
    Total.textContent = "Sum: " + result 
}

function subNum() {
	let result = num1 - num2
	Total.textContent = "Subt: " + result
}

function divNum() {
	let result = num1 / num2
	Total.textContent = "Div: " + result
}

function multNum() {
	let result = num1 * num2
	Total.textContent = "Mult: " + result
}

// IF ELSE STATEMENT PRACTICE
/* let age = 24

if (age >= 21) {
	console.log("You are welcome to the Club!")

} else {
	console.log("You are too young to start Clubbing")
} 

// Check if someoene is eligble to get a birthday gift from king

let age = 124

if (age === 100){
	console.log("This is your bithday gift from the King")
} else if(age < 100) {
	console.log("You are not eligble") 
} else{
	console.log("You have already gotten one.")
} 

// ------------- SECOND PROJECT (BUILDING BLACKJACK GAME)--------------
let player = {
	name: "Victor",
	chips: 155
}
let Cards = [ ]
let hasBlackJack = false;
let sum = 0;
let isAlive = false;
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEL = document.querySelector("#cards-el")
console.log("cardsEl")

let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name + ": $" + player.chips

function getRandomCard() {
	let randomNum = Math.floor(Math.random() * 13) + 1
	return randomNum

	if (randomNum === 1){
		return 11
	} else if (getRandomCard > 10 ) {
		return 10
	} else {
		return randomNum
	}
}

function startGame(){
	isAlive = true
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()
	Cards = [firstCard, secondCard]
	sum = firstCard + secondCard

	let startRanNum = Math.floor(Math.random())
	let startRanNum2 = Math.floor(Math.random())

	renderGame()

} 

function renderGame(){

	sumEl.textContent = "Sum: " + sum
	cardsEL.textContent = "Cards: " 
	
	for (let i = 0; i < Cards.length; i++){
		cardsEL.textContent += Cards[i] + " " 
	}

if (sum <= 20) {
	message = "Do you want to draw a new card?"
	
} else if (sum === 21) {
	message = "You've got BlackJack!"
	hasBlackJack = true;
} else {
	message = "You're out of the game"
	isAlive = false
}
messageEl.textContent = message

}

function newCard(){

	if (isAlive === true && hasBlackJack === false) {
		console.log("Drawing a new card from the Deck!")
	    let card = getRandomCard()
	    sum += card

		Cards.push(card)
		console.log(Cards)

	renderGame()

	}	
	
}

// CASH OUT

// ARRAYS TUTORIALS 
/* let myDetails = [
	"I have a living school certificate",
	"I have written my JSCE Exams in Blessd Academy",
	"I am a student of MAAUN",
	"I am learning Digital Skills",
	"I read a lot of personal development book"

]  

console.log(myDetails) 

// ABOUT ME

let messages = [
	"Assalamu Alikum",
	"Wa,alaikumussalam",
	"How are you doing",
	"I am fine, Alhamdulillah",
	"Masha Allah, I hope every one is fine?",
	"Yes, Everyone is fine",
	"Alright, My regards to the"
]
/*
messages.push("I am fine, Alhamdulillah")
messages.pop()
console.log(messages) 

//LOOPING 
//for(let count = 1; count < 101; count += 1) {
//	console.log(count)
//}

for(let i = 0; i < 6; i += 1){
	console.log(messages[i])
} 

//DIGITAL CHASBAH TO BE IMPROVED IN SHA ALLAHU.

let displayerEl = document.getElementById("displayer")
console.log(displayerEl)

let firstBtn = document.getElementById("Subhanallah-btn")
console.log(firstBtn)

let secondBtn = document.getElementById("Alhamdulillah-btn")
console.log(secondBtn)

let thirdBtn = document.getElementById("Allahu-Akbar-btn")
console.log(thirdBtn)

let lastBtn = document.getElementById("reset-btn")
console.log(lastBtn)


let count = 0

function Subhanallah(){
	count += 1
	let _1count = displayerEl.textContent = "Subhanallah: " + count 
	if (count >= 34){
		displayerEl.textContent = "Subhanallah reached 33x"
		count += 0
		
	}
}

function Alhamdulillah() {
	count += 1
	let _2count = displayerEl.textContent = "Alhamdulillah: " + count 
	_1count = 0
	if (count >= 34){
		displayerEl.textContent = "Alhamdulillah reached 33x"
		count += 0
	}
}


function AllahuAkbar() {
	count += 1
	displayerEl.textContent = "Allahu Akbar: " + count 
	if (count >= 34){
		displayerEl.textContent = "Allahu Akbar reached 33x"
		count += 0

		
	}
}

function reset() {
	displayerEl.textContent = 0
	count = 0


}

// 2ND CALCULATOR 

let num1El =  document.getElementById("num1")
console.log(num1El)

let num2El = document.getElementById("num2")
console.log(num2El)

let addBtn = document.getElementById("add")
console.log(addBtn)


let subBtn = document.getElementById("sub")
console.log(subBtn)


let multiplyBtn = document.getElementById("multiply")
console.log(multiplyBtn)


let divideBtn = document.getElementById("divide")
console.log(divideBtn)

let solEl = document.getElementById("sol")
console.log(solEl)


let num1 = num1El.textContent = 7
let num2 = num2El.textContent = 5

// FUNCTIONS 

function add() {
	let addition = num1 + num2
	solEl.textContent = "Solution: " + addition
}

function sub() {
	let subtraction = num1 - num2
	solEl.textContent = "Solution: " + subtraction
	
}

function multiply() {
	let multiplication = num1 * num2
	solEl.textContent = "Solution: " + multiplication

}

function divide() {
	let division = num1 / num2
	solEl.textContent = "Solution: " + division

}

// Another arrays practice

let myInfo = [
	"I am Muhseen",
	"I am a student",
	"I am passionate about learning",

]
myInfo.push("I am tech enthusiast")
myInfo.pop()
console.log(myInfo) 

// LOOPING 
//for(let i = 10; i < 101; i += 10){
//	console.log(i)
//}

	let myInfo = [
	"I am Muhseen",
	"I am a student",
	"I am passionate about learning",
	"I am currently Studing Software Engineering",
	"At Maryam Abacha American university of Nigeria"
]
myInfo.push("I am tech enthusiast")
console.log(myInfo)

for (let i = 0; i < myInfo.length; i += 1){
	console.log(myInfo[i])
} 

	let numbers = [7, 3, 9]

	for (let i = 0; i < numbers.length; i += 1){
		console.log(numbers[i])
	} 

let sentence = ["Assalamu Alikum", "My", "name", "is", "Muhseen SD"]
let greetingEl = document.getElementById("greeting-el")
console.log(greetingEl)

for (let i = 0; i < sentence.length; i ++) {
	greetingEl.textContent += " " +  sentence[i]
} 

	let player1 = 104
	let player2 = 108

	function totalRaceTimeCal(){
		return player1 + player2
	}

	let total = totalRaceTimeCal()
	console.log(total)
	

	// 3rd February 2025
	let timeOne = 113
	let timeTwo = 121

	function totalTime(){
		return timeOne + timeTwo
	}

	let calculateTotalTime = totalTime()
	console.log(calculateTotalTime) 

	let randonNumber = Math.random() * 6
	console.log(randonNumber)

	let secondRandonNum = Math.random() * 10
	console.log(secondRandonNum)

	let thirdRandomNum = Math.random() * 60
	console.log(thirdRandomNum)

	//Random Number functions generate random numbers with decimal points but when you multipl it by 6,
	// it will geerate from 0 to 5.9(noy including 6)
let flooredNumber = Math.floor(Math.random() * 6) + 1 // It round up floating point numbers to its integer ni matter the number that follows after the decimal point
console.log(flooredNumber) // 012345 

function rollDice() {
	return Math.floor(Math.random() * 6) + 1
	
}
rollDiceNums = rollDice()
console.log(rollDiceNums) 

let hasSolvedChallenge = false
let hasHintLeft = false 

if (hasSolvedChallenge === false && hasHintLeft === false){
	showSolution()
}

function showSolution() {
	console.log("showSolution....")
} 

let likeDocumentries = true 
let likeStartups = false 

if (likeDocumentries === true || likeStartups === true) {
	recommendMovies()
}

function recommendMovies() {
	console.log("Hey, check out this new film, we think you will like it.")
} 

// OBJECT EXERCISE 

let mySchool = {
	name:"Maryam Abacha American University of Nigeria",
	state:"Kano State",
	location: "Hotoro, Nassara GRA",
	No: 5,
	Years: 4,
	isOfferingComputingCourses: true,
	isOfferingEngineeringCourses: false,
	saySalam: function() {
		console.log("Muhseen")
	} 

}
mySchool.saySalam() 

let person = {
	name: "Muhseen",
	age: 77,
	country: "Nigeria"
}

function logData() {
	console.log(person.name + " Is " + person.age + " Years old, he lives in " + person.country )
}

logData() 

let age = 100

if (age < 6){
	console.log("Free")
} else if(age < 18) {
	console.log("Child Discount")
} else if(age < 27){
	console.log("Student Discount")
} else if (age < 67){
	console.log("Full price")
} else {
	console.log("Full Citizen Discount")
} 

let largeCountries = ["China", "U.S.A.", "Indonesia", "Pakistan", "Nigeria"]

largeCountries.pop()
largeCountries.push("Monoco")
largeCountries.shift()
largeCountries.unshift("Tuvalu")

for(let i = 0; i < largeCountries.length; i++){
	console.log(" - " + largeCountries[i])
} 

let date = 17
let weekDay = "Friday"

if(date === 13 && weekDay === "Friday"){
	console.log("😱")
} else{
	console.log("😒")
}

let hands = ["rock", "paper", "scissor"]

function handsGame(){
	let indexValue = Math.floor(Math.random() * 3)
	return hands[indexValue]
}

console.log( handsGame())


let fruits = ["🍏", "🍊", "🍏", "🍊", "🍏"]
let applesE= document.getElementById("apple-shelf")
let orangesE= document.getElementById("orange-shelf")

function grabTheFruits(){
	for(let i = 0; i <= fruits.length; i++ ){
		if (fruits[i] === "🍏" ){
			applesE.textContent += "🍏"	
	} else {
		    orangesE.textContent += "🍊"
	}
}
}

grabTheFruits() */



/*
// ============= THIRD PROJECT BUILDING CHROME EXTENSIONS ================
let myLead = ["www.awesomelead.com", "wwww.greatlead.com", "www.epiclead.com"]
let ulEl = document.getElementById("ul-el")
const inputEL = document.getElementById("input-el")
const saveLead = document.getElementById("save-btn-ext")
let FgtBtn = document.getElementById("fgt-btn")


saveLead.addEventListener("click", function(){
	myLead.push(inputEL.value)
	console.log(myLead)
	
})

function renderleads(){

let listItems1 = "";

for(let i = 0; i < myLead.length; i ++){
	console.log(myLead[i])
	listItems1 += "<li>" + myLead[i] + "</li> "
  //ulEl.innerHTML += "<li>" + myLead[i] + "</li> "

} 
ulEl.innerHTMl = listItems1

}
renderleads()

 //const li = document.createElement("li")
 //li.textContent = myLead[i]
// listItems.append(li)

/*
FgtBtn.innerHTML = "<button>Buy !</button>"
}

function appr(){
	FgtBtn.innerHTML += "<p>Thank you for buying!</p>"
}
let boxMsg = document.getElementById("box")

boxMsg.addEventListener("click", function(){
	boxMsg.textContent = "I am trying to open the box"
}) 
*/

let myLead = `["www.muhseen.io"]`

let ulEl = document.getElementById("ul-el");
const inputEL = document.getElementById("input-el");
const saveLead = document.getElementById("save-btn-ext");
let FgtBtn = document.getElementById("fgt-btn");

myLead = JSON.parse(myLead)
//myLead.push("wwww.sd.org")

myLead = JSON.stringify(myLead)


console.log(typeof myLead)



//localStorage.setItem("myLead", "wwww.muhseen.org")
//console.log( localStorage.getItem("myLead") )
//localStorage.clear()

//localStorage.setItem("myName","MuhseeenSD")
let name7 = localStorage.getItem("myName")
console.log(name7)

saveLead.addEventListener("click", function () {
  myLead.push(inputEL.value);
  inputEL.value = ""
  renderLeads(); // Call renderLeads after adding a new lead
});

function renderLeads() { // Function to render the list
  let listItems = ""; // Initialize as an empty string INSIDE the function

  for (let i = 0; i < myLead.length; i++) {
    listItems += `
	<li> 
		<a href='${myLead[i]}' target='_blank'>  
			${myLead[i]} 
		</a> 
		
	</li>
	
	`
  }

  ulEl.innerHTML = listItems; // Update the ulEl.innerHTML *ONCE*
}

// Initial rendering of leads
renderLeads();

/*
const recipient = "Abdulsamad"
const sender = "Muhseen"
const email = `Assalamu Alaikum ${recipient}! I hope you are doing great? It is ${sender} Cheers`

console.log(email) */






let justTry = document.getElementById("try")


function trying(greeting, name, emoji){
	justTry.textContent =  `${greeting} Ya Akhy ${name} ${emoji}`
}

trying("Assalamu Alaikum", "Muhseen", "👋")

function add(num1,num2){
	return num1 + num2	
}

console.log( add(67, 3) )
console.log( add(44, 66)) 


function getFirst(arr){
	return arr[4]
}

// let arrayData = ["I am", "Muhseen", "And", "I am learning", "JS"]

let answer = getFirst([7,5,3,2,5])
console.log(answer)

function listOfcourses(array){
	return array[2]
}

let arrayOutput = listOfcourses(["HTML", "CSS", "JS"])
console.log(arrayOutput)

localStorage.setItem("ReDoing", "newstrategiest.io")
localStorage.clear()
localStorage.getItem()


