//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
	var questionMark = input[input.length - 1] === '?';
	var stringEmpty = input == false;
	var includesLetters = /[A-Z]/.test(input.toUpperCase());

	if (input === input.toUpperCase() && !stringEmpty && includesLetters) {
		return 'Whoa, chill out!';
	} else if (stringEmpty) {
		return 'Fine. Be that way!';
	} else if (questionMark) {
		return 'Sure.';
	} else {
		return 'Whatever.';
	};
};


function isUpperCase(str) {
    return str === str.toUpperCase();
}

module.exports = Bob;
