'use strict';

const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden'); 
    overlay.classList.add('hidden');
}

for (const item in btnShowModal) {
    if (btnShowModal.hasOwnProperty(item)) {
        const element = btnShowModal[item];
        element.addEventListener('click', openModal);
    }
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
    if(e.code === "Escape" && modal.classList.contains("hidden")) closeModal();
})