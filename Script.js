const base = 'https://fathomless-shelf-54969.herokuapp.com';
const overlay = document.querySelector('.overlay');
//const planets = document.querySelectorAll('#solar-system');

async function getPlanets(planetId) {
    const response = await fetch(`${base}/bodies/`, {
        headers: {
            'x-zocom': 'solaris-vKkkQHqQboi7c6JF',
        }
    })
    data = await response.json();

    document.getElementById("planet-name").innerHTML = data.bodies[planetId].name;
    document.getElementById("latin-name").innerHTML = data.bodies[planetId].latinName;
    document.getElementById("pdesc").innerHTML = data.bodies[planetId].desc;
    document.getElementById("pCircumference").innerHTML = data.bodies[planetId].circumference;
    document.getElementById("pDistance").innerHTML = data.bodies[planetId].distance;
    document.getElementById("pTempDay").innerHTML = data.bodies[planetId].temp.day;
    document.getElementById("pTempNight").innerHTML = data.bodies[planetId].temp.night;
    document.getElementById("pMoons").innerHTML = data.bodies[planetId].moons.length;

    //console.log(data);
};


function getPlanetInfo(planetId) {
    getPlanets(planetId);
    toggleOverlay();
}

function toggleOverlay() {
    overlay.classList.toggle("show");
}