'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelector('.show-modal');

// console.log(btnsOpenModal);

// for (let i = 0; i < btnsOpenModal.length; i++)
// console.log(btnsOpenModal[i].textContent);

btnsOpenModal.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
const closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closemodal);

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape')
    if (!modal.classList.contains('hidden'))
      //  console.log(`esc was pressed`);
      //if model does not contain model class
      closemodal();
});
