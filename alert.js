function alertBox() {
	alert("Attention\n" +
			"You cannot do this!");
}

function confirmBox() {
	var x;
	var r = confirm("Press a button");
	if(r == true) {
		x = "Yes";
	}
	else {
		x = "No";
	}
	document.getElementById("demo").innerHTML = x;
}

function promptBox() {
	var x;
	var person = prompt("Please input your name");
	//document.getElementById("demo").innerHTML = person;
	if(person != null) {
		x = "Hello, " + person + ". How are you today?";
		document.getElementById("demo").innerHTML = x;
	}
}