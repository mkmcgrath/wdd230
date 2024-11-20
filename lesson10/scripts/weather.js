// select HTML elements in the document
  const currentTemp = document.querySelector('#current-temp');
  const weatherIcon = document.querySelector('#weather-icon');
  const captionDesc = document.querySelector('figcaption');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.749916748107054&lon=6.637043620247713&units=imperial&appid=ee9b2a01febf2911fa5e1c68c051b980';



function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}


async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

