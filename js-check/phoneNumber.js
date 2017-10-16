//
// Phone Number
// Finish the rest of 'phoneNumber()' function to satisfy the test
// file located @ /test/main_test.spec.js
//
// To pass, your function should:
// remove parenthesis, spaces, and hyphens as in "(321) 321-4321"
// remove dots as in "321.321.4321"

const phoneNumber = (pNum) => {

	//removes first occurrences of each character listed in left parameter
	pNum = pNum.replace("(", "");
	pNum = pNum.replace(")", "");
	pNum = pNum.replace("-", "");
	pNum = pNum.replace(" ", "");

	//removes ALL periods
	pNum = pNum.replace(/\./g, '');

	//detects invalid 9 digit numbers
	if (pNum.length === 9) {
		return null;
	}

	//removes everything that isn't a number
	pNum = pNum.replace(/\D/g, '');


	//charAt(0) refers to the first character
	if (pNum.length === 11 && pNum.charAt(0) != 1) {
		return null;
	}

	if (pNum.length === 11 && pNum.charAt(0) == 1) {
		//delete the first character which is "1" and then return the final result
		return pNum.substring(1);
	}

	if (pNum.length > 11 ) {
		return null;
	}

	//if the input had no numbers then return null
	if (pNum === ''){
		return null;
	}

	//if the area code (first number) does not begin with 2-9
	if (parseInt(pNum.charAt(0)) < 2) {
     	return null;
	}

	//if the exchange code (fourth number) does not begin with 2-9
	if (parseInt(pNum.charAt(3)) < 2) {
     	return null;
	}

	//if is a regular valid phone number
	return pNum;
}

module.exports = phoneNumber;
// Note: It's not neccessary to have all code into the 'phoneNumber'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave phoneNumber as an exported
// method as you found it
