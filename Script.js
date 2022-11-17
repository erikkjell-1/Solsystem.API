const base = 'https://fathomless-shelf-54969.herokuapp.com';
const planets = document.querySelectorAll('#solar-system');

const sun = document.querySelector('.sun');
const mercury = document.querySelector('.mercury');
const venus = document.querySelector('.venus');

const earth = document.querySelector('.earth');
const mars = document.querySelector('.mars');
const jupiter = document.querySelector('.jupiter');

const saturn = document.querySelector('.saturn');
const uranus = document.querySelector('.uranus');
const neptune = document.querySelector('.neptune');

async function getPlanets() {
    const response = await fetch(`${base}/bodies/`, {
        headers: {
            'x-zocom': 'solaris-vKkkQHqQboi7c6JF',
        }
    })  
    data = await response.json();
    console.log(data);
};




planets.forEach((planet) => {
  planet.addEventListener("click", () => {
    planetIndex = planet.id;
    getPlanets(planetIndex);
    toggleOverlay();
  })
});

function toggleOverlay() {
  overlay.classList.toggle("show");
}