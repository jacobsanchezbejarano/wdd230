const requestURL = 'https://jacobsanchezbejarano.github.io/wdd230/chamber/data.json';

const board  = document.querySelector(".board-grid");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const board_of_directors = jsonObject['board'];
    board_of_directors.forEach(create_card_board);
  });


function create_card_board(director){
    let article = document.createElement('article');
    article.setAttribute('class','board-card')

    let h2 = document.createElement('h2');
    h2.textContent = director.name;

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

    article.appendChild(h2);
    article.appendChild(img);
    article.appendChild(p);
    article.appendChild(p1);
    article.appendChild(p2);

    board.appendChild(article);

}