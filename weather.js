class Weather {
  constructor(city, state) {
    this.apiKey = '90523b7a54cca2f19f1d1eb827bc2d0f';
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
