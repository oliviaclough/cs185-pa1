/* Info from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_overlay_text */

function showOverlay(content){
	document.getElementById("overlay").style.display = "block";
	document.getElementById("overlay-with").src = content.src;
}

function hideOverlay(){
	document.getElementById("overlay").style.display = "none";
}