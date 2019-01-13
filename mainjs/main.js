// main registration on website	
window.onload = function() {
	var button = document.querySelector('.inputRegistartion');
	button.onclick = function(){
		let information = document.querySelector('form');
		let newUser = new Object();
		newUser.mobNumber = information[0].value;
		newUser.name = information[1].value;
		newUser.login = information[2].value;
		newUser.password = information[3].value;
		console.log(newUser)
	}
};


