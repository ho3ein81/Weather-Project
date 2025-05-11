let apiKey = "1e3e8f230b6064d27976e41163a82b77";

document.getElementById('getWeather').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value.trim();
  if (city === '') {
    alert('Please enter a city name.');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then(data => {
      const weatherInfo = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>${data.weather[0].description}</p>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon" />
      `;
      document.getElementById('weatherInfo').innerHTML = weatherInfo;
    })
    .catch(error => {
      document.getElementById('weatherInfo').innerHTML = `<p>${error.message}</p>`;
    });
});
