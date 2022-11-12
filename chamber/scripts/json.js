const requestURL = 'https://jacobsanchezbejarano.github.io/wdd230/chamber/directory.json';
const cards = document.querySelector('.grid');


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['directory'];
    businesses.forEach(create_card);
  });



let grid = document.getElementById('grid');

function create_card(business){
    let section = document.createElement('section');
    let img = document.createElement('img');
    img.setAttribute('src', business.imageUrl);
    img.setAttribute('alt', business.name);

    let h3 = document.createElement('h3');
    h3.textContent = business.title;

    let p = document.createElement('p');
    p.textContent = business.address;

    let a = document.createElement('a');
    a.setAttribute('href', business.site);
    a.textContent = business.site;

    section.appendChild(img);

    section.appendChild(h3);
    section.appendChild(p);
    section.appendChild(a);

    cards.appendChild(section);

}