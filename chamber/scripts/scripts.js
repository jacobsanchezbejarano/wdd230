const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c15db17fc3msh24a23cb9ae56214p151591jsn7bbb26185115',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

fetch('https://yahoo-weather5.p.rapidapi.com/weather?lat=-17.770253&long=-63.182201&format=json&u=c', options)
	.then(response => response.json())
	.then(response => set_weather_data(response))
	.catch(err => console.error(err));

function set_weather_data(response){
    el_temperature = document.querySelector('#temperature');
    el_description_temperature = document.querySelector('#description-temperature');
    el_wind_speed = document.querySelector('#wind-speed');

    el_temperature.textContent = response.current_observation.condition.temperature + "°C";
    el_description_temperature.textContent = response.current_observation.condition.text;
    el_wind_speed.textContent = "Wind speed: " + response.current_observation.wind.speed + " km/h";

}


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



function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburguerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburguerBtn');

x.onclick = toggleMenu;

article = document.querySelector('#message');

weekday = date.getDay();

if (weekday === 1 || weekday === 2){
    article.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    article.setAttribute('class', 'banner-message');
}

