function check(){
  if(!document.getElementById("email").checkValidity()){
  	//invalid
    output.innerHTML = "Invalid email.";
  }
  else{
  	//valid
    output.innerHTML = "Email validated.";
  }
}
