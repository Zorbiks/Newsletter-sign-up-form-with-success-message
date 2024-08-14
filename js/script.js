// signup card
const signupWindow = document.getElementById('signup-window')
const emailInput = document.getElementById('email');
const errorSpan = document.getElementById('error');
const formSubmitButton = document.getElementById('submit');

// success window
const successWindow = document.getElementById('success-window');
const successSpan = document.getElementById('email-span');
const dismissButton = document.getElementById('dismiss');

emailInput.oninput = () => {
	if (emailInput.classList.contains('invalid')) {
		emailInput.classList.remove('invalid')
		errorSpan.classList.remove('active');
	}
}

formSubmitButton.onclick = (e) => {
	e.preventDefault()
	if (!emailInput.checkValidity()) {
		emailInput.classList.add('invalid')
		errorSpan.classList.add('active');
	} else {
		successWindow.classList.remove('d-none');
		successWindow.classList.add('d-flex');
		successSpan.textContent = emailInput.value;
		signupWindow.classList.add('d-none');
	}
}

dismissButton.onclick = () => {
	window.location.reload();
}
