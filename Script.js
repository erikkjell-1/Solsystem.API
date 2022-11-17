const base = 'https://fathomless-shelf-54969.herokuapp.com';


function getPlanetIndex() {
    switch (planetIndex) {
      case "sun":
        planetIndex = 0;
        break;
      case "mercury":
        planetIndex = 1;
        break;
      case "venus":
        planetIndex = 2;
        break;
      case "earth":
        planetIndex = 3;
        break;
      case "mars":
        planetIndex = 4;
        break;
      case "jupiter":
        planetIndex = 5;
        break;
      case "saturn":
        planetIndex = 6;
        break;
      case "uranus":
        planetIndex = 7;
        break;
      case "neptune":
        planetIndex = 8;
        break;
    }
  }

async function getPlanets() {
    let newKey = await getKey();
    console.log(newKey);
    const response = await fetch(`${base}/bodies`, {
        headers: {
            'x-zocom': 'solaris-vKkkQHqQboi7c6JF'
        }
    });
    data = await response.json();
    getPlanetIndex();
    
}
getPlanets(); 


