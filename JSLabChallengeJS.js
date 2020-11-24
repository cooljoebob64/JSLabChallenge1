function calculate(){	
	let numcups = document.getElementById("numcups").innerHTML;
	let cupanswer = document.getElementById("cupanswer");
	let cupmax = 3;


	let nummiles = document.getElementById("nummiles").innerHTML;
	let oilanswer = document.getElementById("oilanswer");
	let milemax = 500;

	if (numcups>=cupmax) {
		cupanswer.innerHTML = "You've had too many!";
	} else {
		cupanswer.innerHTML = "Not enough coffee!";
	}

	if (nummiles>= milemax){
		oilanswer.innerHTML = "You need an oil change!";
	} else {
		oilanswer.innerHTML = "Nah you're good on oil.";
	}
}