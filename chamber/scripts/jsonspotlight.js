const requestURL = 'https://jacobsanchezbejarano.github.io/wdd230/chamber/data.json';
const aside = document.querySelector('.aside');

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.



fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const directory = jsonObject['directory'];
    const businesses = directory.filter((business) => business.membership == 'Gold');
    create_cards(businesses);
  });


  /*
<div> 
    <img src="https://jacobsanchezbejarano.github.io/wdd230/chamber/images/bussines-campeon.png" alt="Campeon Pollos">
    <p>Make your order.</p>
    <p>7989-9998</p>
</div>
*/

let spotlights = [];

function create_cards(businesses){
    let max = businesses.length;
    console.log(max);
    
    while(spotlights.length < 3){

        let random = Math.floor(Math.random()*max);

        if(!spotlights.includes(random)){
            spotlights.push(random);
        }

    }

    console.log(spotlights);
    //businesses.forEach(create_card);
}


function create_card(business){


    let div = document.createElement('div');
    //div.setAttribute('class', 'card');

    let img = document.createElement('img');
    img.setAttribute('src', business.imageUrl);
    img.setAttribute('alt', business.name + " " + business.membership + " member");
    img.setAttribute('loading', 'lazy');


    let p = document.createElement('p');
    p.textContent = business.address;

    let p1 = document.createElement('p');
    p1.textContent = business.phone;

  
    let a = document.createElement('a');
    a.setAttribute('href', business.site);
    a.textContent = business.site;

    section.appendChild(img);

    section.appendChild(p);
    section.appendChild(p1);

    section.appendChild(a);

    aside.appendChild(div);

}
