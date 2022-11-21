const requestURL = 'https://jacobsanchezbejarano.github.io/wdd230/chamber/data.json';
const cards = document.querySelector('.grid');


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".grid");

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
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['directory'];
    businesses.forEach(create_card);
  });



let grid = document.getElementById('grid');

function create_card(business){
    let section = document.createElement('section');
    section.setAttribute('class', 'card');
    let img = document.createElement('img');
    img.setAttribute('src', business.imageUrl);
    img.setAttribute('alt', business.name);
    img.setAttribute('loading', 'lazy');

    let h3 = document.createElement('h3');
    h3.textContent = business.name;

    let p = document.createElement('p');
    p.textContent = business.address;

    let p1 = document.createElement('p');
    p1.textContent = business.phone;

    let p2 = document.createElement('p');
    p2.textContent = `Membership: ${business.membership}`;

    let a = document.createElement('a');
    a.setAttribute('href', business.site);
    a.textContent = business.site;

    section.appendChild(img);

    section.appendChild(h3);
    section.appendChild(p);
    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(a);

    cards.appendChild(section);

}

const board  = document.querySelector(".board");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const board_of_directors = jsonObject['board'];
    board_of_directors.forEach(create_card_board);
  });


function create_card_board(director){
  /*
  <article class="board-card">
      <h3></h3>
      <img src="https://via.placeholder.com/50" alt="Name">
      <p></p>
      <p></p>
      <p></p>
  </article> 
  */

    let article = document.createElement('article');
    article.setAttribute('class','board-card')

    let h3 = document.createElement('h3');
    h3.textContent = director.name;

    let img = document.createElement('img');
    img.setAttribute('src', director.image);
    img.setAttribute('alt', director.name);
    img.setAttribute('loading', 'lazy');

    

    let p = document.createElement('p');
    p.textContent = director.position;

    let p1 = document.createElement('p');
    p1.textContent = director.phone;

    let p2 = document.createElement('p');
    p2.textContent = director.email;

    section.appendChild(h3);
    section.appendChild(img);
    section.appendChild(p);
    section.appendChild(p1);
    section.appendChild(p2);

    board.appendChild(article);

}