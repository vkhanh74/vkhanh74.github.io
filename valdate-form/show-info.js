document.addEventListener('DOMContentLoaded', function(){
	var infoBox = document.getElementById('infomation-box')	
	var pathName = decodeURIComponent(window.location.href);
	var findIndex = pathName.indexOf('?')
	var newStr = pathName.slice(findIndex + 1)
	var splittedStr = newStr.split('&')
	var mappedStr = splittedStr.map(function(item){
		return item.replace('=', ': ').replace(/\+/g, ' ')
	})
	
	for(var i=0; i<mappedStr.length; i++) {
		if(!mappedStr[i].toLowerCase().includes("password")) {
			infoBox.innerHTML += '<p class="info-item">' + mappedStr[i] + '</h1>' + '</p>';
		}
		else {
			infoBox.innerHTML += ''
		}
	}
})