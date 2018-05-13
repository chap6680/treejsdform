const scheduleBlocks = ['CBam', 'CBpm'];
const paymentTypes = [{ value: 'credit-card', name: 'credit card' }, { value: 'bitcoin', name: 'bitcoin' },{ value: 'paypal', name: 'paypal' }];
(function () {

	const heart1 = "I &#9829; JS Shirt Only";
    //setup an object fully of arrays
    //alternativly it could be something like
    //{"yes":[{value:sweet, text:Sweet}.....]}
    //so you could set the label of the option tag something different than the name
    let colorOptions = {
      "js puns": [{value:"cornflowerblue", text:"Cornflower Blue"}, {value:"darkslategrey", text:"Dark Slate Grey"}, {value:"gold", text:"Gold"}],
      "heart js": [{value:"tomato", text:"Tomato"}, {value:"steelblue", text:"Steel Blue"}, {value:"dimgrey", text:"Dim Grey"}]
    };
  
    var A = document.getElementById('design');
    var B = document.getElementById('color');

    /*    <option value="js puns">Theme - JS Puns</option>
            <option value="heart js">Theme - I &#9829; JS</option>

<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
            <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
            <option value="gold">Gold (JS Puns shirt only)</option> 
            <option value="tomato">Tomato (I &#9829; JS shirt only)</option>
            <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
            <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>  */

    //on change is a good event for this because you are guarenteed the value is different
    A.onchange = function() {
      //clear out B
      B.length = 0;
      //get the selected value from A
      var _val = this.options[this.selectedIndex].value;
      if (_val == "" || _val=="Select Theme") {
        document.getElementById('colors-js-puns').style.display='none';
        } else {
      document.getElementById('colors-js-puns').style.display='block';

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

let getAllCB = document.get
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


function jobtitle(e) {
	console.log('dropdown', e);
	var strdisplay = e.target.value;
	console.log(strdisplay);
    var e = document.getElementById("other-title");
    if(strdisplay == "other") {
        e.style.display = "block";
    } else {
        e.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#payment').addEventListener('change', payment);
});
function payment(e) {
	console.log('dropdown', e);
	let strdisplay = event.target.value;
	let getSelectedName = (event.target.name);
	console.log('payselected: ', strdisplay);
	paymentTypes.forEach(function (pt) { 
		console.log('ptvaue:', pt.value);
		let e = document.getElementById(pt.value);
		if(pt.name !== strdisplay) {
			console.log('no')
			e.style.display = "none";
		} else {
			console.log('y')
			e.style.display = "block";
		}
	})

}




function CBchangeHandler(e){
	console.log(e);
	let getSelected = (event.target.id);
	let getSelectedName = (event.target.name);
	console.log('getselected: ', getSelected, getSelectedName);
	/* if (event.target.checked) { */
		console.log("ck");

		let group = document.getElementsByName(getSelectedName);
		console.log('group: ', group);
		let sum = 0.00;
		scheduleBlocks.forEach(function (block) {
			
			let group = document.getElementsByName(block);
			console.log('block group', group);
			
			for (let i = 0; i < group.length; i++) {
				if (group[i].id !== getSelected && block==getSelectedName) {
					group[i].checked = false;
				};
				if (group[i].checked == true) {
					sum = sum + parseFloat(group[i].value);
				};
			}

		});
		let getmain = document.getElementById('all');
		console.log("main", getmain);
		if (getmain.checked == true) { 
			sum = sum + parseFloat(getmain.value);
		}

		console.log("total:");
		console.log(sum);

    /* }
    else{
		console.log("nock");
    } */
}