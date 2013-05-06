document.write("<p>test1</p>");
document.write("<p>test2</p>");

function myFunction() {
	var time = new Date().getHours();
	var message = "nice sleep";
	if(time <= 20) {
		message = "Good day";
	}
	document.getElementById("demo").innerHTML = message;
}

function testVariable() {
	var v = "arthur";
	document.write(v);
	v = "bryant";
	document.write("<br/>");
	document.write(v);
}

function randomPage() {
	var x = Math.random();
	var page = "";
	if(x < 0.5) {
		page = "<a href='http://www.yahoo.co.jp'>yahoo</a>";
	}
	else {
		page = "<a href='http://www.youtube.com/'>youtube</a>";
	}
	document.getElementById("demo").innerHTML = page;
}

function today() {
	var x = new Date().getDay();
	var message = "";
	switch (x) {
		case 0:
			message = "Sunday";
			break;
		case 1:
			message = "Monday";
			break;
		default:
			message = "other day";
	}
	document.getElementById("demo").innerHTML = message; 
}