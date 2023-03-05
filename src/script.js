const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const li = document.createElement('li');
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	li.appendChild(checkbox);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = '';
});
