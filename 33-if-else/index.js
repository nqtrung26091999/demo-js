function tossCoin() {
	var rand = Math.random();
	return rand > 0.5 ? rand + 'Mat ngua' : rand + 'Mat sap';
}

console.log(tossCoin());