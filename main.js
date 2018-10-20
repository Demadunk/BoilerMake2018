var dogCounter = 0;
var catCounter = 0;
var fishCounter = 0;
var birdCounter = 0;
function increaseDogCounter() {
	dogCounter++;
}
function increaseCatCounter() {
	catCounter++;
}
function increaseFishCounter() {
	fishCounter++;
}
function increaseBirdCounter() {
	birdCounter++;
}
var counterArray = [dogCounter, catCounter, fishCounter, birdCounter];
var largest = counterArray[0];
var animalArray = ["dog", "cat", "fish", "bird"];
function getWhichAnimal() {
	for (var i = 0; i < counterArray.length; i++) {
		if (counterArray[i] > largest) {
			largest = counterArray[i];
		}
	}
	return animalArray[largest];
}

