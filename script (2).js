// Function to fetch weather data from OpenWeatherMap API
async function fetchWeatherData(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

// Function to display weather data on the UI
function displayWeatherData(weatherData) {
    const weatherInfoDiv = document.getElementById('weather-info');
    if (!weatherData) {
        weatherInfoDiv.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
        return;
    }

    const city = weatherData.name;
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;

    weatherInfoDiv.innerHTML = `
        <h2>Weather in ${city}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
    `;
}

// Function to initialize WeatherVue
async function initializeWeatherVue() {
    const defaultCity = 'New York'; // Default city to display weather data
    const weatherData = await fetchWeatherData(defaultCity);
    displayWeatherData(weatherData);
}

// Initialize WeatherVue when the page loads
document.addEventListener('DOMContentLoaded', initializeWeatherVue);
