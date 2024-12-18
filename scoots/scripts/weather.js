// select HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidityElement = document.querySelector('#humidity');
const forecastTemp = document.querySelector('#forecast-temp');

const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=20.422268&lon=-86.922405&units=imperial&appid=ee9b2a01febf2911fa5e1c68c051b980';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.422268&lon=-86.922405&units=imperial&appid=ee9b2a01febf2911fa5e1c68c051b980';

function displayCurrentWeather(data) {
  // current temp
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;

  //  current humidity
  humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
  //humidityElement.textContent = `Humidity: ${data.main.weather.humidity}%`;

  // show weather icon and description
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  //  weatherIcon.setAttribute('alt', description);
  //  uncomment if broken
  captionDesc.textContent = `${data.weather[0].main} - ${desc}`;
}

function displayForecastWeather(data) {
  // ge the forecast for the next day at 2pm
  const nextDayForecast = data.list.find((item) => item.dt_txt.includes('15:00:00'));
  if (nextDayForecast) {
    forecastTemp.innerHTML = `Tomorrow's Temp at 3:00 PM: ${nextDayForecast.main.temp}&deg;F`;
  } else {
    forecastTemp.textContent = 'No forecast data available for 3:00 PM tomorrow.';
  }
}

async function fetchWeatherData() {
  try {
    // get current weather data
    const currentResponse = await fetch(currentWeatherUrl);
    if (currentResponse.ok) {
      const currentData = await currentResponse.json();
      displayCurrentWeather(currentData);
    } else {
      // handle an error in case it happens
      throw new Error(await currentResponse.text());
    }

    // get forecast data
    const forecastResponse = await fetch(forecastUrl);
    if (forecastResponse.ok) {
      const forecastData = await forecastResponse.json();
      displayForecastWeather(forecastData);
    } else {
      throw new Error(await forecastResponse.text());
    }
  } catch (error) {
    // in case something goes wrong
    console.error('Error fetching weather data:', error);
  }
}

fetchWeatherData();

