const planets = document.querySelectorAll("#solar-system");
let planetIndex = "";
const base = 'https://fathomless-shelf-54969.herokuapp.com';

async function getPlanets() {
    const response = await fetch(`${base}/bodies/`, {
        headers: {
            'x-zocom': 'solaris-vKkkQHqQboi7c6JF',
        }
    });

    data = await response.json();
    getPlanetIndex();
console.log(data);
    let maxLengthOfParagraph = 1000;
  
  document.querySelector("#overlay h2").innerText =
  data.bodies[planetIndex].name;

  
  document.querySelector("#overlay h4").innerText =
    data.bodies[planetIndex].latinName;

  // description.
  if (data.bodies[planetIndex].desc.length < maxLengthOfParagraph) {
    document.querySelector("#overlay p").innerText =
      data.bodies[planetIndex].desc;
    document.querySelector("#overlay p").style.fontSize = "15px";
  } else {
    document.querySelector("#overlay p").innerText =
      data.bodies[planetIndex].desc;
    document.querySelector("#overlay p").style.fontSize = "14px";
    document.querySelector("#overlay").style.marginTop = "1rem";
  }

  // circumference
  document.querySelector("#circumference p").innerText =
    data.bodies[planetIndex].circumference;

  document.querySelector(
    "#km-from-sun p"
  ).innerText = `${data.bodies[planetIndex].distance} km`;

  document.querySelector(
    "#max-temp p"
  ).innerText = `${data.bodies[planetIndex].temp.day} °`;

  document.querySelector(
    "#min-temp p"
  ).innerText = `${data.bodies[planetIndex].temp.night} °`;

  if (data.bodies[planetIndex].moons.length > 0) {
    let moons = document.querySelector("#moons");
    moons.innerHTML = `
    <h4>Månar</h4>
    <p>${data.bodies[planetIndex].moons}</p>
    `;
  }
};


planets.forEach((planet) => {
  planet.addEventListener("click", () => {
    planetIndex = planet.id;
    getPlanets(planetIndex);
    toggleOverlay();
  });
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




