class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.lastUpdate = document.getElementById('w-lastUpdate');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    const tempCelsius = Math.round((weather.main.temp - 273.15) * 10) / 10;
    const tempFahrenheit = Math.round((tempCelsius * 9) / 5 + 32);
    const feelsLikeCelsius =
      Math.round((weather.main.feels_like - 273.15) * 10) / 10;
    const feelsLikeFahrenheit = Math.round((feelsLikeCelsius * 9) / 5 + 32);
    const windMiles = Math.round((weather.wind.speed / 1.609) * 10) / 10;

    this.location.textContent = weather.name + ', ' + weather.sys.country;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = `${tempCelsius} °C (${tempFahrenheit} °F)`;
    this.icon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
    this.feelsLike.textContent = `Feels Like: ${feelsLikeCelsius} °C (${feelsLikeFahrenheit} °F)`;
    this.wind.textContent = `Wind: ${weather.wind.speed} km/h (${windMiles} mp/h)`;
    this.lastUpdate.textContent = `Last Updated: ${new Date(
      weather.dt
    ).toLocaleTimeString()}`;
  }
}
