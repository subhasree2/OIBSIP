const temp = document.querySelector(".temperature input");
const submit = document.querySelector("button");
const resulttag = document.querySelector(".result");

submit.onclick = ()=>{
	let tempvalue = temp.value;
	var x = document.getElementById("myselect").value;
	console.log(tempvalue,x);
	let result;
	if(x=='Celsius') {
		result = tempvalue*1.8 + 32;
		resulttag.innerHTML = 'Celsius to Fahrenheit : '+result+'°F';
	}
	else {
		result = (tempvalue-32)*(0.55);
		resulttag.innerHTML = 'Fahrenheit to Celsius : '+result+'°C';
	}
}
