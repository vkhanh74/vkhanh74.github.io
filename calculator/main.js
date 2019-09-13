var number = document.querySelectorAll('.calculator-keyboard_button span')
var input = document.getElementById('calculator-input')
var clear = document.querySelectorAll('#clear span')
var negative = document.querySelectorAll('#negative span')
var equal = document.querySelectorAll('#equal span')
var percent = document.querySelectorAll('#percent span')
var dot = document.querySelectorAll('#dot span')

//Xử ý nút clear
clear[0].addEventListener('click', function() {
	input.value = "";
})

//Xử ý nút âm dương
negative[0].addEventListener('click', function() {
	if(input.value !== ""){
		input.value = eval(input.value) * -1;
	}
	else {
		input.value += ""
	}
})

//Xử ý nút phần trăm
percent[0].addEventListener('click', function() {
	if(input.value !== ""){
		input.value = input.value/100;
	}
	else {
		input.value += ""
	}
})

//Xử lý nút dấu chấm
dot[0].addEventListener('click', function() {
	if(input.value.endsWith(".") == false && input.value !== ""){
		input.value += "."
	}
	else {
		input.value += ""
	}
})

//Xứ lý nút kết quả
equal[0].addEventListener('click', function() {
	if(input.value !== ""){
		input.value = eval(input.value);
	}
	else {
		input.value += ""
	}
})

//Thêm số và các phép tính vào input
number.forEach(function(check){
  	check.addEventListener('click', function(){
	  	var getIndex = Array.from(number).indexOf(event.target);
	  	var getNumber = number[getIndex].textContent || number[getIndex].innerText;
  		
  		if(input.value == "" && check.classList.contains("calculation")) {
  			input.value += "";
  		}
  		else {
  			input.value += getNumber
  		}
	});
})

