var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn1 = document.getElementById("defaultBtn");
var btn2 = document.getElementById("randomBtn");

css.textContent = 
"linear-gradient (to right, "
+color1.value
+ ","
+color2.value
+ ";";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

 	css.textContent = body.style.background + ";";
}

function defGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ "#ff0000"
	+ ", "
	+ "#ffff00"
	+ ")";

	color1.value = "#ff0000";
	color2.value = "#ffff00";
	css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function randomGradient () {
	body.style.background = 
	"linear-gradient(to right, "
	+ getRandomColor()
	+ ", "
	+ getRandomColor()
	+ ")";

	css.textContent = body.style.background + ";";
};

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn1.addEventListener("click", defGradient);
btn2.addEventListener("click", randomGradient);


