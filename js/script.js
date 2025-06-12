'use strict';

const drop = document.getElementById('drop1'),
	dropdown = document.querySelector('.dropdown__drop');

const toggleActive = (e) => {
	e.preventDefault();
	dropdown.classList.toggle('dropdown__drop--active');
};

// drop.addEventListener('click', (e) => toggleActive(e));
document.addEventListener('click', (e) => {
	if (e.target == drop) {
		toggleActive(e);
	}
	if (
		dropdown.classList.contains('dropdown__drop--active') &&
		e.target != drop
	) {
		toggleActive(e);
	}
});
