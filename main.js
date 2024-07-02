document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'ВАШ_API_КЛЮЧ';
    const city = 'Kyiv,UA'; 
    const apiUrl = `https://sinoptik.ua/%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0-%D0%BA%D0%B8%D0%B5%D0%B2`;

    const weatherInfoElement = document.getElementById('weather-info');
    const refreshButton = document.getElementById('refresh-button');

    async function fetchWeather() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (response.ok) {
                const { main, weather } = data;
                weatherInfoElement.innerHTML = `
                    <div>Температура: ${main.temp} °C</div>
                    <div>Описание: ${weather[0].description}</div>
                `;
            } else {
                weatherInfoElement.innerHTML = `Ошибка: ${data.message}`;
            }
        } catch (error) {
            weatherInfoElement.innerHTML = `Ошибка: ${error.message}`;
        }
    }

    
    fetchWeather();

    
    refreshButton.addEventListener('click', fetchWeather);
});
