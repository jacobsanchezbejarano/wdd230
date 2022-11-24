date = new Date(Date.now());
document.querySelector('#©').textContent = date.getFullYear();

const opciones = 
{ weekday: 'long', 
year: 'numeric', 
month: 'numeric', 
day: 'numeric' };

document.querySelector('#dateMod').textContent = 
new Date(Date.now()).toLocaleString();

const opciones2 = 
{ weekday: 'long', 
year: 'numeric', 
month: 'long', 
day: 'numeric' };


document.querySelector('#datetime').textContent = 
new Date(Date.now()).toLocaleString('en-UK',opciones2);

document.querySelector('.logo-footer').addEventListener('click',() => {location.assign('https://jacobsanchezbejarano.github.io/wdd230/chamber/');});
document.querySelector('.logo').addEventListener('click',() => {location.assign('https://jacobsanchezbejarano.github.io/wdd230/chamber/');});
document.querySelector('.header-title').addEventListener('click',() => {location.assign('https://jacobsanchezbejarano.github.io/wdd230/chamber/');});

document.querySelector('.logo').alt = "Chamber of Commerce of Santa Cruz, Logo";
document.querySelector('div .logo-footer').alt = "Chamber of Commerce of Santa Cruz, Logo";