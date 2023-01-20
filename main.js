let random = Math.floor(Math.random() *100) +1;
let message = document.querySelector("#message")
let tries = 0; 

//Store the reference to the button
let button = document.querySelector("button");
//Define what happens when the button is clicked
button.onclick = function() {
	//store the reference of the input to get the number
	let input = document.querySelector("input");
	
	
	if (tries <10) {
		tries++;
		let userNumber = parseInt(input.value);
		
		

		if (random === userNumber) {
			//The user gussed the number correctly!
			displayMessage("The number is correct!");
		}
		else {
			//here numbers are not same
			if (random > userNumber) {
				displayMessage("Your number is too low!");
			}
			else {
				displayMessage("Your number is too big!");
			}
		}
	}
	else{
		button.disabled = true;
	}
}

function displayMessage(text) {
	message.innerHTML = text; 
}