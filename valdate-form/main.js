document.addEventListener('DOMContentLoaded', function(){
	//Validate form
	var registerForm = document.getElementById('register-form')
	var name = document.getElementById('name')
	var address = document.getElementById('address')
	var phone = document.getElementById('phone')
	var email = document.getElementById('email')
	var password = document.getElementById('password')
	var rePassword = document.getElementById('re-password')

	registerForm.addEventListener('submit', function() {
		let a = true;
		if(name.value.match(/^(?<title>.*\.\s)*(?<firstname>([A-Z][a-z]+\s*)+)(\s)(?<middleinitial>([A-Z]\.?\s)*)(?<lastname>[A-Z][a-zA-Z-']+)(?<suffix>.*)$/) == null){
			alert('Tên không hợp lệ')
			a = event.preventDefault()
		}
		if(address.value.match(/^[a-zA-Z0-9]+[\s]*[a-zA-Z0-9.\-\,\#]+[\s]*[a-zA-Z0-9.\-\,\#]+[a-zA-Z0-9\s.\-\,\#]*$/) == null){
			alert('Địa chỉ không hợp lệ')
			a = event.preventDefault()
		}
		if(phone.value.match(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/) == null){
			alert('Số điện thoại không hợp lệ')
			a = event.preventDefault()
		}
		if(email.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) == null){
			alert('Email không hợp lệ')
			a = event.preventDefault()
		}
		if(password.value.match(/[^A-Za-z0-9]/) == null){
			alert('Mật khẩu không hợp lệ')
			a = event.preventDefault()
		}
		if(rePassword.value !== password.value){
			alert('Mật khẩu không trùng khớp')
			a = event.preventDefault()
		}
		return a;
	})	
})