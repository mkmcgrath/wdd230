const highTempMessage = document.createElement('div');
highTempMessage.id = 'high-temp-message';
highTempMessage.style.cssText = `
  position: fixed;
  top: 70px;
  left: 35%;
  right: 35%;
  width: 30%;
  background-color: #ffcccb;
  color: #000;
  padding: 10px;
  text-align: center;
  z-index: 1000;
  border-radius: 30px;
`;

const closeButton = document.createElement('button');
closeButton.textContent = 'X';
closeButton.style.cssText = `
  margin-left: 20px;
  background-color: #000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

closeButton.addEventListener('click', () => {
  highTempMessage.style.display = 'none'; //change message to disappear when button clicked
});

highTempMessage.appendChild(closeButton);
document.body.prepend(highTempMessage);

const apiKey = 'ee9b2a01febf2911fa5e1c68c051b980';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=20.422268&lon=-86.922405&units=imperial&appid=${apiKey}`;

async function fetchTempMax() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      const highTemp = data.main.temp_max;
      highTempMessage.innerHTML = `The high temperature for today is ${highTemp}&deg;F`;
      highTempMessage.appendChild(closeButton);
    } else {
      throw new Error('Failed to fetch weather data.');
    }
  } catch (error) {
    console.error(error);
    highTempMessage.innerHTML = 'Error fetching weather information.';
    //highTempMessage.error = 'Error fetching weather information.';

    highTempMessage.appendChild(closeButton);
  }
}

fetchTempMax();

