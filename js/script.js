// set up time schedule blocks.  Begin with 3 - main, am and pm.
// but if we need to add another, can do here 
const scheduleBlocks = ['CBall', 'CBam', 'CBpm'];

const paymentTypes = [{
	value: 'credit-card',
	name: 'credit card'
}, {
	value: 'bitcoin',
	name: 'bitcoin'
}, {
	value: 'paypal',
	name: 'paypal'
}];

//set the dropdown colors based on selection.	
(function () {
	const heart1 = "I &#9829; JS Shirt Only";

	//setup an object fully of arrays
	//alternativly it could be something like
	//{"yes":[{value:sweet, text:Sweet}.....]}
	//so you could set the label of the option tag something different than the name
	let colorOptions = {
		"js puns": [{
			value: "cornflowerblue",
			text: "Cornflower Blue"
		}, {
			value: "darkslategrey",
			text: "Dark Slate Grey"
		}, {
			value: "gold",
			text: "Gold"
		}],
		"heart js": [{
			value: "tomato",
			text: "Tomato"
		}, {
			value: "steelblue",
			text: "Steel Blue"
		}, {
			value: "dimgrey",
			text: "Dim Grey"
		}]
	};

	var A = document.getElementById('design');
	var B = document.getElementById('color');

	A.onchange = function () {
		//clear out B
		B.length = 0;
		//get the selected value from A
		var _val = this.options[this.selectedIndex].value;
		if (_val == "" || _val == "Select Theme") {
			document.getElementById('colors-js-puns').style.display = 'none';
		} else {
			document.getElementById('colors-js-puns').style.display = 'block';

			//loop through bOption at the selected value
			for (var i in colorOptions[_val]) {
				//create option tag
				var op = document.createElement('option');
				//set its value
				op.value = colorOptions[_val][i].value;

				//set the display label
				op.text = colorOptions[_val][i].text;
				//append it to B
				B.appendChild(op);
			}
		}
	};
	//fire this to update B on load
	A.onchange();

})();

// set event listener on all of the classes - 
document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#all').addEventListener('change', CBchangeHandler);
});
document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#npm').addEventListener('change', CBchangeHandler);
});
document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#js-libs').addEventListener('change', CBchangeHandler);
});
document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#node').addEventListener('change', CBchangeHandler);
});
document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#js-frameworks').addEventListener('change', CBchangeHandler);
});
document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#express').addEventListener('change', CBchangeHandler);
});
document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#build-tools').addEventListener('change', CBchangeHandler);
});
document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#title').addEventListener('change', jobtitle);
});

//selection of classes - function does several things - 
// makes sure only one class is selected for each
// figures out how much the total is
function CBchangeHandler(e) {
	let classCount = 0;
	let getSelected = (e.target.id);
	let getSelectedName = (e.target.name);

	/*go through all of the classes for this time block;   
		if the action unchecked, it enables all of the classes
		if checked, disable all the other classes
	*/
	if (e.target.checked) {
		classCount += 1;
		let thisCB = document.getElementsByName(getSelectedName);
		thisCB.forEach(function (e) {
			if (getSelected !== e.id) {
				e.disabled = true;
			}
		});
	} else {
		let thisCB = document.getElementsByName(getSelectedName);
		thisCB.forEach(function (e) {
			e.disabled = false;
		});
	};

	/*go through all classes to get total dollar amount 
	 const scheduleBlocks Array should have the class names
	 of each schedule block.  This allows for additional blocks to be added
	*/

	let group = document.getElementsByName(getSelectedName);
	
	let sum = 0.00;
	scheduleBlocks.forEach(function (block) {

		let group = document.getElementsByName(block);

		for (let i = 0; i < group.length; i++) {
			if (group[i].checked == true) {
				classCount += 1;
				sum = sum + parseFloat(group[i].value);
			};
		}


		if (classCount !== 0) {
			document.getElementById('minClass').textContent = "Register for Activities";
		} else {
			document.getElementById('minClass').textContent = "Register for Activities - Select a Class";
		}

		document.getElementById('totalSchedule').textContent = "Total Amount Due: " + sum;
	});
};

	function jobtitle(e) {
		var strdisplay = e.target.value;
		var e = document.getElementById("other-title");
		if (strdisplay == "other") {
			e.style.display = "block";
		} else {
			e.style.display = "none";
		}
	}


	function payment(e) {
		let strdisplay = e.target.value;
		let getSelectedName = (e.target.name);
		paymentTypes.forEach(function (pt) {
			let e = document.getElementById(pt.value);
			if (pt.name !== strdisplay) {
				e.style.display = "none";
			} else {
				e.style.display = "block";
			}
		})
	}


	/*KICK OFF starting items - mostly hiding fields - but if JavaScript is not 
	enabled then the fields all show up
	*/
	document.getElementById('payment').selectedIndex = 1;
	let initPayment = 'credit card';
	paymentTypes.forEach(function (pt) {
		let e = document.getElementById(pt.value);
		if (pt.name !== initPayment) {
			e.style.display = "none";
		} else {
			e.style.display = "block";
		}
	})

	document.getElementById("other-title").style.display = 'none';


	function emailKey(e) {
		let getCurrentInput = document.getElementById('email');

		let testmail = emailvalid.test(getCurrentInput.value);

		//	errHelper('email');
		if (testmail) {
			document.getElementById('erremail').textContent = "Email looks good"
		} else {
			document.getElementById('erremail').textContent = "Please enter valid address."
		};
	}

	//function used to test if fields are valid.  Tried to use one error function
	//for all fields.
	function errHelper(getField) {
		let errField = "err" + getField;
		let getErrField = document.getElementById(errField);

		if (getField == "cc-num") {
			if (document.getElementById(getField).value == '') {
				document.getElementById(errField).textContent = "Please enter a credit card number.";
			};
			if (document.getElementById(getField).value.length <= 13 || document.getElementById(getField).value.length > 16) {
				document.getElementById(errField).textContent = "Credit Card should have 13 to 16 digits."
			} else {
				document.getElementById(errField).textContent = ' ';
			};
		} else if (getField == "zip") {
			if (document.getElementById(getField).value.length < 5) {
				document.getElementById(errField).textContent = "Generally 5 digits";
			} else {
				document.getElementById(errField).textContent = "";
			}
		} else if (getField == "cvv") {
			if (document.getElementById(getField).value.length !== 3) {
				document.getElementById(errField).textContent = "Enter 3 digits";
			} else {
				document.getElementById(errField).textContent = "";
			}
		} else {
			let tempValue = document.getElementById(getField);
			if ((tempValue.value == null || tempValue.value === undefined || tempValue.value == '' || tempValue.value.length <= 0)) {
				document.getElementById(errField).textContent = "Required Field";
			} else {
				document.getElementById(errField).textContent = "";

			}
		}
	}


	//validate form - 
	// probably can make the code more efficient since some of this is duplicating.
	// made the decision to create one error function to test all fields
	function validateForm() {
		let submitTemp = '';
		let submitTrue = true;
		if (document.getElementById('minClass').textContent == "Register for Activities - Select a Class") {
			submitTemp = submitTemp + "<br>" + "Register for at least one Class";
			submitTrue = false;
		}
		if (document.getElementById('payment').value == 'credit card') {
			if (document.getElementById('cc-num').value == "" || document.getElementById('errcc-num').textContent == "Credit Card should have 13 to 16 digits.") {
				submitTemp = submitTemp + "<br>" + "Enter valid Credit card number";
				submitTrue = false;
			}
			if (document.getElementById('zip').value == "" || document.getElementById('errzip').textContent == "Generally 5 Digits") {
				submitTemp = submitTemp + "<br>" + "Enter at least 5 digit zip code";
				submitTrue = false;
			}
			if (document.getElementById('cvv').value == "" || document.getElementById('errcvv').textContent == "Enter 3 digits") {
				submitTemp = submitTemp + "<br>" + "Enter 3 digit CVV";
				submitTrue = false;
			}
		}
		if (submitTrue) {
			document.getElementById('submitInfo').textContent = '';
			alert("Form Validated and faux submitted");
			return false;
		} else {
			document.getElementById('submitInfo').innerHTML = submitTemp;
			return false;
		}
	}

	//run iniital functions

	//email validation onkey strokes
	const emailvalid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	email.addEventListener('keypress', emailKey);


	/*run javascript as if payment was selected.  Essentially hides sections if javascript is enabled.
	 */
	document.addEventListener('DOMContentLoaded', function () {
		document.querySelector('#payment').addEventListener('change', payment);
	});