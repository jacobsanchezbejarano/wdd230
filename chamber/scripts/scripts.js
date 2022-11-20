const url = 'https://api.openweathermap.org/data/2.5/weather?id=3904906&appid=f746895a29fa3ee7904fcaf5d882df25&units=metric';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        set_weather_data(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    
  }

  apiFetch();


function set_weather_data(weatherData){
    const el_temperature = document.querySelector('#temperature');
    const el_description_temperature = document.querySelector('#description-temperature');
    const el_wind_speed = document.querySelector('#wind-speed');
    const el_wind_chill = document.querySelector('#wind-chill');

    const place = document.querySelector('#place').textContent = weatherData.name;

    const weatherIcon = document.querySelector('#weather-icon');

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    const T = weatherData.main.temp;
    const V = weatherData.wind.speed;

    let windchill = 0; 

    if (T <= 10 && V > 4.8){

        windchill = 13.12 + 0.6215 * T - 11.37 * V ** 0.16 + 0.3965 * T * V ** 0.16;
        windchill = windchill.toFixed(1);

    }else{

        windchill = "N/A";
    
    }
    
    el_temperature.textContent = T.toFixed(0) + "°C";
    el_description_temperature.textContent = desc;
    el_wind_speed.textContent = "Wind speed: " + V + " km/h";
    el_wind_chill.textContent = "Wind chill: " + windchill;

}


