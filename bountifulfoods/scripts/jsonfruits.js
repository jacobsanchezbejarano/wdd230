const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
const selects = document.querySelector('#selects');
const message = document.querySelector('#message');

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.



fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const fruits = jsonObject;
    create_select(fruits,1);
    create_select(fruits,2);
    create_select(fruits,3);

  });


function create_select(fruits,number) {

    let select = document.createElement('select');
    select.setAttribute('id', 'select'+number);

    let label = document.createElement('label');
    label.textContent = "Fruit "+number;

    label.classList.add('fruits-label');
    
    fruits.forEach(fruit => {
        let option = document.createElement('option');
        option.setAttribute('value',fruit.id);
        option.textContent = fruit.name;
        select.appendChild(option);

        
    });

    selects.appendChild(label);
    selects.appendChild(select);
    

}

let carbohydrates = 0;
let protein = 0;
let fat = 0;
let sugar = 0;
let calories = 0;

function print_info(data,id){

  const new_data = data.filter((data_filter) => data_filter.id == id)[0];
  
  let name1 = new_data.name;


  carbohydrates += new_data.nutritions.carbohydrates;
  protein += new_data.nutritions.protein;
  fat += new_data.nutritions.fat;
  sugar += new_data.nutritions.sugar;
  calories += new_data.nutritions.calories;

  return name1;
}

document.getElementById('btnSubmit').addEventListener('click',() => {
let sele1 = "";
let sele2 = "";
let sele3 = "";
  
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const fruits = jsonObject;

    message.innerHTML = "";

    sele1 = document.querySelector('#select1').value;
    sele2 = document.querySelector('#select2').value;
    sele3 = document.querySelector('#select3').value;

    sele1 = print_info(fruits,sele1);
    sele2 = print_info(fruits,sele2);
    sele3 = print_info(fruits,sele3);

    let firs = document.querySelector('#firstname').value;
    let emai = document.querySelector('#email').value;
    let phon = document.querySelector('#phone').value;
    let comm = document.querySelector('#comments').value;
    let hour = document.querySelector('#datetime').value;



    let h = document.createElement('h2');
    let firs_ = document.createElement('p');
    let emai_ = document.createElement('p');
    let phon_ = document.createElement('p');
    let sele1_ = document.createElement('p');
    let sele2_ = document.createElement('p');
    let sele3_ = document.createElement('p');
    let nutritions = document.createElement('div');
    let comm_ = document.createElement('p');
    let hour_ = document.createElement('p');
    h.textContent = "Ordered successfully!"
    firs_.textContent =  "Name: " +firs ;
    emai_.textContent =  "Email: " +emai ;
    phon_.textContent =  "Phone: " +phon ;
    sele1_.textContent = "Fruit 1: " + sele1;
    sele2_.textContent = "Fruit 2: " + sele2;
    sele3_.textContent = "Fruit 3: " + sele3;
    if(comm != ""){
      comm_.textContent =  "Special instructions: " +comm ;
    }
    hour_.textContent =  "Oder Date: " +hour ;
    nutritions.innerHTML = `
    <table>
    <tr><td>Carbohydrates:</td><td> ${carbohydrates.toFixed(2)}</td></tr>
    <tr><td>Protein:</td><td> ${protein.toFixed(2)}</td></tr>
    <tr><td>Fat:</td><td> ${fat.toFixed(2)}</td></tr>
    <tr><td>Sugar:</td><td> ${sugar.toFixed(2)}</td></tr>
    <tr><td>Calories:</td><td> ${calories.toFixed(2)}</td></tr>
    </table>
    `;
    message.setAttribute('class','colored');
    h.setAttribute('class','colored');
    message.appendChild(h);
    message.appendChild(firs_);
    message.appendChild(emai_);
    message.appendChild(phon_);
    message.appendChild(sele1_);
    message.appendChild(sele2_);
    message.appendChild(sele3_);
    message.appendChild(nutritions);
    message.appendChild(comm_);
    message.appendChild(hour_);

  });
  
  

});

document.querySelector('#datetime').value = new Date(Date.now()).toLocaleString();