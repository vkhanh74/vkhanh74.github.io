document.addEventListener('DOMContentLoaded', function(){
	//Validate form
	var registerForm = document.getElementById('register-form')
	var name = document.getElementById('name')
	var address = document.getElementById('address')
	var phone = document.getElementById('phone')
	var email = document.getElementById('email')
	var password = document.getElementById('password')
	var rePassword = document.getElementById('re-password')
	var errorModal = document.getElementById('error-modal')
	var errorList = document.getElementById('error-list')
	var input = document.getElementsByTagName('input')

	registerForm.addEventListener('submit', function() {
		var errors = []
		if(name.value.match(/^((?![0-9\~\!\@\#\$\%\^\&\*\(\)\_\+\=\-\[\]\{\}\;\:\"\\\/\<\>\?]).)+$/) == null){
			errors.push('Tên không hợp lệ <span>(Họ và tên có thể là tiếng anh hoặc tiếng việt có dấu)</span>')
			event.preventDefault()
		}
		if(address.value.match(/^[a-zA-Z0-9]+[\s]*[a-zA-Z0-9.\-\,\#]+[\s]*[a-zA-Z0-9.\-\,\#]+[a-zA-Z0-9\s.\-\,\#]*$/) == null){
			errors.push('Địa chỉ không hợp lệ <span>(Hãy ghi đầy đủ địa chỉ nơi sinh sống của bạn)</span>')
			event.preventDefault()
		}
		if(phone.value.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g) == null){
			errors.push('Số điện thoại không hợp lệ <span>(Hãy nhập số điện thoại của bạn)</span>')
			event.preventDefault()
		}
		if(email.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) == null){
			errors.push('Email không hợp lệ <span>(Email phải được kết thúc bằng @email.com. VD: user@gmail.com)</span>')
			event.preventDefault()
		}
		if(password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/) == null){
			errors.push('Mật khẩu không hợp lệ <span>(Mật khẩu phải lớn hơn 8 ký tự, có chữ viết hoa + viết thường và chứa ít nhất 1 ký tự đặc biệt)</span>')
			event.preventDefault()
		}
		if(rePassword.value !== password.value){
			errors.push('Mật khẩu không trùng khớp')
			event.preventDefault()
		}
		var content = "";
		for(let i=0; i<errors.length; i++) {
			content += '<p>' + errors[i] + '</p>';
		}
		errorList.innerHTML = content
		
		if(errors.length > 0) {
			errorModal.classList.add("show");
			window.addEventListener('click', function(e){   
				if (!errorList.contains(e.target)){
					errorModal.classList.remove("show");
				}
			});
		}

		return true;
	})	
})