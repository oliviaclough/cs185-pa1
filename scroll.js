
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

var root = document.documentElement;

function scrollFunction() {
	var scrollTot = root.scrollHeight - root.clientHeight;
	if (root.scrollTop / scrollTot > 0.25) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
