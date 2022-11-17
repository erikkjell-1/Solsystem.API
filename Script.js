const planets = document.querySelectorAll("#solar-system");
let planetIndex = "";
const base = 'https://fathomless-shelf-54969.herokuapp.com';

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

function getPlanetIndex() {
    switch (planetIndex) {
      case ".sun":
        planetIndex = 0;
        break;
      case ".mercury":
        planetIndex = 1;
        break;
      case ".venus":
        planetIndex = 2;
        break;
      case ".earth":
        planetIndex = 3;
        break;
      case ".mars":
        planetIndex = 4;
        break;
      case ".jupiter":
        planetIndex = 5;
        break;
      case ".saturn":
        planetIndex = 6;
        break;
      case ".uranus":
        planetIndex = 7;
        break;
      case ".neptune":
        planetIndex = 8;
        break;
    }
  }




