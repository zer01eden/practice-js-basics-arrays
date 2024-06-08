const years = [1980, 1934, 2002, 2019];

yearGoneBy = years.map(yearGoneBy);

function yearGoneBy(element) {
	return 2024 - element;
}

console.log(yearGoneBy);
