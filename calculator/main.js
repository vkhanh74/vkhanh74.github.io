$(document).ready(function() {
	

	//Get elements
	var number = $('.calculator-keyboard_button .number')
	var calculation = $('.calculator-keyboard_button .calculation')
	var input = $('#calculator-input')
	var clear = $('#clear span')
	var negative = $('#negative span')
	var equal = $('#equal span')
	var percent = $('#percent span')
	var square2 = $('#square2 span')
	var power2 = $('#power2 span')
	var power3 = $('#power3 span')
	var back = $('#back span')
	var dot = $('#dot span')
	var changeThemeBtn = $('#change-theme')

	//Khởi tạo input value ban đầu
	let inputVal = input.val();

	/*Thêm số và các phép tính vào input*/

		//Thêm số vào input
		number.on('click', function(){
			let $this = $(this)
			let number = $this.text()
			inputVal += number
			input.val(inputVal)
		});

		//Thêm phép tính vào input
		calculation.on('click', function(event) {
			let $this = $(this)
			let calculationSymbol = $this.text()
			if(inputVal == "" || inputVal.toString().endsWith(".")) {
				inputVal += "";
			}
			else if(inputVal.toString().endsWith(`+`) || inputVal.toString().endsWith(`-`) || inputVal.toString().endsWith(`*`) || inputVal.toString().endsWith(`/`)){
				let lastChar = inputVal.slice(-1)
				inputVal = inputVal.replace(lastChar, calculationSymbol);
			}
			else {
				inputVal += calculationSymbol;

			}
			input.val(inputVal)
		});

	//Xử lý nút clear
		clear.on('click', function(event) {
			inputVal = ""
			input.val(inputVal)
		});

	//Xử ý nút âm dương
		negative.on('click', function() {
			if(inputVal[0] == '-') {
				let split = inputVal.split('')
				split.shift()
				if(split.length < 1) {
					inputVal = split.join();
				}
				else {
					inputVal = split.join('');
				}
			}
			else {
				if (inputVal == "") {
					inputVal += "";
				}
				else {
					inputVal = "-" + inputVal;
				}
			}
			input.val(inputVal);
		})

	// //Xử ý nút phần trăm
		percent.on('click', function() {
			let result = eval(inputVal);
			if(inputVal.toString().includes("+") || inputVal.toString().includes("-") || inputVal.toString().includes("*") || inputVal.toString().includes("/") || inputVal.toString().endsWith(".") || inputVal == ""){
				inputVal += ""
			}
			else {
				inputVal = result/100;
			}
			input.val(inputVal);
		})

	//Xử lý nút dấu chấm
		dot.on('click', function() {
			if(inputVal.toString().endsWith(".") || inputVal.toString().endsWith(`+`) || inputVal.toString().endsWith(`-`) || inputVal.toString().endsWith(`*`) || inputVal.toString().endsWith(`/`) || input.value == ""){
				inputVal += ""
			}
			else {
				inputVal += "."
			}
			input.val(inputVal);
		})

	//Xứ lý nút kết quả
		equal.on('click', function() {
			if(input.value !== ""){
				inputVal = eval(inputVal);
			}
			else {
				inputVal += ""
			}
			input.val(inputVal);
		})

	//Xử lý nút căn bậc 2
		square2.on('click', function() {
			let result = eval(inputVal);
			if(inputVal.toString().includes("+") || inputVal.toString().includes("-") || inputVal.toString().includes("*") || inputVal.toString().includes("/") || inputVal == "" || inputVal.toString().endsWith(".")){
				inputVal += ""
			}
			else {
				inputVal = Math.sqrt(result);
			}
			input.val(inputVal);
		})

	//Pow function
	function pow(number) {
		let result = eval(inputVal);
		if(inputVal.toString().includes("+") || inputVal.toString().includes("*") || inputVal.toString().includes("/") || inputVal == "" || inputVal.toString().endsWith(".")){
			inputVal += ""
		}
		else {
			inputVal = Math.pow(result, number);
		}
		input.val(inputVal);
	}

	//Xử lý nút mũ 2
		power2.on('click', function() {
			pow(2)
		})

	//Xử lý nút mũ 3
		power3.on('click', function() {
			pow(3)
		})

	//Xử lý backspace
	back.on('click', function(event) {
		let split = inputVal.split('')
		split.pop()
		if(split.length < 1) {
			inputVal = split.join();
		}
		else {
			inputVal = split.join('');
		}
		input.val(inputVal);
	});
	
	//Get random color
	function getRandomColor() {
		
	}

	//Thay đổi giao diện
	changeThemeBtn.on('click', function(event) {
		event.preventDefault();
		let randomColor = "#"+((1<<24)*Math.random()|0).toString(16)
	  	$('body').css({
			backgroundColor: randomColor,
		});
		
	});

});