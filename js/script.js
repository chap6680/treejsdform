// set up time schedule blocks.  Begin with 3 - main, am and pm.
// but if we need to add another, can do here 
const scheduleBlocks = ['CBall', 'CBam', 'CBpm','CBwedam', 'CBwedpm'];

let checkForm = 0;

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

let classCount = 0;

//set the dropdown colors based on selection.  create from the list of colors in html	
(function () {
	const heart1 = "I &#9829; JS Shirt Only";

	//setup an object fully of arrays
	//alternativly it could be something like
	//{"yes":[{value:sweet, text:Sweet}.....]}
	//so you could set the label of the option tag something different than the name
	heartjspuns = {};
	insideheart = [];
	insidepuns = [];
	heartjspuns = {jspuns:insidepuns, heartjs:insideheart};
	var selectColors = document.getElementById('color');

	for (var i = 0, l = selectColors.childNodes.length; i < l; i++) {
		if (selectColors.childNodes[i].nodeName === 'OPTION') {
			//get text portion
			getInner = selectColors.childNodes[i].innerHTML;
			//get value portion
			getInnerValue = selectColors.childNodes[i].value;

			getInnerIndex = getInner.indexOf("(");
			getInnerColor = getInner.substring(0, getInnerIndex - 1);
			getGroup = getInner.substring(getInnerIndex);
			//console.log('getInnerValue: ', getInnerValue, "  getinner:", getInner);

			obj = {
				value: getInnerValue,
				text: getInnerColor
			};
		
			isPuns = getInner.indexOf("Puns");
			if (isPuns > 0) {
				insidepuns.push(obj);
			} else {
				insideheart.push(obj);
			}
		}
	}

	let A = document.getElementById('design');
	let B = document.getElementById('color');

	A.onchange = function () {
		//clear out B
		B.length = 0;
		//get the selected value from A - design
		let _val = this.options[this.selectedIndex].value;
		if (_val == "" || _val == "Select Theme") {
			document.getElementById('colors-js-puns').style.display = 'none';
		} else {
			document.getElementById('colors-js-puns').style.display = 'block';

			//loop through bOption at the selected value
			for (var i in heartjspuns[_val]) {
				//create option tag
				var op = document.createElement('option');
				//set its value
				op.value = heartjspuns[_val][i].value;

				//set the display label
				op.text = heartjspuns[_val][i].text;
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

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#npm').addEventListener('change', CBchangeHandler);
});

//selection of classes - function does several things - 
// makes sure only one class is selected for each
// figures out how much the total is
function CBchangeHandler(e) {
	classCount = 0;
	let tempCount = 0;
	let getSelected = (e.target.id);
	let getSelectedName = (e.target.name);

	let thisCB = document.getElementsByName(getSelectedName);
	thisCB.forEach(function (e) {
		if (e.checked === true) {
			tempCount += 1;
		}
	});
	if (tempCount > 1) {
		document.getElementById(getSelected).checked = false;
		alert('You can only select one class per time slot.  Remove other class before selecting this one.')
	};

	// THIS WORKED but failed in review...didnt want to kill it
	// problem really was there were more 

	/*go through all of the classes for this time block;
		if the action unchecked, it enables all of the classes
		if checked, disable all the other classes
	*/

	/* 	if (e.target.checked) {
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
	 */

	/*go through all classes to get total dollar amount 
	 const scheduleBlocks Array should have the class names
	 of each schedule block.  This allows for additional blocks to be added
	*/

	let group = document.getElementsByName(getSelectedName);

	let sum = 0.00;
	scheduleBlocks.forEach(function (block) {

		let group = document.getElementsByName(block);
		//console.log('group ', group.length, " - block ", block);
		for (let i = 0; i < group.length; i++) {
			if (group[i].checked == true) {
				classCount += 1;
				sum = sum + parseFloat(group[i].value);
			};
		}


		if (classCount !== 0) {
			document.getElementById('minClass').textContent = "Register for Activities";
			document.getElementById('minClass').style.color = '#184f68';
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

	if (getField === "name") {
		if (document.getElementById(getField).value == '' && checkForm === 1) {
			document.getElementById(errField).textContent = "Please enter a name.";
		} else {
			document.getElementById(errField).textContent = '';
		}
	} else if (getField === "email") {
		if (document.getElementById(getField).value == '' && checkForm === 1) {
			document.getElementById(errField).textContent = "Please enter an email.";
		} else {
			document.getElementById(errField).textContent = "";
		};
	} else if (getField == "cc-num") {
		if (document.getElementById(getField).value == '') {
			document.getElementById(errField).textContent = "Credit card field should not be blank";
		} else if (document.getElementById(getField).value.length <= 13 || document.getElementById(getField).value.length > 16) {
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
	checkForm = 1;
	let submitTemp = '';
	let submitTrue = true;



	if (document.getElementById('name').value === "") {
		submitTemp = submitTemp + "\r\n" + "Complete Name";
		errHelper('name');
		submitTrue = false;
	}
	if (document.getElementById('email').value === "") {
		submitTemp = submitTemp + "\r\n" + "Email";
		errHelper('email');
		submitTrue = false;
	}
	let testmail = emailvalid.test(document.getElementById('email'));
	if (testmail) {
		sumbitTrue = false;
	}

/* 	if (document.getElementById('minClass').textContent == "Register for Activities - Select a Class") {
 */
	if (classCount === 0) {
		document.getElementById('minClass').style.color = 'red';
		submitTemp = submitTemp + "\r\n" + "Register for at least one Class";
		submitTrue = false;
	}

	if (document.getElementById('payment').value == 'credit card') {
		if (document.getElementById('cc-num').value == "" || document.getElementById('errcc-num').textContent == "Credit Card should have 13 to 16 digits.") {
			submitTemp = submitTemp + "\r\n" + "Enter valid Credit card number";
			errHelper('cc-num');
			submitTrue = false;
		}
		
		if (document.getElementById('zip').value == "" || document.getElementById('errzip').textContent == "Generally 5 Digits") {
			submitTemp = submitTemp + "\r\n" + "Enter at least 5 digit zip code";
			errHelper('zip');
			submitTrue = false;
		}
		if (document.getElementById('cvv').value == "" || document.getElementById('errcvv').textContent == "Enter 3 digits") {
			submitTemp = submitTemp + "\r\n" + "Enter 3 digit CVV";
			errHelper('cvv');
			submitTrue = false;
		}
	}
	if (submitTrue) {
		document.getElementById('submitInfo').textContent = '';
		alert("Form Validated and faux submitted");
		window.location.href = 'index.html';
		return false;
		
//		location.reload;
//		document.getElementById('formClass').reset();
	//		getForm.submit();
	//	return true;
	} else {
		//document.getElementById('submitInfo').innerHTML = submitTemp;
		alert("Missing Info - check the following fields:" + submitTemp );
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

document.getElementById('name').focus();