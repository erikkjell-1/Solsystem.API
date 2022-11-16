const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';
// API nyckel att använda ifall man enbart siktar på godkänt: solaris-vKkkQHqQboi7c6JF


async function getKey() {
    const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
    const data = await response.json();
    console.log(data);
}

getKey();

// få den hämtade nyckeln in i funktionen under

async function getPlanets() {
    const response = await fetch(`${BASE_URL}/bodies`, {
        headers: {
            'x-zocom': 'solaris-vKkkQHqQboi7c6JF'
        }
    });
    const data = await response.json();
    console.log(data);
}

getPlanets();   

// Sedan koppla varsin planet med en eventlistener som printar ut information i overlay

//    function on() {
//      document.getElementById("overlay").style.display = "block";
//    }

//    function off() {
//     document.getElementById("overlay").style.display = "none";
//    }