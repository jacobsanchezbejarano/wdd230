const url = 'https://api.openweathermap.org/data/2.5/weather?id=5334223&appid=f746895a29fa3ee7904fcaf5d882df25&units=metric';
const url_2 = 'https://api.openweathermap.org/data/2.5/forecast/?id=5334223&appid=f746895a29fa3ee7904fcaf5d882df25&units=metric';




const date1 = new Date(Date.now());

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

  async function apiFetchForecast() {
    try {
      const response = await fetch(url_2);
      if (response.ok) {
        const data = await response.json();
        //console.log(data.list[0].dt_txt + " " +data.list[0].main.temp); // this is for testing the call
        
        print_forecast(data);
        //set_weather_data(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }



  apiFetchForecast();
  const forecast_el = document.querySelector('.forecast');


function print_forecast(data){
  
  let aux = 0;
  let day1 = data.list[aux].dt_txt;

  if(day1 > date1){
    let day1_temp = data.list[aux].main.temp;
    aux += 8;
    let day2 = data.list[aux].dt_txt;
    let day2_temp = data.list[aux].main.temp;
    aux += 8;
    let day3 = data.list[aux].dt_txt;
    let day3_temp = data.list[aux].main.temp;
  
    forecast(day1, day1_temp);
    forecast(day2, day2_temp);
    forecast(day3, day3_temp);
  }else{
    aux = 4;
    let day1 = data.list[aux].dt_txt;
    let day1_temp = data.list[aux].main.temp;
    aux += 8;
    let day2 = data.list[aux].dt_txt;
    let day2_temp = data.list[aux].main.temp;
    aux += 8;
    let day3 = data.list[aux].dt_txt;
    let day3_temp = data.list[aux].main.temp;
  
    forecast(day1, day1_temp);
    forecast(day2, day2_temp);
    forecast(day3, day3_temp);
  }


}

function forecast(day, temp){
  
 const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday','Monday'];


    let div = document.createElement("div");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    day = new Date(day);
    day = day.getDay();
    p.textContent = days[day];
    p2.textContent = temp + " °C";


    div.appendChild(p);
    div.appendChild(p2);


    forecast_el.appendChild(div);

}

function set_weather_data(weatherData){
    const el_temperature = document.querySelector('#temperature');
    const el_description_temperature = document.querySelector('#description-temperature');
    const el_humidity = document.querySelector('#el-humidity');

    const place = document.querySelector('#place').textContent = weatherData.name;

    const weatherIcon = document.querySelector('#weather-icon');

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    const T = weatherData.main.temp;
    
    
    el_temperature.textContent = T.toFixed(0) + "°C";
    el_description_temperature.textContent = desc;
    el_humidity.textContent = weatherData.main.humidity;

}
