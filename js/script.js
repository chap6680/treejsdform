(function() {

    //setup an object fully of arrays
    //alternativly it could be something like
    //{"yes":[{value:sweet, text:Sweet}.....]}
    //so you could set the label of the option tag something different than the name
    let colorOptions = {
      "js puns": [{value:"cornflowerblue", text:"Cornflower Blue"}, {value:"darkslategrey", text:"Dark Slate Grey"}, {value:"gold", text:"Gold"}],
      "heart js": [{value:"tomato", text:"Tomato (I &#9829; JS shirt only)"}, {value:"steelblue", text:"Steel Blue (I &#9829; JS shirt only)"}, {value:"dimgrey", text:"Dim Grey (I &#9829; JS shirt only)"}]
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
        document.getElementById('colors-js-puns').style.display='hidden';
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