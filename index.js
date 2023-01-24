const ratingState = document.getElementById('ratingState');
const tyState = document.getElementById('thankyouState');
const buttons = document.querySelectorAll('.btn');
const submitBtn = document.getElementById('submit-button');
const ratingInfo = document.getElementById('ratingInfo');

let rating = 0;
tyState.style.visibility = "hidden";

buttons.forEach((button) => {
	button.addEventListener('click', () =>{
		rating = button.id;
	})
});

submitBtn.addEventListener('click', (event) => {
	event.preventDefault();
	ratingState.remove();
	tyState.style.visibility = 'visible';
	ratingInfo.innerHTML = `You selected ${rating} out of 5`;
});