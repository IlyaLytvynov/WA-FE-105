import { RandomMeal } from './randomMeal.js';
const body = document.querySelector('body');
const btn = document.createElement('button');
btn.innerHTML = 'Refresh';

btn.addEventListener('click', () => {
  RandomMeal(document.querySelector('#rootContainer'));
});

body.appendChild(btn)


