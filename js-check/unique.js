//
// Make Unique
// Finish the rest of 'unique()' function to remove all
// duplicate entries from a given array and satisfy the test
//
// To pass the test, unique should accept an array and
// handle strings:
// ['hello', 'hello', 'world'] -> ['hello', 'world']
// handle numbers:
// [1,1,2,2,2,3,4,4,5] => [1,2,3,4,5]
// handle nested arrays:
// [[1], [1], [2]] => [[1], [2]]
// handle nested objects:
// [{foo: 'bar'}, {foo: 'bar'}] => [{foo: 'bar'}]

const unique = (arr) => {



	var new_arr = [];
	//return arr;


//remove duplicate strings and numbers
	var i;
	for (i = 0; i < arr.length; i++) { 


	if (new_arr.indexOf(arr[i]) == -1){
		new_arr.push(arr[i]);
	} else {
		new_arr.splice(new_arr.indexOf(arr[i]), 1);
		new_arr.push(arr[i]);
	}


	}





//remove duplicate arrays
	var q;
	for (i = 0; i < new_arr.length; i++) { 

		if (Array.isArray(new_arr[i]) == true){

			var main_object = (new_arr[i]);

			for (q = 0; q < new_arr[i]; q++) { 
				if ( main_object == (new_arr[q]) ){
					new_arr.splice(new_arr.indexOf(main_object), 1);
				}
			}
		}
	}




//remove duplicate objects
	var a;
	var b;
	for (a = 0; a < new_arr.length; a++) { 

		if (typeof new_arr[a] == "object" && (Array.isArray(new_arr[a]) == false) ){


			var main_object = (new_arr[a]);

			var first_comparison_key = Object.keys(main_object);
			var first_comparison_object = Object.values(main_object);



			for (b = 0; b < new_arr.indexOf(new_arr[a]); b++) { 
		if (typeof new_arr[b] == "object" && (Array.isArray(new_arr[b]) == false) ){


			var second_object = (new_arr[b]);

			var second_comparison_key = Object.keys(second_object);
			var second_comparison_object = Object.values(second_object);


				if ( first_comparison_key.toString() == second_comparison_key.toString() && first_comparison_object.toString() == second_comparison_object.toString() ){
					new_arr.splice(new_arr.indexOf(main_object), 1);
				}

		}

			}



		}
	}










	return new_arr;
}

module.exports = unique
// Note: It's not neccessary to have all code into the 'unique'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave unique as an exported
// method as you found it
