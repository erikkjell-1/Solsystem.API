const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';
const slider = document.querySelector('.slider');
const planet_info = document.querySelector('.planet_info_text');
const sun = document.getElementById('.sun');


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


sun.addEventListener('click', async function(){
    const resp =  await fetch(BASE_URL);
    const data = await resp.json();
    console.log(data);
    data.forEach(bodies => {
        let el = `
        <article>
            <h2>${bodies.type}</h2>
            <p>${bodies.name}</p>

        </article>
        `

        document.querySelector('#overlay').insertAdjacentHTML('beforeend', el)
    });


})









   function on() {
     document.getElementById("overlay").style.display = "block";
   }

   function off() {
    document.getElementById("overlay").style.display = "none";
   }