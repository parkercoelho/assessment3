console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted!")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let duck = document.querySelector('img')

duck.addEventListener('mouseover', event => {
	alert("You are getting better at programming!")
})
