const numbers = [1, 2, 3, 4, 5, 6, 7];
let numbersIsEven = [];
let sumEven = 0;

numbers.filter(isEven);
console.log(numbersIsEven);
sumEven = numbersIsEven.reduce(sumNumbers);
console.log(sumEven);

function isEven(element) {
	if (element % 2 === 0) {
		numbersIsEven.push(element);
	}
}

function sumNumbers(element, num) {
	return element + num;
}
