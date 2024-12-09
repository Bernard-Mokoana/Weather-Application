document.addEventListener('DOMContentLoaded', () => {
  const cityInput = document.getElementById('city-input');
  const getWeatherBtn = document.getElementById('get-weather-btn');
  const weatherInfo = document.getElementById('weather-info');
  const cityNameDisplay = document.getElementById('city-name');
  const temperatureDisplay = document.getElementById('temperature');
  const descriptionDisplay = document.getElementById('description');
  const errorMessage = document.getElementById('error-message');

  const API_KEY = "6b7b0e85a585258a44e93cdfdfb7dd9b";

  
  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if(!city) return;

    resetWeatherDisplay();

    try {
     const weatherData = await fetchWeatherData(city);
     displayWeatherData(weatherData);
    } catch (error) {
      showError("City not found. Please check the name and try again");
    }
  });

  cityInput.addEventListener('keydown', async (e) => {
    if(e.key === "Enter") {
       city = cityInput.value.trim();
      if(!city) return;

      resetWeatherDisplay();

      try {
        const weatherData = await fetchWeatherData(city);
        displayWeatherData(weatherData);
       } catch (error) {
         showError("City not found. Please check the name and try again.");
       }
    }
  });

  async function fetchWeatherData(city) {
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&units=metric&appid=${API_KEY}`;
    console.log('Fetching data from: ${url}');
    
    const response = await fetch(url);
    console.log("Response Status:" , response.status);
    // console.log(typeof response);
    // console.log("RESPONSE", response);

    if(!response.ok){
      console.error("Error fetcing data:", response.statusText);
      throw new Error("City Not Found");
    }

    const data = await response.json();
    console.log("Weather Data:", data);
    return data;
  }

  function displayWeatherData(data) {
    console.log(data);
    const {name, main, weather} = data;
    console.log("Displaying weather data:", data);
    cityNameDisplay.textContent = name;
    temperatureDisplay.textContent = `Temperature : ${main.temp}`;
    descriptionDisplay.textContent = `Weather : ${weather[0].description}`;

    weatherInfo.classList.remove('hidden');
    errorMessage.classList.add('hidden');
   
    }

  function showError(message) {
    console.error("Error:", message);
    errorMessage.textContent = message;
    weatherInfo.classList.add('hidden');
    errorMessage.classList.remove('hidden');
  }

  function resetWeatherDisplay() {
    console.log("Resetting weather display");
    cityNameDisplay.textContent = "";
    temperatureDisplay.textContent = "";
    descriptionDisplay.textContent = "";

    weatherInfo.classList.add('hidden');
    errorMessage.classList.add('hidden');
  }
});