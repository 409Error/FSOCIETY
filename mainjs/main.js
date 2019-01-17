// main registration on website	
window.onload = function() {
	var button = document.querySelector('.inputRegistartion');
	button.onclick = function(){
		let information = document.querySelector('form');
		//a function for validation the form
		if(information[0].value == '' || information[0].value == ' '){
			information[0].style.borderColor = 'red'
		}
		else{
			information[0].style.borderColor = 'green'
		}
		if(information[1].value == '' || information[1].value == ' '){
			information[1].style.borderColor = 'red'
		}
		else{
			information[1].style.borderColor = 'green'
		}
		if(information[2].value == '' || information[2].value == ' '){
			information[2].style.borderColor = 'red'
		}
		else{
			information[2].style.borderColor = 'green'
		}
		if(information[3].value == '' || information[3].value == ' ' || information[3].lenght > 6){
			console.log('error')
		}
		else{
			let newUser = new Object();
			newUser.mobNumber = information[0].value;
			newUser.name = information[1].value;
			newUser.login = information[2].value;
			newUser.password = information[3].value;
			console.log(newUser)
		}
	}
};



