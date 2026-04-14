let countEl = document.getElementById('count-el')
console.log(countEl)

let count = 0

function counter() {
	count += 1;
	countEl.textContent = count;
}

let saveEl = document.getElementById("reset-btn")
console.log(saveEl)

function reset() {
	countEl.textContent = 0
	count = 0
}