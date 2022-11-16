const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';
const slider = document.querySelector('.slider');
const planet_info = document.querySelector('.planet_info_text');
let sun = document.getElementById('.sun');


// async function getKey() {
//     const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
//     const data = await response.json();
//     console.log(data);
// }

async function getPlanets() {
    const response = await fetch(`${BASE_URL}/bodies`, {
        headers: {
            'x-zocom': 'solaris-vKkkQHqQboi7c6JF'
        }
    });
    const data = await response.json();
    console.log(data);
}
// getKey();
getPlanets();

sun.addEventListener('click', (event) => {
    toggleSlider();
    getSun();
});



function toggleSlider() {
    slider.classList.toggle("show");
  }