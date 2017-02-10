//Function1
//Used for the confirmation alert on contact page
function Function1() {
	if(document.getElementById('TBox').checked) {
		alert("Thanks! your information has been sent and we should call you soon.");
	} else { 
		alert("Thanks! your information has been sent and we should email you soon.");
	}
}

//function 2
//used for printing the date
function Function2() {
	// select the paragraph element within the HTML document
	var p = document.getElementById('para');

	// create a new date object and save it as variable d
	var d = new Date();

	// add an event listener to the button element
	// once clicked change the innerHTML of the p element to write out the date
	p.innerHTML = d
}

//Function 3
//If the user clicks on an image it'll give them an alert
function Function3() {	
   alert("If you are interested in getting the full size image, please contact me");
}