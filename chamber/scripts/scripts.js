function set_weather_data(){
    const T = parseFloat(document.querySelector('#el-temperature').textContent);
    const V = parseFloat(document.querySelector('#el-windspeed').textContent);
    
    const el_wind_chill = document.querySelector('#el-windchill');

    let windchill = 0; 

    if (T <= 10 && V > 4.8){

        windchill = 13.12 + 0.6215 * T - 11.37 * V ** 0.16 + 0.3965 * T * V ** 0.16;
        windchill = windchill.toFixed(1);

    }else{

        windchill = "N/A";
    
    }
    
    el_wind_chill.textContent = windchill;

}


set_weather_data();


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


/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

fetch('https://yahoo-weather5.p.rapidapi.com/weather?lat=-17.770253&long=-63.182201&format=json&u=c', options)
	.then(response => response.json())
	.then(response => set_weather_data(response))
	.catch(err => console.error(err));

function set_weather_data(response){
    const el_temperature = document.querySelector('#temperature');
    const el_description_temperature = document.querySelector('#description-temperature');
    const el_wind_speed = document.querySelector('#wind-speed');
    const el_wind_chill = document.querySelector('#wind-chill');

    const T = response.current_observation.condition.temperature;
    const V = response.current_observation.wind.speed;

    let windchill = 0; 

    if (T <= 10 && V > 4.8){

        windchill = 13.12 + 0.6215 * T - 11.37 * V ** 0.16 + 0.3965 * T * V ** 0.16;
        windchill = windchill.toFixed(1);

    }else{

        windchill = "N/A";
    
    }
    
    el_temperature.textContent = T + "°C";
    el_description_temperature.textContent = response.current_observation.condition.text;
    el_wind_speed.textContent = "Wind speed: " + V + " km/h";
    el_wind_chill.textContent = "Wind chill: " + windchill;

}

*/
